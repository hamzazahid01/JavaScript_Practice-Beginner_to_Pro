
let addBtn = document.querySelector("#addBtn");
let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");
let allBtn = document.querySelector("#allBtn");
let completeBtn = document.querySelector("#completedBtn");
let pendingBtn = document.querySelector("#pendingBtn");

function saveTasks(){
    let tasks = [];
    let items = document.querySelectorAll("#taskList li span");
    items.forEach(
        function(item){
            tasks.push(item.innerText);
        }
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function(){
    let task = taskInput.value;

    if(taskInput.value===""){
        alert("Please enter a task!");
        return;
    }

    if(task){

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText=task;

        let delBtn=document.createElement("button");
        delBtn.innerText="Delete";

        delBtn.addEventListener("click",function(){
            li.remove();
            saveTasks();
        })

        span.addEventListener("click", function(){
            li.classList.toggle("completed")
        })

        span.addEventListener("dblclick",function(){
            let newTask = prompt("Edit Task: ",span.innerText);

            if(newTask!==null && newTask==""){
                span.innerText=newTask;
                saveTasks();
            }
        })

        li.appendChild(span);
        li.appendChild(delBtn);

        taskList.appendChild(li);

        taskInput.value="";
        saveTasks();
    
        }
    })

window.addEventListener("load",function(){
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks){
        savedTasks.forEach(function(task){

            let li = document.createElement("li");

            let span = document.createElement("span");
            span.innerText=task;

            let delBtn=document.createElement("button");
            delBtn.innerText="Delete";

            delBtn.addEventListener("click",function(){
                li.remove();
                saveTasks();
            })
            span.addEventListener("click", function(){
                li.classList.toggle("completed");
                saveTasks();
            })

            span.addEventListener("dblclick",function(){
                let newTask = prompt("Edit Task: ",span.innerText);

                if(newTask!==null && newTask==""){
                    span.innerText=newTask;
                    saveTasks();
                }
            })

            li.appendChild(span);
            li.appendChild(delBtn);

            taskList.appendChild(li);

           

        })
    }
})

        allBtn.addEventListener("click", function(){
            let display=document.querySelectorAll("#taskList li");
            display.forEach(li=>{
                li.style.display="block";
            })
        })

        completeBtn.addEventListener("click", function(){
            let display = document.querySelectorAll("#taskList li");
            display.forEach(li=>{
                if(li.classList.contains("completed")){
                    li.style.display="block";
                }else{
                   li.style.display="none"; 
                }
            })
        })

        pendingBtn.addEventListener("click", function(){
            let display = document.querySelectorAll("#taskList li");
            display.forEach(li=>{
                if(!li.classList.contains("completed")){
                    li.style.display="block";
                }else{
                    li.style.display="none";
                }
            })
        })


