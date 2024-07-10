import{p as R,A as T,s as B,c as I,a as E,b as x,d as L,e as O}from"./index-u00BlLOj.js";import{e as _}from"./earcut-C4sJTbQb.js";import{m as U,b as D,S as X}from"./base-map-XmSAiI59.js";import{g as G,o as q,h as j,k as z,_ as H}from"./app-WXFCxs9o.js";const Z=`
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
`,$=`
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
`;var K={},S,P={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function y(t){return t=Math.round(t),t<0?0:t>255?255:t}function N(t){return t<0?0:t>1?1:t}function b(t){return t[t.length-1]==="%"?y(parseFloat(t)/100*255):y(parseInt(t))}function k(t){return t[t.length-1]==="%"?N(parseFloat(t)/100):N(parseFloat(t))}function C(t,r,e){return e<0?e+=1:e>1&&(e-=1),e*6<1?t+(r-t)*e*6:e*2<1?r:e*3<2?t+(r-t)*(2/3-e)*6:t}function Q(t){var r=t.replace(/ /g,"").toLowerCase();if(r in P)return P[r].slice();if(r[0]==="#"){if(r.length===4){var e=parseInt(r.substr(1),16);return e>=0&&e<=4095?[(e&3840)>>4|(e&3840)>>8,e&240|(e&240)>>4,e&15|(e&15)<<4,1]:null}else if(r.length===7){var e=parseInt(r.substr(1),16);return e>=0&&e<=16777215?[(e&16711680)>>16,(e&65280)>>8,e&255,1]:null}return null}var a=r.indexOf("("),n=r.indexOf(")");if(a!==-1&&n+1===r.length){var s=r.substr(0,a),o=r.substr(a+1,n-(a+1)).split(","),i=1;switch(s){case"rgba":if(o.length!==4)return null;i=k(o.pop());case"rgb":return o.length!==3?null:[b(o[0]),b(o[1]),b(o[2]),i];case"hsla":if(o.length!==4)return null;i=k(o.pop());case"hsl":if(o.length!==3)return null;var u=(parseFloat(o[0])%360+360)%360/360,l=k(o[1]),f=k(o[2]),h=f<=.5?f*(l+1):f+l-f*l,c=f*2-h;return[y(C(c,h,u+1/3)*255),y(C(c,h,u)*255),y(C(c,h,u-1/3)*255),i];default:return null}}return null}try{S=K.parseCSSColor=Q}catch{}var v;(function(t){t[t.INCLUDE_MIN_AND_MAX=0]="INCLUDE_MIN_AND_MAX",t[t.INCLUDE_MAX=1]="INCLUDE_MAX",t[t.INCLUDE_MIN=2]="INCLUDE_MIN",t[t.EXCLUSIVE=3]="EXCLUSIVE"})(v||(v={}));var W=function(){function t(r,e,a){this.min=r,this.max=e,this.color=a}return t.prototype.contains=function(r,e){return(r>this.min||!isNaN(this.min)&&r==this.min&&(e==v.INCLUDE_MIN_AND_MAX||e==v.INCLUDE_MIN)||isNaN(this.min))&&(r<this.max||!isNaN(this.max)&&r==this.max&&(e==v.INCLUDE_MIN_AND_MAX||e==v.INCLUDE_MAX)||isNaN(this.max))},t}();const Y=W;var J=function(){function t(r,e){this.colors=r,this.domains=e,this.min=e[0],this.max=e[e.length-1]}return t.prototype.pick=function(r){var e=this,a=e.domains,n=e.colors;if(r<this.min||r>this.max)return[0,0,0,0];if(a.indexOf(r)>-1)return n[a.indexOf(r)];for(var s=a[0],o=a[0],i=n[0],u=n[0],l=1,f=a.length;l<f;l++)if(r<a[l]){s=a[l-1],o=a[l],i=n[l-1],u=n[l];break}var h=(r-s)/(o-s),c=1-h,d=Math.round(u[0]*h+i[0]*c),g=Math.round(u[1]*h+i[1]*c),m=Math.round(u[2]*h+i[2]*c),p=u[3]*h+i[3]*c;return[d,g,m,p]},t}();const V=J;var rr=function(){function t(r){var e,a=r.type,n=r.values,s=r.colors;this.type=a,this.values=n,this.colors=s.map(function(o){return tr(o)}),this.boundsType=(e=r.boundsType)!==null&&e!==void 0?e:v.INCLUDE_MAX,a==="classified"?this.classifiedColors=this.colors.map(function(o,i){return new Y(n[i],n[i+1],o)}):a==="stretched"&&(this.stretchedColor=new V(this.colors,this.values))}return t.prototype.pick=function(r){var e=this,a=e.type,n=e.values,s=e.colors,o=[0,0,0,0];if(a==="unique")n.indexOf(r)>-1&&(o=s[n.indexOf(r)]);else if(a==="classified"){for(var i=0,u=s.length;i<u;i++)if(this.classifiedColors[i].contains(r,this.boundsType)){o=this.classifiedColors[i].color;break}}else a==="stretched"&&(o=this.stretchedColor.pick(r));return o},t}();const er=rr;function tr(t){if(typeof t=="string"){var r=S(t);if(r)return r;throw new Error('Invalide color: "'.concat(t,'"'))}return t}function M(t){var r=t.type,e=t.values,a=t.colors;if(r==="classified"){if(e.length-1===a.length)return!0;throw new Error("The length of colors must be less than the length of values by 1 when the type of ColorOptions is classified.")}else{if(e.length===a.length)return!0;throw new Error("The length of colors must be equal to the length of values.")}}function ar(t,r,e){for(var a=r.ncols,n=r.nrows,s=r.nodata_value,o=s===void 0?-9999:s,i=[],u=new er(e),l=0;l<n;l++)for(var f=0;f<a;f++){var h=t[n-1-l][f],c=h!=o?u.pick(h):[0,0,0,0];i.push(c[0],c[1],c[2],c[3]*255)}return i}function nr(t,r){var e=[-20037508342789244e-9,20037508342789244e-9],a=[r[0],r[3],r[1],r[2]],n=R(t,"EPSG:3857").forward;function s(f){var h=n(f),c=Math.abs((h[0]-e[0])/(20037508342789244e-9*2)),d=Math.abs((h[1]-e[1])/(20037508342789244e-9*2));return[c,d]}var o=1e-11,i=[[0,0],[0,1],[1,0],[1,1]],u=new T(s,a,i,[[0,1,3],[0,3,2]]);u.lowerEpsilon(o);var l=u.output();return{pos:l.projected.flat(),uv:l.uv.flat(),trigs:l.trigs.flat()}}var or=function(){function t(r,e){var a,n;if(this.type="custom",this.renderingMode="2d",this.stencilChecked=!0,this.id=r,this.loaded=!1,this.data=e.data,this.opacity=(a=e.opacity)!==null&&a!==void 0?a:1,this.maskProperty=Object.assign({type:"in"},e.mask),M(e.colorOption)&&(this.colorOption=e.colorOption),this.resampling=(n=e.resampling)!==null&&n!==void 0?n:this.colorOption.type==="stretched"?"linear":"nearest",this.stencilChecked=B(U.version,">=2.7.0"),this.maskProperty.data&&!this.stencilChecked)throw new Error("如果需要遮罩（掩膜），mapbox-gl 版本必须：>=2.7.0");var s=e.data.metadata,o=s.xll,i=s.yll,u=s.cellsize,l=s.lltype,f=s.ncols,h=s.nrows,c=s.projection,d=l==="corner"?o:o-u/2,g=d+u*f,m=l==="corner"?i:i-u/2,p=m+u*h;this.arrugado=nr(c??"EPSG:4326",[[d,p],[g,p],[g,m],[d,m]])}return t.prototype.onAdd=function(r,e){if(this.map=r,this.gl=e,this.programInfo=I(e,[$,Z]),this.loadTexture(r,e),this.bufferInfo=E(e,{a_pos:{numComponents:2,data:this.arrugado.pos},a_uv:{numComponents:2,data:this.arrugado.uv},indices:this.arrugado.trigs}),this.maskProperty.data){var a=this.maskProperty.data;a&&(this.maskProgramInfo=I(e,[w,A]),this.maskBufferInfo=this.getMaskBufferInfo(e,a))}},t.prototype.onRemove=function(r,e){this.programInfo&&e.deleteProgram(this.programInfo.program),this.maskProgramInfo&&e.deleteProgram(this.maskProgramInfo.program),this.texture&&e.deleteTexture(this.texture)},t.prototype.render=function(r,e){var a;if(this.stencilChecked&&this.map.painter.resetStencilClippingMasks(),this.loaded&&this.programInfo&&this.bufferInfo){if(r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),this.maskProgramInfo&&this.maskBufferInfo){r.useProgram(this.maskProgramInfo.program),r.enable(r.STENCIL_TEST),r.stencilFunc(r.ALWAYS,1,255),r.stencilOp(r.REPLACE,r.REPLACE,r.REPLACE),r.stencilMask(255),r.clear(r.STENCIL_BUFFER_BIT),x(this.maskProgramInfo,{u_matrix:e}),L(r,this.maskProgramInfo,this.maskBufferInfo);var n=r.UNSIGNED_SHORT;this.maskBufferInfo.numElements/3>65535&&(r.getExtension("OES_element_index_uint"),n=r.UNSIGNED_INT),r.drawElements(r.TRIANGLES,this.maskBufferInfo.numElements,n,0)}if(r.useProgram(this.programInfo.program),!((a=this.maskProgramInfo)===null||a===void 0)&&a.program){var s=this.maskProperty.type==="out"?0:1;r.stencilFunc(r.EQUAL,s,255),r.stencilOp(r.KEEP,r.KEEP,r.KEEP)}x(this.programInfo,{u_matrix:e,u_opacity:this.opacity||1,u_sampler:this.texture}),L(r,this.programInfo,this.bufferInfo),r.drawElements(r.TRIANGLES,this.arrugado.trigs.length,r.UNSIGNED_SHORT,0),r.clear(r.STENCIL_BUFFER_BIT),r.disable(r.STENCIL_TEST)}},t.prototype.updateColorOption=function(r){if(this.gl&&this.map){var e=Object.assign({},this.colorOption,r);M(e)&&(this.colorOption=e),this.loaded=!1,this.texture&&this.gl.deleteTexture(this.texture),this.loadTexture(this.map,this.gl)}return this},t.prototype.updateMask=function(r){return this.gl&&this.map&&(this.maskProgramInfo||(this.maskProgramInfo=I(this.gl,[w,A])),this.maskProperty=Object.assign(this.maskProperty,r),this.maskBufferInfo=this.getMaskBufferInfo(this.gl,this.maskProperty.data),this.map.triggerRepaint()),this},t.prototype.loadTexture=function(r,e){var a=this.resampling==="linear"?e.LINEAR:e.NEAREST,n=this.data,s=n.data,o=n.metadata,i=ar(s,o,this.colorOption);this.texture=O(e,{width:o.ncols,height:o.nrows,src:i,minMag:a,flipY:1}),this.loaded=!0,r.triggerRepaint()},t.prototype.getMaskBufferInfo=function(r,e){var a=[],n=[];if(e.type==="MultiPolygon")for(var s=e.coordinates.length,o=0,i=0;i<s;i++){var u=e.coordinates[i],l=_.flatten(u),f=l.vertices,h=l.holes,c=l.dimensions,d=_(f,h,c),g=d.map(function(F){return F+o});o+=f.length/2;for(var m=0;m<f.length;m++)a.push(f[m]);for(var p=0;p<g.length;p++)n.push(g[p])}else{var l=_.flatten(e.coordinates),f=l.vertices,h=l.holes,c=l.dimensions;a=f,n=_(f,h,c)}return E(r,{a_pos:{numComponents:2,data:a},indices:n.length/3>65535?new Uint32Array(n):new Uint16Array(n)})},t}();const ir=or,sr=G({__name:"grid-layer",setup(t){const r={style:X.DEFAULT,center:[107.744809,30.180706],zoom:6},e=async a=>{fetch(z("/data/dem.json")).then(n=>n.json()).then(n=>{const s=new ir("grid-layer",{data:{data:n,metadata:{xll:105.289583,yll:28.154306,cellsize:.025,ncols:196,nrows:162,lltype:"corner"}},colorOption:{type:"stretched",colors:["#30123B","#4686FB","#1BE5B5","#A4FC3C","#FBB938","#E3440A","#7A0403"],values:[0,500,1e3,1500,2e3,2500,3e3]}});a.addLayer(s,"admin-1-boundary-bg")})};return(a,n)=>(q(),j(D,{"map-options":r,onLoad:e}))}}),hr=H(sr,[["__file","grid-layer.vue"]]);export{hr as default};
