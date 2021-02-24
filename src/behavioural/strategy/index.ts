import { DefaultDiscountStrategy } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscountStrategy } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discout = new DefaultDiscountStrategy();
shoppingCart.discout = new NewDiscountStrategy();

shoppingCart.addProduct({ name: 'Prod 1', price: 50 });
shoppingCart.addProduct({ name: 'Prod 2', price: 50 });
shoppingCart.addProduct({ name: 'Prod 3', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
