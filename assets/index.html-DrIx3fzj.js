import{_ as a,c as t,a as i,o as r}from"./app-DUPhFMc-.js";const o="/mapbox-gl-js-cookbook/assets/images/tile.png",s="/mapbox-gl-js-cookbook/assets/images/wmts.png",l="/mapbox-gl-js-cookbook/assets/images/tms.png",n={};function c(d,e){return r(),t("div",null,e[0]||(e[0]=[i('<h1 id="地图服务" tabindex="-1"><a class="header-anchor" href="#地图服务"><span>地图服务</span></a></h1><p>1997 年 Allan Doyle 发表了一篇《WWW 制图框架》的论文后，开放地理空间联盟 (Open Geospatial Consortium, OGC) 开始参与网络制图标准的制定。最初流行的网络地图标准是 <a href="https://www.ogc.org/standard/wms/" target="_blank" rel="noopener noreferrer">Web Map Service, WMS</a>。然而，对于大多数 WMS 服务，响应时间在 1 秒甚至久。对于大规模并行用例，这种服务并不实用。为了克服密集型动态渲染问题，开始使用预渲染的地图瓦片，开发了几种方案来组织和处理这些地图瓦片。早期的规范是瓦片地图服务 (<a href="https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification" target="_blank" rel="noopener noreferrer">Tile Map Service, TMS</a>)。它比 <a href="http://www.opengeospatial.org/standards/wmts" target="_blank" rel="noopener noreferrer">Web Map Tile Service, WMTS</a> 更简单，是由 OSGeo 成员开发的，但没有得到官方标准机构的支持。</p><p><img src="'+o+'" alt="瓦片地图"></p><h2 id="wms" tabindex="-1"><a class="header-anchor" href="#wms"><span><a href="http://www.opengeospatial.org/standards/wms" target="_blank" rel="noopener noreferrer">WMS</a></span></a></h2><p>Web Map Service（Web 地图服务），简称 <code>WMS</code>。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下 3 个操作：</p><ol><li>GetCapabilities（获取服务中的要素类及支持的操作）</li><li>GetMap（获取地图）</li><li>GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似 Identify 功能）</li></ol><h2 id="tms" tabindex="-1"><a class="header-anchor" href="#tms"><span><a href="https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification" target="_blank" rel="noopener noreferrer">TMS</a></span></a></h2><p>瓦片地图服务 (Tile Map Service，简称 <code>TMS</code>) 是开源空间信息基金会 (Open Source Geospatial Foundation，简称 OSGeo) 定义的瓦片地图服务，与开放地理空间信息联盟 (Open Geospatial Consortium，简称 OGC) 定义的 WMTS(Web Map Tile Service) 有所区别。</p><h2 id="wmts" tabindex="-1"><a class="header-anchor" href="#wmts"><span><a href="http://www.opengeospatial.org/standards/wmts" target="_blank" rel="noopener noreferrer">WMTS</a></span></a></h2><p>Web 地图瓦片服务 (Web Map Tile Service，简称 <code>WMTS</code>)，标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：</p><ol><li>GetCapabilities（获取服务的元信息）</li><li>GetTile（获取瓦片）</li><li>GetFeatureInfo（可选，获取点选的要素信息）</li></ol><p><strong>与 TMS 切片规则不同：</strong></p><p>在 Mapbox GL JS 的 <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector" target="_blank" rel="noopener noreferrer">vector</a> 和 <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster" target="_blank" rel="noopener noreferrer">raster</a> 数据源中有一个 <code>scheme</code> 属性。该属性影响瓦片坐标 <code>y</code> 轴的方向，有两个值可选：<code>xyz</code>（默认）和 <code>tms</code>。</p><table><thead><tr><th>模式</th><th>描述</th><th>示意图</th></tr></thead><tbody><tr><td><a href="https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames" target="_blank" rel="noopener noreferrer">xyz</a></td><td><code>OGC</code> 标准，最常用的切片规则，切片源点在左上角。</td><td><img src="'+s+'" alt="xyz"></td></tr><tr><td><a href="https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification" target="_blank" rel="noopener noreferrer">tms</a></td><td><code>OSGeo</code> 标准，切片源点是左下角。</td><td><img src="'+l+'" alt="tms"></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">参考</p><ol><li><a href="">The difference between XYZ and TMS tiles and how to convert between them</a></li></ol></div>',15)]))}const h=a(n,[["render",c]]),m=JSON.parse('{"path":"/starter/service/","title":"地图服务","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"WMS","slug":"wms","link":"#wms","children":[]},{"level":2,"title":"TMS","slug":"tms","link":"#tms","children":[]},{"level":2,"title":"WMTS","slug":"wmts","link":"#wmts","children":[]}],"git":{"updatedTime":1704370813000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":9,"url":"https://github.com/huanglii"}],"changelog":[{"hash":"02fb66c82f43677394acecb14a5590ad4f56c326","time":1704370813000,"email":"naivemap@163.com","author":"huanglii","message":"Update README.md"},{"hash":"40c0b4b2263b6d26909358123dd91767caefd2e1","time":1704286926000,"email":"naivemap@163.com","author":"huanglii","message":"Update"},{"hash":"cd1458ef0034dbdcae98a122b500feec5abf3856","time":1701952680000,"email":"naivemap@163.com","author":"huanglii","message":"Update"},{"hash":"6d1566a6d4ee4c63150d9832c4fdee9f3203eabe","time":1664509085000,"email":"li.huangli@qq.com","author":"huanglii","message":"update doc"},{"hash":"2f0e778fe376a322f5f9baef5cfd6ea341b23915","time":1662559868000,"email":"li.huangli@qq.com","author":"huanglii","message":"update package"},{"hash":"5d1709fb0c40263c93857617ae8b062b4e8a37af","time":1656566289000,"email":"li.huangli@qq.com","author":"huanglii","message":"update config"},{"hash":"fc143e6da595f0bba1ce1228c0b06371de5efb1b","time":1656515322000,"email":"li.huangli@qq.com","author":"huanglii","message":"update sprite"},{"hash":"36cd290078190d33032afdd64b8b3fd7e20dc6ad","time":1652281537000,"email":"li.huangli@qq.com","author":"huanglii","message":"update docs"},{"hash":"283f855dd4c4d7afdc32626b87dcad37146f7555","time":1643000286000,"email":"li.huangli@qq.com","author":"huanglii","message":"build: 更新 package.json"}]},"filePathRelative":"starter/service/README.md"}');export{h as comp,m as data};
