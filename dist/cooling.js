// Screen 3 — Storage Battery and Panel Cooling System. Fixed top view of the supplied schematic in the style of screens 1
// and 2: glass pipes with circuit 1's water-blue flow, tap-to-operate valves drawn as the schematic's symbols (gate,
// stop-check, angle and needle valves), white/red/green states, warnings and interlocks. Pumps 40/15 and 5/17 are the
// Blender pump set (pump_set.glb); the battery pits reuse screen 2's cells.
// Plan coordinates are the supplied schematic's (upright photo, 2000 × 1562, x right, y down); world = (x − 1000, h, y − 786).
// Compartments left to right: M/R | E/R | III | C/R | F/E. Upper line = warm return to the coolers; lower line = cooled
// supply from the pumps.
import './offline-support.js';
import * as T from 'three';
import {battery3D, facing, openBatteryDetail} from './battery-detail.js';
import {openBlowerDetail} from './blower-detail.js';
import {loadPump, PUMP_REV_PER_S, PUMP_SPIN_UP_S, PUMP_COAST_S} from './pump-model.js';

const host = document.querySelector('#viewport'), labelsRoot = document.querySelector('#labels'), circuit = document.querySelector('#circuit');
const P = (x, y, h = 0) => new T.Vector3(x - 1000, h, y - 786);
const PIPE_Y = 24;
const FILL_SPEED = 520;                                  // plan units / s at which pumped water fills a pipe up to the next closed part
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
function flange(at, dir, r) {
  const g = new T.Group(); g.position.copy(at); g.quaternion.setFromUnitVectors(UP, dir.clone().normalize()); scene.add(g);
  g.add(new T.Mesh(new T.CylinderGeometry(r * 1.5, r * 1.5, r * .34, 32), steel));
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, b = new T.Mesh(new T.CylinderGeometry(r * .13, r * .13, r * .62, 10), boltMat); b.position.set(Math.cos(a) * r * 1.26, 0, Math.sin(a) * r * 1.26); g.add(b); }
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
const hoseMat = new T.MeshPhysicalMaterial({ color: '#efe4b8', roughness: .12, transmission: .35, thickness: 3, transparent: true, opacity: .85, side: T.DoubleSide });   // screen 1 battery hose
function pipe(from, to, key, pts, air, { r = 13, curve = null } = {}) {
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
  const streams = new T.Group(); scene.add(streams);
  const pts3 = path.getSpacedPoints(Math.max(4, Math.ceil(len / 5))), K = r > 9 ? 22 : 8;   // as circuit 1 (22 trails per pipe)
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
  const coreMat = new T.ShaderMaterial({ transparent: true, depthWrite: false,
    uniforms: { uColor: { value: AIR[air].clone() }, uAlpha: { value: 0 }, uReach: { value: 0 }, uPhase: { value: Math.random() }, uLen: { value: len } },
    vertexShader: 'varying float vU;void main(){vU=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform vec3 uColor;uniform float uAlpha;uniform float uReach;uniform float uPhase;uniform float uLen;varying float vU;void main(){if(vU>uReach)discard;float x=fract(vU*uLen/120.-uPhase);float b=.5+.5*sin(x*6.2832);float a=uAlpha*(.32+.1*b);gl_FragColor=vec4(mix(uColor,vec3(.72,.86,1.),.55+.1*b),a);}' });
  const core = new T.Mesh(new T.TubeGeometry(path, Math.max(16, Math.round(len / 6)), r * .8, 12, false), coreMat); core.renderOrder = 3; scene.add(core); core.visible = false;
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
  const cu = p.coreMat.uniforms; cu.uAlpha.value = p.show; cu.uReach.value = p.fill; cu.uColor.value.copy(color); p.core.visible = p.streams.visible;   // faint tint under the trails
  cu.uPhase.value += dt * (flowing ? .25 + 1.1 * Math.min(1.5, q / 600) : 0);       // pulses travel with the flow; still when blocked
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

// ---------------------------------------------------------------- symbols drawn as on the schematic
const STEM = new T.MeshStandardMaterial({ color: '#5d6b72', metalness: .6, roughness: .4 }), RIM = new T.MeshStandardMaterial({ color: '#0f5f4a', roughness: .4 });
const BLACK = new T.MeshStandardMaterial({ color: '#1d2327', roughness: .45 }), WHEEL = new T.MeshPhysicalMaterial({ color: '#1f8a6c', roughness: .35, clearcoat: .5 });
const GATE_ON = new T.Color('#1f9e7a');
const stateBody = () => new T.MeshPhysicalMaterial({ color: LAMP_IDLE.clone(), roughness: .3, metalness: .1, transparent: true, opacity: .9, clearcoat: .6 });
function handwheel(g, s, lean = .55) {                       // stem leaning toward the viewer with a round handwheel
  const arm = new T.Group(); arm.rotation.x = -Math.PI / 2 + lean; g.add(arm);
  const stem = new T.Mesh(new T.CylinderGeometry(2.6 * s, 2.6 * s, 34 * s, 10), STEM); stem.position.y = 17 * s; arm.add(stem);
  const wheel = new T.Group(); wheel.position.y = 36 * s; arm.add(wheel);
  wheel.add(new T.Mesh(new T.CylinderGeometry(19 * s, 19 * s, 4 * s, 36), WHEEL));
  const spoke = new T.Mesh(new T.BoxGeometry(34 * s, 4.6 * s, 3 * s), RIM); spoke.position.y = s; wheel.add(spoke);
  return wheel;
}
// gate valve ⋈ (two cones point to point along the pipe) — with check: true the schematic's half-black stop-check valve
function gate(id, x, y, title, { vertical = false, s = .6, check = false } = {}) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); if (vertical) g.rotation.y = Math.PI / 2; scene.add(g);
  const body = stateBody();
  for (const sgn of [-1, 1]) {
    const c = new T.Mesh(new T.ConeGeometry(22 * s, 26 * s, 32, 1, true), check && sgn > 0 ? BLACK : body); c.rotation.z = sgn * Math.PI / 2; c.position.x = sgn * 13 * s; g.add(c);
    const rim = new T.Mesh(new T.TorusGeometry(22 * s, 1.6 * s, 8, 32), RIM); rim.rotation.y = Math.PI / 2; rim.position.x = sgn * 26 * s; g.add(rim);
  }
  const wheel = handwheel(g, s);
  return addPart(id, 'valve', x, y, title, Math.max(46, 70 * s), { key: id, face: 27 * s, lamp: { ring: { material: body }, glow: { material: { color: new T.Color() } }, color: LAMP_IDLE.clone(), on: GATE_ON }, wheel, wheelTarget: 0, closedAngle: 0, openAngle: -4 * Math.PI });
}
// angle valve: two cones at 90°, one on the inlet leg and one on the outlet leg ([dx, dy] plan directions away from the body)
function angleValve(id, x, y, title, inDir, outDir, s = .45) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y)); scene.add(g);
  const body = stateBody();
  for (const [dx, dy] of [inDir, outDir]) {
    const d = new T.Vector3(dx, 0, dy).normalize(), c = new T.Mesh(new T.ConeGeometry(22 * s, 26 * s, 32, 1, true), body);
    c.quaternion.setFromUnitVectors(UP, d.clone().negate()); c.position.copy(d).multiplyScalar(13 * s); g.add(c);
    const rim = new T.Mesh(new T.TorusGeometry(22 * s, 1.6 * s, 8, 32), RIM); rim.quaternion.setFromUnitVectors(new T.Vector3(0, 0, 1), d); rim.position.copy(d).multiplyScalar(26 * s); g.add(rim);
  }
  const wheel = handwheel(g, s);
  return addPart(id, 'valve', x, y, title, Math.max(44, 70 * s), { key: id, face: 27 * s, lamp: { ring: { material: body }, glow: { material: { color: new T.Color() } }, color: LAMP_IDLE.clone(), on: GATE_ON }, wheel, wheelTarget: 0, closedAngle: 0, openAngle: -4 * Math.PI });
}
// needle valve at each gauge: a small fixed ⋈ with a T handle
const NEEDLE = new T.MeshStandardMaterial({ color: '#7d8a91', metalness: .5, roughness: .35 });
function needle(x, y, vertical) {
  const g = new T.Group(); g.position.copy(P(x, y, PIPE_Y - 2)); if (vertical) g.rotation.y = Math.PI / 2; scene.add(g);
  for (const sgn of [-1, 1]) { const c = new T.Mesh(new T.ConeGeometry(7, 9, 20), NEEDLE); c.rotation.z = sgn * Math.PI / 2; c.position.x = sgn * 4.5; g.add(c); }
  const st = new T.Mesh(new T.BoxGeometry(2, 2, 12), STEM); st.position.set(0, 6, -6); g.add(st);
  const t = new T.Mesh(new T.BoxGeometry(11, 2, 2), STEM); t.position.set(0, 6, -12); g.add(t);
}
// pressure gauge on its tapping: instrument line from the pipe, needle valve, then the dial (arrow swings with pressure)
const gauges = [];
function gauge(line, dialAt, pipeKey) {
  wire([...line, dialAt]); const n = line[line.length - 1], m = line[line.length - 2];
  needle(n[0], n[1], Math.abs(n[0] - m[0]) < 1); gauges.push({ set: dial(dialAt[0], dialAt[1]), pipeKey });
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
function flex(x, y, vertical, r = 7) { for (const o of [-5, 0, 5]) { const m = new T.Mesh(new T.TorusGeometry(r + 1.5, 1.6, 8, 24), STEM); m.position.copy(P(x + (vertical ? 0 : o), y + (vertical ? o : 0), PIPE_Y)); m.rotation.y = vertical ? 0 : Math.PI / 2; scene.add(m); } }
// diamonds as drawn: cooler ◇ with a cross, panel cooler / ion-exchange filter ◇ with a dashed line; tinted by state
function diamond3(x, y, kind, size = 44) {
  const top = canvasTexture(128, (c, s) => {
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, s, s); c.strokeStyle = '#1d2327'; c.lineWidth = 5;
    if (kind === 'cooler') { c.beginPath(); c.moveTo(8, 8); c.lineTo(s - 8, s - 8); c.moveTo(s - 8, 8); c.lineTo(8, s - 8); c.stroke(); }
    else { c.setLineDash([12, 10]); c.beginPath(); c.moveTo(8, 8); c.lineTo(s - 8, s - 8); c.stroke(); }
  });
  const side = new T.MeshStandardMaterial({ color: '#46525a', metalness: .4, roughness: .45 }), face = new T.MeshStandardMaterial({ map: top, roughness: .5 });
  const b = new T.Mesh(new T.BoxGeometry(size, 26, size), [side, side, face, side, side, side]);
  b.rotation.y = Math.PI / 4; b.position.copy(P(x, y, PIPE_Y)); scene.add(b);
  return { side, face, col: LAMP_IDLE.clone() };
}
// battery breaker cooler: two glass columns (with their floats) either side of a cross-diamond exchanger
function exchanger(x, y) {
  for (const dx of [-23, 23]) {
    const t = new T.Mesh(new T.CylinderGeometry(10, 10, 140, 24), new T.MeshPhysicalMaterial({ color: '#8fb3c6', roughness: .05, transparent: true, opacity: .45, clearcoat: 1 }));
    t.rotation.x = Math.PI / 2; t.position.copy(P(x + dx, y, PIPE_Y)); t.renderOrder = 6; scene.add(t);
    for (const e of [-1, 1]) { const cap = new T.Mesh(new T.CylinderGeometry(11.5, 11.5, 5, 24), steel); cap.rotation.x = Math.PI / 2; cap.position.copy(P(x + dx, y + e * 70, PIPE_Y)); scene.add(cap); }
    const fl = new T.Mesh(new T.ShapeGeometry(new T.Shape([new T.Vector2(-8, -7), new T.Vector2(8, -7), new T.Vector2(0, 8)])), BLACK); fl.rotation.x = -Math.PI / 2; fl.position.copy(P(x + dx, y + 58, PIPE_Y + 12)); scene.add(fl);
  }
  return diamond3(x, y, 'cooler', 34);
}

// ---------------------------------------------------------------- compartments and battery pits
{ const f = new T.Mesh(new T.PlaneGeometry(2800, 2000), new T.MeshBasicMaterial({ map: floorTex })); f.rotation.x = -Math.PI / 2; f.position.y = -700; scene.add(f); }
for (const x of [380, 578, 920, 1435]) {                   // M/R | E/R | III | C/R | F/E
  const d = new T.Line(new T.BufferGeometry().setFromPoints([P(x, 345, -18), P(x, 1465, -18)]), new T.LineDashedMaterial({ color: '#7d94a0', dashSize: 16, gapSize: 12 })); d.computeLineDistances(); scene.add(d);
}
const batteries = [], PITS = { III: { x0: 652, x1: 843, y0: 1176, y1: 1367, cells: [690, 735, 780, 825], cy: 1310 }, FE: { x0: 1520, x1: 1700, y0: 1273, y1: 1455, cells: [1552, 1594, 1636, 1678], cy: 1405 } };
for (const [name, pit] of Object.entries(PITS)) {
  const w = pit.x1 - pit.x0, h = pit.y1 - pit.y0, c = P((pit.x0 + pit.x1) / 2, (pit.y0 + pit.y1) / 2, -20);
  const floor = new T.Mesh(new T.PlaneGeometry(w, h), mat.pit); floor.rotation.x = -Math.PI / 2; floor.position.copy(c); scene.add(floor);
  const edge = new T.LineSegments(new T.EdgesGeometry(new T.PlaneGeometry(w, h)), new T.LineBasicMaterial({ color: '#5d6b72' })); edge.rotation.x = -Math.PI / 2; edge.position.copy(c).setY(-19); scene.add(edge);
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
  const lg = new T.Group(); lg.position.copy(P(cx + (mirror ? 18 : -18), cy + 34, PIPE_Y + 40));   // status dot on the baseplate, motor end scene.add(lg);
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
    const plan = name => { const v = model.getObjectByName(name).getWorldPosition(new T.Vector3()); return [v.x + 1000, v.z + 786, v.y]; };
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
cv('ma1', 222, 617, 'Main motor panel · inlet valve', { vertical: true, s: .48 }); cv('ma2', 222, 1150, 'Main motor panel · outlet valve', { vertical: true, s: .48 });
cv('mb1', 307, 617, 'Grouper switch · inlet valve', { vertical: true, s: .48 }); cv('mb2', 307, 1140, 'Grouper switch · outlet valve', { vertical: true, s: .48 });
cv('ep1', 405, 660, 'Port panel · inlet valve', { vertical: true, s: .48 }); cv('ep2', 405, 1180, 'Port panel · outlet valve', { vertical: true, s: .48 });
cv('es1', 512, 660, 'Stbd panel · inlet valve', { vertical: true, s: .48 }); cv('es2', 512, 1180, 'Stbd panel · outlet valve', { vertical: true, s: .48 });
// III and F/E: battery breaker coolers and battery pits
cv('b3i', 856, 836, 'III battery breaker · inlet valve', { vertical: true, s: .48 }); cv('b3o', 634, 923, 'III battery breaker · outlet valve', { vertical: true, s: .48 });
gv('v17', 900, 800, 'Valve 17 · III battery pit inlet', { vertical: true, s: .55 }); gv('v26', 600, 678, 'Valve 26 · III battery pit outlet', { vertical: true, s: .55 });
cv('bfi', 1476, 884, 'F/E battery breaker · inlet valve', { vertical: true, s: .48 }); cv('v60', 1697, 815, 'Valve 60 · F/E battery breaker outlet', { vertical: true, s: .48 });
gv('v56', 1438, 710, 'Valve 56 · F/E battery pit inlet', { vertical: true, s: .55 }); gv('vfp', 1738, 920, 'F/E battery pit outlet valve', { vertical: true, s: .55 });
// pump suction / discharge
gv('v81', 1258, 990, 'Valve 81 · pump 5/17 suction', { s: .5 });
const D1 = 1107, D2 = 1308;                                    // discharge lines of 40/15 and 5/17 (pump flanges, estimated before load)
cv('v84', D1, 770, 'Valve 84 · pump 40/15 discharge', { vertical: true, s: .48 }); cv('v83', D2, 770, 'Valve 83 · pump 5/17 discharge', { vertical: true, s: .48 });
// salinometer / ion-exchange loop, drains, blowing connection, expansion tank
angleValve('v39', 1067, 662, 'Valve 39 · salinometer and ion-exchange supply', [1, 0], [0, 1]);
angleValve('v36', 1015, 955, 'Valve 36 · salinometer', [1, 0], [0, -1]); angleValve('v34', 972, 845, 'Valve 34 · salinometer from ion-exchange filter', [0, 1], [1, 0]);
angleValve('v98', 938, 1110, 'Valve 98 · ion-exchange filter bypass', [0, -1], [1, 0]); angleValve('v91', 1110, 1145, 'Valve 91 · salinometer return', [0, -1], [1, 0]);
cv('v92', 1067, 1190, 'Valve 92 · drain line', { vertical: true, s: .42 }); angleValve('v89', 1100, 1262, 'Valve 89 · drain', [-1, 0], [0, 1], .4);
angleValve('v47', 1198, 575, 'Valve 47 · blowing connection', [0, -1], [1, 0], .4); angleValve('v53', 1298, 575, 'Valve 53 · for blowing', [-1, 0], [0, 1], .4);
gv('v51', 1272, 610, 'Valve 51 · drain', { vertical: true, s: .38 });
angleValve('v116', 192, 1090, 'Valve 116 · drain', [1, 0], [0, 1], .4);
angleValve('v76', 1385, 1045, 'Valve 76 · expansion tank', [0, -1], [-1, 0], .4); angleValve('v77', 1395, 1100, 'Valve 77 · drain', [-1, 0], [0, 1], .4);

for (const p of parts.values()) if (p.face) FACE[p.id] = p.face;

// ---------------------------------------------------------------- equipment
const DIAMONDS = {
  ca: diamond3(1060, UPL, 'cooler', 50), cb: diamond3(1280, UPL, 'cooler', 50),
  mca: diamond3(222, 830, 'panel', 42), mcb: diamond3(307, 830, 'panel', 42), ecp: diamond3(405, 900, 'panel', 42), ecs: diamond3(512, 900, 'panel', 42),
  hx3: exchanger(745, 975), hxf: exchanger(1568, 950), ix: diamond3(1002, 1110, 'panel', 40)
};
for (const k in DIAMONDS) FACE_OF[k] = { ca: 30, cb: 30, hx3: 34, hxf: 34, ix: 26 }[k] || 26;
{ // expansion tank: glass tank with its water and the level indicator L
  const g = P(1401, 673, PIPE_Y);
  const shell = new T.Mesh(new T.BoxGeometry(58, 50, 125), new T.MeshPhysicalMaterial({ color: '#c9dde2', roughness: .05, transparent: true, opacity: .35, clearcoat: 1, depthWrite: false })); shell.position.copy(g); shell.renderOrder = 6; scene.add(shell);
  const water = new T.Mesh(new T.BoxGeometry(54, 40, 72), new T.MeshStandardMaterial({ color: '#4f8fd6', transparent: true, opacity: .55 })); water.position.copy(P(1401, 707, PIPE_Y - 4)); scene.add(water);
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
const RM = 10, RB = 7, RS = 4.5;
const hump = (x) => [[x - 20, LOW], [x - 9, LOW, PIPE_Y + 24], [x + 9, LOW, PIPE_Y + 24], [x + 20, LOW]];   // ⌒ where the lower line crosses a riser
// supply: pump discharge → lower line → branches
pipe('DH0', 'DH', 'cold', [[1148, 728], [1148, 662]], 'cold', { r: RM });
pipe('DH', 'LJ', 'cold', [[1148, 662], [1148, LOW]], 'cold', { r: RM });
pipe('LJ', 'v41', 'cold', [[1148, LOW], [1108, LOW]], 'cold', { r: RM });
pipe('v41', 'L1', 'cold', [[1108, LOW], [900, LOW]], 'cold', { r: RM });
pipe('L1', 'LE', 'cold', [[900, LOW], ...hump(600), ...hump(552), [457, LOW]], 'cold', { r: RM });
pipe('LE', 'LM', 'cold', [[457, LOW], ...hump(357), [265, LOW]], 'cold', { r: RM });
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
pipe('MA3', 'v116', 'warm', [[222, 1090], [192, 1090]], 'warm', { r: RS });
pipe('v116', 'out116', 'warm', [[192, 1090], [192, 1128]], 'warm', { r: RS });
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
pipe('IXo', 'v34', 'side', [[972, 1110], [972, 845]], 'side', { r: RS });
pipe('v34', 'CMJ', 'side', [[972, 845], [1015, 845]], 'side', { r: RS });
pipe('CMJ', 'cm', 'side', [[1015, 845], [1015, 760]], 'side', { r: RS });
pipe('cm', 'v91', 'side', [[1015, 700], [1015, 690], [1045, 690], [1045, 900], [1110, 900], [1110, 1145]], 'side', { r: RS });
pipe('v91', 'SH2', 'side', [[1110, 1145], [1158, 1145]], 'side', { r: RS });
pipe('C1', 'v92', 'side', [[1067, 1028], [1067, 1190]], 'side', { r: RS });
pipe('v92', 'v89', 'side', [[1067, 1190], [1067, 1262], [1100, 1262]], 'side', { r: RS });
pipe('v89', 'out89', 'side', [[1100, 1262], [1100, 1296]], 'side', { r: RS });
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
  const coil = c.pit === 'III' ? coil3 : coilF, yc = c.pit === 'III' ? 1215 : 1318, N = c.nip, S = P(N.x + 1000, yc, PIPE_Y);
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
for (const [x, y, side] of [[222, 920, 1], [307, 925, -1], [405, 1000, 1], [512, 1000, -1], [600, 1125, 1], [1738, 1265, -1], [1148, 615, -1]]) sensor(x, y, side);
sensor(1148, 705, -1, 'P');
flex(685, 975, false); flex(815, 975, false); flex(1510, 950, false); flex(1640, 950, false); flex(1158, 1065, true, RM); flex(1083, 1262, false, RS);
gauge([[222, 735], [185, 735], [185, 700]], [185, 655], 'ma1'); gauge([[222, 1040], [185, 1040], [185, 1015]], [185, 975], 'mca');
gauge([[307, 740], [265, 740], [265, 700]], [265, 655], 'mb1'); gauge([[307, 1080], [265, 1080], [265, 1035]], [265, 990], 'mcb');
gauge([[405, 870], [452, 870], [452, 835]], [452, 790], 'ep1'); gauge([[405, 1015], [452, 1015], [452, 1055]], [452, 1095], 'ecp');
gauge([[512, 810], [470, 810], [470, 765]], [470, 720], 'es1'); gauge([[512, 1100], [465, 1100], [465, 1070]], [465, 1035], 'ecs');
gauge([[722, 905], [722, 880], [710, 880]], [683, 880], 'b3i'); gauge([[768, 905], [768, 880], [790, 880]], [825, 880], 'b3i');
gauge([[722, 1045], [722, 1060], [700, 1060]], [668, 1060], 'hx3'); gauge([[768, 1045], [768, 1060], [800, 1060]], [835, 1060], 'hx3');
gauge([[1545, 880], [1545, 862], [1525, 862]], [1500, 862], 'bfi'); gauge([[1591, 880], [1591, 862], [1612, 862]], [1638, 862], 'bfi');
gauge([[1545, 1020], [1545, 1045], [1525, 1045]], [1495, 1045], 'hxf'); gauge([[1591, 1020], [1591, 1045], [1615, 1045]], [1648, 1045], 'hxf');
gauge([[D1, 800], [1128, 800], [1128, 830]], [1090, 830], 'v84'); gauge([[D2, 820], [1310, 820], [1310, 860]], [1335, 905], 'v83');
gauge([[1228, 575], [1228, 600]], [1228, 628], 'v47'); gauge([[1033, 1110], [1033, 1180]], [1033, 1238], 'ix'); gauge([[972, 1150], [972, 1185]], [968, 1240], 'ix');

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
const DRAINS = [['out116', 192, 1128], ['out89', 1100, 1296], ['out77', 1395, 1132], ['out53', 1298, 606], ['out51', 1272, 640]];
for (const [n, x, y] of DRAINS) plume(x, y, 0, 1, () => pipeInto(n).some(p => p.flow) ? 400 : 0);

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
  ['p1', 1080, 805, () => pumpView('p1', 'Pump 40/15')], ['p2', 1335, 805, () => pumpView('p2', 'Pump 5/17')],
  ['b3', 843, 1190, () => openBatteryDetail({ side: 'port', pressure: .145, title: 'Battery cell · III battery pit (water cooled)' })],
  ['bf', 1700, 1287, () => openBatteryDetail({ side: 'stbd', pressure: .145, title: 'Battery cell · F/E battery pit (water cooled)' })]
].map(([id, x, y, open]) => { const b = document.createElement('button'); b.className = 'vinfo'; b.setAttribute('aria-label', id + ' details'); b.innerHTML = '<span>i</span>'; b.addEventListener('click', open); labelsRoot.append(b); return { id, x, y, button: b }; });
const startBtn = document.querySelector('#start'), resetBtn = document.querySelector('#reset');
function allOff() { for (const k in S.open) S.open[k] = false; for (const k in S.on) S.on[k] = false; for (const p of parts.values()) if (p.wheel) p.wheelTarget = p.closedAngle; }
function showRunState() { startBtn.innerHTML = S.running ? '<span>Ⅱ</span> Pause' : '<span>▶</span> Start'; startBtn.setAttribute('aria-pressed', String(S.running)); }
startBtn.addEventListener('click', () => { S.running = !S.running; if (!S.running) allOff(); showRunState(); });     // Pause: everything closes and stops, as on screens 1 and 2
resetBtn?.addEventListener('click', () => { S.running = false; allOff(); showRunState(); notify('Circuit reset — all valves closed, pumps stopped.', true); });
showRunState();

// ---------------------------------------------------------------- layout and screen positions
const v3 = new T.Vector3();
function screenPoint(x, y, h = PIPE_Y) { v3.copy(P(x, y, h)).project(camera); return [(v3.x + 1) / 2 * host.clientWidth, (1 - v3.y) / 2 * host.clientHeight]; }
let pxPerUnit = 1;
function layout() {
  const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
  if (renderer.getPixelRatio() !== sharpRatio()) renderer.setPixelRatio(sharpRatio());
  renderer.setSize(w, h);
  const PW = 1690, PH = 1150, cx = 968 - 1000, cz = 905 - 786, aspect = w / h;
  let hw, hh; if (aspect > PW / PH) { hh = PH / 2; hw = hh * aspect; } else { hw = PW / 2; hh = hw / aspect; }
  Object.assign(camera, { left: cx - hw, right: cx + hw, top: -cz + hh, bottom: -cz - hh }); camera.updateProjectionMatrix();
  pxPerUnit = h / (2 * hh);
  for (const p of parts.values()) {
    const [sx, sy] = screenPoint(p.x, p.y), s = Math.max(44, p.size * pxPerUnit);
    Object.assign(p.button.style, { left: sx + 'px', top: sy + 'px', width: s + 'px', height: s + 'px', minWidth: '44px', minHeight: '44px' });
  }
  for (const s of SPOTS) { const [sx, sy] = screenPoint(s.x, s.y, 80); Object.assign(s.button.style, { left: sx + 'px', top: sy + 'px' }); }
}
new ResizeObserver(layout).observe(host);
window.visualViewport?.addEventListener('resize', layout);
layout();

// ---------------------------------------------------------------- loop
const tint = (d, flowing) => { d.col.lerp(!S.running ? LAMP_IDLE : flowing ? LAMP_ON : LAMP_OFF, .12); d.face.color.copy(d.col); d.side.color.copy(d.col).multiplyScalar(.7); };
const DIAMOND_PIPE = { ca: 'ca', cb: 'cb', mca: 'mca', mcb: 'mcb', ecp: 'ecp', ecs: 'ecs', hx3: 'hx3', hxf: 'hxf', ix: 'ix' };
let last = 0;
function frame(now) {
  const dt = Math.min(.05, Math.max(0, last ? (now - last) / 1000 : .016)); last = Math.max(last, now);
  for (const p of parts.values()) if (p.type === 'pump') {                          // spin up / coast down
    const target = S.on[p.key] ? S.set[p.key] : 0, tau = target > p.speed ? PUMP_SPIN_UP_S : PUMP_COAST_S;
    p.speed += (target - p.speed) * (1 - Math.exp(-dt / tau)); if (!target && p.speed < .002) p.speed = 0;
    p.angle += p.speed * PUMP_REV_PER_S * Math.PI * 2 * dt; if (p.rotor) p.rotor.rotation.x = p.angle;
  }
  solve();
  const px = pxPerUnit * renderer.getPixelRatio();
  for (const p of pipes) pipeUpdate(p, dt, p.flow ? 500 * Math.max(.3, Math.max(parts.get('p1').speed, parts.get('p2').speed)) : 0, AIR[p.air], px, now);
  for (const p of parts.values()) {
    if (p.wheel) p.wheel.rotation.y += (p.wheelTarget - p.wheel.rotation.y) * Math.min(1, dt * 6);
    const target = !S.running ? LAMP_IDLE : isOn(p) ? (p.lamp.on || LAMP_ON) : LAMP_OFF;
    p.lamp.color.lerp(target, Math.min(1, dt * 8)); p.lamp.ring.material.color.copy(p.lamp.color); p.lamp.glow.material.color.copy(p.lamp.color);
  }
  for (const k in DIAMONDS) tint(DIAMONDS[k], flowsAt(DIAMOND_PIPE[k]));
  for (const g of gauges) g.set(pipes.some(p => (p.from === g.pipeKey || p.to === g.pipeKey) && p.reached) ? 160 : 20);
  for (const pl of plumes) plumeUpdate(pl, dt, pl.key());
  const anyFlow = pipes.some(p => p.flow);
  for (const { b, sc } of batteries) b.update(dt, S.running ? (anyFlow ? .45 : .25) : 0, px * sc);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
