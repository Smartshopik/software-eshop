import AjaxResource, { AjaxResourceOptions } from '..'
import { ConnectorItem } from '../../../connector'

class ProductResource extends AjaxResource {
  methods = ['add', 'edit', 'delete']
  timeout: any

  call(instance: ConnectorItem, data: any, options: AjaxResourceOptions) {
    this.options = options
    this.instance = instance

    if (instance.event.params[1]) {
      data[instance.event.params[1]] = ''
    }

    data['ajax'] = instance.event.params[0]

    if (instance.element.nodeName === 'INPUT' && (instance.element as HTMLInputElement).type === 'number' && instance.event.event === 'change') {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.request(data)
      }, 200)
    } else {
      this.request(data)
    }
  }
}

export default new ProductResource()
