// Lab 4.1
const describeCountry = (country, population, capitalCity) =>
  `${country} has ${population} million people and its capital city is ${capitalCity}`; // thay cho function(   )
console.log(describeCountry(`Finland`, `6`, `Helsinki`));
console.log(describeCountry(`vietnam`, `97`, `Hanoi`));
console.log(describeCountry(`Indonesia`, `100`, `Jakarta`));

// Lab 4.2
// toFixed(2) để giới hạn 2 số sau phẩy
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// percentageOfWorld1 - declaration
const china = percentageOfWorld1(1441);
const vietnam = percentageOfWorld1(97.6);
const usa = percentageOfWorld1(332.6);
console.log(`Trung Quốc có ${china.toFixed(2)}% dân số thế giới.`);
console.log(`Việt Nam có ${vietnam.toFixed(2)}% dân số thế giới.`);
console.log(`Hoa Kỳ có ${usa.toFixed(2)}% dân số thế giới.`);
// percentageOfWorld2 - expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const india = percentageOfWorld2(1380);
const brazil = percentageOfWorld2(213.8);
const russia = percentageOfWorld2(146.2);
console.log(`Ấn Độ có ${india.toFixed(2)}% dân số thế giới.`);
console.log(`Brazil có ${brazil.toFixed(2)}% dân số thế giới.`);
console.log(`Nga có ${russia.toFixed(2)}% dân số thế giới.`);

// Lab 4.3
// // percentageOfWorld3 - arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(
  `Ấn Độ có ${percentageOfWorld3(1380).toFixed(2)}% dân số thế giới.`
);

// Lab 4.4
const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  ).toFixed(2)}% of the world`;
console.log(describePopulation("China", 1441));
console.log(describePopulation("Vietnam", 97));
console.log(describePopulation("Brazil ", 213.8));

// Lab 4.5
const indiaPop = 1441;
const vietnamPop = 97;
const brazilPop = 213.8;
const russiaPop = 146.2;
const populations = [indiaPop, vietnamPop, brazilPop, russiaPop];
const hasValues = populations.includes(56);
console.log(hasValues);
const percentages = [
  percentageOfWorld1(indiaPop),
  percentageOfWorld1(vietnamPop),
  percentageOfWorld1(russiaPop),
];
console.log(percentages);

// Lab 4.6
let neighbours = ["Vietnam", "China", "Laos", "Cambodia"];
neighbours.push("Utopia");
neighbours.pop("Utopia");
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[0] = "Socialist Republic of Vietnam";
console.log(neighbours);

// Lab 4.7.1
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(23, 34, 27);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No teams win...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(511, 124);

// Lab 4.7.2
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [122, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
