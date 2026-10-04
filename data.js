window.PLANNER_DATA={
 room:{width:515,length:721,ceiling:255},
 fixed:{
  hall:{x:0,y:170,w:0,h:80},arrival:{x:0,y:170,w:110,d:90},
  windows:[{id:'W1',x:505,y:62,w:10,d:96},{id:'W2',x:505,y:292,w:10,d:96},{id:'W3',x:505,y:529,w:10,d:96}],
  radiators:[{id:'R1',x:505,y:62,w:10,d:96},{id:'R2',x:505,y:292,w:10,d:96},{id:'R3',x:505,y:529,w:10,d:96}],
  kitchen:[{id:'Kitchen top',x:0,y:446,w:200,d:60},{id:'Kitchen left',x:0,y:446,w:60,d:275},{id:'Kitchen bottom',x:0,y:661,w:270,d:60}],
  divider:{id:'Fixed 200 cm wall',x:0,y:446,w:200,d:4}
 },
 prefabs:[
  {group:'Seating',key:'chair75',name:'Swivel chair 75 × 75',shape:'rect',w:75,d:75,h:82,color:'#9bb0a8',round:16},
  {group:'Seating',key:'valtorp',name:'VALTORP storage bench 103 × 46',shape:'rect',w:103,d:46,h:47,color:'#879f73',round:8,note:'Official IKEA footprint; seat depth 42 cm. Storage bench, not a sectional sofa.'},
  {group:'Seating',key:'ottoman',name:'Ottoman 80 × 70',shape:'rect',w:80,d:70,h:42,color:'#8ba398',round:10},
  {group:'Media',key:'tv65',name:'65-inch TV',shape:'rect',w:145,d:8,h:83,color:'#263d35'},
  {group:'Media',key:'focal',name:'Focal Aria 926',shape:'rect',w:29.4,d:37.1,h:103.5,color:'#2f4039'},
  {group:'Media',key:'divider',name:'Media divider 200 × 45 × 120',shape:'rect',w:200,d:45,h:120,color:'#d8cfb7'},
  {group:'Media',key:'besta120',name:'BESTÅ media 120 × 40',shape:'rect',w:120,d:40,h:48,color:'#d8cfb7'},
  {group:'Tables',key:'coffee65',name:'GARNANÄS coffee 65 × 65',shape:'rect',w:65,d:65,h:40,color:'#c98e61',round:8},
  {group:'Tables',key:'dining180',name:'Dining table 180 × 90',shape:'rect',w:180,d:90,h:75,color:'#ca8f62',clearance:'adaptive',seats:6,round:8},
  {group:'Tables',key:'dining150',name:'Dining table 150 × 90',shape:'rect',w:150,d:90,h:75,color:'#ca8f62',clearance:'adaptive',seats:6,round:8},
  {group:'Work',key:'desk',name:'Desk 160 × 80',shape:'rect',w:160,d:80,h:75,color:'#d8ad83'},
  {group:'Work',key:'deskchair',name:'Desk chair zone 140 × 90',shape:'rect',w:140,d:90,h:0,color:'#d8ad8355'},
  {group:'Storage',key:'storage240',name:'Closed storage 240 × 40',shape:'rect',w:240,d:40,h:80,color:'#d8cfb7'},
  {group:'Storage',key:'storage200',name:'Closed storage 200 × 40',shape:'rect',w:200,d:40,h:80,color:'#d8cfb7'},
  {group:'Storage',key:'besta60',name:'BESTÅ cabinet 60 × 42',shape:'rect',w:60,d:42,h:64,color:'#d8cfb7'},
  {group:'Storage',key:'eket35',name:'EKET 35 × 35',shape:'rect',w:35,d:35,h:70,color:'#d8cfb7'},
  {group:'BILLY storage',key:'billy40low',name:'BILLY narrow low 40 × 28 × 106',shape:'rect',w:40,d:28,h:106,color:'#eee9db',note:'Current official BILLY footprint. Wall anchoring required.'},
  {group:'BILLY storage',key:'billy80low',name:'BILLY low 80 × 28 × 106',shape:'rect',w:80,d:28,h:106,color:'#eee9db'},
  {group:'BILLY storage',key:'billy40',name:'BILLY narrow 40 × 28 × 202',shape:'rect',w:40,d:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billy80',name:'BILLY standard 80 × 28 × 202',shape:'rect',w:80,d:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billy40deep',name:'BILLY deep narrow 40 × 39 × 202',shape:'rect',w:40,d:39,h:202,color:'#e5dfd0'},
  {group:'BILLY storage',key:'billy80deep',name:'BILLY deep 80 × 39 × 202',shape:'rect',w:80,d:39,h:202,color:'#e5dfd0'},
  {group:'BILLY storage',key:'billy40tall',name:'BILLY narrow + top 40 × 28 × 237',shape:'rect',w:40,d:28,h:237,color:'#eee9db'},
  {group:'BILLY storage',key:'billy80tall',name:'BILLY + top 80 × 28 × 237',shape:'rect',w:80,d:28,h:237,color:'#eee9db'},
  {group:'BILLY storage',key:'billyOx40low',name:'BILLY/OXBERG door low 40 × 30 × 106',shape:'rect',w:40,d:30,h:106,color:'#dce5e0'},
  {group:'BILLY storage',key:'billyOx80low',name:'BILLY/OXBERG doors low 80 × 30 × 106',shape:'rect',w:80,d:30,h:106,color:'#dce5e0'},
  {group:'BILLY storage',key:'billyOx40',name:'BILLY/OXBERG door 40 × 30 × 202',shape:'rect',w:40,d:30,h:202,color:'#dce5e0'},
  {group:'BILLY storage',key:'billyOx80',name:'BILLY/OXBERG doors 80 × 30 × 202',shape:'rect',w:80,d:30,h:202,color:'#dce5e0'},
  {group:'BILLY storage',key:'billyOx80deep',name:'BILLY/OXBERG deep doors 80 × 41 × 202',shape:'rect',w:80,d:41,h:202,color:'#d4dfda'},
  {group:'BILLY storage',key:'billy120',name:'BILLY combination 120 × 28 × 202',shape:'rect',w:120,d:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billy160',name:'BILLY combination 160 × 28 × 202',shape:'rect',w:160,d:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billy200',name:'BILLY combination 200 × 28 × 202',shape:'rect',w:200,d:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billy240low',name:'BILLY low combination 240 × 28 × 106',shape:'rect',w:240,d:28,h:106,color:'#eee9db'},
  {group:'BILLY storage',key:'billyCornerR',name:'BILLY corner 95/95 × 28 · right',shape:'l-right',w:95,d:95,leg:28,h:202,color:'#eee9db'},
  {group:'BILLY storage',key:'billyCornerL',name:'BILLY corner 95/95 × 28 · left',shape:'l-left',w:95,d:95,leg:28,h:202,color:'#eee9db'},
  {group:'Plants',key:'plant30',name:'Plant Ø30',shape:'circle',w:30,d:30,h:80,color:'#5f8061'}
 ],
 templates:[
  {id:'2j',name:'2J · 299 × 159 L',items:[
   ['Desk',0,0,160,80,75,'rect','#d8ad83',0],['Desk chair zone',10,80,140,90,0,'rect','#d8ad8355',0],
   ['EKET left',165,0,35,35,70,'rect','#d8cfb7',0],['Focal left',212.6,10,29.4,37.1,103.5,'rect','#2f4039',0],['65-inch TV',252,0,145,8,83,'rect','#263d35',0],['BESTÅ media',264.5,8,120,40,48,'rect','#d8cfb7',0],['Focal right',407,10,29.4,37.1,103.5,'rect','#2f4039',0],['EKET right',446.4,0,35,35,70,'rect','#d8cfb7',0],
   ['299 × 159 L',175,121,299,159,85,'l-right','#78978b',0,95],['Swivel chair',175,100,75,75,82,'rect','#9bb0a8',0],['Coffee table',292,88,65,65,40,'rect','#c98e61',0],['Sofa-back storage',274,290,200,40,80,'rect','#d8cfb7',0],
   ['Dining 180 × 90',295,480,180,90,75,'rect','#ca8f62',0,null,'adaptive',6],['Bottom storage',275,681,240,40,80,'rect','#d8cfb7',0]
  ]},
  {id:'blank',name:'Blank room',items:[]}
 ]
};

// Build the room-fitting JÄTTEBO family from official module dimensions:
// 1-seat 70×95, wide 1.5-seat 95×95, chaise 95×160, armrest 25×95 cm.
(()=>{
 const P=window.PLANNER_DATA.prefabs, made=[];
 const runs=[
  ['single 70',1,0],['wide single 95',0,1],['two 140',2,0],['mixed 165',1,1],
  ['wide two 190',0,2],['three 210',3,0],['mixed 235',2,1],
  ['mixed wide 260',1,2],['wide three 285',0,3],['maximum mixed 330',2,2]
 ];
 const armSets=[['no arms',0],['left arm',25],['right arm',25],['both arms',50]];
 for(const [label,n70,n95] of runs){
  const base=n70*70+n95*95;
  for(const [arms,extra] of armSets){
   const width=base+extra;if(width>330)continue;
   made.push({group:'JÄTTEBO straight',key:`j-st-${n70}-${n95}-${arms.replaceAll(' ','-')}`,name:`JÄTTEBO ${label} · ${arms} · ${width}×95`,shape:'rect',w:width,d:95,h:71,color:'#769589',note:`Modules: ${n70}×70 cm + ${n95}×95 cm; ${arms}. Planning footprint.`});
  }
 }
 const lRuns=[['chaise only',0,0],['single + chaise',1,0],['wide single + chaise',0,1],['two + chaise',2,0],['mixed + chaise',1,1],['wide two + chaise',0,2],['three + chaise',3,0],['mixed wide + chaise',2,1]];
 for(const [label,n70,n95] of lRuns){
  const base=95+n70*70+n95*95;
  for(const side of ['right','left'])for(const outerArm of [false,true]){
   const width=base+(outerArm?25:0);if(width>330)continue;
   made.push({group:'JÄTTEBO L / chaise',key:`j-l-${side}-${n70}-${n95}-${outerArm?'arm':'open'}`,name:`JÄTTEBO ${label} · chaise ${side} · ${outerArm?'outer arm':'open end'} · ${width}×160`,shape:`l-${side}`,w:width,d:160,leg:95,h:71,color:'#769589',note:`Chaise 95×160; run ${n70}×70 + ${n95}×95 cm; ${outerArm?'25 cm arm at straight outer end':'no outer end arm'}.`});
  }
 }
 P.unshift(...made);
})();