# 表达式

任何 `layout` 属性、`paint` 属性或 `filter` 的值都可以是表达式（[expressions](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/)）。示例如下：

```js
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

::: warning
在表达式中， `layout` 属性和 `paint` 属性有一个很重要的区别。`paint` 属性，只要缩放级别发生变化，都会重新计算 `paint` 属性，即使是小数变化，比如在 4.1 - 4.6 之间。而 `layout` 属性只在整数缩放级别时计算，在 4.1 - 4.6 之间不会发生变化，只有在高于 5 或小于 4 时计算。
:::

以下举例假设要素具有如下属性：

```json
"properties": {
  "name": "苹果,香蕉",
  "title": "有点意思",
  "district": {
    "code": 500000,
    "name": "重庆市"
  },
  "type": "fruit",
  "fruits": ["苹果", "香蕉"],
  "price": 99,
  "color": "#F00"
},
```

<iframe src="https://codesandbox.io/embed/mapbox-gl-cookbook-playground-7z3rz3?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=light&view=preview"
  style="width:100%; height:300px; border:0; border-radius: 6px; overflow:hidden;"
  title="mapbox-gl-cookbook-playground"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## [Types](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#types)

表达式拥有强大的类型系统，并支持转换和检测。比如，表达式的输入和输出数据类型需和样式规范中的类型一致，在计算表达式时会自动检测，如果检测到错误，会在控制台输出错误提示。

## [Feature data](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#feature-data)

### [accumulated](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#accumulated)

返回累积的聚合属性的值，只能用于开启聚合的 `GeoJSON` 源的 [clusterProperties](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-clusterProperties) 选项，如：

```js
// 聚合点会新增 `sum` 属性，表示聚合的所有点的 `value` 值的和
map.addSource('points', {
  type: 'geojson',
  data: '/data/point.geojson',
  cluster: true,
  clusterProperties: {
    sum: [
      ['+', ['accumulated'], ['get', 'sum']],
      ['get', 'value'], // 要素 value 属性
    ],
  },
})
```

> 参考：[聚合](/mapbox-gl-js-cookbook/data/point/cluster)

### [feature-state](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#feature-state)

要素状态，要素状态不是数据的某一属性，需要通过编码对某要素设置，如给要素设置 `hover` 状态（如下），然后在表达式中即可使用：`['feature-state', 'hover']`

```js
map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: false })
```

> 示例：[Create a hover effect](https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/)

## [Lookup](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#lookup)

### [at](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#at)

从数组中检索项目。

```js
'text-field': ['to-string', ['at', 1, ['get', 'fruits']]] // 香蕉
```

### [get](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#get)

获取要素属性，如果提供了第二个参数，则判断第二个参数对象。语法如下：

```js
["get", string]: value

["get", string, object]: value
```

示例：

```js
'text-field': ['get', 'title'] // 有点意思
// 对象
'text-field': ['get', 'name', ['literal', { name: '重庆市' }]] // 重庆市
// 要素属性对象
'text-field': ['get', 'name', ['object', ['get', 'district']]], // 重庆市
```

### has

判断当前要素是否存在属性值，如果提供了第二个参数，则判断第二个参数对象。如使用要素的 `color` 属性设置注记颜色，没有该属性则使用 `#000`：

```js
'text-color': [
  'case',
  ['has', 'color'], ['get', 'color'],
  '#000'
] // #F00
```

### in

判断输入值（字符串或数组）中是否存在关键字。如判断 `title` 属性中是否存在 `意思` 子串和 `fruits` 属性中是否存在 `苹果` 项：

```js
['in', '意思', ['get', 'title'] // true
['in', '苹果', ['get', 'fruits'] // true
```

### slice

数组或字符串切片

```js
'text-field': ['slice', ['get', 'title'], 1, 3] // 点意
'text-field': ['slice', ['get', 'fruits'], 1] // ["香蕉"]
```

## [Decision](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#decision)

在表达式中，可使用常用的条件逻辑，比如：`"if/then/else"` 的逻辑可使用 `'case'` 表达式，如需将输入的特定值映射不同的输出，可使用 `'match'` 表达式。

### [case](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#case)

```js
'circle-color': [
  'case',
  ['<', ['get', 'price'], 50], '#F00', // if ＜ 50 红色
  ['<', ['get', 'price'], 100], '#0F0', // else if ＜ 100 绿色
  '#00F' // else 蓝色
] // 因为 price = 99，所以最终会显示为绿色。
```

### [coalesce](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#coalesce)

依次计算每一个表达式，直到得到一个有效值。比如下面表达式中，先取 `name_zh-Hans` 属性，如果不存在或为空，再取 `name_en` ，如果仍然无效，就取 `name`。

```js
'text-field': [
  'coalesce',
  ['get', 'name_zh-Hans'],
  ['get', 'name_en'],
  ['get', 'name']
]
```

### [match](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#match)

```js
'icon-image': [
  'match',
  ['get', 'type'],
  'fruit', 'fruit-icon', // 类型是 fruit，显示 fruit-icon
  'vegetable', 'vegetable-icon', // 类型是 vegetable vegetable-icon
  'default-icon' // 无匹配时，默认图标
] // 因为 type = 99，所以最终会显示 fruit-icon。
```

## [Ramps, scales, curves](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#ramps-scales-curves)

### [interpolate](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#interpolate)

通过在输入和输出值对之间插值来产生连续、平滑的结果。支持 `linear`、`exponential` 和 `cubic-bezier`，`stops` 数值必须严格增序。语法如下：

```js
["interpolate",
  interpolation: ["linear"] | ["exponential", base] | ["cubic-bezier", x1, y1, x2, y2],
  input: number,
  stop_input_1: number, stop_output_1: OutputType,
  stop_input_n: number, stop_output_n: OutputType, ...
]: OutputType (number, array<number>, or Color)
```

`interpolate-hcl` 和 `interpolate-lab` 与其类似，但是输出必须为 `Color`，前者在 Hue-Chroma-Luminance 色彩空间插值，后者在 CIELAB 色彩空间插值。

> 参考：[比例符号图](/mapbox-gl-js-cookbook/data/thematic.html#比例符号图)、[台风路径](/mapbox-gl-js-cookbook/advance/track.html#台风路径)

### [step](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#step)

通过评估由输入和输出值对定义的分段常数函数，产生离散的阶梯式结果。`stops` 数值必须严格增序。语法如下：

```js
["step",
  input: number,
  stop_output_0: OutputType,
  stop_input_1: number, stop_output_1: OutputType,
  stop_input_n: number, stop_output_n: OutputType, ...
]: OutputType
```

> 参考：[点密度图](/mapbox-gl-js-cookbook/data/thematic.html#点密度图)

## Variable binding

- let 绑定变量
- var 引用 `let` 绑定的变量

如：`name` 字段值有 `'香蕉'`、`'苹果,香蕉'` 等以逗号分隔的词，仅展示第一个值：

```js
{
  'text-field': [
    'let', 'idx', ['index-of', ',', ['get', 'name']],
    [
      'case',
      ['<', ['var', 'idx'], 0], ['get', 'name'],
      ['slice', ['get', 'name'], 0, ['var', 'idx']]
    ],
  ]
}
```

## String

- downcase 转小写
- upcase 转大写

## Color

- rgb
- rgba

## Math

支持基本的数学运算，详见：[Math](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#math)

```js
'circle-radius': ['/', ['get', 'gdp'], 1000]
```

## Zoom

获取当前缩放级别，仅用于 `step` 或 `interpolate` 表达式的输入。

```js
['zoom']: number
```

## Heatmap

获取热力图图层中像素的核密度估计，只能用于 `heatmap-color` 属性。

```js
['heatmap-density']: number
```
