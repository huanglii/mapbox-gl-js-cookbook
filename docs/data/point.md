# 点
点可以用 **`circle`**、**`symbol`**、**`heatmap`** 三种图层类型来表示。除此之外，还可以用 **`Marker`** 表示，`Marker` 的好处在于是 `div` 渲染，可以用 `css` 来实现炫丽的效果，但是点特别多的情况下，不建议使用。

## circle
部分 **`paint`** 属性：
| 属性 | 可变 | 描述 |
| :-- | :--: | :-- |
| **`circle-radius`** | 是 | 半径，默认`5` |
| **`circle-color`** | 是 | 颜色，默认`"#000000"` |
| **`circle-opacity`** | 是 | 不透明度[0, 1]，默认`1` |
| **`circle-stroke-width`** | 是 | 边框宽度，默认`0` |
| **`circle-stroke-color`** | 是 | 边框颜色，默认`"#000000"` |
| **`circle-stroke-opacity`** | 是 | 不透明度[0, 1]，默认`1` |
| **`circle-blur`** | 是 | 模糊度，默认`0` |

<ClientOnly>
  <code-view name="circle"/>
</ClientOnly>

## symbol
部分 **`paint`** 属性：
| 属性 | 可变 | 描述 |
| :-- | :--: | :-- |
| **`icon-opacity`** | 是 | 图标不透明度[0, 1]，默认`1` |
| **`icon-color`** | 是 | 图标颜色，默认`"#000000"` |
| **`icon-halo-color`** | 是 | 图标阴影颜色，默认`"rgba(0, 0, 0, 0)"` |
| **`icon-halo-width`** | 是 | 图标阴影宽度，默认`0` |
| **`icon-halo-blur`** | 是 | 图标模糊度，默认`0` |
| **`text-opacity`** | 是 | 文本不透明度[0, 1]，默认`1` |
| **`text-color`** | 是 | 文本颜色，默认`"#000000"` |
| **`text-halo-color`** | 是 | 文本阴影颜色，默认`"rgba(0, 0, 0, 0)"` |
| **`text-halo-width`** | 是 | 文本阴影宽度，默认`0` |
| **`text-halo-blur`** | 是 | 文本模糊度，默认`0` |

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
  <code-view name="symbol"/>
</ClientOnly>

## heatmap
部分 **`paint`** 属性：
| 属性 | 可变 | 描述 |
| :-- | :--: | :-- |
| **`heatmap-radius`** | 是 | 热力点的影响半径，默认`30` |
| **`heatmap-weight`** | 是 | 权重，默认`1` |
| **`heatmap-intensity`** | 是 | 强度，默认`1` |
| **`heatmap-opacity`** | 是 | 不透明度，默认`1` |
| **`heatmap-color`** | 是 | 颜色，默认值如下： |

``` js
{
  "heatmap-color": [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,"rgba(0, 0, 255, 0)",
    0.1,"royalblue",
    0.3,"cyan",
    0.5,"lime",
    0.7,"yellow",
    1,"red"
  ]
}
```

<ClientOnly>
  <code-view name="heatmap"/>
</ClientOnly>