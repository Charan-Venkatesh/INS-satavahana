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
// phones and tablets (touch, coarse pointer) render at most 2× so the scene fits in their graphics memory
const PHONE = matchMedia('(pointer: coarse)').matches;
function sharpRatio() { return Math.min(PHONE ? 2 : 4, (devicePixelRatio || 1) * (window.visualViewport?.scale || 1)); }
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
const AIR = { dirty: new T.Color('#2a4fc0'), clean: new T.Color('#2457d6'), room: new T.Color('#1f86d1') };   // circuit 1's air blues   // air in cool blue-greys (pit air greyer, treated air bluer), dark enough for the light backdrop
const pipes = [];
function roundedPath(pts, r = 26) {
  const v = pts.map(([x, y, h]) => P(x, y, h ?? PIPE_Y)), path = new T.CurvePath(); let cur = v[0];
  for (let i = 1; i < v.length; i++) {
    const a = v[i - 1], b = v[i], c = v[i + 1];
    if (!c) { path.add(new T.LineCurve3(cur, b)); break; }
    const d1 = b.clone().sub(a), d2 = c.clone().sub(b), rr = Math.min(r, d1.length() / 2, d2.length() / 2);
    const p1 = b.clone().addScaledVector(d1.normalize(), -rr), p2 = b.clone().addScaledVector(d2.normalize(), rr);
    path.add(new T.LineCurve3(cur, p1)); path.add(new T.QuadraticBezierCurve3(p1, b, p2)); cur = p2;
    (path.bends ||= []).push([p1, d1.clone()], [p2, d2.clone()]);
  }
  return path;
}
// ---- fittings: how each pipe end meets what it connects to
// Pipes stop at the face of the part they enter (valve body, flap, filter, cooler, non-return valve, burner, louvre)
// and are bolted to it with a flange; at tees and corner junctions they run into a metal fitting body with a coupling
// sleeve over each joint; every 90° bend is a formed elbow with a weld band at each end. Blower ports keep their own
// flange and inlet duct.
const FACE = { v123: 24, v122: 24, v134: 24, v109: 24, v110: 24, v114: 24, v117: 24, vin: 24, fg: 24, v58: 27, fa: 14, fb: 14, flt: 50, clr: 50, chk: 15 };
const JUNCTIONS = new Set(['J', 'H', 'S1', 'J2', 'S2', 'J3', 'T117', 'J4', 'TV', 'R0', 'MR0']);
const BLOWERS = new Set(['b1', 'b2', 'bg']);
// Joints as on screen 1: a thin steel flange ring with bolt heads at every face a pipe meets, the pipes themselves
// clear glass right through tees and bends (no metal balls or sleeves).
const steel = new T.MeshStandardMaterial({ color: '#c4cbd0', metalness: .95, roughness: .28 }), boltMat = new T.MeshStandardMaterial({ color: '#4a5156', metalness: .9, roughness: .35 });
const UP = new T.Vector3(0, 1, 0);
// every flange ring and bolt is one instance of two shared meshes (two draw calls in all), rebuilt when flanges are added
const FLANGE_RING = new T.CylinderGeometry(1.5, 1.5, .34, 32), FLANGE_BOLT = new T.CylinderGeometry(.13, .13, .62, 10), flangeRings = [], flangeBolts = [];
let flangeMeshes = null;
function flange(at, dir, r) {
  const q = new T.Quaternion().setFromUnitVectors(UP, dir.clone().normalize()), s = new T.Vector3(r, r, r);
  flangeRings.push(new T.Matrix4().compose(at, q, s));
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; flangeBolts.push(new T.Matrix4().compose(at.clone().add(new T.Vector3(Math.cos(a) * r * 1.26, 0, Math.sin(a) * r * 1.26).applyQuaternion(q)), q, s)); }
  flangeMeshes = null;
}
function buildFlanges() {
  for (const [geo, matl, list, i] of [[FLANGE_RING, steel, flangeRings, 0], [FLANGE_BOLT, boltMat, flangeBolts, 1]]) {
    const old = buildFlanges.meshes?.[i]; if (old) { scene.remove(old); old.dispose(); }
    const m = new T.InstancedMesh(geo, matl, list.length); list.forEach((x, k) => m.setMatrixAt(k, x)); m.frustumCulled = false; scene.add(m);
    (buildFlanges.meshes ||= [])[i] = m;
  }
  flangeMeshes = buildFlanges.meshes;
}
// shine: an additive reflection layer over the glass (as on screen 1) so the pipes keep bright highlight streaks
const shineMat = new T.MeshPhysicalMaterial({ color: '#000000', roughness: .02, metalness: 0, envMapIntensity: 1.1, transparent: true, blending: T.AdditiveBlending, depthWrite: false });
function glassTube(geo) { const t = new T.Mesh(geo, mat.glass); t.renderOrder = 6; scene.add(t); const sh = new T.Mesh(geo, shineMat); sh.renderOrder = 7; scene.add(sh); return t; }
const fittedJunctions = new Set();
function junction(name, at, r) { if (fittedJunctions.has(name)) return; fittedJunctions.add(name); const m = new T.Mesh(new T.SphereGeometry(r * .995, 24, 16), mat.glass); m.position.copy(at); m.renderOrder = 6; scene.add(m); }
// shorten a plan polyline at either end so it stops at the face of the part it enters
function trimEnds(pts, a, b) {
  const q = pts.map(p => p.slice()), mv = (i, j, d) => { const [x0, y0] = q[i], [x1, y1] = q[j], L = Math.hypot(x1 - x0, y1 - y0); if (!d || !L) return; const t = Math.min(d, L - 1) / L; q[i][0] = x0 + (x1 - x0) * t; q[i][1] = y0 + (y1 - y0) * t; };
  mv(0, 1, a); mv(q.length - 1, q.length - 2, b); return q;
}
const chevronShape = new T.Shape([new T.Vector2(-9, -11), new T.Vector2(3, 0), new T.Vector2(-9, 11), new T.Vector2(-3, 0)]);
// from / to: node names; key: which flow (m³/h) it carries; air: 'dirty' (pit air with H₂), 'clean' (treated) or 'room'
const hoseMat = new T.MeshPhysicalMaterial({ color: '#efe4b8', roughness: .12, transmission: PHONE ? 0 : .35, thickness: 3, transparent: true, opacity: .85, side: T.DoubleSide });   // no transmission pass on phones   // screen 1 battery hose
function pipe(from, to, key, pts, air, { r = 13, curve = null } = {}) {
  if (!curve) pts = trimEnds(pts, FACE[from] || 0, FACE[to] || 0);
  const path = curve || roundedPath(pts), len = path.getLength();
  const geo = new T.TubeGeometry(path, Math.max(16, Math.round(len / 6)), r, 16, false);
  if (curve) { const h = new T.Mesh(geo, hoseMat); h.renderOrder = 6; scene.add(h); } else glassTube(geo);
  if (!curve && r > 9) {
    for (const [node, u, sgn] of [[from, 0, 1], [to, 1, -1]]) {
      const at = path.getPointAt(u), t = path.getTangentAt(u).multiplyScalar(sgn);   // t points from the end into the pipe
      if (BLOWERS.has(node) || (/^M[LR]\d/.test(node) && !JUNCTIONS.has(node))) continue;   // blower ports and manifold tees have their own
      if (JUNCTIONS.has(node)) { junction(node, at, r); continue; }   // tees and corners: one smooth glass passage, no flanges crowding them
      else flange(at, t, r);
    }
  }
  // air as on screen 1: a bundle of light filaments across the bore with a gentle twist; a bright head with a fading
  // tail runs along each at the pipe's flow speed, and only as far as the air has reached
  const m = new T.ShaderMaterial({ transparent: true, depthWrite: false,
    uniforms: { uPhase: { value: Math.random() * 10 }, uAlpha: { value: 0 }, uReach: { value: 0 }, uLen: { value: len }, uColor: { value: AIR[air].clone() } },
    vertexShader: 'attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.3+.7*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,uColor*.5,head*.6),a);}' });
  const streams = new T.Group(); scene.add(streams); const sPos = [], sU = [], sSeed = [];
  const pts3 = path.getSpacedPoints(Math.max(4, Math.ceil(len / 5))), K = r > 9 ? 22 : 8;   // as circuit 1 (22 trails per pipe)
  for (let k = 0; k < K; k++) {
    const seed = (k * 37 % K) / K, ang0 = k / K * Math.PI * 2, rr = r * (.25 + .55 * ((k * 53 % 97) / 97)), pos = [], us = [], seeds = [];
    for (let i = 0; i < pts3.length; i++) {
      const a = pts3[Math.max(0, i - 1)], b = pts3[Math.min(pts3.length - 1, i + 1)], d = b.clone().sub(a).normalize();
      const n1 = new T.Vector3(0, 1, 0).cross(d); if (n1.lengthSq() < 1e-6) n1.set(1, 0, 0); n1.normalize(); const n2 = d.clone().cross(n1).normalize();
      const uu = len * i / (pts3.length - 1), ang = ang0 + uu * .02, q = pts3[i].clone().addScaledVector(n1, Math.cos(ang) * rr).addScaledVector(n2, Math.sin(ang) * rr);
      pos.push(q.x, q.y, q.z); us.push(uu); seeds.push(seed);
    }
    for (let i = 1; i < us.length; i++) {                        // as segments, so all of a pipe's trails share one draw call
      sPos.push(pos[i * 3 - 3], pos[i * 3 - 2], pos[i * 3 - 1], pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]); sU.push(us[i - 1], us[i]); sSeed.push(seed, seed);
    }
  }
  const sg = new T.BufferGeometry(); sg.setAttribute('position', new T.Float32BufferAttribute(sPos, 3)); sg.setAttribute('aU', new T.Float32BufferAttribute(sU, 1)); sg.setAttribute('aSeed', new T.Float32BufferAttribute(sSeed, 1));
  const lines = new T.LineSegments(sg, m); lines.renderOrder = 4; lines.frustumCulled = false; streams.add(lines);
  let chevron = null;                                                // direction arrow in the middle of the pipe
  if (len > 70) {
    chevron = new T.Mesh(new T.ShapeGeometry(chevronShape), new T.MeshBasicMaterial({ color: AIR[air], transparent: true, opacity: 0, depthWrite: false }));
    const mid = path.getPointAt(.5), t = path.getTangentAt(.5);
    chevron.rotation.order = 'YXZ'; chevron.rotation.set(-Math.PI / 2, Math.atan2(-t.z, t.x), 0); chevron.position.copy(mid).add(new T.Vector3(0, r + 4, 0)); chevron.renderOrder = 7; scene.add(chevron);
  }
  const coreMat = new T.ShaderMaterial({ transparent: true, depthWrite: false,
    uniforms: { uColor: { value: AIR[air].clone() }, uAlpha: { value: 0 }, uReach: { value: 0 }, uPhase: { value: Math.random() }, uLen: { value: len } },
    vertexShader: 'varying float vU;void main(){vU=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform vec3 uColor;uniform float uAlpha;uniform float uReach;uniform float uPhase;uniform float uLen;varying float vU;void main(){if(vU>uReach)discard;float x=fract(vU*uLen/60.-uPhase);float band=smoothstep(0.,.25,x)*(1.-smoothstep(.45,.75,x));vec3 deep=vec3(.03,.16,.55);gl_FragColor=vec4(mix(deep,deep*.45,band),uAlpha*(.62+.3*band));}' });
  const core = new T.Mesh(new T.TubeGeometry(path, Math.max(16, Math.round(len / 6)), r * .72, 12, false), coreMat); core.renderOrder = 3; scene.add(core); core.visible = false;   // dark-blue flow band
  const N = Math.max(8, Math.round(len / 4)), lut = path.getSpacedPoints(N - 1), nb = Math.max(3, Math.round(len / (r > 9 ? 16 : 22)));
  const bpos = new Float32Array(nb * 3), bal = new Float32Array(nb), bsz = new Float32Array(nb), bgeo = new T.BufferGeometry();
  bgeo.setAttribute('position', new T.BufferAttribute(bpos, 3).setUsage(T.DynamicDrawUsage)); bgeo.setAttribute('aAlpha', new T.BufferAttribute(bal, 1).setUsage(T.DynamicDrawUsage)); bgeo.setAttribute('aSize', new T.BufferAttribute(bsz, 1));
  const bubbles = Array.from({ length: nb }, (_, i) => { bsz[i] = r * (.45 + Math.random() * .45); return { u: Math.random(), off: (Math.random() * 2 - 1) * r * .45, h: (Math.random() * 2 - 1) * r * .3, sp: .8 + Math.random() * .4, wob: Math.random() * 6.28 }; });
  const bmat = new T.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uColor: { value: AIR[air].clone() }, uScale: { value: 1 }, uAlpha: { value: 0 } },
    vertexShader: 'attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
    fragmentShader: 'uniform vec3 uColor;uniform float uAlpha;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float d=length(c)*2.;if(d>1.)discard;float rim=smoothstep(.62,.82,d)*(1.-smoothstep(.9,1.,d));float glint=smoothstep(.28,.0,length(c-vec2(-.17,-.17))*2.);vec3 col=mix(uColor,vec3(1.),glint*.8);float a=(rim*.95+.22*(1.-d)+glint*.6)*vA*uAlpha;if(a<.01)discard;gl_FragColor=vec4(col,a);}' });
  const bpts = new T.Points(bgeo, bmat); bpts.frustumCulled = false; bpts.renderOrder = 5; scene.add(bpts);
  const ns = Math.max(4, Math.round(len / (r > 9 ? 6 : 9))), spos = new Float32Array(ns * 3), sal = new Float32Array(ns), ssz = new Float32Array(ns), sgeo = new T.BufferGeometry();
  sgeo.setAttribute('position', new T.BufferAttribute(spos, 3).setUsage(T.DynamicDrawUsage)); sgeo.setAttribute('aAlpha', new T.BufferAttribute(sal, 1).setUsage(T.DynamicDrawUsage)); sgeo.setAttribute('aSize', new T.BufferAttribute(ssz, 1));
  const snow = Array.from({ length: ns }, (_, i) => { ssz[i] = r * (.18 + Math.random() * .22); return { u: Math.random(), off: (Math.random() * 2 - 1) * r * .7, h: (Math.random() * 2 - 1) * r * .5, sp: .6 + Math.random() * .8, ph: Math.random() * 6.28, a: .6 + Math.random() * .4 }; });
  const smat = new T.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uScale: { value: 1 }, uAlpha: { value: 0 } },
    vertexShader: 'attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
    fragmentShader: 'uniform float uAlpha;varying float vA;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=mix(vec3(1.),vec3(.55,.62,.68),smoothstep(.55,1.,d));float a=(1.-smoothstep(.75,1.,d))*vA*uAlpha;if(a<.01)discard;gl_FragColor=vec4(col,a);}' });
  const spts = new T.Points(sgeo, smat); spts.frustumCulled = false; spts.renderOrder = 5; scene.add(spts);
  const p = { from, to, key, air, path, len, mat: m, streams, chevron, fill: 0, show: 0, reached: false, lut, N, bubbles, bpos, bal, bgeo, bmat, bpts, snow, spos, sal, sgeo, smat, spts, core, coreMat };
  pipes.push(p); return p;
}
function pipeUpdate(p, dt, q, color, px, now) {
  p.fill = Math.min(1, Math.max(0, p.fill + (p.reached ? 1 : -1.6) * FILL_SPEED * dt / p.len));
  const flowing = q > 1, target = p.fill > 0 ? (flowing ? 1 : .4) : 0;     // blocked air rests dimly against the closed part
  p.show += (target - p.show) * Math.min(1, dt * 4);
  const u = p.mat.uniforms; u.uAlpha.value = p.show; u.uReach.value = p.fill; u.uColor.value.copy(color);
  u.uPhase.value += dt * (flowing ? .2 + 1 * Math.min(1.5, q / 600) : 0);
  p.streams.visible = p.show > .01;
  const cu = p.coreMat.uniforms; cu.uAlpha.value = p.show; cu.uReach.value = p.fill; cu.uColor.value.copy(color); p.core.visible = p.streams.visible;   // the dark-blue flow, clear on large displays
  cu.uPhase.value += dt * (flowing ? .5 + .9 * Math.min(1.5, q / 600) : 0);       // pulses travel with the flow; still when blocked
  // bubbles ride the flow; where the air is blocked they drift slowly up to the closed part
  const b = p.bmat.uniforms; b.uAlpha.value = p.show; b.uScale.value = px; b.uColor.value.copy(color); p.bpts.visible = false;
  if (false) {
    const v = (flowing ? 16 + 84 * Math.min(1.5, q / 600) : 6) / p.len, t = now / 1000;
    for (let i = 0; i < p.bubbles.length; i++) {
      const s = p.bubbles[i]; s.u += v * s.sp * dt; if (s.u >= (flowing ? 1 : p.fill)) s.u = flowing ? s.u % 1 : Math.random() * p.fill * .3;
      const f = Math.min(1, s.u) * (p.N - 1), k = Math.floor(f), w = f - k, a = p.lut[k], c = p.lut[Math.min(p.N - 1, k + 1)];
      const dx = c.x - a.x, dz = c.z - a.z, L = Math.hypot(dx, dz) || 1, off = s.off + Math.sin(t * 3 + s.wob) * 1.5;
      p.bpos[i * 3] = a.x + dx * w - dz / L * off; p.bpos[i * 3 + 1] = a.y + (c.y - a.y) * w + s.h + 2; p.bpos[i * 3 + 2] = a.z + dz * w + dx / L * off;
      p.bal[i] = s.u <= p.fill ? 1 : 0;
    }
    p.bgeo.attributes.position.needsUpdate = p.bgeo.attributes.aAlpha.needsUpdate = true;
    // snow flakes: drift along a little slower than the bubbles, tumbling across the bore
    p.smat.uniforms.uAlpha.value = p.show; p.smat.uniforms.uScale.value = px;
    for (let i = 0; i < p.snow.length; i++) {
      const s = p.snow[i]; s.u += v * .8 * s.sp * dt; if (s.u >= (flowing ? 1 : p.fill)) s.u = flowing ? s.u % 1 : Math.random() * p.fill * .3;
      const f = Math.min(1, s.u) * (p.N - 1), k = Math.floor(f), w = f - k, a = p.lut[k], c = p.lut[Math.min(p.N - 1, k + 1)];
      const dx = c.x - a.x, dz = c.z - a.z, L = Math.hypot(dx, dz) || 1, off = s.off + Math.sin(t * 1.6 + s.ph) * 3;
      p.spos[i * 3] = a.x + dx * w - dz / L * off; p.spos[i * 3 + 1] = a.y + (c.y - a.y) * w + s.h + Math.cos(t * 1.3 + s.ph) * 2; p.spos[i * 3 + 2] = a.z + dz * w + dx / L * off;
      p.sal[i] = s.u <= p.fill ? s.a : 0;
    }
    p.sgeo.attributes.position.needsUpdate = p.sgeo.attributes.aAlpha.needsUpdate = true;
  }
  p.spts.visible = false;
  if (p.chevron) { p.chevron.visible = false; p.chevron.material.color.copy(color); p.chevron.material.opacity = p.fill > .5 ? (flowing ? .55 + .4 * Math.sin(now / 200 + p.len) : .3) : 0; }
}
// plumes: where air leaves the circuit (overboard past 58, TO COMPT louvre, galley discharge) a thick blue-white snowy
// cloud pours out, narrow at the mouth, slowing and spreading as it mixes; strength follows the flow. Appearance only.
const plumes = [];
function plume(x, y, dx, dy, key) {
  const n = 560, pos = new Float32Array(n * 3), al = new Float32Array(n), sz = new Float32Array(n), geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.BufferAttribute(pos, 3).setUsage(T.DynamicDrawUsage)); geo.setAttribute('aAlpha', new T.BufferAttribute(al, 1).setUsage(T.DynamicDrawUsage)); geo.setAttribute('aSize', new T.BufferAttribute(sz, 1).setUsage(T.DynamicDrawUsage));
  const m = new T.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uScale: { value: 1 } },
    vertexShader: 'attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
    fragmentShader: 'varying float vA;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=pow(1.-d,1.8)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.42,.58,.66),vec3(.80,.89,.93),pow(1.-d,2.)),a);}' });
  const pts = new T.Points(geo, m); pts.frustumCulled = false; pts.renderOrder = 8; scene.add(pts);
  const parts = Array.from({ length: n }, () => ({ age: Math.random(), life: 1.6 + Math.random() * 1.2, live: false }));
  plumes.push({ o: P(x, y, PIPE_Y + 6), d: new T.Vector3(dx, 0, dy).normalize(), key, pos, al, sz, geo, mat: m, pts, parts, level: 0 });
}
function plumeUpdate(pl, dt, q) {
  pl.level += ((q > 1 ? Math.min(1, .75 + q / 700) : 0) - pl.level) * Math.min(1, dt * 2);
  pl.mat.uniforms.uScale.value = pxPerUnit * renderer.getPixelRatio(); pl.pts.visible = pl.level > .01;
  if (!pl.pts.visible) return;
  const side = new T.Vector3(-pl.d.z, 0, pl.d.x);
  for (let i = 0; i < pl.parts.length; i++) {
    const p = pl.parts[i]; p.age += dt / p.life;
    if (p.age >= 1) { p.age %= 1; p.live = Math.random() < pl.level; p.sp = .75 + Math.random() * .5; p.sw = (Math.floor(Math.random() * 5) - 2) / 2 + (Math.random() - .5) * .12; p.up = Math.random(); p.ph = Math.random() * 6.28; }   // five jets
    if (!p.live) { pl.al[i] = 0; continue; }
    const t = p.age, run = (1 - Math.pow(1 - t, 1.6)) * 230 * p.sp, spread = 10 + t * 60;   // fast at the mouth, slowing as it mixes
    const q3 = pl.o.clone().addScaledVector(pl.d, run).addScaledVector(side, p.sw * spread + Math.sin(t * 5 + p.ph) * 2);
    pl.pos[i * 3] = q3.x; pl.pos[i * 3 + 1] = q3.y + p.up * 10; pl.pos[i * 3 + 2] = q3.z;
    pl.sz[i] = 12 + t * 30; pl.al[i] = pl.level * .95 * Math.min(1, t / .06) * Math.pow(1 - t, 1.2);
  }
  pl.geo.attributes.position.needsUpdate = pl.geo.attributes.aAlpha.needsUpdate = pl.geo.attributes.aSize.needsUpdate = true;
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
// Exhaust Klinket 58 as a gate valve: two cones meeting point to point on the pipe, a stem and a round handwheel.
// Drawing symbols: flat black line-work lying on top of the pipes, exactly as on the supplied drawing.
const INK = new T.MeshBasicMaterial({ color: '#111518' }), SYM_Y = PIPE_Y + 18;
function symLine(g, x0, y0, x1, y1, w = 4) {          // a straight stroke in plan units, relative to the group
  const L = Math.hypot(x1 - x0, y1 - y0), m = new T.Mesh(new T.PlaneGeometry(L + w, w), INK);
  m.rotation.x = -Math.PI / 2; m.rotation.z = -Math.atan2(y1 - y0, x1 - x0); m.position.set((x0 + x1) / 2, 0, (y0 + y1) / 2); m.renderOrder = 12; g.add(m); return m;
}
function symFill(g, pts, matl) {                      // filled polygon (plan points, relative)
  const sh = new T.Shape(pts.map(([x, y]) => new T.Vector2(x, -y))), m = new T.Mesh(new T.ShapeGeometry(sh), matl);
  m.rotation.x = -Math.PI / 2; m.position.y = -.5; m.renderOrder = 11; g.add(m); return m;
}
function symText(text, x, y, size = 15) {
  const c = document.createElement('canvas'), k = 8; c.width = text.length * size * k * .7 + 20; c.height = size * k * 1.3;
  const g = c.getContext('2d'); g.font = 'bold ' + size * k + 'px "Times New Roman", serif'; g.fillStyle = '#111518'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, c.width / 2, c.height / 2);
  const tex = new T.CanvasTexture(c); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = 8;
  const m = new T.Mesh(new T.PlaneGeometry(c.width / k, c.height / k), new T.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.copy(P(x, y, SYM_Y)); m.renderOrder = 12; scene.add(m);
}
// Exhaust Klinket 58, as drawn: a gate valve (two triangles point to point, ▶◀) on the line, a stem rising from the
// centre and turning right into the handle bar. The triangles are black like the drawing before Start, then carry the
// state colour (red shut, green open) with a black outline.
const GATE_ON = new T.Color('#1f9e7a'), INK_COL = new T.Color('#111518');
function gateValve(id, x, y, title) {
  const g = new T.Group(); g.position.copy(P(x, y, SYM_Y)); scene.add(g);
  const GLASS = new T.Color('#8fb3c6'), fillMat = new T.MeshBasicMaterial({ color: GLASS.clone(), transparent: true, opacity: .42, depthWrite: false }), state = { color: LAMP_IDLE.clone() };   // clear glass like the pipes
  const tri = [[[-26, -17], [-26, 17], [0, 0]], [[26, -17], [26, 17], [0, 0]]];
  for (const t of tri) { const f = symFill(g, t, fillMat); f.onBeforeRender = () => { fillMat.color.copy(S.running ? state.color : GLASS); fillMat.opacity = S.running ? .5 : .42; }; }
  for (const t of tri) for (let i = 0; i < 3; i++) symLine(g, ...t[i], ...t[(i + 1) % 3], 2.6);
  symLine(g, 0, 0, 0, -38, 4); symLine(g, 0, -38, 44, -38, 4);               // stem up, handle bar to the right
  symText('EXHAUST', x + 10, y - 92, 15); symText('KLINKET', x + 10, y - 70, 15);
  return addPart(id, 'valve', x, y, title, 64, { key: id, lamp: { ring: { material: state }, glow: { material: { color: new T.Color() } }, color: LAMP_IDLE.clone(), on: GATE_ON } });
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
// Client angle (Nov 2026): side view — perforated inlet face on the left, red outlet flange on top, motor to the right
// (viewer orbit th = −π/2 + 0.2, ph = 1.36). Earlier: the blower picture's camera (1.6, 1.0, 1.15) was turned onto
// this screen's top camera, so from above each blower looks exactly like the picture: volute face with the inlet eye in
// front, motor behind on the left, red outlet flange on top. The eye sits on its suction pipe; the outlet feeds the
// discharge pipe, which leaves upward as in the drawing.
const PICTURE = (() => {
  const basis = (z, up) => { const x = new T.Vector3().crossVectors(up, z).normalize(), y = new T.Vector3().crossVectors(z, x); return new T.Matrix4().makeBasis(x, y, z); };
  const from = basis(new T.Vector3(0.1943, 0.2092, -0.9584).normalize(), new T.Vector3(0, 1, 0)), to = new T.Matrix4().makeBasis(new T.Vector3(1, 0, 0), new T.Vector3(0, 0, -1), new T.Vector3(0, 1, 0));
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
  }).catch(e => { console.error('Blower model failed', e); const w = document.querySelector('#vent-warning'); if (w) { w.textContent = '⚠ Blower model did not load: ' + (e?.message || e); w.className = ''; w.style.opacity = '1'; } });
  return p;
}
// H₂ burner: a steel box with a smoked-glass top, so the fire inside shows from above. A row of nozzles on the burner
// bed carries flames that flicker and grow with the burner temperature; the bed and walls glow when hot.
function burner(id, key, x, y, title) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  const m = new T.MeshStandardMaterial({ color: '#3b4448', metalness: .5, roughness: .45, emissive: '#ff5a10', emissiveIntensity: 0 });
  const W = 110, H = 44, D = 80;
  const bed = new T.Mesh(new T.BoxGeometry(W - 8, 4, D - 8), m); bed.position.y = -H / 2 + 4; g.add(bed);                     // burner bed
  for (const [w, d, ox, oz] of [[W, 4, 0, -D / 2 + 2], [W, 4, 0, D / 2 - 2], [4, D, -W / 2 + 2, 0], [4, D, W / 2 - 2, 0]]) {      // walls
    const wall = new T.Mesh(new T.BoxGeometry(w, H, d), m); wall.position.set(ox, 0, oz); g.add(wall);
  }
  g.add(new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(W, H, D)), new T.LineBasicMaterial({ color: '#1d2327' })));
  const nozzles = [];
  for (let row = 0; row < 2; row++) for (let i = 0; i < 6; i++) {
    const nx = -W / 2 + 14 + i * (W - 28) / 5, nz = row ? 13 : -13;
    const n = new T.Mesh(new T.CylinderGeometry(2.6, 3.2, 4, 10), new T.MeshStandardMaterial({ color: '#20262a', metalness: .6, roughness: .4 })); n.position.set(nx, -H / 2 + 8, nz); g.add(n);
    const f = sprite(flameTex, '#ffffff', 1, 0); f.position.set(nx, -2, nz - 7); f.renderOrder = 8; g.add(f);
    nozzles.push({ f, x0: nx, ph: Math.random() * 6.28, sp: 9 + Math.random() * 6 });
  }
  const ember = sprite(glowTex, '#ff6a1a', 1, 0); ember.scale.set(W * 1.1, D * 1.1, 1); ember.position.y = -6; ember.renderOrder = 7; g.add(ember);
  const lid = new T.Mesh(new T.BoxGeometry(W - 6, 2, D - 6), new T.MeshPhysicalMaterial({ color: '#3a2a22', roughness: .05, transparent: true, opacity: .32, clearcoat: 1, depthWrite: false }));
  lid.position.y = H / 2 - 1; lid.renderOrder = 9; g.add(lid);                                                                   // smoked-glass top
  const glow = sprite(glowTex, '#ff8a2a', 230, 0); glow.position.y = 10; glow.renderOrder = 9; g.add(glow);
  // top face: the band colour fills the whole burner, with its name, the temperature and COOL / WARM / HOT
  const fc = document.createElement('canvas'); fc.width = 640; fc.height = 460; const ftex = new T.CanvasTexture(fc); ftex.colorSpace = T.SRGBColorSpace; ftex.anisotropy = 8;
  const face = new T.Mesh(new T.PlaneGeometry(W - 4, D - 4), new T.MeshBasicMaterial({ map: ftex, transparent: true, toneMapped: false }));
  face.rotation.x = -Math.PI / 2; face.position.y = H / 2 + 1.5; face.renderOrder = 10; g.add(face);
  const lg = new T.Group(); lg.position.set(66, 0, -46); g.add(lg);
  return addPart(id, 'burner', x, y, title, 110, { key, lamp: lamp(lg, 9, 24), mat: m, glow, nozzles, ember, face: { c: fc, tex: ftex, shown: '' }, label: title.replace('H₂ burner', 'H₂ BURNER') });
}
function diamond(x, y, kind) {
  const top = canvasTexture(128, (c, s) => {
    c.fillStyle = kind === 'cool' ? '#4e94c4' : '#ffffff'; c.fillRect(0, 0, s, s);
    if (kind === 'cool') { c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 4; for (let i = 1; i < 7; i++) { c.beginPath(); c.moveTo(i * s / 7, 8); c.lineTo(i * s / 7, s - 8); c.stroke(); } }
    else { c.fillStyle = '#1d2327'; for (let i = 0; i < 9; i++) { c.beginPath(); c.arc(s * (.15 + i * .0875), s * (.15 + i * .0875), 4, 0, 7); c.fill(); } }
  });
  const side = new T.MeshStandardMaterial({ color: kind === 'cool' ? '#2f6f9e' : '#46525a', metalness: .5, roughness: .4 }), face = new T.MeshStandardMaterial({ map: top, metalness: .3, roughness: .5 });
  const b = new T.Mesh(new T.BoxGeometry(68, 40, 68), [side, side, face, side, side, side]);
  b.rotation.y = Math.PI / 4; b.position.copy(P(x, y, PIPE_Y)); scene.add(b);
  return { side, face };
}
function louvre(x, y, dir) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); g.rotation.y = -{ r: 0, l: Math.PI }[dir]; scene.add(g);
  const sh = new T.Shape([new T.Vector2(-14, -30), new T.Vector2(16, -46), new T.Vector2(16, 46), new T.Vector2(-14, 30)]);
  const body = new T.Mesh(new T.ExtrudeGeometry(sh, { depth: 30, bevelEnabled: false }), mat.metal); body.rotation.x = -Math.PI / 2; body.position.y = -15; g.add(body);
  for (let i = -3; i <= 3; i++) { const s = new T.Mesh(new T.BoxGeometry(16, 3, 3), mat.dark); s.position.set(8, 16, i * 11); g.add(s); }
}
const wireMat = new T.MeshStandardMaterial({ color: '#8d989f', metalness: .7, roughness: .4 });
function wire(pts, r = 2.5) { const path = new T.CurvePath(); for (let i = 1; i < pts.length; i++) path.add(new T.LineCurve3(P(pts[i - 1][0], pts[i - 1][1], PIPE_Y - 4), P(pts[i][0], pts[i][1], PIPE_Y - 4))); scene.add(new T.Mesh(new T.TubeGeometry(path, pts.length * 4, r, 8, false), wireMat)); }
function boss(x, y) { const b = new T.Mesh(new T.CylinderGeometry(5, 5, 8, 14), steel); b.position.copy(P(x, y, PIPE_Y + 14)); scene.add(b); }
function probe(x, y) { boss(x, y); const m = new T.Mesh(new T.CylinderGeometry(6, 6, 10, 14), mat.metal); m.position.copy(P(x, y, PIPE_Y + 14)); scene.add(m); const t = new T.Mesh(new T.SphereGeometry(7, 14, 10), mat.dark); t.position.copy(P(x, y - 14, PIPE_Y + 18)); scene.add(t); wire([[x, y], [x, y - 14]], 2); }
function pitMouth(x, y, dir) {             // flared open pipe end standing in the pit air (no connection to any cell)
  const g = new T.Group(); g.position.copy(P(x, y + 18, PIPE_Y)); scene.add(g);
  const bell = new T.Mesh(new T.CylinderGeometry(16, 30, 26, 32, 1, true), mat.glass); bell.rotation.x = Math.PI / 2; bell.renderOrder = 6; g.add(bell);
  const rim = new T.Mesh(new T.TorusGeometry(30, 2.4, 8, 32), steel); rim.position.z = 13; g.add(rim);
  const grid = new T.Mesh(new T.CircleGeometry(28, 32), new T.MeshBasicMaterial({ color: '#5d6b72', transparent: true, opacity: .35 })); grid.position.z = 12; g.add(grid);
}
function openEnd(x, y, rot) { const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); g.rotation.y = rot; scene.add(g); const c = new T.Mesh(new T.CylinderGeometry(4, 4, 40, 10), mat.metal); c.rotation.x = Math.PI / 2; g.add(c); }
function checkValve(x, y) { const sh = new T.Shape([new T.Vector2(-14, -14), new T.Vector2(14, -14), new T.Vector2(0, 12)]); const m = new T.Mesh(new T.ShapeGeometry(sh), mat.dark); m.rotation.x = -Math.PI / 2; m.position.copy(P(x, y, PIPE_Y + 16)); scene.add(m); const b = new T.Mesh(new T.CylinderGeometry(16, 16, 26, 20), mat.metal); b.rotation.z = Math.PI / 2; b.position.copy(P(x, y, PIPE_Y)); scene.add(b); }
// small round dial on a canvas (thermometers, V meter); redrawn only when the value changes
function dial(x, y, kind = 'arrow') {
  const c = document.createElement('canvas'); c.width = c.height = 256; const tex = new T.CanvasTexture(c); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const top = new T.MeshBasicMaterial({ map: tex }), side = new T.MeshStandardMaterial({ color: '#c9d2d7', metalness: .7, roughness: .3 });
  const m = new T.Mesh(new T.CylinderGeometry(20, 20, 8, 32), [side, top, side]); m.position.copy(P(x, y, PIPE_Y)); scene.add(m);
  let shown = null;
  return v => {
    const r = Math.round(v); if (r === shown) return; shown = r; const g = c.getContext('2d');
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(128, 128, 120, 0, 7); g.fill(); g.strokeStyle = '#1d2327'; g.lineWidth = 16; g.stroke();
    g.fillStyle = g.strokeStyle = '#1d2327';
    if (kind === 'V') { g.save(); g.translate(128, 128); g.rotate(-Math.PI / 2); g.font = 'bold 150px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('V', 0, 12); g.restore(); }   // the cylinder cap maps the canvas turned a quarter, so draw the V turned back
    else {                                                                            // ↗ arrow across the face, swinging with temperature
      const a = -Math.PI * (.85 - .7 * Math.min(1, Math.max(0, (v - 20) / 200))), dx = Math.cos(a), dy = Math.sin(a);
      const x0 = 128 - dx * 72, y0 = 128 - dy * 72, x1 = 128 + dx * 78, y1 = 128 + dy * 78;
      g.lineWidth = 12; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1 - dx * 20, y1 - dy * 20); g.stroke();
      g.beginPath(); g.moveTo(x1, y1); g.lineTo(x1 - dx * 40 - dy * 22, y1 - dy * 40 + dx * 22); g.lineTo(x1 - dx * 40 + dy * 22, y1 - dy * 40 - dx * 22); g.closePath(); g.fill();
    }
    tex.needsUpdate = true;
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
// Client: the batteries in the pit are NOT connected to the circuit. Pit air is drawn from an open intake in the pit
// (riser at x 270) and fresh / returned air is discharged into the pit through an open outlet (x 1640).
pipe('pitOut', 'J', 'out', [[270, 1300], [270, 1095]], 'dirty');
pitMouth(270, 1300, 'in'); 
pipe('J', 'v123', 'draught', [[270, 1095], [270, 1000]], 'dirty');
pipe('v123', 'TV', 'draught', [[270, 1000], [270, 360]], 'dirty');
pipe('TV', 'v58', 'draught', [[270, 360], [140, 360]], 'dirty');
pipe('v58', 'overboard', 'draught', [[140, 360], [60, 360]], 'dirty');
pipe('vent', 'TV', 'draught', [[300, 320], [300, 360], [270, 360]], 'room');   // open vent head joining the exhaust
pipe('J', 'H', 'header', [[270, 1095], [385, 1095]], 'dirty');
pipe('H', 'v122', 'qm', [[385, 1095], [385, 1000]], 'dirty');
pipe('H', 'v134', 'qgPit', [[385, 1095], [520, 1095], [520, 990]], 'dirty');
// treatment: 122 → 101 → filter → flaps 103 → H₂ burners → TC → cooler → TC → split to 109 / 110
pipe('v122', 'flt', 'qm', [[385, 1000], [385, 760]], 'dirty');
pipe('flt', 'S1', 'qm', [[385, 760], [385, 585]], 'dirty');
pipe('S1', 'fa', 'qa', [[385, 585], [385, 440], [490, 440]], 'dirty');
pipe('S1', 'fb', 'qb', [[385, 585], [490, 585]], 'dirty');
pipe('fa', 'h1', 'qa', [[490, 440], [585, 440]], 'dirty');
pipe('fb', 'h2', 'qb', [[490, 585], [595, 585]], 'dirty');
pipe('h1', 'J2', 'qa', [[695, 440], [790, 440], [790, 512]], 'clean');
pipe('h2', 'J2', 'qb', [[705, 585], [790, 585], [790, 512]], 'clean');
pipe('J2', 'clr', 'qm', [[790, 512], [910, 512]], 'clean');
pipe('clr', 'S2', 'qm', [[910, 512], [1035, 512]], 'clean');
pipe('S2', 'v109', 'q1', [[1035, 512], [1035, 420], [1140, 420]], 'clean');
pipe('S2', 'v110', 'q2', [[1035, 512], [1035, 555], [1150, 555]], 'clean');
// blower outlets → common line → 114 (compartment) and 117 (return to the pit through the non-return valve)
pipe('J3', 'T117', 'qm', [[1445, 450], [1545, 450]], 'clean');
pipe('T117', 'v114', 'toCompt', [[1545, 450], [1580, 450]], 'clean');
pipe('v114', 'compartment', 'toCompt', [[1580, 450], [1625, 450]], 'clean');
pipe('T117', 'v117', 'recirc', [[1545, 450], [1545, 960]], 'clean');
pipe('v117', 'chk', 'recirc', [[1545, 960], [1545, 1020], [1595, 1020]], 'clean');
pipe('chk', 'J4', 'recirc', [[1595, 1020], [1640, 1020]], 'clean');
// fresh compartment air → inlet valve → pit
pipe('compt', 'vin', 'inlet', [[1675, 790], [1640, 790], [1640, 950]], 'room');
pipe('vin', 'J4', 'inlet', [[1640, 950], [1640, 1020]], 'room');
pipe('J4', 'pitIn', 'pitIn', [[1640, 1020], [1640, 1300]], 'room');
pitMouth(1640, 1300, 'out');
// galley: compartment → galley flap (the 134 and blower pipes are added once the blower model is placed)
pipe('compt', 'fg', 'qgRoom', [[625, 750], [560, 750], [560, 825]], 'room');

valve('v123', 270, 1000, true, 'Valve 123', 'left');
gateValve('v58', 140, 360, 'Exhaust Klinket 58');
valve('v122', 385, 1000, true, 'Valve 122', 'right');
valve('v109', 1140, 420, false, 'Valve 109');
valve('v110', 1150, 555, false, 'Valve 110');
valve('v114', 1580, 450, false, 'Valve 114');
valve('v117', 1545, 960, true, 'Valve 117', 'left');
valve('vin', 1640, 950, true, 'Valve 118 (inlet from outside)', 'right');
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
// blower inlet: the suction pipe runs over the motor and drops into the inlet eye, flanged onto the eye
function inletDuct(pts) {
  const path = roundedPath(pts.slice(1)); glassTube(new T.TubeGeometry(path, 48, 12, 16, false));
  const [x, y] = pts[pts.length - 1]; flange(P(x, y, PIPE_Y + 3), new T.Vector3(0, 1, 0), 12);
}
blower('b1', 1300, 420, 140, 'Blower 1', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v109', 'b1', 'q1', [[1140, 420], [1300, 420]], 'clean'); flange(P(1298, 420, PIPE_Y), new T.Vector3(1, 0, 0), 13);
  pipe('b1', 'J3', 'q1', [[fx, fy, fh], [ax, ay, ah], [1445, ay, ah], [1445, 450]], 'clean');   // as drawn: out of the top, straight right, down to the common line
});
blower('b2', 1300, 555, 140, 'Blower 2', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v110', 'b2', 'q2', [[1150, 555], [1300, 555]], 'clean'); flange(P(1298, 555, PIPE_Y), new T.Vector3(1, 0, 0), 13);
  pipe('b2', 'J3', 'q2', [[fx, fy, fh], [ax, ay, ah], [1445, ay, ah], [1445, 450]], 'clean');   // out of the top, straight right, up to the common line
});
blower('bg', 650, 880, 122, 'Galley blower', ([fx, fy, fh], [ax, ay, ah], h) => {
  pipe('v134', 'bg', 'qgPit', [[520, 990], [520, 880], [650, 880]], 'dirty'); flange(P(648, 880, PIPE_Y), new T.Vector3(1, 0, 0), 13);
  pipe('fg', 'bg', 'qgRoom', [[560, 825], [560, 880]], 'room');
  junction('GJ', P(560, 880, PIPE_Y), 13);                                        // tee where the galley flap line joins the suction
  pipe('bg', 'galley', 'qg', [[fx, fy, fh], [ax, ay, ah], [780, ay, ah]], 'dirty');   // straight right to the galley
  plume(782, ay, 1, 0, 'qg');
  arrow(830, ay, 'r', 'dirty', 'qg', 2, 26);
});
const filterBox = diamond(385, 760, 'filter'); diamond(910, 512, 'cool');
const FILTER_IDLE = new T.Color('#8e9ca3'), filterCol = FILTER_IDLE.clone();
{ // 101 · H₂ sensor, as drawn ( -ᑕ‖—| ): short tail, a cup open to the right, a double bar, then the line into the pipe
  const g = new T.Group(); g.position.copy(P(0, 890, SYM_Y)); scene.add(g);
  symLine(g, 318, 0, 328, 0, 3.5);                                   // tail
  symLine(g, 330, -11, 330, 11, 3.5); symLine(g, 330, -11, 342, -11, 3.5); symLine(g, 330, 11, 342, 11, 3.5);   // ᑕ
  symLine(g, 347, -13, 347, 13, 3.5); symLine(g, 352, -13, 352, 13, 3.5);                                      // ‖
  symLine(g, 352, 0, 372, 0, 3.5);                                   // into the pipe
}
const thermo = [dial(632, 690), dial(694, 690)];                                 // thermometers across burner 2 (in / out)
wire([[580, 585], [580, 690], [612, 690]]); wire([[652, 690], [674, 690]]); wire([[714, 690], [745, 690], [745, 585]]);
wire([[845, 512], [845, 345], [877, 345]]); wire([[917, 345], [950, 345], [950, 512]]);   // V meter across the cooler
const vDial = dial(897, 345, 'V');
[[580, 585], [745, 585], [845, 512], [950, 512]].forEach(([x, y]) => boss(x, y));
probe(755, 440); probe(770, 585); probe(990, 512);                               // thermocouples (TC)
checkValve(1595, 1020);
// small fittings on the lines, as drawn: ╤ test points, the joint / nipple / flexible joint on the 122 line, ▲ on the riser
function testPoint(x, y) { const g = new T.Group(); g.position.copy(P(x, y - 22, PIPE_Y + 10)); scene.add(g); g.add(new T.Mesh(new T.BoxGeometry(2.5, 3, 12), mat.dark)); for (const z of [-6, -11]) { const b = new T.Mesh(new T.BoxGeometry(14, 3, 2.5), mat.dark); b.position.z = z; g.add(b); } }
[[445, 440], [455, 585], [728, 440], [740, 585], [1468, 450], [1498, 450], [1563, 450]].forEach(([x, y]) => testPoint(x, y));
for (const o of [-5, 5]) { const d = new T.Mesh(new T.CylinderGeometry(17, 17, 3, 20), mat.dark); d.rotation.x = Math.PI / 2; d.position.copy(P(385, 1060 + o, PIPE_Y)); scene.add(d); }   // ⊣⊢
{ const g = new T.Group(); g.position.copy(P(385, 950, PIPE_Y)); scene.add(g); const st = new T.Mesh(new T.BoxGeometry(18, 3, 2.5), mat.dark); st.position.x = -22; g.add(st); const cb = new T.Mesh(new T.BoxGeometry(2.5, 3, 10), mat.dark); cb.position.x = -31; g.add(cb); }   // ⊢
for (const o of [-6, 0, 6]) { const r = new T.Mesh(new T.TorusGeometry(15, 2, 8, 24), mat.dark); r.position.copy(P(385, 842 + o, PIPE_Y)); scene.add(r); }   // {⊢
{ const t = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-13, -10), new T.Vector2(13, -10), new T.Vector2(0, 14)])), new T.MeshBasicMaterial({ color: '#5d6b72' })); t.rotation.x = -Math.PI / 2; t.position.copy(P(270, 630, PIPE_Y + 18)); scene.add(t); }   // ▲
louvre(1645, 450, 'r'); louvre(1690, 790, 'l');
plume(60, 360, -1, 0, 'draught'); plume(1665, 450, 1, 0, 'toCompt');
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
  const got = new Set(S.running ? ['pitOut', 'compt', 'vent'] : []);
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
const NAMES = { v58: '58', v123: '123', v122: '122', v134: '134', v109: '109', v110: '110', v114: '114', v117: '117', vin: '118' };
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
  if (!S.running) { warn('⚠ Circuit is OFF — choose a mode or press Start first.'); return; }
  // Mode 1 last step: with 122 open, tapping an open 114 cracks it (part open) instead of closing it
  if (mode && id === 'v114' && S.open.v114 && S.open.v122 && !crack114) { crack114 = true; p.wheelTarget = (p.openAngle + p.closedAngle) / 2; notify('Valve 114 · CRACKED OPEN', true); return; }
  if (id === 'v114' && crack114) crack114 = false;
  const wasOn = isOn(p);
  if (p.type === 'valve' || p.type === 'flap') {
    const store = p.type === 'valve' ? S.open : S.flap;
    if (store[p.key]) { const b = closeBlocker(p); if (b) { warn('⚠ ' + b); return; } }
    store[p.key] = !store[p.key];
    if (p.wheel) p.wheelTarget = store[p.key] ? p.openAngle : p.closedAngle; if (p.blade) p.bladeTarget = store[p.key] ? 0 : Math.PI / 2;
  } else if (p.type === 'blower') {
    if (!S.on[p.key] && !mode) { const m = missingFor(p.key); if (m.length) { warn('⚠ ' + p.title + ' cannot start — open ' + m.join(', ') + ' first.'); return; } }
    S.on[p.key] = !S.on[p.key];
    if (S.on[p.key] && p.key !== 'bg' && !S.open.vin && !S.open.v117) setTimeout(() => S.on[p.key] && !S.open.vin && !S.open.v117 && warn('⚠ 118 is closed — the pit cannot draw fresh air.'), 1500);
  } else if (p.type === 'burner') {
    S.burn[p.key] = !S.burn[p.key];
    const q = p.key === 'a' ? flows.qa : flows.qb;
    if (S.burn[p.key] && q <= 0) { warn('⚠ ' + p.title + ' is ON but has no air — open 122 and its FLAP 103, and run a blower.'); return; }
  }
  notify(p.title + ' · ' + stateWord(p), true);
  setTimeout(() => checkStep(id, wasOn), 0);
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
startBtn.addEventListener('click', () => { S.running = !S.running; if (!S.running) { allOff(); mode = 0; crack114 = false; } showRunState(); });     // Pause: everything closes and stops, as on screen 1
resetBtn?.addEventListener('click', () => { S.running = false; mode = 0; crack114 = false; allOff(); Object.assign(S.pit, initial().pit); showRunState(); notify('Circuit reset — all valves closed, H₂ cleared.', true); });
showRunState();


// ================================================================ client requirements · screen 2 (Nov 2026)
{
  const st = document.createElement('style');
  st.textContent = `
.port-no{position:absolute;transform:translate(-50%,-50%);pointer-events:none;font:700 clamp(10px,calc(var(--k,1)*22px),30px)/1 Arial,sans-serif;color:#fff;background:#1d4f6e;border:2px solid #fff;border-radius:.5em;padding:.18em .42em;box-shadow:0 .15em .5em #0b2a3d55;white-space:nowrap;z-index:3}
.port-no.dim{background:#6b8494}
.vcard{position:absolute;font-family:Arial,sans-serif;color:#173f57;background:linear-gradient(180deg,#ffffffee,#eef5faee);border:1.5px solid #9dbcd2;border-radius:1em;box-shadow:0 .5em 1.6em #12405e26;pointer-events:auto;z-index:4}
.btemp{transform:translate(-50%,-50%);font-size:clamp(7px,calc(var(--k,1)*14px),26px);width:15em;padding:.7em .9em .8em;text-align:center}
.btemp h3,.modes h3{margin:0 0 .35em;font-size:.8em;letter-spacing:.14em;color:#3c6680}
.btemp .tv{font:700 2em/1.1 Arial;color:#2f7fd0;transition:color .3s}.btemp .tv small{font-size:.45em;margin-left:.15em}
.btemp .row{display:flex;gap:.4em;align-items:center;margin-top:.45em}.btemp input{flex:1;min-width:0;accent-color:#d8622b;height:1.8em}
.btemp button{width:2.3em;height:2.3em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 1.1em/1 Arial;color:#1d4d6b;padding:0}
.btemp .scale{display:flex;height:.45em;border-radius:.3em;overflow:hidden;margin-top:.5em}.btemp .scale i{flex:40}.btemp .scale i:nth-child(2){flex:30}.btemp .scale i:nth-child(3){flex:50}
.btemp .lg{display:flex;justify-content:space-between;font-size:.68em;color:#56778c;margin-top:.2em}
.modes{transform:translate(-50%,-50%);font-size:clamp(7px,calc(var(--k,1)*14px),26px);width:27em;padding:.8em 1em 1em}
.modes .tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:.35em;margin-bottom:.6em}
.modes .tabs button{min-height:3.2em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;color:#1d4d6b;font:700 .82em/1.15 Arial;padding:.2em}
.modes .tabs button small{display:block;font-weight:400;font-size:.82em;color:#5a7586}
.modes .tabs button.on{background:#1d4f6e;border-color:#1d4f6e;color:#fff}.modes .tabs button.on small{color:#cfe3f0}
.modes .tabs button:disabled{opacity:.45}
.modes ol{list-style:none;margin:0;padding:0;display:grid;gap:.3em}
.modes li{display:flex;gap:.6em;align-items:center;padding:.42em .6em;border-radius:.55em;background:#f3f7fa;color:#5a7586;font-size:.95em}
.modes li b{flex:0 0 auto;width:1.7em;height:1.7em;border-radius:50%;display:grid;place-items:center;background:#d5e2ea;color:#4a6577;font-size:.85em}
.modes li.done{color:#126b3c;background:#e6f6ec}.modes li.done b{background:#22a35a;color:#fff}
.modes li.now{color:#0f4566;background:#e1effa;outline:2px solid #1f7fbf;font-weight:700}.modes li.now b{background:#1f7fbf;color:#fff}
.modes .msg{margin-top:.55em;padding:.5em .7em;border-radius:.55em;font-weight:700;font-size:.92em;display:none}
.modes .msg.ok{display:block;background:#e3f6ea;color:#126b3c}.modes .msg.bad{display:block;background:#fdecea;color:#a8322a}
.modes .hint{font-size:.8em;color:#5a7586;margin:.1em 0 .5em}
.modes .cur{font-size:1em;color:#0f4566;line-height:1.35}.modes .cur b{color:#1f7fbf;margin-right:.3em}
.modes .dots{display:flex;gap:.35em;margin-top:.5em}.modes .dots i{width:.75em;height:.75em;border-radius:50%;background:#d5e2ea}.modes .dots i.d{background:#22a35a}.modes .dots i.n{background:#1f7fbf;box-shadow:0 0 0 .2em #1f7fbf44}
.tap-tip{position:absolute;transform:translate(-50%,-100%);pointer-events:none;z-index:6;font:700 clamp(10px,calc(var(--k,1)*15px),28px)/1.25 Arial,sans-serif;background:#1f7fbf;color:#fff;padding:.45em .75em;border-radius:.7em;box-shadow:0 .4em 1.2em #0b2a3d55;max-width:16em;text-align:center;animation:tipBob 1.2s ease-in-out infinite}
.tap-tip b{display:block;letter-spacing:.06em}.tap-tip span{display:block;font-weight:400;font-size:.82em;opacity:.95}
.tap-tip::after{content:"";position:absolute;left:50%;bottom:-.5em;transform:translateX(-50%);border:.55em solid transparent;border-bottom:0;border-top-color:#1f7fbf}
@keyframes tipBob{50%{translate:0 -.35em}}
.mode-bar{position:absolute;left:14px;top:50%;transform:translate(-10px,-50%);display:flex;flex-direction:column;gap:10px;z-index:15;opacity:0;pointer-events:none;transition:opacity .35s,transform .35s;font-family:Arial,sans-serif}
.mode-bar.show{opacity:1;transform:translate(0,-50%);pointer-events:auto}
.mode-bar button{width:clamp(96px,8.6vw,200px);min-height:clamp(52px,4.6vw,96px);text-align:left;padding:6px 14px;border-radius:12px;border:2px solid #1d4f6e;background:#fff;color:#1d4f6e;font:700 clamp(14px,1.05vw,24px)/1.15 Arial;box-shadow:0 4px 14px #12405e22;cursor:pointer;transition:background .2s,color .2s,transform .12s}
.mode-bar button small{display:block;font-weight:400;font-size:.72em;opacity:.8}
.mode-bar button:active{transform:scale(.96)}.mode-bar button.on{background:#1d4f6e;color:#fff;box-shadow:0 0 0 4px #1d4f6e33,0 4px 14px #12405e33}
.mode-bar button.soon{border-style:dashed;opacity:.55}
.port-no{transition:background .3s,opacity .3s,transform .3s}
.port-no em{font-style:normal;font-size:.62em;margin-left:.35em;letter-spacing:.06em;vertical-align:.12em}
.port-no.is-open{background:#1e9e5a!important;opacity:1!important}.port-no.is-crack{background:#d98a14!important;opacity:1!important}
.port-no.flash{animation:portFlash .5s ease-in-out 4}@keyframes portFlash{50%{box-shadow:0 0 0 .5em #1e9e5a66;scale:1.25}}.port-no.use{background:#1f7fbf;transform:translate(-50%,-50%) scale(1.12)}.port-no.dim{opacity:.35}
.part-button.next{animation:nextRing 1.1s ease-in-out infinite;border-radius:50%}
@keyframes nextRing{0%,100%{box-shadow:0 0 0 3px #1f7fbf,0 0 0 0 #1f7fbf66}50%{box-shadow:0 0 0 3px #1f7fbf,0 0 0 14px #1f7fbf00}}
.vinfo-card{position:fixed;inset:0;background:#0b2a3d55;display:grid;place-items:center;z-index:50}
.vinfo-card>div{width:min(460px,92vw);background:#fff;border-radius:16px;padding:20px 22px;font:15px/1.5 Arial,sans-serif;color:#173f57;box-shadow:0 20px 60px #0008}
.vinfo-card h2{margin:0 0 6px;font-size:20px}.vinfo-card p{margin:6px 0;color:#3f5f72}.vinfo-card dl{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:12px 0}.vinfo-card dt{color:#5a7586}.vinfo-card dd{margin:0;font-weight:700;text-align:right}
.vinfo-card button{margin-top:8px;width:100%;height:46px;border-radius:10px;border:0;background:#1d4f6e;color:#fff;font:700 15px Arial}
@media(max-width:700px){.modes,.btemp{display:none}}`;
  document.head.append(st);
}
const anchored = [];                                    // HTML pinned to plan points (repositioned in layout)
function pin(el, x, y) { labelsRoot.append(el); const a = { el, x, y }; anchored.push(a); return a; }

// ---- every valve port number on the drawing
const PORTS = [['v58', '58', 140, 398], ['fa', '103', 490, 398], ['fb', '103', 490, 628], ['v109', '109', 1140, 378], ['v110', '110', 1150, 598],
  ['v114', '114', 1580, 408], ['v117', '117', 1500, 960], ['vin', '118', 1688, 950], ['v122', '122', 432, 1000], ['v123', '123', 222, 1000],
  ['v134', '134', 568, 990], ['fg', 'Galley flap', 610, 825], [null, '101', 340, 936]];
for (const [id, n, x, y] of PORTS) { const el = document.createElement('div'); el.className = 'port-no'; el.textContent = n; pin(el, x, y); }

// ---- burner temperature box: blue below 40 °C, orange 40–70 °C, red above 70 °C
let burnerT = 30;
const BURN_COL = t => t < 40 ? new T.Color('#2f7fd0') : t <= 70 ? new T.Color('#f08a24') : new T.Color('#d8322b');
const BURN_CSS = t => t < 40 ? '#2f7fd0' : t <= 70 ? '#e07b14' : '#d8322b';
{
  const el = document.createElement('div'); el.className = 'vcard btemp'; el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Burner temperature');
  el.innerHTML = '<h3>BURNER TEMPERATURE</h3><div class="tv"><span>30</span><small>°C</small></div><div class="row"><button type="button" aria-label="Lower temperature">−</button><input type="range" min="0" max="150" step="1" value="30" aria-label="Burner temperature, °C"><button type="button" aria-label="Raise temperature">+</button></div><div class="scale"><i style="background:#2f7fd0"></i><i style="background:#f08a24"></i><i style="background:#d8322b"></i></div><div class="lg"><span>&lt;40 blue</span><span>40–70 orange</span><span>&gt;70 red</span></div>';
  const [minus, plus] = el.querySelectorAll('button'), slider = el.querySelector('input'), tv = el.querySelector('.tv');
  const set = v => { burnerT = Math.max(0, Math.min(150, Math.round(v))); slider.value = burnerT; tv.firstChild.textContent = burnerT; tv.style.color = BURN_CSS(burnerT); };
  slider.addEventListener('input', () => set(+slider.value)); minus.onclick = () => set(burnerT - 5); plus.onclick = () => set(burnerT + 5);
  pin(el, 905, 700); set(30);
}
// Realistic burner unit seen from above: brushed-steel housing with bolts, a glass inspection window over the
// catalyst bed with live flames, and a digital temperature display. Flame colour follows the client's bands:
// small blue flames below 40 °C, orange flames 40–70 °C, tall red-yellow flames above 70 °C.
const BAND_FX = [
  { h: 46, core: '#eaf7ff', mid: '#3c9bff', bed: ['#0b1626', '#12304e'], led: '#46a8ff', word: 'COOL' },
  { h: 112, core: '#fff3c4', mid: '#ff9418', bed: ['#1d0f05', '#5a2a08'], led: '#ffa12a', word: 'WARM' },
  { h: 168, core: '#fff7d6', mid: '#ff3216', bed: ['#260704', '#7a1608'], led: '#ff4a32', word: 'HOT' }
];
const steelSheet = (() => {                            // brushed steel, drawn once and reused
  const c = document.createElement('canvas'); c.width = 640; c.height = 460; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 640, 460); gr.addColorStop(0, '#c9d0d4'); gr.addColorStop(.5, '#9ea8ae'); gr.addColorStop(1, '#7d878d');
  g.fillStyle = gr; g.fillRect(0, 0, 640, 460);
  for (let i = 0; i < 900; i++) { const y = Math.random() * 460; g.strokeStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '40,48,52'},${.03 + Math.random() * .05})`; g.lineWidth = 1; g.beginPath(); g.moveTo(Math.random() * 120, y); g.lineTo(520 + Math.random() * 120, y + (Math.random() - .5) * 2); g.stroke(); }
  return c;
})();
function burnerLook(p, dt) {
  const band = burnerT < 40 ? 0 : burnerT <= 70 ? 1 : 2, fx = BAND_FX[band], now = performance.now();
  p.mat.color.set('#59646a'); p.mat.emissive.set(fx.mid); p.mat.emissiveIntensity = [0, .12, .28][band];
  p.glow.material.color.set(fx.mid); p.glow.material.opacity = [.05, .22, .42][band] * (.85 + .15 * Math.sin(now / 160));
  const f = p.face; if (!f || now - (f.at || 0) < 70) return; f.at = now;      // ~14 fps flame animation
  const g = f.c.getContext('2d'), W = f.c.width, H = f.c.height, t = now / 1000, R = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  g.clearRect(0, 0, W, H); g.save();
  R(4, 4, W - 8, H - 8, 26); g.clip(); g.drawImage(steelSheet, 0, 0, W, H); g.restore();
  R(4, 4, W - 8, H - 8, 26); g.lineWidth = 8; g.strokeStyle = '#3e474c'; g.stroke();
  for (const [x, y] of [[34, 34], [W - 34, 34], [34, H - 34], [W - 34, H - 34]]) {   // hex bolts
    const bg = g.createRadialGradient(x - 4, y - 4, 2, x, y, 15); bg.addColorStop(0, '#eef2f4'); bg.addColorStop(1, '#5d676d'); g.fillStyle = bg;
    g.beginPath(); for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; g.lineTo(x + 14 * Math.cos(a), y + 14 * Math.sin(a)); } g.closePath(); g.fill(); g.strokeStyle = '#3e474c'; g.lineWidth = 2; g.stroke();
  }
  g.fillStyle = '#2f383d'; g.font = 'bold 26px Arial'; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(p.label, 66, 36);
  // inspection window
  const wx = 62, wy = 60, ww = W - 124, wh = 250; g.save(); R(wx, wy, ww, wh, 18); g.clip();
  const bed = g.createLinearGradient(0, wy, 0, wy + wh); bed.addColorStop(0, fx.bed[0]); bed.addColorStop(1, fx.bed[1]); g.fillStyle = bed; g.fillRect(wx, wy, ww, wh);
  g.strokeStyle = band ? 'rgba(255,170,90,.18)' : 'rgba(120,170,230,.16)'; g.lineWidth = 2;                   // catalyst honeycomb
  for (let row = 0, y = wy + 10; y < wy + wh; row++, y += 22) for (let x = wx + (row % 2 ? 13 : 0); x < wx + ww; x += 26) { g.beginPath(); for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; g.lineTo(x + 13 * Math.cos(a), y + 13 * Math.sin(a)); } g.closePath(); g.stroke(); }
  if (band) { const hg = g.createRadialGradient(W / 2, wy + wh, 10, W / 2, wy + wh, ww * .7); hg.addColorStop(0, band === 2 ? 'rgba(255,90,30,.55)' : 'rgba(255,150,40,.35)'); hg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = hg; g.fillRect(wx, wy, ww, wh); }
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 7; i++) {                                                     // a row of burner nozzles with flames
    const x = wx + 42 + i * (ww - 84) / 6, base = wy + wh - 22, fl = .8 + .14 * Math.sin(t * 9 + i * 1.7) + .08 * Math.sin(t * 23 + i), h = fx.h * fl, w = 16 + fx.h * .1, sway = Math.sin(t * 5 + i * 2.1) * w * .25;
    const fg = g.createLinearGradient(0, base, 0, base - h); fg.addColorStop(0, fx.core); fg.addColorStop(.35, fx.mid); fg.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = fg; g.globalAlpha = .9; g.beginPath(); g.moveTo(x - w, base); g.bezierCurveTo(x - w, base - h * .45, x - w * .2 + sway, base - h * .7, x + sway * 1.6, base - h);
    g.bezierCurveTo(x + w * .2 + sway, base - h * .7, x + w, base - h * .45, x + w, base); g.closePath(); g.fill();
    g.globalAlpha = 1; g.fillStyle = '#3a3f42'; g.fillRect(x - 9, base - 2, 18, 10);
  }
  g.globalCompositeOperation = 'source-over'; g.restore();
  const glass = g.createLinearGradient(wx, wy, wx + ww, wy + wh); glass.addColorStop(0, 'rgba(255,255,255,.22)'); glass.addColorStop(.35, 'rgba(255,255,255,0)'); glass.addColorStop(.6, 'rgba(255,255,255,.07)'); glass.addColorStop(1, 'rgba(255,255,255,0)');
  R(wx, wy, ww, wh, 18); g.fillStyle = glass; g.fill(); g.lineWidth = 10; g.strokeStyle = '#2a3236'; g.stroke();
  // digital temperature display
  const dx = W / 2 - 150, dy = 328, dw = 300, dh = 104; R(dx, dy, dw, dh, 12); g.fillStyle = '#0b0f11'; g.fill(); g.lineWidth = 5; g.strokeStyle = '#2a3236'; g.stroke();
  g.textAlign = 'center'; g.fillStyle = fx.led; g.shadowColor = fx.led; g.shadowBlur = 18; g.font = 'bold 74px "Courier New", monospace'; g.fillText(burnerT + '°C', W / 2 - 18, dy + dh / 2 + 4);
  g.shadowBlur = 0; g.font = 'bold 22px Arial'; g.fillText(fx.word, dx + dw - 40, dy + 24);
  f.tex.needsUpdate = true;
}


// ---- i on the burners, cooler and filter (blowers and batteries already have theirs)
function infoCard(title, text, rows) {
  const w = document.createElement('div'); w.className = 'vinfo-card'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', title);
  const draw = () => '<div><h2>' + title + '</h2><p>' + text + '</p><dl>' + rows().map(([a, b]) => '<dt>' + a + '</dt><dd>' + b + '</dd>').join('') + '</dl><button type="button">Close</button></div>';
  w.innerHTML = draw(); document.body.append(w); const t = setInterval(() => { const sc = w.querySelector('dl'); if (sc) sc.outerHTML = '<dl>' + rows().map(([a, b]) => '<dt>' + a + '</dt><dd>' + b + '</dd>').join('') + '</dl>'; }, 400);
  const close = () => { clearInterval(t); w.remove(); }; w.addEventListener('click', e => { if (e.target === w || e.target.tagName === 'BUTTON') close(); });
}
const tempWord = t => t < 40 ? 'Blue · below 40 °C' : t <= 70 ? 'Orange · 40–70 °C' : 'Red · above 70 °C';
const MORE_INFO = [
  ['h1', 572, 400, () => infoCard('H₂ burner 1', 'Catalytic hydrogen burner. Pit air passes through it after FLAP 103 and the hydrogen given off by the batteries is recombined with oxygen, which heats the air.', () => [['Set temperature', burnerT + ' °C'], ['Colour', tempWord(burnerT)], ['Air through it', Math.round(flows.qa) + ' m³/h'], ['Flap 103', S.flap.a ? 'OPEN' : 'CLOSED']])],
  ['h2', 582, 545, () => infoCard('H₂ burner 2', 'Second catalytic hydrogen burner, in parallel with burner 1 behind its own FLAP 103.', () => [['Set temperature', burnerT + ' °C'], ['Colour', tempWord(burnerT)], ['Air through it', Math.round(flows.qb) + ' m³/h'], ['Flap 103', S.flap.b ? 'OPEN' : 'CLOSED']])],
  ['clr', 960, 470, () => infoCard('Cooler', 'Air cooler after the burners. It takes the heat added by the burners back out before the air reaches blowers 1 and 2 (valves 109 / 110).', () => [['Air through it', Math.round(flows.qm) + ' m³/h'], ['Outlet temperature', Math.round(S.pit.Tcool) + ' °C'], ['Air velocity (V)', flows.velocity.toFixed(1) + ' m/s']])],
  ['flt', 440, 720, () => infoCard('Filter', 'Filter on the suction line after valve 122. It cleans the pit air before the H₂ burners.', () => [['Valve 122', S.open.v122 ? 'OPEN' : 'CLOSED'], ['Air through it', Math.round(flows.qm) + ' m³/h']])]
].map(([id, x, y, open]) => { const b = document.createElement('button'); b.className = 'vinfo'; b.setAttribute('aria-label', id + ' details'); b.innerHTML = '<span>i</span>'; b.addEventListener('click', open); labelsRoot.append(b); return { id, x, y, button: b }; });
SPOTS.push(...MORE_INFO);

// ---- ventilation modes 1, 2 and 5 (3 and 4 follow with the engine-room section)
// Mode 1 · closed: 103 open (everything else shut) → one blower: 109 + Blower 1 or 110 + Blower 2 → 114 → 117 → 122 → crack 114.
// Mode 2 · into compartment: Mode 1, then open 118.   Mode 5 · urgent dive: Mode 1, then open 134 and start the galley blower.
let mode = 0, crack114 = false, modeWarned = '';
const pair = () => (S.open.v109 && S.on.b1) || (S.open.v110 && S.on.b2);
const MODE1 = [
  ['Open 103 (done when the mode is chosen)', () => S.flap.a || S.flap.b, ['fa', 'fb']],
  ['Open 109 (for Blower 1) or 110 (for Blower 2)', () => S.open.v109 || S.open.v110, ['v109', 'v110']],
  ['Run the matching blower — 109 → Blower 1, 110 → Blower 2', pair, () => S.open.v109 ? ['b1'] : S.open.v110 ? ['b2'] : ['b1', 'b2']],
  ['Open 114', () => S.open.v114, ['v114']],
  ['Open 117', () => S.open.v117, ['v117']],
  ['Open 122', () => S.open.v122, ['v122']],
  ['Crack 114 open — tap 114 again', () => crack114, ['v114']]
];
const MODES = {
  1: { name: 'Closed', title: 'Mode 1 · Ventilation of battery in closed', steps: MODE1 },
  2: { name: 'Into compt', title: 'Mode 2 · Ventilation of battery into compartment', steps: [...MODE1, ['Open 118 — air from outside', () => S.open.vin, ['vin']]] },
  5: { name: 'Urgent dive', title: 'Mode 5 · Ventilation of battery during urgent dive', steps: [...MODE1, ['Open 134', () => S.open.v134, ['v134']], ['Start the galley blower', () => S.on.bg, ['bg']]] }
};
function progress() { const st = MODES[mode]?.steps || []; let i = 0; while (i < st.length && st[i][1]()) i++; return { st, i }; }
function chooseMode(m) {
  mode = m; crack114 = false; modeWarned = ''; allOff(); S.running = true; showRunState();
  S.flap.a = S.flap.b = true; for (const id of ['fa', 'fb']) parts.get(id).bladeTarget = 0;      // 103 opens, all other ports shut
  notify(MODES[m].title + ' — 103 opened, all other ports closed', true); drawModes(); drawModeBar();
  document.querySelectorAll('.port-no').forEach((el, i) => { if (PORTS[i][0] === 'fa' || PORTS[i][0] === 'fb') { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); } });
}
const modesEl = document.createElement('div'); modesEl.className = 'vcard modes'; modesEl.setAttribute('role', 'region'); modesEl.setAttribute('aria-label', 'Ventilation modes');
pin(modesEl, 1180, 905);
const tapTips = [];
function drawModes() {
  const { st, i } = progress(), m = MODES[mode];
  const tab = (k, name, dis) => '<button type="button" data-m="' + k + '"' + (mode == k ? ' class="on"' : '') + (dis ? ' disabled title="Comes with the engine-room section"' : '') + '>Mode ' + k + '<small>' + name + '</small></button>';
  let html = '<h3>BATTERY PIT VENTILATION' + (m ? ' · MODE ' + mode : '') + '</h3>';
  if (!S.running) html += '<div class="hint">Press ▶ Start, then choose a mode (1–5) at the top of the screen.</div>';
  else if (!m) html += '<div class="hint">Choose a mode at the top of the screen: Mode 1, 2, 3, 4 or 5.</div>';
  else {
    html += '<div class="hint">' + m.title + '</div><div class="cur">' + (i < st.length ? '<b>Step ' + (i + 1) + ' / ' + st.length + '</b> ' + st[i][0] : '') + '</div><div class="dots">' + st.map((_, k) => '<i class="' + (k < i ? 'd' : k === i ? 'n' : '') + '"></i>').join('') + '</div>';
    const bad = wrongProcess();
    html += bad ? '<div class="msg bad">⚠ ' + bad + '</div>' : i >= st.length ? '<div class="msg ok">✓ ' + m.title.split(' · ')[1] + ' — complete</div>' : '';
  }
  if (html !== modesEl._html) { modesEl._html = html; modesEl.innerHTML = html; modesEl.querySelectorAll('[data-m]').forEach(b => b.onclick = () => chooseMode(+b.dataset.m)); }
  // pulse the part(s) to touch next
  const nextIds = m && i < st.length ? (typeof st[i][2] === 'function' ? st[i][2]() : st[i][2]) : [];
  for (const p of parts.values()) p.button.classList.toggle('next', nextIds.includes(p.id));
  const text = m && i < st.length ? st[i][0].replace(/ \(done.*\)/, '') : '';
  nextIds.forEach((id, k) => { let c = tapTips[k]; if (!c) { c = tapTips[k] = document.createElement('div'); c.className = 'tap-tip'; labelsRoot.append(c); c._a = pin(c, 0, 0); }
    const part = parts.get(id); c._a.x = part.x; c._a.y = part.y - part.size * .55 - 30; const h = '<b>👆 TAP HERE</b><span>' + text + '</span>'; if (c.innerHTML !== h) c.innerHTML = h; c.style.display = ''; });
  for (let k = nextIds.length; k < tapTips.length; k++) tapTips[k].style.display = 'none';
  for (const c of tapTips) if (c.style.display !== 'none') { const [sx, sy] = screenPoint(c._a.x, c._a.y, 80); c.style.left = sx + 'px'; c.style.top = sy + 'px'; }
}
function wrongProcess() {
  if (!mode) return '';
  if (S.on.b1 && S.on.b2) return 'Both blowers running — operate a single blower (1 or 2).';
  if (S.open.v109 && S.on.b2 && !S.open.v110) return 'Wrong process: 109 is open but Blower 2 is running — 109 goes with Blower 1.';
  if (S.open.v110 && S.on.b1 && !S.open.v109) return 'Wrong process: 110 is open but Blower 1 is running — 110 goes with Blower 2.';
  if (S.open.v109 && S.open.v110) return 'Open only one of 109 / 110 for the single running blower.';
  return '';
}
// a tap out of order is still carried out, but flagged as the wrong step
function checkStep(id, wasOn) {
  if (!mode) return;
  const { st, i } = progress(); if (i >= st.length) { const bad = wrongProcess(); if (bad) warn('⚠ ' + bad); return; }
  const want = typeof st[i][2] === 'function' ? st[i][2]() : st[i][2];
  const bad = wrongProcess();
  if (bad) warn('⚠ ' + bad);
  else if (!wasOn && !want.includes(id) && !st.slice(0, i).some(s => (typeof s[2] === 'function' ? s[2]() : s[2]).includes(id))) warn('⚠ Wrong step — next: ' + st[i][0]);
}
const USES = { 1: ['fa', 'fb', 'v109', 'v110', 'v114', 'v117', 'v122'], 2: ['fa', 'fb', 'v109', 'v110', 'v114', 'v117', 'v122', 'vin'], 5: ['fa', 'fb', 'v109', 'v110', 'v114', 'v117', 'v122', 'v134'] };
const modeBar = document.createElement('div'); modeBar.className = 'mode-bar'; modeBar.setAttribute('role', 'toolbar'); modeBar.setAttribute('aria-label', 'Ventilation mode');
modeBar.innerHTML = [[1, 'Closed'], [2, 'Into compartment'], [3, 'Supply & exhaust'], [4, 'Standard blower'], [5, 'Urgent dive']].map(([k, n]) => '<button type="button" data-m="' + k + '"' + (MODES[k] ? '' : ' class="soon"') + '>Mode ' + k + '<small>' + (MODES[k] ? n : n + ' · soon') + '</small></button>').join('');
circuit.append(modeBar);
modeBar.querySelectorAll('button').forEach(b => b.onclick = () => { const k = +b.dataset.m; if (!MODES[k]) { notify('Mode ' + k + ' will be added with the engine-room section.', true); return; } chooseMode(k); });
function drawModeBar() {
  modeBar.classList.toggle('show', S.running);
  modeBar.querySelectorAll('button').forEach(b => b.classList.toggle('on', +b.dataset.m === mode));
  const use = USES[mode] || null;
  document.querySelectorAll('.port-no').forEach((el, i) => {
    const [id, n] = PORTS[i], part = id && parts.get(id), on = !!(part && S.running && isOn(part)), cr = id === 'v114' && on && crack114;
    el.classList.toggle('use', !!use && use.includes(id)); el.classList.toggle('dim', !!use && !use.includes(id));
    el.classList.toggle('is-open', on && !cr); el.classList.toggle('is-crack', cr);
    const html = n + (cr ? '<em>CRACKED</em>' : on ? '<em>OPEN</em>' : '');
    if (el.innerHTML !== html) el.innerHTML = html;
  });
}
setInterval(() => { drawModes(); drawModeBar(); }, 250); drawModes(); drawModeBar();

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
  for (const a of anchored) { const [sx, sy] = screenPoint(a.x, a.y, 80); Object.assign(a.el.style, { left: sx + 'px', top: sy + 'px' }); }
  circuit.style.setProperty('--k', String(pxPerUnit));
}
new ResizeObserver(layout).observe(host);
window.visualViewport?.addEventListener('resize', layout);
layout();

// ---------------------------------------------------------------- loop
const tmpC = new T.Color();
const flowOf = key => typeof key === 'function' ? key(flows) : key === 'pitIn' ? flows.inlet + flows.recirc : key === 'out' ? flows.out : flows[key] || 0;
let last = 0;
function frame(now) {
  if (!flangeMeshes) buildFlanges();
  const dt = Math.min(.05, Math.max(0, last ? (now - last) / 1000 : .016)); last = Math.max(last, now);
  for (const p of parts.values()) if (p.type === 'blower') {                         // spin up / coast down
    const target = S.on[p.key] ? S.set[p.key] : 0, tau = target > p.speed ? SPIN_UP_S : COAST_S;
    p.speed += (target - p.speed) * (1 - Math.exp(-dt / tau)); if (!target && p.speed < .002) p.speed = 0;
    p.angle += p.speed * MAX_REV_PER_S * Math.PI * 2 * dt; if (p.rotor) p.rotor.rotation.x = p.angle;
  }
  const sp = k => S.on[k] ? parts.get(k).speed : 0;                                // a stopped blower moves no air
  flows = ventFlows({ open: S.open, flap: S.flap, speed: { b1: sp('b1'), b2: sp('b2'), bg: sp('bg') } });
  if (crack114 && S.open.v114 && S.open.v117) { flows.toCompt = flows.qm * .2; flows.recirc = flows.qm - flows.toCompt; }
  stepPit(S.pit, flows, S.running ? dt * SIM_SPEED / 3600 : 0, dt, S.running, S.burn);
  S.pit.Ta = S.pit.Tb = burnerT;            // the burners run at the temperature set in the box
  reach();

  // pipes and arrows
  const dirty = tmpC.copy(AIR.dirty), px = pxPerUnit * renderer.getPixelRatio();
  for (const p of pipes) pipeUpdate(p, dt, p.reached ? flowOf(p.key) : 0, p.air === 'dirty' ? dirty : AIR[p.air], px, now);
  const pulse = .55 + .35 * Math.sin(now / 260);
  for (const a of arrows) a.m.opacity = flowOf(a.key) > 1 ? pulse : .3;

  // valve wheels, flap blades, burners, lamps
  for (const p of parts.values()) {
    if (p.wheel) p.wheel.rotation.y += (p.wheelTarget - p.wheel.rotation.y) * Math.min(1, dt * 6);
    if (p.blade) p.blade.rotation.y += (p.bladeTarget - p.blade.rotation.y) * Math.min(1, dt * 6);
    if (p.type === 'burner') {
      const T0 = burnerT, k = Math.min(1, Math.max(0, (T0 - 40) / 80));
      burnerLook(p, dt); p.ember.material.opacity = 0;
      const lit = Math.min(1, Math.max(0, (k - .08) / .6)), t = now / 1000;
      for (const n of p.nozzles) {                                                   // each flame flickers on its own
        const fl = .72 + .18 * Math.sin(t * n.sp + n.ph) + .1 * Math.sin(t * n.sp * 2.3 + n.ph * 1.7);
        n.f.material.opacity = Math.min(1, lit * 1.4) * (.8 + .2 * fl); n.f.scale.set(12 + 7 * lit * fl, (12 + 34 * lit) * fl, 1);
        n.f.position.x = n.x0 + Math.sin(t * 7 + n.ph) * .8;
      }
    }
    const target = !S.running ? LAMP_IDLE : isOn(p) ? (p.lamp.on || LAMP_ON) : LAMP_OFF;
    p.lamp.color.lerp(target, Math.min(1, dt * 8)); p.lamp.ring.material.color.copy(p.lamp.color); p.lamp.glow.material.color.copy(p.lamp.color);
  }
  thermo[0](EST.ambient); thermo[1](S.pit.Tb); vDial(flows.velocity * 30);       // burner 2 in (pit air) / out; V across the cooler
  filterCol.lerp(!S.running ? FILTER_IDLE : S.open.v122 ? LAMP_ON : LAMP_OFF, Math.min(1, dt * 6));
  filterBox.face.color.copy(filterCol); filterBox.side.color.copy(filterCol).multiplyScalar(.7);
  for (const pl of plumes) plumeUpdate(pl, dt, flowOf(pl.key));
  for (const s of haze) s.material.opacity = S.running ? Math.min(.75, .08 + S.pit.h2 / 4 * .67) : 0;
  const gas = S.running ? .7 : 0;                                   // cells gassing: plenty of bubbles in the electrolyte
  for (const { b, sc } of batteries) b.update(dt, gas, px * sc);

  // H₂ alarm (the only on-screen message besides warnings)
  const h2 = S.pit.h2;
  if (S.running && h2 >= ALARM) { alarmEl.style.display = 'block'; alarmEl.className = h2 >= DANGER ? 'red' : ''; alarmEl.textContent = h2 >= DANGER ? '⚠ H₂ DANGER ' + h2.toFixed(1) + ' % — explosive limit reached, ventilate now' : '⚠ H₂ HIGH ' + h2.toFixed(1) + ' % — start the battery pit ventilation'; }
  else alarmEl.style.display = 'none';

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
// leaving the screen frees its graphics memory at once (phones keep the previous page alive otherwise)
addEventListener('pagehide', () => { renderer.dispose(); renderer.forceContextLoss(); });
addEventListener('pageshow', e => { if (e.persisted) location.reload(); });   // coming back to it: rebuild
