import { Context } from './context';
import { Strategy1, Strategy2 } from './strategies';

// https://refactoring.guru/design-patterns/strategy

const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

const context = new Context(strategy1);
context.doSomething();

context.setStrategy(strategy2);
context.doSomething();