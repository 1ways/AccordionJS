const accordionArrows = document.querySelectorAll(".accordion__arrow"),
	accordionBodies = document.querySelectorAll(".accordion__body");

accordionArrows.forEach((accordionArrowsElem, index) => {
	accordionArrowsElem.addEventListener("click", e => {
		if (accordionArrowsElem.classList.contains("active")) {
			e.target
				.closest(".accordion__item")
				.querySelector(".accordion__body").style.maxHeight = "0px";
			accordionArrowsElem.classList.remove("active");
		} else {
			accordionArrows.forEach(accordionArrow => {
				accordionArrow.classList.remove("active");
			});
			accordionBodies.forEach(accordionBody => {
				accordionBody.classList.remove("show");
			});

			accordionArrowsElem.classList.add("active");
			accordionBodies.forEach(accordionBodiesElem => {
				accordionBodiesElem.style.maxHeight = "0px";
				const accordionBodyHeight = e.target
					.closest(".accordion__item")
					.querySelector(".accordion__body > *").clientHeight;
				e.target
					.closest(".accordion__item")
					.querySelector(".accordion__body").style.maxHeight =
					accordionBodyHeight + "px";
			});
		}
	});
});
