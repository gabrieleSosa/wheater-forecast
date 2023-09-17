function createRaindrop() {
	const raindrop = document.createElement("section");
	raindrop.className = "raindrop";
	raindrop.style.left = Math.random() * window.innerWidth + "px";
	document.body.appendChild(raindrop);

	setTimeout(() => {
		raindrop.remove();
	}, 4000); // Rimuovi la goccia dopo 4 secondi
}

setInterval(createRaindrop, 350);
