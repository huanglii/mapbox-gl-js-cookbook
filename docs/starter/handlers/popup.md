# 弹窗

HTML

```js
const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-96, 37.8])
  .setHTML('<h1>Hello World!</h1>')
  .addTo(map)
```

> 参考：[Display a popup](https://docs.mapbox.com/mapbox-gl-js/example/popup/)

Vue 3

```js
const popupNode = document.createElement('div')
// Popup 为 Vue3 组件
createApp(Popup).mount(popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```

React 17

```js
const popupNode = document.createElement('div')
// Popup 为 React 组件
ReactDOM.render(<Popup />, popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```

React 18

```js
const popupNode = document.createElement('div')
// Popup 为 React 组件
createRoot(popupNode).render(<Popup />)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```
