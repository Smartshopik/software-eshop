import Component from '../component'
import Connector from '../../connector'
import InputRange, { InputRangeOptions } from './InputRange.component'
import InputFile, { InputFileOptions } from './InputFile.component'
import InputSelect, { InputSelectOptions } from './InputSelect.component'
import InputNumber, { InputNumberOptions } from './InputNumber.component'

interface InputOptions {
  range?: InputRangeOptions
  file?: InputFileOptions
  select?: InputSelectOptions
  number?: InputNumberOptions
}

class Input extends Component {
  options: InputOptions

  init(id: string, options?: InputOptions) {
    this.id = id
    this.options = options
    this.register()
  }

  reinit() {
    this.init(this.id, this.options)
  }

  register() {
    if (Connector.get(this.id).length) {
      if (Connector.get(this.id, { type: 'range' }).length) InputRange.register(Connector.get(this.id, { type: 'range' }), this.options ? this.options.range : null)
      if (Connector.get(this.id, { type: 'file' }).length) InputFile.register(Connector.get(this.id, { type: 'file' }), this.options ? this.options.file : null)
      if (Connector.get(this.id, { type: 'select' }).length) InputSelect.register(Connector.get(this.id, { type: 'select' }), this.options ? this.options.select : null)
      if (Connector.get(this.id, { type: 'number' }).length) InputNumber.register(Connector.get(this.id, { type: 'number' }), this.options ? this.options.number : null)
    }
  }
}

export default new Input()
