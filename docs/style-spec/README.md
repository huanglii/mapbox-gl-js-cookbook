# 样式规范

> [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)

样式规范是定义地图视觉外观的文档：绘制哪些数据，绘制顺序以及绘制数据时如何设置数据样式。

一个样式有以下根属性：

- 描述信息：[version](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#version), [name](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#name), [metadata](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#metadata)
- 地图状态：[center](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#center), [zoom](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#zoom), [bearing](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#bearing), [pitch](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#pitch), [projection](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#terrain)
- 地图要素：[sources](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#sources), [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#layers), [terrain](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#terrain)
- 其他：[sprite](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#sprite), [glyphs](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#glyphs), [light](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#light), [fog](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#fog), [transition](https://docs.mapbox.com/mapbox-gl-js/style-spec/root/#transition)

```json
{
  "version": 8, // 版本号，必须且必须为 8
  "name": "Mapbox Streets", // 样式名称
  "sprite": "mapbox://sprites/mapbox/streets-v8", // 雪碧图
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf", // 字体
  "sources": {...}, // 数据源
  "layers": [...] // 图层，将根据此数组的顺序绘制
}
```

::: tip 提示
如果您是设计师或制图师，请前往 [Mapbox Studio](https://studio.mapbox.com/)。
:::
