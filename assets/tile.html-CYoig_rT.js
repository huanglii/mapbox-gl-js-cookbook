import{_ as a,c as n,a as e,o as t}from"./app-Oi8ZZMZx.js";const p={};function o(l,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="瓦片数据源" tabindex="-1"><a class="header-anchor" href="#瓦片数据源"><span>瓦片数据源</span></a></h1><p>瓦片数据源（vector 和 raster）必须根据 <a href="https://github.com/mapbox/tilejson-spec" target="_blank" rel="noopener noreferrer">TileJSON</a> 规范指定其详细信息。有 2 种方式：</p><ol><li>直接在数据源中提供 TileJSON 属性，例如：<code>tiles</code>、<code>minzoom</code> 和 <code>maxzoom</code>：</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 矢量瓦片数据源</span></span>
<span class="line">  <span class="token property">&quot;mapbox-streets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vector&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;tiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://a.naivemap.com/tiles/{z}/{x}/{y}.pbf&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://b.naivemap.com/tiles/{z}/{x}/{y}.pbf&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 栅格瓦片数据源</span></span>
<span class="line">  <span class="token property">&quot;tdt_vec_w&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;raster&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;tiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;http://t0.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk={天地图 key}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;http://t1.tianditu.com/DataServer?T=vec_w&amp;x={x}&amp;y={y}&amp;l={z}&amp;tk={天地图 key}&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;tileSize&quot;</span><span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;maxzoom&quot;</span><span class="token operator">:</span> <span class="token number">18</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过 <code>url</code> 指定 TileJSON 源：</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;mapbox-streets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vector&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://naivemap.com/tilejson.json&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector"><span><a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector" target="_blank" rel="noopener noreferrer">vector</a></span></a></h2><p>矢量瓦片数据源，瓦片必须是 <a href="https://docs.mapbox.com/vector-tiles/" target="_blank" rel="noopener noreferrer">Mapbox Vector Tile</a> 格式。使用 <code>vector</code> 数据源的图层必须指定 <code>source-layer</code> 。</p><h2 id="raster" tabindex="-1"><a class="header-anchor" href="#raster"><span><a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster" target="_blank" rel="noopener noreferrer">raster</a></span></a></h2><p>栅格瓦片数据源。</p><h2 id="raster-dem" tabindex="-1"><a class="header-anchor" href="#raster-dem"><span><a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster-dem" target="_blank" rel="noopener noreferrer">raster-dem</a></span></a></h2><p>栅格 DEM 数据源，只支持 <a href="https://blog.mapbox.com/global-elevation-data-6689f1d0ba65" target="_blank" rel="noopener noreferrer">Mapbox Terrain RGB</a>，可使用 <a href="https://github.com/mapbox/rio-rgbify" target="_blank" rel="noopener noreferrer">rio-rgbify</a> 生成。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># fill no data</span></span>
<span class="line">gdalwarp <span class="token parameter variable">-t_srs</span> EPSG:3857 <span class="token parameter variable">-dstnodata</span> None <span class="token parameter variable">-co</span> <span class="token assign-left variable">TILED</span><span class="token operator">=</span>YES <span class="token parameter variable">-co</span> <span class="token assign-left variable">COMPRESS</span><span class="token operator">=</span>DEFLATE <span class="token parameter variable">-co</span> <span class="token assign-left variable">BIGTIFF</span><span class="token operator">=</span>IF_NEEDED E:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>chongqing.tif  E:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>chongqing_without_nodata.tif</span>
<span class="line"></span>
<span class="line"><span class="token comment"># conver to rgb</span></span>
<span class="line">rio rgbify <span class="token parameter variable">-b</span> <span class="token parameter variable">-10000</span> <span class="token parameter variable">-i</span> <span class="token number">0.1</span> E:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>chongqing_without_nodata.tif E:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>chongqing_rgb.tif</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const i=a(p,[["render",o],["__file","tile.html.vue"]]),c=JSON.parse('{"path":"/style-spec/sources/tile.html","title":"瓦片数据源","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"vector","slug":"vector","link":"#vector","children":[]},{"level":2,"title":"raster","slug":"raster","link":"#raster","children":[]},{"level":2,"title":"raster-dem","slug":"raster-dem","link":"#raster-dem","children":[]}],"git":{"updatedTime":1684246396000,"contributors":[{"name":"huanglii","username":"huanglii","email":"naivemap@163.com","commits":1,"url":"https://github.com/huanglii"}]},"filePathRelative":"style-spec/sources/tile.md"}');export{i as comp,c as data};
