
// Selecting elements
let clickBtn=document.querySelector("#clickBtn");
let dblBtn=document.querySelector("#dblBtn");
let input=document.querySelector("#inputBox");
let form=document.querySelector("#myForm");
let box=document.querySelector("#box");
let list=document.querySelector("#list");
let title=document.querySelector("#title");


// Click event
clickBtn.addEventListener("click",function(){
    console.log("Button clicked");
    title.innerText="Clicked!";
});


// Double click Event
dblBtn.addEventListener("dblclick",function(){
    console.log("Double clicked");
    dblBtn.style.backgroundColor="green";
});


// Mouse events
box.addEventListener("mouseover",function(){
    box.style.backgroundColor="yellow";
});

box.addEventListener("mouseout",function(){
    box.style.backgroundColor="lightblue";
});


// Input event
input.addEventListener("input",function(e){
    console.log("Typing:", e.target.value);
});


// Key events
input.addEventListener("keydown",function(e){
    console.log("Key Down:", e.key);
});

input.addEventListener("keyup",function(e){
    console.log("Key Up:", e.key);
});


// Form submit event
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Form submitted");
});


// Event object
clickBtn.addEventListener("click",function(e){
    console.log(e);
    console.log("Target:", e.target);
});


// Event delegation (for dynamic elements)
list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        console.log("Clicked:", e.target.innerText);
        e.target.style.color="red";
    }
});


// addEventListener vs onclick
clickBtn.onclick=function(){
    console.log("onclick used");
};


// Remove Event Listener
function handleClick(){
    console.log("Event removed after one click");
    clickBtn.removeEventListener("click", handleClick);
}
clickBtn.addEventListener("click",handleClick);


// Focus & Blur events
input.addEventListener("focus",function(){
    input.style.backgroundColor="lightgreen";
});

input.addEventListener("blur",function(){
    input.style.backgroundColor = "white";
});


// Change event
input.addEventListener("change",function(){
    console.log("Value changed:",input.value);
});


// Window events
window.addEventListener("load",function(){
    console.log("Page fully loaded");
});

window.addEventListener("resize",function(){
    console.log("Window resized");
});


// Scroll event
window.addEventListener("scroll",function(){
    console.log("Scrolling...");
});