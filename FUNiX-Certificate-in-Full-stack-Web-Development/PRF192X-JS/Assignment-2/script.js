// "use strict";

// SIDEBAR ANIMATION
const sidebar = document.getElementById("sidebar");
sidebar.onclick = function () {
  sidebar.classList.toggle("active");
};

// LOCAL STORAGE

// const submitBtn = document.getElementById("submit-btn");
// submitBtn.addEventListener("click", (e) => {
//   const petArr = JSON.parse(getFromStorage("petArr")) ?? [];
//   e.prevenDefault();
//   const inputId = document.getElementById("input-id");
//   const inputName = document.getElementById("input-name");
//   const inputAge = document.getElementById("input-age");
//   const inputType = document.getElementById("input-type");
//   const inputWeight = document.getElementById("input-weight");
//   const inputLength = document.getElementById("input-length");
//   const inputColor = document.getElementById("input-color-1");
//   const inputBreed = document.getElementById("input-breed");
//   const inputVaccinated = document.getElementById("input-vaccinated");
//   const inputDewormed = document.getElementById("input-dewormed");
//   const inputSterilized = document.getElementById("input-sterilized");

//   petArr.push({
//     inputId,
//     inputName,
//     inputAge,
//     inputType,
//     inputWeight,
//     inputLength,
//     inputColor,
//     inputBreed,
//     inputVaccinated,
//     inputDewormed,
//     inputSterilized,
//   });

//   saveToStorage("petArr", JSON.stringify(petArr));
// });

///////////////////////////////////////////////////////

("use strict");

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

const petArr = [];
const tableBodyEl = document.getElementById("tbody");
const deleteBtn = document.querySelectorAll("btn-danger");
/* SUBMIT */
const submitBtn = document.getElementById("submit-btn");
/* SHOW PET */
let healthyCheck = true;
const healthyBtn = document.getElementById("healthy-btn");
/* CALCULATE BMI */
// const bmiBtn = document.getElementById("bmi-btn");

/* SUBMIT */
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
    // bmi: "?",
    date: new Date().toLocaleDateString("en-GB"),
  };

  const validate = validateData(data);
  if (validate) {
    petArr.push(data);
    renderTableData(petArr);
    clearInput();
  }
});

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key, defaultVal) {
  return localStorage.getItem(key) ?? defaultVal;
}

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
}

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${petArr[i].id}</th>
      <td>${petArr[i].name}</td>
      <td>${petArr[i].age}</td>
      <td>${petArr[i].type}</td>
      <td>${petArr[i].weight}</td>
      <td>${petArr[i].lengthData}</td>
      <td>${petArr[i].breed}</td>
      <td>
        <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
      </td>
      <td><i class="bi ${
        petArr[i].vaccinated === true
          ? "bi-check-circle-fill"
          : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petArr[i].dewormed === true
          ? "bi-check-circle-fill"
          : "bi-x-circle-fill"
      }"></i></td>
      <td><i class="bi ${
        petArr[i].sterilized === true
          ? "bi-check-circle-fill"
          : "bi-x-circle-fill"
      }"></i></td>      
      <td>${petArr[i].date}</td>
      <td>
        <button onclick="deletePet('${
          petArr[i].id
        }')" type="button" class="btn btn-danger">Delete</button>
      </td>
      `;
    tableBodyEl.appendChild(row);
  }
}
// Bỏ tag tính BMI: <td>${petArr[i].bmi}</td>

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
}

function deletePet(petId) {
  const isDeleted = confirm("Are you sure?");
  if (isDeleted) {
    for (let i = 0; i < petArr.length; i++) {
      if (petId === petArr[i].id) {
        // document.getElementById("tbody").deleteRow(i);
        petArr.splice(i, 1);
        renderTableData(petArr);
      }
    }
  }
  renderTableData(petArr);
}

/* SHOW PET */
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
});

/* CALCULATE BMI */
// bmiBtn.addEventListener("click", function () {
//   for (let i = 0; i < petArr.length; i++) {
//     petArr[i].bmi =
//       petArr[i].type === "Dog"
//         ? ((petArr[i].weight * 703) / petArr[i].lengthData ** 2).toFixed(2)
//         : ((petArr[i].weight * 886) / petArr[i].lengthData ** 2).toFixed(2);
//   }
//   renderTableData(petArr);
// });
