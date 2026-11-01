// The cooling-water pump set (pump_set.glb, modelled and rendered in Blender: ../pump-blender/build_pump.py), loaded once
// and cloned for each pump on screen 3. glTF axes: Y up, pump axis along X (motor at −X, end suction at +X), discharge
// up. Named nodes: "Shaft" (spins about X), "Suction_Port" / "Discharge_Port" (flange faces).
import {GLTFLoader} from './assets/loaders/GLTFLoader.js';

let loading = null;
export const loadPump = () => loading ||= new Promise((resolve, reject) =>
  new GLTFLoader().load('assets/pump_set.glb', gltf => resolve(gltf.scene), undefined, reject));
export const PUMP_REV_PER_S = 6, PUMP_SPIN_UP_S = 1.2, PUMP_COAST_S = 2.5;   // on-screen rotation at full speed, time constants
