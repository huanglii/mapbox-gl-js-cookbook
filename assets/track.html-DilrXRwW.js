import{_ as i,c,a as p,b as s,d as t,r as l,o}from"./app-COZMOXYE.js";const r={};function u(d,n){const a=l("common-code-view"),e=l("ClientOnly");return o(),c("div",null,[n[0]||(n[0]=p('<h1 id="轨迹" tabindex="-1"><a class="header-anchor" href="#轨迹"><span>轨迹</span></a></h1><h2 id="行车轨迹" tabindex="-1"><a class="header-anchor" href="#行车轨迹"><span>行车轨迹</span></a></h2><p>轨迹线可用前面 <a href="/data/" target="_blank" rel="noopener noreferrer"><strong>数据</strong></a> 章节提到的使用 <code>symbol</code> + <code>line</code> 的方式。</p><p>行车过程的轨迹动画通过不断修改数据源（<code>source.setData()</code>），来达到动画的效果，同时根据两点坐标计算 <code>bearing</code>，来设置“出租车”的姿态。</p>',4)),s(e,null,{default:t(()=>[s(a,{name:"track-car"})]),_:1}),n[1]||(n[1]=p(`<blockquote><p>路径动画：<a href="https://docs.mapbox.com/mapbox-gl-js/example/animate-point-along-route/" target="_blank" rel="noopener noreferrer">Animate a point along a route</a></p></blockquote><h2 id="台风路径" tabindex="-1"><a class="header-anchor" href="#台风路径"><span>台风路径</span></a></h2><p>2019 年第 09 号超强台风利奇马（LEKIMA）路径可视化，数据截止时间：2019/8/9 20:00:00。数据来自“浙江台风路径实时发布系统”，各平台的台风数据格式都大同小异，这里对接口原始数据处理后再做可视化。关键点在于将台风的路径点数据处理成 GeoJSON 数据，使用 <a href="http://turfjs.org/" target="_blank" rel="noopener noreferrer">Turf</a> 库可以方便处理。</p><p>可视化过程中涉及到一些 <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions" target="_blank" rel="noopener noreferrer">表达式(Expressions)</a>和 <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/#other-filter" target="_blank" rel="noopener noreferrer">过滤器(Filters)</a> 。</p><ul><li>从数据属性取值及转换为数字</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;to-number&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>线宽根据缩放级别线性变化</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 缩放级别从 5 变化到 10，线宽从 1 变化到 3 。</span></span>
<span class="line"><span class="token string-property property">&#39;line-width&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;linear&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;zoom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>贝塞尔曲线、数学计算和类型转换</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string-property property">&#39;circle-radius&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&#39;interpolate&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&#39;cubic-bezier&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">0.85</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">0.45</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">0.65</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;zoom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;to-number&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;to-number&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据属性 <code>tm</code> 分级渲染</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string-property property">&#39;line-color&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">&#39;match&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FF4050&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;中国香港&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FF66FF&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;中国台湾&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FFA040&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;日本&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#43FF4B&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;美国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#40DDFF&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&#39;#ff0000&#39;</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据源中集合类型为 <code>LineString</code> 和属性 <code>type</code> 为 <code>track</code> 的数据</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string-property property">&#39;filter&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LineString&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;track&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,14)),s(e,null,{default:t(()=>[s(a,{name:"track-typhoon"})]),_:1})])}const m=i(r,[["render",u],["__file","track.html.vue"]]),v=JSON.parse('{"path":"/advance/track.html","title":"轨迹","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"行车轨迹","slug":"行车轨迹","link":"#行车轨迹","children":[]},{"level":2,"title":"台风路径","slug":"台风路径","link":"#台风路径","children":[]}],"git":{"updatedTime":1643002363000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":1,"url":"https://github.com/huanglii"},{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":6,"url":"https://github.com/huangli"},{"name":"huanglii","username":"huanglii","email":"849151701@qq.com","commits":3,"url":"https://github.com/huanglii"}]},"filePathRelative":"advance/track.md"}');export{m as comp,v as data};