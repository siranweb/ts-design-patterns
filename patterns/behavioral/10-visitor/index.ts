import { Square, Dot, Circle } from './shapes';
import { XMLExportVisitor } from './visitors';

// https://refactoring.guru/design-patterns/visitor

const xmlExportVisitor = new XMLExportVisitor();

const square = new Square();
const dot = new Dot();
const circle = new Circle();

square.accept(xmlExportVisitor);
dot.accept(xmlExportVisitor);
circle.accept(xmlExportVisitor);