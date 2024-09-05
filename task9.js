function sayHello() {
    return "Hello, World!";
}
console.log(sayHello());


function doublenumber(a){
    return a*2;
}
console.log(doublenumber(5));

function add(a,b){
    return a+b;
}
console.log(add(5,4));

const double = (a) => {
    return a*2;
}
console.log(double(5));

function subtractten(a){
    return a-10;
}
console.log(subtractten(25));

function isGreaterThanFive(a){
    return a > 5  ? 'true' : 'false'
}
console.log(isGreaterThanFive(15));



function isBetweenOneAndTen(a) {
    return a >= 1 && a <= 10;
 }
 console.log(isBetweenOneAndTen(8));


function isEven(a) {
    if (a % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEven(8));


function CheckAge(age){
    return age > 18  ? 'Adult' : 'Minor'
}

console.log(CheckAge(20));


function getDayType(dayNumber) {
    switch (dayNumber) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day number";
    }
}

console.log(getDayType(2));


function isEven(a) {
    if (a == 0) {
        return "number is zero";
    } else if(a>0) {
        return "number is positive";
    }
    else{
        return "number is negative"
    }
}

console.log(isEven(2));



