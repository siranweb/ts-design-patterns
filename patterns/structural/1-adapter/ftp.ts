interface FTPFile {
    path: string;
    data: string;
    encoding: string;
    createDate: string;
}

export class FTP {
    public async connect(): Promise<boolean> {
        // ...
        return true;
    }

    public async uploadFile(path: string, data: string, encoding: string): Promise<FTPFile> {
        // ...
        return {
            path,
            data,
            encoding,
            createDate: (new Date()).toISOString(),
        }
    }

    public async downloadFile(path: string): Promise<FTPFile> {
        // ...
        return {
            path,
            createDate: (new Date()).toISOString(),
            data: 'Pls adapt D:',
            encoding: 'utf8',
        }
    }
}
