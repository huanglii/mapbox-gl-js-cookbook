# 高亮

Mapbox GL JS 中有两种方法可以实现要素高亮效果。

## 高亮图层

第一种方法是额外添加一个高亮图层，数据源与原图层一致，默认通过设置 `filter` 不显示任何要素。在需要高亮的时候（如鼠标移入、点击某要素时）设置仅显示某要素。

<ClientOnly>
  <common-code-view name="starter-tutorials-highlight-1"/>
</ClientOnly>

## 要素状态

第二种方法，通过给要素[设置要素状态 (feature-state)](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate)，再结合[表达式](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#feature-state)给该要素设置不同的渲染效果（颜色、透明度和线条粗细等）。

::: warning
- `map.setFeatureState` 方法只能用于有 `id` 属性的数据源。详见：[setFeatureState](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate)
- [要素状态 (feature-state)](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate) 只能与支持数据驱动的绘制 (`paint`) 属性一起使用。
:::

<ClientOnly>
  <common-code-view name="starter-tutorials-highlight-2"/>
</ClientOnly>

> 鼠标悬停效果：[Create a hover effect](https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/)

## 布局属性

前面提到要素状态只能用于绘制属性，对于符号 (`symbol`) 类型图层，图标、文本等都是布局 (`layout`) 属性，无法使用要素状态来实现高亮效果。这时可通过表达式设置高亮要素/正常要素的图标等布局属性，**前提是数据有 `id` 或者唯一属性**。

```ts
map.setLayoutProperty('city', 'icon-image', ['match', ['id'], e.features[0].id, 'i-star-red', 'i-star-blue'])
```

<ClientOnly>
  <common-code-view name="starter-tutorials-highlight-3"/>
</ClientOnly>
