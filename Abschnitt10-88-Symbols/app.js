// Symbols are more used for UNIQUE OBJECT KEYS
// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(typeof sym1);
//
// // the symbol can not be the same!!! We will always get false!
// console.log(Symbol() === Symbol());
// // the symbol can not be the same!!! We will always get false! Also with identifier (ex.: "123") we will get false:
// console.log(Symbol("123") === Symbol("123"));
//
// // two ways to convert symbol to string
// // Method 1:
// console.log(`Hello ${String(sym1)}`);
// // Method 2:
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};
// We are using the actual symbol as a property
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
// here, I am not setting a symbol. I am setting a simple property
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

console.log(myObj);

// Symbols are not enumerable in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are by JSON.stringify
// here it works. It logs as JSON STRING
console.log(JSON.stringify({key: "prop"}));
// here the same example as above with SYMB. It will not parse and we will get an empty object!
console.log(JSON.stringify({[Symbol("sym1")]: "prop"}));
