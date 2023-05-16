# 瓦片数据源

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

## [vector](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector)

矢量瓦片数据源，瓦片必须是 [Mapbox Vector Tile](https://docs.mapbox.com/vector-tiles/) 格式。使用 `vector` 数据源的图层必须指定 `source-layer` 。

## [raster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster)

栅格瓦片数据源。

## [raster-dem](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster-dem)

栅格 DEM 数据源，只支持 [Mapbox Terrain RGB](https://blog.mapbox.com/global-elevation-data-6689f1d0ba65)，可使用 [rio-rgbify](https://github.com/mapbox/rio-rgbify) 生成。

```sh
# fill no data
gdalwarp -t_srs EPSG:3857 -dstnodata None -co TILED=YES -co COMPRESS=DEFLATE -co BIGTIFF=IF_NEEDED E:\test\chongqing.tif  E:\test\chongqing_without_nodata.tif

# conver to rgb
rio rgbify -b -10000 -i 0.1 E:\test\chongqing_without_nodata.tif E:\test\chongqing_rgb.tif
```
