//DOM MULTIPLE ELEMENTs SELECTORS

//document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");

// console.log(items);

// console.log(items[0]);


// // You can access the elements as an array

// items[0].style.color = "red";

// items[3].textContent = "Hello";

// // Another way to do: 
// // Here you select all the items with the class name collection-item that are exclusively INSIDE the ul html tag.
// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

// console.log(listItems);


//GET ELEMENTS BY TAGNAME

// let lis = document.getElementsByTagName("li");

// console.log(lis);
// console.log(lis[0]);

// // You can access the elements as an array
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// //convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index} Hello World`;

// });

// console.log(lis);

//ANOTHER WAY: USING document.querySelectorAll

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");

const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(item, index) {
  item.style.background = "#ccc"
});

liEven.forEach(function(item, index) {
  item.style.background = "yellow";
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "red";
}

console.log(items);


