import { Button, LinuxButton, WindowsButton } from './buttons';
import { Checkbox, LinuxCheckbox, WindowsCheckbox } from './checkboxes';

// https://refactoring.guru/design-patterns/abstract-factory

// Unlike factory method example, it doesn't contain any politics (business logic)
interface GUIFactory {
    createButton(): Button;
    createCheckbox(checked?: boolean): Checkbox;
}

class WindowsGUIFactory implements GUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }

    public createCheckbox(checked?: boolean): Checkbox {
        return new WindowsCheckbox(checked);
    }
}

class LinuxGUIFactory implements GUIFactory {
    public createButton(): Button {
        return new LinuxButton();
    }

    public createCheckbox(checked?: boolean): Checkbox {
        return new LinuxCheckbox(checked);
    }
}