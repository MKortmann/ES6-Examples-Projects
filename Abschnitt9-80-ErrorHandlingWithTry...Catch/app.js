
const user = {email: "jdoe@gmail.com"};

//  Cool from tryCatch is that we can handle errors without stop the program
try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();
  //
  // Will produce SyntaxError
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent("%");

  // Throw our own error messages
  if(!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }

} catch(e) {

  console.log(`User Error: ${e.message}`);
  // Get the message and the type of error
   // console.log(e);
   // console.log(`${e}: it is null`);
   // Get only the message error
  // console.log(e.message);
  // Get only the type of error
  // console.log(e.name);
  // // test the type of error
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof SyntaxError);

} finally {
  console.log("Finally runs regardless of result...");
}

console.log("Program continues");
