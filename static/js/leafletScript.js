let latinput = document.querySelector("#lat");
let lnginput = document.querySelector("#lng");

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var popup = L.popup();
var marker = L.marker();

function onMapClick(e) {
	map.removeLayer(marker);
	marker = L.marker(e.latlng).addTo(map);

	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);

	let lat = e.latlng.lat.toString();
	let lng = e.latlng.lng.toString();

	latinput.value = lat;
	lnginput.value = lng;
}

map.on("click", onMapClick);

//richiedere i dati all'API, passando i valori di latitudine e longitudine al file script.js con la memoria interna