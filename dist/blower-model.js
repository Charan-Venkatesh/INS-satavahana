// The supplied P-31 blower model (blower_assembly.glb), loaded once and cloned for every blower on screen.
// glTF axes: Y up, shaft along X, inlet eye on +X, outlet duct pointing +Y. The impeller is the node "Rotor".
import {GLTFLoader} from './assets/loaders/GLTFLoader.js';

let loading = null;
export const loadBlower = () => loading ||= new Promise((resolve, reject) =>
  new GLTFLoader().load('assets/blower_assembly.glb', gltf => resolve(gltf.scene), undefined, reject));
export const MAX_REV_PER_S = 4, SPIN_UP_S = 1.4, COAST_S = 3.0;   // on-screen rotation at 100 %, time constants
