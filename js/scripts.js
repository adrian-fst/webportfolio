window.addEventListener("DOMContentLoaded", (event) => {
	// Activate Bootstrap scrollspy on the main nav element
	const sideNav = document.body.querySelector("#sideNav");
	if (sideNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: "#sideNav",
			offset: 74,
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector(".navbar-toggler");
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll("#navbarResponsive .nav-link")
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener("click", () => {
			if (window.getComputedStyle(navbarToggler).display !== "none") {
				navbarToggler.click();
			}
		});
	});

	const worksCarousel = document.querySelector("#works_carousel");
	const video1 = document.querySelector("#compiled");

	worksCarousel.addEventListener("slide.bs.carousel", (event) => {
		event.to == 1 ? video1.play() : video1.pause();
	});

	const tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	const updateYears = () => {
		const fieldHolder = document.getElementById("dynamicYear");
		let startedIn = 2007;
		const dateToday = new Date();

		fieldHolder.innerText = `${dateToday.getFullYear() - startedIn}`;
	};

	const initAlertFunction = () => {
		const alertList = document.querySelectorAll(".alert");
		alertList.forEach(function (alert) {
			new bootstrap.Alert(alert);
		});

		// console.log(uAgentHandler());
		const agentObject = uAgentHandler();
		let alertStr = ``;
		alertStr =
			!agentObject.operatingSystem && !agentObject.userAgent
				? "Welcome to my web portfolio, desktop viewing is recommended."
				: `You are currently browsing using <strong>${
						agentObject.userAgent ?? "Mobile"
				  }</strong> on <strong>${
						agentObject.operatingSystem ?? "Mobile OS"
				  }</strong>, this page is best viewed via a desktop browser. 
				`;

		document.getElementById("alertContent").innerHTML = alertStr;
		let initAlert = document.getElementById("alert-initial");
		let bsAlert = new bootstrap.Alert(initAlert);
		setTimeout(() => {
			bsAlert.close();
		}, 4000);
	};

	const uAgentHandler = () => {
		try {
			const uA = new MobileDetect(window.navigator.userAgent);
			return {
				userAgent: uA.userAgent() ?? null,
				operatingSystem: uA.os() ?? null,
			};
		} catch (ex) {
			console.error(ex);
			return null;
		}
	};

	const mainLoad = () => {
		try {
			initAlertFunction();
			updateYears();
		} catch (ex) {
			console.error(ex);
		}
	};

	/* MAIN FUNCTION LOAD */
	mainLoad();
});
