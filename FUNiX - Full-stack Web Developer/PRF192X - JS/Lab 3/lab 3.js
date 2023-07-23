// Lab 3.1
console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
); // 4 '617' 23 false 1143

// Lab 3.2
// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );
// if (numNeighbors == 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }
// chuyển thành === thì No borders vì input nhập là string ko đc converted => cho prompt( ) vào trong Number()

// Lab 3.3
alert("Welcome to country picker!");
// Tạo các biến tương ứng với ngôn ngữ, dân số, có phải đảo quốc không
let language = prompt("What is the official language of the country?");
let population = Number(
  prompt("What is the population of the country (in millions)?")
);
let isIsland = prompt("Is the country an island (true or false)?");

console.log(
  `Okay so because you choose language ${language}, population of ${population}:`
);

// Viết câu lệnh if kiểm tra các tiêu chí của Sarah
if (language === "English" && population < 50 && isIsland == "false") {
  // Nếu đất nước phù hợp, in ra string
  console.log("You should live in Portugal :)");
} else {
  // Nếu không, in ra string khác
  console.log("Portugal does not meet your criteria :(");
}
console.log("because in number of native speaker, it ranks: "); //  chỗ này em tự thêm ngoài đề bài để make sense với dòng dưới

// Lab 3.4
switch (language) {
  case "Chinese or Mandarin":
    console.log("MOST number of native speakers!'");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
console.log(`and also compared to population of ${population} millions:`); //  chỗ này em tự thêm ngoài đề bài để make sense với dòng dưới

// Lab 3.5
console.log(
  population > 33
    ? "Portugal's population is above average"
    : "Portugal's population is below average"
);

// Lab 3.6.1
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

// Lab 3.6.2
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
