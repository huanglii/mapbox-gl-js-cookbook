# 服务
::: tip
[开放地理信息联盟（Open GeoSpatial Consortium，OGC）](http://www.opengeospatial.org/)
:::

::: tip
[开源空间信息基金会（Open Source Geospatial Foundation，OSGeo）]()
:::

这里以 `GeoServer` 服务为例，对常见服务标准简要说明以及如何在 `Mapbox GL JS` 中使用。

Geoserver 2.15.1 版本提供的默认服务能力有：
* TMS（1.0.0）
* WMS（1.1.1、1.3.0）
* WMTS（1.0.0）
* WFS（1.0.0、1.1.0、2.0.0）
* WCS（2.0.1、1.1.0、1.1.1、1.1、1.0.0）
* WMS-C（1.1.1）

## TMS
> 标准：[Tile Map Service](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)

Tile Map Service（瓦片地图服务），简称 `TMS`。

TMS 的切片坐标系统和组织方式可参考下图：
<div align="center">
  <img :src="$withBase('/assets/images/TMS切片坐标系统和组织方式.png')" width="400" />
</div>
 
Mapbox GL JS 在加载 TMS 服务时，需要设置 `scheme` 属性为 `tms`。`scheme` 属性影像瓦片坐标 `y` 轴的方向。有两个值可选 `xyz` 和 `tms`，默认 `xyz`。
其中 `xyz` 代表常用的切片规则，即 `OGC` 标准，切片源点在左上角。`tms` 是 `OSGeo` 标准，切片源点是左下角。

加载示例：

``` js
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
  ],
  'scheme': 'tms'
}
 ```

<!-- <ClientOnly>
  <common-code-view name="service-tms"/>
</ClientOnly> -->

## WMS
> 标准：[Web Map Service](http://www.opengeospatial.org/standards/wms)

Web Map Service（Web 地图服务），简称 `WMS`。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下 3 个操作：
1. GetCapabilities（获取服务中的要素类及支持的操作）
2. GetMap（获取地图）
3. GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似Identify功能）

利用 `GetMap` 操作和指定地图边框范围和输出格式即可在 Mapbox GL JS 中使用。GeoServer WMS 1.3.0 支持的输出格式如下：
* image/png
* application/atom+xml
* application/json;type=geojson
* application/json;type=topojson
* application/json;type=utfgrid
* application/pdf
* application/rss+xml
* application/vnd.google-earth.kml+xml
* application/vnd.google-earth.kml+xml;mode=networklink
* application/vnd.google-earth.kmz
* application/vnd.mapbox-vector-tile
* image/geotiff
* image/geotiff8
* image/gif
* image/jpeg
* image/png; mode=8bit
* image/svg+xml
* image/tiff
* image/tiff8
* image/vnd.jpeg-png
* image/vnd.jpeg-png8
* text/html; subtype=openlayers
* text/html; subtype=openlayers2
* text/html; subtype=openlayers3

加载示例（image/png 格式）：

``` js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://900913.cn/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE'
  ]
}
```

注意 url 中的 `bbox` 参数值 `"{bbox-epsg-3857}"`。Mapbox GL JS 会自动计算地图范围替换该值，获取地图。这也是与下面 WMTS 同样用栅格格式，WMS 不会模糊的原因。

<!-- <ClientOnly>
  <common-code-view name="service-wms"/>
</ClientOnly> -->

## WMTS
> 标准：[Web Map Tile Service](http://www.opengeospatial.org/standards/wmts)

Web Map Tile Service（Web 地图瓦片服务），简称 `WMTS`。WMTS 标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：
1. GetCapabilities（获取服务的元信息）
2. GetTile（获取切片）
3. GetFeatureInfo（可选，获取点选的要素信息） 

WMTS 的切片坐标系统和组织方式可参考下图：
<div align="center">
  <img :src="$withBase('/assets/images/WMTS切片坐标系统和组织方式.png')" />
</div>

利用 `GetTile` 操作和指定输出格式即可在 Mapbox GL JS 中使用。GeoServer WMTS 1.0.0 支持的输出格式如下：
* application/vnd.mapbox-vector-tile
* application/json;type=utfgrid
* image/png
* application/json;type=geojson
* application/json;type=topojson

加载示例（image/png 格式）：

``` js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:Chongqing&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}'
    // 或 geoserver rest 服务
    // 'https://900913.cn/geoserver/gwc/service/wmts/rest/buildings:Chongqing/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png'
  ]
}
```

加载示例（application/vnd.mapbox-vector-tile 格式）

``` js
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:cq_point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
  ]
}
```

从效果上看，矢量格式（建筑轮廓）的效果明显比栅格格式（点）好，栅格有明显的模糊了，但是实际 WMTS 请求返回的图片格式是清晰的。模糊的原因是 Mapbox GL JS 的缩放是无极缩放，也就是 `zoom` 可以是小数，而 WMTS 的 `z` 值是整数，在渲染过程中有缩放，所以模糊了。

这里也建议在使用 Mapbox GL JS 的时候能使用矢量就尽量用矢量格式。

<!-- <ClientOnly>
  <common-code-view name="service-wmts"/>
</ClientOnly> -->

## WFS
> 标准：[Web Feature Service](http://www.opengeospatial.org/standards/wfs)

Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：
1. GetCapabilities（获取服务中的要素类及支持的操作）
2. DescribeFeatureType（描述要素类的信息）
3. GetFeature（获取要素）
4. Transaction（创建、更新、删除数据的事务操作）

利用 `GetFeature` 操作和指定输出格式即可在 Mapbox GL JS 中使用。GeoServer WFS 2.0.0 支持的输出格式如下：
* application/gml+xml; version=3.2
* GML2
* KML
* SHAPE-ZIP
* application/json
* application/vnd.google-earth.kml xml
* application/vnd.google-earth.kml+xml
* csv
* gml3
* gml32
* json
* text/xml; subtype=gml/2.1.2
* text/xml; subtype=gml/3.1.1
* text/xml; subtype=gml/3.2

::: tip 提示
注意不同版本支持的输出格式也不一样，可通过 `GetCapabilities` 操作查看，如：[http://900913.cn/geoserver/ows?service=wfs&version=2.0.0&request=GetCapabilities](http://900913.cn/geoserver/ows?service=wfs&version=2.0.0&request=GetCapabilities)
:::

加载示例（application/json 格式）：

``` js
'source-id': {
  'type': 'geojson',
  'data': `https://900913.cn/geoserver/buildings/ows
              ?service=WFS
              &version=2.0.0
              &request=GetFeature
              &typeName=buildings:cq_point
              &outputFormat=application/json`
}
```

<!-- <ClientOnly>
  <common-code-view name="service-wfs"/>
</ClientOnly> -->
