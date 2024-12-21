import{b as n,S as s}from"./base-map-B4JV9eLi.js";import{g as i,_ as m,o as c,h as d}from"./app-COZMOXYE.js";const l=i({__name:"heatmap",setup(r,{expose:o}){o();const a={mapOptions:{style:s.DARK,center:[-120,50],zoom:2},handleMapLoaded:t=>{t.addSource("earthquakes",{type:"vector",url:"mapbox://huanglii.d41k5fmy"}),t.addLayer({id:"earthquakes-heat",type:"heatmap",source:"earthquakes","source-layer":"earthquakes-cs3906",maxzoom:9,paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",1,"rgb(178,24,43)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}})},BaseMap:n};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function h(r,o,p,e,a,t){return c(),d(e.BaseMap,{"map-options":e.mapOptions,onLoad:e.handleMapLoaded})}const f=m(l,[["render",h],["__file","heatmap.vue"]]);export{f as default};