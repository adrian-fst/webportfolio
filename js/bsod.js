window.addEventListener("DOMContentLoaded", (event) => {
	let percentageElement = document.getElementById("percentage");
	let percentage = 0;

	const process = () => {
		percentage += parseInt(Math.random() * 10);
		if (percentage > 69) {
			percentage = 69;
		}
		percentageElement.innerText = percentage;
		processInterval();
	};

	const processInterval = () => {
		setTimeout(process, Math.random() * (1000 - 500) + 500);
	};

	const hasCookie = () => {
		return new Promise((resolve, reject) => {
			let ret = false;
			let cookiePresent = document.cookie;
			if (cookiePresent != null || cookiePresent != "") {
				ret = true;
			}
			resolve(ret);
		});
	};

	const cookieMonster = () => {
		document.cookie = "";
	};

	const conditionalMsg = async () => {
		const cond = await hasCookie();

		if (cond) {
			document.getElementById("main").innerText = "WIP_ERROR_MESSAGE_";
			document.getElementById("stopText").innerText = "NVR_GNN4_G1V_UAT_UP";
			cookieMonster();
		}
	};

	const mainLoad = () => {
		try {
			processInterval();
			conditionalMsg();
		} catch (ex) {
			console.error(ex);
		}
	};

	/* MAIN FUNCTION LOAD */
	mainLoad();
});
