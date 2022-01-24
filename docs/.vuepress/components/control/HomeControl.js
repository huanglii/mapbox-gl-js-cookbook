class HomeControl {
  constructor(options) {
    this._className = 'mapboxgl-ctrl'
    this._options = Object.assign(
      {},
      {
        zoom: 1,
        center: [0, 0],
      },
      options
    )
    this._onClickHome = this._onClickHome.bind(this)
  }
  onAdd(map) {
    this._map = map
    this._container = DOM.create('div', `${this._className} mapboxgl-ctrl-group`)
    this._render()
    return this._container
  }

  onRemove() {
    DOM.remove(this._container)
    this._map = undefined
  }

  _render() {
    const button = DOM.create(
      'button',
      `${this._className}-icon ${this._className}-home`,
      this._container
    )
    button.type = 'button'
    button.addEventListener('click', this._onClickHome)
  }

  _onClickHome() {
    this._map.easeTo(this._options)
  }
}

export default HomeControl

const DOM = {}
DOM.create = function (tagName, className, container) {
  const el = window.document.createElement(tagName)
  if (className !== undefined) el.className = className
  if (container) container.appendChild(el)
  return el
}
DOM.remove = function (node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}
