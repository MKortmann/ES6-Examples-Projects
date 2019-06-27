// Book List: Starting with ES5

// Book Constructor: gonna handle the actually Book Object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor: it will be a set of protoype methods that add, remove and so no. Things about of UI.
function UI() {

}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  // Create tr elment
  const row = document.createElement("tr");

  // insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
  
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  // form
  const form = document.querySelector("#book-form");

  // insert alert
  container.insertBefore(div, form);

  // disappear after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {

  // get form values
  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;
  console.log(title, author, isbn);

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  // Check the input
  if(title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {

    // Add Book to list
    ui.addBookToList(book);

    // Show message
    ui.showAlert(`The Book ${title} is added`, "success");

    // Clear fields
    ui.clearFields();

  }

  e.preventDefault();
})