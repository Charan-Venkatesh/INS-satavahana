// Shared transparent-pipe and internal-airflow rendering for Circuit Atlas.
// Pipes follow the caller's connection route (rounded elbows only smooth the
// existing corners). Particles never animate on their own: every frame the
// caller sets pipe.flow / pipe.intensity / pipe.speed from its solver or
// simulation state, and update() moves the particles along the pipe centreline.
import * as T from 'three';

const UP = new T.Vector3(0, 1, 0), X_AXIS = new T.Vector3(1, 0, 0);
const tmpP = new T.Vector3(), tmpD = new T.Vector3(), tmpN = new T.Vector3(), tmpB = new T.Vector3();
const tmpQ = new T.Quaternion(), tmpS = new T.Vector3(), tmpM = new T.Matrix4(), tmpC = new T.Color();
const HIDDEN = new T.Matrix4().makeScale(0, 0, 0);
// Pipe states set by the caller (pipe.state): moving air, air held under pressure
// with no flow (closed valve / dead end), or no air (not connected to a supply).
export const FLOW_STATE_COLORS = { flowing: null, pressurised: '#ffb020', empty: '#7d8890' };
let dashTexture = null;
function getDashTexture() {
  if (dashTexture) return dashTexture;
  const c = document.createElement('canvas'); c.width = 64; c.height = 4;
  const g = c.getContext('2d'), grad = g.createLinearGradient(0, 0, 64, 0);
  grad.addColorStop(0, 'rgba(255,255,255,0)'); grad.addColorStop(.55, 'rgba(255,255,255,.25)'); grad.addColorStop(.85, 'rgba(255,255,255,1)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 4);
  dashTexture = new T.CanvasTexture(c); dashTexture.wrapS = T.RepeatWrapping; dashTexture.colorSpace = T.SRGBColorSpace;
  return dashTexture;
}

// Polyline route -> centreline curve with short rounded elbows at each corner.
export function pipeCurve(points, bend = .45) {
  const path = new T.CurvePath();
  let start = points[0].clone();
  for (let i = 1; i < points.length; i++) {
    const corner = points[i];
    if (i === points.length - 1) {
      if (start.distanceTo(corner) > 1e-4) path.add(new T.LineCurve3(start, corner.clone()));
      break;
    }
    const next = points[i + 1];
    const r = Math.min(bend, start.distanceTo(corner) / 2, corner.distanceTo(next) / 2);
    const inPoint = corner.clone().addScaledVector(start.clone().sub(corner).normalize(), r);
    const outPoint = corner.clone().addScaledVector(next.clone().sub(corner).normalize(), r);
    if (start.distanceTo(inPoint) > 1e-4) path.add(new T.LineCurve3(start, inPoint));
    path.add(new T.QuadraticBezierCurve3(inPoint, corner.clone(), outPoint));
    start = outPoint;
  }
  return path;
}

// Arc-length lookup table so particles never call curve.getPoint() per frame.
function sampleCurve(curve, length) {
  const n = Math.max(8, Math.ceil(length * 24));
  const pos = new Float32Array((n + 1) * 3), tan = new Float32Array((n + 1) * 3);
  const nor = new Float32Array((n + 1) * 3), bin = new Float32Array((n + 1) * 3);
  for (let i = 0; i <= n; i++) {
    const u = i / n, p = curve.getPointAt(u), t = curve.getTangentAt(u).normalize();
    const nrm = new T.Vector3().crossVectors(t, Math.abs(t.y) > .9 ? X_AXIS : UP).normalize();
    const b = new T.Vector3().crossVectors(t, nrm).normalize();
    p.toArray(pos, i * 3); t.toArray(tan, i * 3); nrm.toArray(nor, i * 3); b.toArray(bin, i * 3);
  }
  return { n, pos, tan, nor, bin };
}

function readSample(s, u) {
  const f = Math.min(.999999, Math.max(0, u)) * s.n, i = Math.floor(f), k = f - i, a = i * 3, b = a + 3;
  tmpP.set(s.pos[a] + (s.pos[b] - s.pos[a]) * k, s.pos[a + 1] + (s.pos[b + 1] - s.pos[a + 1]) * k, s.pos[a + 2] + (s.pos[b + 2] - s.pos[a + 2]) * k);
  const j = (k < .5 ? i : i + 1) * 3;
  tmpD.set(s.tan[j], s.tan[j + 1], s.tan[j + 2]);
  tmpN.set(s.nor[j], s.nor[j + 1], s.nor[j + 2]);
  tmpB.set(s.bin[j], s.bin[j + 1], s.bin[j + 2]);
}

export class AirflowNetwork {
  constructor(parent, { radius = .19, particleRadius = .042, shellOpacity = .16 } = {}) {
    this.parent = parent;
    this.radius = radius;
    this.particleRadius = particleRadius;
    this.pipes = [];
    this.time = 0;
    this.group = new T.Group();
    parent.add(this.group);
    this.geometries = [];
    this.materials = [];
    this.shellMaterial = this.own(new T.MeshPhysicalMaterial({ color: '#c4f4ea', metalness: 0, roughness: .05, clearcoat: 1, clearcoatRoughness: .06, transparent: true, opacity: shellOpacity, depthWrite: false, side: T.DoubleSide }));
    // Inner bore surface: with the outer shell it gives the tube a visible wall thickness.
    this.boreMaterial = this.own(new T.MeshPhysicalMaterial({ color: '#c4f4ea', metalness: 0, roughness: .1, transparent: true, opacity: shellOpacity * .55, depthWrite: false, side: T.BackSide }));
    this.gain = 1;
    this.collarMaterial = this.own(new T.MeshStandardMaterial({ color: '#b7c8c2', metalness: .82, roughness: .24 }));
    this.collarGeometry = this.ownGeo(new T.CylinderGeometry(radius * 1.24, radius * 1.24, .11, 20));
    this.nozzleGeometry = this.ownGeo(new T.CylinderGeometry(radius * 1.7, radius * 1.15, .3, 20, 1, true));
  }

  own(material) { this.materials.push(material); return material; }
  ownGeo(geometry) { this.geometries.push(geometry); return geometry; }

  // points: route polyline. The particle direction is points[0] -> points[last]
  // for positive flow and reversed for negative flow.
  // Options: radius / innerRadius (wall thickness), bend radius, or a prebuilt curve (hoses).
  // rim: draw a thin outer rim (outline) that carries the flow-state colour, so the
  // tube's real outside diameter reads clearly at any zoom. dash: spacing (scene
  // units) of the moving flow-direction dashes on the air core.
  addPipe(points, { color = '#a1ffcd', collars = true, outlet = false, inset = .75, radius = this.radius, innerRadius = null, bend = .45, curve: given = null, segmentsPerUnit = 10, shell: drawShell = true, rim = 0, dash = 0 } = {}) {
    const curve = given || pipeCurve(points, bend), length = curve.getLength();
    if (length < 1e-3) return null;
    const segments = Math.max(24, Math.ceil(length * segmentsPerUnit));
    // drawShell false: the component model supplies its own transparent wall; only the air is added.
    const shell = drawShell ? new T.Mesh(this.ownGeo(new T.TubeGeometry(curve, segments, radius, 20, false)), this.shellMaterial) : null;
    if (shell) { shell.renderOrder = 3; this.group.add(shell); }
    if (innerRadius && drawShell) {
      const bore = new T.Mesh(this.ownGeo(new T.TubeGeometry(curve, segments, innerRadius, 20, false)), this.boreMaterial);
      bore.renderOrder = 2;
      this.group.add(bore);
    }
    let rimMesh = null;
    if (rim && drawShell) {
      rimMesh = new T.Mesh(this.ownGeo(new T.TubeGeometry(curve, segments, radius + rim, 20, false)), this.own(new T.MeshBasicMaterial({ color: '#5b6870', side: T.BackSide, transparent: true, opacity: .75, depthWrite: false, toneMapped: false })));
      rimMesh.renderOrder = 1; rimMesh.userData.rim = true;
      this.group.add(rimMesh);
    }
    const coreMaterial = this.own(new T.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: T.AdditiveBlending, toneMapped: false }));
    if (dash) { coreMaterial.map = getDashTexture().clone(); coreMaterial.map.needsUpdate = true; coreMaterial.map.repeat.set(Math.max(1, Math.round(length / dash)), 1); }
    const core = new T.Mesh(this.ownGeo(new T.TubeGeometry(curve, segments, (innerRadius || radius) * (dash ? .6 : .45), 8, false)), coreMaterial);
    core.renderOrder = 2;
    core.visible = false;
    this.group.add(core);
    const samples = sampleCurve(curve, length);
    const inner = innerRadius || radius;
    const pipe = { curve, length, samples, color: new T.Color(color), flow: 0, speed: 1, intensity: 0, phase: Math.random(), core, shell, rim: rimMesh, state: null, dashMap: coreMaterial.map, radius, maxRadial: Math.max(0, inner * .78 - this.particleRadius * inner / this.radius), particleScale: inner / this.radius };
    if (collars && drawShell) {
      // Connector collars where the pipe leaves each component, plus elbow joints.
      const at = [];
      if (length > inset * 2 + .3) at.push(inset / length, 1 - inset / length);
      let travelled = 0;
      for (const c of curve.curves) {
        const l = c.getLength();
        if (c.isQuadraticBezierCurve3) at.push(travelled / length, (travelled + l) / length);
        travelled += l;
      }
      for (const u of at) {
        readSample(samples, u);
        const ring = new T.Mesh(this.collarGeometry, this.collarMaterial);
        ring.position.copy(tmpP);
        ring.quaternion.setFromUnitVectors(UP, tmpD);
        ring.castShadow = true;
        this.group.add(ring);
      }
    }
    if (outlet) {
      // Open discharge nozzle at the end of an exhaust route.
      readSample(samples, 1);
      const nozzle = new T.Mesh(this.nozzleGeometry, this.collarMaterial);
      nozzle.material = this.own(new T.MeshStandardMaterial({ color: '#b7c8c2', metalness: .82, roughness: .24, side: T.DoubleSide }));
      nozzle.position.copy(tmpP).addScaledVector(tmpD, -.1);
      nozzle.quaternion.setFromUnitVectors(UP, tmpD);
      this.group.add(nozzle);
    }
    pipe.count = Math.min(90, Math.max(14, Math.round(length / radius * .9)));
    pipe.seeds = Array.from({ length: pipe.count }, (_, j) => ({
      angle: j * 2.39996,
      radial: Math.sqrt(((j * 7) % 11) / 11),
      jitter: ((j * 13) % 17) / 17,
      wobble: .6 + ((j * 5) % 7) / 7
    }));
    this.pipes.push(pipe);
    return pipe;
  }

  // Allocate the shared instanced particle and direction-marker meshes once all pipes exist.
  finalize() {
    const total = this.pipes.reduce((sum, p) => sum + p.count, 0);
    let offset = 0;
    for (const p of this.pipes) { p.offset = offset; offset += p.count; }
    const particleMaterial = this.own(new T.MeshBasicMaterial({ color: '#ffffff', toneMapped: false }));
    this.particles = new T.InstancedMesh(this.ownGeo(new T.SphereGeometry(1, 8, 6)), particleMaterial, Math.max(1, total));
    this.particles.instanceMatrix.setUsage(T.DynamicDrawUsage);
    this.particles.frustumCulled = false;
    this.particles.renderOrder = 1;
    for (let i = 0; i < Math.max(1, total); i++) { this.particles.setMatrixAt(i, HIDDEN); this.particles.setColorAt(i, tmpC.set('#ffffff')); }
    this.group.add(this.particles);
    const arrowMaterial = this.own(new T.MeshBasicMaterial({ color: '#ffffff', toneMapped: false, transparent: true, opacity: .85, depthWrite: false }));
    this.arrows = new T.InstancedMesh(this.ownGeo(new T.ConeGeometry(this.radius * .5, this.radius * 1.3, 12)), arrowMaterial, Math.max(1, this.pipes.length * 2));
    this.arrows.instanceMatrix.setUsage(T.DynamicDrawUsage);
    this.arrows.frustumCulled = false;
    this.arrows.renderOrder = 2;
    for (let i = 0; i < Math.max(1, this.pipes.length * 2); i++) { this.arrows.setMatrixAt(i, HIDDEN); this.arrows.setColorAt(i, tmpC.set('#ffffff')); }
    this.group.add(this.arrows);
  }

  update(dt) {
    if (!this.particles) this.finalize();
    this.time += dt;
    this.pipes.forEach((pipe, index) => {
      const active = Math.abs(pipe.flow) > 1e-5, dir = Math.sign(pipe.flow) || 1;
      const intensity = Math.max(0, Math.min(1, pipe.intensity));
      if (active) pipe.phase = ((pipe.phase + dir * dt * pipe.speed / pipe.length) % 1 + 1) % 1;
      const held = !active && pipe.state === 'pressurised', dash = pipe.dashMap;
      pipe.core.visible = active || (held && !!dash);
      if (dash) {
        // Dashes travel with the air; still air under pressure shows a faint steady core.
        const want = held ? null : dash;
        if (pipe.core.material.map !== want) { pipe.core.material.map = want; pipe.core.material.needsUpdate = true; }
        if (active) dash.offset.x = -pipe.phase * dash.repeat.x;
        pipe.core.material.color.copy(held ? tmpC.set(FLOW_STATE_COLORS.pressurised) : pipe.color);
        pipe.core.material.opacity = active ? (.35 + intensity * .5) * this.gain : held ? .22 : 0;
      } else pipe.core.material.opacity = active ? (.05 + intensity * .16) * this.gain : 0;
      if (pipe.rim) {
        const c = pipe.state ? (FLOW_STATE_COLORS[pipe.state] || pipe.color) : null;
        if (c) pipe.rim.material.color.set(c); else pipe.rim.material.color.set(this.rimColor || '#5b6870');
      }
      // Density is proportional to flow, so decaying flow visibly thins out.
      const visible = active ? Math.max(1, Math.ceil(pipe.count * intensity)) : 0;
      tmpC.copy(pipe.color).multiplyScalar((.55 + .45 * intensity) * this.gain);
      const pr = this.particleRadius * pipe.particleScale, maxRadial = pipe.maxRadial;
      const streak = pr * (1.6 + Math.min(3.2, pipe.speed / pipe.radius * .01));
      for (let j = 0; j < pipe.count; j++) {
        const id = pipe.offset + j;
        if (j >= visible) { this.particles.setMatrixAt(id, HIDDEN); continue; }
        const seed = pipe.seeds[j];
        readSample(pipe.samples, ((pipe.phase + (j + seed.jitter * .6) / pipe.count) % 1 + 1) % 1);
        // Subtle bounded swirl: radial offset always stays inside the pipe wall.
        const angle = seed.angle + Math.sin(this.time * seed.wobble * 2.2 + j) * .45 * intensity;
        const radial = seed.radial * maxRadial;
        tmpP.addScaledVector(tmpN, Math.cos(angle) * radial).addScaledVector(tmpB, Math.sin(angle) * radial);
        tmpQ.setFromUnitVectors(UP, tmpD.multiplyScalar(dir));
        tmpS.set(pr, streak, pr);
        this.particles.setMatrixAt(id, tmpM.compose(tmpP, tmpQ, tmpS));
        this.particles.setColorAt(id, tmpC);
      }
      for (let k = 0; k < 2; k++) {
        const id = index * 2 + k;
        if (!active || intensity < .05 || pipe.length < pipe.radius * 12) { this.arrows.setMatrixAt(id, HIDDEN); continue; }
        readSample(pipe.samples, ((pipe.phase * .5 + k / 2 + .25) % 1 + 1) % 1);
        tmpQ.setFromUnitVectors(UP, tmpD.multiplyScalar(dir));
        const ks = pipe.particleScale;
        this.arrows.setMatrixAt(id, tmpM.compose(tmpP, tmpQ, tmpS.set(ks, ks, ks)));
        this.arrows.setColorAt(id, tmpC);
      }
    });
    this.particles.instanceMatrix.needsUpdate = true;
    this.particles.instanceColor.needsUpdate = true;
    this.arrows.instanceMatrix.needsUpdate = true;
    this.arrows.instanceColor.needsUpdate = true;
  }

  // Theme hook: pipe wall tint/opacity and airflow colour/brightness.
  setAppearance({ tint, opacity, air, gain = 1, rim }) {
    if (rim) this.rimColor = rim;
    if (tint) { this.shellMaterial.color.set(tint); this.boreMaterial.color.set(tint); }
    if (opacity !== undefined) { this.shellMaterial.opacity = opacity; this.boreMaterial.opacity = opacity * .55; }
    if (air) for (const p of this.pipes) { p.color.set(air); p.core.material.color.set(air); }
    this.gain = gain;
  }

  dispose() {
    this.parent.remove(this.group);
    this.geometries.forEach(g => g.dispose());
    this.materials.forEach(m => m.dispose());
    this.pipes.forEach(p => p.dashMap?.dispose());
    this.particles?.dispose();
    this.arrows?.dispose();
  }
}
