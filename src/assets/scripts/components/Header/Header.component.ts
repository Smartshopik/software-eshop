import { ConnectorItem } from "../../connector";
import Component from "../component";

class Header extends Component {
  offsetTop: number;
  height: any;

  defaults() {
    this.offsetTop = null;
    this.height = null;
  }

  boot(instance: ConnectorItem) {
    setTimeout(() => {
      instance.element.classList.remove("is-sticky");

      this.offsetTop =
        instance.element.offsetTop + instance.element.parentElement.offsetTop;
      this.height = instance.element.offsetHeight;

      if (instance.type === "sticky") {
        if (
          window.scrollY >= this.offsetTop &&
          !instance.element.classList.contains("is-sticky")
        ) {
          instance.element.classList.add("is-sticky");
          document.body.style.marginTop = `${this.height}px`;
        } else if (window.scrollY < this.offsetTop) {
          instance.element.classList.remove("is-sticky");
          document.body.style.marginTop = `0px`;
        }
      }

      document.addEventListener("scroll", (e) => {
        if (instance.type === "sticky") {
          if (
            window.scrollY >= this.offsetTop &&
            !instance.element.classList.contains("is-sticky")
          ) {
            instance.element.classList.add("is-sticky");
            document.body.style.marginTop = `${this.height}px`;
          } else if (window.scrollY < this.offsetTop) {
            instance.element.classList.remove("is-sticky");
            document.body.style.marginTop = `0px`;
          }
        }
      });
    }, 100);
  }
}

export default new Header();
