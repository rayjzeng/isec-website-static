//// Detect if the frame is being viewed using an iPhone on a non-responsive (fixed width) page.

var fixed_width = false;

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {

	if(window.orientation == 0) {
		if($(window).width() >  414) {
			fixed_width = true;
		}
	} else {
		if($(window).width() >  736) {
			fixed_width = true;
		}
	}

}

// Helper function

function hasVisitedSetting() {

	// Safari has allow from websites I visit setting
	// We want to give browsers with this setting a chance to whitelist Mogiv
	// Therefore we make two passes of the AJAX set/get

	// As of 02/2016, adding Firefox to this function causes users with third-party cookies entirely disabled to get caught in an infinite loop
	// Unfortunately, this forces users with Firefox's from visited setting to go to mogiv.com

	return Boolean(safari);
}

//// Now, let's get started.

if(!Modernizr.cookies) {

	// if cookies are completely disabled, this makes the page display nicer with the global cookie message, this condition will also apply to Chrome with third-party cookies disabled

	$('#give').fadeOut('fast', function() {$('#give-nocookies').fadeIn('fast');});

} else if(fixed_width) {

	// this page is being view on an iPhone on a non-responsive site

	$('#give').fadeOut('fast', function() {$('#give-fixed').fadeIn('fast');});

} else if ((! document.cookie) || (document.cookie == '')) {

	// third-party cookies are disabled

	$.ajax('/cookies/set.php', { data: 'num=1' } ).done(function() {

		$.ajax('/cookies/get.php').done(function(data) {
			if (data.cookies != '1') {
				if(hasVisitedSetting() && data.cookies != '0') { // cookie still being set to 0 would indicate the visited setting is not enabled, the block all third-party setting is
					$('#give').fadeOut('fast', function() {$('#give-visitedhack').fadeIn('fast');});
				} else {
					$('#give').fadeOut('fast', function() {$('#give-thirdpartycookies').fadeIn('fast');});
				}
			}
		});

	});

} else if(hasVisitedSetting()) {

	// 2nd pass for browsers with a visited setting

	$.ajax('/cookies/set.php', { data: 'num=2' } ).done(function() {

		$.ajax('/cookies/get.php').done(function(data) {
			if (data.cookies != '2') {
				$('#give').fadeOut('fast', function() {$('#give-thirdpartycookies').fadeIn('fast');});
			}
		});

	});

}
