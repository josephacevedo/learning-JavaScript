let answer;
let number = 7;
answer = numberToEnglish(number);
console.log("The number " + number + " is " + answer + " in english");


//this is where the function is called
let ans;
let animal = "A";
ans = lettersToAnimal(animal);
console.log(animal + " is for " + ans);


// convert a number between 0 and 9 to word for example  0 would be zero
function numberToEnglish(number) {
    let word;
    switch (number) {
        case 0: word = "zero";        break;
        case 1: word =  "one";        break;
        case 2: word =  "two";        break;
        case 3: word =  "three";      break;
        case 4: word =  "four";       break;
        case 5: word =  "five";       break;
        case 6: word =  "six";        break;
        case 7: word =  "seven";      break;
        case 8: word =  "eight";      break;
        case 9: word =  "nine";       break;
        default: word = "invalid";    break;
    }
return word;
}
// converts letters to animal
function lettersToAnimal(character){
    let animal;
    switch(character)
    {
        case "A":animal = "Ant";         break;
        case "B":animal =  "Bear";       break;
        case "C":animal =  "Cat";        break;
        case "D":animal =  "Dog";        break;
        case "E":animal =  "Elephant";   break;
        case "F":animal =  "Fox";        break;
        case "G":animal =  "Goose";      break;
        case "H":animal =  "Horse";      break;
        case "I":animal =  "Iguana";     break;
        case "J":animal =  "Jaguar";     break;
        case "K":animal =  "Kangaroo";   break;
        case "L":animal =  "Lion";       break;
        case "M":animal =  "Monkey";     break;
        default: animal = "Premium version required for that word "; break;
    }
return animal;
}