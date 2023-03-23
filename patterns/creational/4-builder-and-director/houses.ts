import { Door } from './doors';

export interface House {
    door?: Door;
    windowsAmount?: number;
    withBasement?: boolean;
}

export interface HousePlan extends House {
    price: number;
}