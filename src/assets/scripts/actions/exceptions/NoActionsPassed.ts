class NoActionPassed extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'NoActionPassed'
    }
}

export default NoActionPassed