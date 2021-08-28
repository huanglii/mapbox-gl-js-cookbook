# 快速开始
[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) 是一个 JavaScript 库，基于 [vector tiles](https://docs.mapbox.com/help/glossary/vector-tiles/) 和 [Mapbox styles](https://docs.mapbox.com/mapbox-gl-js/style-spec/)，使用 `WebGL` 渲染交互式地图。Mapbox GL JS 是 Mapbox GL 生态系统之一，其中还包括 [Mapbox Mobile](https://www.mapbox.com/mobile/)，它是一个用 C++ 编写的兼容桌面和移动平台的渲染引擎。

::: tip 提示
- 本站所使用 Mapbox GL JS 的版本号为：v1.13.0
- Mapbox GL JS v2.x 版本在专有许可下发布：[LICENSE.txt](https://github.com/mapbox/mapbox-gl-js/blob/main/LICENSE.txt)
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/)是 Mapbox GL JS 的官方开源继承者
:::

1. 安装
```bash
npm install mapbox-gl
```
2. 添加 CSS 样式文件
```js
import 'mapbox-gl/dist/mapbox-gl.css';
```
3. 初始化地图
```js
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = '{YOUR MAPBOX ACCESS TOKEN}';
const map = new mapboxgl.Map({
  container: 'map', // 地图容器 id
  style: 'mapbox://styles/mapbox/streets-v11', // 样式
  center: [-74.5, 40], // 地图初始中心点 [经度, 维度]
  zoom: 9 // 地图初始缩放级别
});
```

> 示例：[Display a map on a webpage](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/)
