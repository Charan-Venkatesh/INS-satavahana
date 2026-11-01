// Blower viewer opened from the "i" beside each blower: the supplied P-31 cut-section viewer (blower_assembly.glb) with
// its Power / Speed / Show air panel and outlet / inlet air particles, in light colours to match the battery view.
// Power and Speed drive that blower on the circuit (same interlocks as tapping it); it shows the circuit's live state.
// Ported from the supplied Blower Viewer page; uses the app's bundled three.js (no CDN) and a small built-in orbit.
import * as THREE from 'three';
import {loadBlower, MAX_REV_PER_S} from './blower-model.js';
import {loadPump, PUMP_REV_PER_S} from './pump-model.js';

const css = `
#blower-detail{width:min(1000px,96vw);max-width:96vw;max-height:94dvh;padding:16px;border:1px solid #c4d7c8;border-radius:16px;background:#f4f5f7;color:#222;font-family:system-ui,Arial,sans-serif}
#blower-detail::backdrop{background:#193c3555}
#blower-detail .bl-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
#blower-detail h2{font-size:18px;margin:0}
#blower-detail button{min-height:44px;padding:0 16px;cursor:pointer;border:1px solid #c4d7c8;border-radius:8px;background:#fff;color:#222;font:inherit;font-size:14px}
#blower-detail .bl-stage{position:relative;height:min(620px,72dvh);border-radius:12px;overflow:hidden;touch-action:none;background:#e8edf0}
#blower-detail canvas{display:block;width:100%;height:100%}
#blower-detail .bl-panel{position:absolute;left:12px;bottom:12px;width:min(290px,calc(100% - 24px));padding:14px;border-radius:12px;background:#ffffffe6;border:1px solid #d5dfe3;box-shadow:0 4px 16px #0001}
#blower-detail .bl-panel h3{margin:0 0 2px;font-size:15px}#blower-detail .bl-sub{color:#6b7a80;font-size:12px;margin-bottom:12px}
#blower-detail #bl-power{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:600}
#blower-detail .bl-led{width:11px;height:11px;border-radius:50%;background:#e0483a;box-shadow:0 0 8px #e0483a}
#blower-detail #bl-power.on{background:#e3f5ea;border-color:#9fd6b3}#blower-detail #bl-power.on .bl-led{background:#22b45a;box-shadow:0 0 10px #22b45a}
#blower-detail .bl-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px}
#blower-detail .bl-row label{color:#6b7a80}#blower-detail input[type=range]{flex:1;accent-color:#22b45a}
#blower-detail .bl-status{display:flex;justify-content:space-between;margin-top:10px;font-variant-numeric:tabular-nums}
#blower-detail .bl-meter{height:6px;border-radius:3px;background:#dde5e9;overflow:hidden;margin-top:6px}#blower-detail .bl-meter>div{height:100%;width:0;background:linear-gradient(90deg,#4f8fc4,#9fd0f0)}
#blower-detail .bl-check{display:flex;gap:6px;align-items:center;margin-top:10px;color:#6b7a80;cursor:pointer}
#blower-detail .bl-warn{margin-top:8px;color:#c0392b;font-size:13px;min-height:1em}
#blower-detail .bl-hint{position:absolute;right:12px;bottom:12px;color:#6b7a80;font-size:12px}
@media(max-width:560px){#blower-detail .bl-hint{display:none}}`;
{ const style = document.createElement('style'); style.textContent = css; document.head.append(style); }

let dlg, api;
// open({ title, speed() → actual 0..1, running() → bool, flow() → m³/h, toggle() → warning text or '', setPoint, setSpeed(v), kind: 'blower' | 'pump' })
export function openBlowerDetail(opts) {
  if (!dlg) build();
  dlg.querySelector('h2').textContent = opts.title + (opts.kind === 'pump' ? ' — 3D view' : ' — cut-section view');
  dlg.querySelector('h3').textContent = opts.title;
  api.source = opts; api.show(opts.kind || 'blower'); api.sync();
  dlg.showModal();
  api.resize(); api.start();
}

function build() {
  dlg = document.createElement('dialog'); dlg.id = 'blower-detail';
  dlg.innerHTML = `<div class="bl-head"><h2></h2><button id="bl-close">Close ×</button></div>
<div class="bl-stage"><div class="bl-panel"><h3></h3><div class="bl-sub"></div>
<button id="bl-power" type="button" aria-pressed="false"><span class="bl-led"></span><span id="bl-power-label">Power OFF</span></button>
<div class="bl-row"><label for="bl-speed">Speed</label><input id="bl-speed" type="range" min="20" max="100" value="100"><span id="bl-speed-val">100%</span></div>
<div class="bl-status"><span id="bl-what">Fan</span><b id="bl-state">Stopped</b></div><div class="bl-status"><span id="bl-qname">Airflow</span><b id="bl-flow">0 m³/h</b></div><div class="bl-meter"><div id="bl-bar"></div></div>
<label class="bl-check"><input id="bl-air" type="checkbox" checked> Show air</label><div class="bl-warn" id="bl-warn" role="alert"></div></div>
<div class="bl-hint"></div></div>`;
  document.body.append(dlg);
  const stage = dlg.querySelector('.bl-stage');
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  stage.prepend(renderer.domElement);

  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xe8edf0);
  { // soft studio environment (stands in for RoomEnvironment)
    const env = new THREE.Scene(), pm = new THREE.PMREMGenerator(renderer), lit = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 5, 5), side: THREE.DoubleSide });
    env.background = new THREE.Color(0x9aa4ab);
    for (const [w, d, x, z] of [[6, 1, 0, -2], [1, 6, -2.5, 0], [6, .6, 0, 3], [.6, 6, 3, 0]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lit); m.rotation.x = Math.PI / 2; m.position.set(x, 4, z); env.add(m); }
    scene.environment = pm.fromScene(env, 0.04).texture; pm.dispose();
  }
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 50);
  const target = new THREE.Vector3(-0.15, 0.38, -0.05);
  const orbit = { r: 2.2, th: 0.6, ph: 1.05 };     // distance, azimuth, polar — starts at the supplied viewer's camera
  const place = () => { camera.position.set(target.x + orbit.r * Math.sin(orbit.ph) * Math.cos(orbit.th), target.y + orbit.r * Math.cos(orbit.ph), target.z + orbit.r * Math.sin(orbit.ph) * Math.sin(orbit.th)); camera.lookAt(target); };
  place();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb8c2c8, 0.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(1.5, 3, 2); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -1.2, right: 1.2, top: 1.2, bottom: -1.2, near: 0.5, far: 8 }); sun.shadow.bias = -0.0004; scene.add(sun);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(4, 64), new THREE.ShadowMaterial({ opacity: 0.18 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const grid = new THREE.GridHelper(4, 40, 0xc3ccd2, 0xd6dde1); grid.position.y = 0.0005; scene.add(grid);

  // orbit: one finger / mouse drag turns, wheel or two-finger pinch zooms
  const pts = new Map(); let pinch = 0;
  const canvas = renderer.domElement;
  canvas.addEventListener('pointerdown', e => { canvas.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); });
  canvas.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return; const [x0, y0] = pts.get(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 1) { orbit.th += (e.clientX - x0) * 0.008; orbit.ph = Math.min(Math.PI * 0.495, Math.max(0.15, orbit.ph - (e.clientY - y0) * 0.006)); }
    else { const [a, b] = [...pts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) orbit.r = Math.min(6, Math.max(0.6, orbit.r * pinch / d)); pinch = d; }
    place();
  });
  const up = e => { pts.delete(e.pointerId); pinch = 0; };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', e => { e.preventDefault(); orbit.r = Math.min(6, Math.max(0.6, orbit.r * Math.exp(e.deltaY * 0.001))); place(); }, { passive: false });

  // ---- model
  const OUTLET = { x0: 0.025, x1: 0.155, z0: -0.39, z1: -0.14, y: 0.722 };   // inner opening of the red flange
  const EYE = new THREE.Vector3(0.2, 0.345, 0);                              // impeller inlet eye centre
  // both models are loaded once; the one for the opened part is shown
  let rotor = null, kind = 'blower', rate = MAX_REV_PER_S;
  const models = {}, KINDS = {
    blower: { load: loadBlower, rotor: 'Rotor', rate: MAX_REV_PER_S, target: [-0.15, 0.38, -0.05], r: 2.2, sub: 'P-31 blower · cut-section model · drag to turn, pinch or scroll to zoom', what: 'Fan', q: 'Airflow', hint: 'Power and Speed run this blower on the circuit' },
    pump: { load: loadPump, rotor: 'Shaft', rate: PUMP_REV_PER_S, target: [-0.1, 0.25, 0], r: 2.4, sub: 'Cooling-water pump set · Blender model · drag to turn, pinch or scroll to zoom', what: 'Pump', q: 'Water flow', hint: 'Power and Speed run this pump on the circuit' }
  };
  function show(k) {
    kind = k; const K = KINDS[k]; rate = K.rate;
    dlg.querySelector('.bl-sub').textContent = K.sub; dlg.querySelector('#bl-what').textContent = K.what; dlg.querySelector('#bl-qname').textContent = K.q; dlg.querySelector('.bl-hint').textContent = K.hint;
    dlg.querySelector('.bl-check').style.display = k === 'blower' ? '' : 'none';
    outPool.points.visible = inPool.points.visible = k === 'blower' && dlg.querySelector('#bl-air').checked;
    target.set(...K.target); orbit.r = K.r; place();
    for (const m of Object.values(models)) m.visible = false;
    rotor = null;
    const use = m => { m.visible = true; rotor = m.getObjectByName(K.rotor); };
    if (models[k]) use(models[k]);
    else K.load().then(src => {
      const model = src.clone(true); model.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      if (k === 'blower') { const out = model.getObjectByName('Air_Outlet'); if (out) OUTLET.y = out.position.y; const inl = model.getObjectByName('Air_Inlet'); if (inl) EYE.copy(inl.position); }
      else model.position.y = 0.075;                                                  // baseplate sits on the grid
      scene.add(model); models[k] = model; model.visible = false; if (kind === k) use(model);
    });
  }

  // ---- air particles (soft sprites; each pool reuses dead particles) — blue-grey so they read on the light backdrop
  function makePool(count, color) {
    const geo = new THREE.BufferGeometry(), pos = new Float32Array(count * 3), alpha = new Float32Array(count), size = new Float32Array(count);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) }, uScale: { value: 1 } },
      vertexShader: 'attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vAlpha;void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize*uScale/-mv.z;gl_Position=projectionMatrix*mv;vAlpha=aAlpha;}',
      fragmentShader: 'uniform vec3 uColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-0.5);if(d>0.5)discard;gl_FragColor=vec4(uColor,smoothstep(0.5,0.0,d)*vAlpha);}',
      transparent: true, depthWrite: false });
    const points = new THREE.Points(geo, mat); points.frustumCulled = false; scene.add(points);
    return { count, points, mat, pos, alpha, size, vel: new Float32Array(count * 3), age: new Float32Array(count).fill(1e9), life: new Float32Array(count).fill(1), next: 0, carry: 0 };
  }
  const outPool = Object.assign(makePool(2600, 0x5d93c2), { alpha0: 0.24, size0: 0.05 });
  const inPool = Object.assign(makePool(1200, 0x7aa6cc), { alpha0: 0, size0: 0.02 });
  const rnd = (a, b) => a + Math.random() * (b - a);
  function spawn(pool, init) { const i = pool.next; pool.next = (pool.next + 1) % pool.count; pool.age[i] = 0; init(i, pool.pos, pool.vel, pool.life); pool.alpha[i] = pool.alpha0; pool.size[i] = pool.size0; }
  function emit(pool, rate, dt, init) { pool.carry += rate * dt; while (pool.carry >= 1) { spawn(pool, init); pool.carry -= 1; } }
  const initOutlet = f => (i, p, v, life) => {
    p[i * 3] = rnd(OUTLET.x0, OUTLET.x1); p[i * 3 + 1] = OUTLET.y + 0.005; p[i * 3 + 2] = rnd(OUTLET.z0, OUTLET.z1);
    const cz = (OUTLET.z0 + OUTLET.z1) / 2, cx = (OUTLET.x0 + OUTLET.x1) / 2;
    v[i * 3] = (p[i * 3] - cx) * 1.6 * f + rnd(-0.05, 0.05); v[i * 3 + 1] = rnd(1.5, 2.3) * f;
    v[i * 3 + 2] = (p[i * 3 + 2] - cz) * 1.2 * f - 0.18 * f + rnd(-0.05, 0.05);   // the volute throws air to the outer wall
    life[i] = rnd(0.9, 1.5);
  };
  const initInlet = () => (i, p, v, life) => {
    const r = Math.sqrt(Math.random()) * 0.2, a = Math.random() * Math.PI * 2;
    p[i * 3] = EYE.x + rnd(0.2, 0.45); p[i * 3 + 1] = EYE.y + r * Math.sin(a); p[i * 3 + 2] = EYE.z + r * Math.cos(a);
    v[i * 3] = v[i * 3 + 1] = v[i * 3 + 2] = 0; life[i] = 3;
  };
  function stepOutlet(pool, dt, t) {
    const { pos: p, vel: v, age, life, alpha, size } = pool;
    for (let i = 0; i < pool.count; i++) {
      age[i] += dt; const k = age[i] / life[i];
      if (k >= 1) { alpha[i] = 0; continue; }
      const j = i * 3, turb = 0.6 * k;                       // drag + swirl that grows as the jet spreads
      v[j] += (Math.sin(p[j + 1] * 9 + t * 3 + i) * turb - v[j] * 0.6) * dt;
      v[j + 2] += (Math.cos(p[j + 1] * 7 - t * 2.5 + i * 0.7) * turb - v[j + 2] * 0.4) * dt;
      v[j + 1] -= v[j + 1] * 0.9 * dt;
      p[j] += v[j] * dt; p[j + 1] += v[j + 1] * dt; p[j + 2] += v[j + 2] * dt;
      alpha[i] = 0.24 * Math.pow(1 - k, 1.5); size[i] = 0.05 + 0.08 * k;
    }
  }
  const tmp = new THREE.Vector3();
  function stepInlet(pool, dt, f) {
    const { pos: p, vel: v, age, life, alpha, size } = pool;
    for (let i = 0; i < pool.count; i++) {
      if (age[i] >= life[i]) { alpha[i] = 0; continue; }
      age[i] += dt; const j = i * 3;
      tmp.set(EYE.x - p[j], EYE.y - p[j + 1], EYE.z - p[j + 2]);
      const d = tmp.length(), radial = Math.hypot(p[j + 1] - EYE.y, p[j + 2] - EYE.z);
      if (p[j] < EYE.x + 0.01 || d < 0.02) { age[i] = life[i]; alpha[i] = 0; continue; }
      tmp.multiplyScalar((0.35 + 0.25 / (d + 0.08)) * f / d);          // sucked toward the eye, with a little swirl
      const sy = -(p[j + 2] - EYE.z), sz = p[j + 1] - EYE.y, swirl = 0.6 * f * Math.max(0, 1 - radial / 0.35);
      v[j] += (tmp.x - v[j]) * 3 * dt; v[j + 1] += (tmp.y + sy * swirl - v[j + 1]) * 3 * dt; v[j + 2] += (tmp.z + sz * swirl - v[j + 2]) * 3 * dt;
      p[j] += v[j] * dt; p[j + 1] += v[j + 1] * dt; p[j + 2] += v[j + 2] * dt;
      alpha[i] = 0.18 * Math.min(1, age[i] * 2) * Math.min(1, (p[j] - EYE.x) / 0.06); size[i] = 0.018 + 0.01 * Math.min(1, d);
    }
  }
  const flush = pool => { const g = pool.points.geometry; g.attributes.position.needsUpdate = g.attributes.aAlpha.needsUpdate = g.attributes.aSize.needsUpdate = true; };

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
    camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h, false);
    outPool.mat.uniforms.uScale.value = inPool.mat.uniforms.uScale.value = h * renderer.getPixelRatio() / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
  }
  addEventListener('resize', () => dlg.open && resize());

  // ---- panel, driven by (and driving) the blower on the circuit
  const ui = { power: dlg.querySelector('#bl-power'), label: dlg.querySelector('#bl-power-label'), speed: dlg.querySelector('#bl-speed'), speedVal: dlg.querySelector('#bl-speed-val'),
    state: dlg.querySelector('#bl-state'), flow: dlg.querySelector('#bl-flow'), bar: dlg.querySelector('#bl-bar'), air: dlg.querySelector('#bl-air'), warn: dlg.querySelector('#bl-warn') };
  ui.power.addEventListener('click', () => { ui.warn.textContent = api.source.toggle() || ''; });
  ui.speed.addEventListener('input', () => { ui.speedVal.textContent = ui.speed.value + '%'; api.source.setSpeed(ui.speed.value / 100); });
  ui.air.addEventListener('change', () => { outPool.points.visible = inPool.points.visible = ui.air.checked && kind === 'blower'; });

  let angle = 0, simTime = 0, last = 0, running = false;
  function frame(now) {
    if (!dlg.open) { running = false; return; }
    const dt = Math.min(0.05, Math.max(0, last ? (now - last) / 1000 : 0.016)); last = now; simTime += dt;
    const src = api.source, f = src.speed(), on = src.running();
    angle += f * rate * Math.PI * 2 * dt; if (rotor) rotor.rotation.x = angle;
    stepOutlet(outPool, dt, simTime); stepInlet(inPool, dt, Math.max(f, 0.05));
    if (f > 0.03 && kind === 'blower') { emit(outPool, 1600 * f, dt, initOutlet(f)); emit(inPool, 650 * f, dt, initInlet(f)); }
    flush(outPool); flush(inPool);
    ui.power.classList.toggle('on', on); ui.power.setAttribute('aria-pressed', String(on)); ui.label.textContent = on ? 'Power ON' : 'Power OFF';
    ui.state.textContent = f < 0.002 ? 'Stopped' : on && Math.abs(src.setPoint() - f) < 0.02 ? 'Running' : on ? 'Spinning up' : 'Coasting down';
    const q = src.flow(); ui.flow.textContent = Math.round(q) + ' m³/h'; ui.bar.style.width = Math.min(100, q / 6).toFixed(1) + '%';
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  dlg.querySelector('#bl-close').addEventListener('click', () => dlg.close());
  api = { source: null, resize, show,
    sync() { const v = Math.round(api.source.setPoint() * 100); ui.speed.value = String(v); ui.speedVal.textContent = v + '%'; ui.warn.textContent = ''; },
    start() { if (!running) { running = true; last = 0; requestAnimationFrame(frame); } } };
}
