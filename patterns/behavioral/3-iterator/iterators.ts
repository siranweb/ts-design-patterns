import { Collection, CollectionIterator } from './collections';

export class LtrIterator implements CollectionIterator {
    private index: number = null;
    private readonly keys: string[] = null;

    constructor(private readonly collection: Collection) {
        this.keys = this.collection.keys();
        this.index = 0;
    }

    public getNext(): number | undefined {
        const key = this.keys[this.index];
        if (!key) return undefined;
        this.index++;
        return this.collection.getValue(key);
    }

    public hasMore(): boolean {
        return this.keys.length >= this.index + 1;
    }
}

export class RtlIterator implements CollectionIterator {
    private index: number = null;
    private readonly keys: string[] = null;

    constructor(private readonly collection: Collection) {
        this.keys = this.collection.keys();
        this.index = this.keys.length - 1;
    }

    public getNext(): number | undefined {
        const key = this.keys[this.index];
        if (!key) return undefined;
        this.index--;
        return this.collection.getValue(key);
    }

    public hasMore(): boolean {
        return this.index >= 0;
    }
}