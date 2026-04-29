
// for loop (most commonly used)
for (let i=1; i<=5; i++){
  console.log("Iteration:", i);
}


// while loop
let i=1;
while(i<=5){
  console.log("While loop:", i);
  i++;
}


// do while loop
let j=1;
do{
  console.log(j);
  j++;
} while (j<=5);



// for of loop
let colors=["red", "blue", "green"];
for(let color of colors){
  console.log("Color:", color);
}



// for in loop
let user={
  name: "Hamza",
  age: 20
};

for(let key in user){
  console.log(key, ":", user[key]);
}




// Loop control statements

// break (stops the loop completely)
for(let k=1; k<=5; k++){
  if(k===3){
    break;
  }
  console.log("Break example:", k);
}


// continue (skips current iteration)
for(let m=1; m<=5; m++){
  if(m===3){
    continue;
  }
  console.log("Continue example:", m);
}



// Practice Examples

// Print numbers from 1 to 10
for(let n=1; n<=10; n++){
  console.log(n);
}


// Print even numbers from 1 to 10
for(let n=1; n<=10; n++){
  if(n%2 === 0){
    console.log("Even:", n);
  }
}


// Sum of numbers from 1 to 5
let sum = 0;
for(let n=1; n<=5; n++){
  sum+=n;
}
console.log("Sum:", sum);


// Reverse an array
let numbers=[1, 2, 3, 4, 5];

for(let i=numbers.length-1;    i>=0;    i--) {
  console.log("Reverse:", numbers[i]);
}


// Count vowels in a string
let str="HamzaZahid";
let count=0;
for(let char of str){
  if(
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    count++;
  }
}
console.log("Vowels:", count);