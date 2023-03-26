import { LtrIterator, RtlIterator } from './iterators';

export interface CollectionIterator {
    getNext(): any;
    hasMore(): boolean;
}

export enum IteratorType {
    LTR = 'ltr',
    RTL = 'rtl',
}


export class Collection {
    constructor(private state: Record<string, number> = {}) {}

    public getValue(key: string): number {
        return this.state[key];
    }

    public keys(): string[] {
        return Object.keys(this.state);
    }

    public createIterator(type: IteratorType): CollectionIterator {
        if (type === IteratorType.LTR) {
            return new LtrIterator(this);
        }
        if (type === IteratorType.RTL) {
            return new RtlIterator(this);
        }

        throw new Error(`Unknown type ${type}`);
    }
}