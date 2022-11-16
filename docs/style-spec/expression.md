# 表达式

> [expressions](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/)

任何 `layout` 属性、`paint` 属性或 `filter` 的值都可以是表达式。示例：

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

## [Types](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#types)

表达式拥有强大的类型系统，并支持转换和检测。比如，表达式的输入和输出数据类型需和样式规范中的类型一致，在计算表达式时会自动检测，如果检测到错误，会在控制台输出错误提示。

## [Feature data](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#feature-data)

- feature-state：要素状态，要素状态不是数据的某一属性，需要对通过要素 `id` 设置，如给要素设置 `hover` 状态：`map.setFeatureState({source: 'states', id: hoveredStateId}, {hover: false})`，然后在表达式中即可使用：`['feature-state', 'hover']`

> 示例：[Create a hover effect](https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/)

## [Lookup](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#lookup)

### at

从数组中检索项目

```js
'text-field': ['to-string', ['at', 1, ['get', 'fruits']]] // 香蕉
```

### [get](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#get)

获取要素属性，如果提供了第二个参数，则判断第二个参数对象。语法如下：

```
["get", string]: value

["get", string, object]: value
```

示例：

```js
'text-field': ['get', 'title'] // 有点意思
// 对象
'text-field': ['get', 'name', ['literal', { name: '重庆市' }]] // 重庆市
// 要素属性对象
'text-field': ['get', 'name', ['object', ['get', 'district']]], // // 重庆市
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

## Ramps, scales, curves

- interpolate：插值，支持 `linear`、`exponential` 和 `cubic-bezier`
- step：分段

## Variable binding

- let 绑定变量
- var 引用 `let` 绑定的变量

## String

- downcase 转小写
- upcase 转大写

## Color

- rgb
- rgba

## Math

支持基本的数学运算，详见：[Math](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#math)

```js
;['/', ['get', 'gdp'], 1000]
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
