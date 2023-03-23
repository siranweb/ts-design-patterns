// https://refactoring.guru/design-patterns/prototype

interface Shape {
    color: string;
    clone(): Shape
}

class Circle implements Shape {
    constructor(public color: string) {}

    public clone(): Shape {
        return structuredClone(this);
    }
}

const circle = new Circle('red');
const circleCopy = circle.clone();