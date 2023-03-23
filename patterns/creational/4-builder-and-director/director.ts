import { Builder } from './builders';
import { HouseDoor, SecurityDoor } from './doors';

export class HouseDirector {
    constructor(private builder: Builder) {}

    public changeBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public makeSimpleHouse(): void {
        const door = new HouseDoor();
        this.builder
            .reset()
            .setDoor(door)
            .setWindowsAmount(2)
            .setWithBasement(false);
    }

    public makeSecureHouse(): void {
        const door = new SecurityDoor();
        this.builder
            .reset()
            .setDoor(door)
            .setWindowsAmount(0)
            .setWithBasement(true);
    }
}