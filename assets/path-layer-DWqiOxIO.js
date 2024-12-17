import{b as z,S as O}from"./base-map-bpxUlRov.js";import{g as M,l as I,_ as G,o as B,h as F,d as R,e as N}from"./app-D53rVwic.js";import{_ as p,q as j,s as k,t as D,e as V,B as J,L as U,p as H,a as Z,U as K,M as W,G as Y,b as X}from"./mapbox-layer-B2lDuD2j.js";class q{constructor(t){p(this,"opts",void 0),p(this,"typedArrayManager",void 0),p(this,"indexStarts",[0]),p(this,"vertexStarts",[0]),p(this,"vertexCount",0),p(this,"instanceCount",0),p(this,"attributes",void 0),p(this,"_attributeDefs",void 0),p(this,"data",void 0),p(this,"getGeometry",void 0),p(this,"geometryBuffer",void 0),p(this,"buffers",void 0),p(this,"positionSize",void 0),p(this,"normalize",void 0);const{attributes:e={}}=t;this.typedArrayManager=j,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);const{data:e,buffers:n={},getGeometry:i,geometryBuffer:o,positionFormat:r,dataChanged:a,normalize:c=!0}=this.opts;if(this.data=e,this.getGeometry=i,this.positionSize=o&&o.size||(r==="XY"?2:3),this.buffers=n,this.normalize=c,o&&(k(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(o),c||(n.positions=o)),this.geometryBuffer=n.positions,Array.isArray(a))for(const d of a)this._rebuildGeometry(d);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}getGeometryFromBuffer(t){const e=t.value||t;return ArrayBuffer.isView(e)?D(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){const{attributes:n,buffers:i,_attributeDefs:o,typedArrayManager:r}=this;for(const a in o)if(a in i)r.release(n[a]),n[a]=null;else{const c=o[a];c.copy=e,n[a]=r.allocate(n[a],t,c)}}_forEachGeometry(t,e,n){const{data:i,getGeometry:o}=this,{iterable:r,objectInfo:a}=V(i,e,n);for(const c of r){a.index++;const d=o?o(c,a):null;t(d,a.index)}}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:n,instanceCount:i}=this;const{data:o,geometryBuffer:r}=this,{startRow:a=0,endRow:c=1/0}=t||{},d={};if(t||(e=[0],n=[0]),this.normalize||!r)this._forEachGeometry((f,l)=>{const u=f&&this.normalizeGeometry(f);d[l]=u,n[l+1]=n[l]+(u?this.getGeometrySize(u):0)},a,c),i=n[n.length-1];else if(n=o.startIndices,i=n[o.length]||0,ArrayBuffer.isView(r))i=i||r.length/this.positionSize;else if(r instanceof J){const f=r.accessor.stride||this.positionSize*4;i=i||r.byteLength/f}else if(r.buffer){const f=r.stride||this.positionSize*4;i=i||r.buffer.byteLength/f}else if(r.value){const f=r.value,l=r.stride/f.BYTES_PER_ELEMENT||this.positionSize;i=i||f.length/l}this._allocate(i,!!t),this.indexStarts=e,this.vertexStarts=n,this.instanceCount=i;const h={};this._forEachGeometry((f,l)=>{const u=d[l]||f;h.vertexStart=n[l],h.indexStart=e[l];const g=l<n.length-1?n[l+1]:i;h.geometrySize=g-n[l],h.geometryIndex=l,this.updateGeometryAttributes(u,h)},a,c),this.vertexCount=e[e.length-1]}}function m(s,t){const e=t.length,n=s.length;if(n>0){let i=!0;for(let o=0;o<e;o++)if(s[n-e+o]!==t[o]){i=!1;break}if(i)return!1}for(let i=0;i<e;i++)s[n+i]=t[i];return!0}function b(s,t){const e=t.length;for(let n=0;n<e;n++)s[n]=t[n]}function w(s,t,e,n,i=[]){const o=n+t*e;for(let r=0;r<e;r++)i[r]=s[o+r];return i}function E(s,t,e,n,i=[]){let o,r;if(e&8)o=(n[3]-s[1])/(t[1]-s[1]),r=3;else if(e&4)o=(n[1]-s[1])/(t[1]-s[1]),r=1;else if(e&2)o=(n[2]-s[0])/(t[0]-s[0]),r=2;else if(e&1)o=(n[0]-s[0])/(t[0]-s[0]),r=0;else return null;for(let a=0;a<s.length;a++)i[a]=(r&1)===a?n[r]:o*(t[a]-s[a])+s[a];return i}function S(s,t){let e=0;return s[0]<t[0]?e|=1:s[0]>t[2]&&(e|=2),s[1]<t[1]?e|=4:s[1]>t[3]&&(e|=8),e}function C(s,t){const{size:e=2,broken:n=!1,gridResolution:i=10,gridOffset:o=[0,0],startIndex:r=0,endIndex:a=s.length}=t||{},c=(a-r)/e;let d=[];const h=[d],f=w(s,0,e,r);let l,u;const g=Q(f,i,o,[]),y=[];m(d,f);for(let v=1;v<c;v++){for(l=w(s,v,e,r,l),u=S(l,g);u;){E(f,l,u,g,y);const P=S(y,g);P&&(E(f,y,P,g,y),u=P),m(d,y),b(f,y),$(g,i,u),n&&d.length>e&&(d=[],h.push(d),m(d,f)),u=S(l,g)}m(d,l),b(f,l)}return n?h:h[0]}function Q(s,t,e,n){const i=Math.floor((s[0]-e[0])/t)*t+e[0],o=Math.floor((s[1]-e[1])/t)*t+e[1];return n[0]=i,n[1]=o,n[2]=i+t,n[3]=o+t,n}function $(s,t,e){e&8?(s[1]+=t,s[3]+=t):e&4?(s[1]-=t,s[3]-=t):e&2?(s[0]+=t,s[2]+=t):e&1&&(s[0]-=t,s[2]-=t)}function tt(s,t){const{size:e=2,startIndex:n=0,endIndex:i=s.length,normalize:o=!0}=t||{},r=s.slice(n,i);et(r,e,0,i-n);const a=C(r,{size:e,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(o)for(const c of a)nt(c,e);return a}function et(s,t,e,n){let i=s[0],o;for(let r=e;r<n;r+=t){o=s[r];const a=o-i;(a>180||a<-180)&&(o-=Math.round(a/360)*360),s[r]=i=o}}function nt(s,t){let e;const n=s.length/t;for(let o=0;o<n&&(e=s[o*t],(e+180)%360===0);o++);const i=-Math.round(e/360)*360;if(i!==0)for(let o=0;o<n;o++)s[o*t]+=i}function it(s,t,e,n){let i;if(Array.isArray(s[0])){const o=s.length*t;i=new Array(o);for(let r=0;r<s.length;r++)for(let a=0;a<t;a++)i[r*t+a]=s[r][a]||0}else i=s;return e?C(i,{size:t,gridResolution:e}):n?tt(i,{size:t}):i}const ot=1,st=2,_=4;class rt extends q{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?it(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(A(t)){let n=0;for(const i of t)n+=this.getGeometrySize(i);return n}const e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(e.geometrySize!==0)if(t&&A(t))for(const n of t){const i=this.getGeometrySize(n);e.geometrySize=i,this.updateGeometryAttributes(n,e),e.vertexStart+=i}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){const n=this.attributes.segmentTypes,i=t?this.isClosed(t):!1,{vertexStart:o,geometrySize:r}=e;n.fill(0,o,o+r),i?(n[o]=_,n[o+r-2]=_):(n[o]+=ot,n[o+r-2]+=st),n[o+r-1]=_}_updatePositions(t,e){const{positions:n}=this.attributes;if(!n||!t)return;const{vertexStart:i,geometrySize:o}=e,r=new Array(3);for(let a=i,c=0;c<o;a++,c++)this.getPointOnPath(t,c,r),n[a*3]=r[0],n[a*3+1]=r[1],n[a*3+2]=r[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,n=[]){const{positionSize:i}=this;e*i>=t.length&&(e+=1-t.length/i);const o=e*i;return n[0]=t[o],n[1]=t[o+1],n[2]=i===3&&t[o+2]||0,n}isClosed(t){if(!this.normalize)return!!this.opts.loop;const{positionSize:e}=this,n=t.length-e;return t[0]===t[n]&&t[1]===t[n+1]&&(e===2||t[2]===t[n+2])}}function A(s){return Array.isArray(s[0])}const at=`#define SHADER_NAME path-layer-vertex-shader

attribute vec2 positions;

attribute float instanceTypes;
attribute vec3 instanceStartPositions;
attribute vec3 instanceEndPositions;
attribute vec3 instanceLeftPositions;
attribute vec3 instanceRightPositions;
attribute vec3 instanceLeftPositions64Low;
attribute vec3 instanceStartPositions64Low;
attribute vec3 instanceEndPositions64Low;
attribute vec3 instanceRightPositions64Low;
attribute float instanceStrokeWidths;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;

uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform float jointType;
uniform float capType;
uniform float miterLimit;
uniform bool billboard;
uniform int widthUnits;

uniform float opacity;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
varying vec2 vPathPosition;
varying float vPathLength;
varying float vJointType;

const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);

float flipIfTrue(bool flag) {
  return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
  vec2 width
) {
  bool isEnd = positions.x > 0.0;
  float sideOfPath = positions.y;
  float isJoint = float(sideOfPath == 0.0);

  vec3 deltaA3 = (currPoint - prevPoint);
  vec3 deltaB3 = (nextPoint - currPoint);

  mat3 rotationMatrix;
  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);
  if (needsRotation) {
    deltaA3 = deltaA3 * rotationMatrix;
    deltaB3 = deltaB3 * rotationMatrix;
  }
  vec2 deltaA = deltaA3.xy / width;
  vec2 deltaB = deltaB3.xy / width;

  float lenA = length(deltaA);
  float lenB = length(deltaB);

  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);

  vec2 perpA = vec2(-dirA.y, dirA.x);
  vec2 perpB = vec2(-dirB.y, dirB.x);
  vec2 tangent = dirA + dirB;
  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
  vec2 miterVec = vec2(-tangent.y, tangent.x);
  vec2 dir = isEnd ? dirA : dirB;
  vec2 perp = isEnd ? perpA : perpB;
  float L = isEnd ? lenA : lenB;
  float sinHalfA = abs(dot(miterVec, perp));
  float cosHalfA = abs(dot(dirA, miterVec));
  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  float cornerPosition = sideOfPath * turnDirection;

  float miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
    * (sideOfPath + isJoint * turnDirection);
  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  bool isCap = isStartCap || isEndCap;
  if (isCap) {
    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);
    vJointType = capType;
  } else {
    vJointType = jointType;
  }
  vPathLength = L;
  vCornerOffset = offsetVec;
  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
  vMiterLength = isCap ? isJoint : vMiterLength;

  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
  vPathPosition = vec2(
    dot(offsetFromStartOfPath, perp),
    dot(offsetFromStartOfPath, dir)
  );
  geometry.uv = vPathPosition;

  float isValid = step(instanceTypes, 3.5);
  vec3 offset = vec3(offsetVec * width * isValid, 0.0);

  if (needsRotation) {
    offset = rotationMatrix * offset;
  }
  return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
  if (position.w < EPSILON) {
    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    position = refPosition + (position - refPosition) * r;
  }
}

void main() {
  geometry.pickingColor = instancePickingColors;

  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);

  float isEnd = positions.x;

  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);

  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);

  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);

  geometry.worldPosition = currPosition;
  vec2 widthPixels = vec2(clamp(
    project_size_to_pixel(instanceStrokeWidths * widthScale, widthUnits),
    widthMinPixels, widthMaxPixels) / 2.0);
  vec3 width;

  if (billboard) {
    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);

    clipLine(prevPositionScreen, currPositionScreen);
    clipLine(nextPositionScreen, currPositionScreen);
    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

    width = vec3(widthPixels, 0.0);
    DECKGL_FILTER_SIZE(width, geometry);

    vec3 offset = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(width.xy)
    );

    DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
    gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
  } else {
    prevPosition = project_position(prevPosition, prevPosition64Low);
    currPosition = project_position(currPosition, currPosition64Low);
    nextPosition = project_position(nextPosition, nextPosition64Low);

    width = vec3(project_pixel_size(widthPixels), 0.0);
    DECKGL_FILTER_SIZE(width, geometry);

    vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
    geometry.position = vec4(currPosition + offset, 1.0);
    gl_Position = project_common_position_to_clipspace(geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ct=`#define SHADER_NAME path-layer-fragment-shader

precision highp float;

uniform float miterLimit;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
varying vec2 vPathPosition;
varying float vPathLength;
varying float vJointType;

void main(void) {
  geometry.uv = vPathPosition;

  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
      discard;
    }
    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {
      discard;
    }
  }
  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,T=[0,0,0,255],lt={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:s=>s.path},getColor:{type:"accessor",value:T},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},x={enter:(s,t)=>t.length?t.subarray(t.length-s.length):s};class L extends U{constructor(...t){super(...t),p(this,"state",void 0)}getShaders(){return super.getShaders({vs:at,fs:ct,modules:[H,Z]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:5130,fp64:this.use64bitPositions(),transition:x,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:5121,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:x,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,accessor:"getColor",transition:x,defaultValue:T},instancePickingColors:{size:3,type:5121,accessor:(n,{index:i,target:o})=>this.encodePickingColor(n&&n.__source?n.__source.index:i,o)}}),this.setState({pathTesselator:new rt({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);const{props:e,changeFlags:n}=t,i=this.getAttributeManager();if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)){const{pathTesselator:a}=this.state,c=e.data.attributes||{};a.updateGeometry({data:e.data,geometryBuffer:c.getPath,buffers:c,normalize:!e._pathType,loop:e._pathType==="loop",getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:n.dataChanged}),this.setState({numInstances:a.instanceCount,startIndices:a.vertexStarts}),n.dataChanged||i.invalidateAll()}if(n.extensionsChanged){var r;const{gl:a}=this.context;(r=this.state.model)===null||r===void 0||r.delete(),this.state.model=this._getModel(a),i.invalidateAll()}}getPickingInfo(t){const e=super.getPickingInfo(t),{index:n}=e,{data:i}=this.props;return i[0]&&i[0].__source&&(e.object=i.find(o=>o.__source.index===n)),e}disablePickingIndex(t){const{data:e}=this.props;if(e[0]&&e[0].__source)for(let n=0;n<e.length;n++)e[n].__source.index===t&&this._disablePickingIndex(n);else super.disablePickingIndex(t)}draw({uniforms:t}){const{jointRounded:e,capRounded:n,billboard:i,miterLimit:o,widthUnits:r,widthScale:a,widthMinPixels:c,widthMaxPixels:d}=this.props;this.state.model.setUniforms(t).setUniforms({jointType:Number(e),capType:Number(n),billboard:i,widthUnits:K[r],widthScale:a,miterLimit:o,widthMinPixels:c,widthMaxPixels:d}).draw()}_getModel(t){const e=[0,1,2,1,4,2,1,3,4,3,5,4],n=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new W(t,{...this.getShaders(),id:this.props.id,geometry:new Y({drawMode:4,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(n),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}p(L,"defaultProps",lt);p(L,"layerName","PathLayer");const ft=M({__name:"path-layer",setup(s,{expose:t}){t();const i={mapOptions:{style:O.GRAY,center:[-122.275307,37.802267],zoom:9,minZoom:8,pitch:45,bearing:30},handleMapLoaded:o=>{const r=new X({id:"path-layer",type:L,data:I("/data/bart-lines.json"),pickable:!0,jointRounded:!0,capRounded:!0,billboard:!0,widthScale:10,widthMinPixels:2,getPath:a=>a.path,getColor:a=>JSON.parse(a.color),getWidth:()=>5,onHover:a=>{const c=document.getElementById("path-layer-tooltip");a.object?(c.innerHTML=`名称：${a.object.name}`,c.style.display="block",c.style.left=a.x+"px",c.style.top=a.y+"px"):c.style.display="none"}});o.addLayer(r)},BaseMap:z};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function dt(s,t,e,n,i,o){return B(),F(n.BaseMap,{"map-clickable":!1,"map-options":n.mapOptions,onLoad:n.handleMapLoaded},{default:R(()=>t[0]||(t[0]=[N("div",{id:"path-layer-tooltip",class:"tooltip"},null,-1)])),_:1})}const gt=G(ft,[["render",dt],["__file","path-layer.vue"]]);export{gt as default};
