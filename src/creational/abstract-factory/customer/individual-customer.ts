import { Customer } from './customer-protocol';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}
