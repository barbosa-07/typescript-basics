// // null | undefind | void

// // null use case
// const userInfo = {
//   name: "Mike",
//   email: "mike@example.com",
//   secondaryEmail: null, // user has no secondary email
// };

// // undefined usecase

// const formInProgress = {
//   createdAt: new Date(),
//   data: new FormData(),
//   completedAt: undefined, //
// };
// function submitForm() {
//   formInProgress.completedAt = new Date();
// }

// // void -> a fucntion return must be ignored

// console.log(`console.log returns nothing.`);

// // NoN null asseretion operator
// // @errors: 2532
// type GroceryCart = {
//   fruits?: { name: string; qty: number }[];
//   vegetables?: { name: string; qty: number }[];
// };

// const cart: GroceryCart = {};

// cart.fruits.push({ name: "kumkuat", qty: 1 });
// //   ^?
// cart.fruits!.push({ name: "kumkuat", qty: 1 });

// Definite assignment operator

// @errors: 2564
// @noImplicitAny: false
// class ThingWithAsyncSetup {
//   setupPromise: Promise<any>; // ignore the <any> for now
//   isSetup: boolean;

//   constructor() {
//     this.setupPromise = new Promise((resolve) => {
//       this.isSetup = false;
//       return this.doSetup();
//     }).then(() => {
//       this.isSetup = true;
//     });
//   }

//   private async doSetup() {
//     // some async stuff
//   }
// }

class ThingWithAsyncSetup {
  setupPromise: Promise<any>; // ignore the <any> for now
  isSetup!: boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup();
    }).then(() => {
      this.isSetup = true;
    });
  }

  private async doSetup() {
    // some async stuff
  }
}
