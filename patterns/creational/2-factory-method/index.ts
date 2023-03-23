import { Button, LinuxButton, WindowsButton } from './buttons';

// https://refactoring.guru/design-patterns/factory-method

abstract class Dialog {
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