var now = "2019/10/10 12:34:56";


$('#clock').countdown(now, function(event) {
    var format = '%H:%M:%S';
    if (event.offset.totalDays > 0) {
        if (event.offset.totalDays > 10) {
            format = '%-d: ' + format;
        } else {
            format = '0%-d: ' + format;
        }

    }

    console.log(event.strftime(format));
})