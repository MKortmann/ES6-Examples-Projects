// Function declarations

//With ES6 easy way to declare the 
//defaults
function greet(firstName = "firstName", lastName = "lastName") {
  // console.log(`Hello`);
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet());

// FUNCTION EXPRESSIONS: normally they are anonymous functions. But you could name it.

const square = function(x = 3) {
  return x*x;
};

// console.log(square(8)); 
// console.log(square(3));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS; ALSO CALLED IIFEs: it is basically a function that you declare and runs at same time.

// (function() {
//   console.log("IIFE Ran...");
// })();

// (function(name) {
//   console.log(`Hello ` + name);
// })("Brad");

//Property Methods

const todo = {
  add: function() {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();
