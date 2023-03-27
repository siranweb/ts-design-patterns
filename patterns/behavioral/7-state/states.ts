import { Player } from './player';

export abstract class State {
    protected constructor(protected player: Player) {}

    public next(): void {
        const index = this.player.playlist.findIndex(song => song === this.player.currentSong);
        if (!index || index + 1 >= this.player.playlist.length) {
            this.player.currentSong = this.player.playlist[0] ?? null;
        } else {
            this.player.currentSong = this.player.playlist[index + 1];
        }
        this.player.currentLength = 0;
    };

    public prev(): void {
        const index = this.player.playlist.findIndex(song => song === this.player.currentSong);
        if (!index || index <= 0) {
            this.player.currentSong = this.player.playlist[this.player.playlist.length - 1] ?? null;
        } else {
            this.player.currentSong = this.player.playlist[index - 1];
        }
        this.player.currentLength = 0;
    };
}

export class PausedState extends State {
    constructor(player: Player) {
        super(player);
    }

    public prev(): void {
        this.player.currentLength = 0;
    };
}

export class PlayingState extends State {}