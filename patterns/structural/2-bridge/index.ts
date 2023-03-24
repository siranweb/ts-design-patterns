import { TV, Radio } from './devices';
import { Remote, AdvancedRemote } from './remotes';

// https://refactoring.guru/design-patterns/bridge

const tv = new TV();
const radio = new Radio();

const remote = new Remote(tv);
const advancedRemote = new AdvancedRemote(radio);

remote.togglePower();
remote.channelUp();

advancedRemote.togglePower();
advancedRemote.mute();