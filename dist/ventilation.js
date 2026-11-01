// Screen 2 — 3rd Battery Pit Ventilation. Fixed top view of the circuit from the supplied drawing, in the same style as
// the agitation screen: glass pipes with moving air, tap-to-operate valves with turning handwheels, white/red/green
// states, warnings and interlocks. Blowers 1, 2 and the galley blower are the supplied P-31 model, sitting in their
// pipelines and turned so the top view shows them exactly as in the supplied blower picture.
// Plan coordinates are the supplied drawing's (2000 × 1572, x right, y down, skew straightened); world = (x − 1000, h, y − 786).
import './offline-support.js';
import * as T from 'three';
import {battery3D, facing, openBatteryDetail} from './battery-detail.js';
import {openBlowerDetail} from './blower-detail.js';
import {loadBlower, MAX_REV_PER_S, SPIN_UP_S, COAST_S} from './blower-model.js';
import {EST, ALARM, DANGER, ventFlows, stepPit} from './ventilation-model.js';

const host = document.querySelector('#viewport'), labelsRoot = document.querySelector('#labels'), circuit = document.querySelector('#circuit');
const P = (x, y, h = 0) => new T.Vector3(x - 1000, h, y - 786);
const PIPE_Y = 24, SIM_SPEED = 60;                       // 1 s on screen = 1 simulated minute for the pit hydrogen
const FILL_SPEED = 520;                                  // plan units / s at which released air fills a pipe up to the next closed part
const LAMP_IDLE = new T.Color('#8e9ca3'),   // light backdrop: idle rings in grey so they still show
      LAMP_OFF = new T.Color('#d23b33'), LAMP_ON = new T.Color('#22b45a');

// ---------------------------------------------------------------- renderer, camera, light
function sharpRatio() { return Math.min(4, (devicePixelRatio || 1) * (window.visualViewport?.scale || 1)); }
const renderer = new T.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(sharpRatio()); renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
host.append(renderer.domElement);
const scene = new T.Scene(); scene.background = new T.Color('#e9eef0');
const camera = new T.OrthographicCamera(-1000, 1000, 600, -600, 1, 8000);
camera.position.set(0, 3000, 0); camera.up.set(0, 0, -1); camera.lookAt(0, 0, 0);
{
  const s = new T.Scene(), pm = new T.PMREMGenerator(renderer), lit = new T.MeshBasicMaterial({ color: new T.Color(6, 6, 6), side: T.DoubleSide });
  s.background = new T.Color('#2a2f36');
  for (const [w, d, x, z] of [[14, .5, 0, -2], [.5, 14, -2.5, 0], [14, .25, 0, 3], [.25, 14, 3, 0]]) { const m = new T.Mesh(new T.PlaneGeometry(w, d), lit); m.rotation.x = Math.PI / 2; m.position.set(x, 6, z); s.add(m); }
  scene.environment = pm.fromScene(s, .02).texture; pm.dispose();
}
scene.add(new T.HemisphereLight('#dfefff', '#20282c', 1.1));
const sun = new T.DirectionalLight('#ffffff', 1.6); sun.position.set(-600, 2000, -900); scene.add(sun);

// ---------------------------------------------------------------- textures
function canvasTexture(size, draw) { const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size); const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t; }
const glowTex = canvasTexture(128, (c, s) => { const g = c.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.35, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, s, s); });
const flameTex = canvasTexture(128, (c, s) => { const g = c.createRadialGradient(s / 2, s * .62, 2, s / 2, s * .55, s * .45); g.addColorStop(0, 'rgba(255,250,215,1)'); g.addColorStop(.4, 'rgba(255,190,80,.9)'); g.addColorStop(1, 'rgba(255,90,20,0)'); c.fillStyle = g; c.beginPath(); c.moveTo(s / 2, s * .08); c.bezierCurveTo(s * .9, s * .5, s * .78, s * .95, s / 2, s * .95); c.bezierCurveTo(s * .22, s * .95, s * .1, s * .5, s / 2, s * .08); c.fill(); });
const floorTex = canvasTexture(512, (c, s) => { const g = c.createRadialGradient(s / 2, s * .42, 10, s / 2, s / 2, s * .72); g.addColorStop(0, '#f6f8f9'); g.addColorStop(1, '#d9e1e5'); c.fillStyle = g; c.fillRect(0, 0, s, s); });
const sprite = (tex, color, scale, opacity = 1) => { const m = new T.Sprite(new T.SpriteMaterial({ map: tex, color, transparent: true, opacity, depthWrite: false, blending: T.AdditiveBlending })); m.scale.setScalar(scale); return m; };

// ---------------------------------------------------------------- materials
const mat = {
  metal: new T.MeshStandardMaterial({ color: '#b9c2c8', metalness: .85, roughness: .32 }),
  dark: new T.MeshStandardMaterial({ color: '#2a3237', metalness: .5, roughness: .5 }),
  red: new T.MeshStandardMaterial({ color: '#c8322b', metalness: .3, roughness: .4 }),
  glass: new T.MeshPhysicalMaterial({ color: '#8fb3c6', metalness: 0, roughness: .06, transparent: true, opacity: .34, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1.6 }),   // writes depth: overlapping pipes show one glass surface, so joints blend
  flange: new T.MeshStandardMaterial({ color: '#9aa6ad', metalness: .8, roughness: .35 }),
  pit: new T.MeshStandardMaterial({ color: '#cfdbe0', metalness: .1, roughness: .9 })
};

// ---------------------------------------------------------------- backdrop and battery pit
{ const f = new T.Mesh(new T.PlaneGeometry(2800, 2000), new T.MeshBasicMaterial({ map: floorTex })); f.rotation.x = -Math.PI / 2; f.position.y = -700; scene.add(f); }
{
  const pit = new T.Mesh(new T.PlaneGeometry(1780, 370), mat.pit); pit.rotation.x = -Math.PI / 2; pit.position.copy(P(1000, 1340, -20)); scene.add(pit);
  const edge = new T.LineSegments(new T.EdgesGeometry(new T.PlaneGeometry(1780, 370)), new T.LineBasicMaterial({ color: '#9fb0b8' })); edge.rotation.x = -Math.PI / 2; edge.position.copy(P(1000, 1340, -19)); scene.add(edge);
  const dash = new T.Line(new T.BufferGeometry().setFromPoints([P(90, 1150, -18), P(1890, 1150, -18)]), new T.LineDashedMaterial({ color: '#7d94a0', dashSize: 16, gapSize: 12 })); dash.computeLineDistances(); scene.add(dash);
}
const batteries = [];
for (const x of [460, 545, 630, 715, 1265, 1350, 1435, 1520]) {                // 4 + 4 cells, as drawn
  const b = battery3D({}), sc = 34, q = facing(new T.Vector3(0, 0, -1), new T.Vector3(0, 1, 0));
  b.group.scale.setScalar(sc); b.group.quaternion.copy(q);
  const mid = new T.Vector3(0, b.size.H / 2 * sc, 0).applyQuaternion(q);
  b.group.position.copy(P(x, 1400, 30)).sub(mid); scene.add(b.group); b.group.updateMatrixWorld(true);
  const n = b.group.localToWorld(b.nipple.clone()); batteries.push({ b, sc, x, nip: n, up: new T.Vector3(0, 1, 0).applyQuaternion(q) });   // vent nipple on the lid
}
const haze = [588, 1392].map(x => { const s = sprite(glowTex, '#e0a21c', 1, 0); s.material.blending = T.NormalBlending; s.scale.set(520, 150, 1); s.position.copy(P(x, 1330, 80)); scene.add(s); return s; });

// ---------------------------------------------------------------- pipe network
// Each pipe runs from one node to the next in the direction air moves. Nodes are the valves, flaps, blowers, junctions,
// air sources and outlets of the drawing. Air "reaches" a pipe when everything upstream of it is open (it then fills
// the pipe and rests against the closed part at its end); it "flows" only where the model gives it a flow rate.
const AIR = { dirty: new T.Color('#d9821f'), clean: new T.Color('#1f86d1'), room: new T.Color('#3fa9c9') };   // read on the light backdrop
const pipes = [];
function roundedPath(pts, r = 26) {
  const v = pts.map(([x, y, h]) => P(x, y, h ?? PIPE_Y)), path = new T.CurvePath(); let cur = v[0];
  for (let i = 1; i < v.length; i++) {
    const a = v[i - 1], b = v[i], c = v[i + 1];
    if (!c) { path.add(new T.LineCurve3(cur, b)); break; }
    const d1 = b.clone().sub(a), d2 = c.clone().sub(b), rr = Math.min(r, d1.length() / 2, d2.length() / 2);
    const p1 = b.clone().addScaledVector(d1.normalize(), -rr), p2 = b.clone().addScaledVector(d2.normalize(), rr);
    path.add(new T.LineCurve3(cur, p1)); path.add(new T.QuadraticBezierCurve3(p1, b, p2)); cur = p2;
  }
  return path;
}
const chevronShape = new T.Shape([new T.Vector2(-9, -11), new T.Vector2(3, 0), new T.Vector2(-9, 11), new T.Vector2(-3, 0)]);
// from / to: node names; key: which flow (m³/h) it carries; air: 'dirty' (pit air with H₂), 'clean' (treated) or 'room'
const hoseMat = new T.MeshPhysicalMaterial({ color: '#efe4b8', roughness: .12, transmission: .35, thickness: 3, transparent: true, opacity: .85, side: T.DoubleSide });   // screen 1 battery hose
function pipe(from, to, key, pts, air, { r = 13, curve = null } = {}) {
  const path = curve || roundedPath(pts), len = path.getLength();
  const tube = new T.Mesh(new T.TubeGeometry(path, Math.max(16, Math.round(len / 6)), r, 16, false), curve ? hoseMat : mat.glass); tube.renderOrder = 6; scene.add(tube);
  if (!curve) for (const u of [0, 1]) { const ball = new T.Mesh(new T.SphereGeometry(r * 1.03, 24, 16), mat.glass); ball.position.copy(path.getPointAt(u)); ball.renderOrder = 6; scene.add(ball); }   // rounded joint
  // air as on screen 1: a bundle of light filaments across the bore with a gentle twist; a bright head with a fading
  // tail runs along each at the pipe's flow speed, and only as far as the air has reached
  const m = new T.ShaderMaterial({ transparent: true, depthWrite: false,
    uniforms: { uPhase: { value: Math.random() * 10 }, uAlpha: { value: 0 }, uReach: { value: 0 }, uLen: { value: len }, uColor: { value: AIR[air].clone() } },
    vertexShader: 'attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.14+.86*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,uColor*.55,head*.6),a);}' });
  const streams = new T.Group(); scene.add(streams);
  const pts3 = path.getSpacedPoints(Math.max(4, Math.ceil(len / 5))), K = r > 9 ? 16 : 7;
  for (let k = 0; k < K; k++) {
    const seed = (k * 37 % K) / K, ang0 = k / K * Math.PI * 2, rr = r * (.25 + .55 * ((k * 53 % 97) / 97)), pos = [], us = [], seeds = [];
    for (let i = 0; i < pts3.length; i++) {
      const a = pts3[Math.max(0, i - 1)], b = pts3[Math.min(pts3.length - 1, i + 1)], d = b.clone().sub(a).normalize();
      const n1 = new T.Vector3(0, 1, 0).cross(d); if (n1.lengthSq() < 1e-6) n1.set(1, 0, 0); n1.normalize(); const n2 = d.clone().cross(n1).normalize();
      const uu = len * i / (pts3.length - 1), ang = ang0 + uu * .02, q = pts3[i].clone().addScaledVector(n1, Math.cos(ang) * rr).addScaledVector(n2, Math.sin(ang) * rr);
      pos.push(q.x, q.y, q.z); us.push(uu); seeds.push(seed);
    }
    const g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('aU', new T.Float32BufferAttribute(us, 1)); g.setAttribute('aSeed', new T.Float32BufferAttribute(seeds, 1));
    const line = new T.Line(g, m); line.renderOrder = 4; line.frustumCulled = false; streams.add(line);
  }
  let chevron = null;                                                // direction arrow in the middle of the pipe
  if (len > 70) {
    chevron = new T.Mesh(new T.ShapeGeometry(chevronShape), new T.MeshBasicMaterial({ color: AIR[air], transparent: true, opacity: 0, depthWrite: false }));
    const mid = path.getPointAt(.5), t = path.getTangentAt(.5);
    chevron.rotation.order = 'YXZ'; chevron.rotation.set(-Math.PI / 2, Math.atan2(-t.z, t.x), 0); chevron.position.copy(mid).add(new T.Vector3(0, r + 4, 0)); chevron.renderOrder = 7; scene.add(chevron);
  }
  const p = { from, to, key, air, path, len, mat: m, streams, chevron, fill: 0, show: 0, reached: false };
  pipes.push(p); return p;
}
function pipeUpdate(p, dt, q, color, px, now) {
  p.fill = Math.min(1, Math.max(0, p.fill + (p.reached ? 1 : -1.6) * FILL_SPEED * dt / p.len));
  const flowing = q > 1, target = p.fill > 0 ? (flowing ? 1 : .4) : 0;     // blocked air rests dimly against the closed part
  p.show += (target - p.show) * Math.min(1, dt * 4);
  const u = p.mat.uniforms; u.uAlpha.value = p.show; u.uReach.value = p.fill; u.uColor.value.copy(color);
  u.uPhase.value += dt * (flowing ? .5 + 2.6 * Math.min(1.5, q / 600) : 0);
  p.streams.visible = p.show > .01;
  if (p.chevron) { p.chevron.material.color.copy(color); p.chevron.material.opacity = p.fill > .5 ? (flowing ? .55 + .4 * Math.sin(now / 200 + p.len) : .3) : 0; }
}
// flat arrows on the floor showing air entering / leaving the circuit
const arrows = [];
function arrow(x, y, dir, air, key, n = 3, gap = 30) {
  const sh = new T.Shape([new T.Vector2(-26, -3), new T.Vector2(6, -3), new T.Vector2(6, -10), new T.Vector2(20, 0), new T.Vector2(6, 10), new T.Vector2(6, 3), new T.Vector2(-26, 3)]);
  const g = new T.Group(); g.position.copy(P(x, y, 4)); g.rotation.y = -{ r: 0, d: -Math.PI / 2, l: Math.PI, u: Math.PI / 2 }[dir]; scene.add(g);
  const m = new T.MeshBasicMaterial({ color: AIR[air], transparent: true, opacity: .3 });
  for (let i = 0; i < n; i++) { const a = new T.Mesh(new T.ShapeGeometry(sh), m); a.rotation.x = -Math.PI / 2; a.position.z = (i - (n - 1) / 2) * gap; g.add(a); }
  arrows.push({ m, key });
}

// ---------------------------------------------------------------- parts
const parts = new Map();
function lamp(group, r, y = 2) {
  const ring = new T.Mesh(new T.RingGeometry(r - 3, r + 3, 48), new T.MeshBasicMaterial({ color: LAMP_IDLE.clone(), transparent: true, opacity: .95, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = y; group.add(ring);
  const glow = sprite(glowTex, LAMP_IDLE.clone(), r * 3, .35); glow.position.y = y - 1; group.add(glow);
  return { ring, glow, color: LAMP_IDLE.clone() };
}
function addPart(id, type, x, y, title, size, extra) { const p = { id, type, x, y, title, size, ...extra }; parts.set(id, p); return p; }

function valve(id, x, y, vertical, title, side = 'top') {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  const L = 44, W = 30, along = vertical ? new T.Vector3(0, 0, 1) : new T.Vector3(1, 0, 0);
  g.add(new T.Mesh(new T.BoxGeometry(vertical ? W : L, 30, vertical ? L : W), mat.metal));
  const lineM = new T.MeshBasicMaterial({ color: '#1d2327' }), dl = Math.hypot(L, W) - 4, da = Math.atan2(W, L);
  for (const sgn of [1, -1]) { const d = new T.Mesh(new T.BoxGeometry(dl, 1, 2.6), lineM); d.position.y = 15.5; d.rotation.y = (vertical ? Math.PI / 2 : 0) + sgn * da; g.add(d); }
  const out = { top: new T.Vector3(0, 0, -1), bottom: new T.Vector3(0, 0, 1), left: new T.Vector3(-1, 0, 0), right: new T.Vector3(1, 0, 0) }[side];
  const wheel = new T.Group(); wheel.position.copy(out.clone().multiplyScalar((vertical ? W : W) / 2 + 2)).setY(20); g.add(wheel);
  const arm = new T.Mesh(new T.BoxGeometry(30, 4, 5), mat.red); arm.position.x = 15; wheel.add(arm);
  const knob = new T.Mesh(new T.SphereGeometry(6, 14, 10), mat.red); knob.position.x = 31; wheel.add(knob);
  const tee = new T.Mesh(new T.BoxGeometry(3, 4, 14), mat.red); tee.position.x = 22; wheel.add(tee);
  const closed = Math.atan2(-out.z, out.x), open = Math.atan2(-along.z, along.x);
  wheel.rotation.y = closed;
  return addPart(id, 'valve', x, y, title, 64, { key: id, lamp: lamp(g, 32, -10), wheel, wheelTarget: closed, closedAngle: closed, openAngle: closed + Math.sign(Math.sin(open - closed) || 1) * Math.PI / 2 });
}
function flap(id, key, x, y, title) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  g.add(new T.Mesh(new T.BoxGeometry(24, 30, 32), mat.metal));
  const blade = new T.Mesh(new T.BoxGeometry(30, 3, 4), new T.MeshBasicMaterial({ color: '#14191c' })); blade.position.y = 16; g.add(blade);
  g.add(new T.Mesh(new T.CylinderGeometry(3.5, 3.5, 3, 12), new T.MeshBasicMaterial({ color: '#ffcf5a' }))).position.y = 18;
  const stem = new T.Mesh(new T.BoxGeometry(3, 3, 18), mat.dark); stem.position.set(0, 16, -24); g.add(stem);
  const tbar = new T.Mesh(new T.BoxGeometry(16, 3, 3), mat.dark); tbar.position.set(0, 16, -33); g.add(tbar);
  blade.rotation.y = Math.PI / 2;
  return addPart(id, 'flap', x, y, title, 60, { key, lamp: lamp(g, 26, -10), blade, bladeTarget: Math.PI / 2 });
}
// The blower picture's camera (Blower Viewer: camera (1.6, 1.0, 1.15) looking at (−0.15, 0.38, −0.05), Y up) is turned onto
// this screen's top camera, so from above each blower looks exactly like the picture: volute face with the inlet eye in
// front, motor behind on the left, red outlet flange on top. The eye sits on its suction pipe; the outlet feeds the
// discharge pipe, which leaves upward as in the drawing.
const PICTURE = (() => {
  const basis = (z, up) => { const x = new T.Vector3().crossVectors(up, z).normalize(), y = new T.Vector3().crossVectors(z, x); return new T.Matrix4().makeBasis(x, y, z); };
  const from = basis(new T.Vector3(1.75, .62, 1.2).normalize(), new T.Vector3(0, 1, 0)), to = new T.Matrix4().makeBasis(new T.Vector3(1, 0, 0), new T.Vector3(0, 0, -1), new T.Vector3(0, 1, 0));
  return new T.Quaternion().setFromRotationMatrix(to.multiply(from.transpose()));
})();
function blower(id, x, y, width, title, connect) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  const lg = new T.Group(); lg.position.set(-width * .8, 40, -width * .42); g.add(lg);
  const p = addPart(id, 'blower', x, y, title, width, { key: id, rotor: null, speed: 0, angle: 0, group: g, lamp: lamp(lg, 10, 0) });
  loadBlower().then(src => {
    const model = src.clone(true), turn = new T.Group(); turn.add(model); turn.quaternion.copy(PICTURE); g.add(turn);
    const inl = model.getObjectByName('Air_Inlet'), out = model.getObjectByName('Air_Outlet');
    const eye = inl ? inl.position.clone() : new T.Vector3(.2, .345, 0), flangeC = new T.Vector3(.09, out ? out.position.y : .722, -.265);
    turn.updateMatrixWorld(true); const box = new T.Box3().setFromObject(turn);
    turn.scale.setScalar(width / (box.max.x - box.min.x)); turn.updateMatrixWorld(true);
    const e = turn.localToWorld(eye.clone()).sub(g.position); turn.position.sub(e); turn.updateMatrixWorld(true);   // eye on (x, y) at pipe height
    const f = turn.localToWorld(flangeC.clone()), axis = new T.Vector3(0, 1, 0).applyQuaternion(PICTURE);
    p.rotor = model.getObjectByName('Rotor');
    const plan = v => [v.x + 1000, v.z + 786, v.y];
    const top = new T.Box3().setFromObject(turn).max.y + 14;           // suction runs over the motor, then drops into the eye
    connect(plan(f), plan(f.clone().addScaledVector(axis, 28)), top);
    layout();
  });
  return p;
}
function burner(id, key, x, y, title) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  const m = new T.MeshStandardMaterial({ color: '#4a555b', metalness: .4, roughness: .45, emissive: '#ff7a1a', emissiveIntensity: 0 });
  g.add(new T.Mesh(new T.BoxGeometry(110, 44, 80), m));
  g.add(new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(110, 44, 80)), new T.LineBasicMaterial({ color: '#1d2327' })));
  const glow = sprite(glowTex, '#ff8a2a', 230, 0); glow.position.y = 10; g.add(glow);
  const flame = sprite(flameTex, '#ffffff', 52, 0); flame.position.y = 40; g.add(flame);
  const lg = new T.Group(); lg.position.set(66, 0, -46); g.add(lg);
  return addPart(id, 'burner', x, y, title, 110, { key, lamp: lamp(lg, 9, 24), mat: m, glow, flame });
}
function diamond(x, y, kind) {
  const top = canvasTexture(128, (c, s) => {
    c.fillStyle = kind === 'cool' ? '#4e94c4' : '#5d6b72'; c.fillRect(0, 0, s, s);
    if (kind === 'cool') { c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 4; for (let i = 1; i < 7; i++) { c.beginPath(); c.moveTo(i * s / 7, 8); c.lineTo(i * s / 7, s - 8); c.stroke(); } }
    else { c.fillStyle = '#e9f3f7'; for (let i = 0; i < 9; i++) { c.beginPath(); c.arc(s * (.15 + i * .0875), s * (.15 + i * .0875), 4, 0, 7); c.fill(); } }
  });
  const side = new T.MeshStandardMaterial({ color: kind === 'cool' ? '#2f6f9e' : '#46525a', metalness: .5, roughness: .4 });
  const b = new T.Mesh(new T.BoxGeometry(68, 40, 68), [side, side, new T.MeshStandardMaterial({ map: top, metalness: .3, roughness: .5 }), side, side, side]);
  b.rotation.y = Math.PI / 4; b.position.copy(P(x, y, PIPE_Y)); scene.add(b);
}
function louvre(x, y, dir) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); g.rotation.y = -{ r: 0, l: Math.PI }[dir]; scene.add(g);
  const sh = new T.Shape([new T.Vector2(-14, -30), new T.Vector2(16, -46), new T.Vector2(16, 46), new T.Vector2(-14, 30)]);
  const body = new T.Mesh(new T.ExtrudeGeometry(sh, { depth: 30, bevelEnabled: false }), mat.metal); body.rotation.x = -Math.PI / 2; body.position.y = -15; g.add(body);
  for (let i = -3; i <= 3; i++) { const s = new T.Mesh(new T.BoxGeometry(16, 3, 3), mat.dark); s.position.set(8, 16, i * 11); g.add(s); }
}
const wireMat = new T.MeshStandardMaterial({ color: '#8d989f', metalness: .7, roughness: .4 });
function wire(pts, r = 2.5) { const path = new T.CurvePath(); for (let i = 1; i < pts.length; i++) path.add(new T.LineCurve3(P(pts[i - 1][0], pts[i - 1][1], PIPE_Y - 4), P(pts[i][0], pts[i][1], PIPE_Y - 4))); scene.add(new T.Mesh(new T.TubeGeometry(path, pts.length * 4, r, 8, false), wireMat)); }
function probe(x, y) { const m = new T.Mesh(new T.CylinderGeometry(6, 6, 10, 14), mat.metal); m.position.copy(P(x, y, PIPE_Y + 14)); scene.add(m); const t = new T.Mesh(new T.SphereGeometry(7, 14, 10), mat.dark); t.position.copy(P(x, y - 14, PIPE_Y + 18)); scene.add(t); wire([[x, y], [x, y - 14]], 2); }
function openEnd(x, y, rot) { const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); g.rotation.y = rot; scene.add(g); const c = new T.Mesh(new T.CylinderGeometry(4, 4, 40, 10), mat.metal); c.rotation.x = Math.PI / 2; g.add(c); }
function checkValve(x, y) { const sh = new T.Shape([new T.Vector2(-14, -14), new T.Vector2(14, -14), new T.Vector2(0, 12)]); const m = new T.Mesh(new T.ShapeGeometry(sh), mat.dark); m.rotation.x = -Math.PI / 2; m.position.copy(P(x, y, PIPE_Y + 16)); scene.add(m); const b = new T.Mesh(new T.CylinderGeometry(16, 16, 26, 20), mat.metal); b.rotation.z = Math.PI / 2; b.position.copy(P(x, y, PIPE_Y)); scene.add(b); }
// small round dial on a canvas (thermometers, V meter); redrawn only when the value changes
function dial(x, y) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const tex = new T.CanvasTexture(c); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const top = new T.MeshBasicMaterial({ map: tex }), side = new T.MeshStandardMaterial({ color: '#c9d2d7', metalness: .7, roughness: .3 });
  const m = new T.Mesh(new T.CylinderGeometry(20, 20, 8, 32), [side, top, side]); m.position.copy(P(x, y, PIPE_Y)); scene.add(m);
  let shown = null;
  return v => {
    const r = Math.round(v); if (r === shown) return; shown = r; const g = c.getContext('2d');
    g.fillStyle = '#f4f7f8'; g.beginPath(); g.arc(128, 128, 124, 0, 7); g.fill(); g.strokeStyle = '#1d2327'; g.lineWidth = 10; g.stroke();
    g.lineWidth = 6; for (let i = 0; i <= 10; i++) { const a = Math.PI * .75 + i / 10 * Math.PI * 1.5; g.beginPath(); g.moveTo(128 + Math.cos(a) * 92, 128 + Math.sin(a) * 92); g.lineTo(128 + Math.cos(a) * 112, 128 + Math.sin(a) * 112); g.stroke(); }
    const a = Math.PI * .75 + Math.min(1, Math.max(0, v / 300)) * Math.PI * 1.5; g.strokeStyle = '#c8322b'; g.lineWidth = 10; g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.cos(a) * 96, 128 + Math.sin(a) * 96); g.stroke();
    g.fillStyle = '#1d2327'; g.beginPath(); g.arc(128, 128, 14, 0, 7); g.fill(); tex.needsUpdate = true;
  };
}

// ---- layout: positions and connections taken from the supplied drawing
// pit air → riser → junction J → 123 → 58 → overboard; J → header → 122 / 134
// every cell is piped: the left cells' vents feed a collecting manifold into the riser; the inlet line feeds a
// distribution manifold with a drop to each right-hand cell
const MAN_Y = 1288, left = batteries.filter(c => c.x < 1000).sort((a, b) => b.x - a.x), right = batteries.filter(c => c.x > 1000).sort((a, b) => b.x - a.x);
// each cell joins its manifold with a clear hose to the vent nipple, as the batteries do on screen 1
// as on screen 1, each cell's hose leaves its tee beside the cell and curves down onto the vent nipple
const teeX = c => c.nip.x + 1000 - 46;
const hose = c => {
  const N = c.nip, nx = N.x + 1000, ny = N.z + 786, tx = teeX(c), h = PIPE_Y;
  return [P(tx, MAN_Y, h), P(tx - 3, MAN_Y + 26, h + 18), P(tx + 6, ny - 8, h + 26), P(nx - 20, ny + 2, N.y + 20), P(nx - 7, ny, N.y + 7), N.clone()];
};
// visible joints: a tee collar where each hose leaves the manifold and a hose clip on each cell's vent nipple
const jointMat = new T.MeshStandardMaterial({ color: '#c9d2d7', metalness: .75, roughness: .3 });
for (const c of batteries) {
  const tee = new T.Mesh(new T.CylinderGeometry(14, 14, 16, 20), jointMat); tee.rotation.z = Math.PI / 2; tee.position.copy(P(teeX(c), MAN_Y, PIPE_Y)); scene.add(tee);
  const boss = new T.Mesh(new T.CylinderGeometry(7.5, 7.5, 14, 16), jointMat); boss.position.copy(P(teeX(c), MAN_Y + 10, PIPE_Y)); boss.rotation.x = Math.PI / 2; scene.add(boss);
  const clip = new T.Mesh(new T.CylinderGeometry(7, 7, 8, 16), jointMat); clip.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), c.up); clip.position.copy(c.nip).addScaledVector(c.up, 5); scene.add(clip);
}
left.forEach((c, i) => {
  pipe('cellL' + i, 'ML' + i, f => f.out / 4, null, 'dirty', { r: 5.5, curve: new T.CatmullRomCurve3(hose(c).reverse()) });
  const x = teeX(c), next = left[i + 1] ? teeX(left[i + 1]) : 270;
  pipe('ML' + i, left[i + 1] ? 'ML' + (i + 1) : 'R0', f => f.out * (i + 1) / 4, [[x, MAN_Y], [next, MAN_Y]], 'dirty', { r: 11 });
});
pipe('R0', 'J', 'out', [[270, MAN_Y], [270, 1095]], 'dirty');
for (const [x, sgn] of [[teeX(left[0]), 1], [teeX(right[right.length - 1]), -1]]) { const cap = new T.Mesh(new T.CylinderGeometry(12, 12, 8, 20), jointMat); cap.rotation.z = Math.PI / 2; cap.position.copy(P(x + sgn * 14, MAN_Y, PIPE_Y)); scene.add(cap); }   // blind ends
pipe('J', 'v123', 'draught', [[270, 1095], [270, 1000]], 'dirty');
pipe('v123', 'v58', 'draught', [[270, 1000], [270, 360], [140, 360]], 'dirty');
pipe('v58', 'overboard', 'draught', [[140, 360], [60, 360]], 'dirty');
pipe('vent', 'v58', 'draught', [[300, 320], [300, 360], [270, 360]], 'room');   // open vent head joining the exhaust
pipe('J', 'H', 'header', [[270, 1095], [385, 1095]], 'dirty');
pipe('H', 'v122', 'qm', [[385, 1095], [385, 1000]], 'dirty');
pipe('H', 'v134', 'qgPit', [[385, 1095], [520, 1095], [520, 990]], 'dirty');
// treatment: 122 → 101 → filter → flaps 103 → H₂ burners → TC → cooler → TC → split to 109 / 110
pipe('v122', 'S1', 'qm', [[385, 1000], [385, 585]], 'dirty');
pipe('S1', 'fa', 'qa', [[385, 585], [385, 440], [490, 440]], 'dirty');
pipe('S1', 'fb', 'qb', [[385, 585], [490, 585]], 'dirty');
pipe('fa', 'h1', 'qa', [[490, 440], [585, 440]], 'dirty');
pipe('fb', 'h2', 'qb', [[490, 585], [595, 585]], 'dirty');
pipe('h1', 'J2', 'qa', [[695, 440], [790, 440], [790, 512]], 'clean');
pipe('h2', 'J2', 'qb', [[705, 585], [790, 585], [790, 512]], 'clean');
pipe('J2', 'S2', 'qm', [[790, 512], [1035, 512]], 'clean');
pipe('S2', 'v109', 'q1', [[1035, 512], [1035, 420], [1140, 420]], 'clean');
pipe('S2', 'v110', 'q2', [[1035, 512], [1035, 555], [1150, 555]], 'clean');
// blower outlets → common line → 114 (compartment) and 117 (return to the pit through the non-return valve)
pipe('J3', 'T117', 'qm', [[1445, 450], [1545, 450]], 'clean');
pipe('T117', 'v114', 'toCompt', [[1545, 450], [1580, 450]], 'clean');
pipe('v114', 'compartment', 'toCompt', [[1580, 450], [1625, 450]], 'clean');
pipe('T117', 'v117', 'recirc', [[1545, 450], [1545, 960]], 'clean');
pipe('v117', 'J4', 'recirc', [[1545, 960], [1545, 1020], [1640, 1020]], 'clean');
// fresh compartment air → inlet valve → pit
pipe('compt', 'vin', 'inlet', [[1675, 790], [1640, 790], [1640, 950]], 'room');
pipe('vin', 'J4', 'inlet', [[1640, 950], [1640, 1020]], 'room');
pipe('J4', 'MR0', 'pitIn', [[1640, 1020], [1640, MAN_Y]], 'room');
right.forEach((c, i) => {
  const x = teeX(c), from = i ? teeX(right[i - 1]) : 1640;
  pipe('MR' + i, 'MR' + (i + 1), f => (f.inlet + f.recirc) * (4 - i) / 4, [[from, MAN_Y], [x, MAN_Y]], 'room', { r: 11 });
  pipe('MR' + (i + 1), 'cellR' + i, f => (f.inlet + f.recirc) / 4, null, 'room', { r: 5.5, curve: new T.CatmullRomCurve3(hose(c)) });
});
// galley: compartment → galley flap (the 134 and blower pipes are added once the blower model is placed)
pipe('compt', 'fg', 'qgRoom', [[625, 750], [560, 750], [560, 825]], 'room');

valve('v123', 270, 1000, true, 'Valve 123', 'left');
valve('v58', 140, 360, false, 'Exhaust Klinket 58', 'top');
valve('v122', 385, 1000, true, 'Valve 122', 'right');
valve('v109', 1140, 420, false, 'Valve 109');
valve('v110', 1150, 555, false, 'Valve 110');
valve('v114', 1580, 450, false, 'Valve 114');
valve('v117', 1545, 960, true, 'Valve 117', 'left');
valve('vin', 1640, 950, true, 'Inlet valve', 'right');
valve('v134', 520, 990, true, 'Valve 134', 'right');
flap('fa', 'a', 490, 440, 'Flap 103 (burner 1)');
flap('fb', 'b', 490, 585, 'Flap 103 (burner 2)');
Object.assign(valve('fg', 560, 825, true, 'Galley flap', 'right'), { type: 'flap', key: 'g' });   // drawn as a valve
burner('h1', 'a', 640, 440, 'H₂ burner 1');
burner('h2', 'b', 650, 585, 'H₂ burner 2');
// blowers: suction pipe into the eye, discharge from the red outlet up to the common line (drawing: outlets up, then right)
// blowers: suction pipe into the eye, discharge from the red outlet up to the common line (drawing: outlets up, then right)
const suction = (x0, y, x1, h) => [[x0, y], [x0 + 45, y], [x0 + 70, y, h], [x1, y, h], [x1, y, PIPE_Y]];
// the glass suction pipe disappears over the cream blower body, so its run over the motor and down into the inlet eye
// is a solid duct, ending in a collar at the eye — the connection reads clearly from above
const ductMat = new T.MeshStandardMaterial({ color: '#a9b4ba', metalness: .7, roughness: .35 });
function inletDuct(pts) {
  scene.add(new T.Mesh(new T.TubeGeometry(roundedPath(pts.slice(1)), 48, 12, 16, false), ductMat));
  const [x, y] = pts[pts.length - 1], collar = new T.Mesh(new T.TorusGeometry(14, 4, 10, 24), ductMat); collar.rotation.x = Math.PI / 2; collar.position.copy(P(x, y, PIPE_Y + 2)); scene.add(collar);
}
blower('b1', 1300, 420, 118, 'Blower 1', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v109', 'b1', 'q1', suction(1140, 420, 1300, h), 'clean'); inletDuct(suction(1140, 420, 1300, h));
  pipe('b1', 'J3', 'q1', [[fx, fy, fh], [ax, ay, ah], [1445, ay, ah], [1445, 450]], 'clean');   // as drawn: out of the top, straight right, down to the common line
});
blower('b2', 1300, 555, 118, 'Blower 2', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v110', 'b2', 'q2', suction(1150, 555, 1300, h), 'clean'); inletDuct(suction(1150, 555, 1300, h));
  pipe('b2', 'J3', 'q2', [[fx, fy, fh], [ax, ay, ah], [1445, ay, ah], [1445, 450]], 'clean');   // out of the top, straight right, up to the common line
});
blower('bg', 650, 880, 100, 'Galley blower', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v134', 'bg', 'qgPit', [[520, 990], [520, 880], ...suction(560, 880, 650, h)], 'dirty'); inletDuct(suction(560, 880, 650, h));
  pipe('fg', 'bg', 'qgRoom', [[560, 825], [560, 880]], 'room');
  pipe('bg', 'galley', 'qg', [[fx, fy, fh], [ax, ay, ah], [780, ay, ah]], 'dirty');   // straight right to the galley
  arrow(830, ay, 'r', 'dirty', 'qg', 2, 26);
});
diamond(385, 760, 'filter'); diamond(910, 512, 'cool');
{ const m = new T.Mesh(new T.BoxGeometry(34, 26, 30), mat.dark); m.position.copy(P(345, 890, PIPE_Y)); scene.add(m); const cap = new T.Mesh(new T.CylinderGeometry(9, 9, 10, 16), mat.metal); cap.position.copy(P(338, 890, PIPE_Y + 18)); scene.add(cap); wire([[362, 890], [385, 890]], 4); }   // 101
const thermo = [dial(632, 690), dial(694, 690)];                                 // thermometers across burner 2 (in / out)
wire([[580, 585], [580, 690], [612, 690]]); wire([[652, 690], [674, 690]]); wire([[714, 690], [745, 690], [745, 585]]);
wire([[845, 512], [845, 345], [877, 345]]); wire([[917, 345], [950, 345], [950, 512]]);   // V meter across the cooler
const vDial = dial(897, 345);
probe(755, 440); probe(770, 585); probe(990, 512);                               // thermocouples (TC)
checkValve(1595, 1020); openEnd(300, 300, 0); openEnd(625, 750, Math.PI / 2);
// small fittings on the lines, as drawn: ╤ test points, the joint / nipple / flexible joint on the 122 line, ▲ on the riser
function testPoint(x, y) { const g = new T.Group(); g.position.copy(P(x, y - 22, PIPE_Y + 10)); scene.add(g); g.add(new T.Mesh(new T.BoxGeometry(2.5, 3, 12), mat.dark)); for (const z of [-6, -11]) { const b = new T.Mesh(new T.BoxGeometry(14, 3, 2.5), mat.dark); b.position.z = z; g.add(b); } }
[[445, 440], [455, 585], [728, 440], [740, 585], [1468, 450], [1498, 450], [1563, 450]].forEach(([x, y]) => testPoint(x, y));
for (const o of [-5, 5]) { const d = new T.Mesh(new T.CylinderGeometry(17, 17, 3, 20), mat.dark); d.rotation.x = Math.PI / 2; d.position.copy(P(385, 1060 + o, PIPE_Y)); scene.add(d); }   // ⊣⊢
{ const g = new T.Group(); g.position.copy(P(385, 950, PIPE_Y)); scene.add(g); const st = new T.Mesh(new T.BoxGeometry(18, 3, 2.5), mat.dark); st.position.x = -22; g.add(st); const cb = new T.Mesh(new T.BoxGeometry(2.5, 3, 10), mat.dark); cb.position.x = -31; g.add(cb); }   // ⊢
for (const o of [-6, 0, 6]) { const r = new T.Mesh(new T.TorusGeometry(15, 2, 8, 24), mat.dark); r.position.copy(P(385, 842 + o, PIPE_Y)); scene.add(r); }   // {⊢
{ const t = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-13, -10), new T.Vector2(13, -10), new T.Vector2(0, 14)])), new T.MeshBasicMaterial({ color: '#5d6b72' })); t.rotation.x = -Math.PI / 2; t.position.copy(P(270, 630, PIPE_Y + 18)); scene.add(t); }   // ▲
louvre(1645, 450, 'r'); louvre(1690, 790, 'l');
arrow(1720, 450, 'r', 'clean', 'toCompt'); arrow(1765, 790, 'l', 'room', 'inlet'); arrow(30, 360, 'l', 'dirty', 'draught', 1);
arrow(680, 750, 'l', 'room', 'qgRoom', 1); arrow(365, 345, 'l', 'room', 'draught', 1);
arrow(360, 1345, 'l', 'dirty', 'out', 2, 40); arrow(1600, 1285, 'l', 'room', 'pitIn', 2, 40);

// ---------------------------------------------------------------- state
const initial = () => ({
  running: false,
  open: { v58: false, v123: false, v122: false, v134: false, v109: false, v110: false, v114: false, v117: false, vin: false },
  flap: { a: false, b: false, g: false },
  on: { b1: false, b2: false, bg: false },
  set: { b1: 1, b2: 1, bg: 1 },                          // speed set point 0.2..1 (blower viewer Speed)
  burn: { a: false, b: false },
  pit: { h2: 0, Ta: EST.ambient, Tb: EST.ambient, Tcool: EST.ambient, after: 0, burnt: 0 }
});
const S = initial();
let flows = ventFlows({ open: S.open, flap: S.flap, speed: { b1: 0, b2: 0, bg: 0 } });
const isOn = p => p.type === 'valve' ? S.open[p.key] : p.type === 'flap' ? S.flap[p.key] : p.type === 'blower' ? S.on[p.key] : S.burn[p.key];
const stateWord = p => p.type === 'blower' ? (S.on[p.key] ? 'RUNNING' : 'STOPPED') : p.type === 'burner' ? (S.burn[p.key] ? 'ON' : 'OFF') : isOn(p) ? 'OPEN' : 'CLOSED';

// Which pipes the air has reached: from the pit (and the compartment intakes) through every open valve / flap and
// running blower; it stops at the first closed one.
const passes = n => n in S.open ? S.open[n] : n === 'fa' ? S.flap.a : n === 'fb' ? S.flap.b : n === 'fg' ? S.flap.g : n in S.on ? S.on[n] : true;
function reach() {
  const got = new Set(S.running ? ['cellL0', 'cellL1', 'cellL2', 'cellL3', 'compt', 'vent'] : []);
  for (const p of pipes) p.reached = false;
  for (let changed = true; changed;) {
    changed = false;
    for (const p of pipes) if (!p.reached && got.has(p.from) && passes(p.from)) { p.reached = true; changed = true; got.add(p.to); }
  }
}

// ---------------------------------------------------------------- DOM overlay: touch areas, readouts, banners
{
  const st = document.createElement('style');
  st.textContent = `#vent-warning,#h2-alarm{position:absolute;left:50%;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center;background:#1d2224ee}
#vent-warning{top:18px;border:1.5px solid #e74c3c;color:#ff5a4d;opacity:0}#vent-warning.info{border-color:#22b45a;color:#bff5cf}
#h2-alarm{bottom:14px;border:1.5px solid #ffb020;color:#ffd27a;display:none}#h2-alarm.red{border-color:#ff4a3d;color:#ff8c84}`;
  document.head.append(st);
}
for (const p of parts.values()) {
  const b = document.createElement('button'); b.className = 'part-button'; b.setAttribute('aria-label', p.title); b.dataset.part = p.id;
  b.addEventListener('click', () => tap(p.id)); labelsRoot.append(b); p.button = b;
}
const warnEl = document.createElement('div'); warnEl.id = 'vent-warning'; warnEl.setAttribute('role', 'alert'); circuit.append(warnEl);
const alarmEl = document.createElement('div'); alarmEl.id = 'h2-alarm'; alarmEl.setAttribute('role', 'status'); circuit.append(alarmEl);
let warnTimer = 0;
function notify(msg, info = false) { warnEl.textContent = msg; warnEl.className = info ? 'info' : ''; warnEl.style.opacity = '1'; clearTimeout(warnTimer); warnTimer = setTimeout(() => { warnEl.style.opacity = '0'; }, info ? 2200 : 4000); }
const warn = msg => notify(msg);

// ---------------------------------------------------------------- operating rules
const NAMES = { v58: '58', v123: '123', v122: '122', v134: '134', v109: '109', v110: '110', v114: '114', v117: '117', vin: 'the INLET valve' };
function missingFor(k) {
  const o = S.open, f = S.flap, m = [];
  if (k === 'bg') { if (!o.v134 && !f.g) m.push('134 or the galley flap'); return m; }
  if (!o.v122) m.push('122'); if (!f.a && !f.b) m.push('a FLAP 103');
  if (k === 'b1' && !o.v109) m.push('109'); if (k === 'b2' && !o.v110) m.push('110'); if (!o.v114 && !o.v117) m.push('114 or 117');
  return m;
}
// closing a valve or flap that a running blower depends on is refused
function closeBlocker(p) {
  const o = S.open, f = S.flap, on = S.on, main = on.b1 || on.b2, k = p.key;
  if (p.type === 'valve') {
    if (k === 'v109' && on.b1) return 'Stop Blower 1 before closing 109.';
    if (k === 'v110' && on.b2) return 'Stop Blower 2 before closing 110.';
    if (k === 'v122' && main) return 'Stop the running blower before closing 122.';
    if ((k === 'v114' && !o.v117 || k === 'v117' && !o.v114) && main) return 'Stop the running blower before closing ' + NAMES[k] + ' — it is the only outlet.';
    if (k === 'v134' && on.bg && !f.g) return 'Stop the galley blower before closing 134.';
  } else if (p.type === 'flap') {
    if ((k === 'a' || k === 'b') && main && !(k === 'a' ? f.b : f.a)) return 'Stop the blowers before closing the last FLAP 103.';
    if (k === 'g' && on.bg && !o.v134) return 'Stop the galley blower before closing its flap.';
  }
  return '';
}
const tapAt = {};
function tap(id) {
  const now = performance.now(); if (now - (tapAt[id] ?? -1e9) < 450) return; tapAt[id] = now;
  const p = parts.get(id);
  if (!S.running) { warn('⚠ Circuit is OFF — press Start first.'); return; }
  if (p.type === 'valve' || p.type === 'flap') {
    const store = p.type === 'valve' ? S.open : S.flap;
    if (store[p.key]) { const b = closeBlocker(p); if (b) { warn('⚠ ' + b); return; } }
    store[p.key] = !store[p.key];
    if (p.wheel) p.wheelTarget = store[p.key] ? p.openAngle : p.closedAngle; if (p.blade) p.bladeTarget = store[p.key] ? 0 : Math.PI / 2;
  } else if (p.type === 'blower') {
    if (!S.on[p.key]) { const m = missingFor(p.key); if (m.length) { warn('⚠ ' + p.title + ' cannot start — open ' + m.join(', ') + ' first.'); return; } }
    S.on[p.key] = !S.on[p.key];
    if (S.on[p.key] && p.key !== 'bg' && !S.open.vin && !S.open.v117) setTimeout(() => S.on[p.key] && !S.open.vin && !S.open.v117 && warn('⚠ INLET valve is closed — the pit cannot draw fresh air.'), 1500);
  } else if (p.type === 'burner') {
    S.burn[p.key] = !S.burn[p.key];
    const q = p.key === 'a' ? flows.qa : flows.qb;
    if (S.burn[p.key] && q <= 0) { warn('⚠ ' + p.title + ' is ON but has no air — open 122 and its FLAP 103, and run a blower.'); return; }
  }
  notify(p.title + ' · ' + stateWord(p), true);
}
// ---------------------------------------------------------------- i on the major parts: the blower viewer for each blower,
// and the battery cell view from screen 1 for each battery bank
const blowerView = (id, title, flow) => openBlowerDetail({
  title, flow, speed: () => parts.get(id).speed, running: () => S.on[id], setPoint: () => S.set[id], setSpeed: v => { S.set[id] = v; },
  toggle: () => { const before = S.on[id]; tapAt[id] = -1e9; tap(id); return S.on[id] === before ? warnEl.textContent : ''; }
});
const SPOTS = [
  ['b1', 1355, 468, () => blowerView('b1', 'Blower 1', () => flows.q1)], ['b2', 1355, 603, () => blowerView('b2', 'Blower 2', () => flows.q2)],
  ['bg', 705, 925, () => blowerView('bg', 'Galley blower', () => flows.qg)],
  ['cellsL', 760, 1350, () => openBatteryDetail({ side: 'port', pressure: .145, title: 'Battery cell · left bank (pit air out)' })],
  ['cellsR', 1550, 1350, () => openBatteryDetail({ side: 'stbd', pressure: .145, title: 'Battery cell · right bank (fresh air in)' })]
].map(([id, x, y, open]) => { const b = document.createElement('button'); b.className = 'vinfo'; b.setAttribute('aria-label', id + ' details'); b.innerHTML = '<span>i</span>'; b.addEventListener('click', open); labelsRoot.append(b); return { id, x, y, button: b }; });
{
  const st = document.createElement('style');
  st.textContent = `.vinfo{position:absolute;transform:translate(-50%,-50%);width:44px;height:44px;border:0;background:transparent;pointer-events:auto;padding:0;cursor:pointer}
.vinfo span{display:block;margin:auto;width:24px;height:24px;border-radius:50%;border:2px solid #1f3a33;color:#1f3a33;font:700 15px/20px Georgia,serif;text-align:center;background:#ffffffd9}`;
  document.head.append(st);
}
const startBtn = document.querySelector('#start'), resetBtn = document.querySelector('#reset');
function allOff() {
  for (const k in S.open) S.open[k] = false; for (const k in S.flap) S.flap[k] = false; for (const k in S.on) S.on[k] = false; for (const k in S.burn) S.burn[k] = false;
  for (const p of parts.values()) { if (p.wheel) p.wheelTarget = p.closedAngle; if (p.blade) p.bladeTarget = Math.PI / 2; }
}
function showRunState() { startBtn.innerHTML = S.running ? '<span>Ⅱ</span> Pause' : '<span>▶</span> Start'; startBtn.setAttribute('aria-pressed', String(S.running)); }
startBtn.addEventListener('click', () => { S.running = !S.running; if (!S.running) allOff(); showRunState(); });     // Pause: everything closes and stops, as on screen 1
resetBtn?.addEventListener('click', () => { S.running = false; allOff(); Object.assign(S.pit, initial().pit); showRunState(); notify('Circuit reset — all valves closed, H₂ cleared.', true); });
showRunState();

// ---------------------------------------------------------------- layout and screen positions
const v3 = new T.Vector3();
function screenPoint(x, y, h = PIPE_Y) { v3.copy(P(x, y, h)).project(camera); return [(v3.x + 1) / 2 * host.clientWidth, (1 - v3.y) / 2 * host.clientHeight]; }
let pxPerUnit = 1;
function layout() {
  const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
  if (renderer.getPixelRatio() !== sharpRatio()) renderer.setPixelRatio(sharpRatio());
  renderer.setSize(w, h);
  const PW = 1940, PH = 1340, cx = 990 - 1000, cz = 895 - 786, aspect = w / h;
  let hw, hh; if (aspect > PW / PH) { hh = PH / 2; hw = hh * aspect; } else { hw = PW / 2; hh = hw / aspect; }
  Object.assign(camera, { left: cx - hw, right: cx + hw, top: -cz + hh, bottom: -cz - hh }); camera.updateProjectionMatrix();
  pxPerUnit = h / (2 * hh);
  for (const p of parts.values()) {
    const [sx, sy] = screenPoint(p.x, p.y), s = Math.max(44, p.size * pxPerUnit);
    Object.assign(p.button.style, { left: sx + 'px', top: sy + 'px', width: s + 'px', height: s + 'px', minWidth: '44px', minHeight: '44px' });
  }
  for (const o of SPOTS) { const [sx, sy] = screenPoint(o.x, o.y, 80); Object.assign(o.button.style, { left: sx + 'px', top: sy + 'px' }); }
}
new ResizeObserver(layout).observe(host);
window.visualViewport?.addEventListener('resize', layout);
layout();

// ---------------------------------------------------------------- loop
const tmpC = new T.Color();
const flowOf = key => typeof key === 'function' ? key(flows) : key === 'pitIn' ? flows.inlet + flows.recirc : key === 'out' ? flows.out : flows[key] || 0;
let last = 0;
function frame(now) {
  const dt = Math.min(.05, Math.max(0, last ? (now - last) / 1000 : .016)); last = Math.max(last, now);
  for (const p of parts.values()) if (p.type === 'blower') {                         // spin up / coast down
    const target = S.on[p.key] ? S.set[p.key] : 0, tau = target > p.speed ? SPIN_UP_S : COAST_S;
    p.speed += (target - p.speed) * (1 - Math.exp(-dt / tau)); if (!target && p.speed < .002) p.speed = 0;
    p.angle += p.speed * MAX_REV_PER_S * Math.PI * 2 * dt; if (p.rotor) p.rotor.rotation.x = p.angle;
  }
  const sp = k => S.on[k] ? parts.get(k).speed : 0;                                // a stopped blower moves no air
  flows = ventFlows({ open: S.open, flap: S.flap, speed: { b1: sp('b1'), b2: sp('b2'), bg: sp('bg') } });
  stepPit(S.pit, flows, S.running ? dt * SIM_SPEED / 3600 : 0, dt, S.running, S.burn);
  reach();

  // pipes and arrows
  const dirty = tmpC.copy(AIR.room).lerp(AIR.dirty, Math.min(1, .8 + S.pit.h2 / 2)), px = pxPerUnit * renderer.getPixelRatio();
  for (const p of pipes) pipeUpdate(p, dt, p.reached ? flowOf(p.key) : 0, p.air === 'dirty' ? dirty : AIR[p.air], px, now);
  const pulse = .55 + .35 * Math.sin(now / 260);
  for (const a of arrows) a.m.opacity = flowOf(a.key) > 1 ? pulse : .3;

  // valve wheels, flap blades, burners, lamps
  for (const p of parts.values()) {
    if (p.wheel) p.wheel.rotation.y += (p.wheelTarget - p.wheel.rotation.y) * Math.min(1, dt * 6);
    if (p.blade) p.blade.rotation.y += (p.bladeTarget - p.blade.rotation.y) * Math.min(1, dt * 6);
    if (p.type === 'burner') {
      const T0 = p.key === 'a' ? S.pit.Ta : S.pit.Tb, k = Math.min(1, Math.max(0, (T0 - EST.ambient) / 110));
      p.mat.emissiveIntensity = 1.4 * k; p.glow.material.opacity = .55 * k; p.flame.material.opacity = Math.max(0, (k - .3) / .7);
      p.flame.scale.setScalar(52 * (.85 + .15 * Math.sin(now / 90 + p.x)));
    }
    const target = !S.running ? LAMP_IDLE : isOn(p) ? LAMP_ON : LAMP_OFF;
    p.lamp.color.lerp(target, Math.min(1, dt * 8)); p.lamp.ring.material.color.copy(p.lamp.color); p.lamp.glow.material.color.copy(p.lamp.color);
  }
  thermo[0](EST.ambient); thermo[1](S.pit.Tb); vDial(flows.velocity * 30);       // burner 2 in (pit air) / out; V across the cooler
  for (const s of haze) s.material.opacity = S.running ? Math.min(.75, .08 + S.pit.h2 / 4 * .67) : 0;
  const gas = S.running ? .25 : 0;
  for (const { b, sc } of batteries) b.update(dt, gas, px * sc);

  // H₂ alarm (the only on-screen message besides warnings)
  const h2 = S.pit.h2;
  if (S.running && h2 >= ALARM) { alarmEl.style.display = 'block'; alarmEl.className = h2 >= DANGER ? 'red' : ''; alarmEl.textContent = h2 >= DANGER ? '⚠ H₂ DANGER ' + h2.toFixed(1) + ' % — explosive limit reached, ventilate now' : '⚠ H₂ HIGH ' + h2.toFixed(1) + ' % — start the battery pit ventilation'; }
  else alarmEl.style.display = 'none';

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
