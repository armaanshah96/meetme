var startDate;
var endDate;

var startTime = "09:00:00";
var endTime = "21:00:00";

var renderCal = function(timespan) {
    $('#calendar').fullCalendar( {
        start: '2017-06-01',
        end: '2017-06-08',
        minTime: startTime,
        maxTime: endTime,
        views: {
            customWeek: {
                type: 'agenda',
                duration: { days: timespan },
            }
        },
        defaultView:'customWeek'
    });
    $('#calendar').fullCalendar('gotoDate', startDate);

}

var calculateCal = function() {
    console.log(endDate);
    console.log(startDate);
    var timespan = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24);
    console.log(timespan);
    renderCal(Math.ceil(timespan));
}

var selectEndDate = function(d2) {
    endDate = d2;
    console.log(endDate);
    calculateCal()
}

var selectStartDate = function(d1) {
    startDate = d1;
    console.log(startDate);
}

selectStartDate(new Date())
selectEndDate(new Date(2017, 6, 24, 11, 33, 30));

var selectEndTime = function(t2) {
    endTime = t2;
}

var selectStartTime = function(t1) {
    startTime = t1;
}
