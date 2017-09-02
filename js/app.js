$(document).foundation()

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: '733530201410-0ef7ks1jnad8jl2cnp3qnegcr2ilbq42.apps.googleusercontent.com',
        events: {
            googleCalendarId: '1rbbvflkj20qog42qoh6re92a8@group.calendar.google.com',
            className: 'gcal-event' // an option!
        }
        
    });
});
