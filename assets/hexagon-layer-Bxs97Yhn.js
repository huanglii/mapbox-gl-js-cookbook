import{b as T,S as k}from"./base-map-B4JV9eLi.js";import{g as z,l as O,_ as U,o as B,h as R}from"./app-COZMOXYE.js";import{e as H,l as N,_,b as G}from"./mapbox-layer-CgvmFtE2.js";import{a as W,b as Y,C as j,d as X}from"./cpu-aggregator-CUTjedkk.js";var S=Math.PI/3,V=[0,S,2*S,3*S,4*S,5*S];function q(l){return l[0]}function K(l){return l[1]}function Z(){var l=0,e=0,a=1,n=1,u=q,i=K,s,o,g;function r(t){var m={},b=[],p,c=t.length;for(p=0;p<c;++p)if(!(isNaN(f=+u.call(null,h=t[p],p,t))||isNaN(v=+i.call(null,h,p,t)))){var h,f,v,y=Math.round(v=v/g),x=Math.round(f=f/o-(y&1)/2),C=v-y;if(Math.abs(C)*3>1){var A=f-x,P=x+(f<x?-1:1)/2,F=y+(v<y?-1:1),I=f-P,D=v-F;A*A+C*C>I*I+D*D&&(x=P+(y&1?1:-1)/2,y=F)}var w=x+"-"+y,M=m[w];M?M.push(h):(b.push(M=m[w]=[h]),M.x=(x+(y&1)/2)*o,M.y=y*g)}return b}function d(t){var m=0,b=0;return V.map(function(p){var c=Math.sin(p)*t,h=-Math.cos(p)*t,f=c-m,v=h-b;return m=c,b=h,[f,v]})}return r.hexagon=function(t){return"m"+d(t==null?s:+t).join("l")+"z"},r.centers=function(){for(var t=[],m=Math.round(e/g),b=Math.round(l/o),p=m*g;p<n+s;p+=g,++m)for(var c=b*o+(m&1)*o/2;c<a+o/2;c+=o)t.push([c,p]);return t},r.mesh=function(){var t=d(s).slice(0,4).join("l");return r.centers().map(function(m){return"M"+m+"m"+t}).join("")},r.x=function(t){return arguments.length?(u=t,r):u},r.y=function(t){return arguments.length?(i=t,r):i},r.radius=function(t){return arguments.length?(s=+t,o=s*2*Math.sin(S),g=s*1.5,r):s},r.size=function(t){return arguments.length?(l=e=0,a=+t[0],n=+t[1],r):[a-l,n-e]},r.extent=function(t){return arguments.length?(l=+t[0][0],e=+t[0][1],a=+t[1][0],n=+t[1][1],r):[[l,e],[a,n]]},r.radius(1)}function $(l,e){const{data:a,radius:n}=l,{viewport:u,attributes:i}=e,s=a.length?J(a,e):null,o=Q(n,u,s),g=[],{iterable:r,objectInfo:d}=H(a),t=i.positions.value,{size:m}=i.positions.getAccessor();for(const c of r){d.index++;const h=d.index*m,f=[t[h],t[h+1]];Number.isFinite(f[0])&&Number.isFinite(f[1])?g.push({screenCoord:u.projectFlat(f),source:c,index:d.index}):N.warn("HexagonLayer: invalid position")()}return{hexagons:Z().radius(o).x(c=>c.screenCoord[0]).y(c=>c.screenCoord[1])(g).map((c,h)=>({position:u.unprojectFlat([c.x,c.y]),points:c,index:h})),radiusCommon:o}}function J(l,e){const{attributes:a}=e,n=a.positions.value,{size:u}=a.positions.getAccessor();let i=1/0,s=1/0,o=-1/0,g=-1/0,r;for(r=0;r<u*l.length;r+=u){const d=n[r],t=n[r+1];Number.isFinite(d)&&Number.isFinite(t)&&(i=Math.min(d,i),o=Math.max(d,o),s=Math.min(t,s),g=Math.max(t,g))}return[i,s,o,g].every(Number.isFinite)?[(i+o)/2,(s+g)/2]:null}function Q(l,e,a){const{unitsPerMeter:n}=e.getDistanceScales(a);return l*n[0]}function E(){}const ee={colorDomain:null,colorRange:X,getColorValue:{type:"accessor",value:null},getColorWeight:{type:"accessor",value:1},colorAggregation:"SUM",lowerPercentile:{type:"number",value:0,min:0,max:100},upperPercentile:{type:"number",value:100,min:0,max:100},colorScaleType:"quantize",onSetColorDomain:E,elevationDomain:null,elevationRange:[0,1e3],getElevationValue:{type:"accessor",value:null},getElevationWeight:{type:"accessor",value:1},elevationAggregation:"SUM",elevationLowerPercentile:{type:"number",value:0,min:0,max:100},elevationUpperPercentile:{type:"number",value:100,min:0,max:100},elevationScale:{type:"number",min:0,value:1},elevationScaleType:"linear",onSetElevationDomain:E,radius:{type:"number",value:1e3,min:1},coverage:{type:"number",min:0,max:1,value:1},extruded:!1,hexagonAggregator:$,getPosition:{type:"accessor",value:l=>l.position},material:!0,_filterData:{type:"function",value:null,optional:!0}};class L extends W{constructor(...e){super(...e),_(this,"state",void 0)}initializeState(){const e=new Y({getAggregator:n=>n.hexagonAggregator,getCellSize:n=>n.radius});this.state={cpuAggregator:e,aggregatorState:e.state,vertices:null},this.getAttributeManager().add({positions:{size:3,type:5130,accessor:"getPosition"}})}updateState(e){if(super.updateState(e),e.changeFlags.propsOrDataChanged){const a=this.state.cpuAggregator.updateState(e,{viewport:this.context.viewport,attributes:this.getAttributes()});if(this.state.aggregatorState.layerData!==a.layerData){const{hexagonVertices:n}=a.layerData||{};this.setState({vertices:n&&this.convertLatLngToMeterOffset(n)})}this.setState({aggregatorState:a})}}convertLatLngToMeterOffset(e){const{viewport:a}=this.context;if(Array.isArray(e)&&e.length===6){const n=e[0],u=e[3],i=[(n[0]+u[0])/2,(n[1]+u[1])/2],s=a.projectFlat(i),{metersPerUnit:o}=a.getDistanceScales(i);return e.map(r=>{const d=a.projectFlat(r);return[(d[0]-s[0])*o[0],(d[1]-s[1])*o[1]]})}return N.error("HexagonLayer: hexagonVertices needs to be an array of 6 points")(),null}getPickingInfo({info:e}){return this.state.cpuAggregator.getPickingInfo({info:e})}_onGetSublayerColor(e){return this.state.cpuAggregator.getAccessor("fillColor")(e)}_onGetSublayerElevation(e){return this.state.cpuAggregator.getAccessor("elevation")(e)}_getSublayerUpdateTriggers(){return this.state.cpuAggregator.getUpdateTriggers(this.props)}renderLayers(){const{elevationScale:e,extruded:a,coverage:n,material:u,transitions:i}=this.props,{aggregatorState:s,vertices:o}=this.state,g=this.getSubLayerClass("hexagon-cell",j),r=this._getSublayerUpdateTriggers(),d=o?{vertices:o,radius:1}:{radius:s.layerData.radiusCommon||1,radiusUnits:"common",angle:90};return new g({...d,diskResolution:6,elevationScale:e,extruded:a,coverage:n,material:u,getFillColor:this._onGetSublayerColor.bind(this),getElevation:this._onGetSublayerElevation.bind(this),transitions:i&&{getFillColor:i.getColorValue||i.getColorWeight,getElevation:i.getElevationValue||i.getElevationWeight}},this.getSubLayerProps({id:"hexagon-cell",updateTriggers:r}),{data:s.layerData.data})}}_(L,"layerName","HexagonLayer");_(L,"defaultProps",ee);const te=z({__name:"hexagon-layer",setup(l,{expose:e}){e();const u={mapOptions:{style:k.DARK,center:[-122.441107,37.755579],zoom:11.4,minZoom:8,pitch:50,antialias:!0},handleMapLoaded:i=>{const s=new G({id:"hexagon-layer",type:L,data:O("/data/sf-bike-parking.json"),pickable:!0,extruded:!0,radius:100,elevationScale:5,colorRange:[[1,152,189],[73,227,206],[216,254,181],[254,237,177],[254,173,84],[209,55,78]],getPosition:o=>o.COORDINATES});i.addLayer(s)},BaseMap:T};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function ne(l,e,a,n,u,i){return B(),R(n.BaseMap,{"map-clickable":!1,"map-options":n.mapOptions,onLoad:n.handleMapLoaded})}const se=U(te,[["render",ne],["__file","hexagon-layer.vue"]]);export{se as default};