//Converting to ES6

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookToList(book) {
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

  showAlert(message, className) {
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

  // Delete Book
  deleteBook(target) {
    if (target.className === "delete") {
      memory.removeFromLocalStorage(target.parentElement.parentElement);
      target.parentElement.parentElement.remove();

    }
  }
  // Clear Fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

};

// Instantiate UI
const ui = new UI();

//Class Memory Handle
class Memory {
  constructor() {
    //books will be an array of books objects
    let books;
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if(localStorage.getItem("books") === null) {
      this.books = [];
      console.log(`Created books ${this.books}`);
    } else {
      this.books = JSON.parse(localStorage.getItem("books"));
      console.log(`Getting books from the memory!`);
      this.loadFromLocalStorage(this.books);
    }
  }

  addToLocalStorage(book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  loadFromLocalStorage(item) {
    this.books.forEach(function(item) {
      ui.addBookToList(item);
    })
  }

  removeFromLocalStorage(book) {
    this.books = JSON.parse(localStorage.getItem("books"));

    for(let i=0; i < this.books.length; i++) {
      debugger
      if(this.books[i].title === book.children[0].innerHTML) {
        this.books.splice(i,1);
      }
    }

    localStorage.clear();
    localStorage.setItem("books", JSON.stringify(this.books));

    // this.books.forEach(function(item, index) {
    //   if(item.title === book.children[0].innerHTML) {
    //     debugger
    //     this.books.splice(index,1);
    //   }
    // }, this.books)

    console.log(book);


  }
}

//create the object memory
const memory = new Memory();

// Event Listeners for add book
document.getElementById("book-form").addEventListener("submit", function(e) {

  // get form values
  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;
  console.log(title, author, isbn);

  // Validate
  // Check the input
  if(title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {

    // Add Book to list
    // Instantiate book
    const book = new Book(title, author, isbn);

    ui.addBookToList(book);

    // Storaging the book
    memory.addToLocalStorage(book);

    // Show message
    ui.showAlert(`The Book ${title} is added`, "success");

    // Clear fields
    ui.clearFields();

  }

  e.preventDefault();
});



// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {
 // Instantiate UI
 const ui = new UI();
 ui.deleteBook(e.target);
// Show message
  ui.showAlert(`The Book ${title} is removed`, "success");
  e.preventDefault();
})
