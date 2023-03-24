export interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(volume: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
}

export class Radio implements Device {
    private enabled: boolean = false;
    private volume: number = 100;
    private channel: number = 1;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
        this.channel = 1;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number) {
        this.volume = volume;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number) {
        this.channel = channel;
    }
}

export class TV implements Device {
    private enabled: boolean = false;
    private volume: number = 100;
    private channel: number = 1;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number) {
        this.volume = volume;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number) {
        this.channel = channel;
    }
}