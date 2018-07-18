/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function() {
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();


jQuery(document).ready(function(){
	jQuery(".hm-search-button-icon").click(function() {
		jQuery(".hm-search-box-container").toggle('fast');
		jQuery(this).toggleClass("hm-search-close");
	});
});

jQuery(document).ready(function(){
	jQuery('.image-link').magnificPopup({
		type: 'image'
	});
});

/* Featured Slider */

jQuery(window).load(function() {
	// The slider being synced must be initialized first
	jQuery('#hm-carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: true,
		itemWidth: 135,
		itemMargin: 10,
		asNavFor: '#hm-slider'
	});

	jQuery('#hm-slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: true,
		sync: "#hm-carousel"
	});
});


/* Link the whole slide to the link*/
(function($) {
	$('div.hm-slider-container').on( 'click', function(e) {
		if ( $(e.target).is('span.cat-links') ) { 
			return false;
		} else {
			window.location = $(this).data('loc');
		}
	});
})(jQuery);

/* Tabs Widget */
jQuery(document).ready( function() {
	if ( jQuery.isFunction(jQuery.fn.tabs) ) {
		jQuery( ".hm-tabs-wdt" ).tabs();
	}
});