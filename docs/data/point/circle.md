# [圆](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#circle)

部分 **`paint`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`circle-radius`** | 半径，默认`5` |
| **`circle-color`** | 颜色，默认`"#000000"` |
| **`circle-opacity`** | 不透明度[0, 1]，默认`1` |
| **`circle-stroke-width`** | 边框宽度，默认`0` |
| **`circle-stroke-color`** | 边框颜色，默认`"#000000"` |
| **`circle-stroke-opacity`** | 不透明度[0, 1]，默认`1` |
| **`circle-blur`** | 模糊度，默认`0` |

### 普通点

<ClientOnly>
  <common-code-view name="data-circle"/>
</ClientOnly>

### 聚合点

使用聚合图层时，数据必须为 `geojson`，并设置 `cluster` 为 `true`。

```js
map.addSource('points', {
  type: 'geojson',
  data: 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json',
  cluster: true,
  clusterMaxZoom: 10, // 最大聚合 zoom， 超过这个值则不聚合
  clusterRadius: 50, // 聚合半径，默认 50
})
```

添加聚合图层时，分三个图层：① 聚合图层，② 聚合数量图层，③ 不聚合的点图层。

<ClientOnly>
  <common-code-view name="data-circle-cluster"/>
</ClientOnly>

### 海量点

<ClientOnly>
  <common-code-view name="data-circle-scatter"/>
</ClientOnly>

### 发光

利用点可以做出一些发光效果，如下图：

<div align="center">
  <img :src="$withBase('/assets/images/coastal.webp')" />
</div>

图中由 4 个关键图层构成，四个图层从上到下依次排列：

1. 卫星图层 - 透明度 50%
2. Mapbox 国家边界地图（全黑填充）
3. 地名图层- 闪闪发光的出处
4. 卫星图层

> 教程：[环保可视化地图样式教程！Mapbox 高级地图设计师独家解析](https://mp.weixin.qq.com/s/YSYOFE4EhGzTSf8vt9mpnA)

<ClientOnly>
  <common-code-view name="data-fill-point" :is-code-view="false"/>
</ClientOnly>
