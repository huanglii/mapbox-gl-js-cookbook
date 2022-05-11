# WMTS

> 标准：[Web Map Tile Service](http://www.opengeospatial.org/standards/wmts)

Web Map Tile Service（Web 地图瓦片服务），简称 `WMTS`。WMTS 标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：

1. GetCapabilities（获取服务的元信息）
2. GetTile（获取瓦片）
3. GetFeatureInfo（可选，获取点选的要素信息）

利用 `GetTile` 操作和指定输出格式即可在 Mapbox GL JS 中使用。

## image/png

```js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=example:example&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}'
    // 或 geoserver rest 服务
    // 'https://a.example.com/geoserver/gwc/service/wmts/rest/example:example/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png'
  ]
}
```

## application/vnd.mapbox-vector-tile

```js
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://a.example.com/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=example:example&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
    // 或 geoserver rest 服务
    // 'https://a.example.com/geoserver/gwc/service/wmts/rest/example:example/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile'
  ]
}
```
