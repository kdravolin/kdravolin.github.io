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
        println(i + " км\t" + formatDate(getKmDate(i, startDate)));
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

// var splitTime = document.getElementById("settime").value.split(":");
// var startDate = new Date();
// startDate.setHours(Number(splitTime[0]));
// startDate.setMinutes(Number(splitTime[1]));
// startDate.setSeconds(Number(splitTime[2]));
// alert(startDate);

// var startTimeToday = milliseconds(Number(splitTime[0]), Number(splitTime[1]), Number(splitTime[2]));


// var schedule = {
//     milliseconds(0, 6, 22): 1,
//     milliseconds(0, 31, 50): 5,
//     milliseconds(1, 3, 40): 10,
//     milliseconds(1, 35, 30): 15,
//     milliseconds(2, 14, 19): 21.0975,
//     milliseconds(2, 39, 10): 25,
//     milliseconds(3, 11, 0): 30,
//     milliseconds(3, 42, 50): 35,
//     milliseconds(4, 14, 40): 40,
//     milliseconds(4, 29, 0): 42.195
// };

// var startTime = 

// var oneKmTime = milliseconds(0, 6, 22);
// var dateDiff = milliseconds(0, 6, 22);
// var currentDate = new Date();
// var date = new Date(currentDate.getTime() + dateDiff);
// var date = currentDate;
// document.getElementById("content").innerHTML = formatDate(date);