import { State } from './states';
import { Song } from './song';

export class Player {
    private state: State = null;

    public volume: number = 50;
    public playlist: Song[] = [];
    public currentSong: Song = null;
    public currentLength: number = 0;

    public changeState(state: State): void {
        this.state = state;
    }

    public setVolume(volume: number): void {
        this.volume = volume;
    }

    public addSong(song: Song): void {
        this.playlist.push(song);
    }

    public next(): void {
        this.state.next();
    }

    public prev(): void {
        this.state.prev();
    }
}