import { State } from './state';

export interface Memento {
    getState(): State;
}

export class ConcreteMemento implements Memento {
    constructor(private readonly state: State) {}

    public getState(): State {
        return this.state;
    }
}