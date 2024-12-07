import{_ as e,c as o,b as n,d as l,a as c,r as a,o as i}from"./app-Oi8ZZMZx.js";const r={};function u(k,s){const p=a("common-code-view"),t=a("ClientOnly");return i(),o("div",null,[n(t,null,{default:l(()=>[n(p,{name:"deckgl-grid-layer","is-code-view":!1})]),_:1}),s[0]||(s[0]=c(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>base<span class="token operator">-</span>map <span class="token operator">:</span>map<span class="token operator">-</span>clickable<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token operator">:</span>map<span class="token operator">-</span>options<span class="token operator">=</span><span class="token string">&quot;mapOptions&quot;</span> @load<span class="token operator">=</span><span class="token string">&quot;handleMapLoaded&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;grid-layer-tooltip&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tooltip&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>base<span class="token operator">-</span>map<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> BaseMap <span class="token keyword">from</span> <span class="token string">&#39;../base-map.vue&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MapboxLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@deck.gl/mapbox&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> GridLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@deck.gl/aggregation-layers&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STYLE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../utils/constant&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token literal-property property">mapOptions</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>mapboxgl<span class="token punctuation">.</span>MapboxOptions<span class="token punctuation">,</span> <span class="token string">&#39;container&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token constant">STYLE</span><span class="token punctuation">.</span><span class="token constant">DARK</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">122.441107</span><span class="token punctuation">,</span> <span class="token number">37.755579</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">11.4</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">antialias</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleMapLoaded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">map</span><span class="token operator">:</span> mapboxgl<span class="token punctuation">.</span>Map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MapboxLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;grid-layer&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> GridLayer<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">withBase</span><span class="token punctuation">(</span><span class="token string">&#39;/data/sf-bike-parking.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pickable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">extruded</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">cellSize</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">elevationScale</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getPosition</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> d<span class="token punctuation">.</span><span class="token constant">COORDINATES</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">onHover</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> $tooltip <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;grid-layer-tooltip&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        $tooltip<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info<span class="token punctuation">.</span>object<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\nCount: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info<span class="token punctuation">.</span>object<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">        $tooltip<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span></span>
<span class="line">        $tooltip<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> info<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span></span>
<span class="line">        $tooltip<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> info<span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        $tooltip<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">.</span>tooltip <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5em <span class="token number">0</span><span class="token punctuation">.</span>75em<span class="token punctuation">;</span></span>
<span class="line">  background<span class="token operator">-</span>color<span class="token operator">:</span> #09101d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  border<span class="token operator">-</span>radius<span class="token operator">:</span> 10em<span class="token punctuation">;</span></span>
<span class="line">  white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  pointer<span class="token operator">-</span>events<span class="token operator">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const v=e(r,[["render",u],["__file","deckgl-grid-layer.html.vue"]]),m=JSON.parse('{"path":"/example/deckgl-grid-layer.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1652255183000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":2,"url":"https://github.com/huanglii"}]},"filePathRelative":"example/deckgl-grid-layer.md"}');export{v as comp,m as data};
