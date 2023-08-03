import { ConnectorItem } from '../connector'

class Connect {
  handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {
    let value: any = null

    if (triggerer.element instanceof HTMLSelectElement) {
      value = Array.from(triggerer.element.options).find((option) => option.value == (triggerer.element as HTMLSelectElement).value).innerText
    } else if (triggerer.element instanceof HTMLInputElement || triggerer.element instanceof HTMLSelectElement || triggerer.element instanceof HTMLTextAreaElement) {
      value = triggerer.element.value
    } else {
      value = triggerer.element.innerText
    }

    instances.forEach((instance) => {
      if (instance.element instanceof HTMLInputElement || instance.element instanceof HTMLSelectElement || instance.element instanceof HTMLTextAreaElement) {
        ;(instance.element.value as any) = value
      } else {
        ;(instance.element.innerText as any) = value
      }
    })
  }
}

export default new Connect()
