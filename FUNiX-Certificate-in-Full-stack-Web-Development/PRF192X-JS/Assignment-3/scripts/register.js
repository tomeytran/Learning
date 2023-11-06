"use strict";
// const userArr = [];
const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const userName = document.getElementById("input-username");
const password = document.getElementById("input-password");
const passwordConfirm = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

registerBtn.addEventListener("click", function () {
	const data = {
		firstName: firstName.value,
		lastName: lastName.value,
		userName: userName.value,
		password: password.value,
		passwordConfirm: passwordConfirm.value,
	};

	const validate = validateData(data);

	if (validate) {
		userArr.push(data);
		saveToStorage("userArr", userArr);
		clearInput();
		console.log(userArr);
	}
});

function validateData(data) {
	let isValidated = true;
	if (data.firstName.trim() === "") {
		alert("Please input first name");
		isValidated = false;
	}
	if (data.lastName.trim() === "") {
		alert("Please input last name");
		isValidated = false;
	}
	if (data.userName.trim() === "") {
		alert("Please input user name");
		isValidated = false;
	}
	if (data.password.trim() === "") {
		alert("Please input password");
		isValidated = false;
	} else if (data.passwordConfirm.trim() === "") {
		alert("Please confirm password");
		isValidated = false;
	} else if (data.passwordConfirm !== data.password) {
		alert("The password confirmation does not match");
	}
	return isValidated;
}

function clearInput() {
	firstName.value = "";
	lastName.value = "";
	userName.value = "";
	password.value = "";
	passwordConfirm.value = "";
}
