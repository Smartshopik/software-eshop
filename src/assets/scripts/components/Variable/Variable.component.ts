import Ajax from "../../ajax";
import Connector, { ConnectorItem } from "../../connector";
import Component from "../component";

class Variable extends Component {
  boot(instance: ConnectorItem) {}

  assign(instance: ConnectorItem, value: unknown, name: string | null) {
    switch (typeof value) {
      case "boolean":
        if (value === true) {
          instance.element.classList.remove("is-hidden");
          instance.element.classList.add("is-visible");
        } else {
          instance.element.classList.add("is-hidden");
          instance.element.classList.remove("is-visible");
        }
        Connector.get("modal", {
          id: instance.id,
          type: null,
          event: null,
        }).forEach((item: ConnectorItem) => {
          item.element.classList.add("is-active");
          document.body.classList.add("is-overlay");
        });
        break;
      default:
        (instance.element.innerText as any) = value;
        break;
    }
  }
}

export default new Variable();
