export interface Video {
    url: string;
    name: string;
    length: number;
}

export interface VideoHostingLib {
    getVideo(url: string): Video;
    listVideos(playlistId: number): Video[];
}

export class VideoHosting implements VideoHostingLib {
    public getVideo(url: string): Video {
        return {
            url,
            name: 'Hello',
            length: 1000,
        }
    }

    public listVideos(playlistId: number): Video[] {
        return [
            {
                url: '/video/1',
                name: 'Hello',
                length: 1000,
            },
            {
                url: '/video/2',
                name: 'World',
                length: 2500,
            }
        ]
    }
}