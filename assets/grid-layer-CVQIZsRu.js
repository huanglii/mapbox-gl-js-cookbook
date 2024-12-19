import{e as k}from"./earcut-c0OxLoQO.js";import{m as M,b as S,S as F}from"./base-map-BIizDMti.js";import{p as R,A as O,s as B,c as b,a as E,b as x,d as L,e as T}from"./index-OPaE5mSf.js";import{g as U,l as D,_ as X,o as q,h as G}from"./app-D2iOL_yP.js";const j=`
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
`,z=`
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
`;var C={},P;function H(){if(P)return C;P=1;var o={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function e(t){return t=Math.round(t),t<0?0:t>255?255:t}function r(t){return t<0?0:t>1?1:t}function a(t){return t[t.length-1]==="%"?e(parseFloat(t)/100*255):e(parseInt(t))}function i(t){return t[t.length-1]==="%"?r(parseFloat(t)/100):r(parseFloat(t))}function l(t,s,n){return n<0?n+=1:n>1&&(n-=1),n*6<1?t+(s-t)*n*6:n*2<1?s:n*3<2?t+(s-t)*(2/3-n)*6:t}function u(t){var s=t.replace(/ /g,"").toLowerCase();if(s in o)return o[s].slice();if(s[0]==="#"){if(s.length===4){var n=parseInt(s.substr(1),16);return n>=0&&n<=4095?[(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1]:null}else if(s.length===7){var n=parseInt(s.substr(1),16);return n>=0&&n<=16777215?[(n&16711680)>>16,(n&65280)>>8,n&255,1]:null}return null}var f=s.indexOf("("),d=s.indexOf(")");if(f!==-1&&d+1===s.length){var h=s.substr(0,f),c=s.substr(f+1,d-(f+1)).split(","),p=1;switch(h){case"rgba":if(c.length!==4)return null;p=i(c.pop());case"rgb":return c.length!==3?null:[a(c[0]),a(c[1]),a(c[2]),p];case"hsla":if(c.length!==4)return null;p=i(c.pop());case"hsl":if(c.length!==3)return null;var m=(parseFloat(c[0])%360+360)%360/360,g=i(c[1]),v=i(c[2]),y=v<=.5?v*(g+1):v+g-v*g,I=v*2-y;return[e(l(I,y,m+1/3)*255),e(l(I,y,m)*255),e(l(I,y,m-1/3)*255),p];default:return null}}return null}try{C.parseCSSColor=u}catch{}return C}var Z=H(),_;(function(o){o[o.INCLUDE_MIN_AND_MAX=0]="INCLUDE_MIN_AND_MAX",o[o.INCLUDE_MAX=1]="INCLUDE_MAX",o[o.INCLUDE_MIN=2]="INCLUDE_MIN",o[o.EXCLUSIVE=3]="EXCLUSIVE"})(_||(_={}));var K=function(){function o(e,r,a){this.min=e,this.max=r,this.color=a}return o.prototype.contains=function(e,r){return(e>this.min||!isNaN(this.min)&&e==this.min&&(r==_.INCLUDE_MIN_AND_MAX||r==_.INCLUDE_MIN)||isNaN(this.min))&&(e<this.max||!isNaN(this.max)&&e==this.max&&(r==_.INCLUDE_MIN_AND_MAX||r==_.INCLUDE_MAX)||isNaN(this.max))},o}(),Q=function(){function o(e,r){this.colors=e,this.domains=r,this.min=r[0],this.max=r[r.length-1]}return o.prototype.pick=function(e){var r=this,a=r.domains,i=r.colors;if(e<this.min||e>this.max)return[0,0,0,0];if(a.indexOf(e)>-1)return i[a.indexOf(e)];for(var l=a[0],u=a[0],t=i[0],s=i[0],n=1,f=a.length;n<f;n++)if(e<a[n]){l=a[n-1],u=a[n],t=i[n-1],s=i[n];break}var d=(e-l)/(u-l),h=1-d,c=Math.round(s[0]*d+t[0]*h),p=Math.round(s[1]*d+t[1]*h),m=Math.round(s[2]*d+t[2]*h),g=s[3]*d+t[3]*h;return[c,p,m,g]},o}(),W=function(){function o(e){var r,a=e.type,i=e.values,l=e.colors;this.type=a,this.values=i,this.colors=l.map(function(u){return Y(u)}),this.boundsType=(r=e.boundsType)!==null&&r!==void 0?r:_.INCLUDE_MAX,a==="classified"?this.classifiedColors=this.colors.map(function(u,t){return new K(i[t],i[t+1],u)}):a==="stretched"&&(this.stretchedColor=new Q(this.colors,this.values))}return o.prototype.pick=function(e){var r=this,a=r.type,i=r.values,l=r.colors,u=[0,0,0,0];if(a==="unique")i.indexOf(e)>-1&&(u=l[i.indexOf(e)]);else if(a==="classified"){for(var t=0,s=l.length;t<s;t++)if(this.classifiedColors[t].contains(e,this.boundsType)){u=this.classifiedColors[t].color;break}}else a==="stretched"&&(u=this.stretchedColor.pick(e));return u},o}();function Y(o){if(typeof o=="string"){var e=Z.parseCSSColor(o);if(e)return e;throw new Error('Invalide color: "'.concat(o,'"'))}return o}function N(o){var e=o.type,r=o.values,a=o.colors;if(e==="classified"){if(r.length-1===a.length)return!0;throw new Error("The length of colors must be less than the length of values by 1 when the type of ColorOptions is classified.")}else{if(r.length===a.length)return!0;throw new Error("The length of colors must be equal to the length of values.")}}function $(o,e,r){for(var a=e.ncols,i=e.nrows,l=e.nodata_value,u=l===void 0?-9999:l,t=[],s=new W(r),n=0;n<i;n++)for(var f=0;f<a;f++){var d=o[i-1-n][f],h=d!=u?s.pick(d):[0,0,0,0];t.push(h[0],h[1],h[2],h[3]*255)}return t}function J(o,e){var r=[-20037508342789244e-9,20037508342789244e-9],a=[e[0],e[3],e[1],e[2]],i=R(o,"EPSG:3857").forward;function l(f){var d=i(f),h=Math.abs((d[0]-r[0])/(20037508342789244e-9*2)),c=Math.abs((d[1]-r[1])/(20037508342789244e-9*2));return[h,c]}var u=1e-11,t=[[0,0],[0,1],[1,0],[1,1]],s=new O(l,a,t,[[0,1,3],[0,3,2]]);s.lowerEpsilon(u);var n=s.output();return{pos:n.projected.flat(),uv:n.uv.flat(),trigs:n.trigs.flat()}}var V=function(){function o(e,r){var a,i;if(this.type="custom",this.renderingMode="2d",this.stencilChecked=!0,this.id=e,this.loaded=!1,this.data=r.data,this.opacity=(a=r.opacity)!==null&&a!==void 0?a:1,this.maskProperty=Object.assign({type:"in"},r.mask),N(r.colorOption)&&(this.colorOption=r.colorOption),this.resampling=(i=r.resampling)!==null&&i!==void 0?i:this.colorOption.type==="stretched"?"linear":"nearest",this.stencilChecked=B(M.version,">=2.7.0"),this.maskProperty.data&&!this.stencilChecked)throw new Error("如果需要遮罩（掩膜），mapbox-gl 版本必须：>=2.7.0");var l=r.data.metadata,u=l.xll,t=l.yll,s=l.cellsize,n=l.lltype,f=l.ncols,d=l.nrows,h=l.projection,c=n==="corner"?u:u-s/2,p=c+s*f,m=n==="corner"?t:t-s/2,g=m+s*d;this.arrugado=J(h??"EPSG:4326",[[c,g],[p,g],[p,m],[c,m]])}return o.prototype.onAdd=function(e,r){if(this.map=e,this.gl=r,this.programInfo=b(r,[z,j]),this.loadTexture(e,r),this.bufferInfo=E(r,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs}),this.maskProperty.data){var a=this.maskProperty.data;a&&(this.maskProgramInfo=b(r,[w,A]),this.maskBufferInfo=this.getMaskBufferInfo(r,a))}},o.prototype.onRemove=function(e,r){this.programInfo&&r.deleteProgram(this.programInfo.program),this.maskProgramInfo&&r.deleteProgram(this.maskProgramInfo.program),this.texture&&r.deleteTexture(this.texture)},o.prototype.render=function(e,r){var a;if(this.stencilChecked&&this.map.painter.resetStencilClippingMasks(),this.loaded&&this.programInfo&&this.bufferInfo){if(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),this.maskProgramInfo&&this.maskBufferInfo){e.useProgram(this.maskProgramInfo.program),e.enable(e.STENCIL_TEST),e.stencilFunc(e.ALWAYS,1,255),e.stencilOp(e.REPLACE,e.REPLACE,e.REPLACE),e.stencilMask(255),e.clear(e.STENCIL_BUFFER_BIT),x(this.maskProgramInfo,{u_matrix:r}),L(e,this.maskProgramInfo,this.maskBufferInfo);var i=e.UNSIGNED_SHORT;this.maskBufferInfo.numElements/3>65535&&(e.getExtension("OES_element_index_uint"),i=e.UNSIGNED_INT),e.drawElements(e.TRIANGLES,this.maskBufferInfo.numElements,i,0)}if(e.useProgram(this.programInfo.program),!((a=this.maskProgramInfo)===null||a===void 0)&&a.program){var l=this.maskProperty.type==="out"?0:1;e.stencilFunc(e.EQUAL,l,255),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}x(this.programInfo,{u_matrix:r,u_opacity:this.opacity||1,u_sampler:this.texture}),L(e,this.programInfo,this.bufferInfo),e.drawElements(e.TRIANGLES,this.arrugado.trigs.length,e.UNSIGNED_SHORT,0),e.clear(e.STENCIL_BUFFER_BIT),e.disable(e.STENCIL_TEST)}},o.prototype.updateColorOption=function(e){if(this.gl&&this.map){var r=Object.assign({},this.colorOption,e);N(r)&&(this.colorOption=r),this.loaded=!1,this.texture&&this.gl.deleteTexture(this.texture),this.loadTexture(this.map,this.gl)}return this},o.prototype.updateMask=function(e){return this.gl&&this.map&&(this.maskProgramInfo||(this.maskProgramInfo=b(this.gl,[w,A])),this.maskProperty=Object.assign(this.maskProperty,e),this.maskBufferInfo=this.getMaskBufferInfo(this.gl,this.maskProperty.data),this.map.triggerRepaint()),this},o.prototype.loadTexture=function(e,r){var a=this.resampling==="linear"?r.LINEAR:r.NEAREST,i=this.data,l=i.data,u=i.metadata,t=$(l,u,this.colorOption);this.texture=T(r,{width:u.ncols,height:u.nrows,src:t,minMag:a,flipY:1}),this.loaded=!0,e.triggerRepaint()},o.prototype.getMaskBufferInfo=function(e,r){var a=[],i=[];if(r.type==="MultiPolygon")for(var l=r.coordinates.length,u=0,t=0;t<l;t++){var s=r.coordinates[t],n=k.flatten(s),f=n.vertices,d=n.holes,h=n.dimensions,c=k(f,d,h),p=c.map(function(v){return v+u});u+=f.length/2;for(var m=0;m<f.length;m++)a.push(f[m]);for(var g=0;g<p.length;g++)i.push(p[g])}else{var n=k.flatten(r.coordinates),f=n.vertices,d=n.holes,h=n.dimensions;a=f,i=k(f,d,h)}return E(e,{a_pos:{numComponents:2,data:a},indices:i.length/3>65535?new Uint32Array(i):new Uint16Array(i)})},o}();const ee=U({__name:"grid-layer",setup(o,{expose:e}){e();const i={mapOptions:{style:F.DEFAULT,center:[107.744809,30.180706],zoom:6},handleMapLoaded:async l=>{fetch(D("/data/dem.json")).then(u=>u.json()).then(u=>{const t=new V("grid-layer",{data:{data:u,metadata:{xll:105.289583,yll:28.154306,cellsize:.025,ncols:196,nrows:162,lltype:"corner"}},colorOption:{type:"stretched",colors:["#30123B","#4686FB","#1BE5B5","#A4FC3C","#FBB938","#E3440A","#7A0403"],values:[0,500,1e3,1500,2e3,2500,3e3]}});l.addLayer(t,"admin-1-boundary-bg")})},BaseMap:S};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function re(o,e,r,a,i,l){return q(),G(a.BaseMap,{"map-options":a.mapOptions,onLoad:a.handleMapLoaded})}const ie=X(ee,[["render",re],["__file","grid-layer.vue"]]);export{ie as default};
