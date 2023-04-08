let prompt = require('prompt-sync')();
let x = prompt("Enter a number: ");
x = Number.parseInt(x);
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let first = 0;
let last = n.length - 1;
let mid = 0;
while (first <= last){
    let mid=Number.parseInt((first + last)/2);
    if (x == n[mid]) {
        console.log("Found");
        break;
    } 
    else if (x > n[mid]) {
        first = mid;
    } 
    else {
        last = mid;
    }
}