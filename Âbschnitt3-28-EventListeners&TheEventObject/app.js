//Event Listeners & The Event Object

// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   //In html we to place a hash # in href="#". It works not only as place hold but also avoid the website to reload when you click it. I mean: to follow the link.
//   console.log("Hello World");  

//   //there is also others way to stop the default behaviour.
//   // e.preventDefault();

// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  console.log("Clicked");  

  let val = e;

  // Eventtarget element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  //DOMTokenList
  val = e.target.classList;

  //changing the text of the button!
  e.target.innerText = "Hello";

  //Event type: in this case is a click event
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // COORDS EVENT RELATIVE TO THE WINDOW
  // Coords event relative to the window: Y
  val = e.clientY;
  // Coords event relative to the window: X
  val = e.clientX;


  // COORDS EVENT RELATIVE TO THE BUTTON ITSELF
  val = e.offsetY;
  val = e.offsetX;

  
  console.log(val);
}