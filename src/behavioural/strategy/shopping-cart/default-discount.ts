import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DefaultDiscountStrategy extends DiscountStrategy {
  protected discout = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discout = 10;
    } else if (total >= 200 && total < 300) {
      this.discout = 20;
    } else if (total >= 300) {
      this.discout = 30;
    }
    return total - total * (this.discout / 100);
  }
}
