//  any type
let flexible: any = 4;
flexible = "Download some more ram";
flexible = window.document;
flexible = setTimeout;
flexible.it.is.possible.to.access.any.deep.property;

console.log(window, Promise, setTimeout, "foo");

let flexible2: unknown = 5;

flexible2 = "Download some more ram";
flexible2 = window.document;
flexible2 = setTimeout;

let myUnknown: unknown = 14;

if (typeof myUnknown === "number") myUnknown;

if (typeof myUnknown === "string") myUnknown;

// This code runs for { myUnknown| anything }
if (typeof myUnknown === "string") {
  // This code runs for { myUnknown| all strings }
  console.log(myUnknown, "is a string");
} else if (typeof myUnknown === "number") {
  // This code runs for { myUnknown| all numbers }
  console.log(myUnknown, "is a number");
} else {
  // this would run for "the leftovers"
  //       { myUnknown| anything except string or numbers }
}

console.log(flexible2.hello);
