import { Collection, IteratorType } from './collections';

// https://refactoring.guru/design-patterns/iterator

const numsCollection = new Collection({
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
});

const ltrIterator = numsCollection.createIterator(IteratorType.LTR);
const rtlIterator = numsCollection.createIterator(IteratorType.RTL);

ltrIterator.getNext();
ltrIterator.getNext();
ltrIterator.hasMore();

rtlIterator.getNext();
rtlIterator.getNext();
ltrIterator.hasMore();