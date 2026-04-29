
// Creating an Array
let fruits=["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

// Accessing Array Elements
console.log(fruits[0]);
console.log(fruits[2]);


// Changing Array Elements
fruits[1]="Grapes";
console.log(fruits);


// Array Length
console.log(fruits.length);




// Adding Elements

// push() add at end
fruits.push("Pineapple");
console.log(fruits);

// unshift() add at start
fruits.unshift("Strawberry");
console.log(fruits);



// Removing Elements

// pop() remove from end
fruits.pop();
console.log(fruits);

// shift() remove from start
fruits.shift();
console.log(fruits);


// Finding Index
console.log(fruits.indexOf("Mango"));

// Check if item exists
console.log(fruits.includes("Apple"));



// for loop
for(let i=0; i<fruits.length; i++){
  console.log("For loop:", fruits[i]);
}

// for of loop
for(let fruit of fruits){
  console.log("For of loop:", fruit);
}




//  map() creates new array
let numbers=[1, 2, 3, 4];
let doubled=numbers.map(num=>num*2);
console.log(doubled);

// filter() filters values
let evenNumbers=numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce() single value output
let sum=numbers.reduce( (total, num)=>total+num, 0);
console.log(sum);




// Practice 

// Reverse array
let nums=[1, 2, 3, 4, 5];
console.log(nums.reverse());


// Find largest number
let arr=[10, 50, 30, 80, 20];
let max=arr[0];
for(let i=1; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i];
  }
}
console.log("Largest:", max);


// Sum of array
let arr2=[5, 10, 15, 20];
let total=0;
for(let num of arr2){
  total+=num;
}
console.log("Sum:", total);