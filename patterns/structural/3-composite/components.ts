export interface Component {
    getPrice(): number;
}

export class Product implements Component {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }
}

export class Box implements Component {
    private children: (Box | Product)[] = [];

    public add(component: Box | Product): void {
        this.children.push(component);
    }

    public getPrice(): number {
        return this.children.reduce((price, component) => component.getPrice(), 0);
    }
}