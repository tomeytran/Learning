"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");

const apiKey = "94f0f123b45ac67e5b5f48d4f77e5d33";

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let inputVal = input.value;

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const { main, name, sys, weather } = data;
			const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

			const html = `
      <li class="city">
        <h1 class="city-name">${data.name} <sup>${sys.country}</sup></h1>
        <p class="city-temp">${main.temp.toFixed(0)}°C</p>
        <img class="city-icon" src="${icon}" />
        <figcaption>${weather[0].description}</figcaption>
      </li>`;

			list.insertAdjacentHTML("beforeend", html);
			console.log(icon);
		})
		.catch(() => {
			msg.textContent = "Please search for a valid city";
		});

	msg.textContent = "";
	form.reset();
	input.focus();
});
