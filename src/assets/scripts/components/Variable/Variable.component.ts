import Ajax from "../../ajax";
import Connector, {ConnectorItem} from "../../connector";
import Component from "../component";


class Variable extends Component {

    boot(instance: ConnectorItem) {
    }

    assign(instance: ConnectorItem, value: unknown) {
        switch(typeof value) {
            case 'boolean':
                if(value === true) {
                    instance.element.classList.remove('is-hidden')
                    instance.element.classList.add('is-visible')
                } else {
                    instance.element.classList.add('is-hidden')
                    instance.element.classList.remove('is-visible')
                }
                break;
            default:
                (instance.element.innerText as any) = value;
                break;
        }
    }

}

export default new Variable()