var week;
(function (week) {
    week[week["Monday"] = 0] = "Monday";
    week[week["Tuesdat"] = 1] = "Tuesdat";
    week[week["Wednesday"] = 2] = "Wednesday";
    week[week["Thursday"] = 3] = "Thursday";
    week[week["Friday"] = 4] = "Friday";
    week[week["saturday"] = 5] = "saturday";
    week[week["Sunday"] = 6] = "Sunday";
})(week || (week = {}));
function getWeek(weekName) {
    if (weekName === 'holiday' || weekName === 'WFH') {
        return week.Sunday;
    }
}
var h = getWeek('holiday');
console.log("Sunday is the" + h +"value");
