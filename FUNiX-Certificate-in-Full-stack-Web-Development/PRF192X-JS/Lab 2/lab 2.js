// Lab 1
// alert("Vietnam");
const country = "Vietnam"; // lab 2.2
const continent = "Asia"; // lab 2.2
let population = 100000000;
console.log(country);
console.log(continent);
console.log(population);

// Lab 2.1
let isIsland = true;
let language = "English";
// const continent = "Africa"; // lab 2.2
// console.log(continent); => Error

// Lab 2.3
console.log(population / 2);
console.log(population + 1);
let populationFinland = 6000000;
// if (population > populationFinland) {
//   console.log("Vietnam's population is bigger than Finland's");
// } else {
//   console.log("Vietnam's population is even smaller than Finland's");
// }
console.log(population > populationFinland);
let populationAverage = 33000000;
console.log(population < populationAverage);
/* let description = country + " and its " + population + " people speak " + language; */

// Lab 2.4
let description = "${country} and its ${population} people speak ${language}";

// Lab 2.5
if (population > populationFinland) {
  console.log(
    `Vietnam's population is ${population - populationAverage} above average`
  );
} else {
  console.log(
    `Vietnam's population is ${populationAverage - population} below average`
  );
}

// Lab 2.6
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
