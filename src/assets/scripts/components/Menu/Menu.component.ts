import { ConnectorItem } from "../../connector";
import Component from "../component";
import MenuRecursive from "./MenuRecursive.component";

class MenuDropdown extends Component {

    boot(instance: ConnectorItem): void {
        if(instance.type === 'recursive') MenuRecursive.register(instance)
    }
}

export default new MenuDropdown();