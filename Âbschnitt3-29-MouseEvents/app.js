// Mouse Events

const clearBtn = document.querySelector(".clear-tasks");

const card = document.querySelector(".card");

const heading = document.querySelector("h5");


// Click
clearBtn.addEventListener("click", runEvent);

// DoubleClick
clearBtn.addEventListener("dblclick", runEvent);

// Mouse down
clearBtn.addEventListener("mousedown", runEvent);

// Mouse Up
clearBtn.addEventListener("mouseup", runEvent);

// Mouse Enter: fires when you got over the element! The Main Element.
card.addEventListener("mouseenter", runEvent);

// Mouse Leave
card.addEventListener("mouseleave", runEvent);

// Mouse Over: fires when you get over an elemnt inside the card. And also inside the card. It works as mouseEnter + mouseOverElementsInsideTheCard
card.addEventListener("mouseover", runEvent);

// Mouse Out
card.addEventListener("mouseout", runEvent);

// Mousemove: any movement inside an element fires this event.
card.addEventListener("mousemove", runEvent);



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  
}

