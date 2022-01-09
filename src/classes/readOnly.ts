// @errors: 2540
class Car {
  public make: string;
  public model: string;
  public readonly year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  updateYear() {
    this.year++;
  }
}
