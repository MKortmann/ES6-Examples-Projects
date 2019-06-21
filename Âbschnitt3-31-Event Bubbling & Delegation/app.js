// Event Bubbling & Delegation

//EVENT BUBBLING
//Due to event bubbling, you click one time only in task list and all the parents of .card-title are fired!!!!
// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });
// //
// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });
// //
// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });
// //
// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

//EVENT DELEGATION!!! IT acts as opposite of event bubbling! So, if you have an element with many childrens. it would be nice to use event delegation. For example: here the children would be the list of items.

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete-item");
  // }

  //better way to do
  if(e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete-item");
    e.target.parentElement.parentElement.remove();
  }
}

