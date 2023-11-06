"use strict";
const user1 = {
	firstName: "Johnny",
	lastName: "Doe",
	userName: "johnnyDoe",
	password: "123456",
};

const user2 = {
	firstName: "Tommy",
	lastName: "Dan",
	userName: "tommyDan",
	password: "987654",
};

if (!getFromStorage("userArr")) {
	saveToStorage("userArr", [user1, user2]);
}
const userArr = getFromStorage("userArr");

// LOCAL STORAGE FUNCTIONS
function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}
