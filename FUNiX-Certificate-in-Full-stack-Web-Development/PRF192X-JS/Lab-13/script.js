"use strict";
// Lab 13.1
function Car(make, speed) {
	this.make = make;
	this.speed = speed;
}
Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(this.speed);
};
Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(this.speed);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.brake();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();

// Lab 13.2
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
		return this;
	}

	get speedUS() {
		console.log(
			`The current speed of ${this.make} is ${this.speed / 1.6} mi/h`
		);
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.speedUS = 160;
console.log(ford); // CarCl {make: 'Ford', speed: 256}

//////////////////////

// Lab 13.3
const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// chargeBattery
EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};
const tesla = new EV("Tesla", 120, 23);
console.log(tesla);

// accelerate
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(
		`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
	);
};
tesla.brake();
tesla.accelerate();

// Lab 13.4
class EVCl extends CarCl {
	#charge; // private field
	constructor(make, speed, charge) {
		super(make, speed); // remove 'this'
		this.#charge = charge;
	}

	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(
			`${this.make} is going at ${this.speed} km/h, with a charge of ${
				this.#charge
			}%`
		);
		return this;
	}
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge); // error
rivian.accelerate().accelerate();
console.log(rivian.speedUS);
