const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;
val = firstName + lastName;

//Concatenation

val = firstName + " " + lastName;

//Append

val = "Marcelo ";
val += "Siqueira";

val = "Hello, my name is " + firstName + " and I am " + age;

//Escaping
val = "That's is awesome, I can't wait";
//Backslash remove the effect of single quote
val = 'That\'s is awesome, I can\'t wait';

//Length
val = firstName.length;

// Concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[2];

// indexOf()

val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");

// Get the last char
val = firstName.charAt(firstName.length - 1);

// Get substrings
val = firstName.substring(0,4);

// slice(): very similar to substring
val = firstName.slice(0,4);

// start from the back and get the last three characters
val = firstName.slice(-3);

// split(): build an array elements. The elements would be separated in accord to space
val = str.split(" ");

val = tags.split(",");

//replace(): replace something inside a string
val = str.replace("Brad", "Jack");

// includes(): gives a true or false value based if something is in the string
val = str.includes("Brad");









//With ES6 they introduce template literals also called template strings

console.log(val);

