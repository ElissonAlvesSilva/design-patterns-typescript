import { EnterpriseCar } from './../vehicle/enterprise-car';
import { Customer } from '../customer/customer-protocol';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Vehicle } from '../vehicle/vehicle-protocol';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
