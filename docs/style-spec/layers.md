# 图层

> [layers](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/)

图层属性配置如下：
| 属性 | 类型 | 必须 | 描述 |
| :-- | :--: | :--: | :-- |
| **`id`** | string | 是 | 图层唯一标识 |
| **`type`** | string | 是 | 图层类型 |
| **`source`** | string | 否 | 数据源名称，图层类型除 `background` 外必须 |
| **`source-layer`** | string | 否 | 图层名，矢量瓦片源（vector）必须，其他类型不可用 |
| **`minzoom`** | number | 否 | 图层最小缩放级别 |
| **`maxzoom`** | number | 否 | 图层最大缩放级别 |
| **`filter`** | expression | 否 | 过滤器 |
| **`layout`** | object | 否 | 图层布局属性 |
| **`paint`** | object | 否 | 图层绘制属性 |
| **`metadata`** | any | 否 | 任意属性，对跟踪图层很有用，不影响渲染 |

图层示例：

```js
'layers': [
  {
    'id': 'road',
    'type': 'line',
    'source': 'mapbox://mapbox.mapbox-streets-v7',
    'source-layer': 'road',
    'minzoom': 7,
    'maxzoom': 18,
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'line-color': 'hsl(55, 1%, 20%)'
    },
    'filter': ['==', '$type', 'LineString']
    'metadata': {
      'type': 'base'
    }
  }
]
```

::: tip 提示

- **`"type"`** 属性必须是 `background`, `fill`, `line`, `symbol`, `raster`, `circle`, `fill-extrusion`, `heatmap`, `hillshade` 之一，各图层类型使用参考[数据](/data/)。
- 除 `background` 外的图层都需要引用一个源（source），图层从源获取数据、过滤要素和渲染。
- **`layout`** 属性都有 **`visibility`** 属性，可设置 `"visible"`（默认） 和 `"none"` 。
- 颜色支持的格式有：十六进制, RGB, RGBA, HSL, HSLA, HTML 预定义颜色名称。
  :::
