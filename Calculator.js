let calc = calculator(5,"",3);
console.log(calc);

//FUNCTION that calculates two mumbers
function calculator(num1,operator,num2) {

    let result;
switch (operator) {
    
    case "+": result = num1+num2; break;
    case "-": result = num1-num2; break;
    case "*": result = num1*num2; break;
    case "/": result = num1/num2; break;
    case "%": result = num1%num2; break;
    case "^": result = Math.pow(num1,num2) ; break;
    case "sin": result = Math.sin(num1,num2) ; break;
    case "cos": result = Math.cos(num1,num2) ; break;
    case "tan": result = Math.tan(num1,num2) ; break;
    default: result = "invalid operator"; break;
}
   return result;
}