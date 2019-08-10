# 栅格
栅格数据一般发布为 `WMS`、`WMTS` 服务，使用 **`raster`** 格式加载；如果是一些图片格式，并且文件大小比较小，比如：温度图、湿度图、雷达图等，则可以根据经纬度范围使用 **`image`** 格式加载。

## raster
``` js
'source-id': {
  'type': 'raster',
  'tiles': [
    'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
  ],
  'tileSize': 256,
}
```
<ClientOnly>
  <code-view name="raster"/>
</ClientOnly>

## image
有如下一张中国大陆范围的温度图：

<!-- ![温度图](/images/3857.png) -->
<div align="center">
  <img :src="$withBase('/images/3857.png')" width="300" />
</div>

``` js
'source-id': {
  'type': 'image',
  'url': '/images/3857.png',
  'coordinates': [
    [73.5001449800, 53.5614389930],
    [135.088932019, 53.5614389930],
    [135.088932019, 18.158746],
    [73.5001449800, 18.158746]
  ]
}
```
<ClientOnly>
  <code-view name="image"/>
</ClientOnly>
