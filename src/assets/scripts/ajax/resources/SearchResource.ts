import AjaxResource, { AjaxResourceOptions } from ".";
import { ConnectorItem } from "../../connector";

class SearchResource extends AjaxResource {
    timeout: any

    call(instance: ConnectorItem, data: any, options: AjaxResourceOptions) {
        this.options = options
        this.instance = instance

        if(instance.event.params[1]) {
            data[instance.event.params[1]] = ''
        }
        data['ajax'] = instance.event.params[0]

        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.request(data)
        }, 200)

    }
}

export default new SearchResource()