
// Original string
let str = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

// 2) index of the word Governments
let indxOf = str.indexOf("Governments")
console.log("The index of the word Governments is :" + indxOf);

// index of the word all
let indxOfall = str.indexOf("all")
console.log("The index of the word all:" + indxOfall);


// comma after all
let comma = str.indexOf(",",indxOfall);
console.log("the index of the comma is:" + comma);

// 3) substring from all to next comma
let substr = str.substring(46,71);
console.log(substr);

// 4) replace taht with that
let replace = str.replace(/taht/ig,"that");
console.log(replace);

// 5) length of string
let length = str.length;
console.log(length);
