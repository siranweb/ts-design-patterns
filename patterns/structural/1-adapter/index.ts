import { FTP } from './ftp';
import { Client, File, FileSystem } from './client';

// https://refactoring.guru/design-patterns/adapter

class FTPFileSystemAdapter implements FileSystem {
    constructor(private readonly adaptee: FTP) {}

    public async init(): Promise<void> {
        await this.adaptee.connect();
    }

    public async writeFile(path: string, content: string): Promise<File> {
        const ftpFile = await this.adaptee.uploadFile(path, content, 'utf8');
        return {
            path: ftpFile.path,
            content: ftpFile.data
        }
    }

    public async readFile(path: string): Promise<File> {
        const ftpFile = await this.adaptee.downloadFile(path);
        return {
            path: ftpFile.path,
            content: ftpFile.data
        }
    }
}

// Emulating FTP lib
const ftp = new FTP();

const adapter = new FTPFileSystemAdapter(ftp);

// Some class with politics (business logic)
const client = new Client(adapter);

const main = async () => {
    await client.init();
    await client.getLog();
    await client.saveLog('Thank you!');
}