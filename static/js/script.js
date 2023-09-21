let resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", function () {
	location.reload();
});

let dataContainer = document.querySelectorAll(".data-container");

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();
	let latitudine = document.querySelector("#lat").value;
	let longitudine = document.querySelector("#lng").value;

	console.log(latitudine, longitudine);

	let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m`;

	console.log(url);

	fetch(url)
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			console.log(data.hourly.time);
			console.log(data.hourly.temperature_2m);

			//dati dell'API
		});
});

