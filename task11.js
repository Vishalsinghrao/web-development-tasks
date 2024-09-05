// function loan(a) {
//     switch (a) {
//         case 1:
//             let salary = parseInt(prompt("Enter your salary:"));
//             if(salary>50000){
//                 console.log("you can apply for loan");
//             }
//             else{
//                 console.log("you can not apply for loan");
//             }
//             break;
//         case 2:
//             let turnover = parseInt(prompt("Enter your turnover:"));
//             if(turnover>2000000){
//                 console.log("you can apply for loan");
//             }
//             else{
//                 console.log("you can not apply for loan");
//             }
//             break;
//         case 3:
//             console.log("no loan for you");
//             break;
//         default:
//             return "Invalid input";
//     }
// }

// alert("Enter 1 for government job\nEnter 2 for Businessman\nEnter 3 for private job");
// let a = parseInt(prompt("Enter your job role:"));
// console.log(loan(a));

// const boxcolor = document.
// getElementsByClassName('box')
// console.log(boxcolor);


// const numberArray = [1,2,3,4,5,6];

const box = document.getElementById('box')
const hideElement = () => {
    box.classList.add('hidden');
}

const box1 = document.getElementById('box1')
const colorElement = () => {
    box1.classList.add('color');
}