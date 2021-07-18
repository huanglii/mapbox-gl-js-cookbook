# 数据源
> [sources](https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/)

数据源类型由 `type` 指定，并且必须是 `vector`, `raster`, `raster-dem`, `geojson`, `image`, `video` 之一。
::: tip 提示
另外，还有一个 `canvas` 类型，是 `image` 的扩展：[CanvasSource](https://maplibre.org/maplibre-gl-js-docs/api/sources/#canvassource)
:::

## vector
使用 `vector` 数据源的图层必须指定 `source-layer` 。  
``` js
'sources': {
  '{source-id}': {
    'type': 'vector',
    'tiles': [
      'http://a.example.com/tiles/{z}/{x}/{y}.pbf'
    ],
    'bounds': [-180, -85.051129, 180, 85.051129]
  },
  '{source-id}': {
    'type': 'vector',
    'url': 'http://api.example.com/tilejson.json'
  },
  '{source-id}', {
    'type': 'vector',
    'url': 'mapbox://huanglii.d41k5fmy'
  },
}
```
## raster
``` js
'sources': {
  '{source-id}': {
    'type': 'raster',
    'tiles': [
      'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}',
      'http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}'
    ],
    'tileSize': 256
  },
}
```
## raster-dem
栅格 DEM 数据源，只支持 [Mapbox Terrain RGB](https://blog.mapbox.com/global-elevation-data-6689f1d0ba65)。可使用 [rio-rgbify](https://github.com/mapbox/rio-rgbify) 生成。

``` sh
# fill no data
gdalwarp -t_srs EPSG:3857 -dstnodata None -co TILED=YES -co COMPRESS=DEFLATE -co BIGTIFF=IF_NEEDED E:\test\chongqing.tif  E:\test\chongqing_without_nodata.tif

# conver to rgb
rio rgbify -b -10000 -i 0.1 E:\test\chongqing_without_nodata.tif E:\test\chongqing_rgb.tif
```

## geojson
GeoJSON 数据源，必须提供 `data` 属性。详见 [geojson](https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/#geojson)，可设置 `cluster`， `filter` 等。
``` js
'sources': {
  // inline GeoJSON
  'geojson-marker': {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.0323, 38.9131]
      },
      'properties': {
        'title': 'Mapbox DC',
        'marker-symbol': 'monument'
      }
    }
  },
  // url
  'geojson-lines': {
    'type': 'geojson',
    'data': './lines.geojson'
  }
}
```
## image & video
见[数据/栅格](/data/raster)。

## GeoServer
这里以 `GeoServer` 为例，对常见服务标准简要说明以及如何在 `Mapbox GL JS` 中使用。

::: tip 提示
建议使用 `tms` 或 `wmts`。对于矢量数据，使用 `application/vnd.mapbox-vector-tile` 格式，栅格数据使用 `image/png` 格式。
:::

### TMS
> 标准：[Tile Map Service](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)

Tile Map Service（瓦片地图服务），简称 `TMS`。TMS 的切片坐标系统和组织方式可参考下图：
<div align="center">
  <img :src="$withBase('/assets/images/TMS切片坐标系统和组织方式.png')" width="400" />
</div>
 
Mapbox GL JS 在加载 TMS 服务时，需要设置 [scheme](https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/#vector-scheme) 属性为 `tms`。`scheme` 属性影响瓦片坐标 `y` 轴的方向。`scheme` 有两个值可选：`xyz`（默认）和 `tms`。其中 `xyz` 代表常用的切片规则，即 `OGC` 标准，切片源点在左上角。`tms` 是 `OSGeo` 标准，切片源点是左下角。

加载示例：
``` js
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

<!-- <ClientOnly>
  <common-code-view name="service-tms"/>
</ClientOnly> -->

### WMS
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

<!-- <ClientOnly>
  <common-code-view name="service-wms"/>
</ClientOnly> -->

### WMTS
> 标准：[Web Map Tile Service](http://www.opengeospatial.org/standards/wmts)

Web Map Tile Service（Web地图瓦片服务），简称 `WMTS`。WMTS 标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：
1. GetCapabilities（获取服务的元信息）
2. GetTile（获取切片）
3. GetFeatureInfo（可选，获取点选的要素信息） 

WMTS的切片坐标系统和组织方式可参考下图：
<div align="center">
  <img :src="$withBase('/assets/images/WMTS切片坐标系统和组织方式.png')" />
</div>

利用 `GetTile` 操作和指定输出格式即可在 Mapbox GL JS 中使用。

加载示例（image/png格式）：
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

加载示例（application/vnd.mapbox-vector-tile格式）
``` js
'source-id': {
  'type': 'vector',
  'tiles': [
    'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:cq_point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
  ]
}
```

::: warning 注意
上述两种格式，栅格会有明显的模糊，但是实际 WMTS 请求返回的图片格式是清晰的。模糊的原因是 Mapbox GL JS 的缩放是无极缩放，也就是 `zoom` 可以是小数，而 WMTS 的 `z` 值是整数，在渲染过程中有缩放，所以模糊了。

前面提到加载wms也不会模糊，但是wms实际上是根据请求范围实时渲染，加载速度不如瓦片服务。
:::

<!-- <ClientOnly>
  <common-code-view name="service-wmts"/>
</ClientOnly> -->

### WFS
> 标准：[Web Feature Service](http://www.opengeospatial.org/standards/wfs)

Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：
1. GetCapabilities（获取服务中的要素类及支持的操作）
2. DescribeFeatureType（描述要素类的信息）
3. GetFeature（获取要素）
4. Transaction（创建、更新、删除数据的事务操作）

利用 `GetFeature` 操作和指定输出格式即可在 Mapbox GL JS 中使用。

加载示例（application/json 格式）：

``` js
'source-id': {
  'type': 'geojson',
  'data': `https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json`
}
```

::: tip 提示
- wfs会请求全部数据，不适用于大量数据。但是支持空间查询和属性查询，也会经常用到。
- 文档：[wfs/wms filter](https://docs.geoserver.org/latest/en/user/filter/index.html#filtering)
:::
<!-- <ClientOnly>
  <common-code-view name="service-wfs"/>
</ClientOnly> -->
