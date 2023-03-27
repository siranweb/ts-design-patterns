import { MyEventListener } from './events';

export class EmailEventListener implements MyEventListener {
    public update(filename: string) {
        // ...
    }
}

export class SMSEventListener implements MyEventListener {
    public update(filename: string) {
        // ...
    }
}