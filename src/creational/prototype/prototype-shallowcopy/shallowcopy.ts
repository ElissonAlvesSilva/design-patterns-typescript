export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements PersonPrototype {
  public addreesses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addreesses.push(address);
  }
}

const address1 = new Address('Tv do leite', 1);
const person1 = new Person('Elisson', 30);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person2);
console.log(person2.name);
