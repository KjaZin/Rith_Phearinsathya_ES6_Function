// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let task = {};
  //  2- Set the description from the text field
  // TODO
  task.description = document.getElementById("description").value;
  // 3- Set the priority from select field
  // TODO
  task.priority = document.getElementById("priority").valu;
  // 4- Add the new object to the array
  // TODO
  tasks.push(task);
  console.log(tasks);
  displayTasks();
}
function displayTasks() {
  const taskList = document.createElement("ul");
  document.querySelector(".container").innerHTML = "";
  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.textContent = `${task.description} \nPriority: ${task.priority}`;
    taskList.appendChild(taskItem);
  });
  document.querySelector(".container").appendChild(taskList);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);