const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement("li");
    li.textContent = taskText;

    
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    
    taskInput.value = "";
});
