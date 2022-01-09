interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;
const subtract: TwoNumberCalc = (x, y) => x - y;

// * Void type

function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, "  "));
}

const x = printFormattedJSON(["hello", "world"]);

//  use case similar like javascript
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];

invokeInFourSeconds(() => values.push(4));

invokeInFiveSeconds(() => values.push(4));

// constructor signature

interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor();
