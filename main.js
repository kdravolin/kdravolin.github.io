var text = "";
var oneKmTime = milliseconds(0, 6, 22);

function milliseconds(h, m, s) {
    return ((h * 60 * 60) + (m * 60) + s) * 1000;
}

function formatDate(date) {
    return formatTwoDigits(date.getHours()) + ":" + formatTwoDigits(date.getMinutes()) + ":" + formatTwoDigits(date.getSeconds());
}

function formatTwoDigits(n) {
    return n < 10 ? '0' + n : n;
}

function getStartDate() {
    var splitTime = document.getElementById("settime").value.split(":");
    var startDate = new Date();
    startDate.setHours(Number(splitTime[0]));
    startDate.setMinutes(Number(splitTime[1]));
    startDate.setSeconds(settime.length > 2 ? Number(splitTime[2]) : 0);
    return startDate;
}

function println(str) {
    text += "<br>" + str;
}

function getDateDiff(firstDate, secondDate) {
    return secondDate.getTime() - firstDate.getTime();
} 

function getKmDate(km, startDate) {
    return new Date(startDate.getTime() + oneKmTime * km);
}

function printTable(startDate) {
    println("");
    for (var i = 1; i <= 42; i++) {
        var date = getKmDate(i, startDate);
        var currentDate = new Date();

       // if (date.getTime() >= currentDate.getTime()) {
            println(i + " км\t" + formatDate(date));
        //}
    }
}

function onClick() {
    text = "";
    var startDate = getStartDate();
    var currentDate = new Date();
    var dateDiff = getDateDiff(startDate, currentDate);
    var km = dateDiff / oneKmTime;
    println("Пробежала (км): " + km);
    printTable(startDate);

    document.getElementById("content").innerHTML = text;
}
