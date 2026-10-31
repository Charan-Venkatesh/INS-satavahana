import * as T from 'three';
// Integrated cutaway occupies the existing battery case bounds; no second scene or camera.
export function createBatteryBubbles({scene,root,side,branches,isFlowing,isFront}){
 let shell;const ribs=[];root.traverse(n=>{if(n.isMesh&&n.name.replaceAll('_',' ').startsWith('Battery tall case'))shell=n;if(n.isMesh&&n.name.replaceAll('_',' ').startsWith('Visible plate edge'))ribs.push(n)});
 if(!shell)return {update(){}};
 const original=shell.material,bounds=new T.Box3().setFromObject(shell),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
 const glass=new T.MeshPhysicalMaterial({color:'#a5c6bf',transparent:true,opacity:.12,roughness:.18,depthWrite:false,side:T.DoubleSide});
 const group=new T.Group();group.name=side+' integrated battery bubbles';scene.add(group);
 function box(w,h,d,material,x,y,z){const m=new T.Mesh(new T.BoxGeometry(w,h,d),material);m.position.set(x,y,z);group.add(m);return m}
 const liquid=new T.MeshPhysicalMaterial({color:'#75afa5',transparent:true,opacity:.25,roughness:.18,depthWrite:false,side:T.DoubleSide});
 box(size.x*.89,size.y*.84,size.z*.8,liquid,center.x,bounds.min.y+size.y*.45,center.z);
 const metal=new T.MeshStandardMaterial({color:'#718981',roughness:.4,metalness:.35});
 for(let i=0;i<6;i++)box(size.x*.014,size.y*.89,size.z*.28,metal,bounds.min.x+size.x*(.1+i*.16),center.y,center.z-size.z*.18);
 for(const x of [-1,1])box(size.x*.025,size.y,size.z,metal,center.x+x*size.x*.48,center.y,center.z);
 box(size.x,size.y*.025,size.z,metal,center.x,bounds.min.y,center.z);
 const geo=new T.SphereGeometry(1,12,8),material=new T.MeshBasicMaterial({color:'#f0ffff',toneMapped:false});const bubbles=[];
 // Appearance defaults only: pressure is deliberately NOT converted into flow or velocity.
 // Smaller, staggered bubbles replace the exaggerated uniformly filled columns.
 for(let i=0;i<72;i++){const m=new T.Mesh(geo,material);const r=size.x*(.0035+(i*31%89)/89*.006);m.scale.setScalar(r);group.add(m);bubbles.push({m,lane:i%6,phase:(i*73%113)/113,speed:.13+(i*17%29)/29*.10,r,t:(i*73%113)/113,alive:true})}
 let wasOpen=branches[side].open;
 return {update(dt){const front=isFront();group.visible=front;shell.material=front?glass:original;shell.castShadow=!front;ribs.forEach(n=>n.visible=!front);if(!front)return;
 const moving=isFlowing(),open=branches[side].open;
 if(open&&!wasOpen)for(const b of bubbles){b.alive=true;b.t=b.phase}wasOpen=open;
 for(const b of bubbles){
  if(moving){b.t+=dt*b.speed;if(b.t>=1){b.t%=1;b.alive=open}}
  const t=b.t;b.m.visible=b.alive&&open&&moving;
  // Shut-off and master Start gate the visible air in this branch.
  b.m.scale.setScalar(b.r); // Expansion requires confirmed liquid depth/density; do not invent it.
  b.m.position.set(bounds.min.x+size.x*(.1+b.lane*.16+Math.sin(t*12+b.phase*20)*.012),bounds.min.y+size.y*(.04+t*.81),center.z+size.z*(.1+Math.sin(b.phase*32)*.16));
 }
 }};
}
