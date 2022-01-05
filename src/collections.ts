// let x = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2002,
// };

// function printCar(car: { make: string; model: string; year: number }) {
//   console.log(`${car.make} ${car.model} ${car.year}`);
// }

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
  color?: string;
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  car.chargeVoltage;

  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage}v`;

  console.log(str);
}

printCar({ make: "Honda", model: "Accord", year: 2017 });
// Also works
printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
});

printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
  color: "RED",
});
