import Component from "../component";
import Connector, { ConnectorItem }  from "../../connector";
import ModalGallery, { ModalGalleryOptions } from "./ModalGallery.component";

const ModalEvents = ['close', 'toggle', 'open'] as const

interface ModalOptions {
    wrapper?: string,
    gallery?: ModalGalleryOptions
}

class Modal extends Component {
    options: ModalOptions
    wrapper?: HTMLElement

    defaults(options: ModalOptions = {}): void {
        this.options = options
        this.wrapper = document.querySelector(options.wrapper ? options.wrapper : '#modal')

        if(!this.wrapper) return

        this.wrapper.addEventListener('click', (e) => {
            if(e.target === this.wrapper) {
                Connector.get('modal', {
                    type: null,
                    event: null
                }).forEach((item: ConnectorItem) => {
                    this.close(item)
                })
            }
        })
    }

    booted(): void {
        ModalGallery.register(Connector.get('modal', {type: 'gallery'}), this.options ? this.options.gallery : null)
    }

    handleEvent(instance: ConnectorItem): void {
        const params = instance.event.params

        switch(instance.event.event) {
            case 'click':
                instance.element.addEventListener(instance.event.event, (e) => {
                    e.preventDefault()

                    if(!params[0]) return

                    Connector.get('modal', {
                        id: instance.id,
                        type: null,
                        event: null
                    }).forEach((connected: ConnectorItem) => {
                        this[params[0] as typeof ModalEvents[number]](connected)
                    })
                })
            default:
                break
        }

        document.addEventListener('click', (e) => {
            if(e.target !== this.wrapper && e.target !== instance.element && !instance.element.contains(e.target as HTMLElement) && this.isOpen(instance)) {
                Connector.get('modal', {
                    id: instance.id,
                    type: null,
                    event: null
                }).forEach((connected: ConnectorItem) => {
                    this.close(connected)
                })
            }
        })
    }

    isOpen(instance: ConnectorItem) {
        return !Connector.get('modal', {
            id: instance.id,
            type: null,
            event: null
        }).map((connected: ConnectorItem) => {
            return this.isActive(connected.element) ? true : false
        }).includes(false)
    }

    toggle(instance: ConnectorItem) {
        if(instance.element.classList.contains('is-active')) {
            this.close(instance)
        } else {
            this.open(instance)
        }
    }

    close(instance: ConnectorItem) {
        document.body.classList.remove('is-overlay')
        this.removeActive(instance.element)

        Connector.get('modal', {type: 'visible', id: instance.id}).forEach((conn: ConnectorItem) => {

            conn.element.style.removeProperty('z-index')
        })
    }

    setMaxHeight(element: HTMLElement) {
        element.style.maxHeight = `calc(100vh - ${element.getBoundingClientRect().top + parseInt(getComputedStyle(element).getPropertyValue('margin-top').replace('px',''))}px)`
    }

    open(instance: ConnectorItem) {
        Connector.get('modal', {
            type: null,
            event: null
        }).forEach((connected: ConnectorItem) => {
            if(connected !== instance) this.close(connected)
        })

        Connector.get('modal', {type: 'visible', id: instance.id}).forEach((conn: ConnectorItem) => {
            if(!this.wrapper) return

            conn.element.style.zIndex = (parseInt(getComputedStyle(this.wrapper).zIndex) + 1).toString()
        })

        document.body.classList.add('is-overlay')
        this.setActive(instance.element)
        this.setMaxHeight(instance.element)
    }
}

export default new Modal()