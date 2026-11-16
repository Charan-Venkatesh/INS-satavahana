import './offline-support.js';
import {createBatteryBubbles} from './battery-bubbles.js';
import {branchFlow,density} from './airflow-model.js';
import {openBatteryDetail,photoLid,createVapour,battery3D,facing} from './battery-detail.js';
import * as T from 'three';
import {AirflowNetwork} from './airflow3d.js';
import {GLTFLoader} from './assets/loaders/GLTFLoader.js';
const host=document.querySelector('#viewport'),labelsRoot=document.querySelector('#labels'),circuit=document.querySelector('#circuit');
const scene=new T.Scene();scene.background=null;
const camera=new T.OrthographicCamera(-950,950,800,-800,1,10000);camera.position.set(0,3000,0);camera.up.set(0,0,-1);camera.lookAt(0,0,0);
let renderer,webglAvailable=true;try{if(new URLSearchParams(location.search).get('static')==='1')throw new Error('Static display requested');renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true})}catch{webglAvailable=false;const image=document.createElement('img');image.src='assets/assembled-top-view.jpg';image.alt='Assembled 3D battery agitation circuit, fixed top view';image.className='static-render';renderer={domElement:image,shadowMap:{},setPixelRatio(){},setSize(){},render(){}};document.body.classList.add('static-mode');document.querySelector('#flow-status').textContent='STATIC 3D VIEW';document.querySelector('#air').disabled=true;document.querySelector('#labels-toggle').disabled=true}renderer.setPixelRatio(sharpRatio());renderer.outputColorSpace=T.SRGBColorSpace;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;host.append(renderer.domElement);
scene.add(new T.HemisphereLight(0xffffff,0x9ab7a3,2.5));const sun=new T.DirectionalLight(0xffffff,3);sun.position.set(-500,1600,-700);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-1100,right:1100,top:900,bottom:-900,near:1,far:4000});sun.shadow.bias=-.0002;scene.add(sun);
const physical=(color,metalness=.1,roughness=.4)=>new T.MeshStandardMaterial({color,metalness,roughness});
const mat={ivory:physical('#f2eed8'),white:physical('#f8fbf5'),edge:physical('#849d94',.65),ink:physical('#335e50'),black:physical('#293e37'),metal:physical('#b7c7bf',.8,.27),yellow:physical('#dcbc55'),blue:physical('#3f9ed4'),green:physical('#4f9c77')};
const pos=(x,z,h=24)=>new T.Vector3(x-900,h,z-750);
function mesh(parent,geometry,material,x=0,y=0,z=0){const m=new T.Mesh(geometry,material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function box(parent,w,d,h,material,x=0,y=0,z=0){const shape=new T.Shape();const r=Math.min(6,w/10,d/10);shape.moveTo(-w/2+r,-d/2);shape.lineTo(w/2-r,-d/2);shape.quadraticCurveTo(w/2,-d/2,w/2,-d/2+r);shape.lineTo(w/2,d/2-r);shape.quadraticCurveTo(w/2,d/2,w/2-r,d/2);shape.lineTo(-w/2+r,d/2);shape.quadraticCurveTo(-w/2,d/2,-w/2,d/2-r);shape.lineTo(-w/2,-d/2+r);shape.quadraticCurveTo(-w/2,-d/2,-w/2+r,-d/2);const geo=new T.ExtrudeGeometry(shape,{depth:h,bevelEnabled:true,bevelThickness:2,bevelSize:2,bevelSegments:3,steps:1});geo.rotateX(-Math.PI/2);return mesh(parent,geo,material,x,y,z)}
function cyl(parent,r,h,ma,x=0,y=0,z=0,n=48){return mesh(parent,new T.CylinderGeometry(r,r,h,n),ma,x,y,z)}
function line(parent,points,ma=mat.ink,r=2.7){for(let i=1;i<points.length;i++){const a=new T.Vector3(...points[i-1]),b=new T.Vector3(...points[i]),m=mesh(parent,new T.CylinderGeometry(r,r,a.distanceTo(b),10),ma);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),b.sub(a).normalize())}}
const ground=mesh(scene,new T.PlaneGeometry(2100,1700),new T.ShadowMaterial({opacity:.11}),0,-14,0);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;
const network=new AirflowNetwork(scene,{radius:13,particleRadius:3,shellOpacity:.23});network.shellMaterial.color.set('#97c7bd');network.boreMaterial.color.set('#b7dbd2');const pipes=[];
function pipe(points,branch='common',kind='main',radius=13){const p=network.addPipe(points.map(p=>pos(p[0],p[1],p[2]??23)),{radius,innerRadius:radius*.78,bend:22,collars:false,segmentsPerUnit:.3,color:'#258ed0',rim:1.2,dash:60});if(p){p.branch=branch;p.kind=kind;p.speed=90;p.intensity=.9;p.flow=1;pipes.push(p)}return p}
// Dark studio look for the circuit (as in the reference rendering): dark backdrop, light drawing labels.
{const st=document.createElement('style');st.textContent='#circuit{background:radial-gradient(ellipse 75% 70% at 50% 42%,#ffffff 0%,#eef6fb 38%,#d3e6f2 75%,#bcd6e8 100%)}#circuit .drawing-label{color:#1f3a33}#circuit .drawing-label small{color:#4d6168}#circuit .drawing-label.muted{color:#6b7a80}#circuit .canvas-info{display:none}body.inspector-hidden aside{display:none!important}body.inspector-hidden main{grid-template-columns:minmax(0,1fr)!important}aside#inspector{display:none!important}main{grid-template-columns:minmax(0,1fr)!important}html body #controls-toggle{display:none!important}header{position:relative}.header-title{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:clamp(17px,2.2vw,60px);font-weight:700;letter-spacing:.3px;color:#1f3a33;white-space:nowrap;pointer-events:none}@media(max-width:520px){.header-title{left:16px;transform:translateY(-50%);font-size:16px}}.part-button,.part-button:hover,.part-button.selected,.part-button:focus{box-shadow:none!important;background:transparent!important;outline:none!important}#view-top,#view-front,#fullscreen{display:none!important}body.front-only .top-actions>:not(#start){display:none!important}body.front-only aside{display:none!important}body.front-only main{grid-template-columns:minmax(0,1fr)!important}';document.head.append(st)}
const branches={port:{open:false,auto:false,hand:false,filter:false,value:0,wheel:0},stbd:{open:false,auto:false,hand:false,filter:false,value:0,wheel:0}};
// Every part starts OFF; after Start each is switched ON by hand (shut-off first). Pause/Reset turn them all OFF.
const allOff=side=>Object.assign(branches[side],{auto:false,hand:false,filter:false});
// Auto reducer ON reduces the supply to 0.45 kg/cm²; OFF (double-click to switch) bypasses it, so the full
// 45 kg/cm² supply passes on. Air passes whenever the shut-off is open.
// With the auto reducer bypassed the 45 kg/cm² also passes the hand reducer (it cannot regulate that inlet).
// A branch's circuit is ON only after Start with its shut-off open. While it is OFF the auto reducer and safety
// valve show OFF, and trying to switch them on shows a red warning instead.
const circuitOn=side=>flowing&&branches[side].open,tapAt={};
// One tap switches a shut-off / auto reducer / hand reducer; a second tap within 0.5 s (a double-tap) is ignored.
function tapSwitch(side,type){const k=side+type,now=performance.now();if(now-(tapAt[k]||0)<500)return;tapAt[k]=now;const b=branches[side];
 action(type==='shutoff'?(b.open?'close':'open'):type==='auto'?(b.auto?'autooff':'autoon'):type==='filter'?(b.filter?'filteroff':'filteron'):(b.hand?'handoff':'handon'))}
let warnTimer=0;
function circuitWarning(side,valve=false,lock=''){const B=side==='port'?'PORT':'STBD',msg=lock?'⚠ '+B+' '+lock+' is locked ON while the shut-off valve is open — close the '+B+' shut-off valve first.':valve?'⚠ Circuit is OFF — press Start to turn the circuit ON before opening the '+B+' shut-off valve.':'⚠ Circuit is OFF — '+(flowing?'open the '+B+' shut-off valve first.':'press Start and open the '+B+' shut-off valve first.');
 let el=document.querySelector('#circuit-warning');if(!el){el=document.createElement('div');el.id='circuit-warning';el.setAttribute('role','alert');
  el.style.cssText='position:absolute;left:50%;top:18px;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;border:1.5px solid #e74c3c;background:#1d2224ee;color:#ff5a4d;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center';
  document.querySelector('#circuit').append(el)}
 el.textContent=msg;el.style.opacity='1';clearTimeout(warnTimer);warnTimer=setTimeout(()=>{el.style.opacity='0'},4000)}
const SUPPLY=45,passes=side=>branches[side].open,autoOut=side=>branches[side].auto?AUTO_SET:SUPPLY,handActive=side=>branches[side].auto;
// PG reading: hand reducer ON gives its setting (0.13–0.16), OFF leaves the auto reducer's 0.45 kg/cm².
const AUTO_SET=.45,DIAL_MAX=.6,pgLabels={};
const pgValue=side=>{const b=branches[side];return flowing&&passes(side)?(handActive(side)?b.value:autoOut(side)):0};
// Render density for crisp dials: the screen's pixel density × any pinch zoom, capped at 4×.
const PHONE=matchMedia('(pointer: coarse)').matches;   // phones render at most 2× so the scene fits in their graphics memory
function sharpRatio(){return Math.min(PHONE?2:4,(devicePixelRatio||1)*(window.visualViewport?.scale||1))}
window.visualViewport?.addEventListener('resize',()=>{if(typeof layout==='function')layout()});
function dialFace(c,size,value=null){const k0=size/256;c.clearRect(0,0,size,size);c.save();c.scale(k0,k0);c.strokeStyle='#1f3a33';c.fillStyle='#1f3a33';c.lineWidth=2.4;c.textAlign='center';c.font='bold 19px Arial';for(let k=0;k<=12;k++){const a=(135+k*22.5)*Math.PI/180,r1=k%2?88:82;c.beginPath();c.moveTo(128+96*Math.cos(a),128+96*Math.sin(a));c.lineTo(128+r1*Math.cos(a),128+r1*Math.sin(a));c.stroke();if(k%2===0)c.fillText((k*.05).toFixed(1),128+66*Math.cos(a),134+66*Math.sin(a))}c.font='bold 13px Arial';c.fillText('kg/cm²',128,190);
 if(value!==null){const over=value>DIAL_MAX;c.fillStyle='#f4f7f6';c.strokeStyle=over?'#c0392b':'#1f3a33';c.lineWidth=1.6;c.beginPath();c.roundRect(98,148,60,24,5);c.fill();c.stroke();c.fillStyle=over?'#c0392b':'#14302a';c.font='bold 16px Arial';c.fillText(over?value.toFixed(1):value.toFixed(3),128,169)}
 c.restore()}
const dialCanvases={};
let viewMode='top';
let fitBox=null,pitPressure=0;
// Interactive backdrop: a live shader floor under the circuit. Soft sea-blue light drifts slowly over a faint
// engineering grid; a touch sends out a ripple and a soft light follows the pointer. The whole floor reacts to the
// circuit: cool blue wash after Start, green glow while a hand reducer is in range, red pulse while the safety
// valves vent. It is drawn first and fills the camera frame exactly; it never moves the circuit.
let backdrop=null;const RIPPLES=8;
// palettes: centre colour, edge colour, grid colour, grid strength
const BACKDROPS={sea:[[.995,1,1],[.76,.86,.93],[.11,.37,.56],1],navy:[[.16,.24,.33],[.04,.08,.13],[.55,.75,.95],1.6],steel:[[.86,.88,.89],[.58,.62,.65],[.20,.24,.27],1.3],blueprint:[[.13,.33,.58],[.05,.17,.35],[.85,.93,1],2.2],sand:[[1,.99,.96],[.89,.86,.80],[.45,.38,.28],.9]};
function makeBackdrop(){
 const u={uTime:{value:0},uCenter:{value:new T.Vector2()},uHalf:{value:new T.Vector2(1,1)},uFlow:{value:0},uOk:{value:0},uVent:{value:0},
  uMouse:{value:new T.Vector3(0,0,0)},uC0:{value:new T.Vector3()},uC1:{value:new T.Vector3()},uG:{value:new T.Vector3()},uGa:{value:1},uRip:{value:Array.from({length:RIPPLES},()=>new T.Vector4(0,0,-99,0))}};
 const mat=new T.ShaderMaterial({uniforms:u,depthWrite:false,depthTest:false,
  vertexShader:'varying vec2 vP;void main(){vec4 w=modelMatrix*vec4(position,1.);vP=w.xz;gl_Position=projectionMatrix*viewMatrix*w;}',
  fragmentShader:`varying vec2 vP;uniform vec3 uC0,uC1,uG;uniform float uGa;uniform float uTime,uFlow,uOk,uVent;uniform vec2 uCenter,uHalf;uniform vec3 uMouse;uniform vec4 uRip[${RIPPLES}];
float gridLine(vec2 p,float s){vec2 g=abs(fract(p/s-.5)-.5)/fwidth(p/s);return 1.-min(min(g.x,g.y),1.);}
void main(){vec2 q=(vP-uCenter)/uHalf;float t=uTime;
 float r=length(q*vec2(.85,1.));
 vec3 col=mix(uC0,uC1,smoothstep(.05,1.35,r));
 // two slow drifting light pools
 vec2 a=vec2(.55*sin(t*.071),.35*cos(t*.053)),b=vec2(-.6*cos(t*.047),.4*sin(t*.061+1.3));
 col+=vec3(.05,.07,.08)*exp(-dot(q-a,q-a)*2.2)+vec3(.02,.05,.08)*exp(-dot(q-b,q-b)*2.6);
 // circuit state washes
 float wave=.55+.45*sin(t*.9-r*5.);
 col=mix(col,vec3(.70,.85,.98),.30*uFlow*wave);
 col=mix(col,vec3(.80,.96,.86),.22*uOk*(.6+.4*sin(t*2.)));
 col=mix(col,vec3(1.,.80,.78),.38*uVent*(.55+.45*sin(t*3.6)));
 // grid, brighter near the pointer and the ripples
 float lit=0.;
 float md=length(vP-uMouse.xy);lit+=uMouse.z*exp(-md*md/(260.*260.));
 col+=vec3(.06,.10,.13)*uMouse.z*exp(-md*md/(420.*420.));
 for(int i=0;i<${RIPPLES};i++){vec4 R=uRip[i];float age=t-R.z;if(age<0.||age>2.4)continue;float d=length(vP-R.xy),rad=age*520.,f=1.-age/2.4;
  float ring=exp(-pow((d-rad)/34.,2.))*f*f;col=mix(col,vec3(.38,.72,.97),ring*.45*R.w);lit+=ring*1.6+exp(-d*d/(rad*rad+1.))*f*.4;}
 float g=gridLine(vP,24.)*.035+gridLine(vP,120.)*.075;
 col=mix(col,uG,g*uGa*(1.+2.5*lit));
 col*=1.-.10*smoothstep(.7,1.5,r);
 gl_FragColor=vec4(col,1.);}`});
 const m=new T.Mesh(new T.PlaneGeometry(1,1),mat);m.rotation.x=-Math.PI/2;m.renderOrder=-10;m.frustumCulled=false;m.userData.noFit=true;m.position.y=-400;scene.add(m);
 const P=BACKDROPS[new URLSearchParams(location.search).get('bg')]||BACKDROPS.sea;u.uC0.value.set(...P[0]);u.uC1.value.set(...P[1]);u.uG.value.set(...P[2]);u.uGa.value=P[3];
 backdrop={mesh:m,u,next:0};
 const toWorld=e=>{const r=host.getBoundingClientRect(),v=new T.Vector3((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height*2-1),0).unproject(camera);return v};
 circuit.addEventListener('pointerdown',e=>{const v=toWorld(e);u.uRip.value[backdrop.next].set(v.x,v.z,u.uTime.value,1);backdrop.next=(backdrop.next+1)%RIPPLES},{capture:true,passive:true});
 circuit.addEventListener('pointermove',e=>{const v=toWorld(e);u.uMouse.value.x=v.x;u.uMouse.value.y=v.z;backdrop.hover=e.pointerType==='mouse'?1:.0},{passive:true});
 circuit.addEventListener('pointerleave',()=>{backdrop.hover=0},{passive:true});
}
function paintBackdrop(){if(!webglAvailable)return;if(!backdrop)makeBackdrop();const m=backdrop.mesh,w=camera.right-camera.left,h=camera.top-camera.bottom;
 m.scale.set(w*1.02,h*1.02,1);m.position.x=camera.position.x;m.position.z=camera.position.z;backdrop.u.uCenter.value.set(camera.position.x,camera.position.z);backdrop.u.uHalf.value.set(w/2,h/2)}
function backdropUpdate(dt){if(!backdrop)return;const u=backdrop.u,k=Math.min(1,dt*2.5),ease=(o,t)=>o.value+=(t-o.value)*k;u.uTime.value+=dt;
 ease(u.uFlow,flowing?1:0);ease(u.uOk,['port','stbd'].some(s=>circuitOn(s)&&handInBand(s))?1:0);ease(u.uVent,pitVenting()||['port','stbd'].some(venting)?1:0);
 u.uMouse.value.z+=((backdrop.hover||0)-u.uMouse.value.z)*k}   // fitBox: camera frame around the real circuit; pitPressure: battery pit setting, kg/cm²
let flowing=false,selected=null,labelVisible=true;/* client: label the diagram (labels always on) */const parts=new Map(),labelNodes=[],hotspots=[],infoNodes={},wheels={},needles={},bodyGroups={};
function label(text,x,z,align='left',sub='',classes=''){const el=document.createElement('div');el.className='drawing-label '+align+' '+classes;const strong=document.createElement('span');strong.textContent=text;el.append(strong);if(sub){const sm=document.createElement('small');sm.textContent=sub;el.append(sm)}labelsRoot.append(el);labelNodes.push({el,x,z});return el}
function part(id,type,side,x,z,title,size=108){const g=new T.Group();g.position.copy(pos(x,z));scene.add(g);const data={id,type,side,x,z,title,group:g,size};parts.set(id,data);bodyGroups[id]=g;const b=document.createElement('button');b.className='part-button';b.dataset.part=id;b.setAttribute('aria-label',title);b.setAttribute('aria-pressed','false');b.addEventListener('click',event=>{select(id);if(['shutoff','auto','filter'].includes(type))tapSwitch(side,type);if(type==='hand'&&event.detail===0)handToggle(side)});if(type==='hand')handPressable(b,side);if(type==='safety')b.addEventListener('click',()=>{if(!circuitOn(side))circuitWarning(side)});if(['shutoff','auto','hand','filter','pg','safety'].includes(type))b.style.minWidth=b.style.minHeight='44px';   // stacked parts: areas must not overlap
 labelsRoot.append(b);hotspots.push({el:b,x,z,size});return g}
function squareSymbol(g,symbol){box(g,112,112,25,mat.edge,0,-3);box(g,101,101,27,mat.white,0,0);if(symbol==='V')line(g,[[-45,32,-44],[0,32,44],[45,32,-44]]);else{line(g,[[-44,32,-44],[44,32,44]]);line(g,[[44,32,-44],[-44,32,44]])}}
function gauge(g,side){cyl(g,56,19,mat.metal,0,6);cyl(g,49,3,mat.white,0,17);const cv=document.createElement('canvas');cv.width=256;cv.height=256;const c=cv.getContext('2d');c.clearRect(0,0,256,256);c.strokeStyle='#477262';c.fillStyle='#477262';dialFace(c,256);const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;const face=mesh(g,new T.PlaneGeometry(98,98),new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}),0,20);face.rotation.x=-Math.PI/2;const needle=new T.Group();needle.position.y=24;g.add(needle);line(needle,[[0,0,0],[0,0,-36]],mat.ink,2.5);cyl(needle,5,3,mat.ink);needles[side]=needle}
function handWheel(g,side){const wheel=new T.Group();wheel.position.set(side==='port'?-87:87,23,0);g.add(wheel);const torus=mesh(wheel,new T.TorusGeometry(24,4,10,36),mat.black);torus.rotation.y=Math.PI/2;line(wheel,[[0,-21,0],[0,21,0]],mat.black,3);line(wheel,[[0,0,-21],[0,0,21]],mat.black,3);const sign=side==='port'?1:-1;line(g,[[sign*-55,22,0],[sign*-87,22,0]],mat.metal,5);wheels[side]=wheel}
function battery(g){box(g,292,152,36,mat.ivory,0,-16);box(g,302,160,8,mat.ivory,0,22);for(const row of [-1,1])for(let k=0;k<6;k++){const x=(-.4+.16*k)*292,z=row*.26*152;cyl(g,14,4,mat.metal,x,35,z);cyl(g,k===0||k===5?11.5:9.5,5,mat.black,x,40,z,k===0||k===5?6:48);cyl(g,5.5,5,mat.metal,x,45,z,6)}for(let k=1;k<5;k++)cyl(g,7,6,mat.metal,(-.4+.16*k)*292,36,0,6);cyl(g,8,9,mat.black,132,39,0);cyl(g,4.5,4,mat.blue,132,46,0)}
// Fixed plan follows the supplied drawing. Supply divides into two mirrored branches.
pipe([[960,170],[845,170],[845,300],[350,300]],'port','header');pipe([[845,300],[1420,300]],'stbd','header');
label('MP Air 45 kg/cm²',1050,110,'left');label('PORT',280,130,'center','','muted');label('STBD',1490,130,'center','','muted');
for(const [side,x] of [['port',350],['stbd',1420]]){
 const P=side==='port',B=P?'Port':'STBD',out=P?-1:1,inner=P?1:-1,pgX=P?165:1605,cellX=P?650:1120;
 let g=part(side+'-shutoff','shutoff',side,x,300,'Shut-off valve · '+B,92);cyl(g,55,17,mat.metal,0,4);cyl(g,48,7,mat.white,0,17);const wheel=new T.Group();wheel.position.y=24;g.add(wheel);line(wheel,[[-43,0,0],[43,0,0]]);line(wheel,[[0,0,-43],[0,0,43]]);g.userData.shutoffWheel=wheel;wheel.rotation.y=Math.PI/4;
 label('Shut-off valve',x+out*78,300,P?'right':'left');
 pipe([[x,353],[x,401]],side);g=part(side+'-auto','auto',side,x,460,'Automatic reducer · '+B,92);squareSymbol(g,'V');label('Auto Reducer',x+inner*90,455,P?'left':'right','0.45 kg/cm²');
 pipe([[x,517],[x,584]],side);g=part(side+'-hand','hand',side,x,642,'Hand reducer · '+B,96);squareSymbol(g,'X');handWheel(g,side);label('Hand Reducer',x+inner*90,638,P?'left':'right','0.13–0.16 kg/cm²');
 // The whole hand reducer is one tap area: X body, brass bonnet and T-handle (from 48 inboard to 158 outboard).
 {const hb=hotspots[hotspots.length-1];hb.x=x+out*55;hb.size=210;hb.h=96}
 pipe([[x,699],[x,758]],side);g=part(side+'-filter','filter',side,x,820,'Filter · '+B,80);const diamond=box(g,88,88,27,mat.edge);diamond.rotation.y=Math.PI/4;const face=box(g,80,80,29,mat.white,0,2);face.rotation.y=Math.PI/4;label('Filter',x+inner*100,820,P?'left':'right');
 pipe([[x,883],[x,1080]],side);pipe([[x,950],[pgX,950],[pgX,842]],side,'gauge',10);g=part(side+'-pg','pg',side,pgX,790,'Pressure gauge · '+B,80);gauge(g,side);pgLabels[side]=label('PG',pgX+inner*66,878,P?'left':'right','0.000').querySelector('small');
 pipe([[x,1080],[x+inner*345,1080]],side,'cells');pipe([[x,1080],[x,1190]],side,'safety');
 g=part(side+'-safety','safety',side,x,1240,'Safety valve · '+B,115);g.userData.pendingSafety=true;cyl(g,50,22,mat.yellow,0,8);label('Safety Valve',x,1340,'center','0.2 kg/cm²');
 g=part(side+'-battery','battery',side,cellX,1252,'Battery cell · '+B,310);battery(g);g.rotation.y=P?Math.PI:0;label('To the Cells',cellX,1140,'center');
 // "i" beside the 3D battery opens the transparent battery with bubble physics.
 {const info=document.createElement('button');info.className='battery-info';info.textContent='i';info.setAttribute('aria-label','Battery details · '+B);info.onclick=()=>openBattery(side);labelsRoot.append(info);labelNodes.push(infoNodes[side]={el:info,x:cellX+(P?120:-120),z:1310})}
 const inletX=cellX+(P?-132:132);
 pipe([[inletX,1080],[inletX,1222],[inletX,1252,68]],side,'battery',8);
 // Additional manifold outlet stubs indicate the drawing's distribution rail.
 for(let k=0;k<6;k++){const sx=x+inner*(65+k*43);pipe([[sx,1080],[sx,1100]],side,'stub',5)}
}
// Drawing boundary, behind the components.
const boundaryGeo=new T.BufferGeometry().setFromPoints([pos(100,1020,1),pos(1710,1020,1)]);const boundary=new T.Line(boundaryGeo,new T.LineDashedMaterial({color:'#adc1b1',dashSize:18,gapSize:14}));boundary.computeLineDistances();scene.add(boundary);
part('main-pipe','pipe','common',1120,185,'Transparent air pipe',150);{const pb=hotspots.pop();pb.el.remove()};
network.finalize();

const notes={pipe:'Transparent pipe walls reveal the internal air passage and moving air particles. The pipe route stays fixed. Shared junctions have continuous hollow bores and the tube ends meet the component ports.',shutoff:'Isolates this branch. The top cross is the shut-off symbol from your drawing.',auto:'Square top with the V symbol only. The component body and symbol stay fixed.',hand:'Square top with an X symbol. Only the outboard side adjustment handle rotates when adjusted.',filter:'A solid, shallow diamond body reproduces the exact filter symbol in plan.',pg:'The dial faces straight up so the reading stays visible in the locked top view.',safety:'Uses the perforated circular part you supplied for the safety-valve position. The yellow cap belongs on the battery lid.',battery:'The lid follows your battery photo: two rows of six terminal positions, red and yellow caps, a clear cap, and the air connection in the existing lid opening.'};
const titles={pipe:'Transparent air pipe',shutoff:'Shut-off valve',auto:'Automatic reducer',hand:'Hand reducer',filter:'Air filter',pg:'Pressure gauge',safety:'Safety valve',battery:'Battery cell'};
const num={pipe:'08',shutoff:'01',auto:'02',hand:'03',filter:'04',pg:'05',safety:'06',battery:'07'};
function details(){const el=document.querySelector('#detail');if(!selected){el.innerHTML='<div class="welcome-number">02<span style="font-size:18px"> branches</span></div><span class="selected-badge">FIXED TOP VIEW</span><h2>One supply.<br>Two branches.</h2><p class="desc">Touch any component to see its purpose and controls. The drawing stays in place.</p><div class="feature-list"><div><span>Supply, per drawing</span><b>45 kg/cm²</b></div><div><span>Automatic reducer</span><b>0.45 kg/cm²</b></div><div><span>Hand reducer range</span><b>0.13–0.16 kg/cm²</b></div><div><span>Safety setting</span><b>0.2 kg/cm²</b></div></div><div class="eyebrow" style="margin-top:14px">CALCULATED AIRFLOW (LIVE)</div><div class="feature-list" id="airflow-readout"></div><p class="tiny">Air enters at the MP air inlet and moves only inside the pipes. Particle speed follows the calculated velocity (log scale); colour shows pressure: dark blue 45, blue 0.45, cyan-blue 0.13–0.16 kg/cm². Gauge lines and stubs are dead ends: pressurised, no flow. Pipe and orifice sizes are estimates.</p>';readoutAt=0;return}
 const p=parts.get(selected),b=branches[p.side],side=p.side==='port'?'PORT':p.side==='stbd'?'STBD':'COMMON';let controls='',rows='';
 if(p.type==='pipe'){rows='<div><span>Pipe walls</span><b>Transparent</b></div><div><span>Visible air</span><b>Calculated flow, see below</b></div><div><span>Main pipe display size</span><b>50 mm · estimated</b></div>';controls='<div class="feature-list" id="airflow-readout"></div><img class="detail-image" src="assets/transparent-straight-pipe.png" alt="Transparent pipe with visible air"><div class="control-row"><button data-action="toggleair" class="primary">Pause / resume air</button></div>'}
 if(p.type==='shutoff'){rows='<div><span>Demonstration state</span><b'+(flowing?'>'+(b.open?'Open':'Closed'):' style="color:#e74c3c">OFF · circuit is off — press Start first')+'</b></div>';controls='<div class="control-row"><button data-action="open" class="'+(b.open?'primary':'')+'">ON · Open</button><button data-action="close" class="'+(!b.open?'primary':'')+'">OFF · Close</button></div>'}
 if(p.type==='auto'){rows='<div><span>State</span><b'+(circuitOn(p.side)?'>'+(b.auto?'ON · green, reduces to 0.45 kg/cm²':'OFF · red, bypassed: 45 kg/cm² passes'):' style="color:#e74c3c">OFF · circuit is off')+'</b></div><div><span>Drawing setpoint</span><b>0.45 kg/cm²</b></div><div><span>Top geometry</span><b>Square + V</b></div>';controls='<div class="control-row"><button data-action="autoon" class="'+(b.auto?'primary':'')+'">ON</button><button data-action="autooff" class="'+(!b.auto?'primary':'')+'">OFF</button></div><p class="tiny">Tap the auto reducer to switch it ON or OFF.</p>'}
 if(p.type==='hand'){controls='<div class="control-row"><button data-action="handon" class="'+(b.hand?'primary':'')+'">ON · In line</button><button data-action="handoff" class="'+(!b.hand?'primary':'')+'">OFF · Bypassed</button></div><div class="value-readout"><span>Selected setting</span><strong>'+b.value.toFixed(3)+'</strong></div><div class="control-row"><button data-action="decrease" '+(!b.hand||b.value<=.130?'disabled':'')+'>− Decrease</button><button data-action="increase" '+(!b.hand||b.value>=.160?'disabled':'')+'>+ Increase</button></div><p class="tiny">Tap the hand reducer to switch it ON (green, handle straight) or OFF (red, handle across).</p>';rows='<div><span>State</span><b>'+(!b.auto?'Passing 45 kg/cm² (auto reducer OFF)':b.hand?'ON · PG reads 0.13–0.16':'OFF · PG reads 0.45')+'</b></div><div><span>Drawing range</span><b>0.13–0.16 kg/cm²</b></div><div><span>Moving part</span><b>Side handle only</b></div>'}
 if(p.type==='pg'){rows='<div><span>Reading</span><b>'+pgValue(p.side).toFixed(3)+' kg/cm²</b></div><div><span>Set by</span><b>'+(b.hand?'Hand reducer ON (0.13–0.16)':'Auto reducer, hand OFF (0.45)')+'</b></div><div><span>Dial scale</span><b>0–0.6 kg/cm²</b></div><div><span>Dial orientation</span><b>Face up / top view</b></div>';controls='<p class="tiny">Reading follows the demonstration controls. It is not a measured pressure or a validated plant calculation.</p>'}
 if(p.type==='filter'){rows='<div><span>State</span><b'+(circuitOn(p.side)?'>'+(b.filter?'ON · green':'OFF · red'):' style="color:#e74c3c">OFF · circuit is off')+'</b></div><div><span>Top geometry</span><b>Diamond symbol</b></div><div><span>Connection</span><b>Hand reducer → cells</b></div>';controls='<div class="control-row"><button data-action="filteron" class="'+(b.filter?'primary':'')+'">ON</button><button data-action="filteroff" class="'+(!b.filter?'primary':'')+'">OFF</button></div><p class="tiny">Tap the filter to switch it ON or OFF.</p>'}
 if(p.type==='safety'){const manual=performance.now()<(releasing[p.side]||0),lift=pgValue(p.side)>SAFETY_SET,on=venting(p.side);rows='<div><span>Drawing setpoint</span><b>0.2 kg/cm²</b></div><div><span>Line pressure</span><b>'+pgValue(p.side).toFixed(3)+' kg/cm²</b></div><div><span>Valve state</span><b'+(on?'>Open · venting through the holes':' style="color:#e74c3c">OFF · circuit is off')+'</b></div><div><span>Relief flow (calculated)</span><b>'+(air[p.side]?.mRelief?(air[p.side].mRelief*60000).toFixed(1)+' g/min':'0')+'</b></div><div><span>Outlet</span><b>Bell-shaped perforated head · air leaves through the holes</b></div>';controls='<p class="tiny">Both safety valves vent whenever their branch has air. Higher line pressure (hand reducer OFF, 0.45 kg/cm²) gives a stronger release.</p><img class="detail-image" src="assets/safety-release-detail.jpg" alt="User-supplied perforated circular safety part"><p class="tiny">The yellow battery cap is kept on the battery. This position uses the separate perforated part you supplied; visible air exits through its actual perforations when the release effect is on and this branch is open. Hidden valve internals are not modeled.</p>'}
 if(p.type==='battery'){rows='<div><span>Terminals</span><b>2 rows × 6</b></div><div><span>Air connection</span><b>Separate lid inlet</b></div><div><span>Selected inlet setting</span><b>'+b.value.toFixed(3)+' kg/cm²</b></div><div><span>Bubble calibration</span><b>Awaiting flow / diffuser data</b></div>';controls='<div class="control-row"><button data-action="battery3d" class="primary">ⓘ Open battery 3D view</button></div><img class="detail-image" src="assets/battery-photo-top.jpg" alt="Battery top matching photo 31844"><p class="tiny">The yellow cap stays on the battery lid. One representative battery per branch shows the air connection; actual bank quantity and physical routing remain unverified.</p>'}
 el.innerHTML='<div class="part-index">'+num[p.type]+' / '+side+' BRANCH</div><h2>'+titles[p.type]+'</h2><p class="desc">'+notes[p.type]+'</p><div class="feature-list">'+rows+'</div>'+controls;
 el.querySelectorAll('[data-action]').forEach(button=>button.onclick=()=>action(button.dataset.action));
}
function select(id){selected=id;
 // On narrow screens the panel floats over the circuit: dock it left for STBD parts so the right side stays visible.
 const left=parts.get(id)?.side==='stbd',panel=document.querySelector('#inspector');panel.style.left=left?'12px':'';panel.style.right=left?'auto':'';document.querySelector('#component-select').value=id;document.body.classList.remove('inspector-hidden');document.body.classList.add('inspector-open');document.querySelector('#controls-toggle').setAttribute('aria-expanded','true');hotspots.forEach(h=>{const active=h.el.dataset.part===id;h.el.classList.toggle('selected',active);h.el.setAttribute('aria-pressed',String(active))});details()}
const releasing={port:0,stbd:0},SAFETY_SET=.2;
// Shut-off handwheel: opening turns it two full turns anticlockwise (seen from above), closing turns it back;
// the wheel eases to its target instead of jumping. Touching the valve toggles it.
// hand reducer T-bar: straight along the shaft (ON) or across it (OFF), eased; rad/s
const TEE_ON=Math.PI/2,TEE_SPEED=2.6*Math.PI,teeHandles={};
const WHEEL_SHUT=Math.PI/4,WHEEL_OPEN=-4*Math.PI,WHEEL_SPEED=3*Math.PI;   // shut rests as ×, open as + (≈2 turns apart); rad/s
const turnWheel=side=>{const w=bodyGroups[side+'-shutoff']?.userData.shutoffWheel;if(w)w.userData.target=branches[side].open?WHEEL_OPEN:WHEEL_SHUT};
// Auto reducer status colour: its square V cap is green while the auto reducer is ON (reducing) and red when it is
// OFF (bypassed); double-click to switch. The colour fades between states and pulses while air is passing through.
const autoLamps={},LAMP_ON=new T.Color('#22b45a'),LAMP_OFF=new T.Color('#d23b33'),LAMP_IDLE=new T.Color('#8e9ca3');   // light backdrop: idle in grey so it still shows

function autoReducerLamps(){model3d.traverse(n=>{const m=/^(port|stbd)[ _](?:square[ _]symbol[ _]cap[ _](v|x)|diamond[ _]filter[ _]top)/i.exec(n.name);if(!m||!n.isMesh)return;
 n.material=n.material.clone();n.material.color.copy(LAMP_OFF);if(n.material.emissive)n.material.emissive.copy(LAMP_OFF);(!m[2]?filterLamps:m[2].toLowerCase()==='v'?autoLamps:handLamps)[m[1].toLowerCase()]={mesh:n,col:LAMP_IDLE.clone()}})}
// Air filter diamond: green while its circuit is ON (Start + shut-off open), red while it is OFF.
const filterLamps={};
// Hand reducer X cap: green while ON (in line), red when OFF (bypassed) or its circuit is off; pulses while air passes.
const handLamps={};
function lampUpdate(dt){const t=performance.now()/1000,k=Math.min(1,dt*5),target=(on,ready)=>!flowing?LAMP_IDLE:on&&ready?LAMP_ON:LAMP_OFF;
 for(const [lamps,key] of [[autoLamps,'auto'],[handLamps,'hand'],[filterLamps,'filter']])for(const side in lamps){const l=lamps[side],on=key==='hand'?handInBand(side):branches[side][key],ready=key==='hand'?true:circuitOn(side);
  l.col.lerp(key==='hand'?(branches[side].value<=0?LAMP_IDLE:on?LAMP_ON:LAMP_OFF):target(on,ready),k);l.mesh.material.color.copy(l.col);
  if(l.mesh.material.emissive){l.mesh.material.emissive.copy(l.col);l.mesh.material.emissiveIntensity=key==='hand'?(on?.3+.35*(.5+.5*Math.sin(t*4)):branches[side].value>0?.3:.05):!flowing?.05:.25+(on&&ready?.35*(.5+.5*Math.sin(t*4)):0)}}
 }
function wheelUpdate(dt){lampUpdate(dt);for(const side in teeHandles){const t=teeHandles[side],d=handAngle(side)-t.rotation.y,s=TEE_SPEED*dt;t.rotation.y+=Math.abs(d)<=s?d:Math.sign(d)*s}for(const side of ['port','stbd']){const w=bodyGroups[side+'-shutoff']?.userData.shutoffWheel;if(!w||w.userData.target==null)continue;
 const d=w.userData.target-w.rotation.y,step=WHEEL_SPEED*dt;w.rotation.y+=Math.abs(d)<=step?d:Math.sign(d)*step}}
// Battery detail starts at this branch's PG reading, or the hand reducer setting when no air is flowing.
const openBattery=side=>openBatteryDetail({side,pressure:pgValue(side)||(branches[side].hand?branches[side].value:AUTO_SET)});
// As requested, both safety valves vent whenever their branch has air (Start + shut-off open), at any line pressure.
const venting=side=>flowing&&passes(side)&&pgValue(side)>SAFETY_SET,pitVenting=()=>pitPressure>SAFETY_SET;   // relief lifts above 0.2: hand reducer OFF (0.45) or auto bypass (45) vents, hand ON (0.13–0.16) stays shut
function action(a){if(a==='toggleair'){document.querySelector('#air').click();return}if(!selected)return;const p=parts.get(selected),b=branches[p.side];if(a==='battery3d'){openBattery(p.side);return}if(a==='open'&&!flowing){circuitWarning(p.side,true);details();return}   // FR-SI-01: no opening while the circuit is OFF
 if(a==='open'||a==='close'){b.open=a==='open';b.auto=b.filter=b.open;turnWheel(p.side);showRunState()}if(a==='handon'||a==='handoff'){if(!circuitOn(p.side)){circuitWarning(p.side);details();return}b.hand=a==='handon'}if(a==='autoon'||a==='autooff'){if(!circuitOn(p.side)){circuitWarning(p.side);details();return}if(a==='autooff'&&b.open){circuitWarning(p.side,false,'auto reducer');details();return}b.auto=a==='autoon'}if(a==='filteron'||a==='filteroff'){if(!circuitOn(p.side)){circuitWarning(p.side);details();return}if(a==='filteroff'&&b.open){circuitWarning(p.side,false,'filter');details();return}b.filter=a==='filteron'}if(a==='increase'||a==='decrease'){setHand(p.side,b.value+(a==='increase'?HAND_STEP:-HAND_STEP))}if(a==='release')releasing[p.side]=performance.now()<(releasing[p.side]||0)?0:Infinity;details()}
function updateFlow(){for(const p of pipes){const b=branches[p.branch];const open=!b||passes(p.branch);const isSafety=p.kind==='safety';const active=flowing&&(p.kind==='header'||open)&&(!isSafety||venting(p.branch));p.flow=active?1:0;p.intensity=active?.85:0;p.state=active?'flowing':'empty'}for(const side of ['port','stbd']){const v=pgValue(side),over=v>DIAL_MAX,t=v.toFixed(3)+(over?' OVER':'');{const d=dialCanvases[side],s=v.toFixed(3);if(d&&d.shown!==s){d.shown=s;dialFace(d.cv.getContext('2d'),2048,v);d.tex.needsUpdate=true}}if(pgLabels[side]&&pgLabels[side].textContent!==t){pgLabels[side].textContent=t;pgLabels[side].style.color=over?'#c0392b':''}needles[side].rotation.y=-(Math.min(v,DIAL_MAX*1.04)/DIAL_MAX)*Math.PI*1.5+Math.PI*.75-(needles[side].userData.nativeBaseline||0);const w=wheels[side],axis=w.userData.nativeAxis||'x',target=(w.userData.restAngle||0)+branches[side].wheel;w.rotation[axis]+=(target-w.rotation[axis])*.16}}
function showRunState(){
 for(const id of ['#air','#start']){const button=document.querySelector(id);button.innerHTML=flowing?'<span>Ⅱ</span> Pause':'<span>▶</span> Start';button.setAttribute('aria-pressed',String(flowing));button.disabled=!webglAvailable}
 document.querySelector('#flow-status').textContent=webglAvailable?(flowing?'PORT '+(branches.port.open?'ON':'OFF')+' · STBD '+(branches.stbd.open?'ON':'OFF'):'READY · PRESS START'):'STATIC 3D VIEW';document.querySelector('.live-dot').style.background=flowing?'#1caf93':'#97a89c';
}
document.querySelector('#air').onclick=()=>{flowing=!flowing;if(!flowing)for(const side of ['port','stbd']){allOff(side);if(branches[side].open){branches[side].open=false;turnWheel(side)}}showRunState();if(flowing)select('port-shutoff');else if(selected)details()};
document.querySelector('#start').onclick=()=>document.querySelector('#air').click();
showRunState();
document.querySelector('#labels-toggle').onclick=()=>{labelVisible=!labelVisible;circuit.classList.toggle('hide-labels',!labelVisible);document.querySelector('#labels-toggle').textContent=labelVisible?'☷  Hide drawing labels':'☷  Show drawing labels';document.querySelector('#labels-toggle').setAttribute('aria-pressed',String(labelVisible))};
document.querySelector('#controls-toggle').onclick=()=>{const hidden=document.body.classList.remove('inspector-hidden');const open=document.body.classList.toggle('inspector-open');document.querySelector('#controls-toggle').setAttribute('aria-expanded',String(open))};
function clearSelection(){document.body.classList.remove('inspector-open');document.querySelector('#controls-toggle').setAttribute('aria-expanded','false');selected=null;document.querySelector('#component-select').value='';hotspots.forEach(h=>{h.el.classList.remove('selected');h.el.setAttribute('aria-pressed','false')});details()}
// × hides the Component Inspector on every screen size (on wide screens the circuit takes its column);
// Controls or touching a part brings it back.
document.querySelector('#clear').onclick=()=>{clearSelection();document.body.classList.add('inspector-hidden')};
document.querySelector('#reset').onclick=()=>{setView('top');for(const side of ['port','stbd']){Object.assign(branches[side],{open:false,auto:false,hand:false,filter:false,value:0,wheel:0});bodyGroups[side+'-shutoff'].userData.shutoffWheel.userData.target=WHEEL_SHUT;releasing[side]=0}flowing=false;setPit(0);handStop('port');handStop('stbd');setHand('port',0);setHand('stbd',0);showRunState();clearSelection()};
document.querySelector('#reference').onclick=()=>document.querySelector('#reference-dialog').showModal();document.querySelector('#close-reference').onclick=()=>document.querySelector('#reference-dialog').close();
document.querySelector('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{document.querySelector('#fullscreen').textContent='Use browser full screen'}};document.addEventListener('fullscreenchange',()=>document.querySelector('#fullscreen').textContent=document.fullscreenElement?'⛶ Exit full screen':'⛶ Full screen');
// No OrbitControls, drag handlers, zoom or camera animation. Resize only fits the same plan.
function screenPoint(x,z){const v=pos(x,z,45).project(camera);const r=host.getBoundingClientRect(),parent=circuit.getBoundingClientRect();return {x:r.left-parent.left+(v.x+1)*r.width/2,y:r.top-parent.top+(1-v.y)*r.height/2}}
function layout(){if(renderer.getPixelRatio&&renderer.getPixelRatio()!==sharpRatio())renderer.setPixelRatio(sharpRatio());const w=host.clientWidth,h=host.clientHeight,aspect=w/h;const planW=fitBox?fitBox.w:1900,planH=fitBox?fitBox.h:1490;const height=Math.max(planH,planW/aspect);if(fitBox&&viewMode!=='front'){camera.position.set(fitBox.cx,3000,fitBox.cz);camera.lookAt(fitBox.cx,0,fitBox.cz)}camera.left=-height*aspect/2;camera.right=height*aspect/2;camera.top=height/2;camera.bottom=-height/2;camera.updateProjectionMatrix();camera.updateMatrixWorld();renderer.setSize(w,h);for(const l of labelNodes){const p=screenPoint(l.x,l.z);l.el.style.left=p.x+'px';l.el.style.top=p.y+'px'}circuit.style.setProperty('--k',String(w/(height*aspect)));paintBackdrop();for(const l of hotspots){const p=screenPoint(l.x,l.z),k=w/(height*aspect),size=l.size*k;Object.assign(l.el.style,{left:p.x+'px',top:p.y+'px',width:size+'px',height:(l.h||l.size)*k+'px'})}}
if('ResizeObserver' in window)new ResizeObserver(layout).observe(host);else window.addEventListener('resize',layout);host.addEventListener('wheel',e=>e.preventDefault(),{passive:false});host.addEventListener('contextmenu',e=>e.preventDefault());
// Load the actual assembled Blender scene. The earlier layout geometry is hidden.
let actualModelReady=false,nativeAir=null,nativeAirFrames=[],nativeAirPhase=0;const nativeReleaseStreaks=[];
const loading=document.createElement('div');loading.id='assembly-loading';loading.textContent='Loading assembled 3D parts…';circuit.append(loading);
for(const p of parts.values())p.group.visible=false;network.group.visible=false;
// Air particles move along the real pipe paths at the speed the airflow model gives for their pipe section,
// coloured by pressure stage; dead-end lines stay pressurised but still. Speeds are shown on a log scale
// (0.01–10 m/s would otherwise be invisible or a blur); the panel lists the true values.
let air={port:null,stbd:null,mTotal:0};
const STAGE_COLOR={hi:new T.Color('#2a5cff'),mid:new T.Color('#1fa0ff'),lo:new T.Color('#2fd8ff'),relief:new T.Color('#46c8ff')};
const visSpeed=v=>v>0?.35+.7*Math.log10(1+v/.01):0;           // 0.001 → 0.38, 0.04 → 0.84, 0.6 → 1.6, 3.7 → 2.2
function computeAir(){
 const f=side=>{const b=branches[side];return branchFlow({open:flowing&&passes(side),auto:autoOut(side),hand:handActive(side),handSet:b.value,safety:SAFETY_SET,batteries:2})};
 air={port:f('port'),stbd:f('stbd')};air.mTotal=air.port.mBranch+air.stbd.mBranch;
}
function classifyAir(list){
 // stage of each particle from where its path runs: station positions along the branch (world z)
 for(const p of list){const fr=p.frames,z=fr.reduce((s,a)=>s+a[2],0)/fr.length,xs=fr.map(a=>a[0]),flat=Math.max(...xs)-Math.min(...xs)>20;
  p.stage=p.kind==='header'?(p.branch==='common'?'common':'header'):p.kind==='main'?(flat&&Math.abs(z-330)<15?'manifold':z<-290?'hp':z<-108?'auto':z<70?'hand':'filter'):p.kind==='battery'?'hose':p.kind;
  p.ph=Math.random()*fr.length}
 // Each pipe section had only 3–5 particles, which read as gaps; add two evenly phased copies of every
 // in-pipe particle so the air forms a continuous stream. Copies follow their source's path (hose paths swap per view).
 const base=list.filter(p=>p.kind!=='release');
 for(const p of base)for(const k of [1,2])list.push({...p,src:p,ph:(p.ph+k*p.frames.length/3)%p.frames.length});
}
// Clear, larger pipes: the model's merged pipe mesh is hidden and every section is rebuilt as a clear tube
// along the path its air follows, PIPE_SCALE × the model's diameter (main 50 mm), with rounded joints at
// bends and tees. Display size only; the airflow model keeps the real 1/2" bore.
const PIPE_SCALE=1.7,PIPE_R={main:15.6,gauge:7.8,stub:4.4};
// Studio reflections for the glass: long soft-box strips overhead (both directions, so pipes running either way
// catch a streak) in a dim room, prefiltered once with PMREM.
function glassEnvironment(){
 const s=new T.Scene();s.background=new T.Color('#0b0e10');const pm=new T.PMREMGenerator(renderer),lit=new T.MeshBasicMaterial({color:new T.Color(6,6,6),side:T.DoubleSide});
 for(const [w,d,x,z] of [[14,.5,0,-2],[.5,14,-2.5,0],[14,.25,0,3],[.25,14,3,0]]){const m=new T.Mesh(new T.PlaneGeometry(w,d),lit);m.rotation.x=Math.PI/2;m.position.set(x,6,z);s.add(m)}
 const env=pm.fromScene(s,.02).texture;pm.dispose();return env;
}
// Streamlines: bright blue light trails running through each glass pipe (as in the reference rendering). Each
// section gets a bundle of filaments spread across the bore with a gentle twist; a moving bright head with a fading
// tail travels along each one at the section's calculated speed. They appear only where released air has reached.
const pipeSections=[],STREAMS_PER=22;
function buildStreamlines(){
 const group=new T.Group();group.name='AIR STREAMLINES';group.renderOrder=4;scene.add(group);
 for(const sec of pipeSections){
  const [branch]=sec.key.split(':'),mat=new T.ShaderMaterial({transparent:true,depthWrite:false,
   uniforms:{uPhase:{value:0},uAlpha:{value:0},uReach:{value:0},uLen:{value:1},uColor:{value:new T.Color('#1593e6')}},
   vertexShader:'attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
   fragmentShader:'uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.14+.86*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,uColor*.55,head*.6),a);}'});
  // polyline length and a perpendicular frame per segment
  const P=sec.pts;let total=0;for(let i=1;i<P.length;i++)total+=P[i].distanceTo(P[i-1]);mat.uniforms.uLen.value=total;
  for(let k=0;k<STREAMS_PER;k++){
   const seed=(k*37%STREAMS_PER)/STREAMS_PER,ang0=k/STREAMS_PER*Math.PI*2,rr=sec.rad*(.25+.55*((k*53%97)/97)),pos=[],us=[],seeds=[];let u=0;
   for(let i=1;i<P.length;i++){const a=P[i-1],b=P[i],d=b.clone().sub(a),L=d.length();d.normalize();
    const n1=new T.Vector3(0,1,0).cross(d);if(n1.lengthSq()<1e-6)n1.set(1,0,0);n1.normalize();const n2=d.clone().cross(n1).normalize();
    const steps=Math.max(2,Math.ceil(L/5));for(let j=(i===1?0:1);j<=steps;j++){const t=j/steps,uu=u+L*t,ang=ang0+uu*.02;
     const p=a.clone().addScaledVector(d,L*t).addScaledVector(n1,Math.cos(ang)*rr).addScaledVector(n2,Math.sin(ang)*rr);pos.push(p.x,p.y,p.z);us.push(uu);seeds.push(seed)}
    u+=L}
   const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('aU',new T.Float32BufferAttribute(us,1));g.setAttribute('aSeed',new T.Float32BufferAttribute(seeds,1));
   group.add(new T.Line(g,mat))}
  // dark-blue flow band inside the bore (as on screens 2 and 3): reads clearly on large displays where 1-px trails vanish
  const band=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:mat.uniforms,
   vertexShader:'varying float vU;uniform float uLen;void main(){vU=uv.x*uLen;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
   fragmentShader:'uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;varying float vU;void main(){if(vU/uLen>uReach)discard;float x=fract(vU/60.-uPhase*.35);float b=smoothstep(0.,.25,x)*(1.-smoothstep(.45,.75,x));vec3 deep=vec3(.03,.16,.55);float a=min(1.,uAlpha)*(.62+.3*b);if(a<.01)discard;gl_FragColor=vec4(mix(deep,deep*.45,b),a);}'});
  const curve=new T.CurvePath();for(let i=1;i<P.length;i++)if(P[i].distanceTo(P[i-1])>.01)curve.add(new T.LineCurve3(P[i-1],P[i]));
  if(curve.curves.length){const tube=new T.Mesh(new T.TubeGeometry(curve,Math.max(8,curve.curves.length*4),sec.rad*.72,12,false),band);tube.renderOrder=3;tube.frustumCulled=false;group.add(tube)}
  sec.branch=branch;sec.mat=mat;
 }
}
function streamlineUpdate(dt){const hi=density(45);
 for(const sec of pipeSections){if(!sec.mat)continue;const b=branches[sec.branch],a=air[sec.branch],st=sec.stage;
  const on=flowing&&(st==='common'||st==='header'||(!!b&&b.open))&&(st!=='safety'||venting(sec.branch));
  const vel=!on?0:st==='common'?Math.max(HEADER_SHOW,air.mTotal/(hi*1.96e-4)):st==='header'?Math.max(HEADER_SHOW,b.open?a.v.header:0):(['gauge','stub'].includes(st)?0:(a.v[st]||0));
  const idx=STAGE_ORDER[st]??7,front=idx<2?fill.common-idx:Math.min(fill.common-idx,fill[sec.branch]-(idx-2)),reach=Math.max(0,Math.min(1,front));
  const u=sec.mat.uniforms;u.uPhase.value+=dt*visSpeed(vel)*.9*FLOW_SLOW;u.uReach.value=on?reach:0;u.uAlpha.value=on?(vel>0?1:.4):0;
  const sp=['common','header','hp'].includes(st)?SUPPLY:st==='auto'?autoOut(sec.branch):b&&handActive(sec.branch)?b.value:autoOut(sec.branch);
  u.uColor.value.set(st==='safety'?'#1a8fc4':sp>=10?'#2457d6':sp>=.3?'#1f86d1':'#1aa3c4')}
}
function clearPipes(list,oldMaterial){
 model3d.traverse(n=>{if(n.isMesh&&n.material===oldMaterial)n.visible=false});
 // Glass: a faint clear body plus an additive reflection layer, so highlights and bright rims stay at full
 // strength instead of being dimmed by the body's transparency. Front faces with depth writes: where tubes and
 // joint spheres overlap, the wall is drawn once, not stacked.
 const env=glassEnvironment(),steel=new T.MeshStandardMaterial({color:'#c4cbd0',metalness:.95,roughness:.28,envMap:env,envMapIntensity:1.2}),bolt=new T.MeshStandardMaterial({color:'#8f979c',metalness:.9,roughness:.35,envMap:env});
 const mat=new T.MeshPhysicalMaterial({color:'#7aa6c0',transparent:true,opacity:.38,roughness:.02,metalness:0,side:T.FrontSide,depthWrite:true});
 const shine=new T.MeshPhysicalMaterial({color:'#000000',roughness:.02,metalness:0,envMap:env,envMapIntensity:1.1,transparent:true,blending:T.AdditiveBlending,depthWrite:false,side:T.FrontSide});
 const best={};
 for(const p of list){if(['release','battery'].includes(p.kind))continue;const key=p.branch+':'+p.stage;
  let run=[p.frames[0]],runs=[run];for(let i=1;i<p.frames.length;i++){const a=p.frames[i-1],b=p.frames[i];if(Math.hypot(b[0]-a[0],b[1]-a[1],b[2]-a[2])<25)run.push(b);else runs.push(run=[b])}
  for(const r of runs){const len=r.reduce((s,q,i)=>i?s+Math.hypot(q[0]-r[i-1][0],q[1]-r[i-1][1],q[2]-r[i-1][2]):0,0);if(!best[key]||len>best[key].len)best[key]={len,r,stage:p.stage}}}
 const group=new T.Group();group.name='CLEAR LARGE PIPES';group.renderOrder=5;scene.add(group);
 for(const {r,stage} of Object.values(best)){if(r.length<2)continue;
  const rad=(stage==='gauge'?PIPE_R.gauge:stage==='stub'?PIPE_R.stub:PIPE_R.main)*PIPE_SCALE;
  // keep corners, drop points that continue straight on
  const pts=[new T.Vector3(...r[0])];for(let i=1;i<r.length-1;i++){const a=new T.Vector3(...r[i-1]),b=new T.Vector3(...r[i]),c=new T.Vector3(...r[i+1]);if(b.clone().sub(a).normalize().dot(c.clone().sub(b).normalize())<.995)pts.push(b)}pts.push(new T.Vector3(...r[r.length-1]));
  const path=new T.CurvePath();for(let i=1;i<pts.length;i++)path.add(new T.LineCurve3(pts[i-1],pts[i]));
  pipeSections.push({key:Object.keys(best).find(k=>best[k].r===r),stage,pts,rad});
  const tube=new T.TubeGeometry(path,Math.max(8,pts.length*6),rad,32,false),ball=new T.SphereGeometry(rad,32,16);
  group.add(new T.Mesh(tube,mat),new T.Mesh(tube,shine));
  for(const q of pts)for(const m of [mat,shine]){const j=new T.Mesh(ball,m);j.position.copy(q);group.add(j)}
  for(const [q,o] of [[pts[0],pts[1]],[pts[pts.length-1],pts[pts.length-2]]])flange(q,o,rad);
 }
 buildStreamlines();
 // Bolted steel flange at a pipe end q (o: the next point inward), set back slightly into the pipe; one per joint.
 function flange(q,o,rad){if(flangesAt.some(p=>p.distanceTo(q)<rad))return;flangesAt.push(q.clone());
  const d=o.clone().sub(q).normalize(),f=new T.Group();f.position.copy(q).addScaledVector(d,rad*.35);f.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d);group.add(f);
  const ring=new T.Mesh(new T.CylinderGeometry(rad*1.5,rad*1.5,rad*.32,40),steel);f.add(ring);
  for(let k=0;k<6;k++){const a=k/6*Math.PI*2,b=new T.Mesh(new T.CylinderGeometry(rad*.13,rad*.13,rad*.5,12),bolt);b.position.set(Math.cos(a)*rad*1.24,0,Math.sin(a)*rad*1.24);f.add(b)}}
}
const flangesAt=[];
// Air inside the pipes is drawn as white vapour: overlapping translucent puffs that fill the glass tubes and drift
// at the section's calculated speed, faintly tinted by pressure. Released air fills the pipes as a travelling front:
// the shared header first, then each open branch section by section (inlet → reducers → filter → manifold →
// hoses / gauge / safety); closing a branch drains it back the same way.
// After Start the supply header always shows air moving in from the inlet up to the shut-off valves, even while
// they are closed (display speed only; the panel still reports the calculated flow).
const HEADER_SHOW=.05;
const FLOW_SLOW=.45,FILL_RATE=1.2,STAGE_ORDER={common:0,header:1,hp:2,auto:3,hand:4,filter:5,gauge:6,manifold:6,safety:6.5,stub:7,hose:7};
const fill={common:0,port:0,stbd:0};
function createPipeFog(count){
 const geo=new T.BufferGeometry(),pos=new Float32Array(count*3),col=new Float32Array(count*3),size=new Float32Array(count),alpha=new Float32Array(count);
 geo.setAttribute('position',new T.BufferAttribute(pos,3));geo.setAttribute('color',new T.BufferAttribute(col,3));geo.setAttribute('aSize',new T.BufferAttribute(size,1));geo.setAttribute('aAlpha',new T.BufferAttribute(alpha,1));
 const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,vertexColors:true,uniforms:{uScale:{value:1}},
  vertexShader:'attribute float aSize;attribute float aAlpha;varying float vA;varying vec3 vC;uniform float uScale;void main(){vA=aAlpha;vC=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
  fragmentShader:'varying float vA;varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.7)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vC,vec3(.16,.42,.62),.45),a*.8);}'});
 const points=new T.Points(geo,mat);points.frustumCulled=false;points.renderOrder=4;   // drawn before the clear tubes (5), behind their walls
 return {points,geo,mat,pos,col,size,alpha};
}
function nativeAirUpdate(dt){if(!nativeAir)return;computeAir();const v=new T.Vector3(),w=new T.Vector3(),c=new T.Color(),hi=density(45),F=nativeAir;
 // fill fronts: advance while air is admitted, drain twice as fast when it is shut off
 const step=(k,on)=>{fill[k]=on?fill[k]+dt*FILL_RATE:Math.max(0,fill[k]-dt*FILL_RATE*2)};
 step('common',flowing);for(const side of ['port','stbd']){step(side,flowing&&branches[side].open&&fill.common>=2);if(branches[side].value<=0)fill[side]=Math.min(fill[side],2)}   // client: air stops at the hand reducer until it is tapped
 F.mat.uniforms.uScale.value=renderer.domElement.height/(camera.top-camera.bottom);
 for(let i=0;i<nativeAirFrames.length;i++){const p=nativeAirFrames[i],b=branches[p.branch],a=air[p.branch];
  const pressurised=flowing&&p.kind!=='release'&&(p.kind==='header'||(!!b&&b.open))&&(p.kind!=='safety'||venting(p.branch));
  const vel=!pressurised?0:p.stage==='common'?Math.max(HEADER_SHOW,air.mTotal/(hi*1.96e-4)):p.stage==='header'?Math.max(HEADER_SHOW,b.open?a.v.header:0):(['gauge','stub'].includes(p.stage)?0:(a.v[p.stage]||0));
  p.ph+=dt*10*FLOW_SLOW*visSpeed(vel);const fr=(p.src||p).frames,n=fr.length,f=Math.floor(p.ph)%n;v.fromArray(fr[f]);const next=fr[(f+1)%n];if(next&&v.distanceTo(w.fromArray(next))<25)v.lerp(w,p.ph%1);
  // how far the released air has reached this section, and whether this puff is behind the front
  const idx=STAGE_ORDER[p.stage]??7,front=idx<2?fill.common-idx:Math.min(fill.common-idx,fill[p.branch]-(idx-2)),reach=Math.max(0,Math.min(1,front)),filled=reach>=1||(f/n)<=reach;
  F.pos[i*3]=v.x;F.pos[i*3+1]=v.y;F.pos[i*3+2]=v.z;
  F.size[i]=(p.stage==='gauge'?2.2:p.stage==='stub'?2.6:1)*Math.max(p.radius,2.4)*(11+3*Math.sin(i*1.7+p.ph*.9));   // overlapping, gently breathing puffs
  F.alpha[i]=pressurised&&filled?(p.stage==='safety'?.5:.26)*Math.min(1,reach*1.5+.2):0;
  const sp=!b||['common','header','hp'].includes(p.stage)?SUPPLY:p.stage==='auto'?autoOut(p.branch):handActive(p.branch)?b.value:autoOut(p.branch);
  c.copy(p.stage==='safety'?STAGE_COLOR.relief:sp>=10?STAGE_COLOR.hi:sp>=.3?STAGE_COLOR.mid:STAGE_COLOR.lo);F.col[i*3]=c.r;F.col[i*3+1]=c.g;F.col[i*3+2]=c.b}
 for(const k of ['position','color','aSize','aAlpha'])F.geo.attributes[k].needsUpdate=true;streamlineUpdate(dt);plumeUpdate(dt);lidVapourUpdate(dt);airReadout()}
// Live airflow numbers for the panel (system overview and pipes), refreshed a few times a second.
let readoutAt=0;
const gpm=kgs=>(kgs*60000).toFixed(kgs*60000<10?3:1)+' g/min';
function airRows(side){const a=air[side];if(!a)return'';const B=side==='port'?'Port':'STBD';
 if(!a.mBranch)return'<div><span>'+B+' branch</span><b>'+(flowing?'Closed · no flow':'Paused')+'</b></div>';
 return '<div><span>'+B+' line pressure (after filter)</span><b>'+a.afterFilter.toFixed(3)+' kg/cm²</b></div>'+
  '<div><span>'+B+' into cells (2 batteries × 12 orifices)</span><b>'+gpm(a.mCells)+' · '+(a.mCells/density(a.afterFilter)*6e4).toFixed(2)+' L/min</b></div>'+
  '<div><span>'+B+' safety valve relief</span><b>'+(a.mRelief?gpm(a.mRelief):'0 · seated')+'</b></div>'+
  '<div><span>'+B+' velocity: header · main · hose</span><b>'+a.v.header.toFixed(3)+' · '+a.v.filter.toFixed(3)+' · '+a.v.hose.toFixed(2)+' m/s</b></div>'}
function airReadout(){const now=performance.now();if(now-readoutAt<400)return;readoutAt=now;const el=document.querySelector('#airflow-readout');if(!el)return;
 const out=air.port&&air.stbd?air.port.mCells+air.port.mRelief+air.stbd.mCells+air.stbd.mRelief:0;
 el.innerHTML='<div><span>Supply (MP air)</span><b>45 kg/cm² · '+gpm(air.mTotal)+'</b></div>'+airRows('port')+airRows('stbd')+
  '<div><span>Mass balance: in − (cells + relief)</span><b>'+(Math.abs(air.mTotal-out)<1e-12?0:(air.mTotal-out)*60000).toFixed(6)+' g/min</b></div>'}
if(!webglAvailable)loading.remove();
if(webglAvailable)Promise.all([new GLTFLoader().loadAsync('assets/assembled-battery-agitation.glb'),fetch('assets/assembled-air-particles.json').then(r=>{if(!r.ok)throw new Error('Air asset unavailable');return r.json()})]).then(([gltf,air])=>{
 const model=gltf.scene;model.name='ACTUAL_ASSEMBLED_BLENDER_MODEL';model.scale.setScalar(625);scene.add(model);scene.updateMatrixWorld(true);spreadCircuit(model,air);
 const pipeMaterial=new T.MeshPhysicalMaterial({color:'#76b8b7',transparent:true,opacity:.20,roughness:.17,metalness:.02,clearcoat:1,side:T.DoubleSide,depthWrite:false});
 const rootNodes=[],handNodes=[],needleNodes=[];model.traverse(n=>{if(n.userData.release_branch){nativeReleaseStreaks.push(n);n.visible=false}if(n.userData.touch_id)rootNodes.push(n);if(n.userData.touch_handle)handNodes.push(n);if(n.userData.touch_needle)needleNodes.push(n);if(n.isMesh){let parent=n,pipe=false;while(parent){if(parent.userData.pipe_material||String(parent.userData.asset_source||'').includes(': duct-'))pipe=true;parent=parent.parent}if(pipe)n.material=pipeMaterial;n.castShadow=true;n.receiveShadow=true}});
 for(const root of rootNodes)if(root.userData.touch_id.endsWith('-battery'))integratedBatteries.push(createBatteryBubbles({scene,root,side:root.userData.touch_id.split('-')[0],branches,isFlowing:()=>flowing,isFront:()=>viewMode==='front'}));
 for(const root of rootNodes){const id=root.userData.touch_id;if(id.endsWith('-shutoff')){const pivot=new T.Group();pivot.position.set(0,.079,0);root.add(pivot);scene.updateMatrixWorld(true);for(const child of [...root.children])if(child!==pivot&&child.name.toLowerCase().includes('handwheel'))pivot.attach(child);bodyGroups[id].userData.shutoffWheel=pivot;pivot.rotation.y=branches[id.split('-')[0]].open?WHEEL_OPEN:WHEEL_SHUT;pivot.userData.target=pivot.rotation.y}}
 for(const node of handNodes){const side=node.userData.touch_handle;node.userData.nativeAxis='y';node.userData.restAngle=node.rotation.y;wheels[side]=node;
  // Hand reducer T-bar: lies straight along the shaft when ON, stands across it (vertical on screen) when OFF.
  // The crossbar and knobs are the parts that reach away from the hub along the pipe direction (world z).
  const hub=new T.Box3().setFromObject(node).getCenter(new T.Vector3()),bar=[];
  node.traverse(m=>{if(!m.isMesh)return;const b=new T.Box3().setFromObject(m),c=b.getCenter(new T.Vector3());if(b.max.z-b.min.z>.1*625||Math.abs(c.z-hub.z)>.03*625)bar.push(m)});
  const barBox=new T.Box3();for(const m of bar)barBox.expandByObject(m);const centre=barBox.getCenter(new T.Vector3());   // turn about the bar's own centre
  const tee=new T.Group();model.add(tee);model.updateMatrixWorld(true);tee.position.copy(model.worldToLocal(centre.clone()));
  for(const m of bar)tee.attach(m);tee.rotation.y=handAngle(side);teeHandles[side]=tee}
 for(const node of needleNodes){const side=node.userData.touch_needle,c=node.userData.touch_center,pivot=new T.Group();pivot.position.set(c[0],c[2],-c[1]);model.add(pivot);scene.updateMatrixWorld(true);pivot.attach(node);pivot.userData.nativeBaseline=-(.145/.4)*Math.PI*1.5+Math.PI*.75;needles[side]=pivot;const cv=document.createElement('canvas');cv.width=cv.height=2048;dialFace(cv.getContext('2d'),2048,0);const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=renderer.capabilities?.getMaxAnisotropy?.()||8;dialCanvases[side]={cv,tex,shown:'0.000'};const face=new T.Mesh(new T.PlaneGeometry(.154,.154),new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false}));face.rotation.x=-Math.PI/2;face.position.set(c[0],c[2]+.0028,-c[1]);face.renderOrder=2;model.add(face)}
 model.traverse(n=>{if(/gauge.?number|dial.?tick/i.test(n.name))n.visible=false});
 scene.updateMatrixWorld(true);model3d=model;buildPlume();rerouteBatteryHoses(air);autoReducerLamps();
 classifyAir(air);clearPipes(air.filter(p=>!p.src),pipeMaterial);nativeAirFrames=air;nativeAir=createPipeFog(air.length);scene.add(nativeAir.points);nativeAirUpdate(0);ground.visible=false;actualModelReady=true;clientAdditions();loading.remove();renderer.render(scene,camera);
}).catch(error=>{loading.remove();const e=document.querySelector('#error');e.hidden=false;e.textContent='The assembled 3D model could not load. Please reload.';console.error(error)});

// Wide screens (the 90-inch landscape display): the drawing is taller than it is wide, so PORT and STBD are
// moved apart until the circuit fills the screen's width as well as its height. Only the straight part of the
// top header pipe is lengthened; every component keeps its true shape. Below the header nothing crosses the
// centre (|x| < 0.25 model units), and the inlet tee (−0.13…0.10) is left untouched.
const SPREAD={L1:-.245,L0:-.13,R0:.10,R1:.265,D:0};
function spreadX(x){const {L1,L0,R0,R1,D}=SPREAD;if(!D)return x;if(x<=L1)return x-D;if(x<L0)return L0+(x-L0)*(L0-(L1-D))/(L0-L1);if(x<=R0)return x;if(x<R1)return R0+(x-R0)*((R1+D)-R0)/(R1-R0);return x+D}
function spreadCircuit(model,air){
 const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;
 const box=new T.Box3().setFromObject(model),W=box.max.x-box.min.x,H=box.max.z-box.min.z+70;
 const D=Math.max(.55,Math.max(0,(H*(w/h)*.97-W)/2)/625);SPREAD.D=D;   // at least enough room for four cells per side and the pit meter
 for(const n of model.children){const m=/(?:^|[^a-z])(port|stbd)(?:[^a-z]|$)/i.exec(n.name);
  if(m){const dx=m[1].toLowerCase()==='port'?-D:D;n.position.x+=dx;n.traverse(c=>{const tc=c.userData.touch_center;if(tc)tc[0]+=dx});continue}
  n.traverse(c=>{if(!c.isMesh)return;c.geometry=c.geometry.clone();const g=c.geometry,pa=g.attributes.position,v=new T.Vector3(),inv=new T.Matrix4();c.updateMatrixWorld(true);
   const toModel=new T.Matrix4().copy(model.matrixWorld).invert().multiply(c.matrixWorld);inv.copy(toModel).invert();
   for(let i=0;i<pa.count;i++){v.fromBufferAttribute(pa,i).applyMatrix4(toModel);v.x=spreadX(v.x);v.applyMatrix4(inv);pa.setXYZ(i,v.x,v.y,v.z)}
   pa.needsUpdate=true;g.computeBoundingBox();g.computeBoundingSphere()})}
 // warp the air paths too, filling stretched gaps with in-between samples so the pipes stay continuous
 for(const p of air){const out=[];for(let i=0;i<p.frames.length;i++){const f=p.frames[i],g=[spreadX(f[0]/625)*625,f[1],f[2]];if(i){const a=p.frames[i-1],o=out[out.length-1],was=Math.hypot(f[0]-a[0],f[1]-a[1],f[2]-a[2]),now=Math.hypot(g[0]-o[0],g[1]-o[1],g[2]-o[2]);if(was<25&&now>=20){const k=Math.ceil(now/18);for(let j=1;j<k;j++)out.push([o[0]+(g[0]-o[0])*j/k,o[1]+(g[1]-o[1])*j/k,o[2]+(g[2]-o[2])*j/k])}}out.push(g)}p.frames=out}
 // touch areas and labels laid out in plan units (world + 900)
 for(const l of [...hotspots,...labelNodes])l.x=spreadX((l.x-900)/625)*625+900;
 scene.updateMatrixWorld(true);
}

const integratedBatteries=[];
// Battery lid: as on the real cells, the clear air hose plugs into a black nipple where the red cap was.
// The red cap and the old hose to the separate lid hole are hidden; a new arched hose runs from the same
// manifold take-off to the nipple, and the battery air particles follow the new hose.
function rerouteBatteryHoses(air){
 const sideOf=n=>{for(let p=n;p;p=p.parent){const m=/^(port|stbd)/i.exec(p.name);if(m)return m[1].toLowerCase()}return null};
 const caps={port:new T.Box3(),stbd:new T.Box3()},starts={},v=new T.Vector3();
 model3d.traverse(n=>{const name=n.name.toLowerCase(),side=sideOf(n);if(!side)return;
  if(/^red[ _](cap|central)/.test(name)&&n.isMesh){caps[side].expandByObject(n);n.visible=false}
  if(/battery[ _]air[ _]hose/.test(name)&&n.isMesh){const p=n.geometry.attributes.position;let best=null;for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(n.matrixWorld);if(!best||v.z<best.z)best=v.clone()}starts[side]=best;n.visible=false}
  if(/separate[ _]air[ _]hose[ _]lid[ _]socket/.test(name))n.visible=false});
 const rubber=new T.MeshStandardMaterial({color:'#1d1f21',roughness:.75}),hoseMat=new T.MeshPhysicalMaterial({color:'#efe4b8',roughness:.12,transmission:PHONE?0:.55,thickness:3,transparent:true,opacity:.6,side:T.DoubleSide});
 for(const side of ['port','stbd']){const box=caps[side],S=starts[side];if(box.isEmpty()||!S)continue;const c=box.getCenter(new T.Vector3()),lid=box.min.y;
  // black rubber nipple: washer, body, spout
  const nip=new T.Group();nip.position.set(c.x,lid,c.z);scene.add(nip);(flatBattery[side]??=[]).push(nip);
  [[9,3,0],[6,9,3],[3.6,10,12]].forEach(([r,h,y])=>{const m=new T.Mesh(new T.CylinderGeometry(r*.92,r,h,24),rubber);m.position.y=y+h/2;m.castShadow=true;nip.add(m)});
  const curve=frontHoseCurve(S,c,lid);frontHose[side]={S:S.clone(),c:c.clone(),lid,hose:null};
  const hose=new T.Mesh(new T.TubeGeometry(curve,96,3.4,14,false),hoseMat);hose.castShadow=true;scene.add(hose);flatBattery[side].push(hose);hoseMaterial=hoseMat;frontHose[side].hose=hose;
  const parts=air.filter(p=>p.kind==='battery'&&p.branch===side);hoseAir[side]=parts;parts.forEach((p,k)=>{const n=p.frames.length;p.frames=p.framesFront=Array.from({length:n},(_,f)=>curve.getPointAt(((f/n)+k/parts.length)%1).toArray())})}
 photoLids(caps,starts,air);
}
// Same photo lid as the battery detail view: the original lid fittings are hidden and the shared lid is laid
// on each real lid (long side along X), with its centre-row fittings at the model's own fitting positions.
const lidVapours=[];
// Arched hose from the manifold take-off S to the nipple at c on a lid whose top is at height lid.
const frontHose={};
function frontHoseCurve(S,c,lid){const dx=c.x-S.x;return new T.CatmullRomCurve3([S.clone(),new T.Vector3(S.x,S.y+28,S.z+40),new T.Vector3(S.x+dx*.25,S.y+62,S.z+(c.z-S.z)*.62),new T.Vector3(S.x+dx*.7,S.y+70,c.z-8),new T.Vector3(c.x,lid+60,c.z),new T.Vector3(c.x,lid+22,c.z)])}
function photoLids(caps,starts,air){
 const sideOf=n=>{for(let p=n;p;p=p.parent){const m=/^(port|stbd)/i.exec(p.name);if(m)return m[1].toLowerCase()}return null};
 const lids={},yellow={port:new T.Box3(),stbd:new T.Box3()},clear={port:new T.Box3(),stbd:new T.Box3()},hole={port:new T.Box3(),stbd:new T.Box3()},hide=[];
 model3d.traverse(n=>{const name=n.name.toLowerCase(),side=sideOf(n);if(!side)return;
  if(/^top[ _]lid/.test(name)&&n.isMesh)lids[side]=new T.Box3().setFromObject(n);
  if(/yellow[ _]battery[ _]cap/.test(name)&&!n.isMesh){yellow[side].setFromObject(n);hide.push(n)}
  if(/clear[ _]cylindrical[ _]cap/.test(name))clear[side].expandByObject(n);
  if(/open[ _]lid[ _]hole[ _]seat/.test(name))hole[side].expandByObject(n);
  if(/(photo[ _]battery[ _]terminals|red[ _]and[ _]clear[ _]battery[ _]fittings)/.test(name)&&!n.isMesh)hide.push(n)});
 for(const side of ['port','stbd']){const box=lids[side];if(!box)continue;
  const size=box.getSize(new T.Vector3()),c=box.getCenter(new T.Vector3()),s=size.z,L=size.x/s;
  const k=b=>((b.getCenter(new T.Vector3()).x-c.x)/s/L+.4)/.16;            // model fitting position → lid row index
  const lid=photoLid({W:1,L,nippleHose:false,centre:[k(caps[side]),k(yellow[side]),k(clear[side]),k(hole[side])]});
  lid.group.scale.setScalar(s);lid.group.rotation.y=Math.PI/2;lid.group.position.set(c.x,box.max.y,c.z);scene.add(lid.group);
  const vap=createVapour(420);lid.group.add(vap.points);lidVapours.push({side,vap,vent:lid.vent,scale:s});
  flatBattery[side].push(lid.group);model3d.traverse(n=>{if(n.userData.touch_id===side+'-battery')flatBattery[side].push(n)});
  const centre=[k(caps[side]),k(yellow[side]),k(clear[side]),k(hole[side])];
  topBattery(side,box,centre,starts[side],hoseAir[side]||[]);
  const firstHose=(hoseAir[side]||[]).slice();
  secondBattery(side,side==='port'?-150:150,box,centre,starts[side],air);
  moreBatteries(side,box,centre,starts[side],air,firstHose)}
 for(const n of hide)n.visible=false;
 applyBatteryView();
}
// Top view: each battery is shown as a live 3D cell at the drawing's angle (W / L / HEIGHT pose), standing where
// the flat battery was; the clear hose from the manifold drops onto its nipple. Front view keeps the flat model.
const flatBattery={},hoseAir={},topBatteries=[];let hoseMaterial=null;
// A second, identical battery on each side, further along the same "To the Cells" manifold (dx in world units),
// with its own hose from the manifold. Front view: the flat battery, lid fittings and nipple are cloned and set
// just behind the first (FRONT_DZ) so the pair reads as a bank instead of overlapping; a new hose runs to it.
// Top view: another live 3D cell beside the first.
const FRONT_DZ=-170;
// Client request: four batteries per side. The pit manifold ("To the Cells") is lengthened inboard and two
// more cells hang from it, each with its own clear hose and air, beside the original pair.
const MORE_DX=[150,300],MANIFOLD_EXT=330;
function moreBatteries(side,box,centre,S,air,src){
 const inb=side==='port'?1:-1;
 for(const p of air){if(p.kind!=='main'||p.branch!==side)continue;const fr=p.frames;if(!fr.every(f=>Math.abs(f[2]-330)<2))continue;
  const xs=fr.map(f=>f[0]),outer=inb>0?Math.min(...xs):Math.max(...xs),inner=inb>0?Math.max(...xs):Math.min(...xs),len=Math.abs(inner-outer);if(len<50)continue;
  const k=(len+MANIFOLD_EXT)/len;for(const f of fr)f[0]=outer+(f[0]-outer)*k}
 for(const d of MORE_DX){const dx=inb*d;
  const parts=src.map(p=>({...p,frames:p.frames.map(f=>[f[0]+dx,f[1],f[2]]),framesFront:null,framesTop:null}));
  for(const q of parts)q.framesFront=q.frames;air.push(...parts);
  topBattery(side,box.clone().translate(new T.Vector3(dx,0,0)),centre,S.clone().add(new T.Vector3(dx,0,0)),parts);
  hoseAir[side].push(...parts)}
}
function secondBattery(side,dx,box,centre,S,air){
 const fh=frontHose[side],off=new T.Vector3(dx,0,FRONT_DZ);
 for(const o of [...flatBattery[side]]){if(o===fh.hose)continue;const c=o.clone(true),k=o.parent===model3d?1/625:1;c.position.addScaledVector(off,k);o.parent.add(c);flatBattery[side].push(c);
  if(o.userData.touch_id===side+'-battery'){c.userData={...c.userData,touch_id:side+'-battery-2'};c.updateMatrixWorld(true);integratedBatteries.push(createBatteryBubbles({scene,root:c,side,branches,isFlowing:()=>flowing,isFront:()=>viewMode==='front'}))}}
 const S2=fh.S.clone().add(new T.Vector3(dx,0,0)),curve=frontHoseCurve(S2,fh.c.clone().add(off),fh.lid);
 const hose=new T.Mesh(new T.TubeGeometry(curve,96,3.4,14,false),hoseMaterial);hose.castShadow=true;scene.add(hose);flatBattery[side].push(hose);
 const src=hoseAir[side]||[],parts=src.map((p,k)=>{const n=p.frames.length,f=Array.from({length:n},(_,i)=>curve.getPointAt(((i/n)+k/src.length)%1).toArray());return {...p,frames:f,framesFront:f,framesTop:null}});
 air.push(...parts);
 topBattery(side,box.clone().translate(new T.Vector3(dx,0,0)),centre,S.clone().add(new T.Vector3(dx,0,0)),parts);
 hoseAir[side].push(...parts);
}
function topBattery(side,box,centre,S,parts){
 const b=battery3D({centre}),sc=60,q=facing(new T.Vector3(0,0,-1),new T.Vector3(0,1,0)),c=box.getCenter(new T.Vector3());
 b.group.scale.setScalar(sc);b.group.quaternion.copy(q);
 const mid=new T.Vector3(0,b.size.H/2*sc,0).applyQuaternion(q);b.group.position.set(c.x,190,c.z+20).sub(mid);scene.add(b.group);b.group.updateMatrixWorld(true);
 const N=b.group.localToWorld(b.nipple.clone()),up=new T.Vector3(0,1,0).applyQuaternion(q);
 const curve=new T.CatmullRomCurve3([S.clone(),new T.Vector3(S.x,S.y+25,S.z+25),S.clone().lerp(N,.5).add(new T.Vector3(0,40,0)),N.clone().addScaledVector(up,42),N.clone().addScaledVector(up,6)]);
 const hose=new T.Mesh(new T.TubeGeometry(curve,96,3.4,14,false),hoseMaterial);scene.add(hose);
 parts.forEach((p,k)=>{const n=p.frames.length;p.framesTop=Array.from({length:n},(_,f)=>curve.getPointAt(((f/n)+k/parts.length)%1).toArray())});
 topBatteries.push({side,b,hose,sc});
 // touch area fitted to this cell (plan coordinates are world + (900, 750)); replaces the old shared battery box
 const old=hotspots.findIndex(h=>h.el.dataset.part===side+'-battery'&&!h.cell);if(old>=0){hotspots[old].el.remove();hotspots.splice(old,1)}
 const bb=new T.Box3().setFromObject(b.group),bc=bb.getCenter(new T.Vector3()),el=document.createElement('button');
 el.className='part-button';el.style.minWidth=el.style.minHeight='44px';el.dataset.part=side+'-battery';el.setAttribute('aria-label','Battery cell · '+(side==='port'?'Port':'STBD'));el.setAttribute('aria-pressed','false');el.addEventListener('click',()=>select(side+'-battery'));
 document.querySelector('#labels').append(el);hotspots.push({el,x:bc.x+900,z:bc.z+750,size:(bb.max.x-bb.min.x)*.66,h:(bb.max.z-bb.min.z)*.8,cell:true});   // the cell body, not the hose or lid fittings
 // i just outside the pair, on the inboard side, level with the top of the cells
 const mine=topBatteries.filter(t=>t.side===side).map(t=>new T.Box3().setFromObject(t.b.group)),u=mine.reduce((a,c)=>a.union(c),new T.Box3()),inf=infoNodes[side];
 if(inf){inf.x=(side==='port'?u.max.x+46:u.min.x-46)+900;inf.z=u.min.z+20+750}
 layout();
}
function applyBatteryView(){
 const top=viewMode!=='front';
 for(const side in flatBattery)for(const o of flatBattery[side])o.visible=!top;
 for(const t of topBatteries){t.b.group.visible=t.hose.visible=top}
 for(const side in hoseAir)for(const p of hoseAir[side])p.frames=top&&p.framesTop?p.framesTop:p.framesFront;
}
function lidVapourUpdate(dt){
 const px=renderer.domElement.height/(camera.top-camera.bottom),lv=side=>flowing&&passes(side)&&branches[side].value>0?Math.min(1,.35+pgValue(side)/.16*.4):0;
 for(const l of lidVapours)l.vap.update(dt,lv(l.side),l.vent,px*l.scale,false);
 for(const t of topBatteries)t.b.update(dt,lv(t.side),px*t.sc);
}
// Safety discharge: soft mist plumes leave each hole of the perforated face along the model's exit directions,
// narrow at the hole, slowing and spreading as they mix with room air. Appearance only, not a CFD result.
let plume=null,model3d=null;const PLUME_PER=64;
function buildPlume(){
 const holes=[],v=new T.Vector3();
 for(const n of nativeReleaseStreaks){n.visible=false;const pts=[];n.traverse(m=>{if(!m.geometry)return;const p=m.geometry.attributes.position;for(let i=0;i<p.count;i++)pts.push(v.fromBufferAttribute(p,i).applyMatrix4(m.matrixWorld).clone())});if(pts.length<2)continue;
  const y0=Math.min(...pts.map(q=>q.y)),y1=Math.max(...pts.map(q=>q.y)),avg=f=>{const a=pts.filter(f);return a.reduce((s,q)=>s.add(q),new T.Vector3()).multiplyScalar(1/a.length)};
  const o=avg(q=>q.y<y0+.5),tip=avg(q=>q.y>y1-.5),d=tip.clone().sub(o),len=d.length();d.normalize();const u=new T.Vector3(0,1,0).cross(d);if(u.lengthSq()<1e-6)u.set(1,0,0);u.normalize();holes.push({side:n.userData.release_branch,o0:o,d0:d,u0:u,w0:d.clone().cross(u).normalize(),o:o.clone(),d:d.clone(),u:u.clone(),w:d.clone().cross(u).normalize(),len})}
 const count=holes.length*PLUME_PER,geo=new T.BufferGeometry(),pos=new Float32Array(count*3),alpha=new Float32Array(count),size=new Float32Array(count);
 geo.setAttribute('position',new T.BufferAttribute(pos,3));geo.setAttribute('aAlpha',new T.BufferAttribute(alpha,1));geo.setAttribute('aSize',new T.BufferAttribute(size,1));
 const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uScale:{value:1}},
  vertexShader:'attribute float aAlpha;attribute float aSize;varying float vA;uniform float uScale;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
  fragmentShader:'varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.8)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.42,.58,.66),vec3(.80,.89,.93),pow(1.-r,2.)),a);}'});
 const pts=new T.Points(geo,mat);pts.frustumCulled=false;pts.renderOrder=5;scene.add(pts);
 const state=[];for(let i=0;i<count;i++)state.push({h:holes[Math.floor(i/PLUME_PER)],age:Math.random(),life:.8+Math.random()*.6,a:Math.random()*6.283,r:Math.random(),live:false});
 // Each perforated face stands as the base of the bell symbol in every view. Top view keeps the installed, face-up model unchanged.
 const valves={};model3d.traverse(n=>{const id=n.userData.touch_id;if(id==='port-safety'||id==='stbd-safety'){const side=id.split('-')[0],parts=[n];model3d.traverse(m=>{if(/safety[ _]mounting[ _]plenum/i.test(m.name)&&m.name.toLowerCase().startsWith(side))m.visible=false});const pivot=n.getWorldPosition(new T.Vector3());scene.add(safetyBell(pivot));const face=safetyFace(holes.filter(h=>h.side===side),pivot);model3d.add(face);parts.push(face);valves[side]={pivot,parts:parts.map(m=>({m,q:m.quaternion.clone(),p:m.position.clone()}))}}});
 plume={pts,geo,state,level:{port:0,stbd:0},holes,valves};poseSafety();
}
// Safety valve drawn as the drawing's bell symbol: the pipe enters the narrow end and the perforated
// face is the flat base, facing down the drawing (+Z). Seen from the front, the holes face the viewer.
const SAFETY_FACE=new T.Vector3(0,0,1);
const FRONT_TILT={port:new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),SAFETY_FACE),stbd:new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),SAFETY_FACE)};
const bellMaterial=new T.MeshPhysicalMaterial({color:'#f4f6f4',roughness:.35,metalness:0,transmission:.25,thickness:2,transparent:true,opacity:.94,side:T.DoubleSide});
function safetyFace(holes,pivot){
 // Drawn on a disc just proud of the perforated plate's top face (face-up pose); it turns with the plate.
 const R=50,cv=document.createElement('canvas');cv.width=cv.height=512;const c=cv.getContext('2d'),k=256/R;
 c.fillStyle='#f4f6f4';c.beginPath();c.arc(256,256,256,0,7);c.fill();c.fillStyle='#8cc0e2';c.beginPath();c.arc(256,256,256-5*k,0,7);c.fill();
 c.fillStyle='rgba(30,40,50,.08)';for(let i=0;i<1400;i++){const a=Math.random()*7,r=Math.sqrt(Math.random())*(256-5*k);c.fillRect(256+r*Math.cos(a),256+r*Math.sin(a),2,2)}
 for(const h of holes){const x=256+(h.o0.x-pivot.x)*k,y=256+(h.o0.z-pivot.z)*k,g=c.createRadialGradient(x,y,0,x,y,3.6*k);g.addColorStop(0,'#1a2026');g.addColorStop(.75,'#2c343a');g.addColorStop(1,'#c9a87a');c.fillStyle=g;c.beginPath();c.arc(x,y,3.6*k,0,7);c.fill()}
 const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=4;
 const m=new T.Mesh(new T.CircleGeometry(R,72),new T.MeshStandardMaterial({map:tex,roughness:.8,polygonOffset:true,polygonOffsetFactor:-2}));m.rotation.x=-Math.PI/2;
 // child of the 625-scaled model: R stays in world units; plate top is 2.8 above its centre
 m.scale.setScalar(1/625);m.position.copy(pivot).divideScalar(625);m.position.y+=3/625;return m}
function safetyBell(pivot){
 // Trumpet flare like the rig: narrow neck from the pipe end (r 16), widening quickly to the face rim (r 50).
 const L=46,R0=16,R1=50,pts=[];for(let k=0;k<=28;k++){const t=k/28;pts.push(new T.Vector2(R0+(R1-R0)*t**2.2,t*L))}
 const bell=new T.Mesh(new T.LatheGeometry(pts,64),bellMaterial);bell.castShadow=bell.receiveShadow=true;
 bell.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),SAFETY_FACE);bell.position.copy(pivot).addScaledVector(SAFETY_FACE,-L-3);return bell}
function poseSafety(){
 if(!plume)return;const front=true,inv=new T.Matrix4().copy(model3d.matrixWorld).invert();
 for(const side in plume.valves){const v=plume.valves[side],q=FRONT_TILT[side];for(const r of v.parts){r.m.quaternion.copy(r.q);r.m.position.copy(r.p);if(!front)continue;
   // rotate about the valve's world pivot; parts sit directly under the scaled model, whose scale is uniform
   const w=r.m.getWorldPosition(new T.Vector3()).sub(v.pivot).applyQuaternion(q).add(v.pivot);r.m.position.copy(w.applyMatrix4(inv));r.m.quaternion.premultiply(q)}}
 for(const h of plume.holes){const v=plume.valves[h.side];h.o.copy(h.o0);h.d.copy(h.d0);h.u.copy(h.u0);h.w.copy(h.w0);if(!front||!v)continue;const q=FRONT_TILT[h.side];h.o.sub(v.pivot).applyQuaternion(q).add(v.pivot);h.d.applyQuaternion(q);h.u.applyQuaternion(q);h.w.applyQuaternion(q)}
 model3d.updateMatrixWorld(true);
}
function plumeUpdate(dt){
 if(!plume)return;const {geo,state,level}=plume,pos=geo.attributes.position.array,alpha=geo.attributes.aAlpha.array,size=geo.attributes.aSize.array,t0=performance.now()/1000;
 for(const side of ['port','stbd']){const target=Math.max(venting(side)?Math.min(1,.55+Math.max(0,pgValue(side)-SAFETY_SET)/.25*.45):0,pitVenting()?Math.min(1,.55+(pitPressure-SAFETY_SET)/.8*.45):0);level[side]+=(target-level[side])*Math.min(1,dt*(target>level[side]?6:3))}
 plume.pts.material.uniforms.uScale.value=renderer.domElement.height/(camera.top-camera.bottom);
 for(let i=0;i<state.length;i++){const q=state[i],h=q.h,L=level[h.side];
  q.age+=dt/q.life;if(q.age>=1){q.age%=1;q.live=L>.02&&Math.random()<L;q.a=Math.random()*6.283;q.r=Math.random();q.life=.8+Math.random()*.6}
  if(!q.live||!(flowing||pitVenting())){alpha[i]=0;continue}
  const t=q.age,k=2.4,s=h.len*2.3*(1-Math.exp(-k*t))/(1-Math.exp(-k)),spread=s*(.03+.16*t)*Math.sqrt(q.r),wob=Math.sin(t0*7+i)*s*.035;
  const ox=Math.cos(q.a)*spread+wob,oy=Math.sin(q.a)*spread;
  pos[i*3]=h.o.x+h.d.x*s+h.u.x*ox+h.w.x*oy;pos[i*3+1]=h.o.y+h.d.y*s+h.u.y*ox+h.w.y*oy;pos[i*3+2]=h.o.z+h.d.z*s+h.u.z*ox+h.w.z*oy;
  size[i]=5+t*44;alpha[i]=L*.55*Math.min(1,t/.05)*Math.pow(1-t,1.3)}
 geo.attributes.position.needsUpdate=geo.attributes.aAlpha.needsUpdate=geo.attributes.aSize.needsUpdate=true;
}
function setView(mode){
 mode='top';   // Front view removed
 viewMode=mode;const front=mode==='front';
 // Front view is a clean presentation: only the Start button stays on screen (Esc or double-tap returns to Top).
 document.body.classList.toggle('front-only',front);
 camera.position.set(0,front?230:3000,front?3000:0);camera.up.set(0,front?1:0,front?0:-1);camera.lookAt(0,front?230:0,0);
 circuit.classList.toggle('front-view',front);
 document.querySelector('#view-top').setAttribute('aria-pressed',String(!front));document.querySelector('#view-front').setAttribute('aria-pressed',String(front));
 const badge=document.querySelector('.selected-badge');if(badge)badge.textContent=front?'FIXED FRONT VIEW':'FIXED TOP VIEW';
 circuit.setAttribute('aria-label',front?'Locked front-view 3D circuit':'Locked top-view battery agitation circuit');
 poseSafety();applyBatteryView();layout();
}
document.querySelector('#view-top').onclick=()=>setView('top');
// Front view has been removed: the app stays in the fixed Top view (the hidden button does nothing).


// ─── Client requirements, November 2026 ─────────────────────────────────────────────────────────────────────
// Hand reducer: each tap raises its setting by 0.01 kg/cm² (holding keeps raising it slowly) from 0 up to 0.5.
// It glows green only at 0.13, 0.14, 0.15 or 0.16 kg/cm² (the drawing's working range). Reset returns it to 0.
const HAND_MAX=.5,HAND_STEP=.01,HAND_LO=.13,HAND_HI=.16,hand2={port:null,stbd:null};
const r2=v=>Math.round(v*100)/100;
function handInBand(side){const v=r2(branches[side].value);return v>=HAND_LO&&v<=HAND_HI}
function handAngle(side){return branches[side].value/HAND_MAX*Math.PI*1.5}    // T-handle turns ¾ turn over the full range
function setHand(side,v){const b=branches[side];b.value=r2(Math.min(HAND_MAX,Math.max(0,v)));b.hand=b.value>0;handReadout(side);if(selected)details()}
function handStep(side){setHand(side,branches[side].value+HAND_STEP)}
const handHold={};
// Each tap moves the hand reducer to the next setting, rising smoothly to it (0.01 every 60 ms):
// 0 → 0.05 → 0.10 → 0.13 → 0.14 → 0.15 → 0.16, then +0.01 per tap up to 0.50. Green at 0.13–0.16. Reset → 0.
const HAND_SEQ=[.05,.10,.13,.14,.15,.16];
function handTarget(v){for(const t of HAND_SEQ)if(t>v+.001)return t;return Math.min(HAND_MAX,r2(v+HAND_STEP))}
function handToggle(side){const b=branches[side];if(handHold[side]||b.value>=HAND_MAX)return;const target=handTarget(b.value);
 handHold[side]=setInterval(()=>{setHand(side,Math.min(target,b.value+HAND_STEP));if(b.value>=target-.001){handStop(side);handReadout(side)}},60);handReadout(side)}
function handPressable(el,side){el.addEventListener('pointerdown',e=>{if(e.button>0)return;handToggle(side)})}
function handStop(side){if(handHold[side]){clearInterval(handHold[side]);handHold[side]=null}}
function handReadout(side){const r=hand2[side];if(!r)return;const v=branches[side].value,ok=handInBand(side);popText(r.val,v.toFixed(2));r.el.classList.toggle('ok',ok);r.el.classList.toggle('off',v>0&&!ok);r.state.textContent=handHold[side]?'Rising…':v<=0?'Tap reducer to start':ok?'✓ In working range':v>=HAND_MAX?'At 0.50 – press Reset':v<HAND_LO?'Tap again to increase':'Above 0.16 – press Reset';r.bar.style.width=(v/HAND_MAX*100)+'%'}

// Battery pit pressure: the user picks 0–1 kg/cm² on the meter inside the pit box. Above 0.2 kg/cm² both
// safety valves release the excess (the perforated-face plume shows the release, with or without Start).
let pitUI=null;
function setPit(v){pitPressure=Math.round(Math.min(1,Math.max(0,v))*100)/100;if(!pitUI)return;const {val,needle,slider,status,root}=pitUI,vent=pitVenting();
 popText(val,pitPressure.toFixed(2));slider.value=String(pitPressure);needle.style.transform='rotate('+(-135+pitPressure*270)+'deg)';
 root.classList.toggle('venting',vent);status.textContent=vent?'⚠ Above 0.2 – releasing through safety valves':'Safety valves closed (opens above 0.2)'}

const anchors=[];
function popText(el,t){if(el.textContent===t)return;el.textContent=t;el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop')}   // HTML widgets pinned to world points; their size follows the drawing scale (--k)
function anchor(el,x,z){labelsRoot.append(el);const node={el,x:x+900,z:z+750};labelNodes.push(node);anchors.push(node);return node}

function visibleBox(root,filter){const box=new T.Box3(),tmp=new T.Box3();root.updateMatrixWorld(true);root.traverse(n=>{if(!n.isMesh||n.userData.noFit)return;for(let p=n;p;p=p.parent)if(!p.visible)return;if(!n.geometry)return;n.geometry.computeBoundingBox?.();if(!n.geometry.boundingBox)return;tmp.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld);if(filter&&!filter(tmp))return;box.union(tmp)});return box}

function clientAdditions(){
 {const st=document.createElement('style');st.textContent=`
#circuit .pit-tag{position:absolute;transform:translate(0,-50%);font:700 clamp(10px,calc(var(--k,1)*24px),44px)/1 Arial,sans-serif;letter-spacing:.18em;color:#1f7a70;pointer-events:none;white-space:nowrap;text-shadow:0 0 6px #fff}
.pit-meter{position:absolute;transform:translate(-50%,-50%);font-size:clamp(4.6px,calc(var(--k,1)*17px),40px);width:12.5em;padding:.7em .8em .8em;border-radius:1em;background:linear-gradient(180deg,#ffffffee,#eef5faee);border:1.5px solid #9dbcd2;box-shadow:0 .5em 1.6em #12405e26;pointer-events:auto;text-align:center;color:#173f57;font-family:Arial,sans-serif;touch-action:manipulation}
.pit-meter h3{margin:0 0 .3em;font-size:.82em;letter-spacing:.12em;color:#3c6680}
.pit-meter svg{width:8.2em;height:8.2em;display:block;margin:0 auto -.6em}
.pit-meter .pv{font:700 1.7em/1 Arial,sans-serif}.pit-meter .pv small{font-size:.48em;font-weight:600;color:#56778c;margin-left:.2em}
.pit-meter .row{display:flex;align-items:center;gap:.4em;margin-top:.55em}
.pit-meter input{flex:1;min-width:0;height:1.8em;-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer}
.pit-meter input::-webkit-slider-runnable-track{height:.55em;border-radius:.3em;background:linear-gradient(90deg,#22b45a 0 20%,#e2574c 20% 100%)}
.pit-meter input::-moz-range-track{height:.55em;border-radius:.3em;background:linear-gradient(90deg,#22b45a 0 20%,#e2574c 20% 100%)}
.pit-meter input::-webkit-slider-thumb{-webkit-appearance:none;width:1.45em;height:1.45em;margin-top:-.45em;border-radius:50%;background:#fff;border:.18em solid #1d4f6e;box-shadow:0 .15em .5em #12405e55;transition:transform .15s}
.pit-meter input::-moz-range-thumb{width:1.1em;height:1.1em;border-radius:50%;background:#fff;border:.18em solid #1d4f6e;box-shadow:0 .15em .5em #12405e55}
.pit-meter input:active::-webkit-slider-thumb{transform:scale(1.15)}
#circuit .drawing-label span,#circuit .drawing-label small{text-shadow:0 0 3px #fff,0 0 6px #fff,0 0 10px #fff}
.pit-meter button{width:2.4em;height:2.4em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 1.15em/1 Arial;color:#1d4d6b;padding:0}
.pit-meter .ps{display:none!important;margin-top:.5em;font-size:.78em;line-height:1.3;color:#2c6b4f;font-weight:600;min-height:2.6em;display:flex;align-items:center;justify-content:center}
.pit-meter.venting{border-color:#e2574c;box-shadow:0 0 0 .25em #e2574c33,0 .5em 1.6em #12405e26}.pit-meter.venting .ps{color:#c0392b}.pit-meter.venting .pv{color:#c0392b}
.hr-read{position:absolute;transform:translate(-50%,-50%);font-size:clamp(7px,calc(var(--k,1)*24px),56px);width:10.5em;padding:.6em .7em .7em;border-radius:.9em;background:#ffffffee;border:1.5px solid #b4c7d3;box-shadow:0 .4em 1.2em #12405e1f;pointer-events:auto;text-align:center;color:#173f57;font-family:Arial,sans-serif;transition:border-color .25s,box-shadow .25s}
.hr-read h3{margin:0;font-size:.78em;letter-spacing:.1em;color:#3c6680}
.hr-read .hv{font:700 1.9em/1.15 Arial,sans-serif;color:#5d7281}.hr-read .hv small{font-size:.45em;font-weight:600;margin-left:.2em}
.hr-read .track{position:relative;height:.5em;border-radius:.3em;background:#dfe8ee;margin:.35em 0 .25em;overflow:hidden}
.hr-read .band{position:absolute;top:0;bottom:0;left:26%;width:6%;background:#22b45a55}
.hr-read .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:#7c93a3;transition:width .25s}
.hr-read.rising .hv span{animation:hrpulse 1s ease-in-out infinite}@keyframes hrpulse{50%{opacity:.55}}
.hr-read .hs{font-size:.72em;min-height:1.3em;color:#5d7281;font-weight:600}
.hr-read button{margin-top:.45em;width:100%;height:2.5em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 .95em/1 Arial;color:#1d4d6b}
.hr-read.ok{border-color:#22b45a;box-shadow:0 0 0 .25em #22b45a30}.hr-read.ok .hv,.hr-read.ok .hs{color:#159447}.hr-read.ok .fill{background:#22b45a}
.hr-read.off{border-color:#e2574c}.hr-read.off .hv,.hr-read.off .hs{color:#c0392b}.hr-read.off .fill{background:#e2574c}
@keyframes fadeUp{from{opacity:0;translate:0 .8em}to{opacity:1;translate:0 0}}
@keyframes pop{0%{scale:1}35%{scale:1.14}100%{scale:1}}
@keyframes okGlow{0%,100%{box-shadow:0 0 0 .2em #22b45a30,0 .4em 1.2em #12405e1f}50%{box-shadow:0 0 0 .45em #22b45a22,0 0 1.4em #22b45a55}}
@keyframes ventPulse{0%,100%{box-shadow:0 0 0 .2em #e2574c33}50%{box-shadow:0 0 0 .55em #e2574c22,0 0 1.6em #e2574c55}}
@keyframes stepIn{from{opacity:0;translate:-.8em 0}to{opacity:1;translate:0 0}}
@keyframes startPulse{0%,100%{box-shadow:0 0 0 0 #245b4a66}50%{box-shadow:0 0 0 10px #245b4a00}}
.pit-meter,.hr-read,.cs-panel,#circuit .pit-tag{animation:fadeUp .7s cubic-bezier(.2,.8,.2,1) both}
.hr-read{animation-delay:.1s}.cs-panel{animation-delay:.2s}.pit-meter{animation-delay:.3s}
.hr-read .hv span,.pit-meter .pv span{display:inline-block}
.hr-read .hv span.pop,.pit-meter .pv span.pop{animation:pop .3s ease-out}
.hr-read.ok{animation:okGlow 2.2s ease-in-out infinite}
.pit-meter.venting{animation:ventPulse 1.2s ease-in-out infinite}
.pit-meter .ndl{transform-box:view-box;transform-origin:60px 60px;transition:transform .45s cubic-bezier(.3,1.4,.5,1)}
.cs-step.enter{animation:stepIn .45s cubic-bezier(.2,.8,.2,1)}
.hr-read button,.pit-meter button{transition:transform .12s,background .2s}.hr-read button:active,.pit-meter button:active{transform:scale(.94);background:#e6f0f6}
#start[aria-pressed="false"]{animation:startPulse 2.2s ease-out infinite}
@media(prefers-reduced-motion:reduce){.pit-meter,.hr-read,.cs-panel,.cs-step.enter,.hr-read.ok,.pit-meter.venting,#start{animation:none!important}.pit-meter .ndl{transition:none}}
#circuit .battery-info{width:clamp(22px,calc(var(--k,1)*38px),64px);height:clamp(22px,calc(var(--k,1)*38px),64px);font-size:clamp(12px,calc(var(--k,1)*22px),36px);line-height:1;display:grid;place-items:center;border-width:2px;border-color:#1f6f9a;color:#1f6f9a;box-shadow:0 .2em .8em #12405e30}
#circuit .battery-info:hover{background:#1f6f9a;color:#fff}
.cs-panel{position:absolute;transform:translate(-50%,-50%);font-size:clamp(5px,calc(var(--k,1)*21px),48px);width:34em;padding:1em 1.2em 1.1em;border-radius:1.1em;background:linear-gradient(180deg,#ffffffe8,#f1f7fbe8);border:1.5px solid #b3cddd;box-shadow:0 .6em 2em #12405e22;color:#173f57;font-family:Arial,sans-serif;pointer-events:none;backdrop-filter:blur(4px)}
.cs-panel h3{margin:0;font-size:.8em;letter-spacing:.16em;color:#4a7088;display:flex;justify-content:space-between;align-items:center}
.cs-panel h3 .run{font-size:.95em;letter-spacing:.08em;padding:.25em .7em;border-radius:1em;background:#e3ebf0;color:#56707f}
.cs-panel h3 .run.on{background:#d9f2e3;color:#14864a}
.cs-step{display:flex;gap:.7em;align-items:center;margin:.75em 0 .85em;padding:.7em .85em;border-radius:.8em;background:#e8f2f9;border:1px solid #c6dceb;font-size:1.05em;font-weight:700;line-height:1.3}
.cs-step b{flex:0 0 auto;width:1.9em;height:1.9em;border-radius:50%;display:grid;place-items:center;background:#1f6f9a;color:#fff;font-size:.9em}
.cs-step.done{background:#e3f6ea;border-color:#a9dcbc;color:#126b3c}.cs-step.done b{background:#22a35a}
.cs-step.warn{background:#fdecea;border-color:#f1b5ae;color:#a8322a}.cs-step.warn b{background:#d9443a}
.cs-grid{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:.1em .8em;font-size:.92em}
.cs-grid>div{padding:.42em 0;border-bottom:1px solid #dbe6ed}
.cs-grid .hd{font-size:.78em;letter-spacing:.14em;color:#6b8798;font-weight:700;border-bottom:1.5px solid #c3d5e0}
.cs-grid .lb{color:#5a7586}.cs-grid .v{font-weight:700;text-align:right}
.cs-grid .good{color:#14864a}.cs-grid .bad{color:#c0392b}.cs-grid .idle{color:#8aa0ad}
.cs-pit{display:flex;justify-content:space-between;margin-top:.7em;font-size:.92em;font-weight:700}.cs-pit span{color:#5a7586;font-weight:400}
@media(max-width:700px){.cs-panel{display:none}}
@media(max-width:520px){.hr-read .hs,.pit-meter .ps{display:none}}`;document.head.append(st)}

 // ---- UI refresh (client: "work on this UI"): navy header, name-tag labels, state-coloured cards, legend. Screen 1 only.
 {const st=document.createElement('style');st.textContent=`
header{background:linear-gradient(90deg,#0d2536 0%,#14405a 55%,#1b5574 100%)!important;border-bottom:0!important;box-shadow:0 4px 18px #0b2a3d40;position:relative;z-index:30}
header .header-title{color:#fff!important;text-shadow:0 2px 8px #0008;line-height:1.1!important}
header .header-title::after{content:'INS SATHAVAHANA · CIRCUIT 1';display:block;font:700 clamp(9px,.62vw,16px)/1.9 Arial,sans-serif;letter-spacing:.28em;color:#8fc8e8;text-align:center;text-shadow:none}
header .screens a{background:#ffffff14!important;border-color:#ffffff38!important;color:#d6e8f3!important;transition:background .2s}
header .screens a:hover{background:#ffffff26!important}
header .screens a[aria-current=page]{background:#fff!important;border-color:#fff!important;color:#0f2a3d!important}
header #start{background:linear-gradient(180deg,#2bd06a,#16a34a)!important;border:0!important;color:#fff!important;border-radius:12px!important;font-weight:800!important;letter-spacing:.04em}
header #start[aria-pressed="true"]{background:linear-gradient(180deg,#f5b544,#d98a14)!important}
#circuit .drawing-label{background:#ffffffec;border:1px solid #cfdde7;border-left:.28em solid #1f7fbf;border-radius:.6em;padding:.35em .7em .4em;box-shadow:0 .3em .9em #12405e22;color:#123a52!important;line-height:1.2;font-size:clamp(10px,.82vw,20px)}
#circuit .drawing-label span,#circuit .drawing-label small{text-shadow:none!important}
#circuit .drawing-label small{color:#1f7a70!important;font-weight:700!important;margin-top:.15em!important;font-size:.82em}
#circuit .drawing-label.muted{background:#1d4f6e;color:#fff!important;border:0;border-radius:999px;padding:.32em 1em;letter-spacing:.24em;font-weight:700;box-shadow:0 .3em .9em #12405e33}
.hr-read,.pit-meter{border-top-width:.32em!important;border-top-style:solid!important}
.hr-read{border-top-color:#8aa0ad!important}.hr-read.ok{border-top-color:#22b45a!important}.hr-read.off{border-top-color:#e2574c!important}
.pit-meter{border-top-color:#1f7fbf!important}.pit-meter.venting{border-top-color:#e2574c!important}
.legend-card{position:absolute;transform:translate(-50%,-50%);z-index:5;font:600 clamp(10px,.66vw,16px)/1.3 Arial,sans-serif;color:#173f57;background:#ffffffe6;border:1px solid #cfdde7;border-radius:.9em;padding:.7em .9em;box-shadow:0 .4em 1.2em #12405e1f;pointer-events:none;animation:fadeUp .7s .4s cubic-bezier(.2,.8,.2,1) both}
.legend-card h4{margin:0 0 .45em;font-size:.82em;letter-spacing:.16em;color:#4a7088}
.legend-card .row{display:flex;gap:1.1em;margin:.25em 0}.legend-card i{display:inline-block;width:1.6em;height:.5em;border-radius:.25em;margin-right:.4em;vertical-align:middle}
.legend-card b{display:inline-block;width:.8em;height:.8em;border-radius:50%;margin-right:.4em;vertical-align:-.1em}`;document.head.append(st)}
 {const lg=document.createElement('div');lg.className='legend-card';lg.setAttribute('aria-label','Legend');
  lg.innerHTML='<h4>AIR PRESSURE</h4><div class="row"><span><i style="background:#2a5cff"></i>45 kg/cm²</span><span><i style="background:#1fa0ff"></i>0.45</span><span><i style="background:#2fd8ff"></i>0.13–0.16</span></div><h4 style="margin-top:.6em">VALVES</h4><div class="row"><span><b style="background:#22b45a"></b>Open / in range</span><span><b style="background:#d23b33"></b>Closed</span></div>';
  window.__legendCard=lg}
 // Battery pit compartment: a box round the manifolds, safety valves and cells (as marked in the client's image).
 const PIT_TOP=1020-750,objs=[model3d,...topBatteries.map(t=>t.b.group),...scene.children.filter(o=>o.isMesh&&o.material===bellMaterial)];
 const pit=new T.Box3();for(const o of objs)pit.union(visibleBox(o,b=>(b.min.z+b.max.z)/2>PIT_TOP+20));
 const all=visibleBox(scene,b=>b.max.x-b.min.x<2600&&b.max.z-b.min.z<2600);
 const pad=55,x0=pit.min.x-pad,x1=pit.max.x+pad,z0=Math.min(pit.min.z-28,PIT_TOP+10),z1=pit.max.z+pad*1.1,yb=all.min.y-2;
 const pitGroup=new T.Group();scene.add(pitGroup);
 const floor=new T.Mesh(new T.PlaneGeometry(x1-x0,z1-z0),new T.MeshBasicMaterial({color:'#14b8a6',transparent:true,opacity:.09,depthWrite:false}));floor.rotation.x=-Math.PI/2;floor.position.set((x0+x1)/2,yb,(z0+z1)/2);pitGroup.add(floor);
 const wall=new T.MeshStandardMaterial({color:'#2a9d8f',roughness:.45,metalness:.15,emissive:'#2a9d8f',emissiveIntensity:.15}),W=6,H=10;
 for(const [cx,cz,w,d] of [[(x0+x1)/2,z0,x1-x0+W,W],[(x0+x1)/2,z1,x1-x0+W,W],[x0,(z0+z1)/2,W,z1-z0+W],[x1,(z0+z1)/2,W,z1-z0+W]]){const m=new T.Mesh(new T.BoxGeometry(w,H,d),wall);m.position.set(cx,yb+H/2,cz);m.castShadow=m.receiveShadow=true;pitGroup.add(m)}
 boundary.visible=false;
 const tag=document.createElement('div');tag.className='pit-tag';tag.textContent='BATTERY PIT';anchor(tag,x0+24,z1-30);

 // Pit pressure meter, centred between the two battery pairs.
 const port=topBatteries.filter(t=>t.side==='port').map(t=>new T.Box3().setFromObject(t.b.group)).reduce((a,c)=>a.union(c),new T.Box3());
 const stbd=topBatteries.filter(t=>t.side==='stbd').map(t=>new T.Box3().setFromObject(t.b.group)).reduce((a,c)=>a.union(c),new T.Box3());
 const mx=port.isEmpty()||stbd.isEmpty()?(x0+x1)/2:(port.max.x+stbd.min.x)/2,mz=(z0+z1)/2+20;
 const m=document.createElement('div');m.className='pit-meter';m.setAttribute('role','group');m.setAttribute('aria-label','Battery pit pressure meter');
 const ticks=[];for(let k=0;k<=10;k++){const a=(-225+k*27)*Math.PI/180,r1=k%5?44:40;ticks.push('<line x1="'+(60+48*Math.cos(a)).toFixed(1)+'" y1="'+(60+48*Math.sin(a)).toFixed(1)+'" x2="'+(60+r1*Math.cos(a)).toFixed(1)+'" y2="'+(60+r1*Math.sin(a)).toFixed(1)+'" stroke="#24506b" stroke-width="'+(k%5?1.2:2)+'"/>');if(k%5===0)ticks.push('<text x="'+(60+31*Math.cos(a)).toFixed(1)+'" y="'+(63+31*Math.sin(a)).toFixed(1)+'" font-size="9" font-weight="700" fill="#24506b" text-anchor="middle">'+(k/10).toFixed(1)+'</text>')}
 const arc=(f0,f1,col)=>{const a0=(-225+f0*270)*Math.PI/180,a1=(-225+f1*270)*Math.PI/180;return '<path d="M'+(60+52*Math.cos(a0)).toFixed(2)+' '+(60+52*Math.sin(a0)).toFixed(2)+' A52 52 0 '+((f1-f0)*270>180?1:0)+' 1 '+(60+52*Math.cos(a1)).toFixed(2)+' '+(60+52*Math.sin(a1)).toFixed(2)+'" stroke="'+col+'" stroke-width="6" fill="none"/>'};
 m.innerHTML='<h3>PIT PRESSURE</h3><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" fill="#f7fafc" stroke="#9db6c8" stroke-width="2"/>'+arc(0,.2,'#22b45a')+arc(.2,1,'#e2574c')+ticks.join('')+'<g class="ndl"><line x1="60" y1="60" x2="60" y2="18" stroke="#173f57" stroke-width="2.6" stroke-linecap="round"/></g><circle cx="60" cy="60" r="5" fill="#173f57"/></svg><div class="pv"><span>0.00</span><small>kg/cm²</small></div><div class="row"><button type="button" aria-label="Lower pit pressure">−</button><input type="range" min="0" max="1" step="0.01" value="0" aria-label="Pit pressure, kg/cm²"><button type="button" aria-label="Raise pit pressure">+</button></div><div class="ps" role="status"></div>';
 const [minus,plus]=m.querySelectorAll('button'),slider=m.querySelector('input');
 pitUI={root:m,val:m.querySelector('.pv span'),needle:m.querySelector('.ndl'),slider,status:m.querySelector('.ps')};
 slider.addEventListener('input',()=>setPit(+slider.value));minus.onclick=()=>setPit(pitPressure-.01);plus.onclick=()=>setPit(pitPressure+.01);
 anchor(m,mx,mz);setPit(pitPressure);

 // Hand reducer readouts, inboard of each reducer, with value, range bar and Reset.
 const hands={};model3d.traverse(n=>{const id=n.userData.touch_id;if(id==='port-hand'||id==='stbd-hand')hands[id.split('-')[0]]=new T.Box3().setFromObject(n)});
 for(const side of ['port','stbd']){const hb=hands[side];if(!hb||hb.isEmpty())continue;const c=hb.getCenter(new T.Vector3()),P=side==='port';
  const el=document.createElement('div');el.className='hr-read';el.setAttribute('role','group');el.setAttribute('aria-label','Hand reducer · '+(P?'Port':'STBD'));
  el.innerHTML='<h3>HAND REDUCER</h3><div class="hv"><span>0.00</span><small>kg/cm²</small></div><div class="track"><div class="fill"></div><div class="band"></div></div><div class="hs" role="status"></div><button type="button">↺ Reset</button>';
  el.querySelector('button').onclick=()=>{handStop(side);setHand(side,0)};
  hand2[side]={el,val:el.querySelector('.hv span'),bar:el.querySelector('.fill'),state:el.querySelector('.hs')};
  anchor(el,P?c.x+520:c.x-520,c.z);handReadout(side)}


 // Circuit status + step guide in the open middle of the drawing: what to do next and live readings per branch.
 if(false){const el=document.createElement('div');el.className='cs-panel';   /* client: Circuit Status panel removed */el.setAttribute('role','status');el.setAttribute('aria-live','polite');
  anchor(el,(x0+x1)/2,(all.min.z+z0)/2+30);let shown='',lastMsg='';
  const row=(lb,f)=>'<div class="lb">'+lb+'</div>'+['port','stbd'].map(s=>{const [t,c]=f(s);return '<div class="v '+c+'">'+t+'</div>'}).join('');
  const render=()=>{const any=['port','stbd'].filter(s=>circuitOn(s)),ok=any.filter(handInBand),vent=pitVenting();
   let n,cls='',msg;
   if(!flowing){n='1';msg='Press ▶ Start to supply MP air'}
   else if(!any.length){n='2';msg='Tap a red shut-off valve to open PORT or STBD'}
   else if(!ok.length){n='3';msg='Tap the hand reducer until it reads 0.13 – 0.16 (green)'}
   else{n='✓';cls='done';msg='Agitating – air bubbling through '+ok.map(s=>s==='port'?'PORT':'STBD').join(' & ')+' cells'}
   if(vent){n='!';cls='warn';msg='Pit pressure '+pitPressure.toFixed(2)+' kg/cm² – safety valves releasing'}
   const html='<h3>CIRCUIT STATUS<span class="run'+(flowing?' on':'')+'">'+(flowing?'● RUNNING':'○ STOPPED')+'</span></h3>'
    +'<div class="cs-step '+cls+'"><b>'+n+'</b><span>'+msg+'</span></div>'
    +'<div class="cs-grid"><div class="hd"></div><div class="hd v">PORT</div><div class="hd v">STBD</div>'
    +row('Shut-off valve',s=>!flowing?['—','idle']:branches[s].open?['OPEN','good']:['CLOSED','bad'])
    +row('Hand reducer',s=>{const v=branches[s].value;return [v.toFixed(2),v<=0?'idle':handInBand(s)?'good':'bad']})
    +row('Pressure gauge',s=>{const v=pgValue(s);return [v.toFixed(3),v<=0?'idle':v>SAFETY_SET?'bad':'good']})
    +'</div><div class="cs-pit"><span>Battery pit</span>'+pitPressure.toFixed(2)+' kg/cm² · '+(vent?'<b style="color:#c0392b">VENTING</b>':'<b style="color:#14864a">SAFE</b>')+'</div>';
   if(html!==shown){shown=html;el.innerHTML=html;const st=el.querySelector('.cs-step');if(st&&msg!==lastMsg){st.classList.add('enter');lastMsg=msg}}};
  render();setInterval(render,200)}
 if(window.__legendCard&&hands.port&&hands.stbd){const a=hands.port.getCenter(new T.Vector3()),b=hands.stbd.getCenter(new T.Vector3());anchor(window.__legendCard,(a.x+b.x)/2,a.z)}   // empty centre of the drawing
 // Fit the fixed top view to the circuit and its pit box with a slim margin.
 const fit=all.clone().union(new T.Box3(new T.Vector3(x0-W,yb,z0-W),new T.Vector3(x1+W,yb+H,z1+W)));
 const fw=fit.max.x-fit.min.x,fh=fit.max.z-fit.min.z;fitBox={cx:(fit.min.x+fit.max.x)/2,cz:(fit.min.z+fit.max.z)/2,w:fw*1.04,h:fh*1.04};document.querySelector('#viewport').style.inset='10px 8px 10px';
 layout();
}

let last=performance.now();function animate(now){const dt=Math.min(.05,(now-last)/1000);last=now;updateFlow();wheelUpdate(dt);backdropUpdate(dt);for(const battery of integratedBatteries)battery.update(dt);if(webglAvailable){if(actualModelReady)nativeAirUpdate(flowing?dt:0);else network.update(flowing?dt:0)}renderer.render(scene,camera);requestAnimationFrame(animate)}
const chooser=document.querySelector('#component-select');for(const p of parts.values()){const option=document.createElement('option');option.value=p.id;option.textContent=p.title;chooser.append(option)}chooser.onchange=()=>{if(chooser.value)select(chooser.value);else clearSelection()};
details();layout();requestAnimationFrame(animate);
// Read-only state for touch-display verification and integrations.
window.batteryAgitation={getState:()=>({selected,flowing,viewMode,labels:labelVisible,branches:JSON.parse(JSON.stringify(branches)),camera:{position:camera.position.toArray(),quaternion:camera.quaternion.toArray(),zoom:camera.zoom},parts:parts.size,pipes:pipes.length,actualBlenderModel:actualModelReady}),select,reset:()=>document.querySelector('#reset').click()};
// leaving the screen frees its graphics memory at once (phones keep the previous page alive otherwise)
if(webglAvailable)addEventListener('pagehide',()=>{renderer.dispose();renderer.forceContextLoss()});
addEventListener('pageshow',e=>{if(e.persisted)location.reload()});   // coming back to it: rebuild
