import { Dot, Circle, Square } from './shapes';

export interface Visitor {
    visitDot(shape: Dot): void;
    visitCircle(shape: Circle): void;
    visitSquare(shape: Square): void;
}

export class XMLExportVisitor implements Visitor {
    visitDot(shape: Dot): void {
        shape.draw();
    }

    visitCircle(shape: Circle): void {
        shape.draw();
    }

    visitSquare(shape: Square): void {
        shape.draw();
    }
}