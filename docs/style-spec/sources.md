# 数据源

> [sources](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/)

数据源类型由 `type` 指定，并且必须是 `vector`, `raster`, `raster-dem`, `geojson`, `image`, `video` 之一。
::: tip 提示
另外，还有一个`canvas`类型，是`image`的扩展：[CanvasSource](https://docs.mapbox.com/mapbox-gl-js/api/sources/#canvassource)
:::

## vector

使用 `vector` 数据源的图层必须指定 `source-layer` 。

```js
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

```js
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

```sh
# fill no data
gdalwarp -t_srs EPSG:3857 -dstnodata None -co TILED=YES -co COMPRESS=DEFLATE -co BIGTIFF=IF_NEEDED E:\test\chongqing.tif  E:\test\chongqing_without_nodata.tif

# conver to rgb
rio rgbify -b -10000 -i 0.1 E:\test\chongqing_without_nodata.tif E:\test\chongqing_rgb.tif
```

## geojson

GeoJSON 数据源，必须提供 `data` 属性。详见 [geojson](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)，可设置 `cluster`， `filter` 等。

```js
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

## Custom Source

自 `v2.8.0` 起，可以使用自定义数据源，自定义数据源接口允许用户加载和修改自己的瓦片，必须实现 `loadTile`。

<ClientOnly>
  <common-code-view name="style-spec-custom-source" />
</ClientOnly>

> 参考：[custom-source](https://github.com/mapbox/mapbox-gl-js/blob/main/debug/custom-source.html)
