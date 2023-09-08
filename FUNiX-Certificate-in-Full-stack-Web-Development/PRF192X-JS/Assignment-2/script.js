// "use strict";

const sidebar = document.getElementById("sidebar");
sidebar.onclick = function () {
  sidebar.classList.toggle("active");
};
const obj = {
  firstName: "Tom",
  lastName: "Tran",
  age: 20,
};
function getThis() {
  return this;
}
console.log(getThis()); // use strict = undefined, else = window

const getThis2 = () => {
  return this;
};
console.log(getThis2()); // use strict = window, else = window
