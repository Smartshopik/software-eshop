import Connector, { ConnectorItem } from "../../connector";
import Component from "../component";

class Dropdown extends Component {
    handleEvent(instance: ConnectorItem): void {
        // const list: any = instance.element.children[1]
        // if(!instance.type) {
        //     list.style.left = '0';
        //     list.style.right = 'unset';Pi
        // }


        // if(self.innerWidth - instance.element.offsetLeft - 10 <= list.clientWidth) {
        //     if(!instance.type) {
        //         list.style.left = 'unset';
        //         list.style.right = '0';
        //     }
        // }

        // const button = instance.element.querySelectorAll('button, a')[0]

        switch(instance.event.event) {
            case 'click':
                instance.element.addEventListener('click', (e) => {
                    Connector.get(this.id, {
                        id: instance.id,
                        event: null
                    }).forEach((conn: ConnectorItem) => {
                        if(conn.element !== e.target && !conn.element.contains(e.target as HTMLElement)) {
                            e.preventDefault()
                            if(!this.isVisible(conn.element)) {
                                this.setActive(instance.element)
                                this.setVisible(conn.element)
                                this.removeHidden(conn.element)
                            } else {
                                this.removeActive(instance.element)
                                this.removeVisible(conn.element)
                                this.setHidden(conn.element)
                            }
                        }
                    })
                })

                document.addEventListener('click', (e) => {
                    Connector.get(this.id, {
                        id: instance.id,
                        event: null
                    }).forEach((conn: ConnectorItem) => {
                        if(e.target !== instance.element && !instance.element.contains(e.target as HTMLElement) && e.target !== conn.element && !conn.element.contains(e.target as HTMLElement)) {
                            this.removeActive(instance.element)
                            this.removeVisible(conn.element)
                            this.setHidden(conn.element)
                        }
                    })

                    Connector.get(this.id, {
                        id: null,
                        event: null
                    }).forEach((conn: ConnectorItem) => {
                        if(e.target !== instance.element && !instance.element.contains(e.target as HTMLElement) && e.target !== conn.element && !conn.element.contains(e.target as HTMLElement)) {
                            this.removeActive(instance.element)
                            this.removeVisible(conn.element)
                            this.setHidden(conn.element)
                        }
                    })
                })
                break;
            case 'hover':
                instance.element.addEventListener('mouseover', () => {
                    Connector.get(this.id, {
                        id: instance.id,
                        event: null
                    }).forEach((conn: ConnectorItem) => {
                        if(!this.isVisible(conn.element)) {
                            this.setActive(instance.element)
                            this.setVisible(conn.element)
                            this.removeHidden(conn.element)
                        }

                        conn.element.addEventListener('mouseleave', (e) => {
                            if(e.relatedTarget !== instance.element && !instance.element.contains(e.relatedTarget as HTMLElement) && e.relatedTarget !== conn.element && !conn.element.contains(e.relatedTarget as HTMLElement)) {
                                this.removeActive(instance.element)
                                this.removeVisible(conn.element)
                                this.setHidden(conn.element)
                            }
                        })
                    })
                })

                instance.element.addEventListener('mouseleave', (e) => {
                    Connector.get(this.id, {
                        id: instance.id,
                        event: null
                    }).forEach((conn: ConnectorItem) => {
                        if(e.relatedTarget !== instance.element && !instance.element.contains(e.relatedTarget as HTMLElement) && e.relatedTarget !== conn.element && !conn.element.contains(e.relatedTarget as HTMLElement)) {
                            this.removeActive(instance.element)
                            this.removeVisible(conn.element)
                            this.setHidden(conn.element)
                        }
                    })
                })
                break;
            default:
                break;
        }

        // if(instance.event === 'hover') {
            
        //     button.addEventListener('mouseover', () => {
        //         if(!instance.element.classList.contains('is-active')) {
        //             instance.element.classList.add('is-active')
        //         }
        //     })

        //     instance.element.addEventListener('mouseleave', () => {
        //         if(instance.element.classList.contains('is-active')) {
        //             instance.element.classList.remove('is-active')
        //         }
        //     })
        // }

        // self.addEventListener('resize', (e) => {
        //     if(!instance.type){
        //         list.style.left = '0';
        //         list.style.right = 'unset';
        
        //         if(self.innerWidth - instance.element.offsetLeft - 10 <= list.clientWidth) {
        //             list.style.left = 'unset';
        //             list.style.right = '0';
        //         }
        //     }
        // })
    }
}

export default new Dropdown();