
let addBtn = document.querySelector("#addBtn");
taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");
addBtn.addEventListener("click", function(){
    let task = taskInput.value;

    if(taskInput.value===""){
        alert("Please enter a task!");
    }

    if(task){

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText=task;

        let delBtn=document.createElement("button");
        delBtn.innerText="Delete";

        delBtn.addEventListener("click",function(){
            li.remove();
        })

        li.appendChild(span);
        li.appendChild(delBtn);

        taskList.appendChild(li);

        taskInput.value="";
        
    }
})


