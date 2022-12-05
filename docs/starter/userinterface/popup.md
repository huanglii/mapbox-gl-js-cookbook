# 弹窗

HTML

```js
const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-96, 37.8])
  .setHTML('<h1>Hello World!</h1>')
  .addTo(map)
```

> 参考：[Display a popup](https://docs.mapbox.com/mapbox-gl-js/example/popup/)

Vue3

```js
const popupNode = document.createElement('div')

createApp(Popup).mount(popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```

ReactDOM

```js
const popupNode = document.createElement('div')

ReactDOM.render(<Popup />, popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```
