import { Product, Box } from './components';

// https://refactoring.guru/design-patterns/composite

const product1 = new Product(5);
const product2 = new Product(10);
const product3 = new Product(15);
const product4 = new Product(30);

const box1 = new Box();
box1.add(product1);
box1.add(product2);

const box2 = new Box();
box2.add(product3);

const rootBox = new Box();
rootBox.add(product4);
rootBox.add(box1);
rootBox.add(box2);

const price = rootBox.getPrice();
const box1Price = box1.getPrice();
const product1Price = product1.getPrice();