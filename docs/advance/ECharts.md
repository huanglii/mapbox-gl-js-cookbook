# ECharts

`ECharts` 结合 `Marker` 即可在地图中展示图表数据。前面说过，`Marker` ( **如果数量过多，会出现重叠和性能问题** ），但是很多时候又不得不使用，比如在需要用复杂的形式展示数据时，`layer` 通常满足不了需求。

在浏览官方案例 [Display HTML clusters with custom properties](https://docs.mapbox.com/mapbox-gl-js/example/cluster-html/) 时，想到：可结合 `cluster` 属性，来解决 `Marker` 在地图中显示重叠以及性能问题。

## 饼图

使用聚合属性来解决图表重叠和性能问题的关键在于：在数据变化时，通过查询可视范围内的 `聚合要素` 及 `非聚合要素` 位置显示图表。

::: warning 注意
聚合要素的属性与原始属性不一致（参考 [geojson-cluster](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-cluster)），需要通过 `GeoJSONSource.getClusterLeaves()` 方法来获取原始要素属性（参考：[getClusterLeaves](https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterleaves)）。

因为聚合点要素与实际要素的位置有一定的偏差，可以取离聚合点最近的要素。

非聚合要素属性与原始属性一致。
:::

如果需要将 `ECharts` 图表的事件与地图结合做交互，由于 `ECharts` 事件回调参数中不能设置自定义属性，我们可以将相关属性融入到 ECharts 的默认属性中，比如：下面示例中将要素的坐标信息放在了 `seriesName`。

> 详细实现请查看示例代码

<ClientOnly>
  <common-code-view name="echarts-pie" />
</ClientOnly>

## 散点图

插件：[@naivemap/mapbox-gl-echarts-layer](https://www.npmjs.com/package/@naivemap/mapbox-gl-echarts-layer)

```js
import EchartsLayer from '@naivemap/mapbox-gl-echarts-layer'

const options = {...}
const layer = new EchartsLayer('layer-id', option)

map.addLayer(layer)
```

<ClientOnly>
  <common-code-view name="echarts-scatter" />
</ClientOnly>

> 参考：[全国主要城市空气质量 - 百度地图](https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap)
