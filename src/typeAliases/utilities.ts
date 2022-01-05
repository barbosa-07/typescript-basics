//? Import type from other file
import { UserContactInfo } from "./types";

function printContactInfo(user: UserContactInfo) {
  console.log(user);
  console.log(user.email);
}

const painter = {
  name: "Ali",
  email: "ali@gmail.com",
};

// ! this is also valid as Typescript matches the structure
//* this is the valid behaviour as it have same type as UserContactInfo
printContactInfo(painter);

//? EAMAPLE Lets add types for this fucntion

function flipCoin(): "head" | "tail" {
  if (Math.random() > 0.5) "head";
  return "tail";
}

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "head") {
    return ["success", { name: "Rizwan Akram", email: "rizwan@gmail.com" }];
  } else {
    return ["error", new Error("The coin landed on Tail()")];
  }
}

//! Types

type UserErrorType = ["error", Error];
type UserSuccesType = ["success", { name: string; email: string }];

type UserInfoType = UserErrorType | UserSuccesType;

//? Modifed  version
function maybeGetUserInfoWithType(): UserInfoType {
  if (flipCoin() === "head") {
    return ["success", { name: "Rizwan Akram", email: "rizwan@gmail.com" }];
  } else {
    return ["error", new Error("The coin landed on Tail()")];
  }
}

//? Inheritence in type aliases
//! well there is no extendes key word for type aliases

type SpecialDate = Date & { getReason(): string };

const newYear: SpecialDate = {
  ...new Date(),
  getReason: () => "Last Day of the year",
};

newYear.toISOString();

newYear.getReason();
