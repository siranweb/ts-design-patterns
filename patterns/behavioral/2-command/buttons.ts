import { Command } from './commands';

export class Button {
    private onClick: Command = null;

    public setOnClick(command: Command) {
        this.onClick = command;
    }

    public execute(): void {
        if (this.onClick) {
            this.onClick.execute();
        }
    };
}