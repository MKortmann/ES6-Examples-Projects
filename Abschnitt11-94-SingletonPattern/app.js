
// Singleton: with singleton we can not have more than one instance!
// it is actually a manifestaion of the module pattern. It is a anonimously function that can only return the same instance! It mantains also a private referece.
// Example of use: if you want only one user log at time or create at time.
// Negative: hard to debug
const Singleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object({name: "Brad"});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceA === instanceB);
