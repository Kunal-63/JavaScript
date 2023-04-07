// FOR LOOP
let prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
let flag = true;
for(let i = 2; i < num; i++){
    if(num % i == 0){
        flag = false;
        break;
    }
}
if(flag == false){
    console.log("Not Prime");
}
else{
    console.log("Prime");
}

let obj = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
}
// FOR in loop
for(let key in obj){
    console.log(key, obj[key]);
}

// FOR of loop
let arr = [1, 2, 3, 4, 5];
for(let val of arr){
    console.log(val);
}