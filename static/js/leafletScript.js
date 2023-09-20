function createMap(lat, lng) {
	let latinput = document.querySelector("#lat");
	let lnginput = document.querySelector("#lng");

	var map = L.map("map").setView([lat, lng], 13);

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
}

navigator.geolocation.getCurrentPosition(
	function (event) {
		console.log("l'utente ha accettato")
		createMap(event.coords.latitude, event.coords.longitude)
	},

	function (event) {
		console.log("l'utente non ha accettato")
		createMap(51, -0.09)
	}
)