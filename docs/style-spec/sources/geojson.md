# [GeoJSON](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)

GeoJSON 数据源，必须提供 `data` 属性，可以是内联 GeoJSON 或 URL。

1. 内联 GeoJSON

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

2. URL

```json
{
  "geojson-lines": {
    "type": "geojson",
    "data": "./lines.geojson"
  }
}
```

::: tip

对于大量数据，建议使用矢量瓦片，如果只能是 GeoJSON，参考 [Working with large GeoJSON sources in Mapbox GL JS](https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/) 进行优化。

:::

## [buffer](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-buffer)

瓦片缓冲大小，取值范围：`[0, 512]`，默认：`128`。值越大，渲染痕迹（Rendering Artifacts）越少（表现在瓦片边缘），性能更低。如果是点数据，可将其设置为 `0`。

## [cluster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-cluster)

设置为 `true`，可对点要素按距离聚合。

## [filter](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-filter)

用于在渲染之前对其要素进行过滤的 [表达式](../../style-spec/expression.md)。

## [tolerance](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-tolerance)

Douglas-Peucker 简化容差，默认：`0.375`，值越大，几何图形越简单（即顶点越少），性能越高。
