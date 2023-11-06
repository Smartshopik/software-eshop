import axios from "axios";
import { Template } from "../components/Template";
import { Variable } from "../components/Variable";
import config from "../config";
import Connector, { ConnectorItem } from "../connector";
import Axios from "../utils/utils.ajax";
import AjaxResource from "./resources";

const AjaxActions = ["value", "innerText", "innerHtml"];

interface AjaxOptions {
  resources?: Record<string, AjaxResource>;
}

class Ajax {
  id: string;
  options: AjaxOptions;
  connected: ConnectorItem[];
  fetcher: Axios;
  workingWith: ConnectorItem;

  constructor() {
    this.fetcher = new Axios(
      axios.create({
        baseURL: config.api.url,
      })
    );
  }

  init(id: string, options: AjaxOptions, reinit: boolean = false) {
    this.id = id;
    this.options = options;
    this.connected = Connector.get(id);
    this.connected.forEach((instance) => {
      if (instance.event) {
        this.handleEvent(instance);
      }
    });

    Object.entries(this.options.resources).forEach(([key, value]) => {
      (value as any).init(this.fetcher, this.connected, reinit);
    });
  }

  reinit() {
    this.init(this.id, this.options, true);
  }

  isBindable(value: any) {
    return (
      (typeof value === "string" || value instanceof String) &&
      value.startsWith("{") &&
      value.endsWith("}")
    );
  }

  binded(instance: ConnectorItem, value: any) {
    let default_value = value;
    let selector = "";
    let action = "";
    value = value.replace(/\s/g, "").replace(/}/g, "").replace(/{/g, "");

    if (value.split("||")[1]) {
      default_value = value.split("||")[1];
      selector = value.split("||")[0].split(".")[0].split("(")[1].split(")")[0];
      action = value.split("||")[0].split(".")[1];
    } else {
      selector = value.split(".")[0].split("(")[1].split(")")[0];
      action = value.split(".")[1];
    }

    const connected = Connector.get(instance.name, {
      id: instance.id,
    }).find((conn: ConnectorItem) => conn.element.matches(selector));

    if (!connected || !AjaxActions.includes(action)) return default_value;

    return connected.element[action];
  }

  loading(instance: ConnectorItem) {
    Connector.get(instance.name, {
      id: instance.id,
    }).forEach((conn: ConnectorItem) => {
      if (conn.event && instance.event.params[0] === conn.event.params[0]) {
        // const associatedItems = Connector.get(instance.name, {
        //   fullEvent: instance.event
        // })

        // associatedItems.forEach((associatedItem: ConnectorItem) => {
        //   if(associatedItem !== instance) {
        //     if(associatedItem.element.classList.contains('is-loading') && instance.element.classList.contains('is-loading')) {
        //       associatedItem.element.classList.remove('is-loading')
        //     }
        //     if(associatedItem.element.classList.contains('is-disabled') && instance.element.classList.contains('is-disabled')) {
        //       associatedItem.element.classList.remove('is-disabled')
        //     }

        //     if(associatedItem.element.getAttribute('disabled') === 'true' && instance.element.getAttribute('disabled') === 'true') {
        //       associatedItem.element.removeAttribute('disabled')
        //     }
        //   }
        // });

        // console.log(instance)

        if (conn.element.classList.contains("is-loading")) {
          conn.element.classList.remove("is-loading");
        } else {
          conn.element.classList.add("is-loading");
        }

        // if(conn.element.classList.contains('is-disabled')) {
        //   setTimeout(() => {
        //     conn.element.classList.remove('is-disabled')
        //   }, 100)
        // } else {
        //   conn.element.classList.add('is-disabled')
        // }

        // if(conn.element.getAttribute('disabled') === 'true') {
        //   setTimeout(() => {
        //     conn.element.removeAttribute('disabled')
        //   }, 100)
        //   conn.element.removeAttribute('disabled')
        // } else {
        //   conn.element.setAttribute('disabled', 'true')
        // }
      }
    });

    Connector.get(Template.id, {
      id: instance.id,
    }).forEach((conn: ConnectorItem) =>
      conn.element.classList.toggle("is-loading")
    );

    if (instance.event.params[0]) {
      const parts = instance.event.params[0].split(".").reverse();

      parts.forEach((part, index) => {
        Connector.get(Template.id, {
          id: parts.slice(index, parts.length).reverse().join("."),
        }).forEach((conn: ConnectorItem) =>
          conn.element.classList.toggle("is-loading")
        );
      });
    }
  }

  success(instance: ConnectorItem, data: any = {}, sendedData: any = {}) {
    if (data.templates) {
      Object.entries(data.templates).forEach(([name, html]) => {
        Connector.get(Template.id, {
          type: name,
        }).forEach((conn: ConnectorItem) => Template.html(conn, html));
      });
    }

    if (data.variables) {
      Object.entries(data.variables).forEach(([name, value]) => {
        Connector.get(Variable.id, {
          type: name,
        }).forEach((conn: ConnectorItem) => Variable.assign(conn, value, name));
      });
    }

    if (data) {
      Object.entries(data).forEach(([name, value]) => {
        if (
          name !== "templates" &&
          name !== "status" &&
          name !== "redirect_url" &&
          name !== "variables" &&
          name !== "replace_url"
        ) {
          Connector.get(Variable.id, {
            type: name,
          }).forEach((conn: ConnectorItem) =>
            Variable.assign(conn, value, name)
          );
        }
      });
    }

    if (data.redirect_url) {
      window.location.href = data.redirect_url;
    }

    if (data.replace_url) {
      window.history.pushState(
        {
          params: sendedData,
          instance: {
            id: instance.id,
          },
        },
        null,
        data.replace_url
      );
    }
  }

  error(instance: ConnectorItem, data: any = {}) {
    // if (data.templates) {
    //   Object.entries(data.templates).forEach(([name, html]) => {
    //     Connector.get(Template.id, {
    //       type: name,
    //     }).forEach((conn: ConnectorItem) => Template.html(conn, html))
    //   })
    // }
    // if (data.variables) {
    //   Object.entries(data.variables).forEach(([name, value]) => {
    //     Connector.get(Variable.id, {
    //       type: name,
    //     }).forEach((conn: ConnectorItem) => Variable.assign(conn, value))
    //   })
    // }
    return;
  }

  async process(instance: ConnectorItem, data: any) {
    if (this.options.resources[instance.event.params[0]]) {
      (this.options.resources[instance.event.params[0]] as any).call(
        instance,
        data,
        {
          onStart: this.loading,
          onEnd: this.loading,
          onSuccess: this.success,
          onError: this.error,
        }
      );
    } else {
      try {
        this.loading(instance);

        setTimeout(async () => {
          const response = await this.fetcher.get("", {
            params: { ...data },
          });

          this.loading(instance);

          if (response.error) {
            await this.error(instance, response.data);
          } else {
            await this.success(instance, response.data, data);
          }
        }, 2000);
      } catch (e) {
        this.error(instance, e.response.data);
      }
    }
  }

  handleEvent(instance: ConnectorItem) {
    if (instance.element.getAttribute("listener") !== "true") {
      instance.element.setAttribute("listener", "true");
      instance.element.addEventListener(instance.event.event, (e) =>
        this.eventFunction(e, instance)
      );
    }
  }

  eventFunction(e: Event, instance: ConnectorItem) {
    if (
      instance.element.nodeName !== "INPUT" &&
      (instance.element as HTMLInputElement).type !== "checkbox"
    ) {
      e.preventDefault();
    }

    let data: any = [];

    try {
      Object.entries(
        JSON.parse(instance.data.data ? instance.data.data : "{}")
      ).forEach(([key, value]) => {
        if (this.isBindable(value)) {
          data[key] = this.binded(instance, value);
        } else {
          data[key] = value;
        }
      });
    } catch (e) {
      window.dump(e);
    }

    this.process(instance, data);
  }
}

export default new Ajax();
