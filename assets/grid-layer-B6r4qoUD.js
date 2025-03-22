import{e as k}from"./earcut-CdYUdopu.js";import{m as M,_ as S,S as F}from"./base-map.vue_vue_type_style_index_0_lang-D9rQBs-7.js";import{p as R,A as T,s as B,c as b,a as E,b as x,d as L,e as O}from"./index-BUjUvs77.js";import{f as U,g as D,o as X,k as q}from"./app-DUPhFMc-.js";const G=`
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
`,j=`
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
`;var C={},P;function z(){if(P)return C;P=1;var o={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function e(t){return t<0?0:t>1?1:t}function n(t){return t[t.length-1]==="%"?r(parseFloat(t)/100*255):r(parseInt(t))}function i(t){return t[t.length-1]==="%"?e(parseFloat(t)/100):e(parseFloat(t))}function l(t,s,a){return a<0?a+=1:a>1&&(a-=1),a*6<1?t+(s-t)*a*6:a*2<1?s:a*3<2?t+(s-t)*(2/3-a)*6:t}function u(t){var s=t.replace(/ /g,"").toLowerCase();if(s in o)return o[s].slice();if(s[0]==="#"){if(s.length===4){var a=parseInt(s.substr(1),16);return a>=0&&a<=4095?[(a&3840)>>4|(a&3840)>>8,a&240|(a&240)>>4,a&15|(a&15)<<4,1]:null}else if(s.length===7){var a=parseInt(s.substr(1),16);return a>=0&&a<=16777215?[(a&16711680)>>16,(a&65280)>>8,a&255,1]:null}return null}var f=s.indexOf("("),m=s.indexOf(")");if(f!==-1&&m+1===s.length){var h=s.substr(0,f),c=s.substr(f+1,m-(f+1)).split(","),p=1;switch(h){case"rgba":if(c.length!==4)return null;p=i(c.pop());case"rgb":return c.length!==3?null:[n(c[0]),n(c[1]),n(c[2]),p];case"hsla":if(c.length!==4)return null;p=i(c.pop());case"hsl":if(c.length!==3)return null;var d=(parseFloat(c[0])%360+360)%360/360,g=i(c[1]),v=i(c[2]),_=v<=.5?v*(g+1):v+g-v*g,I=v*2-_;return[r(l(I,_,d+1/3)*255),r(l(I,_,d)*255),r(l(I,_,d-1/3)*255),p];default:return null}}return null}try{C.parseCSSColor=u}catch{}return C}var H=z(),y;(function(o){o[o.INCLUDE_MIN_AND_MAX=0]="INCLUDE_MIN_AND_MAX",o[o.INCLUDE_MAX=1]="INCLUDE_MAX",o[o.INCLUDE_MIN=2]="INCLUDE_MIN",o[o.EXCLUSIVE=3]="EXCLUSIVE"})(y||(y={}));var Z=function(){function o(r,e,n){this.min=r,this.max=e,this.color=n}return o.prototype.contains=function(r,e){return(r>this.min||!isNaN(this.min)&&r==this.min&&(e==y.INCLUDE_MIN_AND_MAX||e==y.INCLUDE_MIN)||isNaN(this.min))&&(r<this.max||!isNaN(this.max)&&r==this.max&&(e==y.INCLUDE_MIN_AND_MAX||e==y.INCLUDE_MAX)||isNaN(this.max))},o}(),K=function(){function o(r,e){this.colors=r,this.domains=e,this.min=e[0],this.max=e[e.length-1]}return o.prototype.pick=function(r){var e=this,n=e.domains,i=e.colors;if(r<this.min||r>this.max)return[0,0,0,0];if(n.indexOf(r)>-1)return i[n.indexOf(r)];for(var l=n[0],u=n[0],t=i[0],s=i[0],a=1,f=n.length;a<f;a++)if(r<n[a]){l=n[a-1],u=n[a],t=i[a-1],s=i[a];break}var m=(r-l)/(u-l),h=1-m,c=Math.round(s[0]*m+t[0]*h),p=Math.round(s[1]*m+t[1]*h),d=Math.round(s[2]*m+t[2]*h),g=s[3]*m+t[3]*h;return[c,p,d,g]},o}(),Q=function(){function o(r){var e,n=r.type,i=r.values,l=r.colors;this.type=n,this.values=i,this.colors=l.map(function(u){return W(u)}),this.boundsType=(e=r.boundsType)!==null&&e!==void 0?e:y.INCLUDE_MAX,n==="classified"?this.classifiedColors=this.colors.map(function(u,t){return new Z(i[t],i[t+1],u)}):n==="stretched"&&(this.stretchedColor=new K(this.colors,this.values))}return o.prototype.pick=function(r){var e=this,n=e.type,i=e.values,l=e.colors,u=[0,0,0,0];if(n==="unique")i.indexOf(r)>-1&&(u=l[i.indexOf(r)]);else if(n==="classified"){for(var t=0,s=l.length;t<s;t++)if(this.classifiedColors[t].contains(r,this.boundsType)){u=this.classifiedColors[t].color;break}}else n==="stretched"&&(u=this.stretchedColor.pick(r));return u},o}();function W(o){if(typeof o=="string"){var r=H.parseCSSColor(o);if(r)return r;throw new Error('Invalide color: "'.concat(o,'"'))}return o}function N(o){var r=o.type,e=o.values,n=o.colors;if(r==="classified"){if(e.length-1===n.length)return!0;throw new Error("The length of colors must be less than the length of values by 1 when the type of ColorOptions is classified.")}else{if(e.length===n.length)return!0;throw new Error("The length of colors must be equal to the length of values.")}}function Y(o,r,e){for(var n=r.ncols,i=r.nrows,l=r.nodata_value,u=l===void 0?-9999:l,t=[],s=new Q(e),a=0;a<i;a++)for(var f=0;f<n;f++){var m=o[i-1-a][f],h=m!=u?s.pick(m):[0,0,0,0];t.push(h[0],h[1],h[2],h[3]*255)}return t}function $(o,r){var e=[-20037508342789244e-9,20037508342789244e-9],n=[r[0],r[3],r[1],r[2]],i=R(o,"EPSG:3857").forward;function l(f){var m=i(f),h=Math.abs((m[0]-e[0])/(20037508342789244e-9*2)),c=Math.abs((m[1]-e[1])/(20037508342789244e-9*2));return[h,c]}var u=1e-11,t=[[0,0],[0,1],[1,0],[1,1]],s=new T(l,n,t,[[0,1,3],[0,3,2]]);s.lowerEpsilon(u);var a=s.output();return{pos:a.projected.flat(),uv:a.uv.flat(),trigs:a.trigs.flat()}}var J=function(){function o(r,e){var n,i;if(this.type="custom",this.renderingMode="2d",this.stencilChecked=!0,this.id=r,this.loaded=!1,this.data=e.data,this.opacity=(n=e.opacity)!==null&&n!==void 0?n:1,this.maskProperty=Object.assign({type:"in"},e.mask),N(e.colorOption)&&(this.colorOption=e.colorOption),this.resampling=(i=e.resampling)!==null&&i!==void 0?i:this.colorOption.type==="stretched"?"linear":"nearest",this.stencilChecked=B(M.version,">=2.7.0"),this.maskProperty.data&&!this.stencilChecked)throw new Error("如果需要遮罩（掩膜），mapbox-gl 版本必须：>=2.7.0");var l=e.data.metadata,u=l.xll,t=l.yll,s=l.cellsize,a=l.lltype,f=l.ncols,m=l.nrows,h=l.projection,c=a==="corner"?u:u-s/2,p=c+s*f,d=a==="corner"?t:t-s/2,g=d+s*m;this.arrugado=$(h??"EPSG:4326",[[c,g],[p,g],[p,d],[c,d]])}return o.prototype.onAdd=function(r,e){if(this.map=r,this.gl=e,this.programInfo=b(e,[j,G]),this.loadTexture(r,e),this.bufferInfo=E(e,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs}),this.maskProperty.data){var n=this.maskProperty.data;n&&(this.maskProgramInfo=b(e,[w,A]),this.maskBufferInfo=this.getMaskBufferInfo(e,n))}},o.prototype.onRemove=function(r,e){this.programInfo&&e.deleteProgram(this.programInfo.program),this.maskProgramInfo&&e.deleteProgram(this.maskProgramInfo.program),this.texture&&e.deleteTexture(this.texture)},o.prototype.render=function(r,e){var n;if(this.stencilChecked&&this.map.painter.resetStencilClippingMasks(),this.loaded&&this.programInfo&&this.bufferInfo){if(r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),this.maskProgramInfo&&this.maskBufferInfo){r.useProgram(this.maskProgramInfo.program),r.enable(r.STENCIL_TEST),r.stencilFunc(r.ALWAYS,1,255),r.stencilOp(r.REPLACE,r.REPLACE,r.REPLACE),r.stencilMask(255),r.clear(r.STENCIL_BUFFER_BIT),x(this.maskProgramInfo,{u_matrix:e}),L(r,this.maskProgramInfo,this.maskBufferInfo);var i=r.UNSIGNED_SHORT;this.maskBufferInfo.numElements/3>65535&&(r.getExtension("OES_element_index_uint"),i=r.UNSIGNED_INT),r.drawElements(r.TRIANGLES,this.maskBufferInfo.numElements,i,0)}if(r.useProgram(this.programInfo.program),!((n=this.maskProgramInfo)===null||n===void 0)&&n.program){var l=this.maskProperty.type==="out"?0:1;r.stencilFunc(r.EQUAL,l,255),r.stencilOp(r.KEEP,r.KEEP,r.KEEP)}x(this.programInfo,{u_matrix:e,u_opacity:this.opacity||1,u_sampler:this.texture}),L(r,this.programInfo,this.bufferInfo),r.drawElements(r.TRIANGLES,this.arrugado.trigs.length,r.UNSIGNED_SHORT,0),r.clear(r.STENCIL_BUFFER_BIT),r.disable(r.STENCIL_TEST)}},o.prototype.updateColorOption=function(r){if(this.gl&&this.map){var e=Object.assign({},this.colorOption,r);N(e)&&(this.colorOption=e),this.loaded=!1,this.texture&&this.gl.deleteTexture(this.texture),this.loadTexture(this.map,this.gl)}return this},o.prototype.updateMask=function(r){return this.gl&&this.map&&(this.maskProgramInfo||(this.maskProgramInfo=b(this.gl,[w,A])),this.maskProperty=Object.assign(this.maskProperty,r),this.maskBufferInfo=this.getMaskBufferInfo(this.gl,this.maskProperty.data),this.map.triggerRepaint()),this},o.prototype.loadTexture=function(r,e){var n=this.resampling==="linear"?e.LINEAR:e.NEAREST,i=this.data,l=i.data,u=i.metadata,t=Y(l,u,this.colorOption);this.texture=O(e,{width:u.ncols,height:u.nrows,src:t,minMag:n,flipY:1}),this.loaded=!0,r.triggerRepaint()},o.prototype.getMaskBufferInfo=function(r,e){var n=[],i=[];if(e.type==="MultiPolygon")for(var l=e.coordinates.length,u=0,t=0;t<l;t++){var s=e.coordinates[t],a=k.flatten(s),f=a.vertices,m=a.holes,h=a.dimensions,c=k(f,m,h),p=c.map(function(v){return v+u});u+=f.length/2;for(var d=0;d<f.length;d++)n.push(f[d]);for(var g=0;g<p.length;g++)i.push(p[g])}else{var a=k.flatten(e.coordinates),f=a.vertices,m=a.holes,h=a.dimensions;n=f,i=k(f,m,h)}return E(r,{a_pos:{numComponents:2,data:n},indices:i.length/3>65535?new Uint32Array(i):new Uint16Array(i)})},o}();const ar=U({__name:"grid-layer",setup(o){const r={style:F.DEFAULT,center:[107.744809,30.180706],zoom:6},e=async n=>{fetch(q("/data/dem.json")).then(i=>i.json()).then(i=>{const l=new J("grid-layer",{data:{data:i,metadata:{xll:105.289583,yll:28.154306,cellsize:.025,ncols:196,nrows:162,lltype:"corner"}},colorOption:{type:"stretched",colors:["#30123B","#4686FB","#1BE5B5","#A4FC3C","#FBB938","#E3440A","#7A0403"],values:[0,500,1e3,1500,2e3,2500,3e3]}});n.addLayer(l,"admin-1-boundary-bg")})};return(n,i)=>(X(),D(S,{"map-options":r,onLoad:e}))}});export{ar as default};
