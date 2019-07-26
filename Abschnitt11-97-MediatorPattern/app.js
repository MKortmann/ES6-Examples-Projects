// Mediator Pattern: another behaviour pattern as observer. The idea is to have a
// mediator which is basically a interface for communicate which colleagues that are
// intermediate objects. One of the best example for this is a ChatRoom.
// The users are the colleagues of the chatroom
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// The Chatroom is the mediator
const Chatroom = function() {
  // list of users
  let users = {};

  return {
    register: function(user) {
      users[user.name] = user;
      users.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for(key in users) {

          if( (users[key] !== from) && (key !== "chatroom")) {
            debugger
                users[key].receive(message, from);
          }
        }
      }
    }
  }
}


const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hello Jeff", jeff);
sara.send("Hallo Brad, I am here", brad);
jeff.send("Hello Everyone");
