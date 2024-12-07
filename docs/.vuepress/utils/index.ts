import { withBase } from 'vuepress/client'

export const createDom = (tagName: string, className?: string, container?: HTMLElement) => {
  const el = window.document.createElement(tagName)
  if (className) el.className = className
  if (container) container.appendChild(el)

  return el
}

export const removeDom = (node: HTMLElement) => {
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}

export const createPropHtml = (title: string, prop: Record<string, any>) => {
  return `
        <div class="title"><b>${title}</b></div>
        <div class="content">
          ${Object.keys(prop)
            .map((key) => `${`<p><b>${key}: </b>${prop[key]}</p>`}`)
            .join('')}
        </div>
      `
}

export const addImages = (map: mapboxgl.Map, urls: string[]) => {
  for (const url of urls) {
    const id = url.replace(/(.*\/)*([^.]+).*/gi, '$2')
    map.loadImage(withBase(url), (error, image) => {
      if (error) throw error
      if (image && !map.hasImage(id)) map.addImage(id, image)
    })
  }
}
