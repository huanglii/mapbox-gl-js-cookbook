import{b as i}from"./base-map-XmSAiI59.js";import{g as n,o as r,h as l,_ as s}from"./app-WXFCxs9o.js";const p=n({__name:"model1",setup(d){const t={pitch:60,bearing:0,zoom:15,center:[-122.40784,37.78432],style:{version:8,metadata:{test:{height:512,allowed:.0015,operations:[["setPaintProperty","tree-layer","model-color-mix-intensity",0],["wait"]]}},sources:{mapbox:{type:"vector",url:"mapbox://mapbox.mapbox-streets-v8"},trees:{type:"geojson",data:"http://localhost:8080/mapbox-gl-js-cookbook/data/trees.geojson"}},transition:{duration:0},models:{"pine1-lod1":"mapbox://models/mapbox/pine1-lod1.glb"},layers:[{id:"background",type:"background",paint:{"background-color":"#aaaaaa"}},{id:"3d-buildings",source:"mapbox",paint:{"fill-extrusion-opacity":.7,"fill-extrusion-color":"white","fill-extrusion-height":["number",["get","height"]],"fill-extrusion-base":["number",["get","min_height"]]},filter:["==",["get","extrude"],"true"],"source-layer":"building",type:"fill-extrusion"}]}};function a(e){e.on("click",o=>console.log(o.lngLat)),e.addSource("point",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{id:2},geometry:{type:"Point",coordinates:[-122.409721,37.782875]}}]}}),e.addLayer({id:"point-with-model",type:"model",source:"point",layout:{"model-id":"pine1-lod1"},paint:{"model-scale":[20,20,70]}})}return(e,o)=>(r(),l(i,{"map-options":t,onLoad:a}))}}),u=s(p,[["__file","model1.vue"]]);export{u as default};
