import { HouseDoor, SecurityDoor } from './doors';
import { HouseBuilder, HousePlanBuilder } from './builders';
import { HouseDirector } from './director';

// https://refactoring.guru/design-patterns/builder

const houseBuilder = new HouseBuilder();
const housePlanBuilder = new HousePlanBuilder();

const simpleHouse = houseBuilder.reset().setDoor(new HouseDoor()).setWindowsAmount(2).setWithBasement(false).getResult();
const secureHousePlan = housePlanBuilder.reset().setDoor(new SecurityDoor()).setWindowsAmount(0).setWithBasement(true).getResult();

// or with director

const director = new HouseDirector(houseBuilder);
director.makeSimpleHouse();
const anotherSimpleHouse = houseBuilder.getResult();

director.changeBuilder(housePlanBuilder);
director.makeSecureHouse();
const anotherSecureHousePlan = housePlanBuilder.getResult();