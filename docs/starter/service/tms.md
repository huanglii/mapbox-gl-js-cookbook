# TMS

> 标准：[Tile Map Service](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)

Tile Map Service（瓦片地图服务），简称 `TMS`。

```js{7,16}
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
