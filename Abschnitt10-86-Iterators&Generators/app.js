// Iterators & Generators: they are very similar and they are used to iterated about something
// Iterators: kind a like of advanced loops that can be paused
// Generators: are like a functions that can be paused and can return multiple values.

// Iterator example
// function nameIterator(names) {
//   let nextIndex = 0;
//
//   return {
//     next: function() {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false} :
//       { done: true}
//     }
//   }
// }
//
// // Create an array of names
// const namesArr = ["Jack", "Jill", "John"];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);
//
// // returns an object: {value: "Jack", done: false}
// console.log(names.next());
// // returns only the value that in this case is: Jill
// console.log(names.next().value);
// // the third time that you call it you will get John
// console.log(names.next().value);
// // Will return: {done: true} Because it arrives the end of the array
// console.log(names.next());

// Generator example
// * this sign * tells javaScript that it is a generator
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();

// Output: {value: "Jack", done: false}
console.log(name.next());
// If you want to get only the value do:
console.log(name.next().value);
// Now you will get the last value: John
console.log(name.next().value);

// ID Creator: Example of generator
function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
