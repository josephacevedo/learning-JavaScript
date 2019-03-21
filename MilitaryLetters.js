let code = militaryLetters("a");
console.log(code);


function militaryLetters(letter) {
    let word;
    switch (letter.toUpperCase()) {
        case "A": word = "Alpha"; break;
        case "B": word = "Bravo"; break;
        case "C": word = "Charlie"; break;
        case "D": word = "Delta"; break;
        case "E": word = "Echo"; break;
        case "F": word = "Foxtrot"; break;
        case "G": word = "Golf"; break;
        case "H": word = "Hotel"; break;
        case "I": word = "India"; break;
        case "J": word = "Juliett"; break;
        case "K": word = "Kilo"; break;
        case "L": word = "Lima"; break;
        case "M": word = "Mike"; break;
        case "N": word = "November"; break;
        case "O": word = "Oscar"; break;
        case "P": word = "Papa"; break;
        case "Q": word = "Quebec"; break;
        case "R": word = "Romeo"; break;
        case "S": word = "Sierra"; break;
        case "T": word = "Tango"; break;
        case "U": word = "Uniform"; break;
        case "V": word = "Victor"; break;
        case "W": word = "Whiskey"; break;
        case "X": word = "X-ray"; break;
        case "Y": word = "Yankee"; break;
        case "Z": word = "Zulu"; break;
    
        default: word = "Invalid letter"; break;
    }
    
    return word;
        
        
    }

