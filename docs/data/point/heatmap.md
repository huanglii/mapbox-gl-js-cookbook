# [热力图](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#heatmap)

部分 **`paint`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`heatmap-radius`** | 热力点的影响半径，默认`30` |
| **`heatmap-weight`** | 权重，默认`1` |
| **`heatmap-intensity`** | 强度，默认`1` |
| **`heatmap-opacity`** | 不透明度，默认`1` |
| **`heatmap-color`** | 颜色，默认值如下： |

```js
{
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0, 'rgba(0, 0, 255, 0)',
    0.1, 'royalblue',
    0.3, 'cyan',
    0.5, 'lime',
    0.7, 'yellow',
    1, 'red'
  ]
}
```

<ClientOnly>
  <common-code-view name="data-heatmap"/>
</ClientOnly>

> 热力图：[Create a heatmap layer](https://docs.mapbox.com/mapbox-gl-js/example/heatmap-layer/)
