"use strict";

// SETUP - MOCK DATA IN LOCAL STORAGE
const data1 = {
  id: "P001",
  name: "Tom",
  age: 12,
  type: "Dog",
  weight: 12,
  lengthData: 40,
  color: "#000000",
  breed: "Mixed Breed",
  vaccinated: false,
  dewormed: true,
  sterilized: true,
  date: new Date().toLocaleDateString("en-GB"),
};

const data2 = {
  id: "P002",
  name: "Johnny",
  age: 12,
  type: "Cat",
  weight: 11,
  lengthData: 40,
  color: "#000000",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: false,
  date: new Date().toLocaleDateString("en-GB"),
};

const breed1 = {
  breed: "Meo muop",
  type: "Cat",
};

const breed2 = {
  breed: "Mixed Breed",
  type: "Dog",
};

const breed3 = {
  breed: "Tabby",
  type: "Cat",
};

// Chỉ khi localStorage không còn gì, reload sẽ hiện Mock Data
if (!getFromStorage("petArr")) {
  saveToStorage("petArr", [data1, data2]);
}
const petArr = getFromStorage("petArr");

if (!getFromStorage("breedArr")) {
  saveToStorage("breedArr", [breed1, breed2, breed3]);
}
const breedArr = getFromStorage("breedArr");

// LOCAL STORAGE FUNCTIONS
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
