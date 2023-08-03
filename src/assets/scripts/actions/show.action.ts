import { ConnectorItem } from "../connector"

class Show {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {     
        switch(triggerer.element.nodeName) {
            case 'INPUT':
                if((triggerer.element as HTMLInputElement).type === 'checkbox' || (triggerer.element as HTMLInputElement).type === 'radio') {
                    const value = JSON.parse(params[0])
                    const input = (triggerer.element as HTMLInputElement)

                    instances.forEach(instance => {
                        if(input.checked === value) {
                            this.setVisible(instance.element)
                            this.removeHidden(instance.element)
                        } else {
                            this.removeVisible(instance.element)
                            this.setHidden(instance.element)
                        }
                    })
                }
                break;
            case 'SELECT':
                const value = params[0]
                const input = (triggerer.element as HTMLInputElement)

                instances.forEach(instance => {
                    if(input.value === value) {
                        this.setVisible(instance.element)
                        this.removeHidden(instance.element)
                    } else {
                        this.removeVisible(instance.element)
                        this.setHidden(instance.element)
                    }
                })
                break
            default:
                e.preventDefault();
                instances.forEach(instance => {
                    if(!this.hasVisible(instance.element)) {
                        this.setVisible(instance.element)
                        this.removeHidden(instance.element)
                    } else {
                        this.removeVisible(instance.element)
                        this.setHidden(instance.element)
                    }
                })
                break;
        }
    }

    setVisible(element: HTMLElement) {
        element.classList.add('is-visible')
    }

    removeVisible(element: HTMLElement) {
        element.classList.remove('is-visible')
    }

    hasVisible(element: HTMLElement) {
        return element.classList.contains('is-visible')
    }

    setHidden(element: HTMLElement) {
        element.classList.add('is-hidden')
    }

    removeHidden(element: HTMLElement) {
        element.classList.remove('is-hidden')
    }

    hasHidden(element: HTMLElement) {
        return element.classList.contains('is-hidden')
    }
}

export default new Show()