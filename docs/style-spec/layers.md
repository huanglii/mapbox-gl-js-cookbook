# [图层](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/)

图层属性列出了所有样式所有的图层，图层类型由 `type` 指定，且必须是 `background`（背景）, `fill`（填充）, `line`（线）, `symbol`（符号）, `raster`（栅格）, `circle`（圆）, `fill-extrusion`（填充挤压）, `heatmap`（热力图）, `hillshade`（山体阴影）, `sky`（天空） 之一。除了 `background` 和 `sky`，其他所有类型的图层必须是指定数据源（source），图层从源获取数据、过滤要素和渲染。

图层示例：

```js
"layers": [
  {
    "id": "water",
    "source": "mapbox-streets",
    "source-layer": "water",
    "type": "fill",
    "paint": {
      "fill-color": "#00ffff"
    }
  }
]
```

图层的属性如下：
| 属性 | 类型 | 必须 | 描述 |
| :-- | :--: | :--: | :-- |
| **`id`** | string | 是 | 图层唯一标识 |
| **`type`** | string | 是 | 图层类型 |
| **`source`** | string | 否 | 数据源名称，除 `background` 图层类型外必须 |
| **`source-layer`** | string | 否 | 图层名，矢量瓦片源（vector）必须，其他类型不可用 |
| **`minzoom`** | number | 否 | 图层最小缩放级别 |
| **`maxzoom`** | number | 否 | 图层最大缩放级别 |
| **`filter`** | expression | 否 | 过滤器 |
| **`layout`** | object | 否 | 图层布局属性 |
| **`paint`** | object | 否 | 图层绘制属性 |
| **`metadata`** | any | 否 | 任意属性，对跟踪图层很有用，不影响渲染 |

::: tip

- `layout` 属性都有 `visibility` 属性，可设置 `"visible"`（默认） 和 `"none"` 。
- 颜色支持的格式有：十六进制, RGB, RGBA, HSL, HSLA, HTML 预定义颜色名称。
  :::

## 背景

[背景（background）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background)图层覆盖整个地图，可配置颜色和图案填充。

![background](https://docs.mapbox.com/mapbox-gl-js/assets/layer-background-800-6238294796aee07f7de060be84134ee0.webp)

## 填充

[填充（fill）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill)图层在地图上渲染一个或多个填充（和可选描边）的面，可以使用填充图层来配置面或多面要素的渲染。

![fill](https://docs.mapbox.com/mapbox-gl-js/assets/layer-fill-800-956ec22219011af64e9a73be6776999d.webp)

## 线

[线（line）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line) 图层在地图上呈现一条或多条描边线，可以使用线图层来配置线或线集要素的渲染。

![line](https://docs.mapbox.com/mapbox-gl-js/assets/layer-line-500-f328adc8f2ffbbe684f3db9d05adbd78.webp)

## 符号

[符号（symbol）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol)图层在地图上的点或沿线渲染图标和文本注记。

![symbol](https://docs.mapbox.com/mapbox-gl-js/assets/layer-symbol-500-2b417e90901880964662cd37bc09c3f2.webp)

## 栅格

[栅格（raster）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#raster)图层在地图上渲染栅格瓦片。

![raster](https://docs.mapbox.com/mapbox-gl-js/assets/layer-raster-500-9d2a883f1524f6b314270c88fc3f0c88.webp)

## 圆

[圆（circle）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#circle)图层在地图上渲染填充圆。

![circle](https://docs.mapbox.com/mapbox-gl-js/assets/layer-circle-800-8da1cebf8ee0cd17ed8e953422192008.webp)

## 填充挤压

[填充挤压（fill-extrusion）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill-extrusion) 图层与填充（fill）图层不同的是可以设置挤压以渲染 3D 多边形。

![fill extrusion](https://docs.mapbox.com/mapbox-gl-js/assets/layer-fill-extrusion-800-6a290521bceb372f917cff4191e2fb9a.webp)

## 热力图

[热力图（heatmap）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#heatmap)图层渲染一系列颜色以表示区域中点的密度。

![heatmap](https://docs.mapbox.com/mapbox-gl-js/assets/layer-heatmap-800-692b263d4cf5147a5b54bbce8ad2e105.webp)

## 山体阴影

[山体阴影（hillshade）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#hillshade)图层渲染 DEM 数据，仅支持 [Mapbox Terrain RGB](https://docs.mapbox.com/help/how-mapbox-works/mapbox-data/#mapbox-terrain-rgb) 和 Mapzen Terrarium tiles。

![hillshade](https://docs.mapbox.com/mapbox-gl-js/assets/layer-hillshade-800-508600e65d11aed46788e5b98a95e2a0.webp)

## 天空

从 [v2.9.0](https://github.com/mapbox/mapbox-gl-js/releases/tag/v2.9.0) 开始，[雾（fog）](https://docs.mapbox.com/mapbox-gl-js/style-spec/fog/)是大气样式的首选方法。[地球投影（globe）](https://docs.mapbox.com/mapbox-gl-js/guides/projections/#globe)不支持[天空（sky）](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#sky)图层，并将在将来的版本中逐步淘汰。

![sky](https://docs.mapbox.com/mapbox-gl-js/assets/layer-sky-800-3e3b3471deaed21ba254e3b8da064333.webp)
