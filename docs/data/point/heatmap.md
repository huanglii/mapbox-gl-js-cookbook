# 热力图

详细规范请查阅：[heatmap](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#heatmap)

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
