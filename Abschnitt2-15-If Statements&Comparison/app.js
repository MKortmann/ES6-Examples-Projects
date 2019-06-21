//If Statements

// if(something) {
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
// if( id == 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //NOT EQUAL TO
// if( id != 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //EQUAL to value and type
// if( id === 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //NOT EQUAL to value and type
// if( id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// Test if undefined 
// if(typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);  
// } else {
//   console.log("NO ID");
// }

//GREATER OR LESS THAN
if(id <= 100) {
  console.log(`CORRECT`);  
} else {
  console.log("INCORRECT");
}

//IF ELSE
const color = "red";

// if(color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("The color is not blue or red!");
// }

//Logical Operators
const name = "Steve";
const age = 70;

//AND &&
if(age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age > 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR ||
if(age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registerd for the race`);
}

//Ternary operator
console.log(id === 100 ? "correct" : "incorrect");

let variable = id === 102 ? "correct" : "incorrect";

console.log(`works: ${variable}`)

//Without Braces (not recommended)
if(id === 1000)
  console.log(`CORRECT`);
else 
  console.log("INCORRECT");


