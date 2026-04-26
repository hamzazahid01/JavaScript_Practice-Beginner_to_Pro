
let addBtn = document.querySelector("#addBtn");
let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

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
        })

        span.addEventListener("click", function(){
            li.classList.toggle("completed")
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

            li.appendChild(span);
            li.appendChild(delBtn);

            taskList.appendChild(li);

        })
    }
})



