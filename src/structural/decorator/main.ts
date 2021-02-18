import { ProductCustomizationDecorator } from './product/product-customized-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/tshit';

const camiseta = new Tshirt();
const decoratedStampTshirt = new ProductStampDecorator(camiseta);
const customizedTshirt = new ProductCustomizationDecorator(camiseta);

console.log(camiseta.getPrice(), camiseta.getName());
console.log(decoratedStampTshirt.getPrice(), decoratedStampTshirt.getName());
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
