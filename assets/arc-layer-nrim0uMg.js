import{b as g,S as d}from"./base-map-B4JV9eLi.js";import{g as p,l as m,_ as x,o as f,h as v}from"./app-COZMOXYE.js";import{L as _,_ as l,p as P,a as h,U as S,M as y,G as R,b as w}from"./mapbox-layer-CgvmFtE2.js";const L=`#define SHADER_NAME arc-layer-vertex-shader

attribute vec3 positions;
attribute vec4 instanceSourceColors;
attribute vec4 instanceTargetColors;
attribute vec3 instanceSourcePositions;
attribute vec3 instanceSourcePositions64Low;
attribute vec3 instanceTargetPositions;
attribute vec3 instanceTargetPositions64Low;
attribute vec3 instancePickingColors;
attribute float instanceWidths;
attribute float instanceHeights;
attribute float instanceTilts;

uniform bool greatCircle;
uniform bool useShortestPath;
uniform float numSegments;
uniform float opacity;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform int widthUnits;

varying vec4 vColor;
varying vec2 uv;
varying float isValid;

float paraboloid(float distance, float sourceZ, float targetZ, float ratio) {

  float deltaZ = targetZ - sourceZ;
  float dh = distance * instanceHeights;
  if (dh == 0.0) {
    return sourceZ + deltaZ * ratio;
  }
  float unitZ = deltaZ / dh;
  float p2 = unitZ * unitZ + 1.0;
  float dir = step(deltaZ, 0.0);
  float z0 = mix(sourceZ, targetZ, dir);
  float r = mix(ratio, 1.0 - ratio, dir);
  return sqrt(r * (p2 - r)) * dh + z0;
}
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  return dir_screenspace * offset_direction * width / 2.0;
}

float getSegmentRatio(float index) {
  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));
}

vec3 interpolateFlat(vec3 source, vec3 target, float segmentRatio) {
  float distance = length(source.xy - target.xy);
  float z = paraboloid(distance, source.z, target.z, segmentRatio);

  float tiltAngle = radians(instanceTilts);
  vec2 tiltDirection = normalize(target.xy - source.xy);
  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * z * sin(tiltAngle);

  return vec3(
    mix(source.xy, target.xy, segmentRatio) + tilt,
    z * cos(tiltAngle)
  );
}
float getAngularDist (vec2 source, vec2 target) {
  vec2 sourceRadians = radians(source);
  vec2 targetRadians = radians(target);
  vec2 sin_half_delta = sin((sourceRadians - targetRadians) / 2.0);
  vec2 shd_sq = sin_half_delta * sin_half_delta;

  float a = shd_sq.y + cos(sourceRadians.y) * cos(targetRadians.y) * shd_sq.x;
  return 2.0 * asin(sqrt(a));
}

vec3 interpolateGreatCircle(vec3 source, vec3 target, vec3 source3D, vec3 target3D, float angularDist, float t) {
  vec2 lngLat;
  if(abs(angularDist - PI) < 0.001) {
    lngLat = (1.0 - t) * source.xy + t * target.xy;
  } else {
    float a = sin((1.0 - t) * angularDist);
    float b = sin(t * angularDist);
    vec3 p = source3D.yxz * a + target3D.yxz * b;
    lngLat = degrees(vec2(atan(p.y, -p.x), atan(p.z, length(p.xy))));
  }

  float z = paraboloid(angularDist * EARTH_RADIUS, source.z, target.z, t);

  return vec3(lngLat, z);
}

void main(void) {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;

  float segmentIndex = positions.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  float prevSegmentRatio = getSegmentRatio(max(0.0, segmentIndex - 1.0));
  float nextSegmentRatio = getSegmentRatio(min(numSegments - 1.0, segmentIndex + 1.0));
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
  isValid = 1.0;

  uv = vec2(segmentRatio, positions.y);
  geometry.uv = uv;
  geometry.pickingColor = instancePickingColors;

  vec4 curr;
  vec4 next;
  vec3 source;
  vec3 target;

  if ((greatCircle || project_uProjectionMode == PROJECTION_MODE_GLOBE) && project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
    source = project_globe_(vec3(instanceSourcePositions.xy, 0.0));
    target = project_globe_(vec3(instanceTargetPositions.xy, 0.0));
    float angularDist = getAngularDist(instanceSourcePositions.xy, instanceTargetPositions.xy);

    vec3 prevPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, prevSegmentRatio);
    vec3 currPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, segmentRatio);
    vec3 nextPos = interpolateGreatCircle(instanceSourcePositions, instanceTargetPositions, source, target, angularDist, nextSegmentRatio);

    if (abs(currPos.x - prevPos.x) > 180.0) {
      indexDir = -1.0;
      isValid = 0.0;
    } else if (abs(currPos.x - nextPos.x) > 180.0) {
      indexDir = 1.0;
      isValid = 0.0;
    }
    nextPos = indexDir < 0.0 ? prevPos : nextPos;
    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;

    if (isValid == 0.0) {
      nextPos.x += nextPos.x > 0.0 ? -360.0 : 360.0;
      float t = ((currPos.x > 0.0 ? 180.0 : -180.0) - currPos.x) / (nextPos.x - currPos.x);
      currPos = mix(currPos, nextPos, t);
      segmentRatio = mix(segmentRatio, nextSegmentRatio, t);
    }

    vec3 currPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, segmentRatio);
    vec3 nextPos64Low = mix(instanceSourcePositions64Low, instanceTargetPositions64Low, nextSegmentRatio);
  
    curr = project_position_to_clipspace(currPos, currPos64Low, vec3(0.0), geometry.position);
    next = project_position_to_clipspace(nextPos, nextPos64Low, vec3(0.0));
  
  } else {
    vec3 source_world = instanceSourcePositions;
    vec3 target_world = instanceTargetPositions;
    if (useShortestPath) {
      source_world.x = mod(source_world.x + 180., 360.0) - 180.;
      target_world.x = mod(target_world.x + 180., 360.0) - 180.;

      float deltaLng = target_world.x - source_world.x;
      if (deltaLng > 180.) target_world.x -= 360.;
      if (deltaLng < -180.) source_world.x -= 360.;
    }
    source = project_position(source_world, instanceSourcePositions64Low);
    target = project_position(target_world, instanceTargetPositions64Low);
    float antiMeridianX = 0.0;

    if (useShortestPath) {
      if (project_uProjectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
        antiMeridianX = -(project_uCoordinateOrigin.x + 180.) / 360. * TILE_SIZE;
      }
      float thresholdRatio = (antiMeridianX - source.x) / (target.x - source.x);

      if (prevSegmentRatio <= thresholdRatio && nextSegmentRatio > thresholdRatio) {
        isValid = 0.0;
        indexDir = sign(segmentRatio - thresholdRatio);
        segmentRatio = thresholdRatio;
      }
    }

    nextSegmentRatio = indexDir < 0.0 ? prevSegmentRatio : nextSegmentRatio;
    vec3 currPos = interpolateFlat(source, target, segmentRatio);
    vec3 nextPos = interpolateFlat(source, target, nextSegmentRatio);

    if (useShortestPath) {
      if (nextPos.x < antiMeridianX) {
        currPos.x += TILE_SIZE;
        nextPos.x += TILE_SIZE;
      }
    }

    curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
    next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
    geometry.position = vec4(currPos, 1.0);
  }
  float widthPixels = clamp(
    project_size_to_pixel(instanceWidths * widthScale, widthUnits),
    widthMinPixels, widthMaxPixels
  );
  vec3 offset = vec3(
    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),
    0.0);
  DECKGL_FILTER_SIZE(offset, geometry);
  DECKGL_FILTER_GL_POSITION(curr, geometry);
  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);

  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
  vColor = vec4(color.rgb, color.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,T=`#define SHADER_NAME arc-layer-fragment-shader

precision highp float;

varying vec4 vColor;
varying vec2 uv;
varying float isValid;

void main(void) {
  if (isValid == 0.0) {
    discard;
  }

  gl_FragColor = vColor;
  geometry.uv = uv;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,c=[0,0,0,255],b={getSourcePosition:{type:"accessor",value:s=>s.sourcePosition},getTargetPosition:{type:"accessor",value:s=>s.targetPosition},getSourceColor:{type:"accessor",value:c},getTargetColor:{type:"accessor",value:c},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},greatCircle:!1,numSegments:{type:"number",value:50,min:1},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0}};class u extends _{constructor(...e){super(...e),l(this,"state",void 0)}getBounds(){var e;return(e=this.getAttributeManager())===null||e===void 0?void 0:e.getBounds(["instanceSourcePositions","instanceTargetPositions"])}getShaders(){return super.getShaders({vs:L,fs:T,modules:[P,h]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getSourcePosition"},instanceTargetPositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getTargetPosition"},instanceSourceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getSourceColor",defaultValue:c},instanceTargetColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getTargetColor",defaultValue:c},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}updateState(e){super.updateState(e);const{props:r,oldProps:n,changeFlags:t}=e;if(t.extensionsChanged||t.propsChanged&&r.numSegments!==n.numSegments){var o;const{gl:i}=this.context;(o=this.state.model)===null||o===void 0||o.delete(),this.state.model=this._getModel(i),this.getAttributeManager().invalidateAll()}}draw({uniforms:e}){const{widthUnits:r,widthScale:n,widthMinPixels:t,widthMaxPixels:o,greatCircle:i,wrapLongitude:a}=this.props;this.state.model.setUniforms(e).setUniforms({greatCircle:i,widthUnits:S[r],widthScale:n,widthMinPixels:t,widthMaxPixels:o,useShortestPath:a}).draw()}_getModel(e){const{id:r,numSegments:n}=this.props;let t=[];for(let i=0;i<n;i++)t=t.concat([i,1,0,i,-1,0]);const o=new y(e,{...this.getShaders(),id:r,geometry:new R({drawMode:5,attributes:{positions:new Float32Array(t)}}),isInstanced:!0});return o.setUniforms({numSegments:n}),o}}l(u,"layerName","ArcLayer");l(u,"defaultProps",b);const C=p({__name:"arc-layer",setup(s,{expose:e}){e();const t={mapOptions:{style:d.GRAY,center:[-122.19,37.75],zoom:9.16,pitch:30,antialias:!0},handleMapLoaded:o=>{const i=new w({id:"arc-layer",type:u,data:m("/data/bart-segments.json"),getWidth:1,pickable:!0,getSourceColor:a=>[Math.sqrt(a.inbound),140,0],getSourcePosition:a=>a.from.coordinates,getTargetColor:a=>[Math.sqrt(a.outbound),140,0],getTargetPosition:a=>a.to.coordinates});o.addLayer(i)},BaseMap:g};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function M(s,e,r,n,t,o){return f(),v(n.BaseMap,{"map-options":n.mapOptions,onLoad:n.handleMapLoaded})}const A=x(C,[["render",M],["__file","arc-layer.vue"]]);export{A as default};
