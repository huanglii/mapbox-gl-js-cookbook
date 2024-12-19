import{e as h}from"./earcut-CVksGt_5.js";import{m as L,b as A,S as x}from"./base-map-Gqpi9HOI.js";import{p as C,A as S,s as b,c as I,a as _,b as E,d as y,e as B}from"./index-OPaE5mSf.js";import{g as T,l as F,_ as R,o as M,h as N}from"./app-CWWF2Y_U.js";const j=`
#ifdef GL_ES
  precision highp int;
  precision mediump float;
#endif
uniform sampler2D u_sampler;
uniform float u_opacity;
varying vec2 v_uv;
void main() {
  vec4 color = texture2D(u_sampler, v_uv);
  gl_FragColor = color * u_opacity;
}
`,O=`
uniform mat4 u_matrix;
attribute vec2 a_pos;
attribute vec2 a_uv;
varying vec2 v_uv;
void main() {
  gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
  v_uv = a_uv;
}
`,w=`
#ifdef GL_ES
precision highp int;
precision mediump float;
#endif

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}
`,U=`
uniform mat4 u_matrix;
uniform float u_alt;
attribute vec2 a_pos;

const float PI = 3.1415926536;
const float earthRadius = 6371008.8;
const float earthCircumference = 2.0 * PI * earthRadius; // meters

float circumferenceAtLatitude(float latitude) {
  return earthCircumference * cos(latitude * PI / 180.0);
}

float mercatorXfromLng(float lng) {
  return (180.0 + lng) / 360.0;
}

float mercatorYfromLat(float lat) {
  return (180.0 - (180.0 / PI * log(tan(PI / 4.0 + lat * PI / 360.0)))) / 360.0;
}

float mercatorZfromAltitude(float altitude, float lat) {
  return altitude / circumferenceAtLatitude(lat);
}

vec3 mercatorfromLngLat(vec2 lnglat, float alt) {
  return vec3(mercatorXfromLng(lnglat.x), mercatorYfromLat(lnglat.y), mercatorZfromAltitude(alt, lnglat.y));
}

void main() {
  vec3 mercator = mercatorfromLngLat(a_pos, 0.0);
  gl_Position = u_matrix * vec4(mercator, 1.0);
  // gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
}
`;function P(e,t){var r=[-20037508342789244e-9,20037508342789244e-9],a=[t[0],t[3],t[1],t[2]],o=C(e,"EPSG:3857").forward;function n(u){var f=o(u),p=Math.abs((f[0]-r[0])/(20037508342789244e-9*2)),d=Math.abs((f[1]-r[1])/(20037508342789244e-9*2));return[p,d]}var s=1e-11,m=[[0,0],[0,1],[1,0],[1,1]],c=new S(n,a,m,[[0,1,3],[0,3,2]]);c.lowerEpsilon(s);var i=c.output();return{pos:i.projected.flat(),uv:i.uv.flat(),trigs:i.trigs.flat()}}var G=function(){function e(t,r){if(this.type="custom",this.renderingMode="2d",this.stencilChecked=!0,this.id=t,this.option=r,this.loaded=!1,this.maskProperty=Object.assign({type:"in"},r.mask),this.stencilChecked=b(L.version,">=2.7.0"),this.maskProperty.data&&!this.stencilChecked)throw new Error("如果需要遮罩（掩膜），mapbox-gl 版本必须：>=2.7.0");var a=r.projection,o=r.coordinates;this.arrugado=P(a,o)}return e.prototype.onAdd=function(t,r){if(this.map=t,this.gl=r,this.programInfo=I(r,[O,j]),this.loadTexture(t,r),this.bufferInfo=_(r,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs}),this.maskProperty.data){var a=this.maskProperty.data;a&&(this.maskProgramInfo=I(r,[U,w]),this.maskBufferInfo=this.getMaskBufferInfo(r,a))}},e.prototype.onRemove=function(t,r){this.programInfo&&r.deleteProgram(this.programInfo.program),this.maskProgramInfo&&r.deleteProgram(this.maskProgramInfo.program),this.texture&&r.deleteTexture(this.texture)},e.prototype.render=function(t,r){var a;if(this.stencilChecked&&this.map.painter.resetStencilClippingMasks(),this.loaded&&this.programInfo&&this.bufferInfo){if(t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),this.maskProgramInfo&&this.maskBufferInfo){t.useProgram(this.maskProgramInfo.program),t.enable(t.STENCIL_TEST),t.stencilFunc(t.ALWAYS,1,255),t.stencilOp(t.REPLACE,t.REPLACE,t.REPLACE),t.stencilMask(255),t.clear(t.STENCIL_BUFFER_BIT),E(this.maskProgramInfo,{u_matrix:r}),y(t,this.maskProgramInfo,this.maskBufferInfo);var o=t.UNSIGNED_SHORT;this.maskBufferInfo.numElements/3>65535&&(t.getExtension("OES_element_index_uint"),o=t.UNSIGNED_INT),t.drawElements(t.TRIANGLES,this.maskBufferInfo.numElements,o,0)}if(t.useProgram(this.programInfo.program),!((a=this.maskProgramInfo)===null||a===void 0)&&a.program){var n=this.maskProperty.type==="out"?0:1;t.stencilFunc(t.EQUAL,n,255),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)}E(this.programInfo,{u_matrix:r,u_opacity:this.option.opacity||1,u_sampler:this.texture}),y(t,this.programInfo,this.bufferInfo),t.drawElements(t.TRIANGLES,this.arrugado.trigs.length,t.UNSIGNED_SHORT,0),t.clear(t.STENCIL_BUFFER_BIT),t.disable(t.STENCIL_TEST)}},e.prototype.updateImage=function(t){var r,a,o,n,s;return this.gl&&this.map&&(this.option.opacity=(r=t.opacity)!==null&&r!==void 0?r:this.option.opacity,(t.projection||t.coordinates)&&(this.option.projection=(a=t.projection)!==null&&a!==void 0?a:this.option.projection,this.option.coordinates=(o=t.coordinates)!==null&&o!==void 0?o:this.option.coordinates,this.arrugado=P(this.option.projection,this.option.coordinates),this.bufferInfo=_(this.gl,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs})),t.url||t.resampling?(this.loaded=!1,this.option.url=(n=t.url)!==null&&n!==void 0?n:this.option.url,this.option.resampling=(s=t.resampling)!==null&&s!==void 0?s:this.option.resampling,this.loadTexture(this.map,this.gl)):this.map.triggerRepaint()),this},e.prototype.updateMask=function(t){return this.gl&&this.map&&this.maskProgramInfo&&(this.maskProperty=Object.assign(this.maskProperty,t),this.maskBufferInfo=this.getMaskBufferInfo(this.gl,this.maskProperty.data),this.map.triggerRepaint()),this},e.prototype.loadTexture=function(t,r){var a=this,o=this.option.resampling==="nearest"?r.NEAREST:r.LINEAR;this.texture=B(r,{src:this.option.url,crossOrigin:this.option.crossOrigin,minMag:o,flipY:0},function(){a.loaded=!0,t.triggerRepaint()})},e.prototype.getMaskBufferInfo=function(t,r){var a=[],o=[];if(r.type==="MultiPolygon")for(var n=r.coordinates.length,s=0,m=0;m<n;m++){var c=r.coordinates[m],i=h.flatten(c),u=i.vertices,f=i.holes,p=i.dimensions,d=h(u,f,p),g=d.map(function(k){return k+s});s+=u.length/2;for(var l=0;l<u.length;l++)a.push(u[l]);for(var v=0;v<g.length;v++)o.push(g[v])}else{var i=h.flatten(r.coordinates),u=i.vertices,f=i.holes,p=i.dimensions;a=u,o=h(u,f,p)}return _(t,{a_pos:{numComponents:2,data:a},indices:o.length/3>65535?new Uint32Array(o):new Uint16Array(o)})},e}();const D=T({__name:"image-layer",setup(e,{expose:t}){t();const o={mapOptions:{style:x.DEFAULT,center:[107.744809,30.180706],zoom:6},handleMapLoaded:n=>{const s=new G("layer-4326",{url:F("/assets/images/4326.png"),projection:"EPSG:4326",coordinates:[[105.289838,32.204171],[110.195632,32.204171],[110.195632,28.164713],[105.289838,28.164713]]});n.addLayer(s,"aeroway-line")},BaseMap:A};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function Y(e,t,r,a,o,n){return M(),N(a.BaseMap,{"map-options":a.mapOptions,onLoad:a.handleMapLoaded})}const z=R(D,[["render",Y],["__file","image-layer.vue"]]);export{z as default};
