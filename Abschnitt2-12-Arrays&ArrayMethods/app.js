// Arrays & Arrays Methods: it allows to store multiply values in one variable.
// They can be mutated and iterated through and they can be used in some really complex algorithms.

// Create some arrays

//the recommended, most popular way
const numbers = [43, 56,33,23,44,36,5];
//second way to use the away constructor
const number2 = new Array(22,45,33,76,54);

const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()] ;

let val;

//Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
val = Array.isArray("string");

// Get a single value: it is 0 based
val = numbers[3];
// Get the first value
val = numbers[0];

//Insert into an specific position in an array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS
//Add  on to end end of an array
numbers.push(250);
//Add on to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
//Splice values (startPosition, endPosition to remove)
numbers.splice(1,3);
//Reverse
numbers.reverse();
//Concatenate array
val = numbers.concat(number2);
//Sorting the array in Alphabetical order
val = fruit.sort();
//In this way sorts the array by the FIRST number
val = numbers.sort();

// Use the "compare function" to sort from the begin
// to the end
val = numbers.sort(function(x,y) {
  return x-y; //if x-y is negative, means that
  //x is lower than y, if positive is higher
  /*ex: function(100,36)
  if 100-36 = 64. so 100 is higher than 36*/
})
// if you want the reverse sort
val = numbers.sort(function(x,y) {
  return y-x;
})

// Find
function under50(num) {
  return num < 50;
}
// Find
function over50(num) {
  return num > 50;
}

//it returns the first number under 50
val = numbers.find(under50);

//it returns the first number over 50
val = numbers.find(over50);


console.log(numbers);
console.log(val);


