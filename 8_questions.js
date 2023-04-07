// Q1
/*
const prompt = require("prompt-sync")();
let age = prompt("How old are you?");
if (age > 10 && age < 20) 
{
    console.log("You are a teenager");
}
*/

//Q2
/*
const prompt = require("prompt-sync")();
let age = prompt("How old are you?");
age = Number.parseInt(age);
switch (age) {
    case 10:
        console.log("You are a child");
        break;
    case 20:
        console.log("You are an adult");
        break;
    default:
        console.log("You are a teenager");
        break;
}
*/

//Q3
/*
const prompt = require("prompt-sync")();
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("This number is divisible by 2 and 3");
}
else {
    console.log("This number is not divisible by 2 and 3");
}
*/

//Q4
let age = 19;
let a = age > 18? "You are an adult" : "You are a child";
console.log(a);