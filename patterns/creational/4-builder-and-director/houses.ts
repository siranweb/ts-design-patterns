import { Door } from './doors';

export interface House {
    door?: Door;
    windowsAmount?: number;
    withBasement?: boolean;
}

export interface HousePrices {
    doorPrice: number;
    windowsPrice: number;
    basementPrice: number;
}