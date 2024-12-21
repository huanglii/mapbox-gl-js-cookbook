import{_ as e,c as l,b as s,d as o,a as c,r as a,o as i}from"./app-COZMOXYE.js";const r={};function u(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),l("div",null,[s(t,null,{default:o(()=>[s(p,{name:"data-circle-scatter","is-code-view":!1})]),_:1}),n[0]||(n[0]=c(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/constant&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">DARK</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">116.3162548</span><span class="token punctuation">,</span> <span class="token number">36.9017491</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;earthquakes&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;vector&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;mapbox://huanglii.d41k5fmy&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> layerOptions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#0098a3&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#00ca8d&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#37C508&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#98f300&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#efff85&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#0098a3&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#00ca8d&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#37C508&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#98f300&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#efff85&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mag&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment">// 分图层添加</span></span>
<span class="line">  layerOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">earthquakes-layer-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;earthquakes&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;source-layer&#39;</span><span class="token operator">:</span> <span class="token string">&#39;earthquakes-cs3906&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">maxzoom</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> option<span class="token punctuation">.</span>radius<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-color&#39;</span><span class="token operator">:</span> option<span class="token punctuation">.</span>color<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-blur&#39;</span><span class="token operator">:</span> option<span class="token punctuation">.</span>blur<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;circle-opacity&#39;</span><span class="token operator">:</span> option<span class="token punctuation">.</span>opacity<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filter</span><span class="token operator">:</span> option<span class="token punctuation">.</span>filter<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用表达式</span></span>
<span class="line">  <span class="token comment">// map.addLayer({</span></span>
<span class="line">  <span class="token comment">//   &#39;id&#39;: &#39;earthquakes-layer&#39;,</span></span>
<span class="line">  <span class="token comment">//   &#39;type&#39;: &#39;circle&#39;,</span></span>
<span class="line">  <span class="token comment">//   &#39;source&#39;: &#39;earthquakes&#39;,</span></span>
<span class="line">  <span class="token comment">//   &#39;source-layer&#39;: &#39;earthquakes-cs3906&#39;,</span></span>
<span class="line">  <span class="token comment">//   &#39;maxzoom&#39;: 9,</span></span>
<span class="line">  <span class="token comment">//   &#39;paint&#39;: {</span></span>
<span class="line">  <span class="token comment">//     &#39;circle-radius&#39;: 3,</span></span>
<span class="line">  <span class="token comment">//     &#39;circle-color&#39;: [</span></span>
<span class="line">  <span class="token comment">//       &#39;case&#39;,</span></span>
<span class="line">  <span class="token comment">//       [&#39;&lt;=&#39;, [&#39;get&#39;, &#39;mag&#39;], 5], &#39;#0098a3&#39;,</span></span>
<span class="line">  <span class="token comment">//       [&#39;all&#39;, [&#39;&gt;&#39;, [&#39;get&#39;, &#39;mag&#39;], 5], [&#39;&lt;=&#39;, [&#39;get&#39;, &#39;mag&#39;], 6]], &#39;#00ca8d&#39;,</span></span>
<span class="line">  <span class="token comment">//       [&#39;all&#39;, [&#39;&gt;&#39;, [&#39;get&#39;, &#39;mag&#39;], 6], [&#39;&lt;=&#39;, [&#39;get&#39;, &#39;mag&#39;], 7]], &#39;#37C508&#39;,</span></span>
<span class="line">  <span class="token comment">//       [&#39;all&#39;, [&#39;&gt;&#39;, [&#39;get&#39;, &#39;mag&#39;], 7], [&#39;&lt;=&#39;, [&#39;get&#39;, &#39;mag&#39;], 8]], &#39;#98f300&#39;,</span></span>
<span class="line">  <span class="token comment">//       [&#39;&gt;&#39;, [&#39;get&#39;, &#39;mag&#39;], 8], &#39;#EFFF85&#39;,</span></span>
<span class="line">  <span class="token comment">//       &#39;#000&#39;</span></span>
<span class="line">  <span class="token comment">//     ],</span></span>
<span class="line">  <span class="token comment">//     &#39;circle-opacity&#39;: 0.65,</span></span>
<span class="line">  <span class="token comment">//     &#39;circle-blur&#39;: 1,</span></span>
<span class="line">  <span class="token comment">//   }</span></span>
<span class="line">  <span class="token comment">// })</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const d=e(r,[["render",u],["__file","data-circle-scatter.html.vue"]]),v=JSON.parse('{"path":"/example/data-circle-scatter.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1665133772000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/huanglii"},{"name":"黄俐","username":"黄俐","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/黄俐"},{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":1,"url":"https://github.com/huangli"}]},"filePathRelative":"example/data-circle-scatter.md"}');export{d as comp,v as data};