# 自定义数据源

自 `v2.8.0` 起，可以使用自定义数据源，自定义数据源接口允许用户加载和修改自己的瓦片，必须实现 `loadTile`。

<ClientOnly>
  <common-code-view name="custom-source" />
</ClientOnly>

> 参考：[custom-source](https://github.com/mapbox/mapbox-gl-js/blob/main/debug/custom-source.html)
