// gives you the current seconds
let curSeconds;
curSeconds = getSeconds();
console.log( "Current seconds is:"+ curSeconds);


// gives you the current time 
let curTime;
curTime  = getHours() +":" + getMinutes() +":"+ getSeconds();
console.log("The current time is " + curTime);



// makes the charachter to uppercase or lowercase every 30 seconds
let font;
font = fontOnTime("aBcDefgHIjKlmonPQRSTUvwxYz");
console.log(font);



//----------------------------------------- FUNCTIONS-------------------------------------------

// FUNCTION that gets current seconds 
function getSeconds() {
	let date = new Date();
	
	let seconds = date.getSeconds();

	return seconds;
}
// FUNCTION that gets the current hour
function getHours() {
	let date = new Date();
	let hour = date.getHours();

	return hour;
}
// FUNCTION that gets current minute
function getMinutes() {
	let date = new Date();
	let minute = date.getMinutes();

	return minute;
}


// function that makes a word all uppercase or lowercase every 30 seconds
function fontOnTime(str){
let str2;
	if (curSeconds < 30) {
		str2 = str.toUpperCase();
		
	}else if (curSeconds > 30) {
		str2 = str.toLowerCase();
	}

return str2;
}