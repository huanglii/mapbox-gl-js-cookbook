# 专题图

## 分级色彩图
分级色彩图即使用不同的颜色来表示单元空间的数值。分级色彩图可能是最为常见并最为大家所知的一类专题地图，经常被用来表示人口统计数据或行政区域数据。

在 Mapbox GL JS 中可使用 `case`、`match`、`interpolate`、`step` 等来实现不同级别的渲染。
``` js
'fill-color': [
  'case',
  ['<', ['get', 'value'], 20], '#FFD273',
  ['<', ['get', 'value'], 40], '#E86D68',
  ['<', ['get', 'value'], 60], '#A880FF',
  ['<', ['get', 'value'], 80], '#68E0E8',
  ['<', ['get', 'value'], 100], '#9BFF69',
  '#000'
]
```

<ClientOnly>
  <code-view name="choropleth"/>
</ClientOnly>

## 比例符号图
比例符号图中，所使用的符号（如圆圈）与其所代表的数值成比例地缩放。 符号可能代表点数据，但使用比例符号来表示面数据也十分常见。

<ClientOnly>
  <code-view name="proportional"/>
</ClientOnly>

## 点密度图
点密度图使用点来表示地理现象的数量特征。点密度图依靠视觉上的分散来展示空间模式。 点密度图中，点可以是一对一的关系，即图中的一个点表示一个具体的事物（例如每个投票站一个点），也可以是一对多的关系，其中每个点代表一定数量的事物。

<ClientOnly>
  <code-view name="dot"/>
</ClientOnly>

## 等值线图
在这类专题图中，通过对离散点进行插值来获得连续的数值。通常被用于表示高程或者深度，但也可以用来表示更多的专题现象，例如温度、天气、社会现象等。

<ClientOnly>
  <code-view name="contours"/>
</ClientOnly>
