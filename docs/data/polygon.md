# 面

## 填充

详细规范请查阅：[fill](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill)

```js
map.addLayer({
  id: 'maine',
  type: 'fill',
  source: 'maine', // 多边形数据源
  layout: {},
  paint: {
    'fill-color': '#0080ff',
    'fill-opacity': 0.5,
  },
})
```

下面的示例，展示了多边形的多种表现方法：填充、纹理填充、线。

<ClientOnly>
  <common-code-view name="data-fill"/>
</ClientOnly>

## 填充挤压

详细规范请查阅：[fill-extrusion](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill-extrusion)

<ClientOnly>
  <common-code-view name="data-fill-extrusion"/>
</ClientOnly>
