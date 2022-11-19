# 线

## 线

详细规范请查阅：[line](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line)

<ClientOnly>
  <common-code-view name="data-line"/>
</ClientOnly>

## 渐变线

::: warning 注意

1. 使用渐变线，数据源只能是 **`GeoJSON`**。并设置 **`lineMetrics`** 为 **`true`**；
2. **`line-gradient`** 必须使用表达式，并且目前只能用 **`line-progress`**；
3. 经测试，对于 `multiLineString` 和 `featureCollection` 的线数据会按单个 `lineString` 渲染，如下：
   :::

<ClientOnly>
  <common-code-view name="data-line-gradient"/>
</ClientOnly>

> 线性渐变：[Create a gradient line using an expression](https://docs.mapbox.com/mapbox-gl-js/example/line-gradient/)

结合 `symbol` 还可以做出如下箭头效果：
<ClientOnly>
<common-code-view name="data-line-arrow"/>
</ClientOnly>
