import { Video, VideoHostingLib, VideoHosting } from './video-hosting';

// https://refactoring.guru/design-patterns/proxy

class Proxy implements VideoHostingLib {
    private readonly videos: Record<string, Video> = {};

    constructor(private readonly videoHosting: VideoHosting) {}

    public getVideo(url: string): Video {
        let video = this.videos[url];
        if (!video) {
            video = this.videoHosting.getVideo(url);
            this.videos[url] = video;
        }
        return video;
    }

    public listVideos(playlistId: number): Video[] {
        return this.videoHosting.listVideos(playlistId);
    }
}