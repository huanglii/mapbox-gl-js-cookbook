import{b as c}from"./base-map-B4JV9eLi.js";import{g as d,l,_ as f,o as _,h as u}from"./app-COZMOXYE.js";import{M as h}from"./mapbox-gl-draw-T8gDA1pD.js";const m=d({__name:"within",setup(s,{expose:a}){a();const t={mapOptions:{center:[107.744809,30.180706],zoom:6},handleMapLoaded:async e=>{const n={coordinates:[[[107,30],[107,29],[108,29],[108,30],[107,30]]],type:"Polygon"};e.addSource("points",{type:"geojson",data:l("/data/point.geojson")}),e.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-color":"#11b4da","circle-radius":5,"circle-stroke-width":2,"circle-stroke-color":"#fff"},filter:["within",n]});const r=new h({displayControlsDefault:!1});e.addControl(r,"top-left"),e.on("draw.update",function(p){e.setFilter("points",["within",p.features[0]])}),r.add(n)},BaseMap:c};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function w(s,a,i,o,t,e){return _(),u(o.BaseMap,{"map-clickable":!1,"map-options":o.mapOptions,onLoad:o.handleMapLoaded})}const g=f(m,[["render",w],["__file","within.vue"]]);export{g as default};