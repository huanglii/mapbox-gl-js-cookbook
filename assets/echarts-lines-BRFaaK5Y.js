import{b as y,S as b}from"./base-map-CxlE6ySX.js";import{E as L}from"./index-BuJWCNFu.js";import{g as S,_ as g,o as F,h as M}from"./app-Oi8ZZMZx.js";import"./installCanvasRenderer-5ZFh7-ms.js";const O=S({__name:"echarts-lines",setup(m,{expose:i}){i();const r={mapOptions:{style:b.MONOCHROME,center:[104.114129,37.550339],zoom:3},handleMapLoaded:c=>{const o=["#00F8FF","#00FF00","#FFF800","#FF0000"],s=e=>e<=10?o[0]:e>10&&e<=20?o[1]:e>20&&e<=50?o[2]:o[3],l=[[113.26388,23.12946,106.547764,29.565907,"广州",60],[108.939839,34.34127,106.547764,29.565907,"西安",5],[113.624931,34.74725,106.547764,29.565907,"郑州",12],[115.857941,28.68202,106.547764,29.565907,"南昌",10],[110.199889,20.044221,106.547764,29.565907,"海口",5],[121.47375,31.23026,106.547764,29.565907,"上海",62],[125.32357,43.81602,106.547764,29.565907,"长春",18],[117.22901,31.820571,106.547764,29.565907,"合肥",18],[114.514299,38.04276,106.547764,29.565907,"石家庄",18],[117.199371,39.0851,106.547764,29.565907,"天津",18],[106.550729,29.564709,106.547764,29.565907,"重庆",20],[103.834171,36.06138,106.547764,29.565907,"兰州",7],[106.23248,38.486441,106.547764,29.565907,"银川",4],[112.550671,37.87059,106.547764,29.565907,"太原",5],[118.796469,32.058381,106.547764,29.565907,"南京",20],[104.064759,30.5702,106.547764,29.565907,"成都",20],[119.296469,26.07421,106.547764,29.565907,"福州",8],[112.938861,28.22778,106.547764,29.565907,"长沙",12],[120.15515,30.274149,106.547764,29.565907,"杭州",12],[106.630241,26.64702,106.547764,29.565907,"贵阳",6],[123.432359,41.805629,106.547764,29.565907,"沈阳",3],[116.994931,36.665291,106.547764,29.565907,"济南",4],[87.616879,43.82663,106.547764,29.565907,"乌鲁木齐",3],[116.40717,39.90469,106.547764,29.565907,"北京",52],[111.75199,40.841491,106.547764,29.565907,"呼和浩特",5],[91.114529,29.644141,106.547764,29.565907,"拉萨",5],[108.366901,22.81673,106.547764,29.565907,"南宁",10],[114.30525,30.59276,106.547764,29.565907,"武汉",45],[126.535801,45.802159,106.547764,29.565907,"哈尔滨",10],[102.83322,24.879659,106.547764,29.565907,"昆明",15],[101.777819,36.617289,106.547764,29.565907,"西宁",2]],p=[],n=[];for(let e=0;e<l.length;e++){const t=l[e],d=t[4],f=t[5];p.push({name:d,value:[...t.slice(0,2),f]}),n.push({name:d,value:f,coords:[t.slice(0,2),t.slice(2,4)]})}const _={tooltip:{trigger:"item",textStyle:{color:"#fff"},backgroundColor:"rgba(0,0,0,0.5)",formatter:e=>e.data.name+"->重庆: "+e.data.value},series:[{name:"bgLine",type:"lines",lineStyle:{color:e=>s(e.data.value),width:2,opacity:.5,curveness:.2},data:n},{name:"scatter",type:"effectScatter",rippleEffect:{scale:5,brushType:"stroke"},label:{show:!0,position:"right",formatter:"{b}"},symbolSize:5,itemStyle:{color:e=>s(e.data.value[2])},data:p},{name:"sLine",type:"lines",effect:{show:!0,period:6,trailLength:.4,symbolSize:5},lineStyle:{color:e=>s(e.data.value),width:0,curveness:.2},data:n}]},h=new L("lines-layer",_);c.addLayer(h)},BaseMap:y};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function v(m,i,u,a,r,c){return F(),M(a.BaseMap,{"map-options":a.mapOptions,onLoad:a.handleMapLoaded})}const k=g(O,[["render",v],["__file","echarts-lines.vue"]]);export{k as default};
