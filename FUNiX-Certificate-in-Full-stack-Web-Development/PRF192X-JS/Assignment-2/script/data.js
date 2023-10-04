"use strict";

// SETUP
const fileInput = document.getElementById("input-file");
const importBtn = document.getElementById("import-btn");
const exportBtn = document.getElementById("export-btn");

// SIDEBAR ANIMATION
document.getElementById("sidebar-title").onclick = () =>
  sidebar.classList.toggle("active");

// EXPORT
exportBtn.addEventListener("click", function () {
  const blob = new Blob([JSON.stringify(getFromStorage("petArr"), null, 2)], {
    type: "application/json",
  });
  saveAs(blob, "petData.json");
});

// IMPORT
importBtn.addEventListener("click", importFile);
function importFile(e) {
  if (!fileInput.value.length) {
    alert("Please choose file to import!");
    return;
  } else {
    if (confirm("Are you sure want to import?")) {
      let reader = new FileReader();
      reader.readAsText(fileInput.files[0]);
      reader.onload = function xulyFile(e) {
        let contentJson = e.target.result;
        if (contentJson.trim().length === 0) return;

        let contentToObject = JSON.parse(contentJson);
        console.log("contentToObject", contentToObject);
        contentToObject.forEach((el, i) => {
          if (validateData(el)) {
            let index = petArr.findIndex((pet) => pet.id === el.id);
            if (index < 0) petArr.push(el);
            else petArr[index] = el;

            let indexBreed = breedArr.findIndex(
              (breed) => breed.breed === el.breed
            );
            if (indexBreed < 0) {
              breedArr.push({
                breed: el.breed,
                type: el.type,
              });
            }
          }
        });
        console.log("petArr", petArr);
        console.log("breedArr", breedArr);
        saveToStorage("petArr", petArr);
        saveToStorage("breedArr", breedArr);
      };
      alert("Import file successfully! Let's check out your homepage");
      window.location.href = "http://127.0.0.1:5500/index.html";
    }
  }
}

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
