# 栅格

栅格数据一般发布为 `WMS`、`WMTS` 服务，使用 **`raster`** 格式加载；如果是一些图片格式，并且文件大小比较小，比如：温度图、湿度图、雷达图等，则可以根据图片范围使用 **`image`** 格式加载，但只支持 `EPSG:3857`（网络墨卡托） 坐标系的图片，对于其他坐标系的图片如何加载后面会提到。

## raster

<ClientOnly>
  <common-code-view name="data-raster"/>
</ClientOnly>

> 示例：[Add a raster tile source](https://docs.mapbox.com/mapbox-gl-js/example/map-tiles/)

## image

### 网络墨卡托

有如下一张温度图，坐标系为 `EPSG:3857`：

<!-- ![温度图](/images/3857.png) -->
<div align="center">
  <img :src="$withBase('/assets/images/3857.png')" width="300" />
</div>

<ClientOnly>
  <common-code-view name="data-image"/>
</ClientOnly>

### 其他任意投影

任意投影的图片可以使用插件 [mapbox-gl-static-image-source](https://github.com/huanglii/mapbox-gl-static-image-source) 加载，该插件利用了 [openlayers](https://openlayers.org/) 的 `ol/reproj` 相关方法，将图片进行重投影为 `EPSG:3857` 坐标系。

安装：
```bash
# use yarn
yarn add @naivemap/mapbox-gl-layers
# use npm
npm i @naivemap/mapbox-gl-layers
```

使用：
```js
import { ImageLayer } from '@naivemap/mapbox-gl-layers'

const layer = new ImageLayer('layer-4326', {
  url: '/images/4326.png',
  projection: 'EPSG:4326',
  coordinates: [
    [105.289838, 32.204171], // top-left
    [110.195632, 32.204171], // top-right
    [110.195632, 28.164713], // bottom-right
    [105.289838, 28.164713], // bottom-left
  ],
})

map.addLayer(layer, 'aeroway-line')
```

有如下一张图片，坐标系为 EPSG:4326：

<div align="center">
  <img :src="$withBase('/assets/images/4326.png')" width="300" />
</div>

<ClientOnly>
  <common-code-view name="data-image-4326"/>
</ClientOnly>

## video

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
