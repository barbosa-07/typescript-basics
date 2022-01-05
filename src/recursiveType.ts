type NestedNumbers = number | NestedNumbers[];

let val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

if (typeof val !== "number") {
  val.push(41);
  val.push("hello");
}
