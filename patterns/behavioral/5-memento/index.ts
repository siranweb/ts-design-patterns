import { Originator } from './originator';
import { Caretaker } from './caretaker';

// https://refactoring.guru/design-patterns/memento

const originator = new Originator();
const caretaker = new Caretaker(originator);

caretaker.backup();

originator.setAmount(5);
caretaker.backup();

originator.setText('Hello');
caretaker.backup();

caretaker.undo();
caretaker.undo();
caretaker.undo();