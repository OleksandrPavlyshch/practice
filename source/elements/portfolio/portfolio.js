'use strict';
(function () {
	// initialize isotope
	var $container = $('.portfolio_container');
	$container.isotope({
		filter: '*',
	});
	
	$('.portfolio_filter a').click(function(e){
		e.preventDefault();
		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
	
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
	});

})();
