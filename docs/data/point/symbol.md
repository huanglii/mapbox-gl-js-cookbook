# [符号](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol)

部分 **`paint`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`icon-opacity`** | 图标不透明度[0, 1]，默认`1` |
| **`icon-color`** | 图标颜色，默认`"#000000"` |
| **`icon-halo-color`** | 图标阴影颜色，默认`"rgba(0, 0, 0, 0)"` |
| **`icon-halo-width`** | 图标阴影宽度，默认`0` |
| **`icon-halo-blur`** | 图标模糊度，默认`0` |
| **`text-opacity`** | 文本不透明度[0, 1]，默认`1` |
| **`text-color`** | 文本颜色，默认`"#000000"` |
| **`text-halo-color`** | 文本阴影颜色，默认`"rgba(0, 0, 0, 0)"` |
| **`text-halo-width`** | 文本阴影宽度，默认`0` |
| **`text-halo-blur`** | 文本模糊度，默认`0` |

部分 **`layout`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`symbol-placement`** | 注记相对位置，枚举：`"point"`（默认）, `"line"`, `"line-center"` |
| **`icon-allow-overlap`** | 图标是否允许重叠，默认`false` |
| **`icon-size`** | 图标尺寸（图标原始尺寸的倍数），默认`1` |
| **`icon-image`** | 雪碧图的图标名称 |
| **`icon-rotate`** | 图标旋转角度，默认`0` |
| **`icon-padding`** | 图标内边距，默认`2` |
| **`icon-offset`** | 图标与锚点的偏移距离，单位：`ems`，默认`[0, 0]` |
| **`text-field`** | 文本字段，默认`""` |
| **`text-size`** | 文本大小，默认`16` |
| **`text-allow-overlap`** | 文本是否允许重叠，默认`false` |

<ClientOnly>
  <common-code-view name="data-symbol"/>
</ClientOnly>

> 圆形扩散：[Add an animated icon to the map](https://docs.mapbox.com/mapbox-gl-js/example/add-image-animated/)
