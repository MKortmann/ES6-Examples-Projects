/*
Constructors & the "this" keyword
*/

// Person constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculageAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person("Brad", 36);
// const john = new Person("John", 30);

const brad = new Person("Brad", "9-10-1981")
console.log(brad.calculageAge());
