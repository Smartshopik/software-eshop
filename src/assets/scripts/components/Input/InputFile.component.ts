import { ConnectorItem } from '../../connector'
import Component from '../component'

export interface InputFileOptions {
  values?: boolean
  icon_file?: string
}

export interface InputFileInstance extends ConnectorItem {
  value?: FileList
  label?: string
  multiple: boolean
  placeholder: string
  button: string
  icon?: string
  faker?: HTMLElement
  isFocused?: boolean
}

class InputFile extends Component {
  options: InputFileOptions
  instances: InputFileInstance[] = []

  init() {
    this.defaults(this.options)
    this.connected.forEach((instance) => {
      if (!instance.element.hasAttribute('init')) {
        instance.element.setAttribute('init', 'true')
        this.boot(instance)
      }
    })
  }

  register(connected: ConnectorItem[], options?: InputFileOptions) {
    this.id = connected[0].type
    this.connected = connected
    this.options = options
    this.init()
  }

  boot(instance: ConnectorItem): void {
    const input = instance.element.querySelector("input[type='file']") as HTMLInputElement
    const _instance: InputFileInstance = {
      ...instance,
      value: null,
      label: '',
      multiple: false,
      button: instance.data.button || 'Upload',
      icon: instance.data.icon || null,
      placeholder: '',
    }

    if (input.multiple || input.hasAttribute('multi')) {
      _instance.multiple = true
    }

    if (instance.element.querySelector('label')) {
      _instance.label = instance.element.querySelector('label').innerText
    }

    if (input.hasAttribute('placeholder')) {
      _instance.placeholder = input.getAttribute('placeholder')
    }
    this.instances.push(_instance)
    this.render(_instance)

    this.handleEvent(_instance)
  }

  render(instance: InputFileInstance) {
    const input = instance.element.querySelector("input[type='file']") as HTMLInputElement
    const label = instance.element.querySelector('label')
    if (label) label.remove()

    const file = document.createElement('label')
    file.setAttribute('for', input.id)
    file.classList.add('file')
    file.tabIndex = 0

    file.innerHTML = `
            ${instance.label ? `<span class="file__label">${instance.label}</span>` : ''}
            <div class="file__input">
                <div class="file__button">
                    ${instance.icon ? `<i class="${instance.icon}"></i>` : ''}
                    ${instance.button}
                </div>
                <div class="file__uploaded">${instance.placeholder}</div>
            </div>
        `

    instance.faker = file
    instance.element.prepend(instance.faker)
  }

  handleEvent(instance: InputFileInstance) {
    instance.faker.addEventListener('focus', (e) => this.onFocus(e, instance))
    instance.faker.addEventListener('blur', (e) => this.onBlur(e, instance))
    instance.faker.addEventListener('click', (e) => this.onClick(e, instance))
    instance.element.querySelector("input[type='file']").addEventListener('change', (e) => this.onChange(e, instance))
    window.addEventListener('keydown', (e) => instance.isFocused && this.onKeyDown(e, instance))
  }

  onClick(e: MouseEvent, instance: InputFileInstance) {
    const label = instance.faker.querySelector('.file__label')
    const button = instance.faker.querySelector('.file__button')
    const target = e.target as HTMLElement

    if (target !== button && target !== label && !button.contains(target) && !label.contains(target)) e.preventDefault()
  }

  onFocus(e: Event, instance: InputFileInstance) {
    instance.faker.classList.add('is-focused')
    instance.isFocused = true
  }

  onBlur(e: Event, instance: InputFileInstance) {
    instance.faker.classList.remove('is-focused')
    instance.isFocused = false
  }

  onChange(e: Event, instance: InputFileInstance) {
    const width = instance.faker.querySelector('.file__uploaded').getBoundingClientRect().width - 20
    instance.value = (e.target as HTMLInputElement).files

    instance.faker.querySelector('.file__uploaded').innerHTML = `
            ${Object.entries(instance.value)
              .map(([index, file]) => {
                const name = file.name
                const extension = name.split('.')[name.split('.').length - 1]

                if (parseInt(index) + 1 > width / 100) return

                return `
                    <span class="file__uploaded--tag">
                        <i class="far fa-file-${extension}"></i>
                        ${name}
                    </span>
                `
              })
              .join('')}
        `

    instance.faker.querySelectorAll('.file__uploaded--tag i').forEach((i) => {
      if (getComputedStyle(i, ':before').content === 'none') {
        i.className = `${this.options.icon_file}`
      }
    })

    if (instance.faker.querySelectorAll('.file__uploaded--tag').length < instance.value.length) {
      const tag = document.createElement('span')
      tag.classList.add('file__uploaded--tag')
      tag.innerText = `+${instance.value.length - instance.faker.querySelectorAll('.file__uploaded--tag').length}`

      instance.faker.querySelector('.file__uploaded').append(tag)
    }

    if (!instance.value.length) instance.faker.querySelector('.file__uploaded').innerHTML = instance.placeholder
  }

  onKeyDown(e: KeyboardEvent, instance: InputFileInstance) {
    switch (e.keyCode) {
      case 32:
        e.preventDefault()
        break
      default:
        break
    }
  }
}

export default new InputFile()
