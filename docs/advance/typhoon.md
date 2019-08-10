# 台风路径
2019 年第 09 号超强台风利奇马（LEKIMA）路径可视化，数据截止时间：2019/8/9 20:00:00。数据来自“浙江台风路径实时发布系统”，各平台的台风数据格式都大同小异，这里对接口原始数据处理后再做可视化。关键点在于将台风的路径点数据处理成 GeoJSON 数据，使用 [Turf](http://turfjs.org/) 库可以方便处理。

可视化过程中涉及到一些 [表达式(Expressions)](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions)和 [过滤器(Filters)](https://docs.mapbox.com/mapbox-gl-js/style-spec/#other-filter) 。

* 从数据属性取值及转换为数字
``` js
'circle-radius': ['to-number', ['get', 'power']]
```

* 线宽根据缩放级别线性变化
``` js
// 缩放级别从 5 变化到 10，线宽从 1 变化到 3 。
'line-width': [
  'interpolate',
  ['linear'],
  ['zoom'],
  5, 1,
  10, 3
]
```

* 贝塞尔曲线、数学计算和类型转换
``` js
'circle-radius': [
  'interpolate',
  [
    'cubic-bezier',
    0.85,
    0.45,
    0,
    0.65
  ],
  ['zoom'],
  5,
  ['*', ['to-number', ['get', 'power']], 0.4],
  10,
  ['*', ['to-number', ['get', 'power']], 1]
]
```

* 根据属性 `tm` 分级渲染
``` js
'line-color': [
  'match',
  ['get', 'tm'],
  '中国', '#FF4050',
  '中国香港', '#FF66FF',
  '中国台湾', '#FFA040',
  '日本', '#43FF4B',
  '美国', '#40DDFF',
  '#ff0000'
]
```

* 数据源中集合类型为 `LineString` 和属性 `type` 为 `track` 的数据
``` js
'filter': ['all', ['==', '$type', 'LineString'], ['==', 'type', 'track']]
```


<ClientOnly>
  <code-view name="typhoon" />
</ClientOnly>
