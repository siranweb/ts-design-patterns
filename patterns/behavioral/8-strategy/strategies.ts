export interface Strategy {
    execute(): void;
}

export class Strategy1 implements Strategy {
    public execute() {
        console.log('strategy1');
    }
}

export class Strategy2 implements Strategy {
    public execute() {
        console.log('strategy2');
    }
}


