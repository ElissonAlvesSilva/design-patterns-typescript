import { Bicicle } from '../vehicle/bicicle';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class BicicleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicicle(vehicleName);
  }
}
