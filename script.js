// Function to add a new task
function addTask() {
    // Get input element and its value
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();
    
    // Get the task list element
    var taskList = document.getElementById("taskList");
    
    // Check if the input value is not empty
    if (taskValue !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.textContent = taskValue;
        
        // Create a delete button for the task
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        
        // Add event listener to delete the task
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
        
        // Append the delete button to the task
        li.appendChild(deleteBtn);
        
        // Append the task to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    } else {
        // Alert the user if the input value is empty
        alert("Please enter a task!");
    }
}
