# 专题图
Mapbox GL 样式中可使用 `interpolate`、`step`、`case`、`match` 及函数 `function` 等来实现常见的专题图。这几种方法都可以相互转换，但是要注意临界值的取值。

## 分级色彩图
分级色彩图即使用不同的颜色来表示单元空间的数值。分级色彩图可能是最为常见并最为大家所知的一类专题地图，经常被用来表示人口统计数据或行政区域数据。

<ClientOnly>
  <common-color-table :colors="[['[0, 20)', '#FFD273'], ['[20, 40)', '#E86D68'], ['[40, 60)', '#A880FF'], ['[60, 80)', '#68E0E8'], ['[80, 100]', '#9BFF69']]"/>
</ClientOnly>

使用 `case` 表达式如下：

``` js
'fill-color': [
  'case',
  ['<', ['get', 'value'], 20], '#FFD273',
  ['<', ['get', 'value'], 40], '#E86D68',
  ['<', ['get', 'value'], 60], '#A880FF',
  ['<', ['get', 'value'], 80], '#68E0E8',
  ['<=', ['get', 'value'], 100], '#9BFF69',
  '#000' // 默认值
]
```

<ClientOnly>
  <common-code-view name="choropleth"/>
</ClientOnly>

## 唯一值图
唯一值可对值的定性分类进行符号化。示例包括土地类型、规划区域、投票意向等。

<ClientOnly>
  <common-color-table :colors="[['1', '#FFD273'], ['2', '#E86D68'], ['3', '#A880FF'], ['4', '#68E0E8'], ['5', '#9BFF69']]"/>
</ClientOnly>

使用 `match` 表达式如下：

``` js
'fill-color': [
  'match',
  ['get', 'type'],
  1, '#FFD273',
  2, '#E86D68',
  3, '#A880FF',
  4, '#68E0E8',
  5, '#9BFF69',
  '#000' // 无匹配值颜色
],
```

使用 `function` 如下：
``` js
'fill-color': {
  'property': 'type',
  'type': 'categorical'
  'stops': [
    [1, '#FFD273'],
    [2, '#E86D68'],
    [3, '#A880FF'],
    [4, '#68E0E8'],
    [5, '#9BFF69']
  ]
}
```

<ClientOnly>
  <common-code-view name="unique"/>
</ClientOnly>

## 比例符号图
比例符号图中，所使用的符号（如圆）与其所代表的数值成比例地缩放。 符号可能代表点数据，但使用比例符号来表示面数据也十分常见。

我们通常会使用以下公式将数值归一化到指定区间 **[MIN_R, MAX_R]**。其中：MAX_V、MIN_V 分别为样本数据的最大值、最小值。
<div class="formula">
  <p>R = (MAX_R - MIN_R) / (MAX_V - MIN_V) * (V - MIN_V) + MIN_R</p>
</div>

Mapbox GL 样式中使用如下：
``` js
'circle-radius': [
  '+',
  ['*',
    [
      '/',
      ['-', MAX_R, MIN_R],
      ['-', MAX_V, MIN_V]
    ],
    ['-', ['get', 'value'], MIN_V]
  ],
  MIN_R
]
```

但是，Mapbox GL 表达式提供了插值方法，我们可以使用如下表达式，省去了上面复杂的表达式，并且代码可读性更好了。
``` js
'circle-radius': [
  'interpolate', ['linear'], ['get', 'value'],
  // value ≤ 0 时，半径为 5
  0, 5,
  // value ≥ 100 时，半径为 15
  100, 15
],
```

<ClientOnly>
  <common-code-view name="proportional"/>
</ClientOnly>

## 点密度图
点密度图使用点来表示地理现象的数量特征。点密度图依靠视觉上的分散来展示空间模式。 点密度图中，点可以是一对一的关系，即图中的一个点表示一个具体的事物（例如每个投票站一个点），也可以是一对多的关系，其中每个点代表一定数量的事物。通常点密度图还会给点设置不同的颜色。

<ClientOnly>
  <common-color-table :colors="[['＜10', '#0098A3'], ['[10,20)', '#00CA8D'], ['[20,30)', '#37C508'], ['[30,40)', '#98F300'], ['≥40', '#EFFF85']]"/>
</ClientOnly>

使用 `step` 表达式如下：
``` js
'circle-color': [
  'step',
  ['to-number', ['get', 'CID']],
  '#0098A3',
  10, '#00CA8D',
  20, '#37C508',
  30, '#98F300',
  40, '#EFFF85'
]
```

<ClientOnly>
  <common-code-view name="dot"/>
</ClientOnly>

## 等值线图
在这类专题图中，通过对离散点进行插值来获得连续的数值。通常被用于表示高程或者深度，但也可以用来表示更多的专题现象，例如温度、天气、社会现象等。

示例：高程为 100 的整数倍加粗显示。
``` js
'line-width': [
  'case',
  ['==', ['%', ['get', 'ele'], 100], 0], 2,
  1
]
```
<ClientOnly>
  <common-code-view name="contours"/>
</ClientOnly>
