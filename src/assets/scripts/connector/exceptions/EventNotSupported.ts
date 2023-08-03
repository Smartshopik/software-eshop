class EventNotSupportedException extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'EventNotSupportedException'
    }
}

export default EventNotSupportedException