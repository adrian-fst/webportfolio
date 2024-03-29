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

	const initAlertFunction = (isDebug) => {
		try {
			return new Promise((resolve, reject) => {
				const alertList = document.querySelectorAll(".alert");
				alertList.forEach(function (alert) {
					new bootstrap.Alert(alert);
				});

				// console.log(uAgentHandler());
				const agentObject = uAgentHandler();
				let alertStr = ``;
				if (!isDebug) {
					alertStr =
						!agentObject.operatingSystem && !agentObject.userAgent
							? "Welcome to my web portfolio, desktop viewing is recommended."
							: `You are currently browsing using <strong>${
									agentObject.userAgent ?? "Mobile"
							  }</strong> on <strong>${
									agentObject.operatingSystem ?? "Mobile OS"
							  }</strong>, this page is best viewed via a desktop browser. 
					`;
				} else {
					alertStr = "Page is set to Work in Progress mode, hence the blur :))";
				}

				document.getElementById("alertContent").innerHTML = alertStr;
				let initAlert = document.getElementById("alert-initial");
				let bsAlert = new bootstrap.Alert(initAlert);
				if (!isDebug) {
					setTimeout(() => {
						bsAlert.close();
					}, 4000);
				}
				resolve();
			});
		} catch (ex) {
			console.error(ex);
		}
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

	const typeMyName = (str) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let string = "";
				const textContainer = document.getElementById("text-container");
				(function iterator(index) {
					if (index < str.length) {
						string += str.charAt(index);
						textContainer.innerHTML += str.charAt(index);
						setTimeout(function () {
							iterator(++index);
						}, 105);
					}
				})(0);
			}, 600);
			resolve();
		});
	};

	const loaderHandler = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				document.getElementById("loader").classList.add("fadeout");
				resolve();
			}, 600);
		});
	};

	const callAsyncFuncs = async () => {
		await loaderHandler();
		await initAlertFunction(true);
		await typeMyName("Adrian Enciso");
	};

	const disableContextMenu = (isOff) => {
		if (isOff) {
			document.addEventListener("contextmenu", (event) => event.preventDefault());
		}
	};

	const forcedExceptionKuno = () => {
		const hrefLink = document.getElementById("forceExec");
		hrefLink.addEventListener("click", (e) => {
			document.cookie = "not_null";
		});
	};

	const addCogs = () => {
		const elements = document.querySelectorAll("section.blur");
		//console.log(elements.length);
		const container = document.createElement("div");

		container.setAttribute("class", "wip-loader");

		container.innerText =
			'<div class="cog-loading"><div class="cog-loading-animation"><span class="glyphicon glyphicon-cog cog-loading-big"></span><span class="glyphicon glyphicon-cog cog-loading-small"></span></div><p class="cog-loading-text">Work in Progress..</p></div>';
		console.log(container);
		elements.forEach((element, i) => {
			console.log("test");
			element.append(container);
		});
	};

	const mainLoad = () => {
		try {
			callAsyncFuncs();
			updateYears();
			disableContextMenu(true);
			forcedExceptionKuno();
			//addCogs();
		} catch (ex) {
			console.error(ex);
		}
	};

	/* MAIN FUNCTION LOAD */
	mainLoad();
});
