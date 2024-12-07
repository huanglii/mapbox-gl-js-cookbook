import{b as u,S as _}from"./base-map-CxlE6ySX.js";import{g as m,l as F,_ as f,o as r,h as y,d as g,e as n,c as E,F as L,k,p as B,t as h}from"./app-Oi8ZZMZx.js";const q=m({__name:"unique",setup(i,{expose:s}){s();let e;const t={style:_.SATELLITE,center:[124.879014,47.816],zoom:15.2,minZoom:15},l={get map(){return e},set map(a){e=a},mapOptions:t,legends:[[1,"#FFD273"],[2,"#E86D68"],[3,"#A880FF"],[4,"#68E0E8"],[5,"#9BFF69"]],handleMapLoaded:a=>{e=a,e.addSource("land",{type:"geojson",data:F("/data/land.geojson")}),e.addLayer({id:"unique-layer",type:"fill",source:"land",paint:{"fill-color":["match",["get","type"],1,"#FFD273",2,"#E86D68",3,"#A880FF",4,"#68E0E8",5,"#9BFF69","#fff"],"fill-opacity":.5}}),e.addLayer({id:"unique-outline-layer",type:"line",source:"land",paint:{"line-color":"#FFF","line-width":1.5}})},setFilter:a=>{const c=a?[a]:[1,2,3,4,5];e.setFilter("unique-layer",["in","type",...c])},BaseMap:u};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),S={class:"legend custom"},x=["onClick"],v={class:"text"};function C(i,s,e,t,d,p){return r(),y(t.BaseMap,{"map-options":t.mapOptions,onLoad:t.handleMapLoaded},{default:g(()=>[n("div",S,[n("div",{class:"legend-item",onClick:s[0]||(s[0]=o=>t.setFilter())},s[1]||(s[1]=[n("span",{class:"square"},null,-1),n("span",{class:"text"},"全部",-1)])),(r(),E(L,null,k(t.legends,(o,l)=>n("div",{key:l,class:"legend-item",onClick:a=>t.setFilter(o[0])},[n("span",{class:"square",style:B({backgroundColor:o[1]})},null,4),n("span",v,h(o[0]),1)],8,x)),64))])]),_:1})}const D=f(q,[["render",C],["__file","unique.vue"]]);export{D as default};
