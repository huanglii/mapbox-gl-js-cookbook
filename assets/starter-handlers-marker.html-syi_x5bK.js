import{_ as p,r as n,o as e,c as o,d as s,w as c,e as l}from"./app-WXFCxs9o.js";const i={},u=l(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> mapboxgl <span class="token keyword">from</span> <span class="token string">&#39;mapbox-gl&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token keyword">import</span> baseMap <span class="token keyword">from</span> <span class="token string">&#39;../../base-map.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../utils/constant&#39;</span>

<span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">GRAY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">63.8904723180264</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">16.806481318445833</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">5.8</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> points <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">66.324462890625</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">16.024695711685304</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">61.2158203125</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15.97189158092897</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">63.29223632812499</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">18.28151823530889</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  points<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    el<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;marker&#39;</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>point<span class="token punctuation">.</span>iconSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>point<span class="token punctuation">.</span>iconSize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token function">withBase</span><span class="token punctuation">(</span><span class="token string">&#39;/assets/images/cat.jfif&#39;</span><span class="token punctuation">)</span>
    el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>

    <span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setLngLat</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>coordinates <span class="token keyword">as</span> mapboxgl<span class="token punctuation">.</span>LngLatLike<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.marker</span> <span class="token punctuation">{</span>
  <span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 15px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>105<span class="token punctuation">,</span> 105<span class="token punctuation">,</span> 105<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> scale 2s infinite linear<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(k,d){const a=n("common-code-view"),t=n("ClientOnly");return e(),o("div",null,[s(t,null,{default:c(()=>[s(a,{name:"starter-handlers-marker","is-code-view":!1})]),_:1}),u])}const v=p(i,[["render",r],["__file","starter-handlers-marker.html.vue"]]);export{v as default};
