import { DeliveryFlyweightProtocol } from './delivery-flywight-protocol';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictonary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictonary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsicState: DeliveryLocationData,
  ): DeliveryFlyweightProtocol {
    const key = this.createId(intrinsicState);
    if (key in this.locations) {
      return this.locations[key];
    }
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictonary {
    return this.locations;
  }
}
