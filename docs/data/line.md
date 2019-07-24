# 线
线可以用 **`line`** 表示。

## line

部分 **`paint`** 属性：
| 属性 | 可变 | 描述 |
| :-- | :--: | :-- |
| **`line-color`** | 是 | 颜色，默认`"#000000"` |
| **`line-opacity`** | 是 | 不透明度[0, 1]，默认`1` |
| **`line-width`** | 是 | 线宽，默认`1` |
| **`line-blur`** | 是 | 模糊度，默认`0` |
| **`line-dasharray`** | 是 | 虚线模式，定义虚线和空隙长度 |
| **`line-gap-width`** | 是 | 线条空隙宽度，可实现双线 |

部分 **`layout`** 属性：
| 属性 | 可变 | 描述 |
| :-- | :--: | :-- |
| **`line-cap`** | 是 | 线条末端样式，可选`"butt"`, `"round"`, `"square"`，默认`"butt"` |
| **`line-join`** | 是 | 线条连接样式，可选`"bevel"`, `"round"`, `"miter"`，默认`"miter"` |

<ClientOnly>
  <code-view name="line"/>
</ClientOnly>
