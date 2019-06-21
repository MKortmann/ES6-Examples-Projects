// Removing and Replacing Elements

// Create Element

const newHeading = document.createElement("h2");

// Add id

newHeading.id = "task-title";

// New Text node
newHeading.appendChild(document.createTextNode("Task List"));

newHeading.style.background = "yellow";

// Set the old heading

const oldHeading = document.getElementById("task-title");

// Parent
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove specific item
lis[0].remove();

// Remove child
list.removeChild(lis[3]);

// Classes & Attr.
const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

// CLASSES
// returns the class name of the link
val = link.className;
// returns a DOMTokenList
val = link.classList;
// gets the first Class
val = link.classList[0];

// add a class
link.classList.add("test");

// remove a class
link.classList.remove("test");


// ATTRIBUTES

// set an attribute
link.setAttribute("href", "http://google.com");
// getting an attribute
val = link.getAttribute("href");
// check if the link has an attribute
val = link.hasAttribute("href");
link.hasAttribute("http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title")
//remove attribute
link.removeAttribute("title");
val = link.hasAttribute("title")

console.log(val);