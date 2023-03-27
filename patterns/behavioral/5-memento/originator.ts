import { State } from './state';
import { Memento, ConcreteMemento } from './memento';

export class Originator {
    private state: State = {
        text: '',
        amount: 0,
    };

    public setText(text: string): void {
        this.state.text = text;
    }

    public setAmount(amount: number): void {
        this.state.amount = amount;
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento) {
        this.state = memento.getState();
    }
}