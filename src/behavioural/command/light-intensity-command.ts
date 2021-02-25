import { SmartHouseCommand } from './smart-house-command-protocol';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Light Intensity ${this.light.name} is ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Light Intensity ${this.light.name} is ${intensity}`);
  }
}
