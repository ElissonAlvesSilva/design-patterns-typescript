import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class NewDiscountStrategy extends DiscountStrategy {
  protected discout = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discout = 5;
    }
    return total - total * (this.discout / 100);
  }
}
