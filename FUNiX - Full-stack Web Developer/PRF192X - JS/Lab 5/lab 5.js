// Lab 5.1 - 5.3
const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 97,
  neighbours: ["Laos", "Cambodia", "China"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    isIsland = this.neighbours.length === 0 ? true : false;
    console.log(isIsland);
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Lab 5.4
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting'`);
}

// Lab 5.5
const populations = [440, 37, 105, 10];
let percentages2 = [];
for (let a = 0; a < populations.length; a++) {
  percentages2.push((populations[a] / 7900) * 100);
}
console.log(percentages2);

// Lab 5.6
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
// Nếu như các mảng con có ít nhất hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi
for (let i = 0; i < listOfNeighbours.length; i++) {
  // Lấy mảng con tại vị trí i
  let subArray = listOfNeighbours[i];
  // Kiểm tra nếu mảng con có ít nhất hai phần tử
  if (subArray.length >= 2) {
    // Duyệt qua các phần tử từ thứ 2 trở đi của mảng con
    for (let j = 1; j < subArray.length; j++) {
      // In ra phần tử tại vị trí j
      console.log(subArray[j]);
    }
  }
}

// Lab 5.7
let a = 0;
let percentages3 = [];
while (a <= populations.length) {
  percentages3.push((populations[a] / 7900) * 100);
  a++;
}
console.log(percentages3);

// Lab 5.8.1
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

// Lab 5.8.2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
/* Cho function, bills, tips, totals */
/* Create for loop that calculate tip from bill, then total -> to fill array*/
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills, tips, totals);
