import { ConnectorItem } from '../../connector'
import Axios from '../../utils/utils.ajax'

export interface AjaxResourceOptions {
  onStart: (instance: ConnectorItem) => any
  onEnd: (instance: ConnectorItem) => any
  onSuccess: (instance: ConnectorItem, data: any, sendedData: any) => any
  onError: (instance: ConnectorItem, data: any) => any
}

class AjaxResource {
  fetcher: Axios
  options: AjaxResourceOptions
  instance: ConnectorItem
  methods: string[]
  connected: ConnectorItem[]

  init(fetcher: Axios, connected: ConnectorItem[], reinit: boolean = false) {
    this.fetcher = fetcher
    this.connected = connected
  }

  call(instance: ConnectorItem, data: any, options: AjaxResourceOptions) {
    this.options = options
    this.instance = instance

    if (instance.event.params[1]) {
      data[instance.event.params[1]] = ''
    }
    data['ajax'] = instance.event.params[0]

    this.request(data)
  }

  async request(data: any = {}) {
    window.dump(data)

    try {
      this.options.onStart(this.instance)

      setTimeout(async () => {
        const response = await this.fetcher.get('', {
          params: { ...data },
        })

        this.options.onEnd(this.instance)

        if (response.error) {
          await this.options.onError(this.instance, response.data)
        } else {
          if (data['toggle'] !== undefined) {
            this.instance.element.classList.toggle('is-toggled')
          }
          await this.options.onSuccess(this.instance, response.data, data)
        }
      }, 500)
    } catch (e) {
      window.dump(e)
      this.options.onError(this.instance, e?.response?.data)
    }
  }

  loading(status: boolean) {
    window.dump(this.connected)
  }
}

export default AjaxResource
