import{b as s,m as t}from"./base-map-B4JV9eLi.js";import{g as c,_ as d,o as _,h as l}from"./app-COZMOXYE.js";const i=c({__name:"control",setup(r,{expose:n}){n();const e={mapOptions:{center:[104.294538,35.860092],zoom:2.4},handleMapLoaded:a=>{a.addControl(new t.GeolocateControl),a.addControl(new t.ScaleControl,"bottom-right")},baseMap:s};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function m(r,n,p,o,e,a){return _(),l(o.baseMap,{"map-options":o.mapOptions,onLoad:o.handleMapLoaded})}const b=d(i,[["render",m],["__file","control.vue"]]);export{b as default};