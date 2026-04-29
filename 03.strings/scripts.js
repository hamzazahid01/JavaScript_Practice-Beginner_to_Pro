
// Creating Strings

let str1="Hello";
let str2='World';
let str3=`Hello World`;
console.log(str1, str2, str3);


// String Length
let text="JavaScript";
console.log(text.length);

// Access Characters
console.log(text[0]);
console.log(text[4]);


//Convert Case
console.log(text.toUpperCase());
console.log(text.toLowerCase());


//Trim (remove extra spaces)
let msg="   Hello JS   ";
console.log(msg.trim()); // "Hello JS"


// Slice (extract part of string)
let word="JavaScript";
console.log(word.slice(0, 4));
console.log(word.slice(4));


// Replace
let sentence="I like Java";
console.log(sentence.replace("Java", "JavaScript")); 


// Includes (check if value exists)
let line="Learning JavaScript";

console.log(line.includes("Java")); //true
console.log(line.includes("Python")); //false


// Split (convert string to array)

let data="red,blue,green";
let colors=data.split(",");
console.log(colors);


// Join (array to string)
let arr=["Hello", "World"];
console.log(arr.join(" "));


// Template Literals (dynamic strings)

let name="Hamza";
let age=21;

let intro = `My name is ${name} and I am ${age} years old`;
console.log(intro);




// Practice Example
// Check palindrome

let input = "madam";
let reversedText=input.split("").reverse().join("");

if(input===reversedText) {
  console.log("Palindrome");
} 
else{
  console.log("Not Palindrome");
}