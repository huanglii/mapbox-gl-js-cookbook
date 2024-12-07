import{_ as l,c,a as t,b as s,d as p,r as o,o as i}from"./app-Oi8ZZMZx.js";const r={};function u(d,n){const a=o("common-code-view"),e=o("ClientOnly");return i(),c("div",null,[n[0]||(n[0]=t(`<h1 id="控件" tabindex="-1"><a class="header-anchor" href="#控件"><span>控件</span></a></h1><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位"><span>定位</span></a></h2><p><a href="https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol" target="_blank" rel="noopener noreferrer">GeolocateControl</a> 提供一个按钮，该按钮使用浏览器的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation" target="_blank" rel="noopener noreferrer">Geolocation API</a> 在地图上定位用户。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>GeolocateControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="全屏" tabindex="-1"><a class="header-anchor" href="#全屏"><span>全屏</span></a></h2><p><a href="https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol" target="_blank" rel="noopener noreferrer">FullscreenControl</a> 可以切换地图的全屏模式。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>FullscreenControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="导航" tabindex="-1"><a class="header-anchor" href="#导航"><span>导航</span></a></h2><p><a href="https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol" target="_blank" rel="noopener noreferrer">NavigationControl</a> 包含缩放和指南针。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>NavigationControl</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">visualizePitch</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="比例尺" tabindex="-1"><a class="header-anchor" href="#比例尺"><span>比例尺</span></a></h2><p><a href="https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol" target="_blank" rel="noopener noreferrer">ScaleControl</a> 显示地图上的距离与地面上相应距离的比率。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">mapboxgl<span class="token punctuation">.</span>ScaleControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,13)),s(e,null,{default:p(()=>[s(a,{name:"starter-handlers-control","is-code-view":!1})]),_:1}),n[1]||(n[1]=t(`<h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义"><span>自定义</span></a></h2><p>Mapbox GL JS 提供了 <strong><code>IControl</code></strong> 接口。自定义控件必须实现 <strong><code>onAdd</code></strong> 和 <strong><code>onRemove</code></strong> 方法，并且有一个 HTML 元素，通常为 <code>div</code> 元素。如果要使用 Mapbox GL JS 默认控件样式，需要给元素添加 <strong><code>mapboxgl-ctrl</code></strong> 样式。</p><h3 id="官方示例" tabindex="-1"><a class="header-anchor" href="#官方示例"><span>官方示例</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// es6 类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">HelloWorldControl</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onAdd</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_map <span class="token operator">=</span> map</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;mapboxgl-ctrl&#39;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello, world&#39;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_container</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_map <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// es5 原型类</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">HelloWorldControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">HelloWorldControl</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onAdd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_map <span class="token operator">=</span> map</span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;mapboxgl-ctrl&#39;</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello, world&#39;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_container</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">HelloWorldControl</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onRemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_map <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="城市选择器" tabindex="-1"><a class="header-anchor" href="#城市选择器"><span>城市选择器</span></a></h3><p>一个快速定位城市的控件。GitHub 地址：<a href="https://github.com/huanglii/city-selector-control" target="_blank" rel="noopener noreferrer">城市选择器</a></p>`,6)),s(e,null,{default:p(()=>[s(a,{name:"starter-handlers-city-selector","is-code-view":!1})]),_:1})])}const m=l(r,[["render",u],["__file","control.html.vue"]]),h=JSON.parse('{"path":"/starter/handlers/control.html","title":"控件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"定位","slug":"定位","link":"#定位","children":[]},{"level":2,"title":"全屏","slug":"全屏","link":"#全屏","children":[]},{"level":2,"title":"导航","slug":"导航","link":"#导航","children":[]},{"level":2,"title":"比例尺","slug":"比例尺","link":"#比例尺","children":[]},{"level":2,"title":"自定义","slug":"自定义","link":"#自定义","children":[{"level":3,"title":"官方示例","slug":"官方示例","link":"#官方示例","children":[]},{"level":3,"title":"城市选择器","slug":"城市选择器","link":"#城市选择器","children":[]}]}],"git":{"updatedTime":1676208543000,"contributors":[{"name":"huangli","username":"huangli","email":"naivemap@163.com","commits":1,"url":"https://github.com/huangli"},{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":3,"url":"https://github.com/huanglii"},{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":3,"url":"https://github.com/huangli"},{"name":"huanglii","username":"huanglii","email":"849151701@qq.com","commits":1,"url":"https://github.com/huanglii"}]},"filePathRelative":"starter/handlers/control.md"}');export{m as comp,h as data};
