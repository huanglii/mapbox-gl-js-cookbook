# GeoServer

以 `GeoServer` 为例，对常见地图服务标准简要说明以及在 `Mapbox GL JS` 中的使用。

## WMTS

> 标准：[Web Map Tile Service](http://www.opengeospatial.org/standards/wmts)

Web Map Tile Service（Web 地图瓦片服务），简称 `WMTS`。WMTS 标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：

1. GetCapabilities（获取服务的元信息）
2. GetTile（获取瓦片）
3. GetFeatureInfo（可选，获取点选的要素信息）

利用 `GetTile` 操作和指定输出格式即可在 Mapbox GL JS 中使用。


```js
// 栅格瓦片 image/png
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=example:example&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}'
    // 或 geoserver rest 服务
    // 'https://a.example.com/geoserver/gwc/service/wmts/rest/example:example/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png'
  ]
}

// 矢量瓦片 application/vnd.mapbox-vector-tile
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=example:example&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
    // 或 geoserver rest 服务
    // 'https://a.example.com/geoserver/gwc/service/wmts/rest/example:example/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile'
  ]
}
```

## TMS

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

## WFS

> 标准：[Web Feature Service](http://www.opengeospatial.org/standards/wfs)

Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：

1. GetCapabilities（获取服务中的要素类及支持的操作）
2. DescribeFeatureType（描述要素类的信息）
3. GetFeature（获取要素）
4. Transaction（创建、更新、删除数据的事务操作）

利用 `GetFeature` 操作和指定输出格式即可在 Mapbox GL JS 中使用。

加载示例（application/json 格式）：

```js
'source-id': {
  'type': 'geojson',
  'data': 'https://a.example.com/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json'
}
```

::: tip

- WFS 会请求全部数据，不适用于大量数据。但是支持空间查询和属性查询。
- 文档：[GeoServer Filtering](https://docs.geoserver.org/latest/en/user/filter/index.html#filtering)
  :::

## WMS

> 标准：[Web Map Service](http://www.opengeospatial.org/standards/wms)

Web Map Service（Web 地图服务），简称 `WMS`。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下 3 个操作：

1. GetCapabilities（获取服务中的要素类及支持的操作）
2. GetMap（获取地图）
3. GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似 Identify 功能）

利用 `GetMap` 操作和指定地图边框范围（`bbox`）和输出格式（`format`）即可在 Mapbox GL JS 中使用。

加载示例（image/png 格式）：

```js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://a.example.com/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE'
  ]
}
```

::: tip
注意 url 中的 `bbox` 参数值 `"{bbox-epsg-3857}"`。Mapbox GL JS 会自动计算地图范围替换该值，获取地图。
:::
