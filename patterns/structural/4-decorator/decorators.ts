import { Notifier } from './notifier';

abstract class BaseDecorator implements Notifier {
    protected constructor(protected readonly wrapee: Notifier) {}

    public notify(): boolean {
        return true;
    }
}

export class EmailDecorator extends BaseDecorator {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }

    private sendEmail(): boolean {
        return true;
    }

    public notify(): boolean {
        this.wrapee.notify();
        this.sendEmail();
        return true;
    }
}

export class SlackDecorator extends BaseDecorator {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }

    private sendMessage(): boolean {
        return true;
    }

    public notify(): boolean {
        this.wrapee.notify();
        this.sendMessage();
        return true;
    }
}