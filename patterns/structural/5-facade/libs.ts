export class VideoFile {
    create(): Record<string, never> {
        return {};
    };
}
export class OggCompressionCodec {
    compress(): boolean {
        return true;
    }
}
export class MPEG4CompressionCodec {
    compress(): boolean {
        return true;
    }
}
export class AudioMixer {
    normalize(): boolean {
        return true;
    }
}