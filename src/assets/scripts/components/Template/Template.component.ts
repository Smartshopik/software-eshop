import Action from '../../actions'
import Ajax from '../../ajax'
import Connector, { ConnectorItem } from '../../connector'
import EventNotSupportedException from '../../connector/exceptions/EventNotSupported'
import { Input } from '../Input'
import { Tabs } from '../Tabs'
import Component from '../component'

class Template extends Component {
  boot(instance: ConnectorItem) {}

  html(instance: ConnectorItem, html: unknown) {
    ;(instance.element.innerHTML as any) = html
    Connector.reinit(instance.element)
    Action.reinit()
    Input.reinit()
    Ajax.reinit()
  }
}

export default new Template()
