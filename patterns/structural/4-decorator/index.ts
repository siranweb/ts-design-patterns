import { Notifier } from './notifier';
import { EmailDecorator, SlackDecorator } from './decorators';

// https://refactoring.guru/design-patterns/decorator

let notifier = new Notifier();
notifier = new EmailDecorator(notifier);
notifier = new SlackDecorator(notifier);

notifier.notify();
