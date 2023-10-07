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
ford.speedUS(160);
