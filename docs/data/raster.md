# 栅格

栅格数据一般发布为 `WMS`、`WMTS` 服务，使用 `raster` 类型的图层加载，其数据源可以是 `raster`（栅格瓦片）、`image`（图片） 或 `video`（视频）。

如果是一些图片格式，并且文件大小比较小，比如：温度图、湿度图、雷达图等，则可以根据图片范围使用 `image` 格式加载，但只支持 `EPSG:3857`（网络墨卡托） 坐标系的图片，对于其他坐标系的图片可以使用 [ImageLayer](/mapbox-gl-js-cookbook/plugins/image-layer.html) 加载。

## 栅格瓦片

<ClientOnly>
  <common-code-view name="data-raster"/>
</ClientOnly>

> 示例：[Add a raster tile source](https://docs.mapbox.com/mapbox-gl-js/example/map-tiles/)

## 图片

例如有一张 <a :href="$withBase('/assets/images/3857.png')" target="_blank">图片</a> 要叠加到地图，如下：

<ClientOnly>
  <common-code-view name="data-image"/>
</ClientOnly>

::: warning
注意，图片坐标系必须为 `EPSG:3857` 才能正确叠加。如果要加载任意投影的图片请转至 [ImageLayer](/mapbox-gl-js-cookbook/plugins/image-layer.html)。
:::

## 视频

Mapbox GL JS 还支持视频数据源，同 `image` 差不多。

```js
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
