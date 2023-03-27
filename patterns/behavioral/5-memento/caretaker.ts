import { Memento } from './memento';
import { Originator } from './originator';

export class Caretaker {
    private history: Memento[] = [];

    constructor(private readonly originator: Originator) {}

    public undo(): void {
        if (!this.history.length) return;

        const memento = this.history.pop();
        this.originator.restore(memento);
    }

    public backup(): void {
        this.history.push(this.originator.save());
    }
}