// Using Object Create: another way to create object! Create object inside object.

//Object with differents prototype methods
const personProtoypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personProtoypes);

mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());

//Another way to do!

const brad = Object.create(personProtoypes, {
  firstName: {value: "Brad"},
  lastName: {value: "Travery"},
  age: {value: 36}
});

console.log(brad);

console.log(brad.greeting());


