import { Door, DoorMaterial } from './doors';
import { House, HousePrices } from './houses';

export interface Builder {
    setDoor(door: Door): this;
    setWindowsAmount(amount: number): this;
    setWithBasement(bool: boolean): this;
    reset(): this;
}

export class HouseBuilder implements Builder {
    private result: House = {};

    public setDoor(door?: Door): this {
        if (door) {
            this.result.door = door;
        } else {
            delete this.result.door;
        }
        return this;
    }

    public setWindowsAmount(amount: number): this {
        this.result.windowsAmount = amount;
        return this;
    }

    public setWithBasement(bool: boolean): this {
        this.result.withBasement = bool
        return this;
    }

    public reset(): this {
        this.result = {};
        return this;
    }

    public getResult(): House {
        return this.result;
    }
}

export class HousePlanBuilder implements Builder {
    private result: HousePrices = {
        basementPrice: 0,
        doorPrice: 0,
        windowsPrice: 0,
    };

    public setDoor(door?: Door): this {
        if (door?.material === DoorMaterial.metal) {
            this.result.doorPrice = 10;
        } else if (door?.material === DoorMaterial.wood) {
            this.result.doorPrice = 5;
        } else {
            this.result.doorPrice = 0;
        }
        return this;
    }

    public setWindowsAmount(amount: number): this {
        this.result.windowsPrice = amount * 3;
        return this;
    }

    public setWithBasement(bool: boolean): this {
        this.result.basementPrice = bool ? 20 : 0;
        return this;
    }

    public reset(): this {
        this.result = {
            basementPrice: 0,
            doorPrice: 0,
            windowsPrice: 0
        };
        return this;
    }

    public getResult(): HousePrices {
        return this.result;
    }
}