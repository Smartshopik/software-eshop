import Connector, { ConnectorItem } from "../connector"

class Handler {
    element: HTMLElement
    data: string[]
    index: number = 0

    constructor(triggerer: ConnectorItem) {
        this.element = triggerer.element
        this.data = triggerer.data.messages.split(';').map(elm => elm.trim())
        this.element.classList.add('is-hidden')

        setTimeout(() => {
            this.element.classList.remove("is-hidden")
        
            setTimeout(() => {
                this.appearData()
            }, 100)
        }, 500) 
    }

    appearData() {
        if(this.index > this.data.length - 1) return

        const span = document.createElement("span");
        span.innerText = this.data[this.index];

        this.element.append(span)

        setTimeout(() => {
            span.classList.add('is-fading')
        }, 100)

        setTimeout(() => {
            span.classList.remove('is-fading')

            setTimeout(() => {
                span.remove()

                if(this.data.length - 1 > this.index) {
                    this.index += 1
    
                    return this.appearData()
                }
    
                this.element.classList.add("is-hidden")
            }, 500)
        }, 5000)
    }
}

class PopupMessage {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {    
        if(params[0] === 'close') {
            Connector.get(triggerer.name, {
                id: triggerer.id
            }).map((conn: ConnectorItem) => conn !== triggerer && conn.event.params[0] !== 'close' && conn.element.classList.add('is-hidden'))
        }   

        if(!triggerer.data.messages) return

        new Handler(triggerer)
    }
}

export default new PopupMessage()