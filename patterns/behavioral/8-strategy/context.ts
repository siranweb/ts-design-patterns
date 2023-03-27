import { Strategy } from './strategies';

export class Context {
    constructor(private strategy: Strategy) {}

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public doSomething(): void {
        this.strategy.execute();
    }
}
