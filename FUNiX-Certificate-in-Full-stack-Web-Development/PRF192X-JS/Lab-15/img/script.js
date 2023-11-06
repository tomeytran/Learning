"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// LAB 15.1
const imgContainer = document.querySelector(".images");
const wait = function (sec) {
	return new Promise(function (resolve) {
		setTimeout(resolve, sec * 1000);
	});
};
const createImage = function (imgPath) {
	return new Promise(function (resolve, reject) {
		const img = document.createElement("img");
		img.src = imgPath;
		img.addEventListener("load", function () {
			imgContainer.append(img);
			resolve(img);
		});
		img.addEventListener("error", function () {
			reject(new Error("Image not found"));
		});
	});
};
// let currentImg;
// let lastImg;
// createImage("img/img-1.jpg")
// 	.then((img) => {
// 		currentImg = img;
// 		console.log("Image 1 is rendered");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 		return createImage("img/img-2.jpg");
// 	})
// 	.then((img) => {
// 		currentImg = img;
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 		return createImage("img/img-3.jpg");
// 	})
// 	.catch((err) => console.error(err));

// LAB 15.2
// PART 1
const loadNPause = async function () {
	try {
		// Load image 1
		let img = await createImage("img/img-1.jpg");
		console.log("Image 1 loaded");
		await wait(2);
		img.style.display = "none";

		// Load image 2
		img = await createImage("img/img-2.jpg");
		console.log("Image 2 loaded");
		await wait(2);
		img.style.display = "none";
	} catch (err) {
		console.error(err);
	}
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
	try {
		const imgs = imgArr.map(async (img) => await createImage(img));
		const imgsEl = await Promise.all(imgs);
		console.log(imgsEl);
		imgsEl.forEach((img) => img.classList.add("parallel"));
	} catch (err) {
		console.error(err);
	}
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
