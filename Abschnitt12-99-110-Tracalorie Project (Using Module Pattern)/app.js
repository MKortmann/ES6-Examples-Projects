// Basic sctructure: BLUE PRINT

// (function() {
//   // Declare private vars and functions
//
//   return {
//     // Declare public var and functions
//   }
//
// })();

// Storage Controller


// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: "Steak Dinner", calories: 1200},
      {id: 1, name: "Cookie", calories: 400},
      {id: 2, name: "Eggs", calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    // Declare public var and functions
    logData: function() {
      return data;
    }
  }

})();

// UI Controller
const UICtrl = (function() {

  return {
    // Declare public var and functions
  }

})();


// App Controller

const App = (function(ItemCtr, UICtrl) {

  // Public methods
  return {
    // Declare public var and functions
    init: function() {
      console.log("Initializing App...");
    }
  }
})(ItemCtrl, UICtrl);

// Initialize app
App.init();
