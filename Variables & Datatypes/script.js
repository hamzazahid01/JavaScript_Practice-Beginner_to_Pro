// There are three types of variables in JavaScript: var, let, const

// let can be updated (block-scoped)
let name="Hamza";
name="Ali"; // value updated successfully


// const cannot be updated (constant value)
const age=20;
// age=25; //Error: Assignment to constant variable is not allowed

// var -old way (function-scoped), avoid using it
var city="Islamabad";




// Data types in JavaScript:

// String
let userName="Hamza";

// Number
let userAge=20;
let price=99.99;

// Boolean (true/false)
let isLoggedIn=true;

// Undefined (variable declared but no value assigned)
let x;
console.log(x); // undefined

// Null (intentional empty value)
let data = null;

// Object (stores data in key-value pairs)
let user ={
  name: "Hamza",
  age: 20
};

// Array (list of values)
let colors =["red", "blue", "green"];


// typeof → used to check data type
console.log(typeof "hello"); // string
console.log(typeof 123); // number


// Practice variables
let myName = "Hamza";
let myAge = 21;
let myCity = "Islamabad";

// Print multiple values
console.log(myName, myAge, myCity);


// Object with array inside
let student ={
  name: "Hamza",
  age: 21,
  subjects: ["DB", "OOP", "DS"]
};
console.log(student);