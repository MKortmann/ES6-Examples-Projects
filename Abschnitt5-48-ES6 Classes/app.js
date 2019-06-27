// ES6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    console.log(`diff: ${diff}`);
    const ageDate = new Date(diff);
    console.log(`ageDate: ${ageDate}`);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  //if you want to have an method that add two numbers together. So you can add here as static:
  static addNumbers(x,y) {
    return x + y;
  }

}

//This is called: instantiate an object! You create an object from the class!
const mary = new Person("Mary", "Stuart", "11-13-1980");

//we can use it without instantiate
console.log(Person.addNumbers(1,2));


mary.getsMarried("newLastName");

console.log(mary.calculateAge())
console.log(mary.greeting());
