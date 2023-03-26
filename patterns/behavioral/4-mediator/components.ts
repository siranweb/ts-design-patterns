import { MediatorCheckEvent, MediatorClickEvent } from './events';
import { Mediator } from './mediator';

export abstract class Component {
    constructor(protected readonly mediator: Mediator) {}
    public abstract click(): void;
}

export class Button extends Component {
    public click(): void {
        this.mediator.notify(this, new MediatorClickEvent())
    }
}
export class Checkbox extends Component {
    public click(): void {
        this.mediator.notify(this, new MediatorCheckEvent())
    }
}