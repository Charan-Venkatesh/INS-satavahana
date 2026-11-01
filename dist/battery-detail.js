// Battery detail view opened from the "i" button beside each battery: a transparent cell with 12 terminals,
// lead plates and an air diffuser under each plate, with bubbles sized and timed from orifice / bubble physics.
// Ported from the supplied stand-alone page; uses the app's bundled three.js (no CDN) so it also works offline.
import * as THREE from 'three';

const css = `
#battery-detail{width:min(960px,96vw);max-width:96vw;max-height:94dvh;padding:16px;border:1px solid #c4d7c8;border-radius:16px;background:#f4f5f7;color:#222;font-family:system-ui,Arial,sans-serif}
#battery-detail::backdrop{background:#193c3555}
#battery-detail .bd-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
#battery-detail h2{font-size:18px;margin:0}
#battery-detail .bd-views{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}
#battery-detail button{padding:6px 12px;cursor:pointer;border:1px solid #c4d7c8;border-radius:8px;background:#fff;font:inherit;font-size:13px}
#battery-detail .bd-panel,#battery-detail .bd-sliders,#battery-detail .bd-note{display:none!important}
#bd-c{width:100%;height:min(720px,74dvh);touch-action:none;cursor:grab;background:#e9ecef;border-radius:8px}
#battery-detail .bd-panel{margin-top:10px;padding:10px 12px;border:1px solid #ccc;border-radius:8px;font-size:13px;background:#fff}
#bd-ro{display:grid;grid-template-columns:1fr auto;gap:2px 14px;color:#555}
#bd-ro span:nth-child(even){color:#111;text-align:right}
#battery-detail .bd-sliders{display:grid;grid-template-columns:auto 1fr auto;gap:6px 10px;align-items:center;margin-top:10px;font-size:13px;color:#444}
#battery-detail .bd-note{font-size:12px;color:#555;margin-top:6px}
.battery-info{position:absolute;transform:translate(-50%,-50%);width:22px;height:22px;padding:0;line-height:18px;border-radius:50%;border:1.5px solid #2f5d50;background:#fff;color:#2f5d50;font:italic 700 12px/18px Georgia,serif;cursor:pointer;pointer-events:auto;box-shadow:0 2px 8px #193c3530;z-index:2}
.battery-info:hover{background:#2f5d50;color:#fff}
.battery-card{position:absolute;transform:translate(-50%,-50%);padding:0;border:1.5px solid #9fb8a7;border-radius:10px;background:#fbfbf8;cursor:pointer;pointer-events:auto;box-shadow:0 2px 10px #193c3522;overflow:hidden;z-index:2}
.battery-card img{width:100%;height:100%;object-fit:contain;display:block}
.battery-card .bi{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;border:1.5px solid #2f5d50;background:#fff;color:#2f5d50;font:italic 700 13px/19px Georgia,serif;text-align:center}
.battery-card:hover{border-color:#2f5d50}`;

const sliders = [
  ['sp', 'Air pressure (kgf/cm²)', 0.13, 0.45, 0.005, 0.145, 3],
  ['sd', 'Orifice dia. (mm)', 0.03, 0.3, 0.01, 0.10, 2],
  ['sg', 'Electrolyte sp. gravity', 1, 1.3, 0.01, 1.28, 2],
  ['sh2', 'Real battery height (cm)', 10, 60, 1, 25, 0],
  ['sv', 'Bubble display scale', 1, 3, 0.1, 1, 1],
  ['so', 'Case clarity', 0.05, 0.8, 0.01, 0.16, 2],
  ['sl', 'Length L (model)', 1, 3, 0.05, 1.9, 2],
  ['sw', 'Width W (model)', 0.6, 2, 0.05, 1, 2],
  ['sh', 'Height (model)', 1, 4, 0.05, 2.8, 2]
];

let dlg = null, api = null;

/* ---------- Shared: lid fittings as on the real EKM cell (photo) ---------- */
// Cream lid fittings: 12 stainless cups with stacked black rubber washers (4 threaded corner posts, one
// octagonal terminal), and the centre row: hose nipple (where the red cap was), yellow vent cylinder with
// square holes, clear cap with red bands, open threaded hole. Built in lid units: width W across x, length L
// along z, lid top at y = 0. Used by the battery detail view and by the main circuit's batteries.
let kit = null;
function lidKit() {
  if (kit) return kit;
  const M = (c, r, m) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256; const c = cv.getContext('2d');
  c.fillStyle = '#f2c56e'; c.fillRect(0, 0, 512, 256); c.fillStyle = '#2a2016';
  for (let r = 0; r < 4; r++) for (let k = 0; k < 12; k++) c.fillRect(k * 42.6 + (r % 2) * 21 + 8, 28 + r * 52, 20, 22);
  const ventTex = new THREE.CanvasTexture(cv); ventTex.colorSpace = THREE.SRGBColorSpace; ventTex.wrapS = THREE.RepeatWrapping;
  kit = {
    M, lidM: M(0xe8d9a0, 0.7, 0), steel: M(0xbcbcbc, 0.3, 0.9), rubberM: M(0x1d1f21, 0.8, 0), holeM: M(0x0e0f10, 0.9, 0),
    octM: M(0x3d4a3c, 0.55, 0.45), bronzeM: M(0x8a6a4a, 0.5, 0.6), redM: M(0xc8372b, 0.5, 0),
    clearM: new THREE.MeshPhysicalMaterial({ color: 0xf2f4f6, transparent: true, opacity: 0.45, roughness: 0.08, transmission: 0.4, side: THREE.DoubleSide }),
    hoseM: new THREE.MeshPhysicalMaterial({ color: 0xefe4b8, transparent: true, opacity: 0.6, roughness: 0.12, transmission: 0.5, side: THREE.DoubleSide }),
    ventM: new THREE.MeshStandardMaterial({ map: ventTex, roughness: 0.6 }), ventTopM: M(0xf2c56e, 0.6, 0)
  };
  return kit;
}
export function photoLid({ W = 1, L = 1.9, nippleHose = true, hose = nippleHose, centre = [1.3, 2.25, 3.4, 4.4] } = {}) {
  const k = lidKit(), group = new THREE.Group(), w = W, top = 0;
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; group.add(m); return m; };
  const cy = (r, h, seg) => new THREE.CylinderGeometry(r, r, h, seg || 40);
  const lathe = (pts, mat, x, y, z) => add(new THREE.LatheGeometry(pts.map(([r, h]) => new THREE.Vector2(r, h)), 48), mat, x, y, z);
  const zAt = n => (0.1 + 0.16 * n - 0.5) * L;
  function terminal(x, z, kind) {
    if (kind === 'oct') add(new THREE.CylinderGeometry(0.12 * w, 0.12 * w, 0.03 * w, 8), k.octM, x, 0.015 * w, z).rotation.y = Math.PI / 8;
    else lathe([[0, 0], [0.118 * w, 0], [0.12 * w, 0.012 * w], [0.112 * w, 0.03 * w], [0.09 * w, 0.026 * w], [0.08 * w, 0.012 * w], [0, 0.012 * w]], k.steel, x, 0, z);
    let yy = 0.012 * w;
    for (let i = 0; i < 4; i++) { add(cy((0.078 - i * 0.003) * w, 0.011 * w, 32), k.rubberM, x, yy + 0.0055 * w, z); yy += 0.012 * w; }
    add(cy(0.022 * w, 0.004 * w, 20), k.holeM, x, yy + 0.001 * w, z);                        // threaded hole
    if (kind === 'post') {                                                                  // threaded stainless post
      add(cy(0.02 * w, 0.3 * w, 16), k.steel, x, yy + 0.15 * w, z);
      for (let i = 0; i < 9; i++) add(new THREE.TorusGeometry(0.022 * w, 0.004 * w, 6, 20), k.steel, x, yy + 0.05 * w + i * 0.018 * w, z).rotation.x = Math.PI / 2;
    }
  }
  for (let row = 0; row < 2; row++) for (let n = 0; n < 6; n++)
    terminal((row ? 0.26 : -0.26) * W, zAt(n), n === 0 || n === 5 ? 'post' : row === 0 && n === 2 ? 'oct' : '');
  // hose nipple on an octagonal bronze base, where the red cap was; the clear air hose arches away
  let z = zAt(centre[0]);
  if (nippleHose) {
    add(new THREE.CylinderGeometry(0.085 * w, 0.085 * w, 0.015 * w, 8), k.bronzeM, 0, top + 0.0075 * w, z);
    add(cy(0.032 * w, 0.045 * w, 24), k.rubberM, 0, top + 0.037 * w, z);
    add(new THREE.CylinderGeometry(0.014 * w, 0.02 * w, 0.06 * w, 20), k.rubberM, 0, top + 0.09 * w, z);
    if (hose) {
      const curve = new THREE.CatmullRomCurve3([[0, top + 0.08, z], [0, top + 0.3, z], [-0.08, top + 0.48, z + 0.08], [-0.32, top + 0.52, z + 0.2], [-0.5, top + 0.42, z + 0.3]].map(a => new THREE.Vector3(...a)));
      add(new THREE.TubeGeometry(curve, 60, 0.022 * w, 12, false), k.hoseM, 0, 0, 0);
    }
  }
  // yellow vent cylinder with square holes: the vapour leaves through these
  z = zAt(centre[1]);
  add(cy(0.095 * w, 0.02 * w), k.rubberM, 0, top + 0.01 * w, z);
  add(new THREE.CylinderGeometry(0.085 * w, 0.085 * w, 0.22 * w, 48, 1, true), k.ventM, 0, top + 0.13 * w, z);
  add(cy(0.086 * w, 0.012 * w), k.ventTopM, 0, top + 0.246 * w, z);
  const vent = { x: 0, y: top + 0.02 * w, z, r: 0.085 * w, h: 0.22 * w }, nipple = new THREE.Vector3(0, top + 0.12 * w, zAt(centre[0]));
  // clear cylindrical cap with red bands on a stainless seat
  z = zAt(centre[2]);
  lathe([[0, 0], [0.105 * w, 0], [0.108 * w, 0.01 * w], [0.07 * w, 0.016 * w], [0, 0.016 * w]], k.steel, 0, top, z);
  add(cy(0.06 * w, 0.2 * w, 40), k.clearM, 0, top + 0.116 * w, z).castShadow = false;
  for (const [h, m] of [[0.06, k.redM], [0.08, k.redM], [0.12, k.rubberM]]) add(new THREE.TorusGeometry(0.061 * w, 0.004 * w, 6, 40), m, 0, top + h * w, z).rotation.x = Math.PI / 2;
  // open threaded hole
  z = zAt(centre[3]);
  add(new THREE.TorusGeometry(0.07 * w, 0.012 * w, 10, 40), k.steel, 0, top + 0.004 * w, z).rotation.x = Math.PI / 2;
  add(cy(0.05 * w, 0.003 * w, 32), k.holeM, 0, top + 0.002 * w, z);
  // the two small cream domes at the lid ends
  for (const e of [-0.45, 0.45]) add(new THREE.SphereGeometry(0.035 * w, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), k.lidM, 0, top, e * L);
  return { group, vent, nipple };
}

/* ---------- Shared: battery reference picture, posed like the supplied dimension drawing ---------- */
// Direction from the battery to the viewer in the drawing: above the corner where W and L meet.
const DRAWING_DIR = (() => { const th = 3.927, ph = 1.02; return new THREE.Vector3(Math.sin(ph) * Math.cos(th), Math.cos(ph), Math.sin(ph) * Math.sin(th)); })();

/* ---------- Shared: live 3D battery for the main circuit ---------- */
// Transparent case, electrolyte, 12 plates, photo lid with nipple, rising bubbles and white vent vapour, in
// battery units (W 1 × L 1.9 × H 2.8, base at y 0). `facing(up, back)` returns the rotation that shows it
// at the drawing's angle to a camera looking along -back with screen-up `up` (the main circuit's top view).
export function battery3D({ centre } = {}) {
  const W = 1, L = 1.9, H = 2.8, k = lidKit(), group = new THREE.Group();
  const add = (geo, mat, y, order) => { const m = new THREE.Mesh(geo, mat); m.position.y = y; if (order) m.renderOrder = order; group.add(m); return m; };
  add(new THREE.BoxGeometry(W * 0.96, H * 0.8, L * 0.96), new THREE.MeshStandardMaterial({ color: 0x7fd1c0, transparent: true, opacity: 0.35, depthWrite: false }), H * 0.42, 2);
  const plates = [];
  for (let row = 0; row < 2; row++) for (let n = 0; n < 6; n++) {
    const x = row ? 0.26 : -0.26, z = (0.1 + 0.16 * n - 0.5) * L;
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.2, H * 0.6, 0.035), new THREE.MeshStandardMaterial({ color: 0x6b6f75, roughness: 0.6, metalness: 0.6 }));
    m.position.set(x, 0.2 + H * 0.3, z); group.add(m); plates.push({ x, z });
  }
  add(new THREE.BoxGeometry(W, H, L), new THREE.MeshPhysicalMaterial({ color: 0xdcecf4, transparent: true, opacity: 0.22, roughness: 0.05, side: THREE.DoubleSide, depthWrite: false }), H / 2, 3);
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W, H, L)), new THREE.LineBasicMaterial({ color: 0x3d4a45 })); edges.position.y = H / 2; group.add(edges);
  add(new THREE.BoxGeometry(W * 1.02, 0.06, L * 1.02), k.lidM, H - 0.03);
  const lid = photoLid({ W, L, hose: false, centre }); lid.group.position.y = H; group.add(lid.group);
  // bubbles rising off each plate's diffuser to the electrolyte surface
  const per = 14, n = plates.length * per, liqTop = H * 0.82;
  const bub = new THREE.InstancedMesh(new THREE.SphereGeometry(0.028, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthWrite: false }), n);
  bub.renderOrder = 4; bub.frustumCulled = false; group.add(bub);
  const ph = Array.from({ length: n }, () => Math.random()), dummy = new THREE.Object3D();
  const vap = createVapour(420); lid.group.add(vap.points);
  function update(dt, level, uScale) {
    for (let i = 0; i < n; i++) {
      const p = plates[Math.floor(i / per)]; ph[i] = (ph[i] + dt * 0.55 * (0.8 + 0.4 * ((i * 37) % 10) / 10)) % 1;
      const on = level > 0 && ((i % per) / per) < 0.35 + 0.65 * level, y = 0.12 + ph[i] * (liqTop - 0.12);
      dummy.position.set(p.x + 0.06 * Math.sin(i * 1.7 + ph[i] * 9), y, p.z + 0.03 * Math.cos(i * 2.3 + ph[i] * 7)); dummy.scale.setScalar(on ? 0.7 + ph[i] * 0.6 : 0); dummy.updateMatrix(); bub.setMatrixAt(i, dummy.matrix);
    }
    bub.instanceMatrix.needsUpdate = true;
    vap.update(dt, level, lid.vent, uScale, false);
  }
  const nipple = lid.nipple.clone().add(new THREE.Vector3(0, H, 0));
  return { group, update, nipple, size: { W, L, H } };
}
export function facing(up, back) {
  // camera basis of the drawing view and of the target view; R maps one onto the other
  const basis = (z, upHint) => { const x = new THREE.Vector3().crossVectors(upHint, z).normalize(), y = new THREE.Vector3().crossVectors(z, x); return new THREE.Matrix4().makeBasis(x, y, z); };
  const from = basis(DRAWING_DIR.clone(), new THREE.Vector3(0, 1, 0)), to = basis(back.clone().normalize(), up.clone().normalize());
  return new THREE.Quaternion().setFromRotationMatrix(to.multiply(from.transpose()));
}
// Angled view from above the W–L corner, with dashed W, L and HEIGHT dimension arrows. Rendered once
// into an image; the main circuit shows it beside each battery.
let refUrl = null;
export function batteryReferenceImage() {
  if (refUrl) return refUrl;
  const W = 1, L = 1.9, H = 2.8, PX = 2, CW = 300, CH = 340;
  const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  ren.setPixelRatio(PX); ren.setSize(CW, CH);
  const scene = new THREE.Scene(), k = lidKit();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8a8a, 0.9 * Math.PI));
  const sun = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI); sun.position.set(-6, 10, -4); scene.add(sun);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35 * Math.PI); fill.position.set(6, 3, 5); scene.add(fill);
  const box = (w, h, l, mat, y) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, l), mat); m.position.y = y; scene.add(m); return m; };
  box(W * 0.96, H * 0.8, L * 0.96, new THREE.MeshStandardMaterial({ color: 0x7fd1c0, transparent: true, opacity: 0.35, depthWrite: false }), H * 0.42);
  for (let row = 0; row < 2; row++) for (let n = 0; n < 6; n++) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.2, H * 0.6, 0.035), new THREE.MeshStandardMaterial({ color: 0x6b6f75, roughness: 0.6, metalness: 0.6 }));
    m.position.set(row ? 0.26 : -0.26, 0.2 + H * 0.3, (0.1 + 0.16 * n - 0.5) * L); scene.add(m);
  }
  box(W, H, L, new THREE.MeshPhysicalMaterial({ color: 0xdcecf4, transparent: true, opacity: 0.22, roughness: 0.05, side: THREE.DoubleSide, depthWrite: false }), H / 2).renderOrder = 3;
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W, H, L)), new THREE.LineBasicMaterial({ color: 0x3d4a45 })); edges.position.y = H / 2; scene.add(edges);
  box(W * 1.02, 0.06, L * 1.02, k.lidM, H - 0.03);
  const lid = photoLid({ W, L, nippleHose: false }); lid.group.position.y = H; scene.add(lid.group);
  // camera from above the corner where W and L meet, as in the drawing
  const cam = new THREE.PerspectiveCamera(16, CW / CH, 1, 300), R = 15.2, tgt = new THREE.Vector3(0.1, H * 0.55, 0.1);
  cam.position.copy(DRAWING_DIR).multiplyScalar(R).add(tgt); cam.lookAt(tgt);
  ren.render(scene, cam);
  const cv = document.createElement('canvas'); cv.width = CW * PX; cv.height = CH * PX; const c = cv.getContext('2d');
  c.drawImage(ren.domElement, 0, 0); ren.dispose(); ren.forceContextLoss();
  const P = (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(cam); return [(v.x + 1) / 2 * cv.width, (1 - v.y) / 2 * cv.height]; };
  const hw = W / 2, hl = L / 2;
  function dim(a, b, off, text) {                          // dashed arrow offset from an edge, label at its middle
    const [ax, ay] = P(...a), [bx, by] = P(...b), [ox, oy] = off, x1 = ax + ox, y1 = ay + oy, x2 = bx + ox, y2 = by + oy;
    c.strokeStyle = '#33403b'; c.fillStyle = '#33403b'; c.lineWidth = 1.6 * PX;
    c.setLineDash([4 * PX, 3 * PX]); c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); c.setLineDash([]);
    for (const [x, y, dx, dy] of [[x1, y1, x2 - x1, y2 - y1], [x2, y2, x1 - x2, y1 - y2]]) {
      const l = Math.hypot(dx, dy), ux = dx / l, uy = dy / l, s = 7 * PX;
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + ux * s - uy * s * 0.45, y + uy * s + ux * s * 0.45); c.lineTo(x + ux * s + uy * s * 0.45, y + uy * s - ux * s * 0.45); c.fill();
    }
    c.save(); c.translate((x1 + x2) / 2 + ox * 0.9, (y1 + y2) / 2 + oy * 0.9);
    let ang = Math.atan2(y2 - y1, x2 - x1); if (ang > Math.PI / 2) ang -= Math.PI; if (ang < -Math.PI / 2) ang += Math.PI;
    c.rotate(ang); c.font = `${15 * PX}px Georgia,serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, 0, 0); c.restore();
  }
  // nearest top corner is (-hw, H, -hl): W runs along x from it, L along z, HEIGHT down the far-right edge
  dim([-hw, H, -hl], [hw, H, -hl], [-10 * PX, 14 * PX], 'W');
  dim([-hw, H, -hl], [-hw, H, hl], [10 * PX, 14 * PX], 'L');
  dim([-hw, H, hl], [-hw, 0, hl], [16 * PX, 0], 'HEIGHT');
  refUrl = cv.toDataURL('image/png');
  return refUrl;
}

/* ---------- Shared: white vapour leaving the yellow vent's square holes ---------- */
// Points in the vent's own frame. uScale converts lid units to pixels (perspective: divided by depth).
export function createVapour(count = 700) {
  const geo = new THREE.BufferGeometry(), pos = new Float32Array(count * 3), al = new Float32Array(count), sz = new Float32Array(count);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aAlpha', new THREE.BufferAttribute(al, 1)); geo.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
  const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uScale: { value: 400 }, uPersp: { value: 1 } },
    vertexShader: 'attribute float aAlpha;attribute float aSize;varying float vAl;uniform float uScale;uniform float uPersp;void main(){vAl=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=aSize*uScale/mix(1.,-mv.z,uPersp);}',
    fragmentShader: 'varying float vAl;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.6)*vAl;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(1.),vec3(.78,.82,.86),r*r),a);}' });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.renderOrder = 6;
  const parts = Array.from({ length: count }, () => ({ age: Math.random(), life: 1.2 + Math.random() * 0.8, live: false }));
  function update(dt, level, vent, uScale, perspective) {
    mat.uniforms.uScale.value = uScale; mat.uniforms.uPersp.value = perspective ? 1 : 0;
    for (let i = 0; i < count; i++) {
      const q = parts[i]; q.age += dt / q.life;
      if (q.age >= 1) { q.age %= 1; q.live = Math.random() < level; q.a = Math.random() * 6.283; q.h = 0.15 + Math.random() * 0.75; q.sp = 0.6 + Math.random() * 0.8; }
      if (!q.live || !vent) { al[i] = 0; continue; }
      const t = q.age, s = vent.r / 0.085, out = vent.r + t * 0.22 * q.sp * s, up = vent.y + q.h * vent.h + t * t * 0.55 * q.sp * s;
      pos[i * 3] = (vent.x || 0) + Math.cos(q.a) * out; pos[i * 3 + 1] = up; pos[i * 3 + 2] = vent.z + Math.sin(q.a) * out;
      sz[i] = (0.03 + t * 0.16) * s; al[i] = level * 0.85 * Math.min(1, t / 0.06) * Math.pow(1 - t, 1.2);
    }
    geo.attributes.position.needsUpdate = geo.attributes.aAlpha.needsUpdate = geo.attributes.aSize.needsUpdate = true;
  }
  return { points, update };
}

// Styles go in at load: the "i" buttons beside the batteries need them before the dialog is ever opened.
{ const style = document.createElement('style'); style.textContent = css; document.head.append(style); }

export function openBatteryDetail({ side, pressure }) {
  if (!dlg) build();
  dlg.querySelector('h2').textContent = 'Battery cell · ' + (side === 'stbd' ? 'STBD' : 'PORT') + ' — transparent with air bubbling';
  const sp = dlg.querySelector('#bd-sp');
  sp.value = String(Math.min(+sp.max, Math.max(+sp.min, pressure)));
  dlg.showModal();
  api.resize(); api.physChange(); api.start();
}

function build() {
  dlg = document.createElement('dialog'); dlg.id = 'battery-detail';
  dlg.innerHTML = `<div class="bd-head"><h2></h2><button id="bd-close">Close ×</button></div>
<div class="bd-views">
 <button data-view="drawing">Drawing view</button><button data-view="top">Top close-up</button>
 <button data-view="front">Front</button><button data-view="side">Side zoom</button>
 <button id="bd-rb">Auto-rotate: off</button><button id="bd-bb">Bubbles: on</button>
</div>
<div id="bd-c"></div>
<div class="bd-panel"><div style="font-weight:600;margin-bottom:6px">Air flow and bubble physics (live)</div><div id="bd-ro"></div></div>
<div class="bd-sliders">${sliders.map(([id, label, min, max, step, val]) => `<span>${label}</span><input type="range" id="bd-${id}" min="${min}" max="${max}" step="${step}" value="${val}"><span id="bd-v${id}"></span>`).join('')}</div>
<div class="bd-note">Pressure starts at this branch's PG reading (hand reducer ON 0.13–0.16, OFF 0.45 kgf/cm²). Assumptions: 12 air orifices (one under each plate), discharge coefficient 0.6, air at 20 °C, supply pressure measured at the orifices, surface tension 0.073 N/m. Drag to rotate, scroll or pinch to zoom.</div>`;
  document.body.append(dlg);
  api = scene3d(dlg);
  dlg.querySelector('#bd-close').onclick = () => dlg.close();
  dlg.addEventListener('close', () => api.stop());
}

function scene3d(root) {
  const $ = id => root.querySelector('#bd-' + id), val = id => +$(id).value;

  /* ---------- Scene, camera, renderer ---------- */
  const host = $('c');
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(16, 680 / 520, 1, 300);   // narrow FOV = near-axonometric like the drawing
  const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  ren.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  ren.shadowMap.enabled = true; ren.shadowMap.type = THREE.PCFSoftShadowMap;
  host.appendChild(ren.domElement);

  // Light intensities ×π: the supplied page used three r128 (legacy light units); the app bundles r170.
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8a8a, 0.9 * Math.PI));
  const sun = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI); sun.position.set(-6, 10, -4); sun.castShadow = true;
  sun.shadow.mapSize.width = 2048; sun.shadow.mapSize.height = 2048;
  const sc = sun.shadow.camera; sc.left = -8; sc.right = 8; sc.top = 8; sc.bottom = -8; sc.near = 1; sc.far = 40; scene.add(sun);
  const fl2 = new THREE.DirectionalLight(0xffffff, 0.35 * Math.PI); fl2.position.set(6, 3, 5); scene.add(fl2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: 0.2 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);

  /* ---------- Materials ---------- */
  const M = (c, r, m) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
  const plateM = M(0xa2a7ac, 0.45, 0.5), steel = M(0xbcbcbc, 0.3, 0.9), brass = M(0xc8a24a, 0.35, 0.85),
    darkM = M(0x2e2e2e, 0.6, 0.3), leadM = M(0x6b6f75, 0.6, 0.6);
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0xdcecf4, transparent: true, opacity: 0.16, roughness: 0.05, metalness: 0, side: THREE.DoubleSide, depthWrite: false });
  const liqM = new THREE.MeshStandardMaterial({ color: 0x7fd1c0, transparent: true, opacity: 0.3, roughness: 0.1, metalness: 0, depthWrite: false });
  const bubM = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, roughness: 0.05, metalness: 0.1, depthWrite: false });

  const g = new THREE.Group(); scene.add(g);      // battery
  const bg = new THREE.Group(); scene.add(bg);    // bubbles
  const bubGeo = new THREE.SphereGeometry(1, 12, 9);

  /* ---------- Helpers ---------- */
  function add(geo, mat, x, y, z, noShadow) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); if (!noShadow) { m.castShadow = true; m.receiveShadow = true; } g.add(m); return m; }
  const cy = (r, h, seg) => new THREE.CylinderGeometry(r, r, h, seg || 40);
  const hex = (R, h) => new THREE.CylinderGeometry(R, R, h, 6);

  /* ---------- Terminals (sizes scale with width w) ---------- */
  function facecap(x, y, z, r, w) {
    const t = add(new THREE.TorusGeometry(r, 0.012 * w, 8, 32), steel, x, y, z); t.rotation.x = Math.PI / 2;
    add(cy(r * 0.75, 0.006 * w), brass, x, y + 0.003 * w, z);
    add(cy(r * 0.22, 0.01 * w, 16), darkM, x, y + 0.006 * w, z);
  }
  function small(x, y, z, w) {                       // washer + hex nut + round post
    const rn = 0.12 * w; let yy = y;
    add(cy(rn * 1.04, 0.02 * w), steel, x, yy + 0.01 * w, z); yy += 0.02 * w;
    add(hex(rn, 0.11 * w), steel, x, yy + 0.055 * w, z).rotation.y = Math.PI / 6; yy += 0.11 * w;
    add(cy(0.082 * w, 0.17 * w), brass, x, yy + 0.085 * w, z); yy += 0.17 * w;
    facecap(x, yy, z, 0.066 * w, w);
  }
  function big(x, y, z, w) {                         // two stacked hex blocks + ring cap
    let yy = y;
    add(cy(0.17 * w, 0.02 * w), steel, x, yy + 0.01 * w, z); yy += 0.02 * w;
    add(hex(0.16 * w, 0.13 * w), steel, x, yy + 0.065 * w, z).rotation.y = Math.PI / 6; yy += 0.13 * w;
    add(hex(0.14 * w, 0.12 * w), steel, x, yy + 0.06 * w, z); yy += 0.12 * w;
    facecap(x, yy, z, 0.075 * w, w);
  }
  function centerHex(x, y, z, w) {                   // plain hexagon pads on the center line
    add(hex(0.1 * w, 0.06 * w), steel, x, y + 0.03 * w, z).rotation.y = Math.PI / 6;
  }

  /* ---------- State ---------- */
  const tgt = new THREE.Vector3(0, 1.4, 0);
  let tgtYT = 1.4, base0 = 20, curH = 2.8, curW = 1, curL = 1.9;
  let plates = [], liqTop = 2, bubOn = true;
  const ORY = 0.12;

  /* ---------- Bubble pool (instanced for speed) ---------- */
  const MAX = 2500;
  const inst = new THREE.InstancedMesh(bubGeo, bubM, MAX); inst.frustumCulled = false; inst.renderOrder = 4; bg.add(inst);
  const bub = [], dummy = new THREE.Object3D(); let freeList = [];
  for (let i = 0; i < MAX; i++) bub.push({ a: false });
  function resetPool() { freeList = []; for (let i = MAX - 1; i >= 0; i--) { bub[i].a = false; freeList.push(i); } }
  resetPool();

  /* ---------- Physics ---------- */
  const G = 9.81, PATM = 101325, KGF = 98066.5, CD = 0.6, SIGMA = 0.073;
  const P = { Q: 0, db: 0, f: 0, u: 0, dPe: 0, s: 0.09, depth: 0, Ph: 0, Pg: 0, rho: 1280, dispScale: 1, tRise: 0, alive: 0, hold: 0, acc: [] };

  // rise speed of a bubble of diameter d (Mendelson wave analogy, damped for small bubbles)
  const mendelson = (d, rho) => Math.sqrt(2 * SIGMA / (rho * d) + G * d / 2) * Math.tanh(d / 0.0015);

  function physUpdate() {
    const Pg = val('sp') * KGF;                                   // supply pressure, Pa (gauge)
    const SG = val('sg'), rho = 1000 * SG;                       // electrolyte density
    const d0 = val('sd') * 1e-3;                                 // orifice diameter, m
    const Hreal = val('sh2') / 100;                              // real battery height, m
    const s = Hreal / curH;                                      // metres per model unit
    const depth = (liqTop - ORY) * s, Ph = rho * G * depth, dPe = Pg - Ph;   // hydrostatic head and net pressure
    let Q = 0, db = 0, f = 0, u = 0;
    if (dPe > 0) {
      const rhog = 1.204 * (PATM + Pg) / PATM, A = Math.PI * d0 * d0 / 4;
      const v0 = CD * Math.sqrt(2 * dPe / rhog);                 // orifice gas velocity
      Q = A * v0;                                                // flow per orifice, m3/s
      const Vt = Math.PI * d0 * SIGMA / (rho * G);               // Tate (static) bubble volume
      const Vd = 1.378 * Math.pow(Q, 1.2) / Math.pow(G, 0.6);    // Davidson-Schuler (constant flow)
      const V = Math.max(Vt, Vd);
      db = Math.cbrt(6 * V / Math.PI); f = Q / V; u = mendelson(db, rho);
    }
    Object.assign(P, { Q, db, f, u, dPe, s, depth, Ph, Pg, rho });
    P.dispScale = val('sv');
    P.tRise = u > 0 ? depth / u : 0; P.alive = 12 * f * P.tRise;
    const area = curW * s * curL * s; P.hold = (u > 0 && area > 0) ? (12 * Q / area) / u : 0;
    P.acc = plates.map(() => f > 0 ? Math.random() / f : 0);

    const rows = [
      ['Supply pressure', (Pg / KGF).toFixed(3) + ' kgf/cm²  (' + (Pg / 1000).toFixed(1) + ' kPa)'],
      ['Electrolyte head at orifice (' + (depth * 100).toFixed(1) + ' cm)', (Ph / KGF).toFixed(3) + ' kgf/cm²'],
      ['Net driving pressure', dPe > 0 ? (dPe / KGF).toFixed(3) + ' kgf/cm²' : 'no flow (head exceeds supply)'],
      ['Air flow per orifice', dPe > 0 ? (Q * 1e6).toFixed(2) + ' mL/s' : '0'],
      ['Total air flow (12 orifices)', dPe > 0 ? (12 * Q * 60000).toFixed(2) + ' L/min' : '0'],
      ['Bubble diameter', dPe > 0 ? (db * 1000).toFixed(2) + ' mm' : '-'],
      ['Bubbles per second, per orifice', dPe > 0 ? f.toFixed(0) + ' Hz' : '-'],
      ['Bubble rise speed', dPe > 0 ? (u * 100).toFixed(1) + ' cm/s' : '-'],
      ['Time to reach surface', dPe > 0 ? P.tRise.toFixed(2) + ' s' : '-'],
      ['Bubbles in liquid at once', dPe > 0 ? Math.round(P.alive) + (P.alive > MAX ? ' (display capped at ' + MAX + ')' : '') : '-'],
      ['Gas hold-up (volume fraction)', dPe > 0 ? (P.hold * 100).toFixed(2) + ' %' : '-']
    ];
    $('ro').innerHTML = rows.map(r => '<span>' + r[0] + '</span><span>' + r[1] + '</span>').join('');
    for (const [id, , , , , , dp] of sliders) $('v' + id).textContent = val(id).toFixed(dp);
  }

  function spawn(oi, yoff) {
    if (!freeList.length) return;
    const i = freeList.pop(), b = bub[i], pl = plates[oi];
    const d = P.db * (0.88 + 0.24 * Math.random());              // slight size spread
    b.a = true; b.d = d; b.u = mendelson(d, P.rho);
    b.x0 = pl.x + (Math.random() - 0.5) * 0.003 / P.s; b.z0 = pl.z + (Math.random() - 0.5) * 0.003 / P.s;
    b.vx = (Math.random() - 0.5) * 0.012 / P.s; b.vz = (Math.random() - 0.5) * 0.012 / P.s;
    b.y = ORY + yoff; b.t = 0; b.ph = Math.random() * 6.28;
  }

  function hide(i) { dummy.position.set(0, -50, 0); dummy.scale.set(0, 0, 0); dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix); }
  function step(dt) {
    if (P.f > 0) {
      const T = 1 / P.f;
      for (let oi = 0; oi < plates.length; oi++) {
        P.acc[oi] += dt;
        while (P.acc[oi] >= T) { P.acc[oi] -= T; spawn(oi, P.acc[oi] * P.u / P.s); }
      }
    }
    const s = P.s, P0 = PATM + P.rho * G * P.depth, hx = curW * 0.47, hz = curL * 0.47;
    for (let i = 0; i < MAX; i++) {
      const b = bub[i];
      if (!b.a) { hide(i); continue; }
      b.y += (b.u / s) * dt; b.t += dt;
      if (b.y >= liqTop) { b.a = false; freeList.push(i); hide(i); continue; }
      const dm = b.d / s, A = 0.4 * dm;                                        // zig-zag amplitude
      let x = b.x0 + b.vx * b.t + A * Math.sin(6.283 * 7 * b.t + b.ph), z = b.z0 + b.vz * b.t + A * Math.cos(6.283 * 6 * b.t + b.ph);
      x = Math.max(-hx, Math.min(hx, x)); z = Math.max(-hz, Math.min(hz, z));
      const Pn = PATM + P.rho * G * (liqTop - b.y) * s, gr = Math.cbrt(P0 / Pn);   // bubble grows as pressure drops
      const r = dm / 2 * gr * P.dispScale, osc = b.d > 0.002 ? 0.86 : 1;          // larger bubbles slightly oblate
      dummy.position.set(x, b.y, z); dummy.scale.set(r, r * osc, r); dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
  }

  function warm() {                                               // pre-fill so bubbles are already rising
    resetPool();
    if (P.f <= 0) { step(0.001); return; }
    const steps = Math.min(150, Math.ceil((P.tRise + 0.3) / 0.02));
    for (let k = 0; k < steps; k++) step(0.02);
  }

  /* ---------- Build the battery ---------- */
  function buildBattery(L, W, H) {
    while (g.children.length) { const c = g.children.pop(); c.geometry?.dispose(); }
    curH = H; curW = W; curL = L;
    liqTop = H * 0.86;

    // transparent case + electrolyte
    const glass = add(new THREE.BoxGeometry(W, H, L), glassM, 0, H / 2, 0, true); glass.renderOrder = 3;
    const liq = add(new THREE.BoxGeometry(W * 0.96, liqTop - 0.06, L * 0.96), liqM, 0, 0.06 + (liqTop - 0.06) / 2, 0, true); liq.renderOrder = 2;

    // lid and base
    add(new THREE.BoxGeometry(W * 1.02, 0.06, L * 1.02), M(0xe8d9a0, 0.7, 0), 0, H - 0.03, 0);
    add(new THREE.BoxGeometry(W * 1.02, 0.06, L * 1.02), plateM, 0, 0.03, 0);

    // 12 terminals in 2 rows of 6, with plates, stems and air diffusers underneath
    plates = [];
    const plH = H * 0.6, pb = 0.2;
    for (let row = 0; row < 2; row++) {
      for (let k = 0; k < 6; k++) {
        const z = (0.1 + 0.16 * k - 0.5) * L, x = (row ? 0.26 : -0.26) * W;
        add(new THREE.BoxGeometry(0.2 * W, plH, 0.035), leadM, x, pb + plH / 2, z);          // lead plate
        const ps = H - 0.06 - (pb + plH);
        add(cy(0.03 * W, ps, 16), brass, x, pb + plH + ps / 2, z);                              // stem to terminal
        add(cy(0.04 * W, 0.05, 20), darkM, x, 0.085, z);                                        // air diffuser
        plates.push({ x, z });
      }
    }

    // lid fittings as on the real cell (shared with the main circuit's batteries)
    const lid = photoLid({ W, L }); lid.group.position.y = H; g.add(lid.group);
    vent = { ...lid.vent, y: lid.vent.y + H };
    base0 = Math.max(L, H, W) * 6.9;
  }

  /* ---------- White vapour leaving the yellow vent's square holes ---------- */
  // Gas released by the agitation escapes through the vent cap; the amount follows the total air flow.
  let vent = null;
  const vap = createVapour(); scene.add(vap.points);
  function vapour(dt) {
    const lpm = 12 * P.Q * 60000, level = vent && bubOn && P.f > 0 ? Math.min(1, 0.35 + lpm / 1.2) : 0;
    vap.update(dt, level, vent, ren.domElement.height / (2 * Math.tan(cam.fov * Math.PI / 360)), true);
  }

  /* ---------- Camera / UI ---------- */
  let th = 3.927, ph = 1.08, R = 20, tth = th, tph = ph, tR = R, rot = false, focusTop = false, zoomK = 1;
  function setView(a, b, top, zm) { tth = a; tph = b; rot = false; focusTop = top; zoomK = zm; tR = base0 * zm; tgtYT = top ? curH : curH / 2; $('rb').textContent = 'Auto-rotate: off'; }
  const views = { drawing: [3.927, 1.08, false, 1], top: [3.927, 1.08, true, 0.42], front: [Math.PI, Math.PI / 2, false, 1], side: [Math.PI / 2, Math.PI / 2, false, 0.6] };
  root.querySelectorAll('[data-view]').forEach(b => b.onclick = () => setView(...views[b.dataset.view]));
  $('rb').onclick = () => { rot = !rot; $('rb').textContent = 'Auto-rotate: ' + (rot ? 'on' : 'off'); };
  $('bb').onclick = () => { bubOn = !bubOn; bg.visible = bubOn; $('bb').textContent = 'Bubbles: ' + (bubOn ? 'on' : 'off'); };

  function geomUpd() {
    buildBattery(val('sl'), val('sw'), val('sh'));
    physUpdate(); warm(); tR = base0 * zoomK; tgtYT = focusTop ? curH : curH / 2;
  }
  function physChange() { physUpdate(); warm(); }

  ['sl', 'sw', 'sh'].forEach(id => $(id).addEventListener('input', geomUpd));
  ['sp', 'sd', 'sg', 'sh2'].forEach(id => $(id).addEventListener('input', physChange));
  $('sv').addEventListener('input', () => { P.dispScale = val('sv'); $('vsv').textContent = P.dispScale.toFixed(1); });
  $('so').addEventListener('input', () => { const v = val('so'); glassM.opacity = v; liqM.opacity = 0.12 + v * 1.0; $('vso').textContent = v.toFixed(2); });

  geomUpd(); R = tR; tgt.y = tgtYT;

  /* ---------- Mouse / touch orbit controls ---------- */
  let drag = false, lx = 0, ly = 0, pd = 0; const pts = {};
  host.addEventListener('pointerdown', e => { drag = true; lx = e.clientX; ly = e.clientY; pts[e.pointerId] = e; host.setPointerCapture(e.pointerId); host.style.cursor = 'grabbing'; });
  host.addEventListener('pointerup', e => { drag = false; delete pts[e.pointerId]; pd = 0; host.style.cursor = 'grab'; });
  host.addEventListener('pointermove', e => {
    pts[e.pointerId] = e; const ids = Object.keys(pts);
    if (ids.length === 2) {
      const a = pts[ids[0]], b = pts[ids[1]], d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (pd) tR = Math.max(base0 * 0.15, Math.min(base0 * 2, tR * pd / d)); pd = d; return;
    }
    if (!drag) return;
    tth -= (e.clientX - lx) * 0.008;
    tph = Math.max(0.05, Math.min(Math.PI - 0.05, tph - (e.clientY - ly) * 0.008));
    lx = e.clientX; ly = e.clientY; rot = false;
  });
  host.addEventListener('wheel', e => { e.preventDefault(); tR = Math.max(base0 * 0.15, Math.min(base0 * 2, tR * (1 + e.deltaY * 0.001))); }, { passive: false });
  function resize() { const w = host.clientWidth || 680, h = host.clientHeight || 520; cam.aspect = w / h; cam.updateProjectionMatrix(); ren.setSize(w, h); }
  window.addEventListener('resize', resize);

  /* ---------- Animation loop (runs only while the dialog is open) ---------- */
  let last = performance.now(), raf = 0;
  function loop() {
    raf = requestAnimationFrame(loop);
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (rot) tth += 0.006;
    if (bubOn) step(dt);
    vapour(dt);
    th += (tth - th) * 0.12; ph += (tph - ph) * 0.12; R += (tR - R) * 0.12; tgt.y += (tgtYT - tgt.y) * 0.12;
    cam.position.set(tgt.x + R * Math.sin(ph) * Math.cos(th), tgt.y + R * Math.cos(ph), tgt.z + R * Math.sin(ph) * Math.sin(th));
    cam.lookAt(tgt);
    ren.render(scene, cam);
  }
  return {
    resize, physChange,
    start() { if (!raf) { last = performance.now(); loop(); } },
    stop() { cancelAnimationFrame(raf); raf = 0; }
  };
}
