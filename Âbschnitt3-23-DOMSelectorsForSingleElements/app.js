//DOM SINGLE ELEMENT SELECTOR

//document.getElementById();

// console.log(document.getElementById("task-title"));

// // Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const taskTile = document.getElementById("task-title");


// // Change styling
// document.getElementById("task-title").style.background = "#333";
// document.getElementById("task-title").style.color = "white";
// document.getElementById("task-title").style.padding = "50px";

// document.getElementById("task-title").style.display = "none";

// // Change content
// document.getElementById("task-title").textContent = "Task List Marcelo";

// document.getElementById("task-title").innerText = "My Tasks";

// //to insert HTML
// document.getElementById("task-title").innerHTML = "<span style='color:red'>My Tasks List Marcelo2</span>";

// //BETTER WAY TO DO WHAT WE HAVE DONE ABOVE
// taskTile.style.background = "#333";
// taskTile.style.color = "white";
// taskTile.style.padding = "50px";

// taskTile.style.display = "none";

// // Change content
// taskTile.textContent = "Task List Marcelo";

// taskTile.innerText = "My Tasks";

//to insert HTML
// taskTile.innerHTML = "<span style='color:red'>My Tasks List Marcelo2</span>";

//document.querySelector()

console.log(document.querySelector("#task-title"));

console.log(document.querySelector(".card-title"));


console.log(document.querySelector("h5"));


document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "green";

document.querySelector("li:nth-child(3)").style.color = "yellow";

document.querySelector("li:nth-child(4)").style.color = "red";

document.querySelector("li:nth-child(4)").textContent = "Hello World";

document.querySelector("li:nth-child(4)").style.background = "#ccc";

document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";