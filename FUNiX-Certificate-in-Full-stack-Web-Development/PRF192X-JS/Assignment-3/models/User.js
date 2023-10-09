"use strict";
class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAuthenticated() {
    return this.username && this.password;
  }
}
const user = new User("John", "Doe", "johndoe", "123456");

console.log(user.getFullName()); // "John Doe"
console.log(user.isAuthenticated()); // true

