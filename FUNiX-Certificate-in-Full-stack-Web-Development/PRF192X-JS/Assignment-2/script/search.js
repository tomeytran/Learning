"use strict";
// SETUP
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const findBtn = document.getElementById("find-btn");
const tableBodyEl = document.getElementById("tbody");

renderTableData(petArr); // render sẵn data mẫu ở storage.js

// SIDEBAR ANIMATION
document.getElementById("sidebar-title").onclick = () =>
  sidebar.classList.toggle("active");

// FIND
findBtn.addEventListener("click", function () {
  // Cách 1
  let findPetArr = petArr;
  if (idInput.value) {
    findPetArr = findPetArr.filter((pet) => pet.id.includes(idInput.value));
  }
  if (nameInput.value) {
    findPetArr = findPetArr.filter((pet) => pet.name.includes(nameInput.value));
  }
  if (typeInput.value !== "Select Type") {
    findPetArr = findPetArr.filter((pet) => pet.type.includes(typeInput.value));
  }
  if (breedInput.value !== "Select Breed") {
    findPetArr = findPetArr.filter((pet) =>
      pet.breed.includes(breedInput.value)
    );
  }
  if (vaccinatedInput.checked === true) {
    findPetArr = findPetArr.filter((pet) => pet.vaccinated === true);
  }
  if (dewormedInput.checked === true) {
    findPetArr = findPetArr.filter((pet) => pet.dewormed === true);
  }
  if (sterilizedInput.checked === true) {
    findPetArr = findPetArr.filter((pet) => pet.sterilized === true);
  }
  renderTableData(findPetArr);
  // Cách 2 (chưa làm đc search kết hợp)
  // let findPetArr = petArr;
  // const result = [];
  // for (let i = 0; i < findPetArr.length; i++) {
  //   if (
  //     findPetArr[i].id.includes(idInput.value)
  //   ) {
  //     result.push(findPetArr[i]);
  //   }
  // }
  // console.log(result);
  // renderTableData(result);
});

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
      `;
    tableBodyEl.appendChild(row);
  });
}

// RENDER BREED
renderBreed();
function renderBreed() {
  breedArr.forEach(function (breedItem) {
    const option = document.createElement("option");
    option.innerHTML = `${breedItem.breed}`;
    breedInput.appendChild(option);
  });
}
