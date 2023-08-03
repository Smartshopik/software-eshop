import { ConnectorItem } from "../connector"

class FacebookTrack {
    handle(e: Event, triggerer: ConnectorItem, instances: ConnectorItem[], params: any[]) {   
        try {
            if(triggerer.data["track"]) {
                window.fbq('track', triggerer.event.params[1], JSON.parse(triggerer.data["track"]))    
            } else {
                window.fbq('track', triggerer.event.params[1])
            }
        } catch(e) {
            window.dump(e)
        }
    }
}

export default new FacebookTrack()