import { ConnectorItem } from '../../connector/index'
import Component from '../component'

export interface InputSelectOptions {}

export type InputSelectOptionType = {
  value: string
  label: string
  icon?: string
  img?: string
  color?: string
}

export interface InputSelectInstance extends ConnectorItem {
  options: InputSelectOptionType[]
  value: InputSelectOptionType[] | InputSelectOptionType
  multiple: boolean
  searchable: boolean
  placeholder: string
  faker?: HTMLElement
  isOpened?: boolean
  isFocused?: boolean
}

class InputSelect extends Component {
  options: InputSelectOptions
  instances: InputSelectInstance[] = []

  init() {
    this.defaults(this.options)
    this.connected.forEach((instance) => {
      if (!instance.element.hasAttribute('init')) {
        instance.element.setAttribute('init', 'true')
        this.boot(instance)
      }
    })
  }

  register(connected: ConnectorItem[], options?: InputSelectOptions) {
    this.id = connected[0].type
    this.connected = connected
    this.options = options
    this.init()
  }

  boot(instance: ConnectorItem): void {
    const select = instance.element.querySelector('select')
    const options = instance.element.querySelectorAll('option')
    const selectInstance: InputSelectInstance = {
      ...instance,
      options: [],
      value: null,
      multiple: false,
      searchable: false,
      placeholder: '',
    }

    if (select.multiple || select.hasAttribute('multi')) {
      selectInstance.multiple = true
      selectInstance.value = []
    }

    if (select.hasAttribute('searchable')) {
      selectInstance.searchable = true
    }

    if (select.hasAttribute('placeholder')) {
      selectInstance.placeholder = select.getAttribute('placeholder')
    }

    options.forEach((option, index) => {
      const optionObj = {
        value: option.value,
        label: option.innerText,
        icon: option.dataset.icon,
        img: option.dataset.img,
        color: option.dataset.color,
      }
      selectInstance.options.push(optionObj)

      if (option.hasAttribute('selected')) {
        if (selectInstance.value instanceof Array) selectInstance.value.push(optionObj)
        else selectInstance.value = optionObj
      } else if (!selectInstance.value) {
        select.value = null
        selectInstance.value = null
      }
    })
    this.instances.push(selectInstance)
    this.render(selectInstance)
    this.handleEvent(selectInstance)
  }

  render(instance: InputSelectInstance) {
    const select = document.createElement('div')
    select.classList.add('select')
    select.tabIndex = 0

    if (!instance.multiple && !(instance.value instanceof Array)) {
      select.innerHTML = `
                <div class="select__input">
                    <div class="select__input--left">
                        ${instance.value && instance.value.icon ? `<i class="select__input--icon ${instance.value.icon}"></i>` : ''}
                        ${instance.value && instance.value.img ? `<img class="select__input--icon" src="${instance.value.img}" alt="${instance.value.label}"/>` : ''}
                        <input type="text" tabindex="-1" value="${instance.value && instance.value.label ? instance.value.label : ''}" placeholder="${instance.placeholder}">
                    </div>
                    <div class="select__input--right">
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </div>
                <div class="select__options">
                    <ul>
                        ${instance.options
                          .map(
                            (option) =>
                              `
                            <li>
                                <div class="select__option ${instance.value === option ? 'is-selected' : ''}" data-value="${option.value}">
                                    ${option.icon ? `<i class="select__option--icon ${option.icon}"></i>` : ''}
                                    ${option.img ? `<img class="select__option--icon" src="${option.img}" alt="${option.label}"/>` : ''}
                                    ${option.label}
                                </div>
                            </li>
                            `
                          )
                          .join('')}
                    </ul>
                </div>
            `
    }
    instance.faker = select
    instance.element.append(instance.faker)
  }

  handleEvent(instance: InputSelectInstance) {
    instance.faker.addEventListener('focus', (e) => this.onFocus(e, instance))
    instance.faker.addEventListener('blur', (e) => this.onBlur(e, instance))
    instance.faker.addEventListener('click', (e) => this.onClick(e, instance))
    instance.element.querySelector('label').addEventListener('click', (e) => instance.faker.focus())
    instance.element.querySelector('select').addEventListener('change', (e) => {
      this.setValue(
        instance.options.find((item) => item.value == (e.target as HTMLSelectElement).value),
        instance
      )
    })
    window.addEventListener('keydown', (e) => instance.isFocused && this.onKeyDown(e, instance))

    instance.faker.querySelectorAll('.select__option').forEach((option: HTMLElement) => {
      option.addEventListener('click', () => this.setValue(option, instance))
    })
  }

  setValue(option: HTMLElement | InputSelectOptionType, instance: InputSelectInstance, close: boolean = true) {
    const _option = option instanceof HTMLElement ? instance.options.find((item) => item.value == option.dataset.value) : option

    if (_option !== instance.value) {
      instance.value = _option
      instance.element.querySelector('select').value = _option.value
      const input = instance.faker.querySelector('.select__input--left')
      input.innerHTML = `
                ${instance.value && instance.value.icon ? `<i class="select__input--icon ${instance.value.icon}"></i>` : ''}
                ${instance.value && instance.value.img ? `<img class="select__input--icon" src="${instance.value.img}" alt="${instance.value.label}"/>` : ''}
                <input type="text" tabindex="-1" value="${instance.value && instance.value.label ? instance.value.label : ''}" placeholder="${instance.placeholder}">
            `
      instance.faker.querySelectorAll('.select__option').forEach((opt: HTMLElement) => {
        opt.classList.remove('is-selected')
      })

      if (option instanceof HTMLElement) option.classList.add('is-selected')
      else instance.faker.querySelector(`.select__option[data-value="${option.value}"]`).classList.add('is-selected')

      instance.element.querySelector('select').dispatchEvent(
        new CustomEvent('change', {
          detail: {
            selected: instance.value,
          },
        })
      )
    }
    if (close) this.close(instance)
  }

  onFocus(e: Event, instance: InputSelectInstance) {
    instance.faker.classList.add('is-focused')
    instance.isFocused = true
  }

  onBlur(e: Event, instance: InputSelectInstance) {
    instance.faker.classList.remove('is-focused')
    instance.isFocused = false

    if (instance.isOpened) this.close(instance)
  }

  onClick(e: Event, instance: InputSelectInstance) {
    const target = e.target as HTMLElement
    if (target.classList.contains('select__option')) return

    this.toggle(instance)
  }

  onKeyDown(e: KeyboardEvent, instance: InputSelectInstance) {
    switch (e.keyCode) {
      case 32:
        e.preventDefault()
        this.open(instance)
        break
      case 27:
        e.preventDefault()
        this.close(instance)
        break
      case 13:
        e.preventDefault()
        this.toggle(instance)
        break
      case 38:
        e.preventDefault()
        if (!(instance.value instanceof Array)) {
          if (instance.options.indexOf(instance.value) !== 0) {
            this.setValue(instance.options[instance.options.indexOf(instance.value) - 1], instance, false)
          }
        } else {
          this.setValue(instance.options[0], instance, false)
        }

        break
      case 40:
        e.preventDefault()
        if (!(instance.value instanceof Array)) {
          if (instance.options.indexOf(instance.value) !== instance.options.length - 1) {
            this.setValue(instance.options[instance.options.indexOf(instance.value) + 1], instance, false)
          }
        } else {
          this.setValue(instance.options[instance.options.length - 1], instance, false)
        }
        break
      default:
        break
    }
  }

  toggle(instance: InputSelectInstance) {
    if (instance.isOpened) this.close(instance)
    else this.open(instance)
  }

  open(instance: InputSelectInstance) {
    instance.faker.classList.add('is-opened')
    instance.isOpened = true
  }

  close(instance: InputSelectInstance) {
    instance.faker.classList.remove('is-opened')
    instance.isOpened = false
  }
}

export default new InputSelect()
