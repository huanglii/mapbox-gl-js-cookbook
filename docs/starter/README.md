# 快速开始

[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) 是一个 JavaScript 库，基于 [vector tiles](https://docs.mapbox.com/help/glossary/vector-tiles/) 和 [Mapbox styles](https://docs.mapbox.com/mapbox-gl-js/style-spec/)，使用 `WebGL` 渲染交互式地图。Mapbox GL JS 是 Mapbox GL 生态系统之一，其中还包括 [Mapbox Mobile](https://www.mapbox.com/mobile/)，它是一个用 C++ 编写的兼容桌面和移动平台的渲染引擎。

1. 安装

```bash
npm install --save mapbox-gl
npm install --save-dev @types/mapbox-gl
```

2. 添加 CSS 样式文件

```js
import 'mapbox-gl/dist/mapbox-gl.css'
```

3. 初始化地图

```js
import mapboxgl from 'mapbox-gl'

const map = new mapboxgl.Map({
  accessToken: '{YOUR MAPBOX ACCESS TOKEN}'
  container: 'map', // 地图容器 id
  style: 'mapbox://styles/mapbox/streets-v11', // 样式
  center: [104.294538, 35.860092], // 地图初始中心点 [经度, 维度]
  zoom: 2.4, // 地图初始缩放级别
  projection: 'globe', // 地图投影
})
```

<ClientOnly>
  <common-code-view name="starter-globe"/>
</ClientOnly>

> 示例：[Display a globe on a webpage](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/)

因为 Mapbox GL JS 中的图层是异步的。因此，通常使用[事件](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-events)绑定在合适的时间更改地图。例如：

```js
map.on('load', () => {
  map.addLayer({
    id: 'terrain-data',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2',
    },
    'source-layer': 'contour',
  })
})
```

此示例代码用于仅在加载地图的资源（包括样式）后添加图层。如果立即运行 `map.addLayer`，则会触发错误：`Error: Style is not done loading`，因为要添加图层的样式不存在。

::: tip
有关地图图层的渲染，请参考：[样式规范](/mapbox-gl-js-cookbook/style-spec/)。
:::
