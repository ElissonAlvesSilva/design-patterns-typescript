import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DiscountStrategy {
  protected discout = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
