import{b as l}from"./base-map-XmSAiI59.js";import{g as u,o as p,h as d,_ as m}from"./app-WXFCxs9o.js";const f=u({__name:"source",setup(S){const i={center:[110,38],zoom:1},c=o=>{const s={id:"custom-source",type:"custom",dataType:"raster",tileSize:256,async loadTile({z:t,x:r,y:n}){const a=document.createElement("canvas");a.width=a.height=256;const e=a.getContext("2d");return e.fillStyle="#74a9cf",e.fillRect(0,0,256,256),e.font="18px serif",e.fillStyle="white",e.textAlign="center",e.fillText(`${t}/${r}/${n}`,128,128,256),e.getImageData(0,0,256,256)},hasTile(t){return(t.x+t.y)%2===0}};o.addSource("custom-source",s),o.addLayer({id:"custom-source",type:"raster",source:"custom-source",paint:{"raster-opacity":.75,"raster-fade-duration":0}})};return(o,s)=>(p(),d(l,{"map-options":i,onLoad:c}))}}),g=m(f,[["__file","source.vue"]]);export{g as default};
