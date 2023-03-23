export enum DoorMaterial {
    wood = 'wood',
    metal = 'metal',
}

export interface Door {
    material: DoorMaterial;
}

export class HouseDoor implements Door {
    material: DoorMaterial.wood
}

export class SecurityDoor implements Door {
    material: DoorMaterial.metal
}