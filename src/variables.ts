// variables

let value = 10;

// this line will give error
value = "this is book"

// literal type { this cant be reassigned and changed }
const age = 6


// any type implicit

// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500

let startTime = new Date()
let endTime : Date
    
setTimeout(() => {
  endTime = 0
  endTime = new Date()
}, RANDOM_WAIT_TIME)

