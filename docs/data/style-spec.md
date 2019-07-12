# 样式规范
本节只简单介绍样式规范有哪些属性，并**稍**详细介绍了数据源和图层配置，不过以下内容对实际开发已经足够了，想要详细了解样式规范，可查阅 [官方文档](https://docs.mapbox.com/mapbox-gl-js/style-spec/)

一个样式有以下根属性： `version`, `name`, `metadata`, `center`, `zoom`, `bearing`, `pitch`, `light`, `sources`, `sprite`, `glyphs`, `transition`, `layers` 。在开发中一般关注 **`sources`**, **`layers`** 即可。
``` js
{
  "version": 8, // 版本号，必须且必须为 8
  "sprite": "mapbox://sprites/mapbox/streets-v8", // 雪碧图
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf", // 字体
  "sources": {...}, // 数据源
  "layers": [...] // 图层
}
```

## 数据源
数据源的类型由 **`type`** 指定，并且必须是 `vector`, `raster`, `raster-dem`, `geojson`, `image`, `video` 之一。
::: warning
以前官方文档里还有一个 **`canvas`** 类型，不知为何现在没有了，但是经测试，`canvas` 数据源还是支持的。
:::
数据源示例：
``` js
"sources": {
  // vector
  "{source-id}": {
    "type": "vector",
    "tiles": [
      "http://a.example.com/tiles/{z}/{x}/{y}.pbf"
    ],
    "minzoom": 6,
    "maxzoom": 14
  },
  // vector
  "{source-id}": {
    "type": "vector",
    "url": "http://api.example.com/tilejson.json"
  },
  // raster
  "{source-id}": {
    "type": "raster",
    "tiles": [
      "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}",
      "http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}"
    ],
    "tileSize": 256
  },
  // image
  "{source-id}": {
    "type": "image",
    "url": "https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif",
    "coordinates": [
        [-80.425, 46.437],
        [-71.516, 46.437],
        [-71.516, 37.936],
        [-80.425, 37.936]
    ]
  }
}
```

## 图层
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
| **`metadata`** | | 否 | 任意属性，对跟踪图层很有用，不影响渲染 |

::: tip
**`"type"`** 属性必须是 `background`, `fill`, `line`, `symbol`, `raster`, `circle`, `fill-extrusion`, `heatmap`, `hillshade` 之一。

除 `background` 外的图层都需要引用一个源（source），图层从源获取数据、过滤要素和渲染，所以我一般称之为数据源。
:::

::: tip
**`layout`** 属性都有 **`visibility`** 属性，可设置 `"visible"`（默认） 和 `"none"` 。
* `"visible"` 图层显示
* `"none"` 图层隐藏
:::

::: tip
颜色支持 `十六进制`, `RGB`, `RGBA`, `HSL`, `HSLA`, `HTML 预定义颜色名称` 格式。
:::

图层示例：
``` js
"layers": [
  {
    "id": "road",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-streets-v7",
    "source-layer": "road",
    "minzoom": 7,
    "maxzoom": 18,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-color": "hsl(55, 1%, 20%)"
    },
    "filter": ["==", "$type", "LineString"]
    "metadata": {
      "type": "base"
    }
  }
]
```
