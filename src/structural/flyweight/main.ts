import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Elisson', 'a020', 'Av Brasil m', 'AM');
deliveryContext(factory, 'Eduarda', 'a020', 'Av Brasil m', 'AM');
deliveryContext(factory, 'Duda', '20b', 'Av Brasil m', 'AM');
deliveryContext(factory, 'ELena', 'a020', 'Rua 225', 'PR');
deliveryContext(factory, 'Ester', '245', 'Tv do leite', 'SP');

console.log();
console.log(factory.getLocations());
