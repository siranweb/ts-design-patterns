import { Editor } from './editor';
import { EmailEventListener, SMSEventListener } from './event-listeners';
import { EventManager, EventType } from './events';

// https://refactoring.guru/design-patterns/observer

const eventManager = new EventManager();
const editor = new Editor(eventManager);

const emailEventListener = new EmailEventListener();
const smsEventListener = new SMSEventListener();

eventManager.subscribe(EventType.OPEN, emailEventListener);
eventManager.subscribe(EventType.OPEN, smsEventListener);
eventManager.subscribe(EventType.CLOSE, emailEventListener);

editor.openFile('test.txt');
editor.closeFile('test.txt');

eventManager.unsubscribe(EventType.OPEN, smsEventListener);