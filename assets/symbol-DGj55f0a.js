import{p as l}from"./index-CC-wYX1C.js";import{b as g}from"./base-map-XmSAiI59.js";import{g as u,o as m,h as y,_ as f}from"./app-WXFCxs9o.js";const x=u({__name:"symbol",setup(b){const r={center:[-77.032,38.9132],zoom:17},c=i=>{const n=l([-77.032,38.913],{title:"Mapbox DC",icon:"park"}),h=l([-77.032,38.9134]),e=200;let d={width:e,height:e,data:new Uint8Array(e*e*4),onAdd:function(){let o=document.createElement("canvas");o.width=this.width,o.height=this.height,this.context=o.getContext("2d")},render:function(){let o=1e3,a=performance.now()%o/o,s=e/2*.3,p=e/2*.7*a+s,t=this.context;return t.clearRect(0,0,this.width,this.height),t.beginPath(),t.arc(this.width/2,this.height/2,p,0,Math.PI*2),t.fillStyle="rgba(255, 200, 200,"+(1-a)+")",t.fill(),t.beginPath(),t.arc(this.width/2,this.height/2,s,0,Math.PI*2),t.fillStyle="rgba(255, 100, 100, 1)",t.strokeStyle="white",t.lineWidth=2+4*(1-a),t.fill(),t.stroke(),this.data=t.getImageData(0,0,this.width,this.height).data,i.triggerRepaint(),!0}};i.addLayer({id:"symbol-layer",type:"symbol",source:{type:"geojson",data:n,generateId:!0},paint:{"icon-opacity":.8,"icon-color":"#FF0000","icon-halo-color":"#00FF00","icon-halo-width":5,"icon-halo-blur":.6,"text-opacity":.8,"text-color":"#f7c5c5","text-halo-color":"#9f1919","text-halo-width":3,"text-halo-blur":1.5},layout:{"icon-size":2,"icon-image":"{icon}-15","icon-rotate":30,"text-field":"{title}","text-offset":[0,.6],"text-anchor":"top","text-size":32}}),i.addImage("pulsing-dot",d,{pixelRatio:2}),i.addLayer({id:"pulsing-dot-layer",type:"symbol",source:{type:"geojson",data:h},layout:{"icon-image":"pulsing-dot"}})};return(i,n)=>(m(),y(g,{"map-options":r,onLoad:c}))}}),I=f(x,[["__file","symbol.vue"]]);export{I as default};
