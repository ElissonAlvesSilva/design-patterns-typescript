// Components
export abstract class ProductComponent {
  abstract getPrice(): number;
  // add(...products: ProductComponent[]): void {}
  // remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }
}

// client

const camisa = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('Bicicleta', 100);
const carro = new ProductLeaf('Carro', 40000);

const productBox = new ProductComposite();
productBox.add(camisa, bicicleta, carro);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 1000);
const kindle = new ProductLeaf('Kindle', 300);
const productBoxNew = new ProductComposite();
productBoxNew.add(tablet, kindle);

productBox.add(productBoxNew);
console.log(productBox);
console.log(productBox.getPrice());
