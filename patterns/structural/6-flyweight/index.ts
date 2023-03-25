// https://refactoring.guru/design-patterns/flyweight

class TreeType {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly texture: string,
    ) {}

    public draw(canvas: any, x: number, y: number): void {
        // ...
    }
}

class Tree {
    public x: number = 0;
    public y: number = 0;

    constructor(public treeType: TreeType) {}

    public setCoords(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public draw(canvas: any): void {
        this.treeType.draw(canvas, this.x, this.y);
    }
}

class Forest {
    public trees: Tree[] = [];
    public treeTypes: TreeType[] = [];

    public plantTree(name: string, color: string, texture: string, x: number, y: number, canvas: any): void {
        let treeType = this.treeTypes.find(treeType =>
            treeType.name === name
            && treeType.color === color
            && treeType.texture === texture
        );

        if (!treeType) {
            treeType = new TreeType(name, color, texture);
            this.treeTypes.push(treeType);
        }

        const tree = new Tree(treeType);
        tree.setCoords(x, y);
        this.trees.push(tree);

        tree.draw(canvas);
    }
}