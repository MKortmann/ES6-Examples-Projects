// Prototypal Inheriance

// Person Constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person = new Person ("John", "Doe");

console.log(person.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom1", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting: overwritting the inheritance function.
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}} welcome to my company!`;
}


console.log(customer1.greeting());