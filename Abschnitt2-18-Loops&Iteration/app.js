//Loops & Iterations

//FOR LOOP: normally used when is clear the number of iterations that you need.

// for(let i=0; i <= 10; i++) {
//   // console.log(`Number: ${i}`);
//   if(i === 2) {
//     console.log(`2 is my favorite number`);
//     //continue will stop the loop and goes to other iteration
//     continue
//   } 
//   console.log(`Number: ${i}`);
// }

// for(let i=10; i >= 0; i--) {
//   // console.log(`Number: ${i}`);
//   if(i === 2) {
//     console.log(`2 is my favorite number`);
//     //break: breaks and goes complety out of the loop
//     break
//   } 
//   console.log(`Number: ${i}`);
// }

//WHILE LOOP: normally used when it is unclear the number of iterations you want.

// let i = 0;

// while(i <= 10) {
//   console.log("Number " + i);
//   i++;
// }

// //DO WHILE

// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

//LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for(let i=0; i < cars.length; i++) {
  console.log(`The cars are: ${cars[i]}`);
}

//Cleaner an a better way if you try to loop through an array for some 
// //reason
// cars.forEach(function(car){
//   console.log(car);
// });


// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// //MAP
// const users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Sara"},
//   {id: 3, name: "Karen"},
//   {id: 3, name: "Steve"}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


//FOR IN LOOP
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
}

for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}

