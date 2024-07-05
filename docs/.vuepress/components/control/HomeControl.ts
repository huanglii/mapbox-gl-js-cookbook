import type { AnimationOptions, CameraOptions } from 'mapbox-gl'
import { createDom, removeDom } from '../../utils'

const className = 'mapboxgl-ctrl'
class HomeControl implements mapboxgl.IControl {
  private _container: HTMLElement
  private _map?: mapboxgl.Map
  private _options: CameraOptions & AnimationOptions

  constructor(options: CameraOptions & AnimationOptions) {
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
  onAdd(map: mapboxgl.Map) {
    this._map = map
    this._container = createDom('div', `${className} ${className}-group`)
    this._render()
    return this._container
  }

  onRemove() {
    removeDom(this._container)
    this._map = undefined
  }

  _render() {
    const button = createDom('button', `${className}-icon ${className}-home`, this._container)
    button.setAttribute('type', 'button')
    button.title = '回到初始状态'
    button.addEventListener('click', this._onClickHome)
  }

  _onClickHome() {
    this._map?.easeTo(this._options)
  }
}

export default HomeControl
