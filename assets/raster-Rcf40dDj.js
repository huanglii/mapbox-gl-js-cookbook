import{b as n}from"./base-map-CxlE6ySX.js";import{g as p,_ as i,o as c,h as _}from"./app-Oi8ZZMZx.js";const d=p({__name:"raster",setup(t,{expose:a}){a();const r={mapOptions:{style:{version:8,sources:{},layers:[]}},handleMapLoaded:s=>{s.addLayer({id:"raster-tile-layer",type:"raster",source:{type:"raster",tiles:["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],tileSize:256}})},BaseMap:n};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function l(t,a,o,e,r,s){return c(),_(e.BaseMap,{"map-options":e.mapOptions,onLoad:e.handleMapLoaded})}const u=i(d,[["render",l],["__file","raster.vue"]]);export{u as default};
