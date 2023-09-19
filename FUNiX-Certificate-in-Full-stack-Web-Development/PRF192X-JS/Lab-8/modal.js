"use strict";
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Open Modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", showModal());
}

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("Open button clicked");
}

// Close Modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log("Close button clicked");
}

// document.addEventListener("keydown", function (e) {
//   // bấm keydown toàn document cùng chạy function và log tên key bấm
//   // ngoài ra còn keyup (khi nhấc tay khỏi key), keypress khi giữ
//   console.log(e.key);
//   if (e.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// }); // khi bấm key trúng ESc, xét thêm nếu KO chứa class "hidden" trong class "modal" thì chạy funciton closeModal
