import Connector, { ConnectorItem } from '../connector'
import NoActionPassed from './exceptions/NoActionsPassed'

interface ActionOptions {
  actions?: Record<string, Object>
}

class Action {
  id: string
  options: ActionOptions
  actions: Record<string, Object>
  connected: ConnectorItem[]

  defaults(options: ActionOptions) {
    if (!options.actions) throw new NoActionPassed(`V Action.init options nebyly nastaveny žádné akce. Nejsou-li žádné akce, nemá smysl Action modul používat.`)

    this.actions = options.actions
  }

  init(id: string, options: ActionOptions = {}) {
    try {
      this.id = id
      this.options = options
      this.connected = Connector.get(id)
      this.defaults(options)
      this.connected.forEach((instance) => {
        if (!instance.element.hasAttribute('init')) {
          instance.element.setAttribute('init', 'true')

          if (instance.event) {
            this.handleEvent(instance)
          }
        }
      })
    } catch (err) {
      if (err.name === NoActionPassed.name)
        window.dump(err.message, {
          options,
        })
    }
  }

  reinit() {
    this.init(this.id, this.options)
  }

  handleEvent(instance: ConnectorItem) {
    this.initialCache(instance)
    if (instance.event.event === 'load') {
      self.addEventListener('load', (e) => this.eventFunction(e, instance))
    } else {
      instance.element.addEventListener(instance.event.event, (e) => this.eventFunction(e, instance))
    }
  }

  initialCache(instance: ConnectorItem) {
    const params = instance.event.params

    if (params.includes('cache')) {
      const action = this.actions[params[0]] as any
      action.initialCache(
        instance,
        Connector.get(this.id, {
          id: instance.id,
          event: null,
        }),
        params.slice(1)
      )
    }
  }

  eventFunction(e: any, instance: ConnectorItem) {
    const params = instance.event.params

    if (!params[0] || !this.actions[params[0]]) return

    const action = this.actions[params[0]] as any
    action.handle(
      e,
      instance,
      Connector.get(this.id, {
        id: instance.id,
        event: null,
      }),
      params.slice(1)
    )
  }
}

export default new Action() as Action
