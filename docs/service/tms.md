# TMS

> 标准：[Tile Map Service](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)

Tile Map Service（瓦片地图服务），简称 `TMS`。TMS 的切片坐标系统和组织方式可参考下图：

<div align="center">
  <img :src="$withBase('/assets/images/TMS切片坐标系统和组织方式.png')" width="400" />
</div>
 
Mapbox GL JS 在加载 TMS 服务时，需要设置 [scheme](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector-scheme) 属性为 `tms`。`scheme` 属性影响瓦片坐标 `y` 轴的方向。`scheme` 有两个值可选：`xyz`（默认）和 `tms`。其中 `xyz` 代表常用的切片规则，即 `OGC` 标准，切片源点在左上角。`tms` 是 `OSGeo` 标准，切片源点是左下角。

加载示例：

```js
// 矢量
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
  ],
  'scheme': 'tms'
}
// 栅格
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@png/{z}/{x}/{y}.png'
  ],
  'tileSize': 256,
  'scheme': 'tms'
}
```
