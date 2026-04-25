
//Operators in Javascript

// 1.Arithmetic Operators
let a=10;
let b=3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); // 10^3


// Assignment Operators
let x=5;

x +=3; //8
x -=2; //6
x *=2; //12
x /=3; //4
console.log(x);


// Comparison Operators (true/false)
let num1 = 10;
let num2 = "10";
console.log(num1 == num2);  //only checks value
console.log(num1 === num2); //checks value + type
console.log(num1 != num2); 
console.log(num1 !== num2);

console.log(num1 > 5); 
console.log(num1 < 5);  
console.log(num1 >= 10);
console.log(num1 <= 9); 


// Logical Operators
let isLoggedIn=true;
let isAdmin=false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

