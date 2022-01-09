//
// JavaScript, not TypeScript //
//
// @errors: 2341 2445
// @noImplicitAny: true

function generateDoorLockCode() {
  return Math.random();
}
function generateVinNumber() {
  return Math.random();
}
function unlockBike(c: Bike, code: number) {
  /**/
}

class Bike {
  public make: string;
  public model: string;
  public year: number;
  protected vinNumber = generateVinNumber();
  private doorLockCode = generateDoorLockCode();
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  protected unlockAllDoors() {
    unlockBike(this, this.doorLockCode);
  }
}

class Dirt extends Bike {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
    this.vinNumber;
    this.doorLockCode; // private to other class
  }
  public unlock() {
    console.log("Unlocking at " + new Date().toISOString());
    this.unlockAllDoors();
  }
}

let dirt = new Dirt("Honda", "Accord", 2017);
dirt.make;
// ^?
dirt.vinNumber;
// ^?
dirt.doorLockCode;

dirt.unlock();
