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
表达式拥有强大的类型系统，并支持转换和检测。比如，表达式的输入和输出数据类型需和样式规范中的类型一致，在计算表达式时会自动检测，如果检测到错误，会在控制台输出错误提示。
## Feature data
- feature-state：要素状态，要素状态不是数据的某一属性，需要对通过要素 `id` 设置，如给要素设置 `hover` 状态：`map.setFeatureState({source: 'states', id: hoveredStateId}, {hover: false})`，然后在表达式中即可使用：`['feature-state', 'hover']`

::: tip 提示
示例：[Create a hover effect](https://maplibre.org/maplibre-gl-js-docs/example/hover-styles/)
:::
## Lookup
- get：获取要素属性，如获取 `name` 属性：`['get', 'name']`
## Decision
在表达式中，可使用常用的条件逻辑，比如：`"if/then/else"` 的逻辑可使用 `'case'` 表达式，如需将输入的特定值映射不同的输出，可使用 `'match'` 表达式。
## Ramps, scales, curves
- interpolate：插值，支持 `linear`、`exponential` 和 `cubic-bezier`
- step：分段
## Variable binding
- let 绑定变量
- var 引用 `let` 绑定的变量
## String
- downcase
- upcase
## Color
- rgb
- rgba
## Math
支持基本的数学运算，详见：[Math](https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/#math)
``` js
['/', ['get', 'gdp'], 1000]
```

## Zoom
获取当前缩放级别，仅用于 `step` 或 `interpolate` 表达式的输入。
``` js
['zoom']: number 
```

## Heatmap
获取热力图图层中像素的核密度估计，只能用于 `heatmap-color` 属性。
``` js
['heatmap-density']: number
```