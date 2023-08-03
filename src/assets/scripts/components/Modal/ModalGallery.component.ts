import { ConnectorItem } from '../../connector'
import Component from '../component'

export interface ModalGalleryOptions {
  icon_left?: string
  icon_right?: string
  icon_close?: string
}

interface ModalGalleryInstance {
  id: string
  index: number
  opened: boolean
  element?: HTMLElement
  children: ConnectorItem[]
}

class ModalGallery extends Component {
  options: ModalGalleryOptions
  instances: ModalGalleryInstance[] = []

  register(connected: ConnectorItem[], options?: ModalGalleryOptions) {
    this.connected = connected
    this.options = options
    this.init()
  }

  init() {
    const config = document.body.dataset.gallery ? JSON.parse(document.body.dataset.gallery) : null

    if (config) {
      if (config['icon_close']) {
        this.options.icon_close = config['icon_close']
      }
      if (config['icon_left']) {
        this.options.icon_left = config['icon_left']
      }
      if (config['icon_right']) {
        this.options.icon_right = config['icon_right']
      }
    }

    this.defaults(this.options)
    this.connected.forEach((instance) => {
      this.boot(instance)
    })
    this.booted()
  }

  boot(connected: ConnectorItem): void {
    const instance = this.instances.find((elm) => elm.id === connected.id)

    if (!instance) {
      this.instances.push({
        id: connected.id,
        index: 0,
        opened: false,
        children: [connected],
      })
    } else {
      instance.children.push(connected)
    }
  }

  booted(): void {
    this.instances.forEach((instance) => {
      instance.children.forEach((child) => {
        child.element.style.cursor = 'pointer'
        child.element.addEventListener('mouseenter', () => child.element.classList.add('is-hover'))
        child.element.addEventListener('mouseleave', () => child.element.classList.remove('is-hover'))
        child.element.addEventListener('click', () => {
          this.open(instance, instance.children.indexOf(child))
        })
      })
    })
  }

  render(instance: ModalGalleryInstance) {
    const gallery = document.createElement('div')
    gallery.classList.add('modal__gallery')
    gallery.dataset.id = instance.id

    const galleryClose = document.createElement('button')
    galleryClose.classList.add('modal__gallery--close')
    galleryClose.type = 'button'
    galleryClose.innerHTML = `<i class="${this.options.icon_close}"></i>`
    galleryClose.addEventListener('click', () => this.close(instance))

    const galleryPrev = document.createElement('button')
    galleryPrev.classList.add('modal__gallery--prev')
    galleryPrev.type = 'button'
    galleryPrev.innerHTML = `<i class="${this.options.icon_left}"></i>`
    galleryPrev.addEventListener('click', () => this.prev(instance))

    const galleryNext = document.createElement('button')
    galleryNext.classList.add('modal__gallery--next')
    galleryNext.type = 'button'
    galleryNext.innerHTML = `<i class="${this.options.icon_right}"></i>`
    galleryNext.addEventListener('click', () => this.next(instance))

    const galleryImage = document.createElement('figure')
    galleryImage.classList.add('modal__gallery--image')
    galleryImage.innerHTML = `
            <img src="${instance.children[instance.index].data.src || instance.children[instance.index].element.getAttribute('src') || '#'}" alt="${
      instance.children[instance.index].element.getAttribute('alt') || 'no name'
    }" draggable="false">
            <figcaption class="modal__gallery--caption">
                <div class="modal__gallery--title">${instance.children[instance.index].data.title || instance.children[instance.index].element.getAttribute('title') || ''}</div>
                <div class="modal__gallery--counter">${instance.index + 1} / ${instance.children.length}</div>
            </figcaption>
        `

    gallery.append(galleryClose)
    gallery.append(galleryImage)
    gallery.append(galleryPrev)
    gallery.append(galleryNext)
    document.querySelector('#modal').append(gallery)
    instance.opened = true
    instance.element = gallery

    gallery.addEventListener('click', (e) => {
      if (e.target === gallery) {
        this.close(instance)
      }
    })

    galleryImage.addEventListener('click', () => this.next(instance))

    window.addEventListener('keydown', (e) => {
      if (instance.element.classList.contains('is-active')) {
        switch (e.keyCode) {
          case 39:
            this.next(instance)
            break
          case 37:
            this.prev(instance)
            break
          case 27:
            this.close(instance)
            break
          default:
            break
        }
      }
    })
  }

  open(instance: ModalGalleryInstance, index: number = 0) {
    if (!instance.opened) this.render(instance)

    this.to(instance, index)

    setTimeout(() => {
      instance.element.classList.add('is-active')
      document.body.classList.add('is-overlay')
    }, 1)
  }

  close(instance: ModalGalleryInstance) {
    instance.element.classList.remove('is-active')
    document.body.classList.remove('is-overlay')
  }

  to(instance: ModalGalleryInstance, index: number) {
    instance.index = index >= 0 && index < instance.children.length ? index : 0

    const image: HTMLImageElement = instance.element.querySelector('.modal__gallery--image img')
    const counter: HTMLImageElement = instance.element.querySelector('.modal__gallery--counter')
    const title: HTMLImageElement = instance.element.querySelector('.modal__gallery--title')

    image.src = instance.children[instance.index].data.src || instance.children[instance.index].element.getAttribute('src') || '#'
    image.alt = instance.children[instance.index].element.getAttribute('alt') || 'no name'
    counter.innerText = `${instance.index + 1} / ${instance.children.length}`
    title.innerText = instance.children[instance.index].data.title || instance.children[instance.index].element.getAttribute('title') || ''
  }

  next(instance: ModalGalleryInstance) {
    if (instance.index + 1 === instance.children.length) {
      instance.index = 0
    } else {
      instance.index++
    }

    this.to(instance, instance.index)
  }

  prev(instance: ModalGalleryInstance) {
    if (instance.index === 0) {
      instance.index = instance.children.length - 1
    } else {
      instance.index--
    }

    this.to(instance, instance.index)
  }
}

export default new ModalGallery()
