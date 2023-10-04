"use strict";

// SETUP
const inputBreed = document.getElementById("input-breed");
const typeBreed = document.getElementById("breed-type");
const submitBtn = document.getElementById("submit-btn");
const tableBodyEl = document.getElementById("tbody");
const deleteBtn = document.querySelectorAll("btn-danger");

renderTableBreed(breedArr); // render trước data mẫu ở storage.js

// SIDEBAR ANIMATION
document.getElementById("sidebar-title").onclick = () =>
  sidebar.classList.toggle("active");

// SUBMIT & SAVE LOCAL STORAGE
submitBtn.addEventListener("click", function () {
  const data = {
    breed: inputBreed.value,
    type: typeBreed.value,
  };
  const validate = validateData(data);
  if (validate) {
    breedArr.push(data);
    saveToStorage("breedArr", breedArr);
    renderTableBreed(breedArr);
    clearBreed();
  }
});

// VALIDATE  trước khi render
function validateData(data) {
  let isValidated = true;
  if (data.breed == "") {
    alert("Please input Breed!");
    isValidated = false;
  }
  if (data.type == "Select Type") {
    alert("Please select Type!");
    isValidated = false;
  }
  return isValidated;
}

// RENDER
function renderTableBreed(breedArr) {
  tableBodyEl.innerHTML = "";
  breedArr.forEach(function (breedItem, i) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td scope="col">${i + 1}</td>
      <td>${breedItem.breed}</td>
      <td>${breedItem.type}</td>      
      <td>
        <button onclick="deleteBreed('${
          breedItem.breed
        }')" type="button" class="btn btn-danger">Delete</button>
      </td>
      `;
    tableBodyEl.appendChild(row);
  });
}

// CLEAR FORM  sau khi render
function clearBreed() {
  inputBreed.value = "";
  typeBreed.value = "Select Type";
}

// DELETE & UPDATE LOCAL STORAGE
function deleteBreed(breed) {
  const isDeleted = confirm("Are you sure?");
  if (isDeleted) {
    for (let i = 0; i < breedArr.length; i++) {
      if (breed === breedArr[i].breed) {
        // document.getElementById("tbody").deleteRow(i);
        breedArr.splice(i, 1);
        // removeStorage(savedArray[i]);
        saveToStorage("breedArr", breedArr);
        renderTableBreed(breedArr);
        break;
      }
    }
  }
  renderTableData(petArr);
}
