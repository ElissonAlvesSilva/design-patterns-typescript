function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Elisson',
  lastName: 'Silva',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

// Heranca

function SubPerson(firstName, lastName, age) {
  Person.call(firstName, lastName, age);

  this.fromSubClass = 'Oi Elisson';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Elisson', 'Silva', 26);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Eduarda', 'Silva', 22);
console.log(person2);
console.log(person2.fullName());
