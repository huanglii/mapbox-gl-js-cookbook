# EChartsLayer

借助 [@naivemap/mapbox-gl-echarts-layer](https://www.npmjs.com/package/@naivemap/mapbox-gl-echarts-layer) 插件可直接在 Mapbox GL JS 中使用 Apache ECharts 的 [scatter](https://echarts.apache.org/zh/option.html#series-scatter)、[effectScatter](https://echarts.apache.org/zh/option.html#series-effectScatter) 和 [lines](https://echarts.apache.org/zh/option.html#series-lines)。

```bash
# yarn
yarn add @naivemap/mapbox-gl-echarts-layer proj4
# 或 npm
npm i @naivemap/mapbox-gl-echarts-layer proj4
```

```js
import EchartsLayer from '@naivemap/mapbox-gl-echarts-layer'

const options = {...}
const layer = new EchartsLayer('layer-id', option)

map.addLayer(layer)
```

## 散点图

<ClientOnly>
  <common-code-view name="plugins-echarts-scatter" />
</ClientOnly>

> 参考：[全国主要城市空气质量 - 百度地图](https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap)

## 路径图

<ClientOnly>
  <common-code-view name="plugins-echarts-lines" />
</ClientOnly>
