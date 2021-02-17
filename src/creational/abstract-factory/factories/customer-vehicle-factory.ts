import { Customer } from '../customer/customer-protocol';
import { Vehicle } from '../vehicle/vehicle-protocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
