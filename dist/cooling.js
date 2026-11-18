// Screen 3 — Storage Battery and Panel Cooling System. Fixed top view of the supplied schematic in the style of screens 1
// and 2: glass pipes with circuit 1's water-blue flow, tap-to-operate valves drawn as the schematic's symbols (gate,
// stop-check, angle and needle valves), white/red/green states, warnings and interlocks. Pumps 40/15 and 5/17 are the
// Blender pump set (pump_set.glb); the battery pits reuse screen 2's cells.
// Plan coordinates are the supplied schematic's (upright photo, 2000 × 1562, x right, y down); world = (x − 1000, h, y − 786).
// Compartments left to right: M/R | E/R | III | C/R | F/E. Upper line = warm return to the coolers; lower line = cooled
// supply from the pumps.
import './offline-support.js';
import {attachZoom} from './zoom-control.js';
let Z = { z: 1, px: 0, py: 0 };   // zoom state (zoom-control.js)
import * as T from 'three';
import {battery3D, facing, openBatteryDetail} from './battery-detail.js';
import {openBlowerDetail} from './blower-detail.js';
import {loadPump, PUMP_REV_PER_S, PUMP_SPIN_UP_S, PUMP_COAST_S} from './pump-model.js';

const host = document.querySelector('#viewport'), labelsRoot = document.querySelector('#labels'), circuit = document.querySelector('#circuit');
// client: fill the wide screen and give the crowded C/R plant room. Plan x is spread piecewise: M/R..III and F/E
// a little, C/R (920-1435 on the drawing) much more. Parts keep their shape; only positions spread.
// client: "elaborate the screen, scroll to the side" — the whole plan is spread a further WIDE x and the screen scrolls sideways
const WIDE = 1.7, XA = 1.16 * WIDE, XB = 1.70 * WIDE, XC = 1.18 * WIDE, SX = 1.32 * WIDE, X0 = -105.6 * WIDE;
const WX = x => x <= 920 ? X0 + (x - 920) * XA : x <= 1435 ? X0 + (x - 920) * XB : X0 + 515 * XB + (x - 1435) * XC;
const WXinv = w => w <= X0 ? 920 + (w - X0) / XA : w <= X0 + 515 * XB ? 920 + (w - X0) / XB : 1435 + (w - X0 - 515 * XB) / XC;
const P = (x, y, h = 0) => new T.Vector3(WX(x), h, y - 786);
const PIPE_Y = 24;
const FILL_SPEED = 520;                                  // plan units / s at which pumped water fills a pipe up to the next closed part
const LAMP_IDLE = new T.Color('#8e9ca3'),   // light backdrop: idle rings in grey so they still show
      LAMP_OFF = new T.Color('#9aa7ae'), LAMP_ON = new T.Color('#22b45a');

// ---------------------------------------------------------------- renderer, camera, light
// phones and tablets (touch, coarse pointer) render at most 2× so the scene fits in their graphics memory
const PHONE = matchMedia('(pointer: coarse)').matches;
function sharpRatio() { return Math.min(PHONE ? 2 : 4, (devicePixelRatio || 1) * (window.visualViewport?.scale || 1)); }
const renderer = new T.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(sharpRatio()); renderer.outputColorSpace = T.SRGBColorSpace;
renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
host.append(renderer.domElement);
const scene = new T.Scene(); scene.background = new T.Color('#dcebf4');
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
const floorTex = canvasTexture(512, (c, s) => { const g = c.createRadialGradient(s / 2, s * .42, 10, s / 2, s / 2, s * .72); g.addColorStop(0, '#ffffff'); g.addColorStop(.45, '#eef6fb'); g.addColorStop(1, '#c4dbea'); c.fillStyle = g; c.fillRect(0, 0, s, s); });
const sprite = (tex, color, scale, opacity = 1) => { const m = new T.Sprite(new T.SpriteMaterial({ map: tex, color, transparent: true, opacity, depthWrite: false, blending: T.AdditiveBlending })); m.scale.setScalar(scale); return m; };

// ---------------------------------------------------------------- materials
const mat = {
  metal: new T.MeshStandardMaterial({ color: '#b9c2c8', metalness: .85, roughness: .32 }),
  dark: new T.MeshStandardMaterial({ color: '#2a3237', metalness: .5, roughness: .5 }),
  red: new T.MeshStandardMaterial({ color: '#c8322b', metalness: .3, roughness: .4 }),
  glass: new T.MeshPhysicalMaterial({ color: '#8fb3c6', metalness: 0, roughness: .06, transparent: true, opacity: .34, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1.6 }),   // writes depth: overlapping pipes show one glass surface, so joints blend
  flange: new T.MeshStandardMaterial({ color: '#9aa6ad', metalness: .8, roughness: .35 }),
  pit: new T.MeshStandardMaterial({ color: '#bfe8e2', metalness: .1, roughness: .9 })
};


// ---------------------------------------------------------------- pipe network
// Each pipe runs from one node to the next in the direction air moves. Nodes are the valves, flaps, blowers, junctions,
// air sources and outlets of the drawing. Air "reaches" a pipe when everything upstream of it is open (it then fills
// the pipe and rests against the closed part at its end); it "flows" only where the model gives it a flow rate.
const AIR = { warm: new T.Color('#2a4fc0'), cold: new T.Color('#2457d6'), side: new T.Color('#1f86d1') };   // circuit 1's blues: warm return, cooled supply, side loop   // air in cool blue-greys (pit air greyer, treated air bluer), dark enough for the light backdrop
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
const FACE = {}, FACE_OF = FACE;                          // filled from each part's own face size once the parts exist
const JUNCTIONS = new Set(['LJ', 'L1', 'LE', 'LM', 'MT', 'MB', 'UM', 'UE', 'ET', 'EB', 'U3', 'T3', 'J3b', 'U4', 'U5', 'UF', 'J', 'S77', 'SUC', 'SH2', 'S1', 'DH0', 'DH', 'C36', 'C1', 'IXo', 'CMJ', 'BW', 'BG', 'BH', 'LF', 'TF', 'JF', 'MA3', 'P3i', 'P3o', 'PFi', 'PFo', 'TK']);
const BLOWERS = new Set(['p1', 'p2']);                     // pump flanges are the model's own
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
  const q = pts.map(p => p.slice()), mv = (i, j, d) => { const [x0, y0] = q[i], [x1, y1] = q[j], L = Math.hypot(x1 - x0, y1 - y0); if (!d || !L) return; const sx = x0 <= 920 ? XA : x0 <= 1435 ? XB : XC, k = Math.hypot((x1 - x0) / L * sx, (y1 - y0) / L); d /= k;   /* faces are world sizes: convert to plan along this (spread) direction */ const t = Math.min(d, L - 1) / L; q[i][0] = x0 + (x1 - x0) * t; q[i][1] = y0 + (y1 - y0) * t; };
  mv(0, 1, a); mv(q.length - 1, q.length - 2, b); return q;
}
const chevronShape = new T.Shape([new T.Vector2(-9, -11), new T.Vector2(3, 0), new T.Vector2(-9, 11), new T.Vector2(-3, 0)]);
// from / to: node names; key: which flow (m³/h) it carries; air: 'dirty' (pit air with H₂), 'clean' (treated) or 'room'
const hoseMat = new T.MeshPhysicalMaterial({ color: '#efe4b8', roughness: .12, transmission: PHONE ? 0 : .35, thickness: 3, transparent: true, opacity: .85, side: T.DoubleSide });   // no transmission pass on phones   // screen 1 battery hose
// flexible joints ~ (drawing): [x, y, vertical, bore] — the pipe passing through each one is bent into the wave
const FLEXES = [[685, 975, false, 9], [815, 975, false, 9], [1510, 950, false, 9], [1640, 950, false, 9], [1158, 1065, true, 12], [1101, 1262, false, 5.5]], FLEX_L = 46;
const waveAt = (x, y, vertical, dir, A) => Array.from({ length: 17 }, (_, i) => { const t = i / 16, along = -dir * FLEX_L / 2 + dir * FLEX_L * t, off = A * Math.sin(Math.PI * 2 * (dir > 0 ? t : 1 - t));   /* same S whichever way the water runs, so pipe and hose sleeve coincide */ return vertical ? [x + off, y + along] : [x + along, y + off]; });
function addWaves(pts) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
    for (const [fx, fy, v, r] of FLEXES) {
      if (!v && Math.abs(y0 - fy) < 1 && Math.abs(y1 - fy) < 1 && Math.min(x0, x1) + FLEX_L / 2 < fx && fx < Math.max(x0, x1) - FLEX_L / 2) out.push(...waveAt(fx, fy, false, Math.sign(x1 - x0), r * .9));
      if (v && Math.abs(x0 - fx) < 1 && Math.abs(x1 - fx) < 1 && Math.min(y0, y1) + FLEX_L / 2 < fy && fy < Math.max(y0, y1) - FLEX_L / 2) out.push(...waveAt(fx, fy, true, Math.sign(y1 - y0), r * .9));
    }
    out.push(pts[i]);
  }
  return out;
}
function pipe(from, to, key, pts, air, { r = 13, curve = null } = {}) {
  if (!curve) pts = addWaves(pts);
  if (!curve) pts = trimEnds(pts, FACE[from] || 0, FACE[to] || 0);
  const path = curve || roundedPath(pts), len = path.getLength();
  const geo = new T.TubeGeometry(path, Math.max(16, Math.round(len / 6)), r, 16, false);
  if (curve) { const h = new T.Mesh(geo, hoseMat); h.renderOrder = 6; scene.add(h); } else glassTube(geo);
  if (!curve && r > 4) {
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
  const pts3 = path.getSpacedPoints(Math.max(4, Math.ceil(len / 5))), K = r > 5 ? 22 : 12;   // as circuits 1 and 2 (22 trails per pipe)
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
const wireMat = new T.MeshStandardMaterial({ color: '#8d989f', metalness: .7, roughness: .4 });
function wire(pts, r = 2.5) { const path = new T.CurvePath(); for (let i = 1; i < pts.length; i++) path.add(new T.LineCurve3(P(pts[i - 1][0], pts[i - 1][1], PIPE_Y - 4), P(pts[i][0], pts[i][1], PIPE_Y - 4))); scene.add(new T.Mesh(new T.TubeGeometry(path, pts.length * 4, r, 8, false), wireMat)); }
function dial(x, y, kind = 'arrow') {                          // circuit 1's PG: metal rim, white face, ticks 0-4 kg/cm², value window, dark needle
  const c = document.createElement('canvas'); c.width = c.height = 256; const tex = new T.CanvasTexture(c); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const top = new T.MeshBasicMaterial({ map: tex, toneMapped: false }), side = new T.MeshStandardMaterial({ color: '#e9eef1', metalness: .95, roughness: .14 });   // bright white face, polished chrome case (as circuit 1)
  const m = new T.Mesh(new T.CylinderGeometry(27, 27, 10, 64), [side, top, side]); m.position.copy(P(x, y, PIPE_Y + 6)); scene.add(m);
  const rim = new T.Mesh(new T.TorusGeometry(27, 3.4, 16, 64), side); rim.rotation.x = Math.PI / 2; rim.position.copy(P(x, y, PIPE_Y + 11)); scene.add(rim);
  const glass = new T.Mesh(new T.CircleGeometry(26, 48), new T.MeshPhysicalMaterial({ color: '#ffffff', transparent: true, opacity: .12, roughness: 0, clearcoat: 1, depthWrite: false })); glass.rotation.x = -Math.PI / 2; glass.position.copy(P(x, y, PIPE_Y + 12)); scene.add(glass);
  let shown = null;
  return v => {
    const r = Math.round(v * 100); if (r === shown) return; shown = r; const g = c.getContext('2d');
    g.clearRect(0, 0, 256, 256); g.save(); g.translate(128, 128); g.rotate(Math.PI / 2);   // the cylinder cap maps the canvas turned a quarter
    g.fillStyle = '#f8fbf5'; g.beginPath(); g.arc(0, 0, 126, 0, 7); g.fill(); g.strokeStyle = '#1f3a33'; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, 121, 0, 7); g.stroke();
    if (kind === 'V') { g.fillStyle = '#1f3a33'; g.font = 'bold 150px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('V', 0, 12); g.restore(); tex.needsUpdate = true; return; }
    g.fillStyle = g.strokeStyle = '#1f3a33'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let k = 0; k <= 16; k++) { const a = (135 + k * 16.875) * Math.PI / 180, r1 = k % 4 ? 100 : 92; g.lineWidth = k % 4 ? 2.6 : 4.4; g.beginPath(); g.moveTo(Math.cos(a) * 112, Math.sin(a) * 112); g.lineTo(Math.cos(a) * r1, Math.sin(a) * r1); g.stroke();
      if (k % 2 === 0) { g.font = 'bold 19px Arial'; g.fillText((k / 4).toFixed(k % 4 ? 1 : 0), Math.cos(a) * 76, Math.sin(a) * 76); } }
    g.font = 'bold 17px Arial'; g.fillText('kg/cm²', 0, 34);
    g.fillStyle = '#f4f7f6'; g.lineWidth = 2; g.beginPath(); g.roundRect(-40, 52, 80, 30, 6); g.fill(); g.stroke();
    g.fillStyle = '#14302a'; g.font = 'bold 21px Arial'; g.fillText(v.toFixed(2), 0, 68);
    const a = (135 + Math.min(4, Math.max(0, v)) / 4 * 270) * Math.PI / 180;
    g.strokeStyle = '#1f3a33'; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(-Math.cos(a) * 18, -Math.sin(a) * 18); g.lineTo(Math.cos(a) * 96, Math.sin(a) * 96); g.stroke();
    g.beginPath(); g.arc(0, 0, 11, 0, 7); g.fill();
    g.restore(); tex.needsUpdate = true;
  };
}

// ---------------------------------------------------------------- symbols drawn as on the schematic
const STEM = new T.MeshStandardMaterial({ color: '#5d6b72', metalness: .6, roughness: .4 }), RIM = new T.MeshStandardMaterial({ color: '#0f5f4a', roughness: .4 });
const BLACK = new T.MeshStandardMaterial({ color: '#1d2327', roughness: .45, side: T.DoubleSide }), WHEEL = new T.MeshPhysicalMaterial({ color: '#1f8a6c', roughness: .35, clearcoat: .5 });
const GATE_ON = new T.Color('#1f9e7a'), VALVE_IDLE = new T.Color('#f2f5f6');   // valves white when the circuit is off, as drawn
const stateBody = () => new T.MeshPhysicalMaterial({ color: LAMP_IDLE.clone(), roughness: .3, metalness: .1, transparent: true, opacity: .9, clearcoat: .6, side: T.DoubleSide });   // flat symbol faces seen from above
function handwheel(g, s, lean = .55) {                       // stem leaning toward the viewer with a round handwheel
  const arm = new T.Group(); arm.rotation.x = -Math.PI / 2 + lean; g.add(arm);
  const stem = new T.Mesh(new T.CylinderGeometry(2.6 * s, 2.6 * s, 34 * s, 10), STEM); stem.position.y = 17 * s; arm.add(stem);
  const wheel = new T.Group(); wheel.position.y = 36 * s; arm.add(wheel);
  wheel.add(new T.Mesh(new T.CylinderGeometry(19 * s, 19 * s, 4 * s, 36), WHEEL));
  const spoke = new T.Mesh(new T.BoxGeometry(34 * s, 4.6 * s, 3 * s), RIM); spoke.position.y = s; wheel.add(spoke);
  return wheel;
}
// gate valve ⋈ (two cones point to point along the pipe) — with check: true the schematic's half-black stop-check valve
function gate(id, x, y, title, { vertical = false, s = .6, check = false, down = false } = {}) {   // drawing: ▷◁ outlined, spindle out to the side with a T-bar
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y + 6)); if (vertical) g.rotation.y = Math.PI / 2; scene.add(g);
  const body = stateBody(), ink = new T.LineBasicMaterial({ color: '#15191c' }), A = 26 * s, Hh = 20 * s;
  for (const sg of [-1, 1]) {
    const pts = [new T.Vector2(0, 0), new T.Vector2(sg * A, -Hh), new T.Vector2(sg * A, Hh)];
    const tri = new T.Mesh(new T.ShapeGeometry(new T.Shape(pts)), check && (down ? sg < 0 : sg > 0) ? BLACK : body); tri.rotation.x = Math.PI / 2; tri.renderOrder = 9; g.add(tri);
    const ln = new T.LineLoop(new T.BufferGeometry().setFromPoints(pts.map(p => new T.Vector3(p.x, .6, p.y))), ink); ln.renderOrder = 10; g.add(ln);
  }
  const L = 34 * s;                                                   // spindle (the drawing's hatched double line) and T-bar, to the left of a vertical valve / above a horizontal one
  for (const o of [-1.6, 1.6]) { const r = new T.Mesh(new T.BoxGeometry(1.4 * Math.max(1, s * 1.6), 1.2, L), STEM); r.position.set(o * s * 1.6, 1, -L / 2); g.add(r); }
  const bar = new T.Mesh(new T.BoxGeometry(30 * s, 1.6, 4.2 * s), BLACK); bar.position.set(0, 1.2, -L); g.add(bar);
  return addPart(id, 'valve', x, y, title, Math.max(46, 70 * s), { key: id, face: A + 1, lamp: { ring: { material: body }, glow: { material: { color: new T.Color() } }, color: LAMP_IDLE.clone(), on: GATE_ON, idle: VALVE_IDLE }, wheel: new T.Group(), wheelTarget: 0, closedAngle: 0, openAngle: 0 });
}
// angle valve: two cones at 90°, one on the inlet leg and one on the outlet leg ([dx, dy] plan directions away from the body)
function angleValve(id, x, y, title, inDir, outDir, s = .45) {   // drawing's angle valve: ▽ on the pipe, ◁ to the side, T handle — black outlines
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y + 6)); scene.add(g);
  const body = stateBody(), edge = new T.LineBasicMaterial({ color: '#15191c' }), S2 = 44 * s, W2 = 28 * s;
  for (const [dx, dy] of [inDir, outDir]) {
    const d = new T.Vector2(dx * XB / Math.hypot(dx * XB, dy) || 0, dy / Math.hypot(dx * XB, dy) || 0), n = new T.Vector2(-d.y, d.x);
    const pts = [new T.Vector2(0, 0), new T.Vector2(d.x * S2 + n.x * W2, d.y * S2 + n.y * W2), new T.Vector2(d.x * S2 - n.x * W2, d.y * S2 - n.y * W2)];
    const tri = new T.Mesh(new T.ShapeGeometry(new T.Shape(pts)), body); tri.rotation.x = Math.PI / 2; tri.renderOrder = 9; g.add(tri);
    const ln = new T.LineLoop(new T.BufferGeometry().setFromPoints(pts.map(p => new T.Vector3(p.x, .5, p.y))), edge); ln.renderOrder = 10; g.add(ln);
  }
  const h = new T.Vector2(-outDir[0], -outDir[1]).normalize(), hn = new T.Vector2(-h.y, h.x), L = 30 * s, B = 15 * s;   // T handle straight out opposite the outlet (drawing)
  const handle = new T.LineSegments(new T.BufferGeometry().setFromPoints([new T.Vector3(0, 1, 0), new T.Vector3(h.x * L, 1, h.y * L), new T.Vector3(h.x * L + hn.x * B, 1, h.y * L + hn.y * B), new T.Vector3(h.x * L - hn.x * B, 1, h.y * L - hn.y * B)]), edge); handle.renderOrder = 10; g.add(handle);
  const stem = new T.Mesh(new T.CylinderGeometry(1.6 * s * 2, 1.6 * s * 2, L, 8), STEM); stem.quaternion.setFromUnitVectors(UP, new T.Vector3(h.x, 0, h.y)); stem.position.set(h.x * L / 2, 1, h.y * L / 2); g.add(stem);
  const bar = new T.Mesh(new T.BoxGeometry(2 * B, 2.4, 3.2 * s * 2), STEM); bar.position.set(h.x * L, 1, h.y * L); bar.rotation.y = -Math.atan2(hn.y, hn.x); g.add(bar);
  return addPart(id, 'valve', x, y, title, Math.max(44, 70 * s), { key: id, face: 4, lamp: { ring: { material: body }, glow: { material: { color: new T.Color() } }, color: LAMP_IDLE.clone(), on: GATE_ON, idle: VALVE_IDLE }, wheel: new T.Group(), wheelTarget: 0, closedAngle: 0, openAngle: 0 });
}
// needle valve at each gauge: a small fixed ⋈ with a T handle
const NEEDLE = new T.MeshStandardMaterial({ color: '#7d8a91', metalness: .5, roughness: .35 });
function needle(x, y, vertical) {                            // drawing's gauge cock: bowtie with a forked handle
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y + 6)); if (vertical) g.rotation.y = Math.PI / 2; scene.add(g);
  const white = new T.MeshBasicMaterial({ color: '#ffffff', toneMapped: false, side: T.DoubleSide }), ink = new T.LineBasicMaterial({ color: '#15191c' });
  for (const sg of [-1, 1]) {
    const pts = [new T.Vector2(0, 0), new T.Vector2(sg * 10, -7), new T.Vector2(sg * 10, 7)];
    const tri = new T.Mesh(new T.ShapeGeometry(new T.Shape(pts)), white); tri.rotation.x = Math.PI / 2; tri.renderOrder = 9; g.add(tri);
    const ln = new T.LineLoop(new T.BufferGeometry().setFromPoints(pts.map(p => new T.Vector3(p.x, .5, p.y))), ink); ln.renderOrder = 10; g.add(ln);
  }
  const stem = new T.Mesh(new T.BoxGeometry(1.8, 1.5, 11), BLACK); stem.position.set(0, 1, -5.5); g.add(stem);
  for (const sg of [-1, 1]) { const f = new T.Mesh(new T.BoxGeometry(1.8, 1.5, 9), BLACK); f.position.set(sg * 2.8, 1, -15); f.rotation.y = -sg * .5; g.add(f); const ft = new T.Mesh(new T.BoxGeometry(5, 1.5, 1.8), BLACK); ft.position.set(sg * 5.2, 1, -19.2); g.add(ft); }   /* legs spread apart, each with a foot, as drawn */
}

// pressure gauge on its tapping: instrument line from the pipe, needle valve, then the dial (arrow swings with pressure)
const gauges = [];
function gauge(line, dialAt, pipeKey, tag = '') {
  wire([...line, dialAt]); const n = line[line.length - 1], m = line[line.length - 2];
  const dW = (a, b) => Math.hypot(WX(a[0]) - WX(b[0]), a[1] - b[1]); let nn = n;
  if (dW(n, dialAt) < 52) { const L = dW(n, m), t = Math.min(.8, (52 - dW(n, dialAt)) / Math.max(1, L)); nn = [n[0] + (m[0] - n[0]) * t, n[1] + (m[1] - n[1]) * t]; }   // keep the cock visible beside the case
  needle(nn[0], nn[1], Math.abs(n[0] - m[0]) < 1);
  { const d = new T.Vector3(WX(n[0]) - WX(dialAt[0]), 0, n[1] - dialAt[1]).normalize(), base = P(dialAt[0], dialAt[1], PIPE_Y + 4), q = new T.Quaternion().setFromUnitVectors(UP, d);
    const brass = new T.MeshStandardMaterial({ color: '#c9a24a', metalness: .9, roughness: .3 });
    const stem = new T.Mesh(new T.CylinderGeometry(4.2, 4.2, 14, 16), brass); stem.quaternion.copy(q); stem.position.copy(base).addScaledVector(d, 33); stem.scale.y = .5; scene.add(stem);
    const nut = new T.Mesh(new T.CylinderGeometry(5.2, 5.2, 4, 6), brass); nut.quaternion.copy(q); nut.position.copy(base).addScaledVector(d, 37); scene.add(nut); }
  const nom = /^v8[34]$/.test(pipeKey) ? 3.2 : pipeKey === 'v47' ? 2.8 : pipeKey === 'ix' ? 1.4 : /^(ma1|mb1|ep1|es1|b3i|bfi)$/.test(pipeKey) ? 2.6 : 1.8;   // kg/cm²: pump discharge highest, panel outlets lowest
  gauges.push({ set: dial(dialAt[0], dialAt[1]), pipeKey, at: dialAt, nom, p: 0, tag, up: nn[1] > dialAt[1] + 5 });   // cock below the gauge: its tag goes above
}
// thermocouple t / pressure sensor P: the schematic's boxed dark triangle beside the pipe
function sensor(x, y, side = 1, letter = 't') {
  const g = new T.Group(); g.position.copy(P(x + side * 15, y, PIPE_Y + 4)); scene.add(g);
  g.add(new T.Mesh(new T.BoxGeometry(14, 6, 18), new T.MeshStandardMaterial({ color: '#f4f7f8', roughness: .5 })));
  const tri = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-side * 6, -8), new T.Vector2(-side * 6, 8), new T.Vector2(side * 5, 0)])), BLACK);
  tri.rotation.x = -Math.PI / 2; tri.position.y = 3.2; g.add(tri);
  const b = new T.Mesh(new T.CylinderGeometry(3, 3, 10, 10), STEM); b.rotation.z = Math.PI / 2; b.position.x = -side * 10; g.add(b);
}
// flexible joint ~ : three bellows rings on the pipe
const HOSE = new T.MeshStandardMaterial({ color: '#2b3338', metalness: .2, roughness: .6, transparent: true, opacity: .5, depthWrite: false });
function flex(x, y, vertical, r = 9) {                     // flexible hose ~ : rubber sleeve with ribs following the pipe's own wave, steel collar each end
  const w = waveAt(x, y, vertical, 1, r * .9).map(([px, py]) => P(px, py, PIPE_Y)), curve = new T.CatmullRomCurve3(w);
  const sleeve = new T.Mesh(new T.TubeGeometry(curve, 80, r * 1.08, 20, false), hoseMat); sleeve.renderOrder = 8; scene.add(sleeve);   // clear flexible hose (as the battery-cell hoses)
  for (const t of [0, 1]) flange(curve.getPointAt(t), curve.getTangentAt(t), r);
}
// diamonds as drawn: cooler ◇ with a cross, panel cooler / ion-exchange filter ◇ with a dashed line; tinted by state
function diamond3(x, y, kind, size = 44, tall = 1.55) {
  const top = canvasTexture(128, (c, s) => {
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, s, s); c.strokeStyle = '#1d2327'; c.lineWidth = 5;
    if (kind === 'cooler') { c.beginPath(); c.moveTo(s - 8, 8); c.lineTo(8, s - 8); c.stroke(); }
    else if (kind === 'cross') {                                   // drawing: vertical line, horizontal line with arrows pointing in to it
      c.beginPath(); c.moveTo(s - 8, 8); c.lineTo(8, s - 8); c.moveTo(8, 8); c.lineTo(s - 8, s - 8); c.stroke();
      c.fillStyle = '#1d2327'; const m = s / 2, k = 22;
      for (const sg of [-1, 1]) { const tx = m + sg * 5, ty = m + sg * 5; c.beginPath(); c.moveTo(tx, ty); c.lineTo(tx + sg * k, ty + sg * k - sg * 15); c.lineTo(tx + sg * k - sg * 15, ty + sg * k); c.closePath(); c.fill(); }
    }
    else { c.setLineDash([12, 10]); c.beginPath(); c.moveTo(8, 8); c.lineTo(s - 8, s - 8); c.stroke(); }
  });
  const side = new T.MeshStandardMaterial({ color: '#46525a', metalness: .4, roughness: .45 }), face = new T.MeshStandardMaterial({ map: top, roughness: .5 });
  const b = new T.Mesh(new T.BoxGeometry(size, 26, size), [side, side, face, side, side, side]);
  b.rotation.y = Math.PI / 4; const holder = new T.Group(); holder.position.copy(P(x, y, PIPE_Y)); holder.scale.z = tall; holder.add(b); scene.add(holder);
  return { side, face, col: LAMP_IDLE.clone() };
}
// battery breaker cooler: two glass columns (with their floats) either side of a cross-diamond exchanger
function exchanger(x, y) {
  for (const dx of [-23, 23]) {
    const wall = new T.Mesh(new T.BoxGeometry(24, 20, 144), new T.MeshStandardMaterial({ color: '#8d989e', metalness: .3, roughness: .55 })); wall.position.copy(P(x + dx, y, PIPE_Y)); scene.add(wall);
    const inner = new T.Mesh(new T.BoxGeometry(14, 1, 132), new T.MeshBasicMaterial({ color: '#f4f7f8', toneMapped: false })); inner.position.copy(P(x + dx, y, PIPE_Y + 10.2)); scene.add(inner);
    const bar = new T.Mesh(new T.BoxGeometry(14, 1, 1.6), BLACK); bar.position.copy(P(x + dx, y + 44, PIPE_Y + 10.8)); scene.add(bar);
    const fl = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-8, -7), new T.Vector2(8, -7), new T.Vector2(0, 8)])), BLACK); fl.rotation.x = -Math.PI / 2; fl.position.copy(P(x + dx, y + 58, PIPE_Y + 12)); scene.add(fl);
  }
  return diamond3(x, y, 'cross', 34);
}

// ---------------------------------------------------------------- compartments and battery pits
{ const f = new T.Mesh(new T.PlaneGeometry(9000, 2000), new T.MeshBasicMaterial({ map: floorTex, toneMapped: false })); f.rotation.x = -Math.PI / 2; f.position.y = -700; scene.add(f); }
for (const x of [380, 578, 920, 1435]) {                   // M/R | E/R | III | C/R | F/E
  const d = new T.Line(new T.BufferGeometry().setFromPoints([P(x, 345, -18), P(x, 1465, -18)]), new T.LineDashedMaterial({ color: '#7d94a0', dashSize: 16, gapSize: 12 })); d.computeLineDistances(); scene.add(d);
}
const batteries = [], PITS = { III: { x0: 652, x1: 843, y0: 1176, y1: 1367, cells: [690, 735, 780, 825], cy: 1310 }, FE: { x0: 1520, x1: 1700, y0: 1273, y1: 1455, cells: [1552, 1594, 1636, 1678], cy: 1405 } };
for (const [name, pit] of Object.entries(PITS)) {
  const w = WX(pit.x1) - WX(pit.x0), h = pit.y1 - pit.y0, c = P((pit.x0 + pit.x1) / 2, (pit.y0 + pit.y1) / 2, -20);
  const floor = new T.Mesh(new T.PlaneGeometry(w, h), mat.pit); floor.rotation.x = -Math.PI / 2; floor.position.copy(c); scene.add(floor);
  const edge = new T.LineSegments(new T.EdgesGeometry(new T.PlaneGeometry(w, h)), new T.LineBasicMaterial({ color: '#2a9d8f' })); edge.rotation.x = -Math.PI / 2; edge.position.copy(c).setY(-19); scene.add(edge);
  for (const x of pit.cells) {
    const b = battery3D({}), sc = 20, q = facing(new T.Vector3(0, 0, -1), new T.Vector3(0, 1, 0));
    b.group.scale.setScalar(sc); b.group.quaternion.copy(q);
    const mid = new T.Vector3(0, b.size.H / 2 * sc, 0).applyQuaternion(q);
    b.group.position.copy(P(x, pit.cy, 30)).sub(mid); scene.add(b.group); b.group.updateMatrixWorld(true);
    batteries.push({ b, sc, pit: name, x, nip: b.group.localToWorld(b.nipple.clone()), up: new T.Vector3(0, 1, 0).applyQuaternion(q) });
  }
}

// ---------------------------------------------------------------- pumps (Blender pump set) seen from the side, as drawn:
// discharge up, end suction on the outer side, motors toward each other (40/15 ⊂M  M⊃ 5/17)
const PUMPS = new Set(['p1', 'p2']);
function pump(id, cx, cy, mirror, title, connect) {
  const g = new T.Group(); scene.add(g);
  const lg = new T.Group(); lg.position.copy(P(cx + (mirror ? 18 : -18), cy + 34, PIPE_Y + 40)); scene.add(lg);   // status dot on the baseplate, motor end
  const p = addPart(id, 'pump', cx, cy, title, 105, { key: id, rotor: null, speed: 0, angle: 0, group: g, lamp: lamp(lg, 9, 0) });
  loadPump().then(src => {
    const model = src.clone(true); g.add(model);
    const s = mirror ? -1 : 1;
    g.quaternion.setFromRotationMatrix(new T.Matrix4().makeBasis(new T.Vector3(s, 0, 0), new T.Vector3(0, 0, -1), new T.Vector3(0, s, 0)));
    g.updateMatrixWorld(true); let box = new T.Box3().setFromObject(g);
    g.scale.setScalar(105 / (box.max.x - box.min.x)); g.updateMatrixWorld(true); box = new T.Box3().setFromObject(g);
    const c = box.getCenter(new T.Vector3()), want = P(cx, cy, PIPE_Y);
    g.position.add(new T.Vector3(want.x - c.x, PIPE_Y - box.max.y + 12, want.z - c.z)); g.updateMatrixWorld(true);
    p.rotor = model.getObjectByName('Shaft');
    model.traverse(n => { if (/top_?bridge/i.test(n.name)) n.visible = false; });   // open lantern: the spinning coupling shows from above
    p.base = g.position.clone();
    const glow = sprite(glowTex, '#22b45a', 1, 0); glow.material.blending = T.NormalBlending; glow.scale.set(150, 90, 1); glow.position.copy(P(cx, cy, 0)); scene.add(glow); p.runGlow = glow;
    const plan = name => { const v = model.getObjectByName(name).getWorldPosition(new T.Vector3()); return [WXinv(v.x), v.z + 786, v.y]; };
    connect(plan('Suction_Port'), plan('Discharge_Port'));
    layout();
  });
  return p;
}

// ---------------------------------------------------------------- the valves (positions from the schematic)
const UPL = 440, LOW = 530;                                   // upper (return) and lower (supply) main lines
const gv = (id, x, y, t, o) => gate(id, x, y, t, o), cv = (id, x, y, t, o = {}) => gate(id, x, y, t, { ...o, check: true });
// C/R coolers, bypass and outlets
gv('v35', 1005, UPL, 'Valve 35 · cooler inlet'); gv('v40', 1110, UPL, 'Valve 40 · cooler outlet');
gv('v50', 1225, UPL, 'Valve 50 · cooler outlet'); gv('v54', 1330, UPL, 'Valve 54 · cooler inlet');
gv('v46', 1180, 380, 'Valve 46 · cooler bypass', { s: .8 });
gv('v41', 1108, LOW, 'Valve 41 · supply to III, E/R, M/R'); gv('v49', 1232, LOW, 'Valve 49 · supply to F/E');
// M/R: main motor panel (A) and grouper switch (B); E/R: Port and Stbd panels
cv('ma1', 222, 617, 'Main motor panel · inlet valve', { vertical: true, down: true, s: .48 }); cv('ma2', 222, 1150, 'Main motor panel · outlet valve', { vertical: true, down: true, s: .48 });
cv('mb1', 307, 617, 'Grouper switch · inlet valve', { vertical: true, down: true, s: .48 }); cv('mb2', 307, 1140, 'Grouper switch · outlet valve', { vertical: true, down: true, s: .48 });
cv('ep1', 405, 660, 'Port panel · inlet valve', { vertical: true, down: true, s: .48 }); cv('ep2', 405, 1180, 'Port panel · outlet valve', { vertical: true, down: true, s: .48 });
cv('es1', 512, 660, 'Stbd panel · inlet valve', { vertical: true, down: true, s: .48 }); cv('es2', 512, 1180, 'Stbd panel · outlet valve', { vertical: true, down: true, s: .48 });
// III and F/E: battery breaker coolers and battery pits
cv('b3i', 856, 836, 'III battery breaker · inlet valve', { vertical: true, down: true, s: .48 }); cv('b3o', 634, 923, 'III battery breaker · outlet valve', { vertical: true, s: .48 });
gv('v17', 900, 800, 'Valve 17 · III battery pit inlet', { vertical: true, s: .55 }); gv('v26', 600, 678, 'Valve 26 · III battery pit outlet', { vertical: true, s: .55 });
cv('bfi', 1476, 884, 'F/E battery breaker · inlet valve', { vertical: true, down: true, s: .48 }); cv('v60', 1697, 815, 'Valve 60 · F/E battery breaker outlet', { vertical: true, s: .48 });
gv('v56', 1438, 710, 'Valve 56 · F/E battery pit inlet', { vertical: true, s: .55 }); gv('vfp', 1738, 920, 'F/E battery pit outlet valve', { vertical: true, s: .55 });
// pump suction / discharge
gv('v81', 1258, 990, 'Valve 81 · pump 5/17 suction', { s: .5 });
const D1 = 1107, D2 = 1308;                                    // discharge lines of 40/15 and 5/17 (pump flanges, estimated before load)
cv('v84', D1, 770, 'Valve 84 · pump 40/15 discharge', { vertical: true, s: .48 }); cv('v83', D2, 770, 'Valve 83 · pump 5/17 discharge', { vertical: true, s: .48 });
// salinometer / ion-exchange loop, drains, blowing connection, expansion tank
angleValve('v39', 1067, 662, 'Valve 39 · salinometer and ion-exchange supply', [1, 0], [0, 1]);
angleValve('v36', 1015, 955, 'Valve 36 · salinometer', [1, 0], [0, -1]); angleValve('v34', 972, 845, 'Valve 34 · salinometer from ion-exchange filter', [0, 1], [1, 0]);
angleValve('v98', 938, 1110, 'Valve 98 · ion-exchange filter bypass', [0, -1], [1, 0]); angleValve('v91', 1110, 1145, 'Valve 91 · salinometer return', [0, -1], [1, 0]);
cv('v92', 1067, 1190, 'Valve 92 · drain line', { vertical: true, down: true, s: .42 }); angleValve('v89', 1138, 1262, 'Valve 89 · drain', [-1, 0], [0, 1], .4);
angleValve('v47', 1198, 575, 'Valve 47 · blowing connection', [0, -1], [1, 0], .4); angleValve('v53', 1298, 575, 'Valve 53 · for blowing', [-1, 0], [0, 1], .4);
gv('v51', 1272, 610, 'Valve 51 · drain', { vertical: true, s: .38 });
gv('v116', 192, 1106, 'Valve 116 · drain', { vertical: true, s: .34 });
angleValve('v76', 1385, 1045, 'Valve 76 · expansion tank', [0, -1], [-1, 0], .4); angleValve('v77', 1395, 1100, 'Valve 77 · expansion tank top-up', [-1, 0], [0, 1], .4);

for (const p of parts.values()) if (p.face) FACE[p.id] = p.face;

let tankWater = null;
// ---------------------------------------------------------------- equipment
const DIAMONDS = {
  ca: diamond3(1060, UPL, 'cooler', 50, 1.35), cb: diamond3(1280, UPL, 'cooler', 50, 1.35),
  mca: diamond3(222, 830, 'panel', 42), mcb: diamond3(307, 830, 'panel', 42), ecp: diamond3(405, 900, 'panel', 42), ecs: diamond3(512, 900, 'panel', 42),
  hx3: exchanger(745, 975), hxf: exchanger(1568, 950), ix: diamond3(1002, 1110, 'panel', 40)
};
for (const k in DIAMONDS) FACE_OF[k] = { ca: 30, cb: 30, hx3: 34, hxf: 34, ix: 26 }[k] || 40;   // panel diamonds are tall: vertical pipes stop at their tips
{ // expansion tank: glass tank with its water and the level indicator L
  const g = P(1401, 673, PIPE_Y);
  const shell = new T.Mesh(new T.BoxGeometry(58, 50, 125), new T.MeshPhysicalMaterial({ color: '#c9dde2', roughness: .05, transparent: true, opacity: .35, clearcoat: 1, depthWrite: false })); shell.position.copy(g); shell.renderOrder = 6; scene.add(shell);
  tankWater = new T.Mesh(new T.BoxGeometry(54, 40, 72), new T.MeshStandardMaterial({ color: '#4f8fd6', transparent: true, opacity: .55 })); tankWater.position.copy(P(1401, 707, PIPE_Y - 4)); scene.add(tankWater);
  const outline = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(58, 50, 125)), new T.LineBasicMaterial({ color: '#1d2327' })); outline.position.copy(g); scene.add(outline);
  const L = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-5, -7), new T.Vector2(-5, 7), new T.Vector2(6, 0)])), BLACK); L.rotation.x = -Math.PI / 2; L.position.copy(P(1376, 700, PIPE_Y + 26)); scene.add(L);
}
{ // CM salinometer: vertical capsule with its probe
  const cm = new T.Mesh(new T.CapsuleGeometry(17, 52, 8, 24), new T.MeshPhysicalMaterial({ color: '#d7e6ea', roughness: .25, clearcoat: .8 })); cm.rotation.x = Math.PI / 2; cm.position.copy(P(1015, 730, PIPE_Y)); scene.add(cm);
  const ring = new T.Mesh(new T.TorusGeometry(17.5, 1.8, 8, 32), BLACK); ring.position.copy(P(1015, 730, PIPE_Y)); ring.rotation.x = Math.PI / 2; ring.scale.set(1, 2.4, 1); scene.add(ring);
  const probe = new T.Mesh(new T.CylinderGeometry(3, 3, 30, 10), STEM); probe.rotation.x = Math.PI / 2; probe.position.copy(P(1015, 730, PIPE_Y + 18)); scene.add(probe);
}
{ // funnel under drain 116
  const f = new T.Mesh(new T.CylinderGeometry(12, 3, 16, 20, 1, true), new T.MeshStandardMaterial({ color: '#7d8a91', metalness: .5, roughness: .4, side: T.DoubleSide })); f.rotation.x = -Math.PI / 2; f.position.copy(P(192, 1140, PIPE_Y)); scene.add(f);
}

// ---------------------------------------------------------------- pipes (in the direction the water moves)
const RM = 12, RB = 9, RS = 5.5;                              // same bores as screen 2's pipes, so the flow reads the same
const hump = (x) => [[x - 21, LOW], [x - 15, LOW - 20, PIPE_Y + 30], [x, LOW - 28, PIPE_Y + 34], [x + 15, LOW - 20, PIPE_Y + 30], [x + 21, LOW]];   // ⌒ bridging one riser (risers 552 / 600 are close)   // ⌒ as drawn
const under = (x) => [[x - 18, LOW], [x - 8, LOW, PIPE_Y - 28], [x + 8, LOW, PIPE_Y - 28], [x + 18, LOW]];   // ⌒ where the lower line crosses a riser
// supply: pump discharge → lower line → branches
pipe('DH0', 'DH', 'cold', [[1148, 728], [1148, 662]], 'cold', { r: RM });
pipe('DH', 'LJ', 'cold', [[1148, 662], [1148, LOW]], 'cold', { r: RM });
pipe('LJ', 'v41', 'cold', [[1148, LOW], [1108, LOW]], 'cold', { r: RM });
pipe('v41', 'L1', 'cold', [[1108, LOW], [900, LOW]], 'cold', { r: RM });
// where the supply line crosses the E/R and III risers it hops over each one in a flanged ⌒ bridge, as drawn
const hopArc = (x0, x1) => { const c = (x0 + x1) / 2, R = Math.abs(x0 - x1) / 2, pts = []; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10; pts.push([c + R * Math.cos(a) * Math.sign(x0 - x1), LOW - R * 1.1 * Math.sin(a), PIPE_Y + 34 * Math.sin(a)]); } return pts; };
pipe('L1', 'HA', 'cold', [[900, LOW], [624, LOW]], 'cold', { r: RM });
pipe('HA', 'HB', 'cold', hopArc(624, 577), 'cold', { r: RB });
pipe('HB', 'HC', 'cold', hopArc(577, 528), 'cold', { r: RB });
pipe('HC', 'LE', 'cold', [[528, LOW], [457, LOW]], 'cold', { r: RM });
pipe('LE', 'LM', 'cold', [[457, LOW], ...under(357), [265, LOW]], 'cold', { r: RM });
pipe('LJ', 'BW', 'cold', [[1148, LOW], [1198, LOW]], 'cold', { r: RM });
pipe('BW', 'v49', 'cold', [[1198, LOW], [1232, LOW]], 'cold', { r: RM });
pipe('v49', 'LF', 'cold', [[1232, LOW], [1438, LOW]], 'cold', { r: RM });
// M/R panels
pipe('LM', 'MT', 'cold', [[265, LOW], [265, 564]], 'cold', { r: RB });
pipe('MT', 'ma1', 'cold', [[265, 564], [222, 564], [222, 617]], 'cold', { r: RB });
pipe('MT', 'mb1', 'cold', [[265, 564], [307, 564], [307, 617]], 'cold', { r: RB });
pipe('ma1', 'mca', 'cold', [[222, 617], [222, 830]], 'cold', { r: RB });
pipe('mca', 'MA3', 'warm', [[222, 830], [222, 1090]], 'warm', { r: RB });
pipe('MA3', 'ma2', 'warm', [[222, 1090], [222, 1150]], 'warm', { r: RB });
pipe('mb1', 'mcb', 'cold', [[307, 617], [307, 830]], 'cold', { r: RB });
pipe('mcb', 'mb2', 'warm', [[307, 830], [307, 1140]], 'warm', { r: RB });
pipe('ma2', 'MB', 'warm', [[222, 1150], [222, 1207], [265, 1207]], 'warm', { r: RB });
pipe('mb2', 'MB', 'warm', [[307, 1140], [307, 1207], [265, 1207]], 'warm', { r: RB });
pipe('MB', 'UM', 'warm', [[265, 1207], [265, 1247], [357, 1247], [357, UPL]], 'warm', { r: RB });
pipe('MA3', 'v116', 'warm', [[222, 1090], [192, 1090], [192, 1106]], 'warm', { r: RS });
pipe('v116', 'out116', 'warm', [[192, 1106], [192, 1128]], 'warm', { r: RS });
// E/R panels
pipe('LE', 'ET', 'cold', [[457, LOW], [457, 580]], 'cold', { r: RB });
pipe('ET', 'ep1', 'cold', [[457, 580], [405, 580], [405, 660]], 'cold', { r: RB });
pipe('ET', 'es1', 'cold', [[457, 580], [512, 580], [512, 660]], 'cold', { r: RB });
pipe('ep1', 'ecp', 'cold', [[405, 660], [405, 900]], 'cold', { r: RB }); pipe('ecp', 'ep2', 'warm', [[405, 900], [405, 1180]], 'warm', { r: RB });
pipe('es1', 'ecs', 'cold', [[512, 660], [512, 900]], 'cold', { r: RB }); pipe('ecs', 'es2', 'warm', [[512, 900], [512, 1180]], 'warm', { r: RB });
pipe('ep2', 'EB', 'warm', [[405, 1180], [405, 1227], [457, 1227]], 'warm', { r: RB });
pipe('es2', 'EB', 'warm', [[512, 1180], [512, 1227], [457, 1227]], 'warm', { r: RB });
pipe('EB', 'UE', 'warm', [[457, 1227], [457, 1270], [552, 1270], [552, UPL]], 'warm', { r: RB });
// III battery breaker and battery pit
pipe('L1', 'T3', 'cold', [[900, LOW], [900, 712]], 'cold', { r: RB });
pipe('T3', 'b3i', 'cold', [[900, 712], [856, 712], [856, 836]], 'cold', { r: RB });
pipe('b3i', 'hx3', 'cold', [[856, 836], [856, 975], [745, 975]], 'cold', { r: RB });
pipe('hx3', 'b3o', 'warm', [[745, 975], [634, 975], [634, 923]], 'warm', { r: RB });
pipe('b3o', 'J3b', 'warm', [[634, 923], [634, 628], [600, 628]], 'warm', { r: RB });
pipe('T3', 'v17', 'cold', [[900, 712], [900, 800]], 'cold', { r: RB });
pipe('v17', 'P3i', 'cold', [[900, 800], [900, 1243], [850, 1243]], 'cold', { r: RB });
const coil3 = pipe('P3i', 'P3o', 'cold', [[850, 1243], [835, 1243], [835, 1215], [665, 1215], [665, 1243], [650, 1243]], 'cold', { r: RB });
pipe('P3o', 'v26', 'warm', [[650, 1243], [600, 1243], [600, 678]], 'warm', { r: RB });
pipe('v26', 'J3b', 'warm', [[600, 678], [600, 628]], 'warm', { r: RB });
pipe('J3b', 'U3', 'warm', [[600, 628], [600, UPL]], 'warm', { r: RB });
// return (upper) line to the coolers
pipe('UM', 'UE', 'warm', [[357, UPL], [552, UPL]], 'warm', { r: RM });
pipe('UE', 'U3', 'warm', [[552, UPL], [600, UPL]], 'warm', { r: RM });
pipe('U3', 'U4', 'warm', [[600, UPL], [985, UPL]], 'warm', { r: RM });
pipe('U4', 'v35', 'warm', [[985, UPL], [1005, UPL]], 'warm', { r: RM });
pipe('v35', 'ca', 'warm', [[1005, UPL], [1060, UPL]], 'warm', { r: RM });
pipe('ca', 'v40', 'cold', [[1060, UPL], [1110, UPL]], 'cold', { r: RM });
pipe('v40', 'J', 'cold', [[1110, UPL], [1170, UPL]], 'cold', { r: RM });
pipe('U4', 'v46', 'warm', [[985, UPL], [985, 380], [1180, 380]], 'warm', { r: RM });
pipe('v46', 'U5', 'warm', [[1180, 380], [1360, 380], [1360, UPL]], 'warm', { r: RM });
pipe('UF', 'U5', 'warm', [[1697, UPL], [1360, UPL]], 'warm', { r: RM });
pipe('U5', 'v54', 'warm', [[1360, UPL], [1330, UPL]], 'warm', { r: RM });
pipe('v54', 'cb', 'warm', [[1330, UPL], [1280, UPL]], 'warm', { r: RM });
pipe('cb', 'v50', 'cold', [[1280, UPL], [1225, UPL]], 'cold', { r: RM });
pipe('v50', 'J', 'cold', [[1225, UPL], [1170, UPL]], 'cold', { r: RM });
// cooled water down to the pump suction header
pipe('J', 'S77', 'cold', [[1170, UPL], [1170, 661], [1215, 661], [1215, 698], [1365, 698], [1365, 1100]], 'cold', { r: RM });
pipe('S77', 'SUC', 'cold', [[1365, 1100], [1365, 1165], [1158, 1165]], 'cold', { r: RM });
pipe('S77', 'v77', 'cold', [[1365, 1100], [1395, 1100]], 'cold', { r: RS }); pipe('v77', 'out77', 'cold', [[1395, 1100], [1395, 1132]], 'cold', { r: RS });
pipe('SUC', 'SH2', 'cold', [[1158, 1165], [1158, 1145]], 'cold', { r: RM });
pipe('SH2', 'S1', 'cold', [[1158, 1145], [1158, 990]], 'cold', { r: RM });
pipe('S1', 'v81', 'cold', [[1158, 990], [1258, 990]], 'cold', { r: RM });
pipe('v84', 'DH0', 'cold', [[D1, 770], [D1, 728], [1148, 728]], 'cold', { r: RM });
pipe('v83', 'DH0', 'cold', [[D2, 770], [D2, 728], [1148, 728]], 'cold', { r: RM });
// salinometer / ion-exchange side loop back to the suction, and the drain through 92 / 89
pipe('DH', 'v39', 'side', [[1148, 662], [1067, 662]], 'side', { r: RS });
pipe('v39', 'C36', 'side', [[1067, 662], [1067, 955]], 'side', { r: RS });
pipe('C36', 'v36', 'side', [[1067, 955], [1015, 955]], 'side', { r: RS });
pipe('v36', 'CMJ', 'side', [[1015, 955], [1015, 845]], 'side', { r: RS });
pipe('C36', 'C1', 'side', [[1067, 955], [1067, 1028]], 'side', { r: RS });
pipe('C1', 'ix', 'side', [[1067, 1028], [1067, 1110], [1002, 1110]], 'side', { r: RS });
pipe('ix', 'IXo', 'side', [[1002, 1110], [972, 1110]], 'side', { r: RS });
pipe('C1', 'v98', 'side', [[1067, 1028], [938, 1028], [938, 1110]], 'side', { r: RS });
pipe('v98', 'IXo', 'side', [[938, 1110], [972, 1110]], 'side', { r: RS });
const hopV = (x, ya, yb) => Array.from({ length: 11 }, (_, i) => { const a = Math.PI * i / 10, R = Math.abs(ya - yb) / 2; return [x - R * 1.1 * Math.sin(a), (ya + yb) / 2 + (ya - yb) / 2 * Math.cos(a), PIPE_Y + 18 * Math.sin(a)]; });
pipe('IXo', 'v34', 'side', [[972, 1110], ...hopV(972, 1046, 1010), [972, 845]], 'side', { r: RS });   // hops over the 98 line, as drawn
{ const dot = new T.Mesh(new T.SphereGeometry(7, 16, 12), BLACK); dot.position.copy(P(972, 1110, PIPE_Y + 4)); scene.add(dot); }   // the drawing's junction dot
pipe('v34', 'CMJ', 'side', [[972, 845], [1015, 845]], 'side', { r: RS });
pipe('CMJ', 'cm', 'side', [[1015, 845], [1015, 760]], 'side', { r: RS });
pipe('cm', 'v91', 'side', [[1015, 700], [1015, 690], [1045, 690], [1045, 900], [1110, 900], [1110, 1145]], 'side', { r: RS });
pipe('v91', 'SH2', 'side', [[1110, 1145], [1158, 1145]], 'side', { r: RS });
pipe('C1', 'v92', 'side', [[1067, 1028], [1067, 1190]], 'side', { r: RS });
pipe('v92', 'v89', 'side', [[1067, 1190], [1067, 1262], [1138, 1262]], 'side', { r: RS });
pipe('v89', 'out89', 'side', [[1138, 1262], [1138, 1296]], 'side', { r: RS });
// blowing connection 47 / 51 / 53
pipe('BW', 'v47', 'cold', [[1198, LOW], [1198, 575]], 'cold', { r: RS });
pipe('v47', 'BG', 'cold', [[1198, 575], [1228, 575]], 'cold', { r: RS });
pipe('BG', 'BH', 'cold', [[1228, 575], [1272, 575]], 'cold', { r: RS });
pipe('BH', 'v53', 'cold', [[1272, 575], [1298, 575]], 'cold', { r: RS }); pipe('v53', 'out53', 'cold', [[1298, 575], [1298, 606]], 'cold', { r: RS });
pipe('BH', 'v51', 'cold', [[1272, 575], [1272, 610]], 'cold', { r: RS }); pipe('v51', 'out51', 'cold', [[1272, 610], [1272, 640]], 'cold', { r: RS });
// expansion tank connections (always full; not part of the pumped circuit)
for (const pts of [[[1385, 736], [1385, 1045]], [[1385, 1045], [1365, 1045]], [[1365, 1050], [1295, 1050], [1295, 1165]], [[1415, 736], [1415, 1100]], [[1372, 700], [1366, 700]]]) pipe('TK', 'TK', 'tank', pts, 'side', { r: RS }).static = true;
// F/E battery breaker and battery pit
pipe('LF', 'TF', 'cold', [[1438, LOW], [1438, 592]], 'cold', { r: RB });
pipe('TF', 'bfi', 'cold', [[1438, 592], [1476, 592], [1476, 884]], 'cold', { r: RB });
pipe('bfi', 'hxf', 'cold', [[1476, 884], [1476, 950], [1568, 950]], 'cold', { r: RB });
pipe('hxf', 'v60', 'warm', [[1568, 950], [1697, 950], [1697, 815]], 'warm', { r: RB });
pipe('v60', 'JF', 'warm', [[1697, 815], [1697, 729]], 'warm', { r: RB });
pipe('JF', 'UF', 'warm', [[1697, 729], [1697, UPL]], 'warm', { r: RB });
pipe('TF', 'v56', 'cold', [[1438, 592], [1438, 710]], 'cold', { r: RB });
pipe('v56', 'PFi', 'cold', [[1438, 710], [1438, 1370], [1510, 1370]], 'cold', { r: RB });
const coilF = pipe('PFi', 'PFo', 'cold', [[1510, 1370], [1530, 1370], [1530, 1318], [1690, 1318], [1690, 1370], [1712, 1370]], 'cold', { r: RB });
pipe('PFo', 'vfp', 'warm', [[1712, 1370], [1738, 1370], [1738, 920]], 'warm', { r: RB });
pipe('vfp', 'JF', 'warm', [[1738, 920], [1738, 729], [1697, 729]], 'warm', { r: RB });
// each cell on its cooling coil by a clear hose, as the cells are piped on screens 1 and 2
for (const c of batteries) {
  const coil = c.pit === 'III' ? coil3 : coilF, yc = c.pit === 'III' ? 1215 : 1318, N = c.nip, S = P(WXinv(N.x), yc, PIPE_Y);
  const h = pipe('coil', 'cell', 'cold', null, 'cold', { r: 3.4, curve: new T.CatmullRomCurve3([S, S.clone().add(new T.Vector3(0, 20, 8)), S.clone().lerp(N, .5).add(new T.Vector3(0, 30, 0)), N.clone().addScaledVector(c.up, 30), N.clone().addScaledVector(c.up, 4), N.clone()]) });
  h.follow = coil;
}
// pumps last: their suction and discharge pipes run to the model's own flanges
pump('p1', 1140, 860, true, 'Pump 40/15', ([sx, sy, sh], [dx, dy, dh]) => {
  pipe('S1', 'p1', 'cold', [[1158, 990], [1060, 990], [1060, sy], [sx - 2, sy, sh]], 'cold', { r: RM });
  pipe('p1', 'v84', 'cold', [[dx, dy, dh], [dx, dy - 14, PIPE_Y], [D1, 790], [D1, 770]], 'cold', { r: RM });
});
pump('p2', 1275, 860, false, 'Pump 5/17', ([sx, sy, sh], [dx, dy, dh]) => {
  pipe('v81', 'p2', 'cold', [[1258, 990], [1345, 990], [1345, sy], [sx + 2, sy, sh]], 'cold', { r: RM });
  pipe('p2', 'v83', 'cold', [[dx, dy, dh], [dx, dy - 14, PIPE_Y], [D2, 790], [D2, 770]], 'cold', { r: RM });
});

// ---------------------------------------------------------------- instruments (schematic positions)
for (const [x, y, side] of [[222, 920, 1], [307, 925, -1], [405, 1000, 1], [512, 1000, -1], [600, 1125, 1], [1738, 1160, -1], [1148, 615, -1]]) sensor(x, y, side);
sensor(1148, 705, -1, 'P');
for (const [x, y, v, r] of FLEXES) flex(x, y, v, r);
gauge([[222, 735], [185, 735], [185, 700]], [185, 655], 'ma1'); gauge([[222, 1040], [185, 1040], [185, 1015]], [185, 975], 'mca');
gauge([[307, 740], [265, 740], [265, 700]], [265, 655], 'mb1'); gauge([[307, 1098], [265, 1098], [265, 1058]], [265, 1012], 'mcb');
gauge([[405, 860], [437, 860], [437, 830]], [437, 790], 'ep1'); gauge([[405, 1020], [440, 1020], [440, 1075]], [440, 1110], 'ecp');
gauge([[512, 790], [480, 790], [480, 760]], [480, 718], 'es1'); gauge([[512, 1100], [478, 1100], [478, 1082]], [478, 1050], 'ecs');
gauge([[722, 905], [722, 880], [710, 880]], [683, 880], 'b3i'); gauge([[768, 905], [768, 880], [790, 880]], [825, 880], 'b3i');
gauge([[722, 1045], [722, 1060], [700, 1060]], [668, 1060], 'hx3'); gauge([[768, 1045], [768, 1060], [800, 1060]], [835, 1060], 'hx3');
gauge([[1545, 880], [1545, 862], [1525, 862]], [1500, 862], 'bfi'); gauge([[1591, 880], [1591, 862], [1612, 862]], [1638, 862], 'bfi');
gauge([[1545, 1020], [1545, 1045], [1525, 1045]], [1495, 1045], 'hxf'); gauge([[1591, 1020], [1591, 1045], [1615, 1045]], [1648, 1045], 'hxf');
gauge([[D1, 800], [1128, 800], [1128, 830]], [1090, 830], 'v84', 'PG'); gauge([[D2, 820], [1310, 820], [1310, 860]], [1335, 905], 'v83');
gauge([[1228, 575], [1228, 600]], [1228, 628], 'v47'); gauge([[1033, 1112], [1033, 1180]], [1036, 1232], 'ix', 'PG '); gauge([[972, 1112], [972, 1180]], [968, 1232], 'ix', 'PG ');   // both from the filter's inlet / outlet, as drawn (compact value tags)   // both from the filter's inlet / outlet, as drawn

const ARROW_MAT = new T.MeshBasicMaterial({ color: '#0f3550', toneMapped: false });
function darrow(x, y, dir) { const m = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-9, -12), new T.Vector2(6, 0), new T.Vector2(-9, 12), new T.Vector2(-4, 0)])), ARROW_MAT);
  m.rotation.order = 'YXZ'; m.rotation.set(-Math.PI / 2, { r: 0, l: Math.PI, u: Math.PI / 2, d: -Math.PI / 2 }[dir], 0); m.position.copy(P(x, y, PIPE_Y + 18)); m.renderOrder = 9; scene.add(m); }
for (const [x, y, d] of [[700, UPL, 'r'], [715, LOW, 'l'], [1550, UPL, 'l'], [1405, LOW, 'r'], [600, 1185, 'u'], [634, 780, 'u'], [900, 950, 'd'], [856, 760, 'd'], [1170, 490, 'd'], [1148, 590, 'u'],
  [1438, 930, 'd'], [1476, 730, 'd'], [1045, 800, 'd'], [972, 940, 'u'], [1015, 800, 'u'], [1030, 1028, 'r'], [1045, 1110, 'l'], [1415, 1060, 'd'], [1697, 600, 'u'], [1738, 1100, 'u']]) darrow(x, y, d);
{ const f = new T.LineLoop(new T.BufferGeometry().setFromPoints([P(140, 338, -18), P(1792, 338, -18), P(1792, 1478, -18), P(140, 1478, -18)]), new T.LineBasicMaterial({ color: '#2d4f66' })); scene.add(f); }
// ---------------------------------------------------------------- state and the water network
const valveIds = [...parts.values()].filter(p => p.type === 'valve').map(p => p.id);
const initial = () => ({ running: false, open: Object.fromEntries(valveIds.map(k => [k, false])), on: { p1: false, p2: false }, set: { p1: 1, p2: 1 } });
const S = initial();
const isOn = p => p.type === 'valve' ? S.open[p.key] : S.on[p.key];
const stateWord = p => p.type === 'pump' ? (S.on[p.key] ? 'RUNNING' : 'STOPPED') : isOn(p) ? 'OPEN' : 'CLOSED';
const isSink = n => n.startsWith('out');                                              // open drain ends
const passes = n => n in S.open ? S.open[n] : PUMPS.has(n) ? S.on[n] && parts.get(n).speed > .05 : true;
// water leaves each running pump, fills every pipe it can reach through open valves, and flows where it can get back to
// a running pump's suction (or out of an open drain); elsewhere it stands still against the closed valve.
function solve() {
  const got = new Set([...PUMPS].filter(passes)), back = new Set([...PUMPS].filter(passes));
  for (const p of pipes) p.reached = false;
  for (let changed = true; changed;) { changed = false; for (const p of pipes) if (!p.reached && !p.static && got.has(p.from) && passes(p.from)) { p.reached = true; changed = true; got.add(p.to); } }
  for (let changed = true; changed;) { changed = false; for (const p of pipes) if (!back.has(p.from) && (back.has(p.to) || isSink(p.to)) && (passes(p.to) || isSink(p.to))) { back.add(p.from); changed = true; } }
  for (const p of pipes) {
    if (p.follow) { p.reached = p.follow.reached; p.flow = p.follow.flow; continue; }
    if (p.static) { p.reached = S.running; p.flow = false; continue; }
    p.flow = p.reached && (back.has(p.to) || isSink(p.to)) && (passes(p.to) || isSink(p.to));
  }
}
const pipeInto = to => pipes.filter(p => p.to === to);
const flowsAt = n => pipes.some(p => (p.from === n || p.to === n) && p.flow);
// drains: water spray out of every open drain that has water behind it
const DRAINS = [['out116', 192, 1128], ['out89', 1138, 1296], ['out53', 1298, 606], ['out51', 1272, 640]];
for (const [n, x, y] of DRAINS) plume(x, y, 0, 1, () => pipeInto(n).some(p => p.flow) ? 400 : 0);

// Client: same interface as circuits 1 and 2 (navy header, subtitle, pill tabs, green Start / amber Pause)
{ const st = document.createElement('style'); st.textContent = `
header{background:linear-gradient(90deg,#0d2536 0%,#14405a 55%,#1b5574 100%)!important;border-bottom:0!important;box-shadow:0 4px 18px #0b2a3d40;position:relative;z-index:30}
header .header-title{color:#fff!important;text-shadow:0 2px 8px #0008;line-height:1.1!important}
header .header-title::after{content:'INS SATHAVAHANA · CIRCUIT 3';display:block;font:700 clamp(9px,.62vw,16px)/1.9 Arial,sans-serif;letter-spacing:.28em;color:#8fc8e8;text-align:center;text-shadow:none}
header .screens a{background:#ffffff14!important;border-color:#ffffff38!important;color:#d6e8f3!important}
header .screens a[aria-current=page]{background:#fff!important;border-color:#fff!important;color:#0f2a3d!important}
header #start{background:linear-gradient(180deg,#2bd06a,#16a34a)!important;border:0!important;color:#fff!important;border-radius:12px!important;font-weight:800!important}
header #start[aria-pressed="true"]{background:linear-gradient(180deg,#f5b544,#d98a14)!important}
header #reset{background:#ffffff14!important;border:1px solid #ffffff38!important;color:#e6f1f8!important;border-radius:12px!important;font-weight:700}
@media(max-width:1399px){header .header-title{display:none!important}}`; document.head.append(st); }
{ const st = document.createElement('style'); st.textContent = `#circuit{overflow-x:auto!important;overflow-y:hidden!important;touch-action:pan-x!important;scrollbar-width:thin;scrollbar-color:#1d4f6e #dcebf4}
#circuit::-webkit-scrollbar{height:12px}#circuit::-webkit-scrollbar-thumb{background:#1d4f6e;border-radius:6px}#circuit::-webkit-scrollbar-track{background:#dcebf4}
#viewport{inset:0 auto 0 0!important;height:100%}#labels{inset:0 auto 0 0!important}
#next-step,#vent-warning{position:fixed!important}#vent-warning{top:120px!important}`; document.head.append(st); }
{ let drag = null;                                                // mouse: drag the background or turn the wheel to scroll sideways
  /* drag-to-scroll at 100% is handled by the zoom control (baseDrag) */
  addEventListener('pointermove', e => { if (drag) circuit.scrollLeft = drag.s - (e.clientX - drag.x); });
  addEventListener('pointerup', () => { drag = null; });
  circuit.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { circuit.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false }); }
// ---------------------------------------------------------------- DOM overlay: touch areas, banners
{
  const st = document.createElement('style');
  st.textContent = `#vent-warning{position:absolute;left:50%;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center;background:#1d2224ee;top:18px;border:1.5px solid #e74c3c;color:#ff5a4d;opacity:0}#vent-warning.info{border-color:#22b45a;color:#bff5cf}
.vinfo{position:absolute;transform:translate(-50%,-50%);width:44px;height:44px;border:0;background:transparent;pointer-events:auto;padding:0;cursor:pointer}
.vinfo span{display:block;margin:auto;width:24px;height:24px;border-radius:50%;border:2px solid #1f3a33;color:#1f3a33;font:700 15px/20px Georgia,serif;text-align:center;background:#ffffffd9}`;
  document.head.append(st);
}
for (const p of parts.values()) {
  const b = document.createElement('button'); b.className = 'part-button'; b.setAttribute('aria-label', p.title); b.dataset.part = p.id;
  b.addEventListener('click', () => tap(p.id)); labelsRoot.append(b); p.button = b;
}
// next-step guide: the water only moves while a pump runs, so the screen says what to do next until it does
const guideEl = document.createElement('div'); guideEl.id = 'next-step'; guideEl.setAttribute('role', 'status'); circuit.append(guideEl);
{ const st = document.createElement('style'); st.textContent = '#next-step{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);z-index:19;max-width:92%;padding:12px 20px;border-radius:12px;background:#1f3a33ee;color:#fff;font:700 clamp(14px,1.1vw,30px)/1.35 system-ui;text-align:center;box-shadow:0 6px 24px #0005;pointer-events:none}#next-step.ok{background:#1f6f4aee}#next-step:empty{display:none}'; document.head.append(st); }
function guide() {
  let t = '', ok = false, next = [];
  const shut = ids => ids.filter(k => !o(k));
  if (!S.running) t = '▶ Press Start to switch the cooling circuit on.';
  else if (!coolerPath() && (next = shut(o('v54') || o('v50') ? ['v54', 'v50'] : ['v35', 'v40']))) t = 'Step 1 · Open a cooler: valves 35 and 40 (or 54 and 50) on the top line.';
  else if (!o('v41') && !o('v49') && (next = ['v41'])) t = 'Step 2 · Open supply valve 41 (to III, E/R, M/R) or 49 (to F/E).';
  else if (!o('v84') && !(o('v83') && o('v81')) && (next = ['v84'])) t = 'Step 3 · Open pump discharge valve 84 (above pump 40/15).';
  else if (!S.on.p1 && !S.on.p2 && (next = [o('v84') ? 'p1' : 'p2'])) t = 'Step 4 · Tap pump ' + (o('v84') ? '40/15' : '5/17') + ' to start it — the water starts flowing.';
  else if (!pipes.some(p => p.flow && /^(ma|mb|ep|es|b3|v17|bf|v56)/.test(p.to)) && (next = shut(['ma1', 'ma2']))) t = 'Pump running · Open the branch valves (M/R, E/R, III, F/E) to send cooling water to them.';
  else { t = '✓ Water is flowing — dark blue shows where it travels; coolers turn green.'; ok = true; }
  if (guideEl.textContent !== t) guideEl.textContent = t;
  guideEl.classList.toggle('ok', ok);
  for (const p of parts.values()) p.button.classList.toggle('next', next.includes(p.id));
}
const NUM = id => /^v\d+$/.test(id) ? id.slice(1) : { p1: '40/15', p2: '5/17' }[id] || '';
// which side of its valve each number tag sits on (u/d/l/r and corners); default upper right
const TAG_SIDE = { v92: 'r', v91: 'l', v89: 'r', v98: 'ul', v34: 'r', v36: 'r', v39: 'ur', v76: 'l', v77: 'r', v81: 'dr', v83: 'r', v84: 'r', v17: 'r', v26: 'r', v56: 'r', v60: 'r', v47: 'l', v51: 'r', v53: 'ur', v116: 'l', v41: 'u', v49: 'u', v35: 'u', v40: 'u', v50: 'u', v54: 'u', v46: 'r' };
const numEls = [...parts.values()].filter(p => NUM(p.id)).map(p => { const e = document.createElement('div'); e.className = 'vnum' + (p.type === 'pump' ? ' pump' : ''); e.textContent = NUM(p.id); labelsRoot.append(e); return { p, e }; });
const runEls = ['p1', 'p2'].map(id => { const e = document.createElement('div'); e.className = 'vrun'; labelsRoot.append(e); return { p: parts.get(id), e }; });
{ const st = document.createElement('style'); st.textContent = `.vnum{position:absolute;transform:translate(-50%,-50%);font:800 var(--num,13px)/1 Arial,sans-serif;color:#123a52;background:#ffffffee;border:1px solid #cfdde7;border-left:.28em solid #1f7fbf;border-radius:.45em;padding:.2em .42em .2em .36em;box-shadow:0 .15em .5em #12405e22;pointer-events:none;white-space:nowrap}
.vnum.pump{font-size:calc(var(--num,13px)*1.15)}
#labels .vnum:not(.pump){transform:translate(0,-100%)}
#labels .vnum[data-side=ul]{transform:translate(-100%,-100%)}#labels .vnum[data-side=l]{transform:translate(-100%,-50%)}#labels .vnum[data-side=r]{transform:translate(0,-50%)}
#labels .vnum[data-side=u]{transform:translate(-50%,-100%)}#labels .vnum[data-side=d]{transform:translate(-50%,0)}#labels .vnum[data-side=dr]{transform:translate(0,0)}#labels .vnum[data-side=dl]{transform:translate(-100%,0)}
#labels .vnum:not(.pump)::after{content:'';position:absolute;width:.55em;height:2px;background:#1f7fbf;left:-.5em;bottom:-.1em;transform:rotate(-35deg);transform-origin:right}
#labels .vnum[data-side=ul]::after{left:auto;right:-.5em;transform:rotate(35deg);transform-origin:left}
#labels .vnum[data-side=r]::after{bottom:auto;top:50%;transform:none}#labels .vnum[data-side=l]::after{left:auto;right:-.5em;bottom:auto;top:50%;transform:none}
#labels .vnum[data-side=u]::after{left:50%;bottom:-.5em;width:2px;height:.5em;transform:none}#labels .vnum[data-side=d]::after{left:50%;bottom:auto;top:-.5em;width:2px;height:.5em;transform:none}
#labels .vnum[data-side=dr]::after{bottom:auto;top:-.1em;transform:rotate(35deg)}#labels .vnum[data-side=dl]::after{left:auto;right:-.5em;bottom:auto;top:-.1em;transform:rotate(-35deg);transform-origin:left}
.vrun{position:absolute;transform:translate(-50%,-50%);padding:.25em .7em;border-radius:999px;font:800 calc(var(--num,13px)*.85)/1.2 Arial,sans-serif;pointer-events:none;white-space:nowrap;background:#5d6b72;color:#fff}
.vrun.on{background:#1f9e5a;box-shadow:0 0 0 3px #1f9e5a55}
#labels .part-button.next::after{content:'';position:absolute;inset:-10px;border-radius:50%;border:4px solid #f5a623;animation:nextPulse 1.1s ease-in-out infinite;pointer-events:none}
@keyframes nextPulse{0%,100%{transform:scale(.85);opacity:.95}50%{transform:scale(1.15);opacity:.35}}`; document.head.append(st); }
const warnEl = document.createElement('div'); warnEl.id = 'vent-warning'; warnEl.setAttribute('role', 'alert'); circuit.append(warnEl);
let warnTimer = 0;
function notify(msg, info = false) { warnEl.textContent = msg; warnEl.className = info ? 'info' : ''; warnEl.style.opacity = '1'; clearTimeout(warnTimer); warnTimer = setTimeout(() => { warnEl.style.opacity = '0'; }, info ? 2200 : 4000); }
const warn = msg => notify(msg);

// ---------------------------------------------------------------- operating rules
const o = k => S.open[k];
const coolerPath = () => (o('v35') && o('v40')) || (o('v54') && o('v50'));
function missingFor(k) {
  const m = [];
  if (k === 'p1' && !o('v84')) m.push('84'); if (k === 'p2' && !o('v83')) m.push('83'); if (k === 'p2' && !o('v81')) m.push('81');
  if (!coolerPath()) m.push('a cooler (35 and 40, or 54 and 50)');
  if (!o('v41') && !o('v49')) m.push('41 or 49');
  return m;
}
function closeBlocker(p) {
  const k = p.key, run = S.on.p1 || S.on.p2;
  if (k === 'v84' && S.on.p1) return 'Stop pump 40/15 before closing 84.';
  if ((k === 'v83' || k === 'v81') && S.on.p2) return 'Stop pump 5/17 before closing ' + k.slice(1) + '.';
  if (run && ['v35', 'v40', 'v54', 'v50'].includes(k)) { S.open[k] = false; const ok = coolerPath(); S.open[k] = true; if (!ok) return 'Stop the pump before closing the last cooler path.'; }
  if (run && (k === 'v41' && !o('v49') || k === 'v49' && !o('v41'))) return 'Stop the pump before closing ' + k.slice(1) + ' — it is the only supply.';
  return '';
}
const tapAt = {};
function tap(id) {
  const now = performance.now(); if (now - (tapAt[id] ?? -1e9) < 450) return; tapAt[id] = now;
  const p = parts.get(id);
  if (!S.running) { warn('⚠ Circuit is OFF — press Start first.'); return; }
  if (p.type === 'valve') {
    if (S.open[id]) { const b = closeBlocker(p); if (b) { warn('⚠ ' + b); return; } }
    S.open[id] = !S.open[id]; p.wheelTarget = S.open[id] ? p.openAngle : p.closedAngle;
  } else if (p.type === 'pump') {
    if (!S.on[id]) {
      const m = missingFor(id); if (m.length) { warn('⚠ ' + p.title + ' cannot start — open ' + m.join(', ') + ' first.'); return; }
      const other = id === 'p1' ? 'p2' : 'p1'; if (S.on[other]) { warn('⚠ ' + parts.get(other).title + ' is running — one pump at a time; stop it first.'); return; }
    }
    S.on[id] = !S.on[id];
  }
  notify(p.title + ' · ' + stateWord(p), true);
}
// i on the major parts: the pump viewer (Blender model) for each pump, the battery cell view for each pit
const pumpView = (id, title) => openBlowerDetail({
  kind: 'pump', title, flow: () => S.on[id] ? 42 * parts.get(id).speed : 0, speed: () => parts.get(id).speed, running: () => S.on[id], setPoint: () => S.set[id], setSpeed: v => { S.set[id] = v; },
  toggle: () => { const before = S.on[id]; tapAt[id] = -1e9; tap(id); return S.on[id] === before ? warnEl.textContent : ''; }
});
const SPOTS = [
  ['p1', 1192, 805, () => pumpView('p1', 'Pump 40/15')], ['p2', 1335, 805, () => pumpView('p2', 'Pump 5/17')],
  ['b3', 843, 1190, () => openBatteryDetail({ side: 'port', pressure: .145, title: 'Battery cell · III battery pit (water cooled)' })],
  ['bf', 1492, 1300, () => openBatteryDetail({ side: 'stbd', pressure: .145, title: 'Battery cell · F/E battery pit (water cooled)' })]
].map(([id, x, y, open]) => { const b = document.createElement('button'); b.className = 'vinfo'; b.setAttribute('aria-label', id + ' details'); b.innerHTML = '<span>i</span>'; b.addEventListener('click', open); labelsRoot.append(b); return { id, x, y, button: b }; });
const startBtn = document.querySelector('#start'), resetBtn = document.querySelector('#reset');
function allOff() { for (const k in S.open) S.open[k] = false; for (const k in S.on) S.on[k] = false; for (const p of parts.values()) if (p.wheel) p.wheelTarget = p.closedAngle; }
function showRunState() { startBtn.innerHTML = S.running ? '<span>Ⅱ</span> Pause' : '<span>▶</span> Start'; startBtn.setAttribute('aria-pressed', String(S.running)); }
startBtn.addEventListener('click', () => { S.running = !S.running; if (!S.running) allOff(); showRunState(); });     // Pause: everything closes and stops, as on screens 1 and 2
resetBtn?.addEventListener('click', () => { S.running = false; allOff(); INST.sal = INST_START.sal; INST.lvl = INST_START.lvl; showRunState(); notify('Circuit reset — all valves closed, pumps stopped.', true); });
showRunState();

// ---------------------------------------------------------------- the drawing's own text (client: match the sheet)
const DTEXT = [
  ['M/R', 280, 372, 'zone'], ['E/R', 495, 372, 'zone'], ['III', 740, 372, 'zone'], ['C/R', 945, 372, 'zone'], ['F/E', 1580, 372, 'zone'],
  ['Main motor panel', 180, 792, 'rot'], ['Grouper switch', 334, 760, 'rot'], ['Port', 432, 905, 'rot'], ['Stbd', 485, 905, 'rot'],
  ['Battery Breaker', 745, 800, 'big'], ['Battery Breaker', 1580, 1132, 'big'], ['Battery Pit', 760, 1158, 'big'], ['Battery Pit', 1610, 1252, 'big'],
  ['Cooler', 1060, 502, ''], ['Cooler', 1300, 502, ''], ['Expansion tank', 1401, 590, ''], ['For blowing', 1342, 624, ''],
  ['Ion-Exchange filter', 1002, 1236, 'rot'], ['90', 1101, 1290, 'b'], ['86', 1185, 1065, 'b'],
  ['t = thermocouple<br>P = pressure sensor<br>CM = salinometer<br>M = motor', 1262, 1325, 'legend']
].map(([t, x, y, k]) => { const e = document.createElement('div'); e.className = 'dtext ' + k; e.innerHTML = t; labelsRoot.append(e); return { e, x, y }; });
{ const st = document.createElement('style'); st.textContent = `.dtext{position:absolute;transform:translate(-50%,-50%);pointer-events:none;white-space:nowrap;text-align:center;font:700 calc(var(--num,13px)*.95)/1.2 Arial,sans-serif;color:#123a52;background:#ffffffee;border:1px solid #cfdde7;border-left:.28em solid #1f7fbf;border-radius:.55em;padding:.28em .65em .32em;box-shadow:0 .25em .7em #12405e22}
.dtext.rot{transform:translate(-50%,-50%) rotate(-90deg)}
.dtext.big{font-size:calc(var(--num,13px)*1.08);letter-spacing:.02em}
.dtext.b{font:800 calc(var(--num,13px)*.95)/1 Arial,sans-serif;padding:.2em .42em .2em .36em;border-radius:.45em}
.dtext.zone{font:700 calc(var(--num,13px)*1.05)/1 Arial,sans-serif;letter-spacing:.12em;color:#fff;background:#1d4f6e;border-radius:999px;padding:.35em 1em;text-shadow:none}
.dtext.legend{width:max-content;font:400 calc(var(--num,13px)*.9)/1.55 Arial,sans-serif;text-align:left;border-left-color:#8aa0ad;padding:.6em .9em}`; document.head.append(st); }
for (const g of gauges) { const e = document.createElement('div'); e.className = 'gval' + (g.tag.endsWith(' ') ? ' compact' : ''); e.innerHTML = '<span>PG</span><small><b>0.00</b></small>'; /* as circuit 1: name and value (unit is on the dial) */ labelsRoot.append(e); g.chip = e; }
{ const st = document.createElement('style'); st.textContent = `.gval{position:absolute;transform:translate(-50%,0);pointer-events:none;white-space:nowrap;text-align:center;font:700 calc(var(--num,13px)*.9)/1.15 Arial,sans-serif;color:#123a52;background:#ffffffec;border:1px solid #cfdde7;border-left:.28em solid #1f7fbf;border-radius:.55em;padding:.25em .55em .3em;box-shadow:0 .25em .7em #12405e22}
.gval span{display:block}.gval small{display:block;font-size:.92em;color:#8aa0ad;margin-top:.1em}.gval.live small{color:#1f7a70}.gval.compact small{font-size:.75em}
#next-step{background:linear-gradient(90deg,#0d2536,#1b5574)!important;border:1px solid #ffffff30}#next-step.ok{background:linear-gradient(90deg,#0f5b3a,#16a34a)!important}
.vinfo span{border-color:#1d4f6e!important;color:#1d4f6e!important;background:#fff!important;box-shadow:0 .1em .4em #12405e33}`; document.head.append(st); }
// ---------------------------------------------------------------- live instruments (client: P, CM and the tank level respond)
// P: pump discharge pressure (higher against a closed circuit, lower with drains open); CM: salinity of the cooling water,
// creeping up while it circulates and falling while it passes the ion-exchange filter; L: expansion-tank level, falling
// slowly with circulation and quickly through open drains, topped up through 77.
const INST_START = { sal: 13.6, lvl: 72 }, INST = { P: 0, sal: INST_START.sal, lvl: INST_START.lvl, al: {} };
const instChip = (label, x, y, unit) => { const e = document.createElement('div'); e.className = 'gval inst'; e.innerHTML = '<span>' + label + '</span><small><b>0</b> ' + unit + '</small>'; labelsRoot.append(e); return { e, x, y }; };
const INST_EL = { P: instChip('P', 1098, 692, 'kg/cm²'), CM: instChip('CM', 974, 712, 'ppm'), L: instChip('L', 1401, 676, '%') };   // the drawing's own P / CM / L letters carry the live reading
{ const st = document.createElement('style'); st.textContent = `.gval.inst small{color:#1f7a70}.gval.inst.warn{border-left-color:#e8a21a}.gval.inst.warn small{color:#a86a00}
.gval.inst.alarm{border-left-color:#e8a21a;animation:instAlarm 1s ease-in-out infinite}.gval.inst.alarm small{color:#a86a00}
@keyframes instAlarm{50%{box-shadow:0 0 0 .3em #e8a21a55}}`; document.head.append(st); }
function instAlarm(k, on, msg) { if (on && !INST.al[k]) warn('⚠ ' + msg); INST.al[k] = on; }
function instruments(dt, spd) {
  const anyFlow = pipes.some(p => p.flow), drains = ['v89', 'v51', 'v53', 'v116'].filter(k => S.open[k]).length, pumping = (S.on.p1 || S.on.p2) && spd > .05;
  const wantP = pumping ? Math.max(0, 3.2 * spd * (anyFlow ? 1 : 1.12) - .55 * drains) : 0;
  INST.P += (wantP - INST.P) * Math.min(1, dt * 2.5); if (INST.P < .005) INST.P = 0;
  const ionFlow = pipes.some(p => p.flow && (p.to === 'ix' || p.from === 'ix'));
  if (anyFlow) INST.sal += (ionFlow ? -.22 : .015) * dt; INST.sal = Math.min(25, Math.max(2, INST.sal));
  if (S.running) INST.lvl += ((anyFlow ? -.04 : 0) - (pumping ? .7 * drains : 0) + (S.open.v77 ? 2.5 : 0)) * dt; INST.lvl = Math.min(100, Math.max(0, INST.lvl));
  const lowP = pumping && spd > .9 && INST.P < 2.2, salHi = INST.sal > 15, lvlLo = INST.lvl < 30;
  instAlarm('P', lowP, 'Low pressure at P (' + INST.P.toFixed(2) + ' kg/cm²) — close the open drains (89, 51, 53, 116).');
  instAlarm('CM', salHi, 'Salinity high (' + INST.sal.toFixed(1) + ' ppm) — open 39, 34 and 91 to pass the water through the ion-exchange filter.');
  instAlarm('L', lvlLo, 'Expansion tank level low (' + Math.round(INST.lvl) + '%) — open 77 to top up.');
  const set = (el, v, cls) => { const b = el.e.querySelector('b'); if (b.textContent !== v) b.textContent = v; el.e.classList.toggle('warn', cls === 'warn'); el.e.classList.toggle('alarm', cls === 'alarm'); };
  set(INST_EL.P, INST.P.toFixed(2), lowP ? 'alarm' : '');
  set(INST_EL.CM, INST.sal.toFixed(1), salHi ? 'alarm' : INST.sal > 10 ? 'warn' : '');
  set(INST_EL.L, String(Math.round(INST.lvl)), lvlLo ? 'alarm' : INST.lvl < 45 ? 'warn' : '');
  if (tankWater) { const depth = Math.max(1, 115 * INST.lvl / 100); tankWater.scale.z = depth / 72; tankWater.position.z = P(1401, 731 - depth / 2).z; }
}
// ---------------------------------------------------------------- live temperatures on the drawing's t thermocouples
// Cooled water leaves the coolers at ~26 °C (35 °C if no cooler path is open); each panel / battery pit warms the water
// a few degrees while its branch flows, and heats up toward its idle temperature when its water is shut off.
const TSENS = [
  ['Main motor panel', 252, 893, () => flowsAt('mca'), 8, 52], ['Grouper switch', 334, 930, () => flowsAt('mcb'), 7, 50],
  ['Port panel', 435, 985, () => flowsAt('ecp'), 8, 52], ['Stbd panel', 533, 1000, () => flowsAt('ecs'), 8, 52],
  ['III battery pit', 630, 1125, () => coil3.flow, 6, 48], ['F/E battery pit', 1708, 1160, () => coilF.flow, 6, 48],
  ['Cooled water (pump discharge)', 1118, 615, null, 0, 0]
].map(([name, x, y, flow, rise, hot]) => { const e = document.createElement('div'); e.className = 'dtext tval'; e.innerHTML = 't<small>30 °C</small>'; labelsRoot.append(e); return { name, x, y, flow, rise, hot, e, T: 30 }; });
{ const st = document.createElement('style'); st.textContent = `.dtext.tval{font:700 calc(var(--num,13px)*1.2)/1 'Times New Roman',serif;line-height:1;background:none;border:0;box-shadow:none;padding:0;color:#15191c}.dtext.tval small{display:block;margin-top:.15em;font:800 calc(var(--num,13px)*.85)/1.1 Arial,sans-serif;color:#1f7a70;background:#ffffffe6;border:1px solid #cfdde7;border-radius:.4em;padding:.12em .3em}
.dtext.tval.warn small{color:#a86a00;border-color:#e8a21a}.dtext.tval.alarm small{color:#fff;background:#e08a12;border-color:#e08a12;animation:instAlarm 1s ease-in-out infinite}`; document.head.append(st); }
const supplyTemp = () => !S.running ? 30 : coolerPath() && pipes.some(p => p.flow) ? 26 : 35;
function temps(dt) {
  const anyFlow = pipes.some(p => p.flow), sup = supplyTemp();
  for (const t of TSENS) {
    const want = !S.running ? 30 : !t.flow ? (anyFlow ? sup : 30) : t.flow() ? sup + t.rise : t.hot;
    t.T += (want - t.T) * Math.min(1, dt * .12);
    const hot = t.T > 45, warm = t.T > 40, v = t.T.toFixed(0) + ' °C', sm = t.e.querySelector('small');
    if (sm.textContent !== v) sm.textContent = v; t.e.classList.toggle('alarm', hot); t.e.classList.toggle('warn', warm && !hot);
    instAlarm('T' + t.name, hot && !!t.flow, 'High temperature at ' + t.name + ' (' + t.T.toFixed(0) + ' °C) — open its cooling-water valves.');
  }
}
// ---------------------------------------------------------------- info cards (as on screen 2), refreshed live while open
{ const st = document.createElement('style'); st.textContent = `.vinfo-card{position:fixed;inset:0;background:#0b2a3d55;display:grid;place-items:center;z-index:50}
.vinfo-card>div{width:min(480px,92vw);background:#fff;border-radius:16px;padding:20px 22px;font:15px/1.5 Arial,sans-serif;color:#173f57;box-shadow:0 20px 60px #0008}
.vinfo-card h2{margin:0 0 6px;font-size:20px}.vinfo-card p{margin:6px 0;color:#3f5f72}.vinfo-card dl{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:12px 0}.vinfo-card dt{color:#5a7586}.vinfo-card dd{margin:0;font-weight:700;text-align:right}
.vinfo-card button{margin-top:8px;width:100%;height:46px;border-radius:10px;border:0;background:#1d4f6e;color:#fff;font:700 15px Arial}
.gval.inst{pointer-events:auto;cursor:pointer}`; document.head.append(st); }
function infoCard(title, text, rows) {
  const w = document.createElement('div'); w.className = 'vinfo-card'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', title);
  const dl = () => '<dl>' + rows().map(([a, b]) => '<dt>' + a + '</dt><dd>' + b + '</dd>').join('') + '</dl>';
  w.innerHTML = '<div><h2>' + title + '</h2><p>' + text + '</p>' + dl() + '<button type="button">Close</button></div>'; document.body.append(w);
  const t = setInterval(() => { const d = w.querySelector('dl'); if (d) d.outerHTML = dl(); }, 400);
  w.addEventListener('click', e => { if (e.target === w || e.target.tagName === 'BUTTON') { clearInterval(t); w.remove(); } });
}
const OC = k => S.open[k] ? 'OPEN' : 'CLOSED', tOf = name => TSENS.find(t => t.name === name).T.toFixed(0) + ' °C', flowing = n => flowsAt(n) ? 'Flowing' : 'No flow';
const coolerCard = (n, a, b, key) => () => infoCard('Cooler ' + n, 'Sea-water cooled heat exchanger on the warm return line. Water coming back from the panels and battery pits gives up its heat here before the pumps send it out again. Valve 46 bypasses both coolers.', () => [
  ['Inlet valve ' + a.slice(1), OC(a)], ['Outlet valve ' + b.slice(1), OC(b)], ['Bypass 46', OC('v46')], ['Water', flowing(key)],
  ['Water in (warm)', (supplyTemp() + (flowsAt(key) ? 7 : 0)).toFixed(0) + ' °C'], ['Water out (cooled)', supplyTemp().toFixed(0) + ' °C']]);
const breakerCard = (where, inV, outV, key, coil, pit) => () => infoCard(where + ' battery breaker', 'Water-cooled battery breaker: cooling water passes up two columns and through the exchanger between them (flexible hoses either side), then on to cool the ' + where + ' battery pit.', () => [
  ['Inlet valve', OC(inV)], ['Outlet valve', OC(outV)], ['Breaker water', flowing(key)], ['Battery pit water', coil.flow ? 'Flowing' : 'No flow'], ['Battery pit temperature (t)', tOf(pit)]]);
SPOTS.push(...[
  ['ca', 1085, 482, coolerCard(1, 'v35', 'v40', 'ca')], ['cb', 1318, 482, coolerCard(2, 'v54', 'v50', 'cb')],
  ['hx3', 745, 1066, breakerCard('III', 'b3i', 'b3o', 'hx3', coil3, 'III battery pit')], ['hxf', 1568, 1045, breakerCard('F/E', 'bfi', 'v60', 'hxf', coilF, 'F/E battery pit')],
  ['ix', 968, 1048, () => infoCard('Ion-exchange filter', 'Takes dissolved salts out of the cooling water. Open 39, 34 and 91 to pass water from the pump discharge through the filter and the salinometer (CM) back to the suction; 98 bypasses the filter, 36 feeds the salinometer directly.', () => [
    ['Valves 39 / 34 / 91', OC('v39') + ' / ' + OC('v34') + ' / ' + OC('v91')], ['Bypass 98', OC('v98')], ['Water through filter', flowing('ix')], ['Salinity (CM)', INST.sal.toFixed(1) + ' ppm']])]
].map(([id, x, y, open]) => { const b = document.createElement('button'); b.className = 'vinfo'; b.setAttribute('aria-label', id + ' details'); b.innerHTML = '<span>i</span>'; b.addEventListener('click', open); labelsRoot.append(b); return { id, x, y, button: b }; }));
// the live P / CM / L readings open their instrument's card
INST_EL.P.e.addEventListener('click', () => infoCard('P · pressure sensor', 'Pump discharge pressure, measured on the riser above the pumps. It falls when drains are open or the pump slows.', () => [['Pressure now', INST.P.toFixed(2) + ' kg/cm²'], ['Pump running', S.on.p1 ? '40/15' : S.on.p2 ? '5/17' : 'none'], ['Drains open', ['v89', 'v51', 'v53', 'v116'].filter(k => S.open[k]).map(k => k.slice(1)).join(', ') || 'none'], ['Low-pressure alarm', 'below 2.2 kg/cm²']]));
INST_EL.CM.e.addEventListener('click', () => infoCard('CM · salinometer', 'Measures the salt content of the battery cooling water. It creeps up while the water circulates; passing water through the ion-exchange filter brings it down.', () => [['Salinity now', INST.sal.toFixed(1) + ' ppm'], ['Water through filter', flowing('ix')], ['Normal', 'below 10 ppm'], ['Alarm', 'above 15 ppm']]));
INST_EL.L.e.addEventListener('click', () => infoCard('Expansion tank', 'Keeps the closed cooling circuit full and takes up expansion. The level falls slowly in service and quickly through open drains; top up through valve 77.', () => [['Level now', Math.round(INST.lvl) + ' %'], ['Top-up 77', OC('v77')], ['Low-level alarm', 'below 30 %']]));
// ---------------------------------------------------------------- layout and screen positions
const v3 = new T.Vector3();
function screenPoint(x, y, h = PIPE_Y) { v3.copy(P(x, y, h)).project(camera); return [(v3.x + 1) / 2 * host.clientWidth, (1 - v3.y) / 2 * host.clientHeight]; }
let pxPerUnit = 1;
function layout() {
  { const ch = circuit.clientHeight, need = Math.max(circuit.clientWidth, Math.round((WX(1813) - WX(123)) / 1150 * ch));   // full height, as wide as the plan needs
    if (host.style.width !== need + 'px') { host.style.width = need + 'px'; labelsRoot.style.width = need + 'px'; } }
  const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
  const pr = Math.min(sharpRatio(), 8192 / Math.max(1, w)); if (renderer.getPixelRatio() !== pr) renderer.setPixelRatio(pr);   // wide canvas: keep it within the GPU's size limit
  renderer.setSize(w, h);
  const PW = WX(1813) - WX(123), PH = 1150, cx = (WX(1813) + WX(123)) / 2, cz = 905 - 786, aspect = w / h;
  let hw, hh; if (aspect > PW / PH) { hh = PH / 2; hw = hh * aspect; } else { hw = PW / 2; hh = hw / aspect; }
  const hw0 = hw, hh0 = hh; hw /= Z.z; hh /= Z.z; Z.px = Math.max(-hw0 * (1 - 1 / Z.z), Math.min(hw0 * (1 - 1 / Z.z), Z.px)); Z.py = Math.max(-hh0 * (1 - 1 / Z.z), Math.min(hh0 * (1 - 1 / Z.z), Z.py));   // zoom / pan
  Object.assign(camera, { left: cx + Z.px - hw, right: cx + Z.px + hw, top: -(cz + Z.py) + hh, bottom: -(cz + Z.py) - hh }); camera.updateProjectionMatrix();
  pxPerUnit = h / (2 * hh);
  for (const p of parts.values()) {
    const [sx, sy] = screenPoint(p.x, p.y), s = Math.max(44, p.size * pxPerUnit);
    Object.assign(p.button.style, { left: sx + 'px', top: sy + 'px', width: s + 'px', height: s + 'px', minWidth: '44px', minHeight: '44px' });
  }
  labelsRoot.style.setProperty('--num', Math.min(34, Math.max(13, 21 * pxPerUnit)).toFixed(1) + 'px');   // client: labels readable on the big screen
  for (const { p, e } of numEls) {
    if (p.type === 'pump') { const [sx, sy] = screenPoint(p.x, p.y - 56, 80); Object.assign(e.style, { left: sx + 'px', top: sy + 'px' }); continue; }
    const [sx, sy] = screenPoint(p.x, p.y, 80), r = Math.max(14, p.size * pxPerUnit * .42), side = TAG_SIDE[p.id] || 'ur';
    const dx = side.includes('l') ? -1 : side.includes('r') ? 1 : 0, dy = side.includes('u') ? -1 : side.includes('d') ? 1 : 0;
    e.dataset.side = side; Object.assign(e.style, { left: sx + dx * (r + 6) + 'px', top: sy + dy * (r + 4) + 'px' });
  }
  for (const { p, e } of runEls) { const [sx, sy] = screenPoint(p.x, p.y + 52, 80); Object.assign(e.style, { left: sx + 'px', top: sy + 'px' }); }
  for (const s of SPOTS) { const [sx, sy] = screenPoint(s.x, s.y, 80); Object.assign(s.button.style, { left: sx + 'px', top: sy + 'px' }); }
  for (const g of gauges) { const [sx, sy] = screenPoint(g.at[0], g.at[1] + (g.up ? -30 : 24), 80); Object.assign(g.chip.style, { left: sx + 'px', top: sy + 'px', transform: g.up ? 'translate(-50%,-100%)' : '' }); }
  for (const k in INST_EL) { const d = INST_EL[k], [sx, sy] = screenPoint(d.x, d.y, 80); Object.assign(d.e.style, { left: sx + 'px', top: sy + 'px' }); }
  for (const t of TSENS) { const [sx, sy] = screenPoint(t.x, t.y, 80); Object.assign(t.e.style, { left: sx + 'px', top: sy + 'px' }); }
  for (const d of DTEXT) { const [sx, sy] = screenPoint(d.x, d.y, 80); Object.assign(d.e.style, { left: sx + 'px', top: sy + 'px' }); }
}
new ResizeObserver(layout).observe(circuit);
window.visualViewport?.addEventListener('resize', layout);
layout();
Z = attachZoom(renderer.domElement, { worldPerPx: () => 1 / pxPerUnit, apply: layout, baseDrag: dx => { circuit.scrollLeft -= dx; } });   // client: zoom + pan

// ---------------------------------------------------------------- loop
const tint = (d, flowing) => { d.col.lerp(!S.running ? LAMP_IDLE : flowing ? LAMP_ON : LAMP_OFF, .12); d.face.color.copy(d.col); d.side.color.copy(d.col).multiplyScalar(.7); };
const DIAMOND_PIPE = { ca: 'ca', cb: 'cb', mca: 'mca', mcb: 'mcb', ecp: 'ecp', ecs: 'ecs', hx3: 'hx3', hxf: 'hxf', ix: 'ix' };
let last = 0;
function frame(now) {
  if (!flangeMeshes) buildFlanges();
  const dt = Math.min(.05, Math.max(0, last ? (now - last) / 1000 : .016)); last = Math.max(last, now);
  for (const p of parts.values()) if (p.type === 'pump') {                          // spin up / coast down
    const target = S.on[p.key] ? S.set[p.key] : 0, tau = target > p.speed ? PUMP_SPIN_UP_S : PUMP_COAST_S;
    p.speed += (target - p.speed) * (1 - Math.exp(-dt / tau)); if (!target && p.speed < .002) p.speed = 0;
    p.angle += p.speed * PUMP_REV_PER_S * Math.PI * 2 * dt; if (p.rotor) p.rotor.rotation.x = p.angle;
    if (p.base) { const j = p.speed * .35; p.group.position.set(p.base.x + Math.sin(now * .09) * j, p.base.y, p.base.z + Math.cos(now * .113) * j); p.runGlow.material.opacity = .55 * p.speed; }
  }
  solve(); guide();
  for (const { p, e } of runEls) { const on = S.on[p.id], t = !S.running ? '' : on ? (p.speed > .95 ? 'RUNNING · 1450 rpm' : 'STARTING…') : p.speed > .02 ? 'STOPPING…' : 'STOPPED'; if (e.textContent !== t) e.textContent = t; e.classList.toggle('on', on); e.style.display = t ? '' : 'none'; }
  const px = pxPerUnit * renderer.getPixelRatio();
  for (const p of pipes) pipeUpdate(p, dt, p.flow ? 500 * Math.max(.3, Math.max(parts.get('p1').speed, parts.get('p2').speed)) : 0, AIR[p.air], px, now);
  for (const p of parts.values()) {
    if (p.wheel) p.wheel.rotation.y += (p.wheelTarget - p.wheel.rotation.y) * Math.min(1, dt * 6);
    const target = !S.running ? (p.lamp.idle || LAMP_IDLE) : isOn(p) ? (p.lamp.on || LAMP_ON) : LAMP_OFF;
    p.lamp.color.lerp(target, Math.min(1, dt * 8)); p.lamp.ring.material.color.copy(p.lamp.color); p.lamp.glow.material.color.copy(p.lamp.color);
  }
  for (const k in DIAMONDS) tint(DIAMONDS[k], flowsAt(DIAMOND_PIPE[k]));
  const spd = Math.max(parts.get('p1').speed, parts.get('p2').speed);
  for (const g of gauges) {
    const near = pipes.filter(p => p.from === g.pipeKey || p.to === g.pipeKey), want = near.some(p => p.flow) ? g.nom * spd : near.some(p => p.reached) ? g.nom * .45 * spd : 0;
    g.p += (want - g.p) * Math.min(1, dt * 2.5); if (g.p < .005) g.p = 0;
    g.set(g.p); const t = g.p.toFixed(2); const vb = g.chip.querySelector('b'); if (vb.textContent !== t) vb.textContent = t; g.chip.classList.toggle('live', g.p > .05);
  }
  for (const pl of plumes) plumeUpdate(pl, dt, pl.key());
  instruments(dt, spd); temps(dt);
  const anyFlow = pipes.some(p => p.flow);
  for (const { b, sc } of batteries) b.update(dt, S.running ? (anyFlow ? .45 : .25) : 0, px * sc);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
// leaving the screen frees its graphics memory at once (phones keep the previous page alive otherwise)
addEventListener('pagehide', () => { renderer.dispose(); renderer.forceContextLoss(); });
addEventListener('pageshow', e => { if (e.persisted) location.reload(); });   // coming back to it: rebuild



