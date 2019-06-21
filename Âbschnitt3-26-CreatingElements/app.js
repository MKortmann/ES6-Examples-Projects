// Creating Elements

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "new-item";

// Add attribute
li.setAttribute("tile", "New Item");



// Create text Node and append
li.appendChild(document.createTextNode("Created Element"));

// Create new link element
const link = document.createElement("a");

// Add classes
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
