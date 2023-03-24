import { Device } from './devices';

export class Remote {
    constructor(protected readonly device: Device) {}

    public togglePower(): boolean {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }

        return this.device.isEnabled();
    }

    public volumeUp(): number {
        this.device.setVolume(this.device.getVolume() + 1);
        return this.device.getVolume();
    }
    public volumeDown(): number {
        this.device.setVolume(this.device.getVolume() - 1);
        return this.device.getVolume();
    }
    public channelUp(): number {
        this.device.setChannel(this.device.getChannel() + 1);
        return this.device.getChannel();
    }

    public channelDown(): number {
        this.device.setChannel(this.device.getChannel() - 1);
        return this.device.getChannel();
    }
}

export class AdvancedRemote extends Remote {
    public mute(): number {
        this.device.setVolume(0);
        return this.device.getVolume();
    }
}