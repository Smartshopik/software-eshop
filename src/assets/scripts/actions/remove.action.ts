import { ConnectorItem } from "../connector"

class Remove {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {      
         
        instances.forEach((instance: ConnectorItem) => {
            instance.element.remove()

            if(params.includes('cache')) {
                sessionStorage.setItem(`remove_${instance.id}`, JSON.stringify({
                    'isRemoved': true
                }))
            }
        })
    }

    initialCache(triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {
        instances.forEach(instance => {
            if(sessionStorage.hasOwnProperty(`remove_${instance.id}`)) {
                if(JSON.parse(sessionStorage.getItem(`remove_${instance.id}`)).isRemoved) {
                    instance.element.remove()
                }
            }
        })
    }
}

export default new Remove()