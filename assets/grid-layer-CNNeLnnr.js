import{e as y}from"./earcut-D1cPlY50.js";import{m as O,b as R,S as B}from"./base-map-CxlE6ySX.js";import{p as T,A as U,s as D,c as I,a as E,b as x,d as L,e as X}from"./index-OPaE5mSf.js";import{g as G,l as q,_ as j,o as z,h as H}from"./app-Oi8ZZMZx.js";const Z=`
#ifdef GL_ES
precision highp int;
precision highp float;
#endif

uniform sampler2D u_sampler;
uniform float u_opacity;
varying vec2 v_uv;

void main() {
  vec4 color = texture2D(u_sampler, v_uv);
  gl_FragColor = color * u_opacity;
}
`,K=`
uniform mat4 u_matrix;
uniform float u_alt;
attribute vec2 a_pos;
attribute vec2 a_uv;
varying vec2 v_uv;

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

vec2 mercatorfromLngLat(vec2 lnglat) {
  return vec2(mercatorXfromLng(lnglat.x), mercatorYfromLat(lnglat.y));
}

void main() {
  gl_Position = u_matrix * vec4(a_pos, mercatorZfromAltitude(u_alt, a_pos.y), 1.0);
  v_uv = a_uv;
}
`,A=`
#ifdef GL_ES
precision highp int;
precision mediump float;
#endif

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}
`,w=`
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
`;var Q={},S,P={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function _(t){return t=Math.round(t),t<0?0:t>255?255:t}function N(t){return t<0?0:t>1?1:t}function b(t){return t[t.length-1]==="%"?_(parseFloat(t)/100*255):_(parseInt(t))}function k(t){return t[t.length-1]==="%"?N(parseFloat(t)/100):N(parseFloat(t))}function C(t,e,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?t+(e-t)*r*6:r*2<1?e:r*3<2?t+(e-t)*(2/3-r)*6:t}function W(t){var e=t.replace(/ /g,"").toLowerCase();if(e in P)return P[e].slice();if(e[0]==="#"){if(e.length===4){var r=parseInt(e.substr(1),16);return r>=0&&r<=4095?[(r&3840)>>4|(r&3840)>>8,r&240|(r&240)>>4,r&15|(r&15)<<4,1]:null}else if(e.length===7){var r=parseInt(e.substr(1),16);return r>=0&&r<=16777215?[(r&16711680)>>16,(r&65280)>>8,r&255,1]:null}return null}var a=e.indexOf("("),o=e.indexOf(")");if(a!==-1&&o+1===e.length){var s=e.substr(0,a),n=e.substr(a+1,o-(a+1)).split(","),i=1;switch(s){case"rgba":if(n.length!==4)return null;i=k(n.pop());case"rgb":return n.length!==3?null:[b(n[0]),b(n[1]),b(n[2]),i];case"hsla":if(n.length!==4)return null;i=k(n.pop());case"hsl":if(n.length!==3)return null;var u=(parseFloat(n[0])%360+360)%360/360,l=k(n[1]),f=k(n[2]),h=f<=.5?f*(l+1):f+l-f*l,c=f*2-h;return[_(C(c,h,u+1/3)*255),_(C(c,h,u)*255),_(C(c,h,u-1/3)*255),i];default:return null}}return null}try{S=Q.parseCSSColor=W}catch{}var v;(function(t){t[t.INCLUDE_MIN_AND_MAX=0]="INCLUDE_MIN_AND_MAX",t[t.INCLUDE_MAX=1]="INCLUDE_MAX",t[t.INCLUDE_MIN=2]="INCLUDE_MIN",t[t.EXCLUSIVE=3]="EXCLUSIVE"})(v||(v={}));var Y=function(){function t(e,r,a){this.min=e,this.max=r,this.color=a}return t.prototype.contains=function(e,r){return(e>this.min||!isNaN(this.min)&&e==this.min&&(r==v.INCLUDE_MIN_AND_MAX||r==v.INCLUDE_MIN)||isNaN(this.min))&&(e<this.max||!isNaN(this.max)&&e==this.max&&(r==v.INCLUDE_MIN_AND_MAX||r==v.INCLUDE_MAX)||isNaN(this.max))},t}(),$=function(){function t(e,r){this.colors=e,this.domains=r,this.min=r[0],this.max=r[r.length-1]}return t.prototype.pick=function(e){var r=this,a=r.domains,o=r.colors;if(e<this.min||e>this.max)return[0,0,0,0];if(a.indexOf(e)>-1)return o[a.indexOf(e)];for(var s=a[0],n=a[0],i=o[0],u=o[0],l=1,f=a.length;l<f;l++)if(e<a[l]){s=a[l-1],n=a[l],i=o[l-1],u=o[l];break}var h=(e-s)/(n-s),c=1-h,d=Math.round(u[0]*h+i[0]*c),g=Math.round(u[1]*h+i[1]*c),m=Math.round(u[2]*h+i[2]*c),p=u[3]*h+i[3]*c;return[d,g,m,p]},t}(),J=function(){function t(e){var r,a=e.type,o=e.values,s=e.colors;this.type=a,this.values=o,this.colors=s.map(function(n){return V(n)}),this.boundsType=(r=e.boundsType)!==null&&r!==void 0?r:v.INCLUDE_MAX,a==="classified"?this.classifiedColors=this.colors.map(function(n,i){return new Y(o[i],o[i+1],n)}):a==="stretched"&&(this.stretchedColor=new $(this.colors,this.values))}return t.prototype.pick=function(e){var r=this,a=r.type,o=r.values,s=r.colors,n=[0,0,0,0];if(a==="unique")o.indexOf(e)>-1&&(n=s[o.indexOf(e)]);else if(a==="classified"){for(var i=0,u=s.length;i<u;i++)if(this.classifiedColors[i].contains(e,this.boundsType)){n=this.classifiedColors[i].color;break}}else a==="stretched"&&(n=this.stretchedColor.pick(e));return n},t}();function V(t){if(typeof t=="string"){var e=S(t);if(e)return e;throw new Error('Invalide color: "'.concat(t,'"'))}return t}function M(t){var e=t.type,r=t.values,a=t.colors;if(e==="classified"){if(r.length-1===a.length)return!0;throw new Error("The length of colors must be less than the length of values by 1 when the type of ColorOptions is classified.")}else{if(r.length===a.length)return!0;throw new Error("The length of colors must be equal to the length of values.")}}function ee(t,e,r){for(var a=e.ncols,o=e.nrows,s=e.nodata_value,n=s===void 0?-9999:s,i=[],u=new J(r),l=0;l<o;l++)for(var f=0;f<a;f++){var h=t[o-1-l][f],c=h!=n?u.pick(h):[0,0,0,0];i.push(c[0],c[1],c[2],c[3]*255)}return i}function re(t,e){var r=[-20037508342789244e-9,20037508342789244e-9],a=[e[0],e[3],e[1],e[2]],o=T(t,"EPSG:3857").forward;function s(f){var h=o(f),c=Math.abs((h[0]-r[0])/(20037508342789244e-9*2)),d=Math.abs((h[1]-r[1])/(20037508342789244e-9*2));return[c,d]}var n=1e-11,i=[[0,0],[0,1],[1,0],[1,1]],u=new U(s,a,i,[[0,1,3],[0,3,2]]);u.lowerEpsilon(n);var l=u.output();return{pos:l.projected.flat(),uv:l.uv.flat(),trigs:l.trigs.flat()}}var te=function(){function t(e,r){var a,o;if(this.type="custom",this.renderingMode="2d",this.stencilChecked=!0,this.id=e,this.loaded=!1,this.data=r.data,this.opacity=(a=r.opacity)!==null&&a!==void 0?a:1,this.maskProperty=Object.assign({type:"in"},r.mask),M(r.colorOption)&&(this.colorOption=r.colorOption),this.resampling=(o=r.resampling)!==null&&o!==void 0?o:this.colorOption.type==="stretched"?"linear":"nearest",this.stencilChecked=D(O.version,">=2.7.0"),this.maskProperty.data&&!this.stencilChecked)throw new Error("如果需要遮罩（掩膜），mapbox-gl 版本必须：>=2.7.0");var s=r.data.metadata,n=s.xll,i=s.yll,u=s.cellsize,l=s.lltype,f=s.ncols,h=s.nrows,c=s.projection,d=l==="corner"?n:n-u/2,g=d+u*f,m=l==="corner"?i:i-u/2,p=m+u*h;this.arrugado=re(c??"EPSG:4326",[[d,p],[g,p],[g,m],[d,m]])}return t.prototype.onAdd=function(e,r){if(this.map=e,this.gl=r,this.programInfo=I(r,[K,Z]),this.loadTexture(e,r),this.bufferInfo=E(r,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs}),this.maskProperty.data){var a=this.maskProperty.data;a&&(this.maskProgramInfo=I(r,[w,A]),this.maskBufferInfo=this.getMaskBufferInfo(r,a))}},t.prototype.onRemove=function(e,r){this.programInfo&&r.deleteProgram(this.programInfo.program),this.maskProgramInfo&&r.deleteProgram(this.maskProgramInfo.program),this.texture&&r.deleteTexture(this.texture)},t.prototype.render=function(e,r){var a;if(this.stencilChecked&&this.map.painter.resetStencilClippingMasks(),this.loaded&&this.programInfo&&this.bufferInfo){if(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),this.maskProgramInfo&&this.maskBufferInfo){e.useProgram(this.maskProgramInfo.program),e.enable(e.STENCIL_TEST),e.stencilFunc(e.ALWAYS,1,255),e.stencilOp(e.REPLACE,e.REPLACE,e.REPLACE),e.stencilMask(255),e.clear(e.STENCIL_BUFFER_BIT),x(this.maskProgramInfo,{u_matrix:r}),L(e,this.maskProgramInfo,this.maskBufferInfo);var o=e.UNSIGNED_SHORT;this.maskBufferInfo.numElements/3>65535&&(e.getExtension("OES_element_index_uint"),o=e.UNSIGNED_INT),e.drawElements(e.TRIANGLES,this.maskBufferInfo.numElements,o,0)}if(e.useProgram(this.programInfo.program),!((a=this.maskProgramInfo)===null||a===void 0)&&a.program){var s=this.maskProperty.type==="out"?0:1;e.stencilFunc(e.EQUAL,s,255),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}x(this.programInfo,{u_matrix:r,u_opacity:this.opacity||1,u_sampler:this.texture}),L(e,this.programInfo,this.bufferInfo),e.drawElements(e.TRIANGLES,this.arrugado.trigs.length,e.UNSIGNED_SHORT,0),e.clear(e.STENCIL_BUFFER_BIT),e.disable(e.STENCIL_TEST)}},t.prototype.updateColorOption=function(e){if(this.gl&&this.map){var r=Object.assign({},this.colorOption,e);M(r)&&(this.colorOption=r),this.loaded=!1,this.texture&&this.gl.deleteTexture(this.texture),this.loadTexture(this.map,this.gl)}return this},t.prototype.updateMask=function(e){return this.gl&&this.map&&(this.maskProgramInfo||(this.maskProgramInfo=I(this.gl,[w,A])),this.maskProperty=Object.assign(this.maskProperty,e),this.maskBufferInfo=this.getMaskBufferInfo(this.gl,this.maskProperty.data),this.map.triggerRepaint()),this},t.prototype.loadTexture=function(e,r){var a=this.resampling==="linear"?r.LINEAR:r.NEAREST,o=this.data,s=o.data,n=o.metadata,i=ee(s,n,this.colorOption);this.texture=X(r,{width:n.ncols,height:n.nrows,src:i,minMag:a,flipY:1}),this.loaded=!0,e.triggerRepaint()},t.prototype.getMaskBufferInfo=function(e,r){var a=[],o=[];if(r.type==="MultiPolygon")for(var s=r.coordinates.length,n=0,i=0;i<s;i++){var u=r.coordinates[i],l=y.flatten(u),f=l.vertices,h=l.holes,c=l.dimensions,d=y(f,h,c),g=d.map(function(F){return F+n});n+=f.length/2;for(var m=0;m<f.length;m++)a.push(f[m]);for(var p=0;p<g.length;p++)o.push(g[p])}else{var l=y.flatten(r.coordinates),f=l.vertices,h=l.holes,c=l.dimensions;a=f,o=y(f,h,c)}return E(e,{a_pos:{numComponents:2,data:a},indices:o.length/3>65535?new Uint32Array(o):new Uint16Array(o)})},t}();const ae=G({__name:"grid-layer",setup(t,{expose:e}){e();const o={mapOptions:{style:B.DEFAULT,center:[107.744809,30.180706],zoom:6},handleMapLoaded:async s=>{fetch(q("/data/dem.json")).then(n=>n.json()).then(n=>{const i=new te("grid-layer",{data:{data:n,metadata:{xll:105.289583,yll:28.154306,cellsize:.025,ncols:196,nrows:162,lltype:"corner"}},colorOption:{type:"stretched",colors:["#30123B","#4686FB","#1BE5B5","#A4FC3C","#FBB938","#E3440A","#7A0403"],values:[0,500,1e3,1500,2e3,2500,3e3]}});s.addLayer(i,"admin-1-boundary-bg")})},BaseMap:R};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function ne(t,e,r,a,o,s){return z(),H(a.BaseMap,{"map-options":a.mapOptions,onLoad:a.handleMapLoaded})}const ue=j(ae,[["render",ne],["__file","grid-layer.vue"]]);export{ue as default};
