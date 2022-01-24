# 控件

Mapbox GL JS 提供了 **`IControl`** 接口。自定义控件必须实现 **`onAdd`** 和 **`onRemove`** 方法，并且有一个 HTML 元素，通常为 `div` 元素。如果要使用 Mapbox GL JS 默认控件样式，需要给元素添加 **`mapboxgl-ctrl`** 样式。

## 官方示例

```js
// es6 类
class HelloWorldControl {
  onAdd(map) {
    this._map = map
    this._container = document.createElement('div')
    this._container.className = 'mapboxgl-ctrl'
    this._container.textContent = 'Hello, world'
    return this._container
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container)
    this._map = undefined
  }
}

// es5 原型类
function HelloWorldControl() {}

HelloWorldControl.prototype.onAdd = function (map) {
  this._map = map
  this._container = document.createElement('div')
  this._container.className = 'mapboxgl-ctrl'
  this._container.textContent = 'Hello, world'
  return this._container
}

HelloWorldControl.prototype.onRemove = function () {
  this._container.parentNode.removeChild(this._container)
  this._map = undefined
}
```

## 城市选择器

一个快速定位城市的控件。GitHub 地址：[城市选择器](https://github.com/huanglii/city-selector-control)

<ClientOnly>
  <common-code-view name="control-city-selector" :is-code-view="false"/>
</ClientOnly>
