function obtainRandomVehicle(): any {
  return {} as any;
}

class English {
  read() {
    console.log("This that what");
  }
}

class Maths {
  solve() {
    console.log("a + b * c is what?");
  }
}

class Hindi {
  write() {
    console.log("There is nothing wrong");
  }
}

type Book = English | Maths | Hindi;

let myBook: Book = obtainRandomVehicle();

// The exhaustive conditional
if (myBook instanceof English) {
  myBook.read();
} else if (myBook instanceof Maths) {
  myBook.solve();
} else {
  const neverValue: never = myBook;
}

//  this is a cusotom  never handler
class UnreachabelError extends Error {
  constructor(_nev: never, message: string) {
    super(message);
  }
}

if (myBook instanceof English) {
  myBook.read();
} else if (myBook instanceof Maths) {
  myBook.solve();
} else {
  throw new UnreachabelError(myBook, `Unexpected book Type ${myBook}`);
}

//*  NOTE  Technically in JS or TS this would be { y| -Number.MAX_VALUE <= y <= Number.MAX_VALUE }, but if you know enough to ask, you probably don’t need this footnote…!

/* 
Now, one of three things will happen in that final else block

We will have handled every case before reaching it, and thus we will never enter the final else block
We will catch upstream code changes that need to be handled in this conditional at compile time (e.g., adding the Boat case)
If somehow an unexpected value “slip through” and is not caught until we actually run the code, we will get a meaningful error message
Note that this approach works nicely with a switch statement, when the UnreachableError is thrown from the default case clause.

*/
