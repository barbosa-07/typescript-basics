// variables

let value = 10;

// this line will give error
value = "this is book";

// literal type { this cant be reassigned and changed }
const age = 6;

// any type implicit

// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
  endTime = 0;
  endTime = new Date();
}, RANDOM_WAIT_TIME);

// function

function add(a: number, b: number): number {}

const result = add(1, "3");
const result1 = add(1, 3);

const p = new Promise(result);

add(2, add(2, 3));
add(2, add(2, 3));
add(2, add(2, 3));
add(2, add(2, 3));
add(2, add(2, 3));
