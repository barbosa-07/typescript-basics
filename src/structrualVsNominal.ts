function foo(x) {
  // ... mystery code ...
}
//
// TYPE CHECKING
// -------------
// Is `myValue` type-equivalent to
//     what `foo` whats to receive?
foo(myValue);

// is the value y holds type-equivalent to what `x` allows?
x = y;

const myStrings = ["a"];
/// ---cut---
function bar(): string[] {
  // ...mystery code that might return early...
  //
  //
  // TYPE CHECKING
  // -------------
  // Is `myStrings` type-equivalent to
  //     what `bar` states it will return?
  return myStrings;
}

// Nominal vs structural

// NOMINAL (JAVA)

/*
public class Car {
    String make;
    String model;
    int make;
  }
  public class CarChecker {
    // takes a `Car` argument, returns a `String`
    public static String printCar(Car car) {  }
  }
  Car myCar = new Car();
  // TYPE CHECKING
  // -------------
  // Is `myCar` type-equivalent to
  //     what `checkCar` wants as an argument?
  CarChecker.checkCar(myCar);

*/

//  Structural ( TypeScript)

class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};

function printCar(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar(new Car()); // Fine
printCar(new Truck()); // Fine
printCar(vehicle); // Fine

// The function printCar doesn’t care about which constructor its argument came from, it only cares about whether it has:

// A make property that’s of type string
// A model property that’s of type string
// A year property that’s of type number
