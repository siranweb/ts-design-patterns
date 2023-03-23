import { Button, LinuxButton, WindowsButton } from './buttons';
import { Checkbox, LinuxCheckbox, WindowsCheckbox } from './checkboxes';

// https://refactoring.guru/design-patterns/abstract-factory

interface IGUIFactory {
    createButton(): Button;
    createCheckbox(checked?: boolean): Checkbox;
}

class WindowsGUIFactory implements IGUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }

    public createCheckbox(checked?: boolean): Checkbox {
        return new WindowsCheckbox(checked);
    }
}

class LinuxGUIFactory implements IGUIFactory {
    public createButton(): Button {
        return new LinuxButton();
    }

    public createCheckbox(checked?: boolean): Checkbox {
        return new LinuxCheckbox(checked);
    }
}