// Conditional Statements

// if statement
let age=18;

if(age>=18) {
  console.log("You are an adult");
}


// if else
let marks=45;

if(marks>=50) {
  console.log("Pass");
} 
else{
  console.log("Fail");
}


// if else if else
let score=75;

if(score>=90) {
  console.log("Grade A");
} 
else if(score >= 70){
  console.log("Grade B");
}
else if(score >= 50){
  console.log("Grade C");
} 
else{
  console.log("Fail");
}


// Ternary Operator
let number=10;

let result=(number % 2 === 0) ? "Even" : "Odd";
console.log(result);


// switch statement
let day=2;

switch(day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}



// Examples

// Check if number is positive, negative or zero
let value = -5;

if(value>0) {
  console.log("Positive");
} 
else if(value < 0){
  console.log("Negative");
} 
else{
  console.log("Zero");
}


// Check login + admin access
let userLoggedIn=true;
let userRole="admin";

if(userLoggedIn && userRole === "admin"){
  console.log("Access granted");
}
else{
  console.log("Access denied");
}


//Find largest number
let n1=10, n2=20, n3=15;

if(n1 > n2 && n1 > n3){
  console.log("n1 is largest");
}
else if(n2 > n1 && n2 > n3){
  console.log("n2 is largest");
} 
else{
  console.log("n3 is largest");
}