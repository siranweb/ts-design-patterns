import { Door, DoorMaterial } from './doors';
import { House, HousePlan } from './houses';

export interface Builder {
    setDoor(door: Door): this;
    setWindowsAmount(amount: number): this;
    setWithBasement(bool: boolean): this;
    reset(): this;
}

export class HouseBuilder implements Builder {
    private result: House = {};

    public setDoor(door: Door): this {
        this.result.door = door;
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
    private result: HousePlan = {
        price: 0,
    };

    private getDoorCost(): number {
        if (this.result.door?.material) {
            if (this.result.door?.material === DoorMaterial.metal) return 10;
            if (this.result.door?.material === DoorMaterial.wood) return 5;
        }
        return 0;
    }

    private updatePrice(): void {
        const doorCost = this.getDoorCost();
        const windowsCost = (this.result.windowsAmount ?? 0) * 3;
        const basementCost = this.result.withBasement ? 20 : 0;
        this.result.price = doorCost + windowsCost + basementCost;
    }

    public setDoor(door: Door): this {
        this.result.door = door;
        this.updatePrice();
        return this;
    }

    public setWindowsAmount(amount: number): this {
        this.result.windowsAmount = amount;
        this.updatePrice();
        return this;
    }

    public setWithBasement(bool: boolean): this {
        this.result.withBasement = bool;
        this.updatePrice();
        return this;
    }

    public reset(): this {
        this.result = {
            price: 0
        };
        return this;
    }

    public getResult(): HousePlan {
        return this.result;
    }
}