# 高亮

Mapbox GL JS 中有 2 种方法可以实现要素高亮效果。

## 高亮图层

第一种方法是额外添加一个高亮图层，数据源与原图层一致，通过设置 `filter` 来显示需要高亮的要素。

<ClientOnly>
  <common-code-view name="starter-tutorials-highlight1"/>
</ClientOnly>

## 要素状态

第二种方法，通过[设置要素状态](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate)和[表达式](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#feature-state)达到高亮效果。

<ClientOnly>
  <common-code-view name="starter-tutorials-highlight2"/>
</ClientOnly>

> 鼠标悬停效果：[Create a hover effect](http://localhost:8080/mapbox-gl-js-cookbook/data/point/symbol.html)
