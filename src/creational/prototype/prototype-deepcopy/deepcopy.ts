export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Address implements PersonPrototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

export class Person implements PersonPrototype {
  public addreesses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addreesses = this.addreesses.map((item) => item.clone());
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

person1.addreesses[0].street = 'NOVA ADDRESS';

person2.name = 'Eduarda';
console.log(person2);
console.log(person2.name);

console.log(person1);
console.log(person1.name);
