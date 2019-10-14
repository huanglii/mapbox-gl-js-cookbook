# 数据源
数据源的类型由 **`type`** 指定，并且必须是 `vector`, `raster`, `raster-dem`, `geojson`, `image`, `video` 之一。
::: warning
以前官方文档里还有一个 **`canvas`** 类型，不知为何现在没有了，但是经测试，`canvas` 数据源还是支持的。
:::
数据源示例：
``` js
'sources': {
  // vector
  '{source-id}': {
    'type': 'vector',
    'tiles': [
      'http://a.example.com/tiles/{z}/{x}/{y}.pbf'
    ],
    'minzoom': 6,
    'maxzoom': 14
  },
  // vector
  '{source-id}': {
    'type': 'vector',
    'url': 'http://api.example.com/tilejson.json'
  },
  // raster
  '{source-id}': {
    'type': 'raster',
    'tiles': [
      'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}',
      'http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}'
    ],
    'tileSize': 256
  },
  // image
  '{source-id}': {
    'type': 'image',
    'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    'coordinates': [
        [-80.425, 46.437],
        [-71.516, 46.437],
        [-71.516, 37.936],
        [-80.425, 37.936]
    ]
  }
}
```
