import AjaxResource, { AjaxResourceOptions } from '.'
import Connector, { ConnectorItem } from '../../connector'
import Axios from '../../utils/utils.ajax'

class ShopResource extends AjaxResource {
  // init(fetcher: Axios, connected: ConnectorItem[], reinit: boolean = false) {
  //   this.fetcher = fetcher
  //   this.connected = connected

  //   if (!reinit) {
  //     window.onpopstate = (event) => {
  //       let data = event.state === null ? null : event.state.params
  //       let instance_id = event.state === null ? 'filter' : event.state.instance.id

  //       if (data && data.ajax) delete data.ajax

  //       if (!data) data = {}

  //       this.instance = Connector.get('ajax', {
  //         id: instance_id,
  //       }).find((item: ConnectorItem) => item.event !== null && item.event.event !== null)

  //       data['ajax'] = this.instance.event.params[0]

  //       this.request(data)
  //     }
  //   }
  // }

  call(instance: ConnectorItem, data: any, options: AjaxResourceOptions) {
    this.options = options
    this.instance = instance

    Connector.get(instance.name, {
      id: instance.id,
    }).forEach((conn: ConnectorItem) => {
      const input = instance.element as HTMLInputElement
      const conn_input = conn.element as HTMLInputElement

      if (conn !== instance && input.name === conn_input.name) {
        if (input.checked) {
          conn_input.checked = true
        } else {
          conn_input.checked = false
        }
      }
    })

    Connector.get(instance.name, {
      id: instance.id,
    }).forEach((item: ConnectorItem) => {
      switch (item.element.nodeName) {
        case 'INPUT':
          const input = item.element as HTMLInputElement

          switch (input.type) {
            case 'checkbox':
              if (input.checked) {
                data[input.name] = ''
              }
              break
            case 'range':
              if (input.value !== input.min && input.value !== input.max) {
                data[input.name] = input.value
              }
              break
            default:
              data[input.name] = input.value
              break
          }
          break
        default:
          break
      }
    })

    data['ajax'] = instance.event.params[0]

    this.request(data)
  }
}

export default new ShopResource()
