# WMS
> 标准：[Web Map Service](http://www.opengeospatial.org/standards/wms)

Web Map Service（Web 地图服务），简称 `WMS`。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下3个操作：
1. GetCapabilities（获取服务中的要素类及支持的操作）
2. GetMap（获取地图）
3. GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似Identify功能）

利用 `GetMap` 操作和指定地图边框范围（`bbox`）和输出格式（`format`）即可在 Mapbox GL JS 中使用。

加载示例（image/png 格式）：

``` js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://900913.cn/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE'
  ]
}
```

注意url中的 `bbox` 参数值 `"{bbox-epsg-3857}"`。Mapbox GL JS 会自动计算地图范围替换该值，获取地图。这也是与下面WMTS同样用栅格格式，WMS不会模糊的原因。
