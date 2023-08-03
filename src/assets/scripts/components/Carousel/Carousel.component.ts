import Splide, { Options } from "@splidejs/splide";
import Component from "../component";
import Connector, { ConnectorItem } from "../../connector";

interface CarouselInstance extends ConnectorItem {
    instance: Splide
}
enum CarouselEvents {
    LEFT = 'left',
    RIGHT = 'right'
}

class Carousel extends Component {
    instances: CarouselInstance[] = [];

    defaults(options: Options) {
        Splide.defaults = options
    }

    boot(instance: ConnectorItem) {
        const options = instance.data['options'] ? JSON.parse(instance.data['options']) : {}

        if(!instance.event) {
            const index = this.instances.length

            this.instances.push({
                ...instance,
                instance: new Splide(instance.element, options)
            })

            if(Connector.get(instance.name, {
                id: instance.id,
                event: null
            }).length === 1) {
                this.instances[index].instance.mount()
            }
        }
    }

    booted() {
        this.instances.forEach(instance => {
            if(instance.instance.options.showPaginationOnHover) {
                const pagination_element = instance.instance.root.querySelector('.splide__pagination')

                if(pagination_element) pagination_element.classList.add('is-hidden')
            }
            if(instance.instance.options.showArrowsOnHover) {
                const arrows_element = instance.instance.root.querySelector('.splide__arrows')

                if(arrows_element) arrows_element.classList.add('is-hidden')
            }

            instance.instance.root.addEventListener('mouseenter', (e) => {
                if(instance.instance.options.showPaginationOnHover) {
                    const pagination_element = instance.instance.root.querySelector('.splide__pagination')

                    if(pagination_element) pagination_element.classList.remove('is-hidden')
                }
                if(instance.instance.options.showArrowsOnHover) {
                    const arrows_element = instance.instance.root.querySelector('.splide__arrows')

                    if(arrows_element) arrows_element.classList.remove('is-hidden')
                }
            })

            instance.instance.root.addEventListener('mouseleave', (e) => {
                if(instance.instance.options.showPaginationOnHover) {
                    const pagination_element = instance.instance.root.querySelector('.splide__pagination')

                    if(pagination_element) pagination_element.classList.add('is-hidden')
                }
                if(instance.instance.options.showArrowsOnHover) {
                    const arrows_element = instance.instance.root.querySelector('.splide__arrows')
                    
                    if(arrows_element) arrows_element.classList.add('is-hidden')
                }
            })

            const test = this.instances.filter(inst => inst.id === instance.id)
            
            if(test.length > 1) {
                test.forEach(idk => {
                   if(idk !== instance) {
                    instance.instance.sync(idk.instance)
                   } 
                })
    
                instance.instance.mount()
            }
        })
    }

    handleEvent(instance: ConnectorItem) {
        const params = instance.event.params

        switch(instance.event.event) {
            case 'click':
                instance.element.addEventListener(instance.event.event, (e) => {
                    const carousel = this.instances.filter(inst => inst.id === instance.id)[0]

                    if(!carousel) return

                    if(!params[0]) carousel.instance.go('+1')
                    if(params[0] === CarouselEvents.LEFT) carousel.instance.go('-1')
                    if(params[0] === CarouselEvents.RIGHT) carousel.instance.go('+1')
                })
            default:
                break
        }
    }
}

export default new Carousel();