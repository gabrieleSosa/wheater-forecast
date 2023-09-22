let resetButton = document.querySelector(".reset-button");
let canvas = document.querySelector("canvas");

resetButton.addEventListener("click", function () {
	location.reload();
});

let dataContainer = document.querySelectorAll(".data-container");

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	let latitudine = document.querySelector("#lat").value;
	let longitudine = document.querySelector("#lng").value;

	let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

	fetch(url)
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			let timeArr = [];
			let tempeArr = [];
			let humidityArr = [];
			let windspeedArr = [];

			for (let i = 0; i < 30; i++) {
				timeArr[i] = data.hourly.time[i];
				tempeArr[i] = data.hourly.temperature_2m[i];
				humidityArr[i] = data.hourly.relativehumidity_2m[i];
				windspeedArr[i] = data.hourly.windspeed_10m[i];
			}

			createChart(timeArr, tempeArr, humidityArr, windspeedArr);

			
			canvas.style.marginTop = "100px";
			canvas.style.marginBotton = "100px";
			canvas.style.width = "500px";
			canvas.style.height = "350px";
			canvas.style.marginLeft = "auto";
			canvas.style.marginRight = "auto";
			canvas.scrollIntoView({ behavior: "smooth" });
		});
});

function createChart(tempo, temperatura, umidita, velocitaVento) {
	let config = {
		type: "line",
		data: {
			labels: tempo,
			datasets: [
				{
					label: "Temperatura media",
					data: temperatura,
					fill: false,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.5,
					yAxisID: "y",
				},
				{
					label: "Umidità media",
					data: umidita,
					fill: false,
					borderColor: "rgb(255, 0, 0)",
					tension: 0.5,
					yAxisID: "y1",
				},
				{
					label: "Umidità media",
					data: velocitaVento,
					fill: false,
					borderColor: "rgb(100, 255, 100)",
					tension: 0.5,
					yAxisID: "y2",
				},
			],
		},
		scales: {
			y: {
				type: "linear",
				position: "left",
			},
			y1: {
				type: "linear",
				position: "left",
			},
			y2: {
				type: "linear",
				position: "left",
			},
		},
	};

	const myChart = new Chart(canvas, config);
}
