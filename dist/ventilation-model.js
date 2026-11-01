// Air flows, pit hydrogen and burner temperatures for the 3rd battery pit ventilation circuit.
// Flows are m³/h. Blowers 1/2 draw pit air through 122, the filter and the H₂ burners (flaps 103), then the cooler and
// 109/110, and return it to the compartment through 114; with 117 open part of it goes back into the pit. The galley
// blower draws from the pit through 134 and/or from the compartment through its flap. 123 + 58 vent the pit overboard by
// natural draught. A main blower needs an outlet: 114 (compartment) and/or 117 (return to the pit). The batteries gas H₂ while the circuit runs; the burners recombine it and heat the air, the cooler
// takes the heat back out.
// Estimated, not measured: blower duty, pit volume, H₂ generation, burner and cooler behaviour (see EST).

export const EST = {
  blowerQ: 600,       // m³/h per main blower at full speed
  galleyQ: 300,       // m³/h galley blower at full speed
  draughtQ: 120,      // m³/h natural exhaust through 123 + 58 (40 % of it with the inlet shut)
  recirc: 0.3,        // share of the blower discharge sent back into the pit when 114 and 117 are both open
  leak: 0.1,          // share of the suction the pit can still refill by leakage with the inlet shut
  pitVolume: 60,      // m³ free air in the pit
  h2Gen: 2.4,         // m³/h of H₂ from the 8 cells on charge (0.4 % with one blower)
  ductArea: 0.03,     // m² cooler face, for the V (air velocity) reading
  ambient: 25,        // °C
  heater: 60,         // °C catalyst rise above ambient while air flows through a burner
  perPercent: 85,     // °C rise per 1 % H₂ burnt (≈ the adiabatic rise of a lean H₂/air mixture)
  lightOff: 70,       // °C at which the catalyst starts to recombine H₂
  coolerEff: 0.88,    // share of the temperature rise the cooler removes
  burnerTau: 4,       // s, burner heat-up / cool-down time constant (real time)
  coolerTau: 3        // s
};
export const ALARM = 2, DANGER = 4;       // % H₂ in the pit air (4 % = lower explosive limit)

// s: {open:{v58,v123,v122,v134,v109,v110,v114,v117,vin}, flap:{a,b,g}, speed:{b1,b2,bg}} (speed 0..1)
// A blower only moves air while running; flow never passes a stopped blower or a closed valve / flap.
export function ventFlows(s) {
  const o = s.open, f = s.flap, suction = o.v122 && (f.a || f.b), blocked = {};
  const main = (k, valve) => { const ok = suction && valve && (o.v114 || o.v117); if (s.speed[k] > 0.02 && !ok) blocked[k] = true; return ok ? EST.blowerQ * s.speed[k] : 0; };
  let q1 = main('b1', o.v109), q2 = main('b2', o.v110);
  const gOk = o.v134 || f.g, qg = gOk ? EST.galleyQ * s.speed.bg : 0;
  if (s.speed.bg > 0.02 && !gOk) blocked.bg = true;
  let qgPit = qg * (o.v134 ? (f.g ? 0.5 : 1) : 0);
  let draught = o.v123 && o.v58 ? EST.draughtQ * (o.vin ? 1 : 0.4) : 0;
  let recirc = o.v117 ? (o.v114 ? EST.recirc : 1) * (q1 + q2) : 0, out = q1 + q2 + qgPit + draught, starved = false;
  // with the inlet shut the pit refills only from 117 and leakage, which throttles everything drawing on it
  if (!o.vin && out > 0) {
    const k = Math.min(1, (recirc + EST.leak * out) / out);
    if (k < 1) { q1 *= k; q2 *= k; qgPit *= k; recirc *= k; starved = true; }
    out = q1 + q2 + qgPit;
  }
  const qm = q1 + q2, flaps = (f.a ? 1 : 0) + (f.b ? 1 : 0);
  return {
    q1, q2, qm, qg, qgPit, qgRoom: qg - qgPit, recirc, draught, out, starved, blocked,
    qa: f.a && flaps ? qm / flaps : 0, qb: f.b && flaps ? qm / flaps : 0,
    header: qm + qgPit, toCompt: qm - recirc, inlet: o.vin ? Math.max(0, out - recirc) : 0,
    velocity: qm / 3600 / EST.ductArea          // m/s through the cooler
  };
}

// Advance the pit and burners. st: {h2 (%), Ta, Tb, Tcool (°C)}; dtH simulated hours (H₂), dtS real seconds (heat);
// lit: {a, b} burner switched ON — it heats and burns H₂ only while ON with air flowing through it.
export function stepPit(st, fl, dtH, dtS, gassing, lit = { a: true, b: true }) {
  const eta = T => 0.95 * Math.min(1, Math.max(0, (T - EST.lightOff) / 40));
  const qm = fl.qa + fl.qb, burnt = qm > 0 ? (fl.qa * eta(st.Ta) + fl.qb * eta(st.Tb)) / qm : 0;
  const after = st.h2 * (1 - burnt);                                   // % H₂ leaving the burners
  const dh = (gassing ? EST.h2Gen / EST.pitVolume * 100 : 0) - (fl.out * st.h2 - fl.recirc * after) / EST.pitVolume;
  st.h2 = Math.max(0, st.h2 + dh * dtH);
  const amb = EST.ambient, k = tau => 1 - Math.exp(-dtS / tau);
  const target = (q, on) => q > 0 && on ? amb + EST.heater + EST.perPercent * st.h2 : amb;
  st.Ta += (target(fl.qa, lit.a) - st.Ta) * k(EST.burnerTau);
  st.Tb += (target(fl.qb, lit.b) - st.Tb) * k(EST.burnerTau);
  const mix = qm > 0 ? (fl.qa * st.Ta + fl.qb * st.Tb) / qm : amb;
  st.Tcool += ((qm > 0 ? amb + (1 - EST.coolerEff) * (mix - amb) : amb) - st.Tcool) * k(EST.coolerTau);
  st.after = after; st.burnt = burnt;
  return st;
}
