# PathLayer
路径图层，支持带高度的路径。

[示例数据](https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/bart-lines.json)

``` js
import { PathLayer } from '@deck.gl/layers'

const layer = new PathLayer({
  id: 'path-layer',
  data,
  pickable: true,
  widthScale: 20,
  widthMinPixels: 2,
  getPath: d => d.path,
  getColor: d => d.color,
  getWidth: d => 5,
  onHover: ({ object, x, y }) => {
    const tooltip = object.name
    /* Update tooltip
        http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
    */
  }
})
```

## 参数

`getPath`([Function](https://deck.gl/#/documentation/developer-guide/using-layers?section=accessors), optional)

调用数据流中的每个对象以检索其对应的路径。默认: `object => object.path`

路径支持以下两种格式：
* 点（`[x, y, z]`）数组，兼容 GeoJSON [LineString](https://tools.ietf.org/html/rfc7946#section-3.1.4) 规范。带 `z` 值，路径会拉伸高度，不带则默认为 `0`。
* 扁平数组（`[x0, y0, z0, x1, y1, z1, ...]`），默认要求包含 `x y z`。如果只有 `x y`，需设置 `positionFormat` 参数为 `XY`。

``` js
new PathLayer({
  ...
  getPath: object => object.vertices, // [x0, y0, x1, y1, x2, y2, ...]
  positionFormat: `XY`
})
```

<ClientOnly>
  <common-code-view name="deckgl-path-layer" />
</ClientOnly>
