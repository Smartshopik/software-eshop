import Connector, { ConnectorItem } from "../../connector";
import Component from "../component";

export interface InputNumberOptions {
  icon_up?: string;
  icon_down?: string;
}

export interface InputNumberInstance extends ConnectorItem {
  min: number;
  max: number;
  step: number;
  value: number;
  icon_up: string;
  icon_down: string;
  faker?: HTMLElement;
}

class InputNumber extends Component {
  options: InputNumberOptions;
  instances: InputNumberInstance[] = [];

  init() {
    const config = document.body.dataset.input
      ? JSON.parse(document.body.dataset.input)
      : null;

    if (config && config.number) {
      if (config.number["icon_up"]) {
        this.options.icon_up = config.number["icon_up"];
      }
      if (config.number["icon_down"]) {
        this.options.icon_down = config.number["icon_down"];
      }
    }

    this.defaults(this.options);
    this.connected.forEach((instance) => {
      if (!instance.element.hasAttribute("init")) {
        instance.element.setAttribute("init", "true");
        this.boot(instance);
      }
    });
  }

  register(connected: ConnectorItem[], options?: InputNumberOptions) {
    this.id = connected[0].type;
    this.connected = connected;
    this.options = options;
    this.init();
  }

  boot(instance: ConnectorItem) {
    const input = instance.element.querySelector("input");
    const inputInstance: InputNumberInstance = {
      ...instance,
      min: 0,
      max: 100,
      step: 1,
      icon_up: instance.data["iconUp"]
        ? instance.data["iconUp"]
        : this.options.icon_up,
      icon_down: instance.data["iconDown"]
        ? instance.data["iconDown"]
        : this.options.icon_down,
      value: 0,
    };

    if (input.step) inputInstance.step = parseInt(input.step);
    if (input.min) inputInstance.min = parseInt(input.min);
    if (input.max) inputInstance.max = parseInt(input.max);
    if (input.value) inputInstance.value = parseInt(input.value);

    this.instances.push(inputInstance);
    this.render(inputInstance);
    Connector.reinit(inputInstance.element);
    this.handleEvent(inputInstance);
  }

  render(instance: InputNumberInstance) {
    const input = document.createElement("div");
    input.classList.add("input");

    input.append(instance.element.querySelector("input"));

    input.innerHTML += `
            <div class="input__buttons">
                <button type="button">
                    <i class="${instance.icon_up}"></i>
                </button>
                <button type="button">
                    <i class="${instance.icon_down}"></i>
                </button>
            </div>
        `;
    instance.faker = input;
    instance.element.append(instance.faker);
  }

  handleEvent(instance: InputNumberInstance) {
    const buttons = instance.faker.querySelectorAll("button");

    buttons[0].addEventListener("click", (e) =>
      this.handleIncrease(e, instance)
    );
    buttons[1].addEventListener("click", (e) =>
      this.handleDecrease(e, instance)
    );
    instance.faker
      .querySelector("input")
      .addEventListener("change", (e) => this.handleChange(e, instance));
  }

  rerender(instance: InputNumberInstance) {
    instance.faker.querySelector("input").value = instance.value.toString();
  }

  handleChange(e: Event, instance: InputNumberInstance) {
    const value = parseInt((e.target as HTMLInputElement).value);
    instance.value =
      value > instance.max
        ? instance.max
        : value < instance.min
        ? instance.min
        : value;
    this.rerender(instance);
  }

  handleIncrease(e: Event, instance: InputNumberInstance) {
    if (instance.value < instance.max) instance.value += instance.step;
    this.rerender(instance);
    instance.element
      .querySelector("input[type=number]")
      .dispatchEvent(new CustomEvent("change"));
  }

  handleDecrease(e: Event, instance: InputNumberInstance) {
    if (instance.value > instance.min) instance.value -= instance.step;
    this.rerender(instance);
    instance.element
      .querySelector("input[type=number]")
      .dispatchEvent(new CustomEvent("change"));
  }
}

export default new InputNumber();
