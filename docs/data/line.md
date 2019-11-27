# 线
线可以用 **`line`** 表示。

## line
部分 **`paint`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`line-color`** | 颜色，默认`"#000000"` |
| **`line-opacity`** | 不透明度[0, 1]，默认`1` |
| **`line-width`** | 线宽，默认`1` |
| **`line-blur`** | 模糊度，默认`0` |
| **`line-dasharray`** | 虚线模式，定义虚线和空隙长度 |
| **`line-gap-width`** | 线条空隙宽度，可实现双线 |

部分 **`layout`** 属性：
| 属性 | 描述 |
| :-- | :-- |
| **`line-cap`** | 线条末端样式，可选`"butt"`, `"round"`, `"square"`，默认`"butt"` |
| **`line-join`** | 线条连接样式，可选`"bevel"`, `"round"`, `"miter"`，默认`"miter"` |

<ClientOnly>
  <common-code-view name="data-line"/>
</ClientOnly>

## line-gradient
::: warning
1. 使用线性渐变，数据源只能是 **`GeoJSON`**。并设置 **`lineMetrics`** 为 **`true`**；
2. **`line-gradient`** 必须使用表达式，并且目前只能用 **`line-progress`**；
3. 经测试，对于 `multiLineString` 和 `featureCollection` 的线数据会按单个 `lineString` 渲染，如下：
:::

<ClientOnly>
  <common-code-view name="data-line-gradient"/>
</ClientOnly>

> 线性渐变：[Create a gradient line using an expression](https://docs.mapbox.com/mapbox-gl-js/example/line-gradient/)

结合 `symbol` 还可以做出如下箭头效果：
<ClientOnly>
  <common-code-view name="data-line-arrow"/>
</ClientOnly>

## line(point)
线是由点构成的，当然也可以用点表示。

<ClientOnly>
  <common-code-view name="data-line-point"/>
</ClientOnly>
