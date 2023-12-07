# 地图服务

在 Mapbox GL JS 的 [vector](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector) 和 [raster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) 数据源中有一个 `scheme` 属性。该属性影响瓦片坐标 `y` 轴的方向，有两个值可选：`xyz`（默认）和 `tms`。

| 模式                                                              | 描述                                             | 示意图                          |
| ----------------------------------------------------------------- | ------------------------------------------------ | ------------------------------- |
| [xyz](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames)   | `OGC` 标准，最常用的切片规则，切片源点在左上角。 | ![xyz](/assets/images/wmts.png) |
| [tms](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) | `OSGeo` 标准，切片源点是左下角。                 | ![tms](/assets/images/tms.png)  |

> 参考：[The difference between XYZ and TMS tiles and how to convert between them]()
