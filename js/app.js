$(document).foundation()

$(document).ready(function() {
	if ($('body').hasClass('calendar')) {
	    $('#calendar').fullCalendar({
	        googleCalendarApiKey: 'AIzaSyBTWyqDSnCYLq13LDKyk0D7zCLlYEJw-vA',
	        events: {
	            googleCalendarId: '1rbbvflkj20qog42qoh6re92a8@group.calendar.google.com'
	        }
	        
	    });
	}
	// Mobile Nav
	$('#menuToggle').click(function(event) {
	    event.preventDefault();
		$('body').toggleClass('main-nav-open');
		$(this).toggleClass('open');
	});

});
