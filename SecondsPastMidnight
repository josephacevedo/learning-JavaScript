 // gives you the seconds until midnight 
let curSec = getSecPastMid();
console.log("It has been " + curSec + " since midnight");

//FUNCTION that converts the current time into seconds which gives you the 
//  amount of seconds that have gone by since midnight
function getSecPastMid() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minute = date.getMinutes()*60;
    let hour = date.getHours()*60*60;
    let curSec = seconds + minute + hour;
    return curSec;
}
