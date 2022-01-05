// completely fine to think of it as OR, for types.

// Union types in TypeScript can be described using the | (pipe) operator.

// "success" | "error";

function flipCoin(): "head" | "tail" {
  if (Math.random() > 0.5) "head";
  return "tail";
}

// const outcome = flipCoin();

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "head") {
    return ["success", { name: "Rizwan Akram", email: "rizwan@gmail.com" }];
  } else {
    return ["error", new Error("The coin landed on Tail()")];
  }
}

const outcome = maybeGetUserInfo();

const [first, second] = outcome;

first;

second;

//  narowing types
if (second instanceof Error) {
  // In this branch  second is instance of error
  second;
} else {
  //  in this branch of code second is user info
  second;
}

//? Discriminated union | taggged union
//* typeguard  based on a key
//todo
// ! type guard
if (outcome[0] === "error") {
  outcome;
} else {
  outcome;
}
