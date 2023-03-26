export class Editor {
    public text: string = '';

    public getSelection(): string {
        return this.text;
    }
    public deleteSelection(): void {
        this.text = '';
    }
    public replaceSelection(text: string): void {
        this.text = text;
    }
}

