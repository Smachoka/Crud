//array to store tasklist
let taskList = [];

//function to add a new task to the list
function addTask() {
    let itemInput = document.getElementById('itemInput');

    let newItem = itemInput.value;
    //check if item is empty
    if (newItem.trim() !== ""){
        taskList.push(newItem);
    
    //clear input value
    itemInput.value = "";

    //update task list display
    displayTask();
    


    }
 
}

//function to displayTask
function displayTask(){
    //get the ul elements
    taskElements = document.getElementById('itemList');

    //clear the list
    taskElements.innerHTML = "";

    //loop through the task list and create new list
    for (let items = 0; items < taskList.length; items++){
        let taskItem = document.createElement('li') 
         let itemText = document.createElement('span')
         itemText.textContent = taskList[items];

         //create edit button
         let editButton = document.createElement('button');
         editButton.textContent = "Edit";
         editButton.addEventListener('click', function() {
            editTask(items);
         });

         //create delete button
         let deleteButton = document.createElement('button');
         deleteButton.textContent = "Delete";
         deleteButton.addEventListener('click', function() {
            deleteTask(items);
         });

         //add edit and delete buttons to the item
         taskItem.appendChild(itemText);
         taskItem.appendChild(editButton);
         taskItem.appendChild(deleteButton);

         //add item to the list
         taskElements.appendChild(taskItem);
    }

}


//function to edit an item in task list
function editTask(index) {
    //get the current item
    let currentItem = taskList[index];

    //prompt user for new item
    let newTask = prompt("Enter new task:", currentItem);

     // Check if the new item text is not empty and not the same as the current item text
    if (newTask !== null && newTask.trim() !== "" && newTask !== currentItem) {
        // Replace the current item text with the new item text
        taskList[index] = newTask;
        // Update the display
        displayTask();
    }
}
//function to delete items from tasklist
function deleteTask(index) {
    //remove the item from the list
    taskList.splice(index, 1);
    //update the display
    displayTask();
}