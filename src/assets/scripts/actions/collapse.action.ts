import { ConnectorItem } from "../connector"

class Collapse {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {     
        instances.forEach(instance => {
            if(instance.element.classList.contains('is-collapsed')) {
                triggerer.element.classList.remove('is-active')
                this.close(instance)

                if(params.includes('cache')) {
                    sessionStorage.setItem(`collapse_${instance.id}`, JSON.stringify({
                        'isClosed': true
                    }))
                }
            } else {
                triggerer.element.classList.add('is-active')
                this.open(instance)
                if(params.includes('cache')) {
                    sessionStorage.setItem(`collapse_${instance.id}`, JSON.stringify({
                        'isClosed': false
                    }))
                }
            }
        })
    }

    close(instance: ConnectorItem) {
        const body = instance.element

        if(body.classList.contains('is-collapsing')) return
        body.style.display = "block"
        let height = body.clientHeight

        body.style.height = height + "px"
        body.classList.remove('is-collapse')
        body.classList.add('is-collapsing')

        setTimeout(() => {
            body.style.height = "0"
        }, 1)

        setTimeout(() => {
            body.classList.remove('is-collapsing')
            body.classList.add('is-collapse')
            body.style.height = ""
            body.style.display = ""
        }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000)

        body.classList.remove('is-collapsed')
    }

    open(instance: ConnectorItem) {
        const body = instance.element

        if(body.classList.contains('is-collapsing')) return
        body.style.display = "block"
        let height = body.clientHeight

        setTimeout(() => {
            body.style.height = height + "px"
            body.style.display = ""
        }, 1)

        body.classList.add('is-collapse')
        body.classList.add('is-collapsing')

        setTimeout(() => {
            body.classList.remove('is-collapsing')
            body.classList.add('is-collapse')
            body.style.height = ""
            body.style.display = ""
        }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000)

        body.classList.add('is-collapsed')

    }

    initialCache(triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {
        instances.forEach(instance => {
            if(sessionStorage.hasOwnProperty(`collapse_${instance.id}`)) {
                if(JSON.parse(sessionStorage.getItem(`collapse_${instance.id}`)).isClosed) {
                    triggerer.element.classList.remove('is-active')
                    this.close(instance)
                } else {
                    triggerer.element.classList.add('is-active')
                    this.open(instance)
                }
            }
        })
    }
}

export default new Collapse()