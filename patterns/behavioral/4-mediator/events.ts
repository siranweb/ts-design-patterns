export interface MediatorEvent {
    name: string;
}

export class MediatorClickEvent implements MediatorEvent {
    public readonly name = 'click';
}

export class MediatorCheckEvent implements MediatorEvent {
    public readonly name = 'check';
}