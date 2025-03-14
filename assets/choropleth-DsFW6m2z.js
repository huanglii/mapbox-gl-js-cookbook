import{b as m,S as _}from"./base-map-OfSqYvf7.js";import{k as h,q as g,_ as F,l as f,o as r,h as v,i as s,e as y,F as k,p as B,y as E,t as b}from"./app-DKmThjjR.js";const x=h({__name:"choropleth",setup(c,{expose:o}){o();let t;const e={style:_.GRAY,center:[107.744809,30.180706],zoom:6,minZoom:4},n={get map(){return t},set map(a){t=a},mapOptions:e,legends:[["0-20","#FFD273"],["20-40","#E86D68"],["40-60","#A880FF"],["60-80","#68E0E8"],["80-100","#9BFF69"]],handleMapLoaded:a=>{t=a,t.addSource("choropleth-source",{type:"geojson",data:g("/data/cq.geojson")}),t.addLayer({id:"choropleth-layer",type:"fill",source:"choropleth-source",paint:{"fill-color":["case",["<",["get","value"],20],"#FFD273",["<",["get","value"],40],"#E86D68",["<",["get","value"],60],"#A880FF",["<",["get","value"],80],"#68E0E8",["<=",["get","value"],100],"#9BFF69","#000"],"fill-opacity":.85}},"poi-label")},setFilter:a=>{const d=Number(a.split("-")[0]),u=Number(a.split("-")[1]);t.setFilter("choropleth-layer",["all",[">=",["get","value"],d],["<",["get","value"],u]])},BaseMap:m};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),L={class:"legend"},S=["onClick"],C={class:"text"};function M(c,o,t,e,p,i){return r(),f(e.BaseMap,{"map-options":e.mapOptions,onLoad:e.handleMapLoaded},{default:v(()=>[s("div",L,[s("div",{class:"legend-item",onClick:o[0]||(o[0]=l=>e.setFilter("0-100"))},o[1]||(o[1]=[s("span",{class:"square"},null,-1),s("span",{class:"text"},"全部",-1)])),(r(),y(k,null,B(e.legends,(l,n)=>s("div",{key:n,class:"legend-item",onClick:a=>e.setFilter(l[0])},[s("span",{class:"square",style:E({backgroundColor:l[1]})},null,4),s("span",C,b(l[0]),1)],8,S)),64))])]),_:1})}const j=F(x,[["render",M],["__file","choropleth.vue"]]);export{j as default};
