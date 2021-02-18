import { ProductProtocol } from './product-protocol';

export class Tshirt implements ProductProtocol {
  private name = 'Camiseta';
  private price = 89.9;

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
