# 弹窗

HTML

```js
const popup = new mapboxgl.Popup({ className: 'my-class' })

popup.setHTML('<h1>Hello World!</h1>').setLngLat(e.lngLat).addTo(map)
```

ReactDOM

```js
const popupNode = document.createElement('div')

ReactDOM.render(<Popup />, popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```
