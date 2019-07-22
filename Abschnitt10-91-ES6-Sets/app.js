// The Set object lets you store unique values of any type, whether primitive values or object references. IF YOU TRY TO ADD THE SAME VALUE TWICE, IT WILL NOT ALLOW YOU TO ADD IT AGAIN. THIS IS GREAT ABOUT SET

// Sets are basically a list/set of unique values of any type!

const set1 = new Set();

// Add values to set different value types
set1.add(100);
set1.add("A string");
set1.add({name: "John"});
set1.add(true);
set1.add(100);

// Another way to do!
// const set2 = new Set([1, true, "string"]);
// console.log(set2);

// Get count
// console.log(set1.size);
//
// // Check for values
// console.log(set1.has(100));
// // You can also do some expressions
// console.log(set1.has(50 + 50));
//
// // here we get false! Why? Because they are pointing to a different location in the memory!!!
// console.log(set1.has({name: "John"}));
// // Another example that should clarify the statement above:
// // They are not primitive type!!!
// console.log({name: "John"} === {name: "John"});
//
// // Delete from set
// set1.delete(100);
// console.log(set1);

// Iterating through sets

// For...of
// for(let item of set1) {
//   console.log(item);
// }
//
// // For...of (same result as above)
// for(let item of set1.values()) {
//   console.log(item);
// }

// ForEach Loop
// set1.forEach((value)=> {
//   console.log(value);
// })

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
