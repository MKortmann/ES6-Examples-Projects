// Local & Session Storage
// Local Storage: the storage item will stay even if you close your browser.
// Session Storage: the storage will disappear as soon as you close your browser.
// set local storage item
localStorage.setItem("name", "John");
localStorage.setItem("age", "36");
//set session storage
// sessionStorage.setItem("name", "Marcelo");

// remove from storage
// localStorage.removeItem("name");

// get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;
  let tasks;
  if(localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));    
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks) );

  e.preventDefault();
});

// The data are storage in localStorage as JSON file, ex: ["walk the dog","walk the dog 2","walk the cat","walk the cat 2"]
//But it is not an array!!
console.log(localStorage.getItem("tasks"));
//JSON.parse: get the data in format JSON and convert it to a string!!!
const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks);

// tasks.forEach(function(task) {
//   console.log(task);  
// });