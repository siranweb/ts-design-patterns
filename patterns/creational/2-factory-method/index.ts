import { Button, LinuxButton, WindowsButton } from './buttons';

// https://refactoring.guru/design-patterns/factory-method

abstract class Dialog {
    public name: string;

    public setDialogName(name: string) {
        this.name = name;
    }

    // Factory method. Can be a part of some class with politics (business logic)
    // Actually, that's why this is an abstract class, not interface
    public abstract createButton(): Button;
}

class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

class LinuxDialog extends Dialog {
    public createButton(): Button {
        return new LinuxButton();
    }
}

const dialog = new LinuxDialog();
const button = dialog.createButton();