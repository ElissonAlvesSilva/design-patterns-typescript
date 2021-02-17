import { Customer } from './customer-protocol';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
