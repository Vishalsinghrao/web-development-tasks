
// let number = (prompt("Enter a number:"));

// if (number % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }


function calculate(num1, num2, operation) {
    switch (operation) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            return num1 / num2;
        default:
            return "Invalid input";
    }
}

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let operation = parseInt(prompt("Enter the operation number:"));

console.log(calculate(num1, num2, operation));



