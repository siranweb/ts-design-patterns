import { MediatorCheckEvent, MediatorClickEvent, MediatorEvent } from './events';
import { Component, Button, Checkbox } from './components';

export interface Mediator {
    notify(sender: Component, event: MediatorEvent): void;
}

export class Modal implements Mediator {
    private readonly okButton: Button;
    private readonly saveCheckbox: Checkbox;
    private save: boolean = false;

    constructor() {
        this.okButton = new Button(this);
        this.saveCheckbox = new Checkbox(this);
    }

    private send(): void {};

    public notify(sender: Component, event: MediatorEvent) {
        if (this.okButton === sender && event instanceof MediatorClickEvent) {
            this.send();
        } else if (this.saveCheckbox === sender && event instanceof MediatorCheckEvent) {
            this.save = !this.save;
        }
    }
}
