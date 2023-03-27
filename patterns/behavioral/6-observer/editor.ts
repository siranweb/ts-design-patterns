import { EventManager, EventType } from './events';

export class Editor {
    constructor(private readonly events: EventManager) {}

    public openFile(filename: string): void {
        // ...
        this.events.notify(EventType.OPEN, { filename })
    }

    public closeFile(filename: string): void {
        // ...
        this.events.notify(EventType.OPEN, { filename })
    }
}