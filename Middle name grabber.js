let middleName;
middleName = getMiddleName("Joseph Junior Acevedo");
console.log(middleName);


function getMiddleName(name) {
    let names = name.split(" ");
    let middleName;
    if (names.length >= 3){
    middleName = names[1];
    }
    else{
        middleName = " ";
    }
return middleName;
}
