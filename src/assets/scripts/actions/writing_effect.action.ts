import { ConnectorItem } from "../connector"

class Handler {
    element: HTMLElement
    data: string[]
    index: number = 0

    constructor(triggerer: ConnectorItem) {
        this.element = triggerer.element
        this.data = triggerer.data.write.split(';').map(elm => elm.trim())

        setTimeout(() => {
            this.writeWord()
        }, 1000)
    }

    writeWord() {
        if(this.element.nodeName === 'INPUT') {
            (this.element as HTMLInputElement).placeholder = ''
        } else {
            this.element.innerHTML = ''
        }

        if(this.index === this.data.length) {
            this.index = 0
            this.writeWord()
        } else {
            this.writeLetter(0, this.data[this.index].split(''))
        }
    }

    writeLetter(index: number, letters: string[]) {
        if(index === letters.length) {
            setTimeout(() => {
                this.deleteLetter(letters.length - 1)
            }, 2000)
        } else {
            if(this.element.nodeName === 'INPUT') {
                (this.element as HTMLInputElement).placeholder = (this.element as HTMLInputElement).placeholder + letters[index];
            } else {
                this.element.innerHTML = this.element.innerHTML + letters[index];
            }

            setTimeout(() => {
                this.writeLetter(index + 1, letters)
            }, 150)
        }
    }

    deleteLetter(index: number, letters: string[] = []) {
        if(index < 0) {
            setTimeout(() => {
                this.index++
                this.writeWord()
            }, 1000)
        } else {
            if(this.element.nodeName === 'INPUT') {
                (this.element as HTMLInputElement).placeholder = (this.element as HTMLInputElement).placeholder.substring(0, index)
            } else {
                this.element.innerHTML = this.element.innerHTML.substring(0, index)
            }

            setTimeout(() => {
                this.deleteLetter(index - 1, letters)
            }, 50)
        }
    }
}

class WritingEffect {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {   
        if(!triggerer.data.write) return

        new Handler(triggerer)
    }
}

export default new WritingEffect()