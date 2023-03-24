import { VideoFile, AudioMixer, OggCompressionCodec, MPEG4CompressionCodec } from './libs';

// https://refactoring.guru/design-patterns/facade

// Facade example
class VideoConverter {
    constructor(
        private readonly videoFile: VideoFile,
        private readonly oggCompressionCodec: OggCompressionCodec,
        private readonly mpeg4CompressionCodec: MPEG4CompressionCodec,
        private readonly audioMixer: AudioMixer,
    ) {}

    public convertVideo(): Record<string, never> {
        this.oggCompressionCodec.compress();
        this.mpeg4CompressionCodec.compress();
        this.audioMixer.normalize();
        return this.videoFile.create();
    }
}