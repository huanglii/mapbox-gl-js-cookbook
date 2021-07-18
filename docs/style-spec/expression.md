# 表达式
> [expressions](https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/)

任何 `layout` 属性、`paint` 属性或 `filter` 的值都可以是表达式。示例：
``` js
{
  "circle-radius": [
    "interpolate", ["linear"], ["zoom"],
    // when zoom is 0, set each feature's circle radius to the value of its "rating" property
    0, ["get", "rating"],
    // when zoom is 10, set each feature's circle radius to four times the value of its "rating" property
    10, ["*", 4, ["get", "rating"]]
  ]
}
```

::: warning 注意
在表达式中， `layout` 属性和 `paint` 属性有一个很重要的区别。`paint` 属性，只要缩放级别发生变化，都会重新计算 `paint` 属性，即使是小数变化，比如在 4.1 - 4.6 之间。而 `layout` 属性只在整数缩放级别时计算，在 4.1 - 4.6 之间不会发生变化，只有在高于 5 或小于 4 时计算。
:::

## Types
Mapbox Style Specification 有强大的类型检测系统，表达式的输入和输出数据类型需和样式规范中的类型一致，在计算表达式时会自动检测，如果检测到错误，会在控制台输出错误提示。
## Feature data

## Lookup
## Decision
在表达式中，可使用常用的条件逻辑，比如：`"if/then/else"` 的逻辑可使用 `'case'` 表达式，如需将输入的特定值映射不同的输出，可使用 `'match'` 表达式。
## Ramps, scales, curves

## Variable binding

## String

## Color

## Math

## Zoom

## Heatmap