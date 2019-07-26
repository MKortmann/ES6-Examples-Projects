// Observer Pattern: it allows us to subscribe and unsubscribe to certain events, functionality. It gives us a really nice subscription models. It is very interesting. It can be used to notifies the DOM for certain elements to be updated... AngularJS relies heavily on this pattern through event manager...

// Example with ES5
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {

    // Only about the filer: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // So it: Filter out from the list whatever matches the callback function. If there
    // is no match, the callback gets to stay on the list. The filter returns a new
    // list reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      // Call the function to each event subscribed. Each event subscribed is a function.
      item.call();
    });
  }
}

// instantiation
const click = new EventObserver();

// Event listeners
document.querySelector(".sub-ms").addEventListener("click", function() {
  // pass the function to be subscribe to the click object
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  // pass the function to be unsubscribe to the click object
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector(".sub-s").addEventListener("click", function() {
  // pass the function to be subscribe to the click object
  click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function() {
  // pass the function to be unsubscribe to the click object
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  // fire the events that you have subscribed
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
