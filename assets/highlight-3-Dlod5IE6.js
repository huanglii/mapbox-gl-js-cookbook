import{b as n,a as c}from"./base-map-OfSqYvf7.js";import{k as d,q as p,_ as u,l,o as y}from"./app-DKmThjjR.js";const _=d({__name:"highlight-3",setup(i,{expose:s}){s();const a={mapOptions:{center:[107.744809,30.180706],zoom:6.2},handleMapLoaded:e=>{c(e,["/assets/icons/i-star-blue.png","/assets/icons/i-star-red.png"]),e.addSource("city",{type:"geojson",data:p("/data/point.geojson"),generateId:!0}),e.addLayer({id:"city",type:"symbol",source:"city",layout:{"icon-image":"i-star-blue","icon-size":.5,"icon-allow-overlap":!0}}),e.on("mousemove","city",o=>{o.features&&o.features.length>0&&(e.setLayoutProperty("city","icon-image",["match",["id"],o.features[0].id,"i-star-red","i-star-blue"]),e.setLayoutProperty("city","icon-size",["match",["id"],o.features[0].id,.75,.5]))}),e.on("mouseleave","city",()=>{e.setLayoutProperty("city","icon-image","i-star-blue"),e.setLayoutProperty("city","icon-size",.5)})},baseMap:n};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function h(i,s,r,t,a,e){return y(),l(t.baseMap,{"map-options":t.mapOptions,onLoad:t.handleMapLoaded})}const m=u(_,[["render",h],["__file","highlight-3.vue"]]);export{m as default};
