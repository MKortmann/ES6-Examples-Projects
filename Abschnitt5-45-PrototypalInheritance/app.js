/*
Prototypes Explained
*/

//The protoype is attached to the properties of the function person. We can not access a prototype through a for in loop.
//The browser gives to usa: _proto_
//Person.protoype: the first prototype of the function Person
//Object.protoype: the second protoype of the function Person (second top of the chain with his own properties and methods)

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //is gonna be the same for ever person! So, this should be in the PROTOTYPE!
  // this.calculageAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

/*Declaring this functions here we are not floding our constructors with these functions. We put them inside the protoype!*/
// Calculate age: it is a common function that can be used for oth
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName) {
  this.lastName = newLastName;
}


const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

mary.getsMaried("Smith");

console.log(john.calculateAge());
console.log(mary.getFullName());

//Using common proto object functions for any objected CREATED
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));


console.log(john);
console.log(mary);