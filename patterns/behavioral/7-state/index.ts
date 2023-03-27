import { Player } from './player';
import { PausedState, PlayingState } from './states';
import { Song } from './song';

// https://refactoring.guru/design-patterns/state

const song1 = new Song('King and Jester - Dead Anarchist', 5000);
const song2 = new Song('Nirvana - Nevermind', 5000);

const player = new Player();

player.addSong(song1);
player.addSong(song2);

const pausedState = new PausedState(player);
const playingState = new PlayingState(player);

player.changeState(playingState);
player.next();
player.prev();
player.changeState(pausedState);
player.next();
player.prev();