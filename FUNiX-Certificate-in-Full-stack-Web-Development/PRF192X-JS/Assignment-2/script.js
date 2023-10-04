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
const deleteBtn = document.querySelectorAll("btn-danger");
const healthyBtn = document.getElementById("healthy-btn");

renderTableData(petArr); // render sẵn data mẫu ở storage.js

// SIDEBAR ANIMATION
document.getElementById("sidebar-title").onclick = () =>
  sidebar.classList.toggle("active");

// SUBMIT & SAVE LOCAL STORAGE
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
    petArr.push(data); // lưu data cùng data mẫu ở storage.js, chung localStorage
    saveToStorage("petArr", petArr);
    renderTableData(petArr);
    clearInput(); // clear form sau khi render
  }
});

// VALIDATE  trước khi render
function validateData(data) {
  let isValidated = true;
  if (data.id.trim() === "") {
    alert("Please input id");
    isValidated = false;
  }
  if (data.name.trim() === "") {
    alert("Please input name");
    isValidated = false;
  }
  if (isNaN(data.age)) {
    alert("Please input age");
    isValidated = false;
  }
  if (isNaN(data.weight)) {
    alert("Please input weight");
    isValidated = false;
  }
  if (isNaN(data.lengthData)) {
    alert("Please input length");
    isValidated = false;
  }

  for (let i = 0; i < petArr.length; i++) {
    if (data.id === petArr[i].id) {
      alert("ID must be unique!");
      isValidated = false;
      break;
    }
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
} // như Asm 1

// RENDER
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  petArr.forEach(function (petItem) {
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
      petItem.vaccinated === true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td><i class="bi ${
      petItem.dewormed === true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td><i class="bi ${
      petItem.sterilized === true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td>${petItem.date}</td>
    <td>
      <button onclick="deletePet('${
        petItem.id
      }')" type="button" class="btn btn-danger">Delete</button>
    </td>
    `;
    tableBodyEl.appendChild(row);
  });
} // như Asm 1

// RENDER BREED
typeInput.addEventListener("change", renderBreed);
function renderBreed() {
  // Khi Select Type thay đổi (change) thì default trạng thái Select Breed
  breedInput.innerHTML = "<option>Select Breed</option>";
  if (typeInput.value === "Dog") {
    //  Select Type = Dog thì data mẫu của BreedArr filter ra breed cùng thuộc Dog, hiện ra khi Select Breed
    breedArr
      .filter((breedItem) => breedItem.type === "Dog")
      .forEach(function (breedItem) {
        const option = document.createElement("option");
        option.innerHTML = `${breedItem.breed}`;
        breedInput.appendChild(option);
      });
  } else if (typeInput.value === "Cat") {
    // tương tự với Cat
    breedArr
      .filter((breedItem) => breedItem.type === "Cat")
      .forEach(function (breedItem) {
        const option = document.createElement("option");
        option.innerHTML = `${breedItem.breed}`;
        breedInput.appendChild(option);
      });
  }
}

// CLEAR FORM  sau khi render
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  lengthInput.value = "";
  weightInput.value = "";
  colorInput.value = "#000";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
} // như Asm 1

// DELETE & UPDATE LOCAL STORAGE
function deletePet(petItemId) {
  const isDeleted = confirm("Are you sure?");
  if (isDeleted) {
    for (let i = 0; i < petArr.length; i++) {
      if (petItemId === petArr[i].id) {
        petArr.splice(i, 1);
        // Thêm saveToStorage để update lại sau khi xoá
        saveToStorage("petArr", petArr);
        renderTableData(petArr);
      }
    }
  }
  renderTableData(petArr);
}

// HEALTHY PET
let healthyCheck = true;
healthyBtn.addEventListener("click", function () {
  if (healthyCheck === true) {
    const healthyPetArr = [];

    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].vaccinated && petArr[i].sterilized && petArr[i].dewormed) {
        healthyPetArr.push(petArr[i]);
      }
    }

    renderTableData(healthyPetArr);
    healthyBtn.textContent = "Show All Pet";
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    healthyBtn.textContent = "Show Healthy Pet";
    healthyCheck = true;
  }
}); // như Asm 1

////////////////////////////////////////////////////////////////
/* 
Cấu trúc các file JS thường theo trình tự: 
1. Setup inputs & buttons 
2. Render data mẫu từ storage.js 
3. Sidebar animation
4. Submit/Find button
5. Function liên quan:
  + Validate
  + Render, Render Breed
  + Clear form sau khi render 
6. Delete/Edit button 
7. Healthy pet button 
*/
