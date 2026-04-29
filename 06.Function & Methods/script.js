
// Functions
// Basic Function Declaration
function func(){
  console.log("Hi, I am Hamza Zahid");
}
func();


// Function with parameters
function add(a,b){
  console.log("Sum:", a+b);
}
add(5,3);


// Function with return value
function multiply(a,b){
  return a*b;
}
let result = multiply(4,5);
console.log("Multiplication:", result);


// Default parameters
function func2(name="Hamza"){
  console.log("Hello " + name);
}
func2();
func2("Hamzaaaa");


// Function expression
let subtract=function(a,b){
  return a-b;
};
console.log("Subtraction:", subtract(10,4));


// Arrow function
let divide=(a,b)=>{
  return a/b;
};
console.log("Division:", divide(20,5));






// Methods

// Method = function inside an object
let user={

  name: "Hamza",
  age: 21,
  func3: function(){
    console.log("Hello, my name is " + this.name);
  }

};
user.func3();


// Another example of method
let calculator={
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  }
};
console.log(calculator.add(10,5));
console.log(calculator.subtract(10,5));



// Practice examples

// Check even or odd
function isEven(num){
  if(num%2===0){
    return "Even";
  } 
  else{
    return "Odd";
  }
}
console.log(isEven(10));
console.log(isEven(7));


// Find maximum number
function findMax(a,b,c){
  if(a>b && a>c){
    return a;
  } 
  else if(b>a && b>c){
    return b;
  }
  else{
    return c;
  }
}
console.log("Max:", findMax(10,20,15));


// Simple calculator using functions
function calculatorApp(a,b,operator) {

  if (operator==="+") 
    return a+b;
  if (operator==="-")
     return a-b;
  if (operator==="*") 
    return a*b;
  if (operator==="/") 
    return a/b;

  return "Invalid operator";
}
console.log(calculatorApp(10,5,"+"));
console.log(calculatorApp(10,5,"*"));