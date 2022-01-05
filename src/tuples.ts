//          [Year, Make,     Model    ]
let myCar = [2002, "Toyota", "Corolla"];
// destructured assignment is convenient here!
const [year, make, model] = myCar;

//  here typescript is making assumoptions
// so for typles we need to define spccific tyep

let myCarT: [number, string, string] = [2002, "Toyota", "Corolla"];
myCarT = ["hello", "wjkjk", 12]; // typescript is yelling at us

// this is which typscript dont support

myCarT.push("hello");
