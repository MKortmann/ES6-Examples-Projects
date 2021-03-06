// // async make it return a promise
// async function myFunc() {
//   // return "Hello";
//
//   const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve("Hello"), 1000);
//   });
//
//   const error = true;
//
//   if (!error) {
//     // Wait until the promise is resolved
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }
//
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// The same code as above but using FETCH
async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //  Only proceed once its resolved
  const data = await response.json();

  //  Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
