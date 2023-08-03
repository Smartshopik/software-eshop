import { ConnectorItem } from '../../connector/index'
import Component from '../component'

export interface InputRangeOptions {
  values?: boolean
}

interface InputRangeFaker {
  root?: HTMLDivElement
  track?: {
    root?: HTMLDivElement
    node?: HTMLDivElement[]
    range?: HTMLDivElement
  }
  values?: {
    root?: HTMLDivElement
    value?: {
      root?: HTMLDivElement
      span?: HTMLSpanElement
      p?: HTMLParagraphElement
    }[]
  }
}

interface InputRangeInstance extends ConnectorItem {
  inputs: any
  faker?: InputRangeFaker
  value?: number[]
  step?: number[]
  unit?: string
  label?: string[]
  min?: number
  max?: number
  willMoving?: 'left' | 'right' | null
  isMoving?: 'left' | 'right' | null
  wasDispatched: boolean
  mouse?: [number | null, number | null]
  decimals: boolean
  range?: {
    min?: number
    max?: number
    full?: number
    minPercent?: number
    maxPercent?: number
    stepPercent?: number
    trackPercent?: number
    mouse?: number | 1
  }
}

class InputRange extends Component {
  options: InputRangeOptions
  instances: InputRangeInstance[] = []

  init() {
    this.defaults(this.options)
    this.connected.forEach((instance) => {
      if (!instance.element.hasAttribute('init')) {
        instance.element.setAttribute('init', 'true')
        this.boot(instance)
      }
    })
  }

  register(connected: ConnectorItem[], options?: InputRangeOptions) {
    this.id = connected[0].type
    this.connected = connected
    this.options = options
    this.init()
  }

  boot(instance: ConnectorItem): void {
    const index = this.render(instance)
    this.instances[index].range = {}
    this.change(this.instances[index])
    this.handleEvent(this.instances[index])
  }

  change(instance: InputRangeInstance): void {
    instance.range.min = parseFloat((instance.value[0] - instance.min).toFixed(2))
    instance.range.max = parseFloat((instance.max - instance.value[1]).toFixed(2))
    instance.range.full = instance.max - instance.min
    instance.range.minPercent = parseFloat(((instance.range.min * 100) / instance.range.full).toFixed(2))
    instance.range.maxPercent = parseFloat(((instance.range.max * 100) / instance.range.full).toFixed(2))
    instance.range.stepPercent = parseFloat(((instance.step[0] * 100) / instance.range.full).toFixed(2))
    instance.range.trackPercent = Math.ceil(parseFloat(((instance.range.mouse * 100) / instance.faker.track.root.getBoundingClientRect().width).toFixed(2)) / 0.25) * 0.25 || null

    if (instance.range.maxPercent < 0) {
      instance.range.maxPercent = 0
    }

    if (instance.range.minPercent < 0) {
      instance.range.minPercent = 0
    }

    instance.faker.values.value[0].p.innerText = `${instance.value[0]} ${instance.unit || ''}`
    instance.faker.values.value[1].p.innerText = `${instance.value[1]} ${instance.unit || ''}`
    instance.inputs[0].setAttribute('value', instance.value[0])
    instance.inputs[1].setAttribute('value', instance.value[1])

    instance.faker.track.range.style.left = instance.range.minPercent + '%'
    instance.faker.track.node[0].style.left = instance.range.minPercent + '%'

    instance.faker.track.range.style.right = instance.range.maxPercent + '%'
    instance.faker.track.node[1].style.right = instance.range.maxPercent + '%'
  }

  handleEvent(instance: InputRangeInstance): void {
    instance.mouse = [null, null]
    instance.willMoving = null

    instance.faker.track.node[0].addEventListener('mousedown', (e) => {
      document.body.style.userSelect = 'none'
      instance.willMoving = 'left'
      instance.mouse[0] = e.clientX
    })

    instance.faker.track.node[0].addEventListener('touchstart', (e) => {
      document.body.style.userSelect = 'none'
      instance.willMoving = 'left'
    })

    instance.faker.track.node[1].addEventListener('mousedown', (e) => {
      document.body.style.userSelect = 'none'
      instance.willMoving = 'right'
    })

    instance.faker.track.node[1].addEventListener('touchstart', (e) => {
      document.body.style.userSelect = 'none'
      instance.willMoving = 'right'
    })

    document.addEventListener('mouseup', (e) => {
      if (instance.willMoving !== null) {
        instance.inputs[0].dispatchEvent(new Event('change'))
      }
      setTimeout(() => {
        instance.willMoving = null
        instance.isMoving = null
      }, 1)

      document.body.style.removeProperty('user-select')
      instance.wasDispatched = false
    })

    document.addEventListener('touchend', (e) => {
      if (instance.willMoving !== null) {
        instance.inputs[0].dispatchEvent(new Event('change'))
      }
      setTimeout(() => {
        instance.willMoving = null
        instance.isMoving = null
      }, 1)
      document.body.style.removeProperty('user-select')
    })

    document.addEventListener('mousemove', (e) => {
      if (instance.willMoving) {
        this.handleMove(e, instance)
      }
    })

    document.addEventListener('touchmove', (e) => {
      if (instance.willMoving) {
        this.handleMove(e, instance)
      }
    })

    instance.faker.track.root.addEventListener('click', (e) => {
      if (!instance.willMoving) {
        this.handleClick(e, instance)
        instance.inputs[0].dispatchEvent(new Event('change'))
      }
    })
  }

  handleClick(e: any, instance: InputRangeInstance): void {
    instance.range.mouse = e.x - instance.faker.track.root.getBoundingClientRect().x
    instance.range.trackPercent = Math.ceil(parseFloat(((instance.range.mouse * 100) / instance.faker.track.root.getBoundingClientRect().width).toFixed(2)) / 0.25) * 0.25 || null

    if (
      Math.abs(
        instance.faker.track.range.getBoundingClientRect().width + (instance.faker.track.range.getBoundingClientRect().x - instance.faker.track.root.getBoundingClientRect().x) - instance.range.mouse
      ) < Math.abs(instance.faker.track.range.getBoundingClientRect().x - instance.faker.track.root.getBoundingClientRect().x - instance.range.mouse)
    ) {
      instance.value[1] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))
      instance.range.max = parseFloat((instance.max - instance.value[1]).toFixed(2))
      if (!instance.decimals) {
        instance.value[1] = parseInt(instance.value[1].toString())
      }

      this.instances.forEach((item: InputRangeInstance) => {
        if (item !== instance && item.id === instance.id) {
          item.value[1] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))
          item.range.max = parseFloat((instance.max - item.value[1]).toFixed(2))
          if (!item.decimals) {
            item.value[1] = parseInt(item.value[1].toString())
          }
          this.change(item)
        }
      })
    } else {
      instance.value[0] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))
      instance.range.min = parseFloat((instance.value[0] - instance.min).toFixed(2))
      if (!instance.decimals) {
        instance.value[0] = parseInt(instance.value[0].toString())
      }
      this.instances.forEach((item: InputRangeInstance) => {
        if (item !== instance && item.id === instance.id) {
          item.value[0] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))
          item.range.min = parseFloat((item.value[0] - instance.min).toFixed(2))
          if (!item.decimals) {
            item.value[0] = parseInt(item.value[0].toString())
          }
          this.change(item)
        }
      })
    }

    this.change(instance)
  }

  handleMove(e: any, instance: InputRangeInstance): void {
    instance.range.mouse = e.touches ? e.touches[0].clientX - instance.faker.track.root.getBoundingClientRect().x : e.x - instance.faker.track.root.getBoundingClientRect().x

    if (instance.willMoving === 'right') {
      instance.value[1] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))

      if (!instance.decimals) {
        instance.value[1] = parseInt(instance.value[1].toString())
      }

      if (instance.value[1] > instance.max) {
        instance.value[1] = instance.max
      }

      if (instance.value[1] < instance.value[0]) {
        instance.value[1] = instance.value[0]
      }

      this.instances.forEach((item: InputRangeInstance) => {
        if (item !== instance && item.id === instance.id) {
          item.value[1] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))

          if (!item.decimals) {
            item.value[1] = parseInt(item.value[1].toString())
          }

          if (item.value[1] > instance.max) {
            item.value[1] = instance.max
          }

          if (item.value[1] < instance.value[0]) {
            item.value[1] = instance.value[0]
          }
          this.change(item)
        }
      })

      this.change(instance)
    }

    if (instance.willMoving === 'left') {
      instance.value[0] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))

      if (!instance.decimals) {
        instance.value[0] = parseInt(instance.value[0].toString())
      }

      if (instance.value[0] < instance.min) {
        instance.value[0] = instance.min
      }

      if (instance.value[0] > instance.value[1]) {
        instance.value[0] = instance.value[1]
      }

      this.instances.forEach((item: InputRangeInstance) => {
        if (item !== instance && item.id === instance.id) {
          item.value[0] = parseFloat((parseFloat(((instance.range.trackPercent * instance.range.full) / 100).toString()) + instance.min).toFixed(2))

          if (!item.decimals) {
            item.value[0] = parseInt(item.value[0].toString())
          }

          if (item.value[0] < instance.min) {
            item.value[0] = instance.min
          }

          if (item.value[0] > instance.value[1]) {
            item.value[0] = instance.value[1]
          }
          this.change(item)
        }
      })

      this.change(instance)
    }
  }

  render(instance: ConnectorItem): number {
    const index = this.instances.length

    this.instances[index] = {
      ...instance,
      inputs: instance.element.querySelectorAll('input[type="range"]'),
      decimals: false,
      wasDispatched: false,
      faker: {
        root: null,
        track: {
          root: null,
          node: [],
          range: null,
        },
        values: {
          root: null,
          value: [
            { root: null, p: null, span: null },
            { root: null, p: null, span: null },
          ],
        },
      },
    }

    this.instances[index].min = parseFloat(this.instances[index].inputs[0].min)
    this.instances[index].max = parseFloat(this.instances[index].inputs[1].max)
    this.instances[index].step = [parseFloat(this.instances[index].inputs[0].step) || 1, parseFloat(this.instances[index].inputs[1].step) || 1]
    this.instances[index].label = [this.instances[index].inputs[0].dataset.label, this.instances[index].inputs[1].dataset.label]
    this.instances[index].unit = instance.data.unit
    this.instances[index].value = [
      this.instances[index].inputs[0].hasAttribute('value') ? parseFloat(this.instances[index].inputs[0].value) : this.instances[index].min,
      this.instances[index].inputs[1].hasAttribute('value') ? parseFloat(this.instances[index].inputs[1].value) : this.instances[index].max,
    ]

    if (this.instances[index].min - Math.floor(this.instances[index].min) !== 0) {
      this.instances[index].decimals = true
    }

    if (this.instances[index].max - Math.floor(this.instances[index].max) !== 0) {
      this.instances[index].decimals = true
    }

    // root
    this.instances[index].faker.root = document.createElement('div')
    this.instances[index].faker.root.classList.add('input--faker')

    // track
    this.instances[index].faker.track.root = document.createElement('div')
    this.instances[index].faker.track.root.classList.add('input--faker__track')

    // track - nodes
    this.instances[index].faker.track.node.push(document.createElement('div'))
    this.instances[index].faker.track.node.push(document.createElement('div'))
    this.instances[index].faker.track.node[0].classList.add('input--faker__node')
    this.instances[index].faker.track.node[1].classList.add('input--faker__node')

    // track - range
    this.instances[index].faker.track.range = document.createElement('div')
    this.instances[index].faker.track.range.classList.add('input--faker__range')

    // values
    this.instances[index].faker.values.root = document.createElement('div')
    this.instances[index].faker.values.root.classList.add('input--faker__values')

    // values - value
    this.instances[index].faker.values.value[0].root = document.createElement('div')
    this.instances[index].faker.values.value[1].root = document.createElement('div')
    this.instances[index].faker.values.value[0].root.classList.add('input--faker__value')
    this.instances[index].faker.values.value[1].root.classList.add('input--faker__value')

    // values - value - span
    this.instances[index].faker.values.value[0].span = document.createElement('span')
    this.instances[index].faker.values.value[0].span.innerText = `${this.instances[index].label[0] || 'FROM'}: `
    this.instances[index].faker.values.value[1].span = document.createElement('span')
    this.instances[index].faker.values.value[1].span.innerText = `${this.instances[index].label[1] || 'TO'}: `

    // values - value - p
    this.instances[index].faker.values.value[0].p = document.createElement('p')
    this.instances[index].faker.values.value[0].p.innerText = `${this.instances[index].value[0]} ${this.instances[index].unit || ''}`
    this.instances[index].faker.values.value[1].p = document.createElement('p')
    this.instances[index].faker.values.value[1].p.innerText = `${this.instances[index].value[1]} ${this.instances[index].unit || ''}`

    this.instances[index].faker.values.value[0].root.append(this.instances[index].faker.values.value[0].span)
    this.instances[index].faker.values.value[0].root.append(this.instances[index].faker.values.value[0].p)

    this.instances[index].faker.values.value[1].root.append(this.instances[index].faker.values.value[1].span)
    this.instances[index].faker.values.value[1].root.append(this.instances[index].faker.values.value[1].p)

    this.instances[index].faker.values.root.append(this.instances[index].faker.values.value[0].root)
    this.instances[index].faker.values.root.append(this.instances[index].faker.values.value[1].root)

    this.instances[index].faker.track.root.append(this.instances[index].faker.track.node[0])
    this.instances[index].faker.track.root.append(this.instances[index].faker.track.range)
    this.instances[index].faker.track.root.append(this.instances[index].faker.track.node[1])

    this.instances[index].faker.root.append(this.instances[index].faker.track.root)
    this.instances[index].faker.root.append(this.instances[index].faker.values.root)

    instance.element.append(this.instances[index].faker.root)

    return index
  }
}

export default new InputRange()
