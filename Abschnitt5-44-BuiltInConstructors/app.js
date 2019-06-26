/*
Built In Constructors
*/

const name1 = "Jeff";
//we can do this but it is not advisable! It makes things complicated and only brings problem if you compare values and so on...
// We general will stay away from using the word new !
const name2 = new String("Jeff");

name2.foo = "bar";
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y) {
  return x + y;
}
// very weird: only to show that it is also possible to do in this way:
const getSum2 = new Function("x","y","return 1 + 1");

// Object
const john1 = {name: "John"};

const john2 = new Object({name: "John"});

console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);

// Regular Expressions:
//1) looking for a word caracter w that occurs 1 or more time
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re1);


