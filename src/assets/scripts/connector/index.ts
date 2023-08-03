import EventNotSupportedException from './exceptions/EventNotSupported'

export const ConnectorEvents = ['click', 'hover', 'change', 'load', 'input']

export interface ConnectorItem {
  id?: string
  name: string
  type?: string
  event?: {
    event: string
    params: string[]
  }
  data?: DOMStringMap
  element: HTMLElement
}

export type ConnectorProperties = 'id' | 'name' | 'type' | 'event'

class Connector {
  attribute: string
  format: string
  items: any
  filtered: any

  init(attribute: string, format: string) {
    this.attribute = attribute
    this.format = format
    this.items = []
    this.elements = Array.prototype.slice.call(document.querySelectorAll(`[${attribute}]`))
  }

  reinit(element: HTMLElement = null) {
    if (!element) {
      element = document.body
    }
    const elements = Array.prototype.slice.call(element.querySelectorAll(`[${this.attribute}]`))

    elements.forEach((element: HTMLElement) => {
      element
        .getAttribute(this.attribute)
        .split(' ')
        .forEach((attribute) => {
          try {
            const name = this.parse('name', attribute)

            if (!this.items[name]) {
              this.items[name] = []
            }

            this.items[name].forEach((item: any) => {
              if (!document.body.contains(item.element)) {
                this.items[name] = this.items[name].filter(function (_item: any) {
                  return _item !== item
                })
              }
            })

            const item = this.items[name].push({
              id: this.parse('id', attribute),
              name: this.parse('name', attribute),
              type: this.parse('type', attribute),
              event: this.formatEvent(this.parse('event', attribute)),
              data: element.dataset,
              element: element,
            })
          } catch (err) {
            if (err.name === EventNotSupportedException.name)
              window.dump(err.message, {
                element,
              })
          }
        })
    })
  }

  parse(property: ConnectorProperties, value: string) {
    switch (property) {
      case 'id':
        if (this.format.match(/{id}/g)[0]) {
          let id = ''
          const endings: string[] = this.format
            .match(/{id}(.*)/g)[0]
            .replace(/{(?!(id))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{id}/g, '')
            })
          let startings: string[] = this.format
            .match(/(.*){id}/g)[0]
            .replace(/{(?!(id))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{id}/g, '')
            })

          startings = [startings[startings.length - 1]]

          if (
            !startings.some((char) => {
              return char !== '' && value.includes(char)
            })
          ) {
            return null
          }

          startings.forEach((start) => {
            if (start === '') {
              id = value
            } else {
              id = value.split(start)[1]
            }

            endings.forEach((end) => {
              if (end !== '') {
                if (
                  !endings.some((char) => {
                    return char !== '' && id.split(end)[0].includes(char)
                  })
                ) {
                  id = id.split(end)[0]
                }
              }
            })
          })

          return id
        }
        return null
      case 'name':
        if (this.format.match(/{name}/g)[0]) {
          let name = ''
          const endings: string[] = this.format
            .match(/{name}(.*)/g)[0]
            .replace(/{(?!(name))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{name}/g, '')
            })
          const startings: string[] = this.format
            .match(/(.*){name}/g)[0]
            .replace(/{(?!(name))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{name}/g, '')
            })

          startings.forEach((start) => {
            if (start === '') {
              name = value
            } else {
              name = value.split(start)[0]
            }

            endings.forEach((end) => {
              if (end !== '') {
                if (
                  !endings.some((char) => {
                    return char !== '' && name.split(end)[0].includes(char)
                  })
                ) {
                  name = name.split(end)[0]
                }
              }
            })
          })

          return name
        }

        return null
      case 'type':
        if (this.format.match(/{type}/g)[0]) {
          let type = ''
          const endings: string[] = this.format
            .match(/{type}(.*)/g)[0]
            .replace(/{(?!(type))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{type}/g, '')
            })
          let startings: string[] = this.format
            .match(/(.*){type}/g)[0]
            .replace(/{(?!(type))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{type}/g, '')
            })

          startings = [startings[startings.length - 1]]

          if (
            !startings.some((char) => {
              return char !== '' && value.includes(char)
            })
          ) {
            return null
          }

          startings.forEach((start) => {
            if (start === '') {
              type = value
            } else {
              type = value.split(start)[1]
            }

            endings.forEach((end) => {
              if (end !== '') {
                if (
                  !endings.some((char) => {
                    return char !== '' && type.split(end)[0].includes(char)
                  })
                ) {
                  type = type.split(end)[0]
                }
              }
            })
          })

          return type
        }
        return null
      case 'event':
        if (this.format.match(/{event}/g)[0]) {
          let event = ''
          const endings: string[] = this.format
            .match(/{event}(.*)/g)[0]
            .replace(/{(?!(event))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{event}/g, '')
            })
          let startings: string[] = this.format
            .match(/(.*){event}/g)[0]
            .replace(/{(?!(event))(.*?)}/g, '---')
            .split('---')
            .map((val) => {
              return val.replace(/{event}/g, '')
            })

          startings = [startings[startings.length - 1]]

          if (
            !startings.some((char) => {
              return char !== '' && value.includes(char)
            })
          ) {
            return null
          }

          startings.forEach((start) => {
            if (start === '') {
              event = value
            } else {
              event = value.split(start)[1]
            }

            endings.forEach((end) => {
              if (end !== '') {
                if (
                  !endings.some((char) => {
                    return char !== '' && event.split(end)[0].includes(char)
                  })
                ) {
                  event = event.split(end)[0]
                }
              }
            })
          })

          return event
        }
        return null
    }
  }

  private set elements(elements: []) {
    elements.forEach((element: HTMLElement) => {
      element
        .getAttribute(this.attribute)
        .split(' ')
        .forEach((attribute) => {
          try {
            const name = this.parse('name', attribute)

            if (!this.items[name]) {
              this.items[name] = []
            }

            this.items[name].push({
              id: this.parse('id', attribute),
              name: this.parse('name', attribute),
              type: this.parse('type', attribute),
              event: this.formatEvent(this.parse('event', attribute)),
              data: element.dataset,
              element: element,
            })
          } catch (err) {
            if (err.name === EventNotSupportedException.name)
              window.dump(err.message, {
                element,
              })
          }
        })
    })
  }

  get(property?: string, filters?: { id?: string; event?: string; fullEvent?: any, type?: string }) {
    if (!property) return this.items
    if (!this.items[property]) return []

    if (filters) {
      const result = this.items[property].filter((item: ConnectorItem) => {
        let condition = true

        if (filters['id'] !== undefined) {
          condition = condition && item.id === filters.id
        }

        if (filters['event'] !== undefined) {
          condition = condition && ((item.event === null && filters.event === null) || item.event.event === filters.event)
        }

        if (filters['fullEvent'] !== undefined) {
          condition = condition && filters.fullEvent && item.event && filters.fullEvent.params[0] === item.event.params[0] && filters.fullEvent.params[1] === item.event.params[1] && filters.fullEvent.event === item.event.event
        }

        if (filters['type'] !== undefined) {
          condition = condition && item.type === filters.type
        }

        return condition
      })

      return result
    }

    return this.items[property] || []
  }

  formatEvent(value: string) {
    if (!value) return null

    const event = value.split('(')[0]
    const params = value.split('(')[1] ? value.split('(')[1].split(')')[0].replace(' ', '').split(',') : []

    if (!ConnectorEvents.includes(event)) {
      throw new EventNotSupportedException(`${event} není podporovaný event`)
    }

    return {
      event,
      params,
    }
  }
}

export default new Connector()
