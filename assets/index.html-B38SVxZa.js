import{_ as a,c as e,a as r,o as l}from"./app-COZMOXYE.js";const i="/mapbox-gl-js-cookbook/assets/images/mapbox_gl_layer.png",n={};function h(o,t){return l(),e("div",null,t[0]||(t[0]=[r('<h1 id="空间数据" tabindex="-1"><a class="header-anchor" href="#空间数据"><span>空间数据</span></a></h1><p>本章以 Mapbox 样式规范（<a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/" target="_blank" rel="noopener noreferrer">Style Specification</a>）中的图层类型为基础，介绍常用空间数据在 Mapbox GL JS 中如何可视化与交互。</p><h2 id="矢量数据" tabindex="-1"><a class="header-anchor" href="#矢量数据"><span>矢量数据</span></a></h2><p>矢量数据以点、线、面表示，在 Mapbox GL JS 中常见的数据格式有：GeoJSON、矢量瓦片。</p><h2 id="栅格数据" tabindex="-1"><a class="header-anchor" href="#栅格数据"><span>栅格数据</span></a></h2><p>栅格数据以二维矩阵的形式表示，每个矩阵单位称为一个栅格单元（cell），栅格的每个数据表示地物或现象的属性数据。在 Mapbox GL JS 中常见的数据格式有：图片（PNG, JPG 等）、栅格瓦片。</p><h2 id="图层类型" tabindex="-1"><a class="header-anchor" href="#图层类型"><span>图层类型</span></a></h2><p>下图展示了空间数据与 Mapbox GL JS 中的各图层类型的对应关系：</p><p><img src="'+i+'" alt="mapbox_gl_layer"></p><table><thead><tr><th></th><th>优点</th><th>缺点</th><th>特点</th></tr></thead><tbody><tr><td>矢量</td><td>1. 便于面向现象（土壤类，土地利用单元等）<br>2. 结构紧凑，冗余度低，便于描述线或边界。<br>3.利于网络、检索分析，提供有效的拓扑编码，对需要拓扑信息的操作更有效。<br>4.图形显示质量好，精度高。</td><td>1. 数据结构复杂，各自定义，不便于数据标准化和规范化，数据交换困难。<br>2. 多边形叠置分析困难，没有栅格有效，表达空间变化性能力差。<br>3. 不能像数字图像那样做增强处理<br>4. 软硬件技术要求高，显示与绘图成本较高。</td><td>位置明显，属性隐含</td></tr><tr><td>栅格</td><td>1. 结构简单，易于数据交换。<br>2. 叠置分析和地理（能有效表达空间可变性）现象模拟较易。<br>3. 利于与遥感数据的匹配应用和分析，便于图像处理。<br>4. 输出快速，成本低廉。</td><td>1. 现象识别效果不如矢量方法，难以表达拓扑。<br>2. 图形数据量大，数据结构不严密不紧凑，需用压缩技术解决该问题。<br>3. 投影转换困难。<br>4. 图形质量转低，图形输出不美观，线条有锯齿，需用增加栅格数量来克服，但会增加数据文件。</td><td>属性明显，位置隐含</td></tr></tbody></table>',10)]))}const d=a(n,[["render",h],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/data/","title":"空间数据","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"矢量数据","slug":"矢量数据","link":"#矢量数据","children":[]},{"level":2,"title":"栅格数据","slug":"栅格数据","link":"#栅格数据","children":[]},{"level":2,"title":"图层类型","slug":"图层类型","link":"#图层类型","children":[]}],"git":{"updatedTime":1664509085000,"contributors":[{"name":"huanglii","username":"huanglii","email":"li.huangli@qq.com","commits":3,"url":"https://github.com/huanglii"},{"name":"黄俐","username":"黄俐","email":"li.huangli@qq.com","commits":3,"url":"https://github.com/黄俐"},{"name":"huanglii","username":"huanglii","email":"849151701@qq.com","commits":2,"url":"https://github.com/huanglii"},{"name":"huangli","username":"huangli","email":"849151701@qq.com","commits":3,"url":"https://github.com/huangli"}]},"filePathRelative":"data/README.md"}');export{d as comp,m as data};