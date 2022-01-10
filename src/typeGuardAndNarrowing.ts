// @noImplicitAny: false

// let value1:
//   | Date
//   | null
//   | undefined
//   | "pineapple"
//   | [number]
//   | { dateRange: [Date, Date] };

// // instanceof
// if (value1 instanceof Date) value1;
// // instance of
// else if (typeof value1 === "string") value1;
// // typeof
// else if (value1 === null) value1;
// // Specific value check
// else if (Array.isArray(value1)) value1;
// // Some built-in functions
// else if (!value1) value1;
// // Truthy/falsy check
// else if ("dateRange" in value1) value1;
// // Property presence check
// else value1;

//  User defined type guards
// interface CarLike {
//   make: string;
//   model: string;
//   year: number;
// }

// let maybeCar: unknown;

// // the guard
// if (
//   maybeCar &&
//   typeof maybeCar === "object" &&
//   "make" in maybeCar &&
//   typeof maybeCar["make"] === "string" &&
//   "model" in maybeCar &&
//   typeof maybeCar["model"] === "string" &&
//   "year" in maybeCar &&
//   typeof maybeCar["year"] === "number"
// ) {
//   maybeCar;
// }

// @noImplicitAny: false
// interface CarLike {
//   make: string;
//   model: string;
//   year: number;
// }

// let maybeCar: unknown;

// // the guard
// function isCarLike(valueToTest: any) {
//   return (
//     valueToTest &&
//     typeof valueToTest === "object" &&
//     "make" in valueToTest &&
//     typeof valueToTest["make"] === "string" &&
//     "model" in valueToTest &&
//     typeof valueToTest["model"] === "string" &&
//     "year" in valueToTest &&
//     typeof valueToTest["year"] === "number"
//   );
// }

// // using the guard
// if (isCarLike(maybeCar)) {
//   maybeCar;
//   // ^?
// }
// is type guard

// interface CarLike {
//   make: string;
//   model: string;
//   year: number;
// }

// let maybeCar: unknown;

// // the guard
// function isCarLike(valueToTest: any): valueToTest is CarLike {
//   return (
//     valueToTest &&
//     typeof valueToTest === "object" &&
//     "make" in valueToTest &&
//     typeof valueToTest["make"] === "string" &&
//     "model" in valueToTest &&
//     typeof valueToTest["model"] === "string" &&
//     "year" in valueToTest &&
//     typeof valueToTest["year"] === "number"
//   );
// }

// // using the guard
// if (isCarLike(maybeCar)) {
//   maybeCar;
//   // ^?
// }

interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

// the guard
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

// using the guard
maybeCar;
// ^?
assertsIsCarLike(maybeCar);
maybeCar;
// ^?

// Bad use of tyep guards

function isNull(val: any): val is null {
  return !val;
}

const empty = "";
const zero = 0;
if (isNull(zero)) {
  console.log(zero); // is it really impossible to get here?
  //          ^?
}
if (isNull(empty)) {
  console.log(empty); // is it really impossible to get here?
  //           ^?
}
