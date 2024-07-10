import{b as o,S as r}from"./base-map-XmSAiI59.js";import{g as p,o as n,h as s,_ as i}from"./app-WXFCxs9o.js";const m=p({__name:"heatmap",setup(c){const e={style:r.DARK,center:[-120,50],zoom:2},t=a=>{a.addSource("earthquakes",{type:"vector",url:"mapbox://huanglii.d41k5fmy"}),a.addLayer({id:"earthquakes-heat",type:"heatmap",source:"earthquakes","source-layer":"earthquakes-cs3906",maxzoom:9,paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",1,"rgb(178,24,43)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}})};return(a,h)=>(n(),s(o,{"map-options":e,onLoad:t}))}}),d=i(m,[["__file","heatmap.vue"]]);export{d as default};
