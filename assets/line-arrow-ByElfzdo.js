import{_ as r,S as t,a as s}from"./base-map.vue_vue_type_style_index_0_lang-D9rQBs-7.js";import{l}from"./index-CaSe04H2.js";import{f as c,g as d,o as p}from"./app-DUPhFMc-.js";const _=c({__name:"line-arrow",setup(m){const o={style:t.DARK,center:[-122.486552,37.831048],zoom:15},a=e=>{s(e,["/assets/icons/i-arrow.png"]);const n=l([[-122.48404026031496,37.83049717427869],[-122.48348236083984,37.829920943955045],[-122.48356819152832,37.82954808664175],[-122.48507022857666,37.82944639795659],[-122.48610019683838,37.82880236636284],[-122.48695850372314,37.82931081282506],[-122.48700141906738,37.83080223556934],[-122.48751640319824,37.83168351665737],[-122.48803138732912,37.832158048267786],[-122.48888969421387,37.83297152392784],[-122.48987674713133,37.83263257682617],[-122.49043464660643,37.832937629287755],[-122.49125003814696,37.832429207817725],[-122.49163627624512,37.832564787218985]]);e.addLayer({id:"line-layer",type:"line",source:{type:"geojson",lineMetrics:!0,data:n},paint:{"line-width":10,"line-gradient":["interpolate",["linear"],["line-progress"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"]},layout:{"line-cap":"round","line-join":"round"}}),e.addLayer({id:"line-layer-arrow",type:"symbol",source:{type:"geojson",data:n},layout:{"symbol-placement":"line","symbol-spacing":3,"icon-image":"i-arrow","icon-size":.5}})};return(e,i)=>(p(),d(r,{"map-options":o,onLoad:a}))}});export{_ as default};
