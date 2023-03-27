import { Visitor } from './visitors';

export interface Shape {
    move(x: number, y: number): void;
    draw(): void;
    accept(visitor: Visitor): void;
}

export class Dot implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: Visitor) {
        visitor.visitDot(this);
    }
}

export class Circle implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: Visitor) {
        visitor.visitCircle(this);
    }
}

export class Square implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: Visitor) {
        visitor.visitSquare(this);
    }
}