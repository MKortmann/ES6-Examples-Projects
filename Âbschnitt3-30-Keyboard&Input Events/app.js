// Keyboard & Input Events

const form = document.querySelector("form");

const taskInput = document.getElementById("task");

const heading = document.querySelector("h5");

const select = document.querySelector("select");

// Clear inpute
// taskInput.value = '';



// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);


// Keyup: the same as keydown, but it fires when you release the key!
// taskInput.addEventListener("keyup", runEvent);

// // Keypress
// taskInput.addEventListener("keypress", runEvent);

// // Focus: when you click inside, the it is set as focus modus
// taskInput.addEventListener("focus", runEvent);
// // Blur: is the oposite of focus. when you click out
// taskInput.addEventListener("blur", runEvent);

// // Cut. fires the event when you cut the element inside the textbox.
// taskInput.addEventListener("cut", runEvent);

// Paste. fires the event when you cut the element inside the textbox.
// taskInput.addEventListener("paste", runEvent);

// Input: anything you do it will fires out.
// taskInput.addEventListener("input", runEvent);

// Change Event
select.addEventListener("change", runEvent);


function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  
  // get input value
  console.log(e.key);
  // another way to get the input value: it did not work for me because the textinput is not getting the number
  //So, I had to put the line below: taskInput.value = taskInput.value + e.key;
  taskInput.value = taskInput.value + e.key;
  console.log(e.target.value);

  // Changing the heading
  heading.innerText =  heading.innerText + e.key;

  // you can use e.preventDefault or in html type: action="#"
  e.preventDefault();
  
}