import { Customer } from '../customer/customer-protocol';
import { Vehicle } from './vehicle-protocol';

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} [Individual]`,
    );
  }
}
