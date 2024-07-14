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
    }

}

