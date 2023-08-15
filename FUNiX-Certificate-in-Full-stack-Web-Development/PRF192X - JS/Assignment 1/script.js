"use strict";

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

// 8. Hiển thị các thú cưng khỏe mạnh
const healthyPetArr = [];
const healthyBtn = document.getElementById("healthy-btn");
let healthyCheck = false;

// 4a. Tạo array để lưu info
const petArr = [];
const tableBodyEl = document.getElementById("tbody");
const deleteBtn = document.querySelectorAll("btn-danger");

// 1. Bắt sự kiện Click vào nút "Submit"
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function (e) {
  // 2. Lấy được dữ liệu từ các Input Form
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: Number(weightInput.value),
    lengthData: Number(lengthInput.value), // lengthData tránh trùng length funciton
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date().toLocaleDateString("en-GB"),
  };

  // 3. Validate dữ liệu hợp lệ
  for (let i = 0; i < petArr.length; i++) {
    if (data.id === petArr[i].id) {
      alert("ID must be unique!");
    }
  }
  if (
    data.id == "" ||
    data.name == "" ||
    !data.age ||
    !data.weight ||
    !data.lengthData
  ) {
    alert("Fill in the blank");
  } else if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
  } else if (data.weight < 1 || data.weight > 15) {
    alert("Weight must be between 1 and 15!");
  } else if (data.lengthData < 1 || data.lengthData > 100) {
    alert("Length must be between 1 and 100!");
  } else if (data.type == "Select Type") {
    alert("Please select Type!");
  } else if (data.breed == "Select Breed") {
    alert("Please select Breed!");
  } else {
    // 4b. Đẩy info vào array
    petArr.push(data);
    console.log(petArr); // Test
    renderTableData(petArr);
    clearInput();
  }
});

// 5. Hiển thị danh sách thú cưng
function renderTableData(petArr) {
  /* Xóa nội dung hiện có của bảng */
  tableBodyEl.innerHTML = "";
  /* Tạo hàng mới cho input */
  for (let i = 0; i < petArr.length; i++) {
    let row = document.createElement("tr");
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
      petArr[i].dewormed === true ? "bi-check-circle-fill" : "bi-x-circle-fill"
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

// 6. Reset các dữ liệu vừa nhập lên Form
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

// 7. Xóa thú cưng
function deletePet(petId) {
  confirm("Are you sure?");
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].id === petId) {
        document.getElementById("tbody").deleteRow(i);
      }
    }
  }
  renderTableData();
}

// 8. Hiển thị các thú cưng khỏe mạnh

for (let i = 0; i < petArr.length; i++) {
  function checkHealthy(petArr) {
    return petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized;
  }

  healthyBtn.addEventListener("click", function () {
    // petTable.innerHTML = "";
    if (healthyCheck) {
      healthyBtn.textContent = "Show Healthy Pet";
      renderTableData(petArr);
    } else {
      healthyBtn.textContent = "Show All Pet";
      healthyPetArr = petArr.filter();
      renderTableData(healthyPetArr);
    }
    healthyCheck = !healthyCheck;
  });
}
