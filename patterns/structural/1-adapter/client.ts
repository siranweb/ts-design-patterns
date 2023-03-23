export interface File {
    path: string;
    content: string;
}

export interface FileSystem {
    init(): Promise<void>;
    writeFile(path: string, content: string): Promise<File>;
    readFile(path: string): Promise<File>;
}

export class Client {
    static LOG_PATH = '/home/user/log.txt';
    constructor(private readonly fs: FileSystem) {}

    public async init(): Promise<void> {
        await this.fs.init();
    }

    public async saveLog(log: string): Promise<File> {
        return this.fs.writeFile(Client.LOG_PATH, log);
    }

    public async getLog(): Promise<File> {
        return this.fs.readFile(Client.LOG_PATH);
    }
}