import{L as R,P as te,g as ne,j as ie,_,G as oe,u as se,l as V,i as re,k as ae,p as le,a as ce,M as ge,U as I,c as ue,n as de,o as he,A as fe}from"./mapbox-layer-CgvmFtE2.js";const E=`#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))

struct AmbientLight {
 vec3 color;
};

struct PointLight {
 vec3 color;
 vec3 position;
 vec3 attenuation;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform AmbientLight lighting_uAmbientLight;
uniform PointLight lighting_uPointLight[MAX_LIGHTS];
uniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];
uniform int lighting_uPointLightCount;
uniform int lighting_uDirectionalLightCount;

uniform bool lighting_uEnabled;

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

#endif
`,pe={lightSources:{}};function T(){let{color:o=[0,0,0],intensity:e=1}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o.map(t=>t*e/255)}function me(o){let{ambientLight:e,pointLights:t=[],directionalLights:n=[]}=o;const i={};return e?i["lighting_uAmbientLight.color"]=T(e):i["lighting_uAmbientLight.color"]=[0,0,0],t.forEach((s,r)=>{i["lighting_uPointLight[".concat(r,"].color")]=T(s),i["lighting_uPointLight[".concat(r,"].position")]=s.position,i["lighting_uPointLight[".concat(r,"].attenuation")]=s.attenuation||[1,0,0]}),i.lighting_uPointLightCount=t.length,n.forEach((s,r)=>{i["lighting_uDirectionalLight[".concat(r,"].color")]=T(s),i["lighting_uDirectionalLight[".concat(r,"].direction")]=s.direction}),i.lighting_uDirectionalLightCount=n.length,i}function G(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pe;if("lightSources"in o){const{ambientLight:e,pointLights:t,directionalLights:n}=o.lightSources||{};return e||t&&t.length>0||n&&n.length>0?Object.assign({},me({ambientLight:e,pointLights:t,directionalLights:n}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in o){const e={pointLights:[],directionalLights:[]};for(const t of o.lights||[])switch(t.type){case"ambient":e.ambientLight=t;break;case"directional":e.directionalLights.push(t);break;case"point":e.pointLights.push(t);break}return G({lightSources:e})}return{}}const B={name:"lights",vs:E,fs:E,getUniforms:G,defines:{MAX_LIGHTS:3}},z=`
uniform float lighting_uAmbient;
uniform float lighting_uDiffuse;
uniform float lighting_uShininess;
uniform vec3  lighting_uSpecularColor;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
    vec3 halfway_direction = normalize(light_direction + view_direction);
    float lambertian = dot(light_direction, normal_worldspace);
    float specular = 0.0;
    if (lambertian > 0.0) {
      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
      specular = pow(specular_angle, lighting_uShininess);
    }
    lambertian = max(lambertian, 0.0);
    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);
    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}

vec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = vec3(0, 0, 0);
  vec3 surfaceColor = vec3(0, 0, 0);

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,_e={};function ve(o){const{ambient:e=.35,diffuse:t=.6,shininess:n=32,specularColor:i=[30,30,30]}=o;return{lighting_uAmbient:e,lighting_uDiffuse:t,lighting_uShininess:n,lighting_uSpecularColor:i.map(s=>s/255)}}function j(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_e;if(!("material"in o))return{};const{material:e}=o;return e?ve(e):{lighting_uEnabled:!1}}const Se={name:"gouraud-lighting",dependencies:[B],vs:z,defines:{LIGHTING_VERTEX:1},getUniforms:j},Le={name:"phong-lighting",dependencies:[B],fs:z,defines:{LIGHTING_FRAGMENT:1},getUniforms:j},ye="compositeLayer.renderLayers";class W extends R{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){const{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){const{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e=="function"){const t={index:-1,data:this.props.data,target:[]};return(n,i)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,i)}return e}getSubLayerProps(e={}){var t;const{opacity:n,pickable:i,visible:s,parameters:r,getPolygonOffset:a,highlightedObjectIndex:l,autoHighlight:c,highlightColor:g,coordinateSystem:h,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:m,extensions:p,fetch:v,operation:S,_subLayerProps:D}=this.props,y={id:"",updateTriggers:{},opacity:n,pickable:i,visible:s,parameters:r,getPolygonOffset:a,highlightedObjectIndex:l,autoHighlight:c,highlightColor:g,coordinateSystem:h,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:m,extensions:p,fetch:v,operation:S},L=D&&e.id&&D[e.id],J=L&&L.updateTriggers,ee=e.id||"sublayer";if(L){const P=this.props[te],b=e.type?e.type._propTypes:{};for(const x in L){const w=b[x]||P[x];w&&w.type==="accessor"&&(L[x]=this.getSubLayerAccessor(L[x]))}}Object.assign(y,e,L),y.id="".concat(this.props.id,"-").concat(ee),y.updateTriggers={all:(t=this.props.updateTriggers)===null||t===void 0?void 0:t.all,...e.updateTriggers,...J};for(const P of p){const b=P.getSubLayerProps.call(this,P);b&&Object.assign(y,b,{updateTriggers:Object.assign(y.updateTriggers,b.updateTriggers)})}return y}_updateAutoHighlight(e){for(const t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers;const i=!n||this.needsUpdate();if(i){const s=this.renderLayers();n=ne(s,Boolean),this.internalState.subLayers=n}ie(ye,this,i,n);for(const s of n)s.parent=this}}_(W,"layerName","CompositeLayer");const Ce={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function be(o,e,t={}){return De(o,t)!==e?(xe(o,t),!0):!1}function De(o,e={}){return Math.sign(Pe(o,e))}function Pe(o,e={}){const{start:t=0,end:n=o.length}=e,i=e.size||2;let s=0;for(let r=t,a=n-i;r<n;r+=i)s+=(o[r]-o[a])*(o[r+1]+o[a+1]),a=r;return s/2}function xe(o,e){const{start:t=0,end:n=o.length,size:i=2}=e,s=(n-t)/i,r=Math.floor(s/2);for(let a=0;a<r;++a){const l=t+a*i,c=t+(s-1-a)*i;for(let g=0;g<i;++g){const h=o[l+g];o[l+g]=o[c+g],o[c+g]=h}}}class Ae extends oe{constructor(e){const{id:t=se("column-geometry")}=e,{indices:n,attributes:i}=Me(e);super({...e,id:t,indices:n,attributes:i})}}function Me(o){const{radius:e,height:t=1,nradial:n=10}=o;let{vertices:i}=o;i&&(V.assert(i.length>=n),i=i.flatMap(d=>[d[0],d[1]]),be(i,Ce.COUNTER_CLOCKWISE));const s=t>0,r=n+1,a=s?r*3+1:n,l=Math.PI*2/n,c=new Uint16Array(s?n*3*2:0),g=new Float32Array(a*3),h=new Float32Array(a*3);let u=0;if(s){for(let d=0;d<r;d++){const f=d*l,m=d%n,p=Math.sin(f),v=Math.cos(f);for(let S=0;S<2;S++)g[u+0]=i?i[m*2]:v*e,g[u+1]=i?i[m*2+1]:p*e,g[u+2]=(1/2-S)*t,h[u+0]=i?i[m*2]:v,h[u+1]=i?i[m*2+1]:p,u+=3}g[u+0]=g[u-3],g[u+1]=g[u-2],g[u+2]=g[u-1],u+=3}for(let d=s?0:1;d<r;d++){const f=Math.floor(d/2)*Math.sign(.5-d%2),m=f*l,p=(f+n)%n,v=Math.sin(m),S=Math.cos(m);g[u+0]=i?i[p*2]:S*e,g[u+1]=i?i[p*2+1]:v*e,g[u+2]=t/2,h[u+2]=1,u+=3}if(s){let d=0;for(let f=0;f<n;f++)c[d++]=f*2+0,c[d++]=f*2+2,c[d++]=f*2+0,c[d++]=f*2+1,c[d++]=f*2+1,c[d++]=f*2+3}return{indices:c,attributes:{POSITION:{size:3,value:g},NORMAL:{size:3,value:h}}}}const Te=`#version 300 es

#define SHADER_NAME column-layer-vertex-shader

in vec3 positions;
in vec3 normals;

in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;

in vec3 instancePickingColors;
uniform float opacity;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform bool extruded;
uniform bool stroked;
uniform bool isStroke;
uniform float coverage;
uniform float elevationScale;
uniform float edgeDistance;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform int radiusUnits;
uniform int widthUnits;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec4 position_commonspace;
#endif

void main(void) {
  geometry.worldPosition = instancePositions;

  vec4 color = isStroke ? instanceLineColors : instanceFillColors;
  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));
  float elevation = 0.0;
  float strokeOffsetRatio = 1.0;

  if (extruded) {
    elevation = instanceElevations * (positions.z + 1.0) / 2.0 * elevationScale;
  } else if (stroked) {
    float widthPixels = clamp(
      project_size_to_pixel(instanceStrokeWidths * widthScale, widthUnits),
      widthMinPixels, widthMaxPixels) / 2.0;
    float halfOffset = project_pixel_size(widthPixels) / project_size(edgeDistance * coverage * radius);
    if (isStroke) {
      strokeOffsetRatio -= sign(positions.z) * halfOffset;
    } else {
      strokeOffsetRatio -= halfOffset;
    }
  }
  float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
  float dotRadius = radius * coverage * shouldRender;

  geometry.pickingColor = instancePickingColors;
  vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
  vec3 centroidPosition64Low = instancePositions64Low;
  vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + offset) * dotRadius;
  if (radiusUnits == UNIT_METERS) {
    offset = project_size(offset);
  }
  vec3 pos = vec3(offset, 0.);
  DECKGL_FILTER_SIZE(pos, geometry);

  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
  geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  if (extruded && !isStroke) {
#ifdef FLAT_SHADING
    position_commonspace = geometry.position;
    vColor = vec4(color.rgb, color.a * opacity);
#else
    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);
    vColor = vec4(lightColor, color.a * opacity);
#endif
  } else {
    vColor = vec4(color.rgb, color.a * opacity);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,we=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader

precision highp float;

uniform vec3 project_uCameraPosition;
uniform bool extruded;
uniform bool isStroke;

out vec4 fragColor;

in vec4 vColor;
#ifdef FLAT_SHADING
in vec4 position_commonspace;
#endif

void main(void) {
  fragColor = vColor;
#ifdef FLAT_SHADING
  if (extruded && !isStroke && !picking_uActive) {
    vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
    fragColor.rgb = lighting_getLightColor(vColor.rgb, project_uCameraPosition, position_commonspace.xyz, normal);
  }
#endif
  DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,A=[0,0,0,255],Ie={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,getPosition:{type:"accessor",value:o=>o.position},getFillColor:{type:"accessor",value:A},getLineColor:{type:"accessor",value:A},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class H extends R{getShaders(){const{gl:e}=this.context,t=!re(e),n={},i=this.props.flatShading&&ae(e,ue.GLSL_DERIVATIVES);return i&&(n.FLAT_SHADING=1),super.getShaders({vs:Te,fs:we,defines:n,transpileToGLSL100:t,modules:[le,i?Le:Se,ce]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getFillColor",defaultValue:A},instanceLineColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:!0,accessor:"getLineColor",defaultValue:A},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(e){super.updateState(e);const{props:t,oldProps:n,changeFlags:i}=e,s=i.extensionsChanged||t.flatShading!==n.flatShading;if(s){var r;const{gl:a}=this.context;(r=this.state.model)===null||r===void 0||r.delete(),this.state.model=this._getModel(a),this.getAttributeManager().invalidateAll()}(s||t.diskResolution!==n.diskResolution||t.vertices!==n.vertices||(t.extruded||t.stroked)!==(n.extruded||n.stroked))&&this._updateGeometry(t)}getGeometry(e,t,n){const i=new Ae({radius:1,height:n?2:0,vertices:t,nradial:e});let s=0;if(t)for(let r=0;r<e;r++){const a=t[r],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]);s+=l/e}else s=1;return this.setState({edgeDistance:Math.cos(Math.PI/e)*s}),i}_getModel(e){return new ge(e,{...this.getShaders(),id:this.props.id,isInstanced:!0})}_updateGeometry({diskResolution:e,vertices:t,extruded:n,stroked:i}){const s=this.getGeometry(e,t,n||i);this.setState({fillVertexCount:s.attributes.POSITION.value.length/3,wireframeVertexCount:s.indices.value.length}),this.state.model.setProps({geometry:s})}draw({uniforms:e}){const{lineWidthUnits:t,lineWidthScale:n,lineWidthMinPixels:i,lineWidthMaxPixels:s,radiusUnits:r,elevationScale:a,extruded:l,filled:c,stroked:g,wireframe:h,offset:u,coverage:d,radius:f,angle:m}=this.props,{model:p,fillVertexCount:v,wireframeVertexCount:S,edgeDistance:D}=this.state;p.setUniforms(e).setUniforms({radius:f,angle:m/180*Math.PI,offset:u,extruded:l,stroked:g,coverage:d,elevationScale:a,edgeDistance:D,radiusUnits:I[r],widthUnits:I[t],widthScale:n,widthMinPixels:i,widthMaxPixels:s}),l&&h&&(p.setProps({isIndexed:!0}),p.setVertexCount(S).setDrawMode(1).setUniforms({isStroke:!0}).draw()),c&&(p.setProps({isIndexed:!1}),p.setVertexCount(v).setDrawMode(5).setUniforms({isStroke:!1}).draw()),!l&&g&&(p.setProps({isIndexed:!1}),p.setVertexCount(v*2/3).setDrawMode(5).setUniforms({isStroke:!0}).draw())}}_(H,"layerName","ColumnLayer");_(H,"defaultProps",Ie);const C={SUM:1,MEAN:2,MIN:3,MAX:4};function X(o,e){return o+e}function Ee(o,e){return e>o?e:o}function Fe(o,e){return e<o?e:o}function Ue(o,e){if(Number.isFinite(e))return o.length?e:null;const t=o.map(e).filter(Number.isFinite);return t.length?t.reduce(X,0)/t.length:null}function ke(o,e){if(Number.isFinite(e))return o.length?o.length*e:null;const t=o.map(e).filter(Number.isFinite);return t.length?t.reduce(X,0):null}function Ne(o,e){if(Number.isFinite(e))return o.length?e:null;const t=o.map(e).filter(Number.isFinite);return t.length?t.reduce(Ee,-1/0):null}function Oe(o,e){if(Number.isFinite(e))return o.length?e:null;const t=o.map(e).filter(Number.isFinite);return t.length?t.reduce(Fe,1/0):null}function Re(o,e,t){const n=C[o]||C.SUM;switch(e=Ve(e,t),n){case C.MIN:return i=>Oe(i,e);case C.SUM:return i=>ke(i,e);case C.MEAN:return i=>Ue(i,e);case C.MAX:return i=>Ne(i,e);default:return null}}function Ve(o,e={}){return Number.isFinite(o)?o:t=>(e.index=t.index,o(t.source,e))}function Ge(o,e={}){return t=>(e.indices=t.map(n=>n.index),o(t.map(n=>n.source),e))}const ct=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function gt(o,e=!1,t=Float32Array){let n;if(Number.isFinite(o[0]))n=new t(o);else{n=new t(o.length*4);let i=0;for(let s=0;s<o.length;s++){const r=o[s];n[i++]=r[0],n[i++]=r[1],n[i++]=r[2],n[i++]=Number.isFinite(r[3])?r[3]:255}}if(e)for(let i=0;i<n.length;i++)n[i]/=255;return n}function Be(o,e){const t={};for(const n in o)e.includes(n)||(t[n]=o[n]);return t}class ze extends W{constructor(...e){super(...e),_(this,"state",void 0)}initializeAggregationLayer(e){super.initializeState(this.context),this.setState({ignoreProps:Be(this.constructor._propTypes,e.data.props),dimensions:e})}updateState(e){super.updateState(e);const{changeFlags:t}=e;if(t.extensionsChanged){const n=this.getShaders({});n&&n.defines&&(n.defines.NON_INSTANCED_MODEL=1),this.updateShaders(n)}this._updateAttributes()}updateAttributes(e){this.setState({changedAttributes:e})}getAttributes(){return this.getAttributeManager().getShaderAttributes()}getModuleSettings(){const{viewport:e,mousePosition:t,gl:n}=this.context;return Object.assign(Object.create(this.props),{viewport:e,mousePosition:t,pickingActive:0,devicePixelRatio:de(n)})}updateShaders(e){}isAggregationDirty(e,t={}){const{props:n,oldProps:i,changeFlags:s}=e,{compareAll:r=!1,dimension:a}=t,{ignoreProps:l}=this.state,{props:c,accessors:g=[]}=a,{updateTriggersChanged:h}=s;if(s.dataChanged)return!0;if(h){if(h.all)return!0;for(const u of g)if(h[u])return!0}if(r)return s.extensionsChanged?!0:he({oldProps:i,newProps:n,ignoreProps:l,propTypes:this.constructor._propTypes});for(const u of c)if(n[u]!==i[u])return!0;return!1}isAttributeChanged(e){const{changedAttributes:t}=this.state;return e?t&&t[e]!==void 0:!je(t)}_getAttributeManager(){return new fe(this.context.gl,{id:this.props.id,stats:this.context.stats})}}_(ze,"layerName","AggregationLayer");function je(o){let e=!0;for(const t in o){e=!1;break}return e}function M(o,e,t){const n=t;return n.domain=()=>o,n.range=()=>e,n}function F(o,e){return M(o,e,n=>$e(o,e,n))}function We(o,e){return M(o,e,n=>Ze(o,e,n))}function He(o,e){const t=o.sort(q);let n=0;const i=Math.max(1,e.length),s=new Array(i-1);for(;++n<i;)s[n-1]=Xe(t,n/i);const r=a=>Ke(s,e,a);return r.thresholds=()=>s,M(o,e,r)}function q(o,e){return o-e}function Xe(o,e){const t=o.length;if(e<=0||t<2)return o[0];if(e>=1)return o[t-1];const n=(t-1)*e,i=Math.floor(n),s=o[i],r=o[i+1];return s+(r-s)*(n-i)}function qe(o,e){let t=0,n=o.length;for(;t<n;){const i=t+n>>>1;q(o[i],e)>0?n=i:t=i+1}return t}function Ke(o,e,t){return e[qe(o,t)]}function Ye(o,e,t,n){const i="".concat(n);let s=e.get(i);return s===void 0&&(s=o.push(n),e.set(i,s)),t[(s-1)%t.length]}function Qe(o,e){const t=new Map,n=[];for(const s of o){const r="".concat(s);t.has(r)||t.set(r,n.push(s))}return M(o,e,s=>Ye(n,t,e,s))}function $e(o,e,t){const n=o[1]-o[0];if(n<=0)return V.warn("quantizeScale: invalid domain, returning range[0]")(),e[0];const i=n/e.length,s=Math.floor((t-o[0])/i),r=Math.max(Math.min(s,e.length-1),0);return e[r]}function Ze(o,e,t){return(t-o[0])/(o[1]-o[0])*(e[1]-e[0])+e[0]}function K(o){return o!=null}function Je(o){const e=[];return o.forEach(t=>{!e.includes(t)&&K(t)&&e.push(t)}),e}function Y(o,e){return(typeof e=="function"?o.map(e):o).filter(K)}function et(o,e){return Y(o,e)}function tt(o,e){return Je(Y(o,e))}function nt(o,e,t){return Math.max(e,Math.min(t,o))}function it(o){switch(o){case"quantize":return F;case"linear":return We;case"quantile":return He;case"ordinal":return Qe;default:return F}}const Q=o=>o.length,ot=3402823466e29,$=o=>o.points,Z=o=>o.index,U=(o,e)=>o<e?-1:o>e?1:o>=e?0:NaN,st={getValue:Q,getPoints:$,getIndex:Z,filterData:null};class rt{constructor(e=[],t=st){_(this,"maxCount",void 0),_(this,"maxValue",void 0),_(this,"minValue",void 0),_(this,"totalCount",void 0),_(this,"aggregatedBins",void 0),_(this,"sortedBins",void 0),_(this,"binMap",void 0),this.aggregatedBins=this.getAggregatedBins(e,t),this._updateMinMaxValues(),this.binMap=this.getBinMap()}getAggregatedBins(e,t){const{getValue:n=Q,getPoints:i=$,getIndex:s=Z,filterData:r}=t,a=typeof r=="function",l=e.length,c=[];let g=0;for(let h=0;h<l;h++){const u=e[h],d=i(u),f=s(u),m=a?d.filter(r):d;u.filteredPoints=a?m:null;const p=m.length?n(m):null;p!=null&&(c[g]={i:Number.isFinite(f)?f:h,value:p,counts:m.length},g++)}return c}_percentileToIndex(e){const t=this.sortedBins.length;if(t<2)return[0,0];const[n,i]=e.map(a=>nt(a,0,100)),s=Math.ceil(n/100*(t-1)),r=Math.floor(i/100*(t-1));return[s,r]}getBinMap(){const e={};for(const t of this.aggregatedBins)e[t.i]=t;return e}_updateMinMaxValues(){let e=0,t=0,n=ot,i=0;for(const s of this.aggregatedBins)e=e>s.counts?e:s.counts,t=t>s.value?t:s.value,n=n<s.value?n:s.value,i+=s.counts;this.maxCount=e,this.maxValue=t,this.minValue=n,this.totalCount=i}getValueRange(e){if(this.sortedBins||(this.sortedBins=this.aggregatedBins.sort((i,s)=>U(i.value,s.value))),!this.sortedBins.length)return[];let t=0,n=this.sortedBins.length-1;if(Array.isArray(e)){const i=this._percentileToIndex(e);t=i[0],n=i[1]}return[this.sortedBins[t].value,this.sortedBins[n].value]}getValueDomainByScale(e,[t=0,n=100]=[]){if(this.sortedBins||(this.sortedBins=this.aggregatedBins.sort((s,r)=>U(s.value,r.value))),!this.sortedBins.length)return[];const i=this._percentileToIndex([t,n]);return this._getScaleDomain(e,i)}_getScaleDomain(e,[t,n]){const i=this.sortedBins;switch(e){case"quantize":case"linear":return[i[t].value,i[n].value];case"quantile":return et(i.slice(t,n+1),s=>s.value);case"ordinal":return tt(i,s=>s.value);default:return[i[t].value,i[n].value]}}}function k(){}const N=["getBins","getDomain","getScaleFunc"],O=[{key:"fillColor",accessor:"getFillColor",pickingInfo:"colorValue",getBins:{triggers:{value:{prop:"getColorValue",updateTrigger:"getColorValue"},weight:{prop:"getColorWeight",updateTrigger:"getColorWeight"},aggregation:{prop:"colorAggregation"},filterData:{prop:"_filterData",updateTrigger:"_filterData"}}},getDomain:{triggers:{lowerPercentile:{prop:"lowerPercentile"},upperPercentile:{prop:"upperPercentile"},scaleType:{prop:"colorScaleType"}}},getScaleFunc:{triggers:{domain:{prop:"colorDomain"},range:{prop:"colorRange"}},onSet:{props:"onSetColorDomain"}},nullValue:[0,0,0,0]},{key:"elevation",accessor:"getElevation",pickingInfo:"elevationValue",getBins:{triggers:{value:{prop:"getElevationValue",updateTrigger:"getElevationValue"},weight:{prop:"getElevationWeight",updateTrigger:"getElevationWeight"},aggregation:{prop:"elevationAggregation"},filterData:{prop:"_filterData",updateTrigger:"_filterData"}}},getDomain:{triggers:{lowerPercentile:{prop:"elevationLowerPercentile"},upperPercentile:{prop:"elevationUpperPercentile"},scaleType:{prop:"elevationScaleType"}}},getScaleFunc:{triggers:{domain:{prop:"elevationDomain"},range:{prop:"elevationRange"}},onSet:{props:"onSetElevationDomain"}},nullValue:-1}],at=o=>o.cellSize;class ut{constructor(e){this.state={layerData:{},dimensions:{}},this.changeFlags={},this.dimensionUpdaters={},this._getCellSize=e.getCellSize||at,this._getAggregator=e.getAggregator,this._addDimension(e.dimensions||O)}static defaultDimensions(){return O}updateState(e,t){const{oldProps:n,props:i,changeFlags:s}=e;this.updateGetValueFuncs(n,i,s);const r=this.needsReProjectPoints(n,i,s);let a=!1;return s.dataChanged||r?(this.getAggregatedData(i,t),a=!0):((this.getDimensionChanges(n,i,s)||[]).forEach(c=>typeof c=="function"&&c()),a=!0),this.setState({aggregationDirty:a}),this.state}setState(e){this.state={...this.state,...e}}setDimensionState(e,t){this.setState({dimensions:{...this.state.dimensions,[e]:{...this.state.dimensions[e],...t}}})}normalizeResult(e={}){return e.hexagons?{data:e.hexagons,...e}:e.layerData?{data:e.layerData,...e}:e}getAggregatedData(e,t){const i=this._getAggregator(e)(e,t);this.setState({layerData:this.normalizeResult(i)}),this.changeFlags={layerData:!0},this.getSortedBins(e)}updateGetValueFuncs(e,t,n){for(const i in this.dimensionUpdaters){const{value:s,weight:r,aggregation:a}=this.dimensionUpdaters[i].getBins.triggers;let l=t[s.prop];this.needUpdateDimensionStep(this.dimensionUpdaters[i].getBins,e,t,n)&&(l?l=Ge(l,{data:t.data}):l=Re(t[a.prop],t[r.prop],{data:t.data})),l&&this.setDimensionState(i,{getValue:l})}}needsReProjectPoints(e,t,n){return this._getCellSize(e)!==this._getCellSize(t)||this._getAggregator(e)!==this._getAggregator(t)||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPosition)}addDimension(e){this._addDimension(e)}_addDimension(e=[]){e.forEach(t=>{const{key:n}=t;this.dimensionUpdaters[n]=this.getDimensionUpdaters(t),this.state.dimensions[n]={getValue:null,domain:null,sortedBins:null,scaleFunc:k}})}getDimensionUpdaters({key:e,accessor:t,pickingInfo:n,getBins:i,getDomain:s,getScaleFunc:r,nullValue:a}){return{key:e,accessor:t,pickingInfo:n,getBins:{updater:this.getDimensionSortedBins,...i},getDomain:{updater:this.getDimensionValueDomain,...s},getScaleFunc:{updater:this.getDimensionScale,...r},attributeAccessor:this.getSubLayerDimensionAttribute(e,a)}}needUpdateDimensionStep(e,t,n,i){return Object.values(e.triggers).some(s=>s.updateTrigger?i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged[s.updateTrigger]):t[s.prop]!==n[s.prop])}getDimensionChanges(e,t,n){const i=[];for(const s in this.dimensionUpdaters){const r=N.find(a=>this.needUpdateDimensionStep(this.dimensionUpdaters[s][a],e,t,n));r&&i.push(this.dimensionUpdaters[s][r].updater.bind(this,t,this.dimensionUpdaters[s]))}return i.length?i:null}getUpdateTriggers(e){const t=e.updateTriggers||{},n={};for(const i in this.dimensionUpdaters){const{accessor:s}=this.dimensionUpdaters[i];n[s]={},N.forEach(r=>{Object.values(this.dimensionUpdaters[i][r].triggers).forEach(({prop:a,updateTrigger:l})=>{if(l){const c=t[l];typeof c=="object"&&!Array.isArray(c)?Object.assign(n[s],c):c!==void 0&&(n[s][a]=c)}else n[s][a]=e[a]})})}return n}getSortedBins(e){for(const t in this.dimensionUpdaters)this.getDimensionSortedBins(e,this.dimensionUpdaters[t])}getDimensionSortedBins(e,t){const{key:n}=t,{getValue:i}=this.state.dimensions[n],s=new rt(this.state.layerData.data||[],{getValue:i,filterData:e._filterData});this.setDimensionState(n,{sortedBins:s}),this.getDimensionValueDomain(e,t)}getDimensionValueDomain(e,t){const{getDomain:n,key:i}=t,{triggers:{lowerPercentile:s,upperPercentile:r,scaleType:a}}=n,l=this.state.dimensions[i].sortedBins.getValueDomainByScale(e[a.prop],[e[s.prop],e[r.prop]]);this.setDimensionState(i,{valueDomain:l}),this.getDimensionScale(e,t)}getDimensionScale(e,t){const{key:n,getScaleFunc:i,getDomain:s}=t,{domain:r,range:a}=i.triggers,{scaleType:l}=s.triggers,{onSet:c}=i,g=e[a.prop],h=e[r.prop]||this.state.dimensions[n].valueDomain,d=it(l&&e[l.prop])(h,g);typeof c=="object"&&typeof e[c.props]=="function"&&e[c.props](d.domain()),this.setDimensionState(n,{scaleFunc:d})}getSubLayerDimensionAttribute(e,t){return n=>{const{sortedBins:i,scaleFunc:s}=this.state.dimensions[e],r=i.binMap[n.index];if(r&&r.counts===0)return t;const a=r&&r.value,l=s.domain();return a>=l[0]&&a<=l[l.length-1]?s(a):t}}getSubLayerAccessors(e){const t={};for(const n in this.dimensionUpdaters){const{accessor:i}=this.dimensionUpdaters[n];t[i]=this.getSubLayerDimensionAttribute(e,n)}return t}getPickingInfo({info:e}){const t=e.picked&&e.index>-1;let n=null;if(t){const i=this.state.layerData.data[e.index],s={};for(const r in this.dimensionUpdaters){const{pickingInfo:a}=this.dimensionUpdaters[r],{sortedBins:l}=this.state.dimensions[r],c=l.binMap[i.index]&&l.binMap[i.index].value;s[a]=c}n=Object.assign(s,i,{points:i.filteredPoints||i.points})}return e.picked=!!n,e.object=n,e}getAccessor(e){return this.dimensionUpdaters.hasOwnProperty(e)?this.dimensionUpdaters[e].attributeAccessor:k}}export{C as A,rt as B,H as C,ze as a,ut as b,gt as c,ct as d,W as e,Se as g};
