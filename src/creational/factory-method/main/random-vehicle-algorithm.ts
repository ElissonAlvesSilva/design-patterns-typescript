import { BicicleFactory } from '../factories/bicicle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicicleFactory = new BicicleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bycicle = bicicleFactory.getVehicle('Bicicle');

  const cars = [car1, car2, bycicle];

  return cars[randomNumbers(cars.length)];
}
