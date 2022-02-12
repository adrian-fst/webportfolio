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

	updateYears();

	setTimeout(() => {
		document.getElementById("closeAlert").click();
	}, 4000);
});
