"use strict";
// SETUP
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const ageInput = document.getElementById("input-age");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");

const openForm = document.getElementById("container-form");
const editBtn = document.querySelectorAll("btn-warning");

renderTableData(petArr); // render sẵn data mẫu ở storage.js

// SIDEBAR ANIMATION
document.getElementById("sidebar-title").onclick = () =>
  sidebar.classList.toggle("active");

// SUBMIT & UPDATE LOCAL STORAGE
submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    lengthData: parseInt(lengthInput.value), // lengthData tránh trùng length funciton
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date().toLocaleDateString("en-GB"),
  };
  const validate = validateData(data);
  if (validate) {
    // Data edited -> tìm & match với data petArr -> update localStorage
    const index = petArr.findIndex((pet) => pet.id === data.id);
    petArr[index] = data;
    saveToStorage("petArr", petArr);
    // data.date = petArr[index].date;
    openForm.classList.add("hide");
    renderTableData(petArr);
  }
});

// VALIDATE  trước khi render
function validateData(data) {
  let isValidated = true;
  if (data.name.trim() === "") {
    alert("Please input name");
    isValidated = false;
  }
  if (isNaN(data.age) === "") {
    alert("Please input age");
    isValidated = false;
  }
  if (isNaN(data.weight) === "") {
    alert("Please input weight");
    isValidated = false;
  }
  if (isNaN(data.lengthData) === "") {
    alert("Please input length");
    isValidated = false;
  }

  if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
    isValidated = false;
  }

  if (data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15!");
    isValidated = false;
  }

  if (data.lengthData < 1 || data.lengthData > 100) {
    alert("Length must be between 1 and 100!");
    isValidated = false;
  }

  if (data.type == "Select Type") {
    alert("Please select Type!");
    isValidated = false;
  }

  if (data.breed == "Select Breed") {
    alert("Please select Breed!");
    isValidated = false;
  }

  return isValidated;
}

// RENDER
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  petArr.forEach(function (petItem, i) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${petItem.id}</th>
      <td>${petItem.name}</td>
      <td>${petItem.age}</td>
      <td>${petItem.type}</td>
      <td>${petItem.weight}</td>
      <td>${petItem.lengthData}</td>
      <td>${petItem.breed}</td>
      <td>
        <i class="bi bi-square-fill" style="color: ${petItem.color}"></i>
      </td>
      <td><i class="bi ${
        petItem.vaccinated === true
          ? "bi-check-circle-fill"
          : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petItem.dewormed === true ? "bi-check-circle-fill" : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petItem.sterilized === true
          ? "bi-check-circle-fill"
          : "bi-x-circle-fill"
      }"></i></td>
      <td>${petItem.date}</td>
      <td>
        <button onclick="startEditPet('${
          petItem.id
        }')" type="button" class="btn btn-warning">Edit</button>
      </td>
      `;
    tableBodyEl.appendChild(row);
  });
}

// EDIT
function startEditPet(id) {
  openForm.classList.remove("hide");

  const pet = petArr.find((petItem) => petItem.id === id);
  idInput.value = id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.lengthData;
  colorInput.value = pet.color;
  breedInput.value = pet.breed;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterilized;

  renderBreed();
  breedInput.value = `${pet.breed}`;
}

typeInput.addEventListener("change", renderBreed);

function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  if (typeInput.value === "Dog") {
    breedArr
      .filter((breedItem) => breedItem.type === "Dog")
      .forEach(function (breedItem) {
        const option = document.createElement("option");
        option.innerHTML = `${breedItem.breed}`;
        breedInput.appendChild(option);
      });
  } else if (typeInput.value === "Cat") {
    breedArr
      .filter((breedItem) => breedItem.type === "Cat")
      .forEach(function (breedItem) {
        const option = document.createElement("option");
        option.innerHTML = `${breedItem.breed}`;
        breedInput.appendChild(option);
      });
  }
}
