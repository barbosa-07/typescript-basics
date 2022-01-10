// class Car {
//   make: string;
//   model: string;
//   year: number;
//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }

class Car1 {
  constructor(public make: string, public model: string, public year: number) {}
}

const myCar1 = new Car1("Honda", "Accord", 2017);
myCar1.make;

//  TS
class Base {}

class Car extends Base {
  foo = console.log("class field initializer");
  constructor(public make: string) {
    super();
    console.log("custom constructor stuff");
  }
}

const c = new Car("honda");

//  compiled version
("use strict");
class Base {}
class Car extends Base {
  constructor(make) {
    super();
    this.make = make;
    this.foo = console.log("class field initializer");
    console.log("custom constructor stuff");
  }
}
const c = new Car("honda");

/* Note the following order of what ends up in the class constructor:

super()
param property initialization
other class field initialization
anything else that was in your constructor after super()

*/
