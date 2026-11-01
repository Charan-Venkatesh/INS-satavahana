import './offline-support.js';
import {createBatteryBubbles} from './battery-bubbles.js';
import {branchFlow,density} from './airflow-model.js';
import {openBatteryDetail,photoLid,createVapour,battery3D,facing} from './battery-detail.js';
import * as T from 'three';
import {AirflowNetwork} from './airflow3d.js';
import {GLTFLoader} from './assets/loaders/GLTFLoader.js';
const host=document.querySelector('#viewport'),labelsRoot=document.querySelector('#labels'),circuit=document.querySelector('#circuit');
const scene=new T.Scene();scene.background=new T.Color('#22282b');
const camera=new T.OrthographicCamera(-950,950,800,-800,1,10000);camera.position.set(0,3000,0);camera.up.set(0,0,-1);camera.lookAt(0,0,0);
let renderer,webglAvailable=true;try{if(new URLSearchParams(location.search).get('static')==='1')throw new Error('Static display requested');renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true})}catch{webglAvailable=false;const image=document.createElement('img');image.src='assets/assembled-top-view.jpg';image.alt='Assembled 3D battery agitation circuit, fixed top view';image.className='static-render';renderer={domElement:image,shadowMap:{},setPixelRatio(){},setSize(){},render(){}};document.body.classList.add('static-mode');document.querySelector('#flow-status').textContent='STATIC 3D VIEW';document.querySelector('#air').disabled=true;document.querySelector('#labels-toggle').disabled=true}renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=T.SRGBColorSpace;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;host.append(renderer.domElement);
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
{const st=document.createElement('style');st.textContent='#circuit{background:radial-gradient(ellipse at 50% 40%,#353d41 0%,#22282b 70%)}#circuit .drawing-label{color:#e8f2f3}#circuit .drawing-label small{color:#a9bec2}#circuit .drawing-label.muted{color:#86999d}#circuit .canvas-info{display:none}body.inspector-hidden aside{display:none!important}body.inspector-hidden main{grid-template-columns:minmax(0,1fr)!important}body.inspector-hidden #controls-toggle{display:block!important}';document.head.append(st)}
const branches={port:{open:false,auto:true,hand:true,value:.145,wheel:0},stbd:{open:false,auto:true,hand:true,value:.145,wheel:0}};
// Auto reducer ON reduces the supply to 0.45 kg/cm²; OFF (double-click to switch) bypasses it, so the full
// 45 kg/cm² supply passes on. Air passes whenever the shut-off is open.
// With the auto reducer bypassed the 45 kg/cm² also passes the hand reducer (it cannot regulate that inlet).
// A branch's circuit is ON only after Start with its shut-off open. While it is OFF the auto reducer and safety
// valve show OFF, and trying to switch them on shows a red warning instead.
const circuitOn=side=>flowing&&branches[side].open;
let warnTimer=0;
function circuitWarning(side){const B=side==='port'?'PORT':'STBD',msg='⚠ Circuit is OFF — '+(flowing?'open the '+B+' shut-off valve first.':'press Start and open the '+B+' shut-off valve first.');
 let el=document.querySelector('#circuit-warning');if(!el){el=document.createElement('div');el.id='circuit-warning';el.setAttribute('role','alert');
  el.style.cssText='position:absolute;left:50%;top:18px;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;border:1.5px solid #e74c3c;background:#1d2224ee;color:#ff5a4d;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center';
  document.querySelector('#circuit').append(el)}
 el.textContent=msg;el.style.opacity='1';clearTimeout(warnTimer);warnTimer=setTimeout(()=>{el.style.opacity='0'},3200)}
const SUPPLY=45,passes=side=>branches[side].open,autoOut=side=>branches[side].auto?AUTO_SET:SUPPLY,handActive=side=>branches[side].hand&&branches[side].auto;
// PG reading: hand reducer ON gives its setting (0.13–0.16), OFF leaves the auto reducer's 0.45 kg/cm².
const AUTO_SET=.45,DIAL_MAX=.6,pgLabels={};
const pgValue=side=>{const b=branches[side];return flowing&&passes(side)?(handActive(side)?b.value:autoOut(side)):0};
function dialFace(c,size){const k0=size/256;c.save();c.scale(k0,k0);c.strokeStyle='#477262';c.fillStyle='#477262';c.lineWidth=2;c.textAlign='center';c.font='bold 17px Arial';for(let k=0;k<=12;k++){const a=(135+k*22.5)*Math.PI/180,r1=k%2?88:82;c.beginPath();c.moveTo(128+96*Math.cos(a),128+96*Math.sin(a));c.lineTo(128+r1*Math.cos(a),128+r1*Math.sin(a));c.stroke();if(k%2===0)c.fillText((k*.05).toFixed(1),128+66*Math.cos(a),134+66*Math.sin(a))}c.font='14px Arial';c.fillText('kg/cm²',128,184);c.restore()}
let viewMode='top';
let flowing=false,selected=null,labelVisible=false;document.querySelector('#circuit').classList.add('hide-labels');const parts=new Map(),labelNodes=[],hotspots=[],wheels={},needles={},bodyGroups={};
function label(text,x,z,align='left',sub='',classes=''){const el=document.createElement('div');el.className='drawing-label '+align+' '+classes;const strong=document.createElement('span');strong.textContent=text;el.append(strong);if(sub){const sm=document.createElement('small');sm.textContent=sub;el.append(sm)}labelsRoot.append(el);labelNodes.push({el,x,z});return el}
function part(id,type,side,x,z,title,size=108){const g=new T.Group();g.position.copy(pos(x,z));scene.add(g);const data={id,type,side,x,z,title,group:g,size};parts.set(id,data);bodyGroups[id]=g;const b=document.createElement('button');b.className='part-button';b.dataset.part=id;b.setAttribute('aria-label',title);b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{select(id);if(type==='shutoff')action(branches[side].open?'close':'open')});if(type==='safety')b.addEventListener('click',()=>{if(!circuitOn(side))circuitWarning(side)});if(type==='auto')b.addEventListener('dblclick',()=>{select(id);action(branches[side].auto?'autooff':'autoon')});if(type==='hand')b.addEventListener('dblclick',()=>{select(id);action(branches[side].hand?'handoff':'handon')});labelsRoot.append(b);hotspots.push({el:b,x,z,size});return g}
function squareSymbol(g,symbol){box(g,112,112,25,mat.edge,0,-3);box(g,101,101,27,mat.white,0,0);if(symbol==='V')line(g,[[-45,32,-44],[0,32,44],[45,32,-44]]);else{line(g,[[-44,32,-44],[44,32,44]]);line(g,[[44,32,-44],[-44,32,44]])}}
function gauge(g,side){cyl(g,56,19,mat.metal,0,6);cyl(g,49,3,mat.white,0,17);const cv=document.createElement('canvas');cv.width=256;cv.height=256;const c=cv.getContext('2d');c.clearRect(0,0,256,256);c.strokeStyle='#477262';c.fillStyle='#477262';dialFace(c,256);const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;const face=mesh(g,new T.PlaneGeometry(98,98),new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}),0,20);face.rotation.x=-Math.PI/2;const needle=new T.Group();needle.position.y=24;g.add(needle);line(needle,[[0,0,0],[0,0,-36]],mat.ink,2.5);cyl(needle,5,3,mat.ink);needles[side]=needle}
function handWheel(g,side){const wheel=new T.Group();wheel.position.set(side==='port'?-87:87,23,0);g.add(wheel);const torus=mesh(wheel,new T.TorusGeometry(24,4,10,36),mat.black);torus.rotation.y=Math.PI/2;line(wheel,[[0,-21,0],[0,21,0]],mat.black,3);line(wheel,[[0,0,-21],[0,0,21]],mat.black,3);const sign=side==='port'?1:-1;line(g,[[sign*-55,22,0],[sign*-87,22,0]],mat.metal,5);wheels[side]=wheel}
function battery(g){box(g,292,152,36,mat.ivory,0,-16);box(g,302,160,8,mat.ivory,0,22);for(const row of [-1,1])for(let k=0;k<6;k++){const x=(-.4+.16*k)*292,z=row*.26*152;cyl(g,14,4,mat.metal,x,35,z);cyl(g,k===0||k===5?11.5:9.5,5,mat.black,x,40,z,k===0||k===5?6:48);cyl(g,5.5,5,mat.metal,x,45,z,6)}for(let k=1;k<5;k++)cyl(g,7,6,mat.metal,(-.4+.16*k)*292,36,0,6);cyl(g,8,9,mat.black,132,39,0);cyl(g,4.5,4,mat.blue,132,46,0)}
// Fixed plan follows the supplied drawing. Supply divides into two mirrored branches.
pipe([[960,170],[845,170],[845,300],[350,300]],'port','header');pipe([[845,300],[1420,300]],'stbd','header');
label('MP Air 45 kg/cm²',1050,110,'left');label('PORT',280,130,'center','','muted');label('STBD',1490,130,'center','','muted');
for(const [side,x] of [['port',350],['stbd',1420]]){
 const P=side==='port',B=P?'Port':'STBD',out=P?-1:1,inner=P?1:-1,pgX=P?165:1605,cellX=P?650:1120;
 let g=part(side+'-shutoff','shutoff',side,x,300,'Shut-off valve · '+B,108);cyl(g,55,17,mat.metal,0,4);cyl(g,48,7,mat.white,0,17);const wheel=new T.Group();wheel.position.y=24;g.add(wheel);line(wheel,[[-43,0,0],[43,0,0]]);line(wheel,[[0,0,-43],[0,0,43]]);g.userData.shutoffWheel=wheel;wheel.rotation.y=Math.PI/4;
 label('Shut-off valve',x,225,'center');
 pipe([[x,353],[x,401]],side);g=part(side+'-auto','auto',side,x,460,'Automatic reducer · '+B);squareSymbol(g,'V');label('Auto Reducer',x+inner*90,455,P?'left':'right','0.45 kg/cm²');
 pipe([[x,517],[x,584]],side);g=part(side+'-hand','hand',side,x,642,'Hand reducer · '+B,115);squareSymbol(g,'X');handWheel(g,side);label('Hand Reducer',x+inner*90,638,P?'left':'right','0.13–0.16 kg/cm²');
 // Separate accessible target for the outboard handwheel, without rotating the body.
 const h=document.createElement('button');h.className='part-button';h.setAttribute('aria-label','Inspect '+B+' side adjustment handle');h.onclick=()=>select(side+'-hand');h.ondblclick=()=>{select(side+'-hand');action(branches[side].hand?'handoff':'handon')};labelsRoot.append(h);hotspots.push({el:h,x:x+out*87,z:642,size:66});
 pipe([[x,699],[x,758]],side);g=part(side+'-filter','filter',side,x,820,'Filter · '+B,130);const diamond=box(g,88,88,27,mat.edge);diamond.rotation.y=Math.PI/4;const face=box(g,80,80,29,mat.white,0,2);face.rotation.y=Math.PI/4;label('Filter',x+inner*100,820,P?'left':'right');
 pipe([[x,883],[x,1080]],side);pipe([[x,950],[pgX,950],[pgX,842]],side,'gauge',10);g=part(side+'-pg','pg',side,pgX,790,'Pressure gauge · '+B,110);gauge(g,side);pgLabels[side]=label('PG',pgX,705,'center','0.000 kg/cm²').querySelector('small');
 pipe([[x,1080],[x+inner*345,1080]],side,'cells');pipe([[x,1080],[x,1190]],side,'safety');
 g=part(side+'-safety','safety',side,x,1240,'Safety valve · '+B,115);g.userData.pendingSafety=true;cyl(g,50,22,mat.yellow,0,8);label('Safety Valve',x+(P?-60:60),1333,'center','0.2 kg/cm²');
 g=part(side+'-battery','battery',side,cellX,1252,'Battery cell · '+B,310);battery(g);g.rotation.y=P?Math.PI:0;label('To the Cells',cellX,1140,'center');
 // "i" beside the 3D battery opens the transparent battery with bubble physics.
 {const info=document.createElement('button');info.className='battery-info';info.textContent='i';info.setAttribute('aria-label','Battery details · '+B);info.onclick=()=>openBattery(side);labelsRoot.append(info);labelNodes.push({el:info,x:cellX+(P?120:-120),z:1310})}
 const inletX=cellX+(P?-132:132);
 pipe([[inletX,1080],[inletX,1222],[inletX,1252,68]],side,'battery',8);
 // Additional manifold outlet stubs indicate the drawing's distribution rail.
 for(let k=0;k<6;k++){const sx=x+inner*(65+k*43);pipe([[sx,1080],[sx,1100]],side,'stub',5)}
}
// Drawing boundary, behind the components.
const boundaryGeo=new T.BufferGeometry().setFromPoints([pos(100,1020,1),pos(1710,1020,1)]);const boundary=new T.Line(boundaryGeo,new T.LineDashedMaterial({color:'#adc1b1',dashSize:18,gapSize:14}));boundary.computeLineDistances();scene.add(boundary);label('BATTERY PIT',888,1050,'center','','muted');
part('main-pipe','pipe','common',1120,185,'Transparent air pipe',150);
network.finalize();

const notes={pipe:'Transparent pipe walls reveal the internal air passage and moving air particles. The pipe route stays fixed. Shared junctions have continuous hollow bores and the tube ends meet the component ports.',shutoff:'Isolates this branch. The top cross is the shut-off symbol from your drawing.',auto:'Square top with the V symbol only. The component body and symbol stay fixed.',hand:'Square top with an X symbol. Only the outboard side adjustment handle rotates when adjusted.',filter:'A solid, shallow diamond body reproduces the exact filter symbol in plan.',pg:'The dial faces straight up so the reading stays visible in the locked top view.',safety:'Uses the perforated circular part you supplied for the safety-valve position. The yellow cap belongs on the battery lid.',battery:'The lid follows your battery photo: two rows of six terminal positions, red and yellow caps, a clear cap, and the air connection in the existing lid opening.'};
const titles={pipe:'Transparent air pipe',shutoff:'Shut-off valve',auto:'Automatic reducer',hand:'Hand reducer',filter:'Air filter',pg:'Pressure gauge',safety:'Safety valve',battery:'Battery cell'};
const num={pipe:'08',shutoff:'01',auto:'02',hand:'03',filter:'04',pg:'05',safety:'06',battery:'07'};
function details(){const el=document.querySelector('#detail');if(!selected){el.innerHTML='<div class="welcome-number">02<span style="font-size:18px"> branches</span></div><span class="selected-badge">FIXED TOP VIEW</span><h2>One supply.<br>Two branches.</h2><p class="desc">Touch any component to see its purpose and controls. The drawing stays in place.</p><div class="feature-list"><div><span>Supply, per drawing</span><b>45 kg/cm²</b></div><div><span>Automatic reducer</span><b>0.45 kg/cm²</b></div><div><span>Hand reducer range</span><b>0.13–0.16 kg/cm²</b></div><div><span>Safety setting</span><b>0.2 kg/cm²</b></div></div><div class="eyebrow" style="margin-top:14px">CALCULATED AIRFLOW (LIVE)</div><div class="feature-list" id="airflow-readout"></div><p class="tiny">Air enters at the MP air inlet and moves only inside the pipes. Particle speed follows the calculated velocity (log scale); colour shows pressure: dark blue 45, blue 0.45, cyan-blue 0.13–0.16 kg/cm². Gauge lines and stubs are dead ends: pressurised, no flow. Pipe and orifice sizes are estimates.</p>';readoutAt=0;return}
 const p=parts.get(selected),b=branches[p.side],side=p.side==='port'?'PORT':p.side==='stbd'?'STBD':'COMMON';let controls='',rows='';
 if(p.type==='pipe'){rows='<div><span>Pipe walls</span><b>Transparent</b></div><div><span>Visible air</span><b>Calculated flow, see below</b></div><div><span>Main pipe display size</span><b>50 mm · estimated</b></div>';controls='<div class="feature-list" id="airflow-readout"></div><img class="detail-image" src="assets/transparent-straight-pipe.png" alt="Transparent pipe with visible air"><div class="control-row"><button data-action="toggleair" class="primary">Pause / resume air</button></div>'}
 if(p.type==='shutoff'){rows='<div><span>Demonstration state</span><b>'+(b.open?'Open':'Closed')+'</b></div>';controls='<div class="control-row"><button data-action="open" class="'+(b.open?'primary':'')+'">ON · Open</button><button data-action="close" class="'+(!b.open?'primary':'')+'">OFF · Close</button></div>'}
 if(p.type==='auto'){rows='<div><span>State</span><b'+(circuitOn(p.side)?'>'+(b.auto?'ON · green, reduces to 0.45 kg/cm²':'OFF · red, bypassed: 45 kg/cm² passes'):' style="color:#e74c3c">OFF · circuit is off')+'</b></div><div><span>Drawing setpoint</span><b>0.45 kg/cm²</b></div><div><span>Top geometry</span><b>Square + V</b></div>';controls='<div class="control-row"><button data-action="autoon" class="'+(b.auto?'primary':'')+'">ON</button><button data-action="autooff" class="'+(!b.auto?'primary':'')+'">OFF</button></div><p class="tiny">Double-click the auto reducer to switch it ON or OFF.</p>'}
 if(p.type==='hand'){controls='<div class="control-row"><button data-action="handon" class="'+(b.hand?'primary':'')+'">ON · In line</button><button data-action="handoff" class="'+(!b.hand?'primary':'')+'">OFF · Bypassed</button></div><div class="value-readout"><span>Selected setting</span><strong>'+b.value.toFixed(3)+'</strong></div><div class="control-row"><button data-action="decrease" '+(!b.hand||b.value<=.130?'disabled':'')+'>− Decrease</button><button data-action="increase" '+(!b.hand||b.value>=.160?'disabled':'')+'>+ Increase</button></div><p class="tiny">Double-click the hand reducer to switch it ON or OFF; the side handle turns.</p>';rows='<div><span>State</span><b>'+(!b.auto?'Passing 45 kg/cm² (auto reducer OFF)':b.hand?'ON · PG reads 0.13–0.16':'OFF · PG reads 0.45')+'</b></div><div><span>Drawing range</span><b>0.13–0.16 kg/cm²</b></div><div><span>Moving part</span><b>Side handle only</b></div>'}
 if(p.type==='pg'){rows='<div><span>Reading</span><b>'+pgValue(p.side).toFixed(3)+' kg/cm²</b></div><div><span>Set by</span><b>'+(b.hand?'Hand reducer ON (0.13–0.16)':'Auto reducer, hand OFF (0.45)')+'</b></div><div><span>Dial scale</span><b>0–0.6 kg/cm²</b></div><div><span>Dial orientation</span><b>Face up / top view</b></div>';controls='<p class="tiny">Reading follows the demonstration controls. It is not a measured pressure or a validated plant calculation.</p>'}
 if(p.type==='filter')rows='<div><span>Top geometry</span><b>Diamond symbol</b></div><div><span>Connection</span><b>Hand reducer → cells</b></div>';
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
const WHEEL_SHUT=Math.PI/4,WHEEL_OPEN=-4*Math.PI,WHEEL_SPEED=3*Math.PI;   // shut rests as ×, open as + (≈2 turns apart); rad/s
const turnWheel=side=>{const w=bodyGroups[side+'-shutoff']?.userData.shutoffWheel;if(w)w.userData.target=branches[side].open?WHEEL_OPEN:WHEEL_SHUT};
// Auto reducer status colour: its square V cap is green while the auto reducer is ON (reducing) and red when it is
// OFF (bypassed); double-click to switch. The colour fades between states and pulses while air is passing through.
const autoLamps={},LAMP_ON=new T.Color('#22b45a'),LAMP_OFF=new T.Color('#d23b33');
function autoReducerLamps(){model3d.traverse(n=>{const m=/^(port|stbd)[ _]square[ _]symbol[ _]cap[ _]v/i.exec(n.name);if(!m||!n.isMesh)return;
 n.material=n.material.clone();n.material.color.copy(LAMP_OFF);if(n.material.emissive)n.material.emissive.copy(LAMP_OFF);autoLamps[m[1].toLowerCase()]={mesh:n,mix:0}})}
function lampUpdate(dt){const t=performance.now()/1000,c=new T.Color();for(const side in autoLamps){const l=autoLamps[side],on=branches[side].auto&&circuitOn(side),live=circuitOn(side);
 l.mix+=((on?1:0)-l.mix)*Math.min(1,dt*5);c.copy(LAMP_OFF).lerp(LAMP_ON,l.mix);l.mesh.material.color.copy(c);
 if(l.mesh.material.emissive){l.mesh.material.emissive.copy(c);l.mesh.material.emissiveIntensity=.25+(live?.35*(.5+.5*Math.sin(t*4)):0)}}}
function wheelUpdate(dt){lampUpdate(dt);for(const side of ['port','stbd']){const w=bodyGroups[side+'-shutoff']?.userData.shutoffWheel;if(!w||w.userData.target==null)continue;
 const d=w.userData.target-w.rotation.y,step=WHEEL_SPEED*dt;w.rotation.y+=Math.abs(d)<=step?d:Math.sign(d)*step}}
// Battery detail starts at this branch's PG reading, or the hand reducer setting when no air is flowing.
const openBattery=side=>openBatteryDetail({side,pressure:pgValue(side)||(branches[side].hand?branches[side].value:AUTO_SET)});
// As requested, both safety valves vent whenever their branch has air (Start + shut-off open), at any line pressure.
const venting=side=>flowing&&passes(side);
function action(a){if(a==='toggleair'){document.querySelector('#air').click();return}if(!selected)return;const p=parts.get(selected),b=branches[p.side];if(a==='battery3d'){openBattery(p.side);return}if(a==='open'||a==='close'){b.open=a==='open';turnWheel(p.side);showRunState()}if((a==='handon'||a==='handoff')&&b.hand!==(a==='handon')){b.hand=a==='handon';b.wheel+=(b.hand?1:-1)*4*Math.PI}if(a==='autoon'||a==='autooff'){if(!circuitOn(p.side)){circuitWarning(p.side);details();return}b.auto=a==='autoon'}if(a==='increase'||a==='decrease'){if(!b.hand){details();return}const sign=a==='increase'?1:-1;const next=Math.min(.160,Math.max(.130,Math.round((b.value+sign*.005)*1000)/1000));if(next!==b.value){b.value=next;b.wheel+=sign*Math.PI/3}}if(a==='release')releasing[p.side]=performance.now()<(releasing[p.side]||0)?0:Infinity;details()}
function updateFlow(){for(const p of pipes){const b=branches[p.branch];const open=!b||passes(p.branch);const isSafety=p.kind==='safety';const active=flowing&&(p.kind==='header'||open)&&(!isSafety||venting(p.branch));p.flow=active?1:0;p.intensity=active?.85:0;p.state=active?'flowing':'empty'}for(const side of ['port','stbd']){const v=pgValue(side),over=v>DIAL_MAX,t=v.toFixed(3)+' kg/cm²'+(over?' · OVER RANGE':'');if(pgLabels[side]&&pgLabels[side].textContent!==t){pgLabels[side].textContent=t;pgLabels[side].style.color=over?'#c0392b':''}needles[side].rotation.y=-(Math.min(v,DIAL_MAX*1.04)/DIAL_MAX)*Math.PI*1.5+Math.PI*.75-(needles[side].userData.nativeBaseline||0);const w=wheels[side],axis=w.userData.nativeAxis||'x',target=(w.userData.restAngle||0)+branches[side].wheel;w.rotation[axis]+=(target-w.rotation[axis])*.16}}
function showRunState(){
 for(const id of ['#air','#start']){const button=document.querySelector(id);button.innerHTML=flowing?'<span>Ⅱ</span> Pause':'<span>▶</span> Start';button.setAttribute('aria-pressed',String(flowing));button.disabled=!webglAvailable}
 document.querySelector('#flow-status').textContent=webglAvailable?(flowing?'PORT '+(branches.port.open?'ON':'OFF')+' · STBD '+(branches.stbd.open?'ON':'OFF'):'READY · PRESS START'):'STATIC 3D VIEW';document.querySelector('.live-dot').style.background=flowing?'#1caf93':'#97a89c';
}
document.querySelector('#air').onclick=()=>{flowing=!flowing;showRunState();if(flowing)select('port-shutoff');else if(selected)details()};
document.querySelector('#start').onclick=()=>document.querySelector('#air').click();
showRunState();
document.querySelector('#labels-toggle').onclick=()=>{labelVisible=!labelVisible;circuit.classList.toggle('hide-labels',!labelVisible);document.querySelector('#labels-toggle').textContent=labelVisible?'☷  Hide drawing labels':'☷  Show drawing labels';document.querySelector('#labels-toggle').setAttribute('aria-pressed',String(labelVisible))};
document.querySelector('#controls-toggle').onclick=()=>{const hidden=document.body.classList.remove('inspector-hidden');const open=document.body.classList.toggle('inspector-open');document.querySelector('#controls-toggle').setAttribute('aria-expanded',String(open))};
function clearSelection(){document.body.classList.remove('inspector-open');document.querySelector('#controls-toggle').setAttribute('aria-expanded','false');selected=null;document.querySelector('#component-select').value='';hotspots.forEach(h=>{h.el.classList.remove('selected');h.el.setAttribute('aria-pressed','false')});details()}
// × hides the Component Inspector on every screen size (on wide screens the circuit takes its column);
// Controls or touching a part brings it back.
document.querySelector('#clear').onclick=()=>{clearSelection();document.body.classList.add('inspector-hidden')};
document.querySelector('#reset').onclick=()=>{setView('top');for(const side of ['port','stbd']){Object.assign(branches[side],{open:false,auto:true,hand:true,value:.145,wheel:0});bodyGroups[side+'-shutoff'].userData.shutoffWheel.userData.target=WHEEL_SHUT;releasing[side]=0}flowing=false;showRunState();if(labelVisible)document.querySelector('#labels-toggle').click();clearSelection()};
document.querySelector('#reference').onclick=()=>document.querySelector('#reference-dialog').showModal();document.querySelector('#close-reference').onclick=()=>document.querySelector('#reference-dialog').close();
document.querySelector('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{document.querySelector('#fullscreen').textContent='Use browser full screen'}};document.addEventListener('fullscreenchange',()=>document.querySelector('#fullscreen').textContent=document.fullscreenElement?'⛶ Exit full screen':'⛶ Full screen');
// No OrbitControls, drag handlers, zoom or camera animation. Resize only fits the same plan.
function screenPoint(x,z){const v=pos(x,z,45).project(camera);const r=host.getBoundingClientRect(),parent=circuit.getBoundingClientRect();return {x:r.left-parent.left+(v.x+1)*r.width/2,y:r.top-parent.top+(1-v.y)*r.height/2}}
function layout(){const w=host.clientWidth,h=host.clientHeight,aspect=w/h;const planW=1900,planH=1490;const height=Math.max(planH,planW/aspect);camera.left=-height*aspect/2;camera.right=height*aspect/2;camera.top=height/2;camera.bottom=-height/2;camera.updateProjectionMatrix();camera.updateMatrixWorld();renderer.setSize(w,h);for(const l of labelNodes){const p=screenPoint(l.x,l.z);l.el.style.left=p.x+'px';l.el.style.top=p.y+'px'}for(const l of hotspots){const p=screenPoint(l.x,l.z),size=l.size*w/(height*aspect);Object.assign(l.el.style,{left:p.x+'px',top:p.y+'px',width:size+'px',height:size+'px'})}}
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
 const f=side=>{const b=branches[side];return branchFlow({open:flowing&&passes(side),auto:autoOut(side),hand:handActive(side),handSet:b.value,ventAlways:true,batteries:2})};
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
  const [branch]=sec.key.split(':'),mat=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,
   uniforms:{uPhase:{value:0},uAlpha:{value:0},uReach:{value:0},uLen:{value:1},uColor:{value:new T.Color('#1593e6')}},
   vertexShader:'attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
   fragmentShader:'uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.14+.86*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,vec3(.9,.98,1.),head*.7)*a,a);}'});
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
  sec.branch=branch;sec.mat=mat;
 }
}
function streamlineUpdate(dt){const hi=density(45);
 for(const sec of pipeSections){if(!sec.mat)continue;const b=branches[sec.branch],a=air[sec.branch],st=sec.stage;
  const on=flowing&&(st==='common'||st==='header'||(!!b&&b.open))&&(st!=='safety'||venting(sec.branch));
  const vel=!on?0:st==='common'?Math.max(HEADER_SHOW,air.mTotal/(hi*1.96e-4)):st==='header'?Math.max(HEADER_SHOW,b.open?a.v.header:0):(['gauge','stub'].includes(st)?0:(a.v[st]||0));
  const idx=STAGE_ORDER[st]??7,front=idx<2?fill.common-idx:Math.min(fill.common-idx,fill[sec.branch]-(idx-2)),reach=Math.max(0,Math.min(1,front));
  const u=sec.mat.uniforms;u.uPhase.value+=dt*visSpeed(vel)*.9;u.uReach.value=on?reach:0;u.uAlpha.value=on?(vel>0?1:.4):0;
  const sp=['common','header','hp'].includes(st)?SUPPLY:st==='auto'?autoOut(sec.branch):b&&handActive(sec.branch)?b.value:autoOut(sec.branch);
  u.uColor.value.set(st==='safety'?'#46c8ff':sp>=10?'#3b78ff':sp>=.3?'#2fb4ff':'#4fe2ff')}
}
function clearPipes(list,oldMaterial){
 model3d.traverse(n=>{if(n.isMesh&&n.material===oldMaterial)n.visible=false});
 // Glass: a faint clear body plus an additive reflection layer, so highlights and bright rims stay at full
 // strength instead of being dimmed by the body's transparency. Front faces with depth writes: where tubes and
 // joint spheres overlap, the wall is drawn once, not stacked.
 const env=glassEnvironment(),steel=new T.MeshStandardMaterial({color:'#c4cbd0',metalness:.95,roughness:.28,envMap:env,envMapIntensity:1.2}),bolt=new T.MeshStandardMaterial({color:'#8f979c',metalness:.9,roughness:.35,envMap:env});
 const mat=new T.MeshPhysicalMaterial({color:'#c9dde2',transparent:true,opacity:.18,roughness:.02,metalness:0,side:T.FrontSide,depthWrite:true});
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
const FILL_RATE=2.2,STAGE_ORDER={common:0,header:1,hp:2,auto:3,hand:4,filter:5,gauge:6,manifold:6,safety:6.5,stub:7,hose:7};
const fill={common:0,port:0,stbd:0};
function createPipeFog(count){
 const geo=new T.BufferGeometry(),pos=new Float32Array(count*3),col=new Float32Array(count*3),size=new Float32Array(count),alpha=new Float32Array(count);
 geo.setAttribute('position',new T.BufferAttribute(pos,3));geo.setAttribute('color',new T.BufferAttribute(col,3));geo.setAttribute('aSize',new T.BufferAttribute(size,1));geo.setAttribute('aAlpha',new T.BufferAttribute(alpha,1));
 const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,vertexColors:true,uniforms:{uScale:{value:1}},
  vertexShader:'attribute float aSize;attribute float aAlpha;varying float vA;varying vec3 vC;uniform float uScale;void main(){vA=aAlpha;vC=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}',
  fragmentShader:'varying float vA;varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.7)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vC,vec3(.55,.9,1.),.5)*a*.8,a);}'});
 const points=new T.Points(geo,mat);points.frustumCulled=false;points.renderOrder=4;   // drawn before the clear tubes (5), behind their walls
 return {points,geo,mat,pos,col,size,alpha};
}
function nativeAirUpdate(dt){if(!nativeAir)return;computeAir();const v=new T.Vector3(),w=new T.Vector3(),c=new T.Color(),hi=density(45),F=nativeAir;
 // fill fronts: advance while air is admitted, drain twice as fast when it is shut off
 const step=(k,on)=>{fill[k]=on?fill[k]+dt*FILL_RATE:Math.max(0,fill[k]-dt*FILL_RATE*2)};
 step('common',flowing);for(const side of ['port','stbd'])step(side,flowing&&branches[side].open&&fill.common>=2);
 F.mat.uniforms.uScale.value=renderer.domElement.height/(camera.top-camera.bottom);
 for(let i=0;i<nativeAirFrames.length;i++){const p=nativeAirFrames[i],b=branches[p.branch],a=air[p.branch];
  const pressurised=flowing&&p.kind!=='release'&&(p.kind==='header'||(!!b&&b.open))&&(p.kind!=='safety'||venting(p.branch));
  const vel=!pressurised?0:p.stage==='common'?Math.max(HEADER_SHOW,air.mTotal/(hi*1.96e-4)):p.stage==='header'?Math.max(HEADER_SHOW,b.open?a.v.header:0):(['gauge','stub'].includes(p.stage)?0:(a.v[p.stage]||0));
  p.ph+=dt*10*visSpeed(vel);const fr=(p.src||p).frames,n=fr.length,f=Math.floor(p.ph)%n;v.fromArray(fr[f]);const next=fr[(f+1)%n];if(next&&v.distanceTo(w.fromArray(next))<25)v.lerp(w,p.ph%1);
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
 const model=gltf.scene;model.name='ACTUAL_ASSEMBLED_BLENDER_MODEL';model.scale.setScalar(625);scene.add(model);scene.updateMatrixWorld(true);
 const pipeMaterial=new T.MeshPhysicalMaterial({color:'#76b8b7',transparent:true,opacity:.20,roughness:.17,metalness:.02,clearcoat:1,side:T.DoubleSide,depthWrite:false});
 const rootNodes=[],handNodes=[],needleNodes=[];model.traverse(n=>{if(n.userData.release_branch){nativeReleaseStreaks.push(n);n.visible=false}if(n.userData.touch_id)rootNodes.push(n);if(n.userData.touch_handle)handNodes.push(n);if(n.userData.touch_needle)needleNodes.push(n);if(n.isMesh){let parent=n,pipe=false;while(parent){if(parent.userData.pipe_material||String(parent.userData.asset_source||'').includes(': duct-'))pipe=true;parent=parent.parent}if(pipe)n.material=pipeMaterial;n.castShadow=true;n.receiveShadow=true}});
 for(const root of rootNodes)if(root.userData.touch_id.endsWith('-battery'))integratedBatteries.push(createBatteryBubbles({scene,root,side:root.userData.touch_id.split('-')[0],branches,isFlowing:()=>flowing,isFront:()=>viewMode==='front'}));
 for(const root of rootNodes){const id=root.userData.touch_id;if(id.endsWith('-shutoff')){const pivot=new T.Group();pivot.position.set(0,.079,0);root.add(pivot);scene.updateMatrixWorld(true);for(const child of [...root.children])if(child!==pivot&&child.name.toLowerCase().includes('handwheel'))pivot.attach(child);bodyGroups[id].userData.shutoffWheel=pivot;pivot.rotation.y=branches[id.split('-')[0]].open?WHEEL_OPEN:WHEEL_SHUT;pivot.userData.target=pivot.rotation.y}}
 for(const node of handNodes){const side=node.userData.touch_handle;node.userData.nativeAxis='y';node.userData.restAngle=node.rotation.y;wheels[side]=node}
 for(const node of needleNodes){const side=node.userData.touch_needle,c=node.userData.touch_center,pivot=new T.Group();pivot.position.set(c[0],c[2],-c[1]);model.add(pivot);scene.updateMatrixWorld(true);pivot.attach(node);pivot.userData.nativeBaseline=-(.145/.4)*Math.PI*1.5+Math.PI*.75;needles[side]=pivot;const cv=document.createElement('canvas');cv.width=cv.height=512;dialFace(cv.getContext('2d'),512);const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=4;const face=new T.Mesh(new T.PlaneGeometry(.154,.154),new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false}));face.rotation.x=-Math.PI/2;face.position.set(c[0],c[2]+.0028,-c[1]);face.renderOrder=2;model.add(face)}
 model.traverse(n=>{if(/gauge.?number|dial.?tick/i.test(n.name))n.visible=false});
 scene.updateMatrixWorld(true);model3d=model;buildPlume();rerouteBatteryHoses(air);autoReducerLamps();
 classifyAir(air);clearPipes(air.filter(p=>!p.src),pipeMaterial);nativeAirFrames=air;nativeAir=createPipeFog(air.length);scene.add(nativeAir.points);nativeAirUpdate(0);ground.visible=false;actualModelReady=true;loading.remove();renderer.render(scene,camera);
}).catch(error=>{loading.remove();const e=document.querySelector('#error');e.hidden=false;e.textContent='The assembled 3D model could not load. Please reload.';console.error(error)});

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
 const rubber=new T.MeshStandardMaterial({color:'#1d1f21',roughness:.75}),hoseMat=new T.MeshPhysicalMaterial({color:'#efe4b8',roughness:.12,transmission:.55,thickness:3,transparent:true,opacity:.6,side:T.DoubleSide});
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
  secondBattery(side,side==='port'?-150:150,box,centre,starts[side],air)}
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
}
function applyBatteryView(){
 const top=viewMode!=='front';
 for(const side in flatBattery)for(const o of flatBattery[side])o.visible=!top;
 for(const t of topBatteries){t.b.group.visible=t.hose.visible=top}
 for(const side in hoseAir)for(const p of hoseAir[side])p.frames=top&&p.framesTop?p.framesTop:p.framesFront;
}
function lidVapourUpdate(dt){
 const px=renderer.domElement.height/(camera.top-camera.bottom),lv=side=>flowing&&passes(side)?Math.min(1,.35+pgValue(side)/.16*.4):0;
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
 for(const side of ['port','stbd']){const target=venting(side)?Math.min(1,.55+Math.max(0,pgValue(side)-SAFETY_SET)/.25*.45):0;level[side]+=(target-level[side])*Math.min(1,dt*(target>level[side]?6:3))}
 plume.pts.material.uniforms.uScale.value=renderer.domElement.height/(camera.top-camera.bottom);
 for(let i=0;i<state.length;i++){const q=state[i],h=q.h,L=level[h.side];
  q.age+=dt/q.life;if(q.age>=1){q.age%=1;q.live=L>.02&&Math.random()<L;q.a=Math.random()*6.283;q.r=Math.random();q.life=.8+Math.random()*.6}
  if(!q.live||!flowing){alpha[i]=0;continue}
  const t=q.age,k=2.4,s=h.len*2.3*(1-Math.exp(-k*t))/(1-Math.exp(-k)),spread=s*(.03+.16*t)*Math.sqrt(q.r),wob=Math.sin(t0*7+i)*s*.035;
  const ox=Math.cos(q.a)*spread+wob,oy=Math.sin(q.a)*spread;
  pos[i*3]=h.o.x+h.d.x*s+h.u.x*ox+h.w.x*oy;pos[i*3+1]=h.o.y+h.d.y*s+h.u.y*ox+h.w.y*oy;pos[i*3+2]=h.o.z+h.d.z*s+h.u.z*ox+h.w.z*oy;
  size[i]=5+t*44;alpha[i]=L*.55*Math.min(1,t/.05)*Math.pow(1-t,1.3)}
 geo.attributes.position.needsUpdate=geo.attributes.aAlpha.needsUpdate=geo.attributes.aSize.needsUpdate=true;
}
function setView(mode){
 viewMode=mode;const front=mode==='front';
 camera.position.set(0,front?230:3000,front?3000:0);camera.up.set(0,front?1:0,front?0:-1);camera.lookAt(0,front?230:0,0);
 circuit.classList.toggle('front-view',front);
 document.querySelector('#view-top').setAttribute('aria-pressed',String(!front));document.querySelector('#view-front').setAttribute('aria-pressed',String(front));
 const badge=document.querySelector('.selected-badge');if(badge)badge.textContent=front?'FIXED FRONT VIEW':'FIXED TOP VIEW';
 circuit.setAttribute('aria-label',front?'Locked front-view 3D circuit':'Locked top-view battery agitation circuit');
 poseSafety();applyBatteryView();layout();
}
document.querySelector('#view-top').onclick=()=>setView('top');
document.querySelector('#view-front').onclick=()=>setView('front');

let last=performance.now();function animate(now){const dt=Math.min(.05,(now-last)/1000);last=now;updateFlow();wheelUpdate(dt);for(const battery of integratedBatteries)battery.update(dt);if(webglAvailable){if(actualModelReady)nativeAirUpdate(flowing?dt:0);else network.update(flowing?dt:0)}renderer.render(scene,camera);requestAnimationFrame(animate)}
const chooser=document.querySelector('#component-select');for(const p of parts.values()){const option=document.createElement('option');option.value=p.id;option.textContent=p.title;chooser.append(option)}chooser.onchange=()=>{if(chooser.value)select(chooser.value);else clearSelection()};
details();layout();requestAnimationFrame(animate);
// Read-only state for touch-display verification and integrations.
window.batteryAgitation={getState:()=>({selected,flowing,viewMode,labels:labelVisible,branches:JSON.parse(JSON.stringify(branches)),camera:{position:camera.position.toArray(),quaternion:camera.quaternion.toArray(),zoom:camera.zoom},parts:parts.size,pipes:pipes.length,actualBlenderModel:actualModelReady}),select,reset:()=>document.querySelector('#reset').click()};
