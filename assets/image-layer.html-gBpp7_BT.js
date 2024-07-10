import{_ as i,r as t,o as r,c as u,a,b as n,d as s,w as m,e as o}from"./app-WXFCxs9o.js";const d={},k=a("h1",{id:"imagelayer",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#imagelayer","aria-hidden":"true"},"#"),n(" ImageLayer")],-1),v={href:"https://www.npmjs.com/package/@naivemap/mapbox-gl-image-layer",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitlab.com/IvanSanchez/arrugator",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/proj4js/proj4js",target:"_blank",rel:"noopener noreferrer"},_=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @naivemap/mapbox-gl-image-layer proj4
<span class="token comment"># 或 npm</span>
<span class="token function">npm</span> i @naivemap/mapbox-gl-image-layer proj4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=a("code",null,"EPSG:4326",-1),y=["href"],f=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ImageLayer <span class="token keyword">from</span> <span class="token string">&#39;@naivemap/mapbox-gl-image-layer&#39;</span>

<span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageLayer</span><span class="token punctuation">(</span><span class="token string">&#39;layer-4326&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/images/4326.png&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">coordinates</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">105.289838</span><span class="token punctuation">,</span> <span class="token number">32.204171</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// top-left</span>
    <span class="token punctuation">[</span><span class="token number">110.195632</span><span class="token punctuation">,</span> <span class="token number">32.204171</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// top-right</span>
    <span class="token punctuation">[</span><span class="token number">110.195632</span><span class="token punctuation">,</span> <span class="token number">28.164713</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// bottom-right</span>
    <span class="token punctuation">[</span><span class="token number">105.289838</span><span class="token punctuation">,</span> <span class="token number">28.164713</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// bottom-left</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> <span class="token string">&#39;aeroway-line&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={href:"https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md",target:"_blank",rel:"noopener noreferrer"};function w(p,j){const e=t("ExternalLinkIcon"),l=t("common-code-view"),c=t("ClientOnly");return r(),u("div",null,[k,a("p",null,[a("a",v,[n("@naivemap/mapbox-gl-image-layer"),s(e)]),n(" 可以加载任意投影的图片，该插件使用了 "),a("a",b,[n("Arrugator"),s(e)]),n(" 和 "),a("a",g,[n("Proj4js"),s(e)]),n(" 工具对图片重新投影，使其正确叠加到地图。")]),_,a("p",null,[n("例如有一张坐标系为 "),h,n(" 的 "),a("a",{href:p.$withBase("/assets/images/4326.png"),target:"_blank"},"图片",8,y),n(" 要叠加到地图，如下：")]),f,s(c,null,{default:m(()=>[s(l,{name:"plugins-image-layer"})]),_:1}),a("blockquote",null,[a("p",null,[n("更多参数（如透明度、掩膜）和方法请查看 "),a("a",x,[n("ImageLayer API"),s(e)])])])])}const L=i(d,[["render",w],["__file","image-layer.html.vue"]]);export{L as default};
