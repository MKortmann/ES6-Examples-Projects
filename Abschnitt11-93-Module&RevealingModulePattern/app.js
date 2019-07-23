// Basic sctructure: BLUE PRINT

// (function() {
//   // Declare private vars and functions
//
//   return {
//     // Declare public var and functions
//   }
//
// })();

// Standard Module Pattern: UI Controler
// const UICtrl = (function() {
//   let text = "Hello World";
//
//   const changeText = function() {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   }
//   // What we return is public!
//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();
//
// UICtrl.callChangeText();


// REVEALING MODULE PATTERN: looking cleaner as the above method. However, the
// above method allows us to do more as console.log(); in the return funciton without
// needing to call the private method.

const ItemCtrl = (function() {
  // _Name write in this way to show that is a private variable
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added...");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  // revealing the methods
  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: "John"});
console.log(ItemCtrl.get(1));
