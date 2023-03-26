import { Editor } from './editor';

export interface Command {
    execute(): any;
}

export class CopyCommand implements Command {
    constructor(private readonly editor: Editor) {}

    public execute(): string {
        return this.editor.getSelection();
    }
}

export class PasteCommand implements Command {
    constructor(
        private readonly editor: Editor,
        private readonly text: string,
    ) {}

    public execute(): void {
        this.editor.replaceSelection(this.text);
    }
}

export class CutCommand implements Command {
    constructor(
        private readonly editor: Editor,
    ) {}

    public execute(): string {
        const text = this.editor.getSelection();
        this.editor.deleteSelection();
        return text;
    }
}