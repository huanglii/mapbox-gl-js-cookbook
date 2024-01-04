# 地图服务

1997 年 Allan Doyle 发表了一篇《WWW 制图框架》的论文后，开放地理空间联盟 (Open Geospatial Consortium, OGC) 开始参与网络制图标准的制定。最初流行的网络地图标准是 [Web Map Service, WMS](https://www.ogc.org/standard/wms/)。然而，对于大多数 WMS 服务，响应时间在 1 秒甚至久。对于大规模并行用例，这种服务并不实用。为了克服密集型动态渲染问题，开始使用预渲染的地图瓦片，开发了几种方案来组织和处理这些地图瓦片。早期的规范是瓦片地图服务 ([Tile Map Service, TMS](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification))。它比 [Web Map Tile Service, WMTS](http://www.opengeospatial.org/standards/wmts) 更简单，是由 OSGeo 成员开发的，但没有得到官方标准机构的支持。

![瓦片地图](/assets/images/tile.png)

## [WMS](http://www.opengeospatial.org/standards/wms)

Web Map Service（Web 地图服务），简称 `WMS`。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下 3 个操作：

1. GetCapabilities（获取服务中的要素类及支持的操作）
2. GetMap（获取地图）
3. GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似 Identify 功能）

## [TMS](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)

瓦片地图服务 (Tile Map Service，简称 `TMS`) 是开源空间信息基金会 (Open Source Geospatial Foundation，简称 OSGeo) 定义的瓦片地图服务，与开放地理空间信息联盟 (Open Geospatial Consortium，简称 OGC) 定义的 WMTS(Web Map Tile Service) 有所区别。

## [WMTS](http://www.opengeospatial.org/standards/wmts)

Web 地图瓦片服务 (Web Map Tile Service，简称 `WMTS`)，标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：

1. GetCapabilities（获取服务的元信息）
2. GetTile（获取瓦片）
3. GetFeatureInfo（可选，获取点选的要素信息）

**与 TMS 切片规则不同：**

在 Mapbox GL JS 的 [vector](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector) 和 [raster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) 数据源中有一个 `scheme` 属性。该属性影响瓦片坐标 `y` 轴的方向，有两个值可选：`xyz`（默认）和 `tms`。

| 模式                                                              | 描述                                             | 示意图                          |
| ----------------------------------------------------------------- | ------------------------------------------------ | ------------------------------- |
| [xyz](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)   | `OGC` 标准，最常用的切片规则，切片源点在左上角。 | ![xyz](/assets/images/wmts.png) |
| [tms](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) | `OSGeo` 标准，切片源点是左下角。                 | ![tms](/assets/images/tms.png)  |

::: tip 参考

1. [The difference between XYZ and TMS tiles and how to convert between them]()
   :::

<!-- ## [WFS](http://www.opengeospatial.org/standards/wfs)

Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：

1. GetCapabilities（获取服务中的要素类及支持的操作）
2. DescribeFeatureType（描述要素类的信息）
3. GetFeature（获取要素）
4. Transaction（创建、更新、删除数据的事务操作） -->
