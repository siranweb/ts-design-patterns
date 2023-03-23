export abstract class Checkbox {
    public checked: boolean;

    protected constructor(checked?: boolean) {
        this.checked = checked ?? false;
    }

    public switch(): void {
        this.checked = !this.checked;
    };

    public abstract generate(): string;
}

export class LinuxCheckbox extends Checkbox {
    constructor(checked?: boolean) {
        super(checked);
    }

    public generate(): string {
        return `linux_checkbox`;
    }
}

export class WindowsCheckbox extends Checkbox {
    constructor(checked?: boolean) {
        super(checked);
    }

    public generate(): string {
        return 'windows_checkbox';
    }
}
