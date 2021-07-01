# 样式规范
[Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)是定义地图视觉外观的文档：绘制哪些数据，绘制顺序以及绘制数据时如何设置数据样式。

一个样式有以下根属性： `version`, `name`, `metadata`, `center`, `zoom`, `bearing`, `pitch`, `light`, `sources`, `sprite`, `glyphs`, `transition`, `layers` 。重点关注 **`sources`**, **`layers`**。

``` js
{
  'version': 8, // 版本号，必须且必须为 8
  'sprite': 'mapbox://sprites/mapbox/streets-v8', // 雪碧图
  'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', // 字体
  'sources': {...}, // 数据源
  'layers': [...] // 图层
}
```

::: tip
如果对 [Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) 某一属性含义不理解，可以在 [Studio](https://studio.mapbox.com/) 中去配置下这个属性，看一下效果便知道了。
:::
