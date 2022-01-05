interface UserInfo {
  name: string;
  email: string;
}

function printUserInfo(info: UserInfo) {
  info.name;
}

//? Example

//* Just as in in JavaScript, a subclass extends from a base class.

// function consumeFood(arg) {}
// /// ---cut---
// class Animal {
//   eat(food) {
//     consumeFood(food);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     return "woof";
//   }
// }
// const d = new Dog();
// d.eat;
// d.bark;

//* Additionally a “sub-interface” extends from a base interface, as shown in the example below
interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOnHairColor(): string;
}

interface Dog extends Mammal {
  getBreed(): string;
}

function careForDog(dog: Dog) {
  dog.getFurOnHairColor;
  dog.getBreed;
  dog.isAlive;
}

// ? Implements

interface AnimalLike {
  eat(food: string): string;
}

class Cat implements AnimalLike {
  mewo() {
    return "Mewo";
  }
  eat(food: string): string {
    return food;
  }
}

class LivingOrganism {
  isAlive() {
    return true;
  }
}
interface AnimalLike {
  eat(food): void;
}
interface CanBark {
  bark(): string;
}

class Dog extends LivingOrganism implements AnimalLike, CanBark {}
