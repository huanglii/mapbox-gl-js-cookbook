import{b as d}from"./base-map-CxlE6ySX.js";import{g as l,_ as c,o as f,h as p}from"./app-Oi8ZZMZx.js";const u=l({__name:"highlight-2",setup(i,{expose:o}){o();const a={center:[-100.486052,37.830348],zoom:2};let e;const s={mapOptions:a,get hoveredStateId(){return e},set hoveredStateId(t){e=t},handleMapLoaded:t=>{t.addSource("states",{type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson"}),t.addLayer({id:"state-fills",type:"fill",source:"states",paint:{"fill-color":"#627BC1","fill-opacity":["case",["boolean",["feature-state","hover"],!1],1,.5]}}),t.on("mousemove","state-fills",r=>{r.features&&(e&&t.setFeatureState({source:"states",id:e},{hover:!1}),e=r.features[0].id,t.setFeatureState({source:"states",id:e},{hover:!0}))}),t.on("mouseleave","state-fills",()=>{e&&t.setFeatureState({source:"states",id:e},{hover:!1}),e=void 0})},baseMap:d};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function h(i,o,a,e,n,s){return f(),p(e.baseMap,{"map-options":e.mapOptions,onLoad:e.handleMapLoaded})}const v=c(u,[["render",h],["__file","highlight-2.vue"]]);export{v as default};
