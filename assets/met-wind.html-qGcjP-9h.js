import{_ as i,r as n,o as c,c as l,d as s,w as m,e as t}from"./app-WXFCxs9o.js";const d={},o=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import { WindLayer } from &#39;@sakitam-gis/mapbox-wind&#39;</span>
<span class="token comment">// import windData from &#39;./data/wind.json&#39;</span>

<span class="token comment">// const data = windData.map((item, idx) =&gt; {</span>
<span class="token comment">//   item.header = Object.assign(item.header, {</span>
<span class="token comment">//     parameterCategory: 1,</span>
<span class="token comment">//     parameterNumber: idx === 0 ? 2 : 3</span>
<span class="token comment">//   })</span>
<span class="token comment">//   return item</span>
<span class="token comment">// })</span>

<span class="token comment">// const addWindLayer = (map) =&gt; {</span>
<span class="token comment">//   const windLayer = new WindLayer(&#39;wind&#39;, data, {</span>
<span class="token comment">//     windOptions: {</span>
<span class="token comment">//       globalAlpha: 0.9,</span>
<span class="token comment">//       velocityScale: 0.02,</span>
<span class="token comment">//       paths: 4000,</span>
<span class="token comment">//       minVelocity: 0,</span>
<span class="token comment">//       maxVelocity: 10,</span>
<span class="token comment">//       colorScale: [</span>
<span class="token comment">//         &#39;rgb(36,104, 180)&#39;,</span>
<span class="token comment">//         &#39;rgb(60,157, 194)&#39;,</span>
<span class="token comment">//         &#39;rgb(128,205,193 )&#39;,</span>
<span class="token comment">//         &#39;rgb(151,218,168 )&#39;,</span>
<span class="token comment">//         &#39;rgb(198,231,181)&#39;,</span>
<span class="token comment">//         &#39;rgb(238,247,217)&#39;,</span>
<span class="token comment">//         &#39;rgb(255,238,159)&#39;,</span>
<span class="token comment">//         &#39;rgb(252,217,125)&#39;,</span>
<span class="token comment">//         &#39;rgb(255,182,100)&#39;,</span>
<span class="token comment">//         &#39;rgb(252,150,75)&#39;,</span>
<span class="token comment">//         &#39;rgb(250,112,52)&#39;,</span>
<span class="token comment">//         &#39;rgb(245,64,32)&#39;,</span>
<span class="token comment">//         &#39;rgb(237,45,28)&#39;,</span>
<span class="token comment">//         &#39;rgb(220,24,32)&#39;,</span>
<span class="token comment">//         &#39;rgb(180,0,35)&#39;</span>
<span class="token comment">//       ]</span>
<span class="token comment">//     }</span>
<span class="token comment">//   })</span>
<span class="token comment">//   map.addLayer(windLayer)</span>
<span class="token comment">// }</span>

<span class="token comment">// export default addWindLayer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(p,v){const e=n("common-code-view"),a=n("ClientOnly");return c(),l("div",null,[s(a,null,{default:m(()=>[s(e,{name:"met-wind","is-code-view":!1})]),_:1}),o])}const u=i(d,[["render",r],["__file","met-wind.html.vue"]]);export{u as default};
