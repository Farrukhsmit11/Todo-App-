
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


document.addEventListener("DOMContentLoaded", loadTasks);


addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
 
    const li = document.createElement("li");
    li.textContent = taskText;

 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });
    li.appendChild(deleteBtn);

   
    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((task) => {
        tasks.push(task.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}
