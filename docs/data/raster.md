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
  <common-code-view name="data-raster"/>
</ClientOnly>

> 栅格瓦片：[Add a raster tile source](https://docs.mapbox.com/mapbox-gl-js/example/map-tiles/)

## image
有如下一张温度图：

<!-- ![温度图](/images/3857.png) -->
<div align="center">
  <img :src="$withBase('/assets/images/3857.png')" width="300" />
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
  <common-code-view name="data-image"/>
</ClientOnly>


## video
Mapbox GL JS 还支持视频数据源，同 `image` 差不多。
``` js
'source-id': {
  'type': 'video',
  'urls': [
    'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
    'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm'
  ],
  'coordinates': [
    [-122.51596391201019, 37.56238816766053],
    [-122.51467645168304, 37.56410183312965],
    [-122.51309394836426, 37.563391708549425],
    [-122.51423120498657, 37.56161849366671]
  ]
}
```

<ClientOnly>
  <common-code-view name='data-video'/>
</ClientOnly>
