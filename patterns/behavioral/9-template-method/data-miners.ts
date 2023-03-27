abstract class DataMiner {
    public mine(): string {
        this.openFile();
        this.extractData();
        this.parseData();
        this.closeFile();
        return 'ok';
    }

    public openFile(): void {}

    public closeFile(): void {}

    public abstract extractData(): void;
    public abstract parseData(): void;
}

export class DocDataMiner extends DataMiner {
    public extractData(): void {
        console.log('extract from doc');
    };
    public parseData(): void {
        console.log('parse doc data');
    };
}

export class PdfDataMiner extends DataMiner {
    public openFile(): void {
        console.log('open pdf file');
    };
    public extractData(): void {
        console.log('extract from pdf');
    };
    public parseData(): void {
        console.log('parse doc pdf');
    };
}