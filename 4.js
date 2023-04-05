// DATA TYPES: NN SS BB U (PRIMITIVE)
// NULL,NUMBER STRING,SYMBOL BOOLEAN,BIGINT UNDEFINED
let a = null; // can be null or undefined
let b = 345; // can be any number
let c = true; // can be true or false
let d = BigInt("567"); // can be any number
let e = "Kunal"; // can be any string
let f = Symbol("Kunal Symbol"); // can be any symbol
let g = undefined; // can be undefined or null
console.log(a, b, c, d, e, f, g); // null 345 true 567 Kunal Symbol(Kunal Symbol) undefined
console.log(typeof d); // bigint
console.log(typeof f); // symbol

// OBJECTS (NON-PRIMITIVE)
// ARRAY,FUNCTION,OBJECT,DATE,REGEXP
let h = [1, 2, 3, 4, 5]; // can be any array
let i = function () {}; // can be any function
let j = { 
    name: "Kunal", 
    age: 21 
}; // can be any object
let k = new Date(); // can be any date
let l = /Kunal/; // can be any regular expression