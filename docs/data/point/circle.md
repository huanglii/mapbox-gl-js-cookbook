# 圆

详细规范请查阅：[circle](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#circle)

### 普通点

<ClientOnly>
  <common-code-view name="data-circle"/>
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
