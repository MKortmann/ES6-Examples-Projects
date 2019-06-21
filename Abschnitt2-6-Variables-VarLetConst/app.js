//var, let, const

var name1 = "John Doe";
console.log(name1);

name1 = "Steve Smith";
console.log(name1);

//Init var
var greeting2;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

//Caracters that can be inside a variable:
// letters, numbers, _, $
// _ normally used as private variables
// $ not recommended, expection: jQuery
// normally start with letters. Camel case
//They can not start with numbers

//Multi word vars
var firstName = "John"; // Camel case !BETTERWAY! Use only Pascal case for 
//classes & constructor function!!
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case 



//Init var
// let greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// CONST: you can not reassign

const name = "John";
console.log(name);

const greeting = 5;

const person = {
  name: "John",
  age: 15
}

//it works, we can reasign the values but
//not the keys or const object name.
person.name = "Marcelo";

console.log(person);

//array
const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);


