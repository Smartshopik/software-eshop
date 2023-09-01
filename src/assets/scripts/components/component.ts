import Connector, { ConnectorItem } from "../connector";

enum ComponentStates {
  IS_ACTIVE = "is-active",
  IS_COLLAPSING = "is-collapsing",
  IS_COLLAPSE = "is-collapse",
  IS_VISIBLE = "is-visible",
  IS_HIDDEN = "is-hidden",
}

class Component {
  id: string;
  connected: ConnectorItem[];
  options: {};

  init(id: string, options?: {}) {
    this.id = id;
    this.connected = Connector.get(id);
    this.options = options;
    this.defaults(options);
    this.connected.forEach((instance) => {
      this.boot(instance);
    });
    this.connected.forEach((instance) => {
      if (instance.event) {
        this.handleEvent(instance);
      }
    });
    this.booted();
  }

  reinit() {
    this.init(this.id, this.options);
  }

  boot(instance: ConnectorItem) {}

  booted() {}

  handleEvent(instance: ConnectorItem) {}

  // Activation
  isActive(element: HTMLElement) {
    return element.classList.contains(ComponentStates.IS_ACTIVE);
  }

  setActive(element: HTMLElement) {
    element.classList.add(ComponentStates.IS_ACTIVE);
  }

  removeActive(element: HTMLElement) {
    element.classList.remove(ComponentStates.IS_ACTIVE);
  }

  toggleActive(element: HTMLElement) {
    element.classList.toggle(ComponentStates.IS_ACTIVE);
  }

  // visible
  isVisible(element: HTMLElement) {
    return element.classList.contains(ComponentStates.IS_VISIBLE);
  }

  setVisible(element: HTMLElement) {
    element.classList.add(ComponentStates.IS_VISIBLE);
  }

  removeVisible(element: HTMLElement) {
    element.classList.remove(ComponentStates.IS_VISIBLE);
  }

  toggleVisible(element: HTMLElement) {
    element.classList.toggle(ComponentStates.IS_VISIBLE);
  }

  // hidden
  isHidden(element: HTMLElement) {
    return element.classList.contains(ComponentStates.IS_HIDDEN);
  }

  setHidden(element: HTMLElement) {
    element.classList.add(ComponentStates.IS_HIDDEN);
  }

  removeHidden(element: HTMLElement) {
    element.classList.remove(ComponentStates.IS_HIDDEN);
  }

  toggleHidden(element: HTMLElement) {
    element.classList.toggle(ComponentStates.IS_HIDDEN);
  }

  // Collapsation
  isCollapsing(element: HTMLElement) {
    return element.classList.contains(ComponentStates.IS_COLLAPSING);
  }

  setCollapsing(element: HTMLElement) {
    element.classList.add(ComponentStates.IS_COLLAPSING);
  }

  removeCollapsing(element: HTMLElement) {
    element.classList.remove(ComponentStates.IS_COLLAPSING);
  }

  isCollapse(element: HTMLElement) {
    return element.classList.contains(ComponentStates.IS_COLLAPSE);
  }

  setCollapse(element: HTMLElement) {
    element.classList.add(ComponentStates.IS_COLLAPSE);
  }

  removeCollapse(element: HTMLElement) {
    element.classList.remove(ComponentStates.IS_COLLAPSE);
  }

  collapse(head: HTMLElement, body: HTMLElement) {
    if (!this.isCollapsing(body)) {
      body.style.display = "block";
      let height = body.clientHeight;

      if (!this.isActive(head)) {
        setTimeout(() => {
          body.style.height = height + "px";
          body.style.display = "";
        }, 1);

        this.setCollapse(body);
        this.setCollapsing(body);

        setTimeout(() => {
          this.removeCollapsing(body);
          this.setCollapse(body);
          body.style.height = "";
          body.style.display = "";
        }, parseFloat(getComputedStyle(body)["transitionDuration"]) * 1000);
      } else {
        body.style.height = height + "px";
        this.removeCollapse(body);
        this.setCollapsing(body);

        setTimeout(() => {
          body.style.height = "0";
        }, 1);

        setTimeout(() => {
          this.removeCollapsing(body);
          this.setCollapse(body);
          body.style.height = "";
          body.style.display = "";
        }, parseFloat(getComputedStyle(body)["transitionDuration"]) * 1000);
      }

      this.toggleActive(head);
    }
  }

  defaults(options: {}) {}
}

export default Component;
