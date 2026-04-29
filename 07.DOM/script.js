
// Select elements through getElementBy
let title = document.getElementById("title");
let paragraphs = document.getElementsByClassName("text");

// Change text content
title.innerText = "DOM Practice (come from javascript)";

// Change styles
title.style.color = "red";
title.style.fontSize = "40px";

// innerHTML
title.innerHTML="DOM <span style='color:blue'>Practice</span>";

// Loop through multiple elements (HTMLCollection)
for(let i=0; i<paragraphs.length; i++){
    paragraphs[i].style.color = "purple";
}





// Select elements through querySelector
let input = document.querySelector("#inputBox");
let button = document.querySelector("#btn");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");


// Click event
button.addEventListener("click",function(){
    button.innerText = "Button Clicked";
    button.style.color = "green";
});


// Input event
input.addEventListener("input",function(){
    console.log("Typing:", input.value);
});


// Create new element
addBtn.addEventListener("click",function(){
    let li = document.createElement("li"); 
    li.innerText = input.value; 

    list.appendChild(li);

    input.value = "";
});


// Remove element (click to delete)
list.addEventListener("click",function(e){
    e.target.remove(); // remove clicked item
});


// querySelectorAll example
let allTexts=document.querySelectorAll(".text");
allTexts.forEach(function (item) {
    item.style.backgroundColor = "lightgray";
});


// attribute handling
title.setAttribute("data-custom","myValue");
console.log(title.getAttribute("data-custom"));


// Toggle style example
button.addEventListener("dblclick", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "black" ? "white" : "black";
});