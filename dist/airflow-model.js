// Steady-state airflow for one battery-agitation branch, from the drawing's 45 kg/cm² MP air supply.
// Pressures (gauge, kg/cm²) step down through the shut-off, auto reducer (0.45), hand reducer (0.13–0.16,
// or bypassed at 0.45) and filter. Mass leaves only through the 12 cell orifices and the safety valve (above its
// 0.2 kg/cm² setting, or always when held open); dead-end lines (gauge, distribution stubs) hold pressure with no flow.
// Mass is conserved: supply = cells + relief for every branch. Air is an ideal gas at 20 °C.
// Estimated, not measured: pipe/hose bores, orifice and relief sizes, filter loss coefficient (see EST).

export const KGF = 98066.5;                  // Pa per kg/cm²
const PATM = 101325, R = 287.05, T = 293.15, G = 9.81, CD = 0.6;
export const EST = {
  pipeID: 0.0158,        // 1/2" Sch 40 PVC bore, m (catalog value for the main pipe)
  hoseID: 0.004,         // clear battery hose bore, m (estimate)
  orificeD: 0.0001,      // one cell air orifice per plate, m (battery detail view default)
  orifices: 12,
  head: 0.204,           // electrolyte depth above the orifices, m (battery detail view default)
  electrolyte: 1280,     // kg/m³ (sp. gravity 1.28)
  reliefD: 0.003,        // safety valve effective relief orifice, m (estimate)
  filterK: 8             // filter element loss coefficient (estimate)
};
const area = d => Math.PI * d * d / 4;
export const density = pg => (PATM + pg * KGF) / (R * T);           // kg/m³ at gauge pressure pg (kg/cm²)
// orifice mass flow, kg/s, for pressure difference dp (Pa) with upstream gauge pressure pg (kg/cm²)
// Below the critical ratio: incompressible orifice equation. At 45 kg/cm² the flow is choked (sonic), so the
// compressible form is used: m = Cd·A·P0·sqrt(γ/(R·T))·(2/(γ+1))^((γ+1)/(2(γ−1))).
const GAMMA = 1.4, CHOKE = Math.pow(2 / (GAMMA + 1), GAMMA / (GAMMA - 1));            // p_down / p_up ≈ 0.528
const orifice = (d, dp, pg) => {
  if (dp <= 0) return 0;
  const p0 = PATM + pg * KGF, pd = p0 - dp;
  if (pd / p0 <= CHOKE) return CD * area(d) * p0 * Math.sqrt(GAMMA / (R * T)) * Math.pow(2 / (GAMMA + 1), (GAMMA + 1) / (2 * (GAMMA - 1)));
  return CD * area(d) * Math.sqrt(2 * density(pg) * dp);
};

export function branchFlow({ supply = 45, open, hand, handSet, auto = 0.45, safety = 0.2, ventAlways = false, batteries = 1 }) {
  const st = { supply, afterShutoff: open ? supply : 0, afterAuto: open ? auto : 0, afterHand: 0, afterFilter: 0 };
  if (!open) return { ...st, mCells: 0, mRelief: 0, mBranch: 0, v: {}, filterDp: 0 };
  st.afterHand = hand ? handSet : auto;
  const headP = EST.electrolyte * G * EST.head;
  // filter loss depends on the flow through it, so settle the line pressure in a few passes
  let line = st.afterHand, mCells = 0, mRelief = 0, filterDp = 0;
  for (let k = 0; k < 4; k++) {
    mCells = batteries * EST.orifices * orifice(EST.orificeD, line * KGF - headP, line);
    // relief valve: lifts above its setting; when held open (ventAlways) the whole line pressure drives the flow
    mRelief = ventAlways ? orifice(EST.reliefD, line * KGF, line) : line > safety ? orifice(EST.reliefD, (line - safety) * KGF, line) : 0;
    const v = (mCells + mRelief) / (density(st.afterHand) * area(EST.pipeID));
    filterDp = EST.filterK * 0.5 * density(st.afterHand) * v * v / KGF;
    line = st.afterHand - filterDp;
  }
  st.afterFilter = line;
  const mBranch = mCells + mRelief, vel = (m, pg, d = EST.pipeID) => m / (density(pg) * area(d));
  return {
    ...st, mCells, mRelief, mBranch, filterDp,
    v: {                                                     // m/s in each pipe section
      header: vel(mBranch, supply), hp: vel(mBranch, supply), auto: vel(mBranch, auto),
      hand: vel(mBranch, st.afterHand), filter: vel(mBranch, line), manifold: vel(mCells, line),
      hose: vel(mCells / batteries, line, EST.hoseID), safety: vel(mRelief, line)   // one hose per battery
    }
  };
}
