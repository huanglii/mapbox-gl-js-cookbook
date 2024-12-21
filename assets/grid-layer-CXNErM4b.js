import{b as me,S as xe}from"./base-map-BM8NmeXw.js";import{g as ve,l as he,_ as ye,o as _e,h as Ae,d as Me,e as be}from"./app-CAIKAHf6.js";import{G as Se,u as Oe,U as Pe,_ as y,T as Ce,i as oe,F as Ee,h as $,l as L,r as I,w as Q,c as S,m as Te,p as ie,M as W,d as Ie,C as O,e as we,B as G,L as Ne,a as De,f as w,b as Le}from"./mapbox-layer-6bv6CX28.js";import{C as Re,A as M,a as ae,B as Fe,b as Ue,d as V,g as Be,c as re,e as ze}from"./cpu-aggregator-CFomT0kn.js";function se(l){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;const n=Math.fround(l),o=l-n;return e[t]=n,e[t+1]=o,e}function Ge(l){return l-Math.fround(l)}function We(l){const e=new Float32Array(32);for(let t=0;t<4;++t)for(let n=0;n<4;++n){const o=t*4+n;se(l[n*4+t],e,o*2)}return e}const Ve=`uniform float ONE;
vec2 split(float a) {
  const float SPLIT = 4097.0;
  float t = a * SPLIT;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float a_hi = t * ONE - (t - a);
  float a_lo = a * ONE - a_hi;
#else
  float a_hi = t - (t - a);
  float a_lo = a - a_hi;
#endif
  return vec2(a_hi, a_lo);
}
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * ONE;
  float err = b - (sum - a) * ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *
    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +
    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ke={ONE:1};function Xe(){return ke}const k={name:"fp64-arithmetic",vs:Ve,fs:null,getUniforms:Xe,fp64ify:se,fp64LowPart:Ge,fp64ifyMatrix4:We},He=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),je=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),qe=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),Ye=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),Ke={POSITION:{size:3,value:new Float32Array(je)},NORMAL:{size:3,value:new Float32Array(qe)},TEXCOORD_0:{size:2,value:new Float32Array(Ye)}};class le extends Se{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{id:t=Oe("cube-geometry")}=e;super({...e,id:t,indices:{size:1,value:new Uint16Array(He)},attributes:{...Ke,...e.attributes}})}}const $e={cellSize:{type:"number",min:0,value:1e3},offset:{type:"array",value:[1,1]}};class X extends Re{getGeometry(e){return new le}draw({uniforms:e}){const{elevationScale:t,extruded:n,offset:o,coverage:i,cellSize:a,angle:r,radiusUnits:s}=this.props;this.state.model.setUniforms(e).setUniforms({radius:a/2,radiusUnits:Pe[s],angle:r,offset:o,extruded:n,coverage:i,elevationScale:t,edgeDistance:1,isWireframe:!1}).draw()}}y(X,"layerName","GridCellLayer");y(X,"defaultProps",$e);const Qe={projectPoints:!1,viewport:null,createBufferObjects:!0,moduleSettings:{}},b=3402823466e29,ce=[32775,32774],ge=[32776,32774],Ze=[32776,32775],Z={[M.SUM]:32774,[M.MEAN]:32774,[M.MIN]:ce,[M.MAX]:ge},Je={size:1,operation:M.SUM,needMin:!1,needMax:!1,combineMaxMin:!1},et=4,tt=`#define SHADER_NAME gpu-aggregation-to-grid-vs

attribute vec3 positions;
attribute vec3 positions64Low;
attribute vec3 weights;
uniform vec2 cellSize;
uniform vec2 gridSize;
uniform bool projectPoints;
uniform vec2 translation;
uniform vec3 scaling;

varying vec3 vWeights;

vec2 project_to_pixel(vec4 pos) {
  vec4 result;
  pos.xy = pos.xy/pos.w;
  result = pos + vec4(translation, 0., 0.);
  result.xy = scaling.z > 0. ? result.xy * scaling.xy : result.xy;
  return result.xy;
}

void main(void) {

  vWeights = weights;

  vec4 windowPos = vec4(positions, 1.);
  if (projectPoints) {
    windowPos = project_position_to_clipspace(positions, positions64Low, vec3(0));
  }

  vec2 pos = project_to_pixel(windowPos);

  vec2 pixelXY64[2];
  pixelXY64[0] = vec2(pos.x, 0.);
  pixelXY64[1] = vec2(pos.y, 0.);
  vec2 gridXY64[2];
  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));
  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));
  float x = floor(gridXY64[0].x);
  float y = floor(gridXY64[1].x);
  pos = vec2(x, y);
  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);
  vec2 offset = 1.0 / gridSize;
  pos = pos + offset;

  gl_Position = vec4(pos, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,nt=`#define SHADER_NAME gpu-aggregation-to-grid-fs

precision highp float;

varying vec3 vWeights;

void main(void) {
  gl_FragColor = vec4(vWeights, 1.0);
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,ot=`#version 300 es
#define SHADER_NAME gpu-aggregation-all-vs-64

in vec2 position;
uniform ivec2 gridSize;
out vec2 vTextureCoord;

void main(void) {
  vec2 pos = vec2(-1.0, -1.0);
  vec2 offset = 1.0 / vec2(gridSize);
  pos = pos + offset;

  gl_Position = vec4(pos, 0.0, 1.0);

  int yIndex = gl_InstanceID / gridSize[0];
  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);

  vec2 yIndexFP64 = vec2(float(yIndex), 0.);
  vec2 xIndexFP64 = vec2(float(xIndex), 0.);
  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);
  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);

  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);
  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);

  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);
  gl_PointSize = 1.0;
}
`,it=`#version 300 es
#define SHADER_NAME gpu-aggregation-all-fs

precision highp float;

in vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform bool combineMaxMin;
out vec4 fragColor;
void main(void) {
  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
  if (textureColor.a == 0.) {
    discard;
  }
  fragColor.rgb = textureColor.rgb;
  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;
}
`,at=`#define SHADER_NAME gpu-aggregation-transform-mean-vs
attribute vec4 aggregationValues;
varying vec4 meanValues;

void main()
{
  bool isCellValid = bool(aggregationValues.w > 0.);
  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);
  meanValues.w = aggregationValues.w;
  gl_PointSize = 1.0;
}
`,rt={10240:9728,10241:9728};function U(l,e={}){const{width:t=1,height:n=1,data:o=null,unpackFlipY:i=!0,parameters:a=rt}=e;return new Ce(l,{data:o,format:oe(l)?34836:6408,type:5126,border:0,mipmaps:!1,parameters:a,dataFormat:6408,width:t,height:n,unpackFlipY:i})}function N(l,e){const{id:t,width:n=1,height:o=1,texture:i}=e;return new Ee(l,{id:t,width:n,height:o,attachments:{36064:i}})}const st=["aggregationBuffer","maxMinBuffer","minBuffer","maxBuffer"],J={maxData:"maxBuffer",minData:"minBuffer",maxMinData:"maxMinBuffer"},lt=[S.WEBGL2,S.COLOR_ATTACHMENT_RGBA32F,S.BLEND_EQUATION_MINMAX,S.FLOAT_BLEND,S.TEXTURE_FLOAT];class P{static getAggregationData({aggregationData:e,maxData:t,minData:n,maxMinData:o,pixelIndex:i}){const a=i*et,r={};return e&&(r.cellCount=e[a+3],r.cellWeight=e[a]),o?(r.maxCellWieght=o[0],r.minCellWeight=o[3]):(t&&(r.maxCellWieght=t[0],r.totalCount=t[3]),n&&(r.minCellWeight=n[0],r.totalCount=t[3])),r}static getCellData({countsData:e,size:t=1}){const n=e.length/4,o=new Float32Array(n*t),i=new Uint32Array(n);for(let a=0;a<n;a++){for(let r=0;r<t;r++)o[a*t+r]=e[a*4+r];i[a]=e[a*4+3]}return{cellCounts:i,cellWeights:o}}static isSupported(e){return $(e,lt)}constructor(e,t={}){this.id=t.id||"gpu-grid-aggregator",this.gl=e,this.state={weightAttributes:{},textures:{},meanTextures:{},buffers:{},framebuffers:{},maxMinFramebuffers:{},minFramebuffers:{},maxFramebuffers:{},equations:{},resources:{},results:{}},this._hasGPUSupport=oe(e)&&$(this.gl,S.BLEND_EQUATION_MINMAX),this._hasGPUSupport&&this._setupModels()}delete(){const{gridAggregationModel:e,allAggregationModel:t,meanTransform:n}=this,{textures:o,framebuffers:i,maxMinFramebuffers:a,minFramebuffers:r,maxFramebuffers:s,meanTextures:g,resources:c}=this.state;e==null||e.delete(),t==null||t.delete(),n==null||n.delete(),gt([i,o,a,r,s,g,c])}run(e={}){this.setState({results:{}});const t=this._normalizeAggregationParams(e);return this._hasGPUSupport||L.log(1,"GPUGridAggregator: not supported")(),this._runAggregation(t)}getData(e){const t={},n=this.state.results;n[e].aggregationData||(n[e].aggregationData=n[e].aggregationBuffer.getData()),t.aggregationData=n[e].aggregationData;for(const o in J){const i=J[o];(n[e][o]||n[e][i])&&(n[e][o]=n[e][o]||n[e][i].getData(),t[o]=n[e][o])}return t}updateShaders(e={}){this.setState({shaderOptions:e,modelDirty:!0})}_normalizeAggregationParams(e){const t={...Qe,...e},{weights:n}=t;return n&&(t.weights=ct(n)),t}setState(e){Object.assign(this.state,e)}_getAggregateData(e){const t={},{textures:n,framebuffers:o,maxMinFramebuffers:i,minFramebuffers:a,maxFramebuffers:r,resources:s}=this.state,{weights:g}=e;for(const c in g){t[c]={};const{needMin:f,needMax:d,combineMaxMin:u}=g[c];t[c].aggregationTexture=n[c],t[c].aggregationBuffer=I(o[c],{target:g[c].aggregationBuffer,sourceType:5126}),f&&d&&u?(t[c].maxMinBuffer=I(i[c],{target:g[c].maxMinBuffer,sourceType:5126}),t[c].maxMinTexture=s["".concat(c,"-maxMinTexture")]):(f&&(t[c].minBuffer=I(a[c],{target:g[c].minBuffer,sourceType:5126}),t[c].minTexture=s["".concat(c,"-minTexture")]),d&&(t[c].maxBuffer=I(r[c],{target:g[c].maxBuffer,sourceType:5126}),t[c].maxTexture=s["".concat(c,"-maxTexture")]))}return this._trackGPUResultBuffers(t,g),t}_renderAggregateData(e){const{cellSize:t,projectPoints:n,attributes:o,moduleSettings:i,numCol:a,numRow:r,weights:s,translation:g,scaling:c}=e,{maxMinFramebuffers:f,minFramebuffers:d,maxFramebuffers:u}=this.state,m=[a,r],x={blend:!0,depthTest:!1,blendFunc:[1,1]},v={cellSize:t,gridSize:m,projectPoints:n,translation:g,scaling:c};for(const p in s){const{needMin:h,needMax:_}=s[p],A=h&&_&&s[p].combineMaxMin;this._renderToWeightsTexture({id:p,parameters:x,moduleSettings:i,uniforms:v,gridSize:m,attributes:o,weights:s}),A?this._renderToMaxMinTexture({id:p,parameters:{...x,blendEquation:Ze},gridSize:m,minOrMaxFb:f[p],clearParams:{clearColor:[0,0,0,b]},combineMaxMin:A}):(h&&this._renderToMaxMinTexture({id:p,parameters:{...x,blendEquation:ce},gridSize:m,minOrMaxFb:d[p],clearParams:{clearColor:[b,b,b,0]},combineMaxMin:A}),_&&this._renderToMaxMinTexture({id:p,parameters:{...x,blendEquation:ge},gridSize:m,minOrMaxFb:u[p],clearParams:{clearColor:[0,0,0,0]},combineMaxMin:A}))}}_renderToMaxMinTexture(e){const{id:t,parameters:n,gridSize:o,minOrMaxFb:i,combineMaxMin:a,clearParams:r={}}=e,{framebuffers:s}=this.state,{gl:g,allAggregationModel:c}=this;Q(g,{...r,framebuffer:i,viewport:[0,0,o[0],o[1]]},()=>{g.clear(16384),c.draw({parameters:n,uniforms:{uSampler:s[t].texture,gridSize:o,combineMaxMin:a}})})}_renderToWeightsTexture(e){const{id:t,parameters:n,moduleSettings:o,uniforms:i,gridSize:a,weights:r}=e,{framebuffers:s,equations:g,weightAttributes:c}=this.state,{gl:f,gridAggregationModel:d}=this,{operation:u}=r[t],m=u===M.MIN?[b,b,b,0]:[0,0,0,0];if(Q(f,{framebuffer:s[t],viewport:[0,0,a[0],a[1]],clearColor:m},()=>{f.clear(16384);const x={weights:c[t]};d.draw({parameters:{...n,blendEquation:g[t]},moduleSettings:o,uniforms:i,attributes:x})}),u===M.MEAN){const{meanTextures:x,textures:v}=this.state,p={_sourceTextures:{aggregationValues:x[t]},_targetTexture:v[t],elementCount:v[t].width*v[t].height};this.meanTransform?this.meanTransform.update(p):this.meanTransform=dt(f,p),this.meanTransform.run({parameters:{blend:!1,depthTest:!1}}),s[t].attach({36064:v[t]})}}_runAggregation(e){this._updateModels(e),this._setupFramebuffers(e),this._renderAggregateData(e);const t=this._getAggregateData(e);return this.setState({results:t}),t}_setupFramebuffers(e){const{textures:t,framebuffers:n,maxMinFramebuffers:o,minFramebuffers:i,maxFramebuffers:a,meanTextures:r,equations:s}=this.state,{weights:g}=e,{numCol:c,numRow:f}=e,d={width:c,height:f};for(const u in g){const{needMin:m,needMax:x,combineMaxMin:v,operation:p}=g[u];t[u]=g[u].aggregationTexture||t[u]||U(this.gl,{id:"".concat(u,"-texture"),width:c,height:f}),t[u].resize(d);let h=t[u];p===M.MEAN&&(r[u]=r[u]||U(this.gl,{id:"".concat(u,"-mean-texture"),width:c,height:f}),r[u].resize(d),h=r[u]),n[u]?n[u].attach({36064:h}):n[u]=N(this.gl,{id:"".concat(u,"-fb"),width:c,height:f,texture:h}),n[u].resize(d),s[u]=Z[p]||Z.SUM,(m||x)&&(m&&x&&v?o[u]||(h=g[u].maxMinTexture||this._getMinMaxTexture("".concat(u,"-maxMinTexture")),o[u]=N(this.gl,{id:"".concat(u,"-maxMinFb"),texture:h})):(m&&(i[u]||(h=g[u].minTexture||this._getMinMaxTexture("".concat(u,"-minTexture")),i[u]=N(this.gl,{id:"".concat(u,"-minFb"),texture:h}))),x&&(a[u]||(h=g[u].maxTexture||this._getMinMaxTexture("".concat(u,"-maxTexture")),a[u]=N(this.gl,{id:"".concat(u,"-maxFb"),texture:h})))))}}_getMinMaxTexture(e){const{resources:t}=this.state;return t[e]||(t[e]=U(this.gl,{id:"resourceName"})),t[e]}_setupModels({numCol:e=0,numRow:t=0}={}){var n;const{gl:o}=this,{shaderOptions:i}=this.state;if((n=this.gridAggregationModel)===null||n===void 0||n.delete(),this.gridAggregationModel=ut(o,i),!this.allAggregationModel){const a=e*t;this.allAggregationModel=ft(o,a)}}_setupWeightAttributes(e){const{weightAttributes:t}=this.state,{weights:n}=e;for(const o in n)t[o]=e.attributes[o]}_trackGPUResultBuffers(e,t){const{resources:n}=this.state;for(const o in e)if(e[o]){for(const i of st)if(e[o][i]&&t[o][i]!==e[o][i]){const a="gpu-result-".concat(o,"-").concat(i);n[a]&&n[a].delete(),n[a]=e[o][i]}}}_updateModels(e){const{vertexCount:t,attributes:n,numCol:o,numRow:i}=e,{modelDirty:a}=this.state;a&&(this._setupModels(e),this.setState({modelDirty:!1})),this._setupWeightAttributes(e),this.gridAggregationModel.setVertexCount(t),this.gridAggregationModel.setAttributes(n),this.allAggregationModel.setInstanceCount(o*i)}}function ct(l){const e={};for(const t in l)e[t]={...Je,...l[t]};return e}function gt(l){l=Array.isArray(l)?l:[l],l.forEach(e=>{for(const t in e)e[t].delete()})}function ut(l,e){const t=Te({vs:tt,fs:nt,modules:[k,ie]},e);return new W(l,{id:"Gird-Aggregation-Model",vertexCount:1,drawMode:0,...t})}function ft(l,e){return new W(l,{id:"All-Aggregation-Model",vs:ot,fs:it,modules:[k],vertexCount:1,drawMode:0,isInstanced:!0,instanceCount:e,attributes:{position:[0,0]}})}function dt(l,e){return new Ie(l,{vs:at,_targetTextureVarying:"meanValues",...e})}const ue=6378e3;function D(l){return Number.isFinite(l)?l:0}function pt(l,e){const t=l.positions.value;let n=1/0,o=-1/0,i=1/0,a=-1/0,r,s;for(let c=0;c<e;c++)s=t[c*3],r=t[c*3+1],n=r<n?r:n,o=r>o?r:o,i=s<i?s:i,a=s>a?s:a;return{xMin:D(i),xMax:D(a),yMin:D(n),yMax:D(o)}}function mt(l,e,t,n){const{width:o,height:i}=n,a=t===O.CARTESIAN?[-o/2,-i/2]:[-180,-90];L.assert(t===O.CARTESIAN||t===O.LNGLAT||t===O.DEFAULT);const{xMin:r,yMin:s}=l;return[-1*(ee(r-a[0],e.xOffset)+a[0]),-1*(ee(s-a[1],e.yOffset)+a[1])]}function ee(l,e){const t=l<0?-1:1;let n=t<0?Math.abs(l)+e:Math.abs(l);return n=Math.floor(n/e)*e,n*t}function fe(l,e,t=!0){if(!t)return{xOffset:e,yOffset:e};const{yMin:n,yMax:o}=l,i=(n+o)/2;return vt(e,i)}function xt(l,e,t,n){const o=fe(l,e,n!==O.CARTESIAN),i=mt(l,o,n,t),{xMin:a,yMin:r,xMax:s,yMax:g}=l,c=s-a+o.xOffset,f=g-r+o.yOffset,d=Math.ceil(c/o.xOffset),u=Math.ceil(f/o.yOffset);return{gridOffset:o,translation:i,width:c,height:f,numCol:d,numRow:u}}function vt(l,e){const t=ht(l),n=yt(e,l);return{yOffset:t,xOffset:n}}function ht(l){return l/ue*(180/Math.PI)}function yt(l,e){return e/ue*(180/Math.PI)/Math.cos(l*Math.PI/180)}function H(l,e){const t=_t(l,e),n=At(t);return{gridHash:t.gridHash,gridOffset:t.gridOffset,data:n}}function _t(l,e){const{data:t=[],cellSize:n}=l,{attributes:o,viewport:i,projectPoints:a,numInstances:r}=e,s=o.positions.value,{size:g}=o.positions.getAccessor(),c=e.boundingBox||Mt(o.positions,r),f=e.posOffset||[180,90],d=e.gridOffset||fe(c,n);if(d.xOffset<=0||d.yOffset<=0)return{gridHash:{},gridOffset:d};const{width:u,height:m}=i,x=Math.ceil(u/d.xOffset),v=Math.ceil(m/d.yOffset),p={},{iterable:h,objectInfo:_}=we(t),A=new Array(3);for(const pe of h){_.index++,A[0]=s[_.index*g],A[1]=s[_.index*g+1],A[2]=g>=3?s[_.index*g+2]:0;const[Y,K]=a?i.project(A):A;if(Number.isFinite(Y)&&Number.isFinite(K)){const C=Math.floor((K+f[1])/d.yOffset),E=Math.floor((Y+f[0])/d.xOffset);if(!a||E>=0&&E<x&&C>=0&&C<v){const T="".concat(C,"-").concat(E);p[T]=p[T]||{count:0,points:[],lonIdx:E,latIdx:C},p[T].count+=1,p[T].points.push({source:pe,index:_.index})}}}return{gridHash:p,gridOffset:d,offsets:[f[0]*-1,f[1]*-1]}}function At({gridHash:l,gridOffset:e,offsets:t}){const n=new Array(Object.keys(l).length);let o=0;for(const i in l){const a=i.split("-"),r=parseInt(a[0],10),s=parseInt(a[1],10),g=o++;n[g]={index:g,position:[t[0]+e.xOffset*s,t[1]+e.yOffset*r],...l[i]}}return n}function Mt(l,e){const t=l.value,{size:n}=l.getAccessor();let o=1/0,i=-1/0,a=1/0,r=-1/0,s,g;for(let c=0;c<e;c++)g=t[c*n],s=t[c*n+1],Number.isFinite(g)&&Number.isFinite(s)&&(o=s<o?s:o,i=s>i?s:i,a=g<a?g:a,r=g>r?g:r);return{xMin:a,xMax:r,yMin:o,yMax:i}}class de extends ae{constructor(...e){super(...e),y(this,"state",void 0)}initializeAggregationLayer({dimensions:e}){const{gl:t}=this.context;super.initializeAggregationLayer(e),this.setState({layerData:{},gpuGridAggregator:new P(t,{id:"".concat(this.id,"-gpu-aggregator")}),cpuGridAggregator:H})}updateState(e){super.updateState(e),this.updateAggregationState(e);const{aggregationDataDirty:t,aggregationWeightsDirty:n,gpuAggregation:o}=this.state;if(this.getNumInstances()<=0)return;let i=!1;(t||o&&n)&&(this._updateAggregation(e),i=!0),!o&&(t||n)&&(this._updateWeightBins(),this._uploadAggregationResults(),i=!0),this.setState({aggregationDirty:i})}finalizeState(e){var t;const{count:n}=this.state.weights;n&&n.aggregationBuffer&&n.aggregationBuffer.delete(),(t=this.state.gpuGridAggregator)===null||t===void 0||t.delete(),super.finalizeState(e)}updateShaders(e){this.state.gpuAggregation&&this.state.gpuGridAggregator.updateShaders(e)}updateAggregationState(e){L.assert(!1)}allocateResources(e,t){if(this.state.numRow!==e||this.state.numCol!==t){const n=t*e*4*4,o=this.context.gl,{weights:i}=this.state;for(const a in i){const r=i[a];r.aggregationBuffer&&r.aggregationBuffer.delete(),r.aggregationBuffer=new G(o,{byteLength:n,accessor:{size:4,type:5126,divisor:1}})}}}updateResults({aggregationData:e,maxMinData:t,maxData:n,minData:o}){const{count:i}=this.state.weights;i&&(i.aggregationData=e,i.maxMinData=t,i.maxData=n,i.minData=o)}_updateAggregation(e){const{cpuGridAggregator:t,gpuGridAggregator:n,gridOffset:o,posOffset:i,translation:a=[0,0],scaling:r=[0,0,0],boundingBox:s,projectPoints:g,gpuAggregation:c,numCol:f,numRow:d}=this.state,{props:u}=e,{viewport:m}=this.context,x=this.getAttributes(),v=this.getNumInstances();if(c){const{weights:p}=this.state;n.run({weights:p,cellSize:[o.xOffset,o.yOffset],numCol:f,numRow:d,translation:a,scaling:r,vertexCount:v,projectPoints:g,attributes:x,moduleSettings:this.getModuleSettings()})}else{const p=t(u,{gridOffset:o,projectPoints:g,attributes:x,viewport:m,posOffset:i,boundingBox:s});this.setState({layerData:p})}}_updateWeightBins(){const{getValue:e}=this.state,t=new Fe(this.state.layerData.data||[],{getValue:e});this.setState({sortedBins:t})}_uploadAggregationResults(){const{numCol:e,numRow:t}=this.state,{data:n}=this.state.layerData,{aggregatedBins:o,minValue:i,maxValue:a,totalCount:r}=this.state.sortedBins,s=4,g=e*t*s,c=new Float32Array(g).fill(0);for(const m of o){const{lonIdx:x,latIdx:v}=n[m.i],{value:p,counts:h}=m,_=(x+v*e)*s;c[_]=p,c[_+s-1]=h}const f=new Float32Array([a,0,0,i]),d=new Float32Array([a,0,0,r]),u=new Float32Array([i,0,0,r]);this.updateResults({aggregationData:c,maxMinData:f,maxData:d,minData:u})}}y(de,"layerName","GridAggregationLayer");function te(){}const bt={colorDomain:null,colorRange:V,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",min:0,max:100,value:0},upperPercentile:{type:"number",min:0,max:100,value:100},colorScaleType:"quantize",onSetColorDomain:te,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",min:0,max:100,value:0},elevationUpperPercentile:{type:"number",min:0,max:100,value:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:te,gridAggregator:H,cellSize:{type:"number",min:0,max:1e3,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:l=>l.position},extruded:!1,material:!0,_filterData:{type:"function",value:null,optional:!0}};class R extends ae{initializeState(){const e=new Ue({getAggregator:n=>n.gridAggregator,getCellSize:n=>n.cellSize});this.state={cpuAggregator:e,aggregatorState:e.state},this.getAttributeManager().add({positions:{size:3,type:5130,accessor:"getPosition"}})}updateState(e){super.updateState(e),this.setState({aggregatorState:this.state.cpuAggregator.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes(),numInstances:this.getNumInstances()})})}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:t,cellSize:n,coverage:o,material:i,transitions:a}=this.props,{cpuAggregator:r}=this.state,s=this.getSubLayerClass("grid-cell",X),g=this._getSublayerUpdateTriggers();return new s({cellSize:n,coverage:o,material:i,elevationScale:e,extruded:t,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:a&&{getFillColor:a.getColorValue||a.getColorWeight,getElevation:a.getElevationValue||a.getElevationWeight}},this.getSubLayerProps({id:"grid-cell",updateTriggers:g}),{data:r.state.layerData.data})}}y(R,"layerName","CPUGridLayer");y(R,"defaultProps",bt);const St=`#version 300 es
#define SHADER_NAME gpu-grid-cell-layer-vertex-shader
#define RANGE_COUNT 6

in vec3 positions;
in vec3 normals;

in vec4 colors;
in vec4 elevations;
in vec3 instancePickingColors;
uniform vec2 offset;
uniform bool extruded;
uniform float cellSize;
uniform float coverage;
uniform float opacity;
uniform float elevationScale;

uniform ivec2 gridSize;
uniform vec2 gridOrigin;
uniform vec2 gridOriginLow;
uniform vec2 gridOffset;
uniform vec2 gridOffsetLow;
uniform vec4 colorRange[RANGE_COUNT];
uniform vec2 elevationRange;
uniform vec2 colorDomain;
uniform bool colorDomainValid;
uniform vec2 elevationDomain;
uniform bool elevationDomainValid;

layout(std140) uniform;
uniform ColorData
{
  vec4 maxMinCount;
} colorData;
uniform ElevationData
{
  vec4 maxMinCount;
} elevationData;

#define EPSILON 0.00001
out vec4 vColor;

vec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {
  vec4 outColor = vec4(0., 0., 0., 0.);
  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {
    float domainRange = domain.y - domain.x;
    if (domainRange <= 0.) {
      outColor = colorRange[0];
    } else {
      float rangeCount = float(RANGE_COUNT);
      float rangeStep = domainRange / rangeCount;
      float idx = floor((value - domain.x) / rangeStep);
      idx = clamp(idx, 0., rangeCount - 1.);
      int intIdx = int(idx);
      outColor = colorRange[intIdx];
    }
  }
  return outColor;
}

float linearScale(vec2 domain, vec2 range, float value) {
  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {
    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;
  }
  return -1.;
}

void main(void) {
  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);
  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);

  float elevation = 0.0;

  if (extruded) {
    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);
    elevation = linearScale(elvDomain, elevationRange, elevations.r);
    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;
  }
  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);
  float dotRadius = cellSize / 2. * coverage * shouldRender;

  int yIndex = (gl_InstanceID / gridSize[0]);
  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);

  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));
  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));
  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));
  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));

  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);
  vec3 centroidPosition64Low = vec3(instancePositionXFP64[1], instancePositionYFP64[1], 0.0);
  geometry.worldPosition = centroidPosition;
  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);
  picking_setPickingColor(instancePickingColors);

  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);

  vec3 normals_commonspace = project_normal(normals);

   if (extruded) {
    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, geometry.position.xyz, normals_commonspace);
    vColor = vec4(lightColor, color.a * opacity) / 255.;
  } else {
    vColor = vec4(color.rgb, color.a * opacity) / 255.;
  }
}
`,Ot=`#version 300 es
#define SHADER_NAME gpu-grid-cell-layer-fragment-shader

precision highp float;

in vec4 vColor;

out vec4 fragColor;

void main(void) {
  fragColor = vColor;
  fragColor = picking_filterColor(fragColor);
}
`,B=0,z=1,Pt={colorDomain:null,colorRange:V,elevationDomain:null,elevationRange:[0,1e3],elevationScale:{type:"number",min:0,value:1},gridSize:{type:"array",value:[1,1]},gridOrigin:{type:"array",value:[0,0]},gridOffset:{type:"array",value:[0,0]},cellSize:{type:"number",min:0,max:1e3,value:1e3},offset:{type:"array",value:[1,1]},coverage:{type:"number",min:0,max:1,value:1},extruded:!0,material:!0};class j extends Ne{getShaders(){return super.getShaders({vs:St,fs:Ot,modules:[ie,Be,De,k]})}initializeState({gl:e}){this.getAttributeManager().addInstanced({colors:{size:4,noAlloc:!0},elevations:{size:4,noAlloc:!0}});const n=this._getModel(e);this._setupUniformBuffer(n),this.setState({model:n})}_getModel(e){return new W(e,{...this.getShaders(),id:this.props.id,geometry:new le,isInstanced:!0})}draw({uniforms:e}){const{cellSize:t,offset:n,extruded:o,elevationScale:i,coverage:a,gridSize:r,gridOrigin:s,gridOffset:g,elevationRange:c,colorMaxMinBuffer:f,elevationMaxMinBuffer:d}=this.props,u=[w(s[0]),w(s[1])],m=[w(g[0]),w(g[1])],x=this.getDomainUniforms(),v=re(this.props.colorRange);this.bindUniformBuffers(f,d),this.state.model.setUniforms(e).setUniforms(x).setUniforms({cellSize:t,offset:n,extruded:o,elevationScale:i,coverage:a,gridSize:r,gridOrigin:s,gridOriginLow:u,gridOffset:g,gridOffsetLow:m,colorRange:v,elevationRange:c}).draw(),this.unbindUniformBuffers(f,d)}bindUniformBuffers(e,t){e.bind({target:35345,index:B}),t.bind({target:35345,index:z})}unbindUniformBuffers(e,t){e.unbind({target:35345,index:B}),t.unbind({target:35345,index:z})}getDomainUniforms(){const{colorDomain:e,elevationDomain:t}=this.props,n={};return e!==null?(n.colorDomainValid=!0,n.colorDomain=e):n.colorDomainValid=!1,t!==null?(n.elevationDomainValid=!0,n.elevationDomain=t):n.elevationDomainValid=!1,n}_setupUniformBuffer(e){const t=this.context.gl,n=e.program.handle,o=t.getUniformBlockIndex(n,"ColorData"),i=t.getUniformBlockIndex(n,"ElevationData");t.uniformBlockBinding(n,o,B),t.uniformBlockBinding(n,i,z)}}y(j,"layerName","GPUGridCellLayer");y(j,"defaultProps",Pt);const Ct={colorDomain:null,colorRange:V,getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",elevationDomain:null,elevationRange:[0,1e3],getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationScale:{type:"number",min:0,value:1},cellSize:{type:"number",min:1,max:1e3,value:1e3},coverage:{type:"number",min:0,max:1,value:1},getPosition:{type:"accessor",value:l=>l.position},extruded:!1,material:!0},Et={data:{props:["cellSize","colorAggregation","elevationAggregation"]}},ne="positions";class F extends de{initializeState({gl:e}){const t=P.isSupported(e);t||L.error("GPUGridLayer is not supported on this browser, use GridLayer instead")(),super.initializeAggregationLayer({dimensions:Et}),this.setState({gpuAggregation:!0,projectPoints:!1,isSupported:t,weights:{color:{needMin:!0,needMax:!0,combineMaxMin:!0,maxMinBuffer:new G(e,{byteLength:4*4,accessor:{size:4,type:5126,divisor:1}})},elevation:{needMin:!0,needMax:!0,combineMaxMin:!0,maxMinBuffer:new G(e,{byteLength:4*4,accessor:{size:4,type:5126,divisor:1}})}},positionAttributeName:"positions"}),this.getAttributeManager().add({[ne]:{size:3,accessor:"getPosition",type:5130,fp64:this.use64bitPositions()},color:{size:3,accessor:"getColorWeight"},elevation:{size:3,accessor:"getElevationWeight"}})}updateState(e){if(this.state.isSupported===!1)return;super.updateState(e);const{aggregationDirty:t}=this.state;t&&this.setState({gridHash:null})}getHashKeyForIndex(e){const{numRow:t,numCol:n,boundingBox:o,gridOffset:i}=this.state,a=[n,t],r=[o.xMin,o.yMin],s=[i.xOffset,i.yOffset],g=Math.floor(e/a[0]),c=e-g*a[0],f=Math.floor((g*s[1]+r[1]+90+s[1]/2)/s[1]),d=Math.floor((c*s[0]+r[0]+180+s[0]/2)/s[0]);return"".concat(f,"-").concat(d)}getPositionForIndex(e){const{numRow:t,numCol:n,boundingBox:o,gridOffset:i}=this.state,a=[n,t],r=[o.xMin,o.yMin],s=[i.xOffset,i.yOffset],g=Math.floor(e/a[0]),c=e-g*a[0],f=g*s[1]+r[1];return[c*s[0]+r[0],f]}getPickingInfo({info:e,mode:t}){const{index:n}=e;let o=null;if(n>=0){const{gpuGridAggregator:i}=this.state,a=this.getPositionForIndex(n),r=P.getAggregationData({pixelIndex:n,...i.getData("color")}),s=P.getAggregationData({pixelIndex:n,...i.getData("elevation")});if(o={colorValue:r.cellWeight,elevationValue:s.cellWeight,count:r.cellCount||s.cellCount,position:a,totalCount:r.totalCount||s.totalCount},t!=="hover"){const{props:g}=this;let{gridHash:c}=this.state;if(!c){const{gridOffset:u,translation:m,boundingBox:x}=this.state,{viewport:v}=this.context,p=this.getAttributes();c=H(g,{gridOffset:u,attributes:p,viewport:v,translation:m,boundingBox:x}).gridHash,this.setState({gridHash:c})}const f=this.getHashKeyForIndex(n),d=c[f];Object.assign(o,d)}}return e.picked=!!o,e.object=o,e}renderLayers(){if(!this.state.isSupported)return null;const{elevationScale:e,extruded:t,cellSize:n,coverage:o,material:i,elevationRange:a,colorDomain:r,elevationDomain:s}=this.props,{weights:g,numRow:c,numCol:f,gridOrigin:d,gridOffset:u}=this.state,{color:m,elevation:x}=g,v=re(this.props.colorRange),p=this.getSubLayerClass("gpu-grid-cell",j);return new p({gridSize:[f,c],gridOrigin:d,gridOffset:[u.xOffset,u.yOffset],colorRange:v,elevationRange:a,colorDomain:r,elevationDomain:s,cellSize:n,coverage:o,material:i,elevationScale:e,extruded:t},this.getSubLayerProps({id:"gpu-grid-cell"}),{data:{attributes:{colors:m.aggregationBuffer,elevations:x.aggregationBuffer}},colorMaxMinBuffer:m.maxMinBuffer,elevationMaxMinBuffer:x.maxMinBuffer,numInstances:f*c})}finalizeState(e){const{color:t,elevation:n}=this.state.weights;[t,n].forEach(o=>{const{aggregationBuffer:i,maxMinBuffer:a}=o;a.delete(),i==null||i.delete()}),super.finalizeState(e)}updateAggregationState(e){const{props:t,oldProps:n}=e,{cellSize:o,coordinateSystem:i}=t,{viewport:a}=this.context,r=n.cellSize!==o,{dimensions:s}=this.state,g=this.isAttributeChanged(ne),c=g||this.isAttributeChanged();let{boundingBox:f}=this.state;if(g&&(f=pt(this.getAttributes(),this.getNumInstances()),this.setState({boundingBox:f})),g||r){const{gridOffset:u,translation:m,width:x,height:v,numCol:p,numRow:h}=xt(f,o,a,i);this.allocateResources(h,p),this.setState({gridOffset:u,translation:m,gridOrigin:[-1*m[0],-1*m[1]],width:x,height:v,numCol:p,numRow:h})}const d=c||this.isAggregationDirty(e,{dimension:s.data,compareAll:!0});d&&this._updateAccessors(e),this.setState({aggregationDataDirty:d})}_updateAccessors(e){const{colorAggregation:t,elevationAggregation:n}=e.props,{color:o,elevation:i}=this.state.weights;o.operation=M[t],i.operation=M[n]}}y(F,"layerName","GPUGridLayer");y(F,"defaultProps",Ct);const Tt={...F.defaultProps,...R.defaultProps,gpuAggregation:!1};class q extends ze{constructor(...e){super(...e),y(this,"state",void 0)}initializeState(){this.state={useGPUAggregation:!0}}updateState({props:e}){this.setState({useGPUAggregation:this.canUseGPUAggregation(e)})}renderLayers(){const{data:e,updateTriggers:t}=this.props,n=this.state.useGPUAggregation?"GPU":"CPU",o=this.state.useGPUAggregation?this.getSubLayerClass("GPU",F):this.getSubLayerClass("CPU",R);return new o(this.props,this.getSubLayerProps({id:n,updateTriggers:t}),{data:e})}canUseGPUAggregation(e){const{gpuAggregation:t,lowerPercentile:n,upperPercentile:o,getColorValue:i,getElevationValue:a,colorScaleType:r}=e;return!(!t||!P.isSupported(this.context.gl)||n!==0||o!==100||i!==null||a!==null||r==="quantile"||r==="ordinal")}}y(q,"layerName","GridLayer");y(q,"defaultProps",Tt);const It=ve({__name:"grid-layer",setup(l,{expose:e}){e();const o={mapOptions:{style:xe.DARK,center:[-122.441107,37.755579],zoom:11.4,minZoom:8,pitch:50,antialias:!0},handleMapLoaded:i=>{const a=new Le({id:"grid-layer",type:q,data:he("/data/sf-bike-parking.json"),pickable:!0,extruded:!0,cellSize:200,elevationScale:4,getPosition:r=>r.COORDINATES,onHover:r=>{const s=document.getElementById("grid-layer-tooltip");r.object?(s.innerHTML=`${r.object.position.join(", ")}
Count: ${r.object.count}`,s.style.display="block",s.style.left=r.x+"px",s.style.top=r.y+"px"):s.style.display="none"}});i.addLayer(a)},BaseMap:me};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function wt(l,e,t,n,o,i){return _e(),Ae(n.BaseMap,{"map-clickable":!1,"map-options":n.mapOptions,onLoad:n.handleMapLoaded},{default:Me(()=>e[0]||(e[0]=[be("div",{id:"grid-layer-tooltip",class:"tooltip"},null,-1)])),_:1})}const Ft=ye(It,[["render",wt],["__file","grid-layer.vue"]]);export{Ft as default};
