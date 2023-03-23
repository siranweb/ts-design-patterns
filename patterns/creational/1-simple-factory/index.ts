import { Button, LinuxButton, WindowsButton, ButtonType } from './buttons';

// https://refactoring.guru/design-patterns/factory-comparison

class ButtonFactory {
    public create(type: ButtonType): Button {
        if (type === ButtonType.linux) return new LinuxButton();
        if (type === ButtonType.windows) return new WindowsButton();
        throw new Error(`No such button type ${type}`);
    }
}

const buttonFactory = new ButtonFactory();
const linuxButton = buttonFactory.create(ButtonType.linux);
const windowsButton = buttonFactory.create(ButtonType.windows);
