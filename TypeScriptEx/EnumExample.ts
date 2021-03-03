enum week
{
Monday,
Tuesdat,
Wednesday,
Thursday,
Friday,
saturday,
Sunday
}
function getWeek(weekName: string): week {
    if (  weekName === 'holiday' || weekName === 'WFH') {
        return week.Sunday;
    }
 }

let h: week = getWeek('holiday'); 
console.log("Sunday is a"+h);