import Connector, { ConnectorItem } from '../../connector'
import Component from '../component'

class Tabs extends Component {
  handleEvent(instance: ConnectorItem): void {
    switch (instance.event.event) {
      case 'click':
        instance.element.addEventListener('click', () => {
          if (this.isActive(instance.element)) return

          Connector.get(this.id, {
            id: instance.id,
          }).forEach((conn: ConnectorItem) => {
            if (conn === instance) {
              this.setActive(conn.element)
            } else if (conn.type === instance.type && conn.event === null) {
              this.setVisible(conn.element)
              this.removeHidden(conn.element)
            } else if (conn.event !== null) {
              this.removeActive(conn.element)
            } else {
              this.removeVisible(conn.element)
              this.setHidden(conn.element)
            }
          })
        })
        break
      default:
        break
    }
  }
}

export default new Tabs()
