import { Notifier } from './notifier';
import { EmailDecorator, SlackDecorator } from './decorators';

let notifier = new Notifier();
notifier = new EmailDecorator(notifier);
notifier = new SlackDecorator(notifier);

notifier.notify();
