'use strict';
(function () {
	var $testimonialsSlider = $(".testimonials_slider");

	$testimonialsSlider.owlCarousel({
		items: 1
		, center: true
		, loop: true
		, autoplay: true
		, dotsClass: "testimonials_slider-paginator"
		, dotClass: "testimonials_slider-paginator-item"
	});
})();