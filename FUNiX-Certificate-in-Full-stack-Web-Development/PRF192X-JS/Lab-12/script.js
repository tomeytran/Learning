'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

//-- TOP NAVIGATION -- //
const labelWelcome = document.querySelector('.welcome');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const btnLogin = document.querySelector('.login__btn');

const containerApp = document.querySelector('.app');

//-- HEADER --//
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');

//-- MOVEMENTS --//
const containerMovements = document.querySelector('.movements');

//-- TRANSFER --//
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const btnTransfer = document.querySelector('.form__btn--transfer');

//-- LOAN --//
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const btnLoan = document.querySelector('.form__btn--loan');

//-- CLOSE --//
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const btnClose = document.querySelector('.form__btn--close');

//-- FOOTER --//
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const btnSort = document.querySelector('.btn--sort');
const labelTimer = document.querySelector('.timer');

//////////////////////////////////////////////////////////
//-- TOP NAVIGATION -- //

// Compute Username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

//-- MOVEMENTS --//
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>  
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//-- FOOTER --//

// Summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// Sort
// Timer countdown
//////////////////////////////////////////////////////////

// LAB 12.1

// const dogJulia = [3, 5, 2, 12, 7];
// const dogKate = [4, 1, 15, 8, 3];
const checkDogs = function (dogJulia, dogKate) {
  const dogJuliaCopy = dogJulia.slice(1, -1);
  console.log(dogJuliaCopy); // [5, 2, 12]
  const dogs = dogJuliaCopy.concat(dogKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still an puppy and is ${dog} years old`
      );
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = function (ages) {
  // const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAge); // [36, 4, 32, 2, 76, 48, 28]
  // const adults = humanAge.filter(age => age >= 18);
  // console.log(adults); // [36, 32, 76, 48, 28]
  // const averageHuman =
  //   adults.reduce((acc, age) => acc + age, 0) / adults.length; // 44
  const averageHuman = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(averageHuman); // 44
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
