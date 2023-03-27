export enum EventType {
    OPEN = 'open',
    CLOSE = 'close',
}

export interface MyEventListener {
    update(filename: string): void;
}

export class EventManager {
    private listeners: Record<EventType, MyEventListener[]> = {
        [EventType.OPEN]: [],
        [EventType.CLOSE]: [],
    };

    public subscribe(eventType: EventType, listener: MyEventListener): void {
        this.listeners[eventType].push(listener);
    }

    public unsubscribe(eventType: EventType, listener: MyEventListener): void {
        const index = this.listeners[eventType].findIndex((savedListener) => savedListener === listener);
        this.listeners[eventType].splice(index, 1);
    }

    public notify(eventType: EventType.OPEN, data: { filename: string }): void;
    public notify(eventType: EventType.CLOSE, data: { filename: string }): void;
    public notify(eventType: EventType, data: Record<string, any>): void {
        if (eventType === EventType.CLOSE) {
            this.listeners[eventType].forEach(listener => listener.update(data.filename));
        } else if (eventType === EventType.OPEN) {
            this.listeners[eventType].forEach(listener => listener.update(data.filename));
        }
    }
}
