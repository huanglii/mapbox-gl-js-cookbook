# 数据源

> [sources](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/)

数据源属性说明了地图要显示那些数据，数据源类型由 `type` 指定，且必须是 `vector`, `raster`, `raster-dem`, `geojson`, `image`, `video` 之一。

::: tip 提示
另外，还有一个`canvas`类型，是`image`的扩展：[CanvasSource](https://docs.mapbox.com/mapbox-gl-js/api/sources/#canvassource)
:::

## 瓦片数据源

瓦片数据源（vector 和 raster）必须根据 [TileJSON](https://github.com/mapbox/tilejson-spec) 规范指定其详细信息。有 2 种方式：

1. 直接在数据源中提供 TileJSON 属性，例如：`tiles`、`minzoom` 和 `maxzoom`：

```json
{
  // 矢量瓦片数据源
  "mapbox-streets": {
    "type": "vector",
    "tiles": ["https://a.naivemap.com/tiles/{z}/{x}/{y}.pbf", "https://b.naivemap.com/tiles/{z}/{x}/{y}.pbf"]
  },
  // 栅格瓦片数据源
  "tdt_vec_w": {
    "type": "raster",
    "tiles": [
      "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}",
      "http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}"
    ],
    "tileSize": 256,
    "maxzoom": 18
  }
}
```

2. 通过 `url` 指定 TileJSON 源：

```json
"mapbox-streets": {
  "type": "vector",
  "url": "https://naivemap.com/tilejson.json"
}
```

### [vector](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector)

矢量瓦片数据源，瓦片必须是 [Mapbox Vector Tile](https://docs.mapbox.com/vector-tiles/) 格式。使用 `vector` 数据源的图层必须指定 `source-layer` 。

### [raster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster)

栅格瓦片数据源。

### [raster-dem](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster-dem)

栅格 DEM 数据源，只支持 [Mapbox Terrain RGB](https://blog.mapbox.com/global-elevation-data-6689f1d0ba65)，可使用 [rio-rgbify](https://github.com/mapbox/rio-rgbify) 生成。

```sh
# fill no data
gdalwarp -t_srs EPSG:3857 -dstnodata None -co TILED=YES -co COMPRESS=DEFLATE -co BIGTIFF=IF_NEEDED E:\test\chongqing.tif  E:\test\chongqing_without_nodata.tif

# conver to rgb
rio rgbify -b -10000 -i 0.1 E:\test\chongqing_without_nodata.tif E:\test\chongqing_rgb.tif
```

## [GeoJSON](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)

GeoJSON 数据源，必须提供 `data` 属性。详见 [geojson](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)，可设置 `cluster`， `filter` 等。也有 2 种方式：

1. 直接提供 GeoJSON

```json
{
  "geojson-point": {
    "type": "geojson",
    "data": {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-77.0323, 38.9131]
      },
      "properties": {
        "title": "Mapbox DC",
        "marker-symbol": "monument"
      }
    }
  }
}
```

2. 通过 url 指定 GeoJSON 源

```json
{
  "geojson-lines": {
    "type": "geojson",
    "data": "./lines.geojson"
  }
}
```

## 图片 & 视频

图片（[image](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#image)）和视频（[video](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#video)）数据源，通过指定 `url` 和 `coordinate` 将图片和视频显示到地图。注意其坐标系必须是 **网络墨卡托(EPSG:3857)**，如果是其他坐标系的 **图片**，可以使用 [@naivemap/mapbox-gl-image-layer](https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md) 插件加载。

## 自定义数据源

自 `v2.8.0` 起，可以使用自定义数据源，自定义数据源接口允许用户加载和修改自己的瓦片，必须实现 `loadTile` 方法。
