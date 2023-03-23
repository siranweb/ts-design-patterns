export abstract class Button {
    protected onClickClb?: Function;
    public onClick(clb: Function) {
        this.onClickClb = clb;
    }

    public abstract generate(): string;
}

export class LinuxButton extends Button {
    public generate(): string {
        return `linux_button`;
    }
}

export class WindowsButton extends Button {
    public generate(): string {
        return 'windows_button';
    }
}

export enum ButtonType {
    linux = 'linux',
    windows = 'windows'
}