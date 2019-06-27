// ES6 SubClasses known as inheritance!

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

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    //call the Person (Parent Class) constructor
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}



const john = new Customer("John", "Doe", "555-555-5555", "standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost());
