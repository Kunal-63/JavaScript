// CONDITIONAL EXPRESSION
const prompt = require("prompt-sync")();
let a = prompt("Enter a number :");
a = Number.parseInt(a); // convert string to number
console.log(typeof a);
if(a % 2 == 0){
    console.log("Even Number");
}
else if(a % 2 == 1){
    console.log("Remainder is 1");
}
else{
    console.log("Odd Number");
}