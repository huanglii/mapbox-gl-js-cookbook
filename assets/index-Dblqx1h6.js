import{b as i}from"./base-map-CxlE6ySX.js";import{g as _,_ as c,o as d,h as f}from"./app-Oi8ZZMZx.js";const l=_({__name:"index",setup(p,{expose:o}){o();const s={center:[2.2945,48.8606],zoom:15.4,pitch:60};function e(r){let t="day";const n=new Date().getHours();n<4?t="night":n<5?t="dawn":n<16?t="day":t="night",r.setConfigProperty("basemap","lightPreset",t)}const a={mapOptions:s,handleMapLoaded:e,BaseMap:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function m(p,o,s,e,a,r){return d(),f(e.BaseMap,{"map-options":e.mapOptions,onLoad:e.handleMapLoaded})}const g=c(l,[["render",m],["__file","index.vue"]]);export{g as default};
