//Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Add Event clear btn
  clearBtn.addEventListener("click", clearList);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);

}

// Add Task
function addTask(e) {

  if(taskInput.value === "") {
    alert("Add a task");
  } 
  
  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node and appendto the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class, class secondary-content put the icon to the right
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>";
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  console.log(li);


  e.preventDefault();
}

// btn clear
// function clearList(e) {
//   if(taskList.children.length > 0) {
//     do {
//     taskList.children[taskList.children.length-1].remove();
//     } while (taskList.children.length > 0);
//   }
// }

// // btn clear version 2
// function clearList(e) {
//   taskList.innerHTML = "";
// }

// btn clear version 3
// More information: https://jsperf.com/innerhtml-vs-removechild/47
function clearList(e) {
  //Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains("delete-item")) {
    if(confirm("Are you Sure?")) {
    e.target.parentElement.parentElement.remove();
    }
  }
}
// Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  //querySelectorAll returns a node List
  document.querySelectorAll(".collection-item").forEach(function(task) {

    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }

  });
  console.log(text);
}

