import{_ as e,c as l,b as s,d as o,a as c,r as a,o as i}from"./app-COZMOXYE.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),l("div",null,[s(t,null,{default:o(()=>[s(p,{name:"starter-tutorials-highlight-1","is-code-view":!1})]),_:1}),n[0]||(n[0]=c(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../../base-map.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">100.486052</span><span class="token punctuation">,</span> <span class="token number">37.830348</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;states&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;geojson&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 普通图层</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;state-fills&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;states&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#627BC1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 高亮图层</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;state-fills-highlight&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;states&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#627BC1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-opacity&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 高亮图层的透明度与原图层</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STATE_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;999&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 默认不显示任何要素</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 鼠标移入 state-fill 图层时，根据要素属性设置 state-fills-highlight 图层的 filter</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;state-fills&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>features <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>properties<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      map<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token string">&#39;state-fills-highlight&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STATE_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>features<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>properties<span class="token punctuation">[</span><span class="token string">&#39;STATE_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      map<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token string">&#39;state-fills-highlight&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STATE_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;999&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 鼠标移出 state-fill 图层时，过滤掉所有要素</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;state-fills&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    map<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token string">&#39;state-fills-highlight&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STATE_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;999&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r],["__file","starter-tutorials-highlight-1.html.vue"]]),v=JSON.parse('{"path":"/example/starter-tutorials-highlight-1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1666690166000,"contributors":[{"name":"huanglii","username":"huanglii","email":"naivemap@163.com","commits":1,"url":"https://github.com/huanglii"},{"name":"yangjiao","username":"yangjiao","email":"","commits":1,"url":"https://github.com/yangjiao"}]},"filePathRelative":"example/starter-tutorials-highlight-1.md"}');export{m as comp,v as data};