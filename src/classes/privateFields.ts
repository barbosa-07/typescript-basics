// @errors: 18013
class Jeep {
  public make: string;
  public model: string;
  #year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.#year = year;
  }
}
const c = new Jeep("Honda", "Accord", 2017);
c.#year;
