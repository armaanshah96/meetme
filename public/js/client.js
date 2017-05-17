//<!--
//            <div id="times">
//                <h4>Enter Times of Interest</h4>
//                <div>
//                    <input id=startTime type="text" placeholder="StartTime" >
//                    <select class=ampm>
//                      <option value="am">AM</option>
//                      <option value="pm">PM</option>
//                    </select>
//                </div>
//                <div>
//                    <input id=endTime type="text" placeholder="EndTime" >
//                    <select class=ampm>
//                      <option value="am">AM</option>
//                      <option value="pm">PM</option>
//                    </select>
//                </div>
//            </div>
//            <div id="numPeople">
//                <p>
//                    Number of people
//                    <input type="text">
//                </p>
//                
//            </div>
//            <div id="create">
//                <input type="button" value="Preview" id="preview">
//                <input type="submit" value="Create" id="create">
//            </div>
//        </div>
//-->


//var startDate;
//var endDate;
//
//var startTime = "09:00:00";
//var endTime = "21:00:00";
//
//var renderCal = function(timespan) {
//    $('#calendar').fullCalendar( {
//        start: '2017-06-01',
//        end: '2017-06-08',
//        minTime: startTime,
//        maxTime: endTime,
//        views: {
//            customWeek: {
//                type: 'agenda',
//                duration: { days: timespan },
//            }
//        },
//        defaultView:'customWeek'
//    });
//    $('#calendar').fullCalendar('gotoDate', startDate);
//
//}
//
//var calculateCal = function() {
//    console.log(endDate);
//    console.log(startDate);
//    var timespan = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24);
//    console.log(timespan);
//    renderCal(Math.ceil(timespan));
//}
//
//var selectEndDate = function(d2) {
//    endDate = d2;
//    console.log(endDate);
//    calculateCal()
//}
//
//var selectStartDate = function(d1) {
//    startDate = d1;
//    console.log(startDate);
//}
//
//selectStartDate(new Date())
//selectEndDate(new Date(2017, 6, 24, 11, 33, 30));
//
//var selectEndTime = function(t2) {
//    endTime = t2;
//}
//
//var selectStartTime = function(t1) {
//    startTime = t1;
//}
//document.getElementsByClassName(names)
//var isMouseDown = false
//var changeBackground = function(date) {
//    if(isMouseDown) {    
//        if((' ' + date.className + ' ').indexOf(' highlighted ') > -1) {
//            date.className = 'date';
//        } else {
//            date.className += ' highlighted';
//        }
//    }
//}
//var dateClick = function(date) {
//    isMouseDown = true;
//    changeBackground(date);
//}
//// handle outside div mouse down -- natural motion
//document.body.onmousedown = function() {
//    isMouseDown = true;
//};
//document.body.onmouseup = function() {
//    isMouseDown = false;
//};
//
