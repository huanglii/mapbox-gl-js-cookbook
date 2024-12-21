import{_ as e,c as l,b as s,d as c,a as o,r as a,o as i}from"./app-COZMOXYE.js";const u={};function r(k,n){const p=a("common-code-view"),t=a("ClientOnly");return i(),l("div",null,[s(t,null,{default:c(()=>[s(p,{name:"thematic-unique","is-code-view":!1})]),_:1}),n[0]||(n[0]=o(`<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-map</span> <span class="token attr-name">:map-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@load</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMapLoaded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>legend custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>legend-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFilter()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>全部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in legends<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>legend-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFilter(item[0])<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ backgroundColor: item[1] }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item[0] }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-map</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/constant&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">SATELLITE</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">124.879014</span><span class="token punctuation">,</span> <span class="token number">47.816</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">15.2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">legends</span><span class="token operator">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> string<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#FFD273&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;#E86D68&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;#A880FF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;#68E0E8&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;#9BFF69&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  map <span class="token operator">=</span> e</span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addSource</span><span class="token punctuation">(</span><span class="token string">&#39;land&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;geojson&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">withBase</span><span class="token punctuation">(</span><span class="token string">&#39;/data/land.geojson&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;unique-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;land&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-color&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">&#39;match&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#FFD273&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#E86D68&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#A880FF&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#68E0E8&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#9BFF69&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// &#39;fill-color&#39;: {</span></span>
<span class="line">      <span class="token comment">//   property: &#39;type&#39;,</span></span>
<span class="line">      <span class="token comment">//   type: &#39;categorical&#39;,</span></span>
<span class="line">      <span class="token comment">//   stops: [</span></span>
<span class="line">      <span class="token comment">//     [1, &#39;#FFD273&#39;],</span></span>
<span class="line">      <span class="token comment">//     [2, &#39;#E86D68&#39;],</span></span>
<span class="line">      <span class="token comment">//     [3, &#39;#A880FF&#39;],</span></span>
<span class="line">      <span class="token comment">//     [4, &#39;#68E0E8&#39;],</span></span>
<span class="line">      <span class="token comment">//     [5, &#39;#9BFF69&#39;],</span></span>
<span class="line">      <span class="token comment">//   ],</span></span>
<span class="line">      <span class="token comment">// },</span></span>
<span class="line">      <span class="token string-property property">&#39;fill-opacity&#39;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;unique-outline-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;land&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">paint</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;line-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#FFF&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;line-width&#39;</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">setFilter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">?</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> filter <span class="token operator">=</span> value <span class="token operator">?</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token string">&#39;unique-layer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>filter<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=e(u,[["render",r],["__file","thematic-unique.html.vue"]]),v=JSON.parse('{"path":"/example/thematic-unique.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1669447413000,"contributors":[{"name":"huangli","username":"huangli","email":"naivemap@163.com","commits":1,"url":"https://github.com/huangli"},{"name":"黄俐","username":"黄俐","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/黄俐"},{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":1,"url":"https://github.com/huangli"}]},"filePathRelative":"example/thematic-unique.md"}');export{m as comp,v as data};