import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control copy';

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  // type guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDowns();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

console.log();

const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControlWithVolume);
