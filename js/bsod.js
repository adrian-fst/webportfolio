var percentageElement = document.getElementById("percentage");
var percentage = 0;

function process() {
	percentage += parseInt(Math.random() * 10);
	if (percentage > 69) {
		percentage = 69;
	}
	percentageElement.innerText = percentage;
	processInterval();
}

function processInterval() {
	setTimeout(process, Math.random() * (1000 - 500) + 500);
}
processInterval();
