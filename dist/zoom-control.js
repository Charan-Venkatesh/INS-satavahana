// Zoom and pan for the touchscreen circuits (client: "add features of zooming").
// + / − / reset buttons, two-finger pinch, trackpad pinch or Ctrl + wheel, and one-finger drag to move once zoomed in.
// The circuit owns its camera: it reads Z.z (zoom) and Z.px / Z.py (pan, world units) in its layout() and clamps them.
//   surface   element that receives the gestures (the WebGL canvas, so taps on valve buttons are untouched)
//   worldPerPx() world units per screen pixel at the current zoom
//   apply()   re-run the circuit's layout after a change
//   baseDrag(dx) optional: what a one-finger drag does at zoom 1 (Circuit 3 scrolls sideways)
export function attachZoom(surface, { worldPerPx, apply, baseDrag = null, min = 1, max = 4 }) {
  const Z = { z: 1, px: 0, py: 0 };
  const centre = () => { const r = surface.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
  function zoomAt(nz, sx, sy) {                       // keep the point under (sx, sy) where it is
    nz = Math.min(max, Math.max(min, nz)); if (Math.abs(nz - Z.z) < 1e-4) return;
    const [cx, cy] = centre(), k = worldPerPx();
    Z.px += (sx - cx) * k * (1 - Z.z / nz); Z.py += (sy - cy) * k * (1 - Z.z / nz);
    Z.z = nz; if (Z.z === 1) { Z.px = 0; Z.py = 0; } apply(); sync();
  }
  const reset = () => { Z.z = 1; Z.px = 0; Z.py = 0; apply(); sync(); };

  // buttons
  const st = document.createElement('style');
  st.textContent = `.zoom-ctl{position:fixed;right:18px;bottom:18px;z-index:40;display:flex;flex-direction:column;gap:8px}
.zoom-ctl button{width:clamp(48px,3.2vw,72px);height:clamp(48px,3.2vw,72px);border-radius:14px;border:0;background:linear-gradient(180deg,#1b5574,#0d2536);color:#fff;font:800 clamp(22px,1.5vw,34px)/1 Arial,sans-serif;box-shadow:0 6px 18px #0b2a3d55;cursor:pointer;touch-action:manipulation}
.zoom-ctl button:active{transform:scale(.94)}.zoom-ctl button:disabled{opacity:.4}
.zoom-ctl .zl{font:800 clamp(11px,.7vw,15px)/1 Arial,sans-serif;color:#0d2536;background:#ffffffe6;border:1px solid #cfdde7;border-radius:10px;padding:6px 0;text-align:center}`;
  document.head.append(st);
  const ui = document.createElement('div'); ui.className = 'zoom-ctl'; ui.setAttribute('role', 'group'); ui.setAttribute('aria-label', 'Zoom');
  ui.innerHTML = '<button type="button" data-z="in" aria-label="Zoom in">+</button><div class="zl">100%</div><button type="button" data-z="out" aria-label="Zoom out">−</button><button type="button" data-z="reset" aria-label="Reset zoom">⟲</button>';
  document.body.append(ui);
  const label = ui.querySelector('.zl'), bIn = ui.querySelector('[data-z=in]'), bOut = ui.querySelector('[data-z=out]'), bReset = ui.querySelector('[data-z=reset]');
  function sync() { label.textContent = Math.round(Z.z * 100) + '%'; bIn.disabled = Z.z >= max; bOut.disabled = bReset.disabled = Z.z <= min; surface.style.cursor = Z.z > 1 ? 'grab' : ''; }
  ui.addEventListener('click', e => { const k = e.target.dataset?.z; if (!k) return; const [cx, cy] = centre(); if (k === 'in') zoomAt(Z.z * 1.4, cx, cy); else if (k === 'out') zoomAt(Z.z / 1.4, cx, cy); else reset(); });
  sync();

  // trackpad pinch (wheel + ctrlKey) or Ctrl/⌘ + mouse wheel
  surface.addEventListener('wheel', e => { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); e.stopPropagation(); zoomAt(Z.z * Math.exp(-e.deltaY * .0025), e.clientX, e.clientY); }, { passive: false });

  // touch / pen / mouse: pinch with two pointers, drag with one
  surface.style.touchAction = 'none';
  const pts = new Map(); let pinch = null, drag = null;
  surface.addEventListener('pointerdown', e => { surface.setPointerCapture?.(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), z: Z.z }; drag = null; }
    else if (pts.size === 1) drag = { x: e.clientX, y: e.clientY }; });
  surface.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pinch && pts.size >= 2) { const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch.d > 0) zoomAt(pinch.z * d / pinch.d, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); return; }
    if (drag) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
      if (Z.z > 1) { const k = worldPerPx(); Z.px -= dx * k; Z.py -= dy * k; apply(); surface.style.cursor = 'grabbing'; }
      else if (baseDrag) baseDrag(dx); }
  });
  const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) { drag = null; sync(); } };
  surface.addEventListener('pointerup', up); surface.addEventListener('pointercancel', up);
  return Z;
}
