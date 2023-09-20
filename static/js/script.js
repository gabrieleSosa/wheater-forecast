let resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", function () {
	location.reload();
});

let dataContainer = document.querySelectorAll('.data-container')

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
			

			for (let i = 0; i < 9; i++) {
				let timeElement = document.querySelectorAll("span.time");
				timeElement[i].innerHTML = `${data.hourly.time[i]}`

				let temperatureElement = document.querySelectorAll("span.temp")
				temperatureElement[i].innerHTML = `${data.hourly.temperature_2m[i]}`;
			}

			for (let i = 0; i < dataContainer.length; i++) {

				dataContainer[i].classList.add('border-2')
			}
		});
});
