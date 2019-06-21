//DOM

//Window methods / Objects / Properties

// Alert
// window.alert("Hello World!");

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm("Are you sure")) {
//   console.log("YES");  
// } else {
//   console.log("NO");
// }


//Outer Height & Width of the window: it encloses the complete
//browser dimensions
// let val;
// val = window.outerHeight;
// val = window.outerWidth;

// //Inner Height & Width of the window

// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
//very nice: it gets the parameter in the search browser bar!!
val = window.location.search;

// Redirect the homepage to some extern website
// window.location.href = "http://google.com";

// Reload
// window.location.reload();

//History Object
//go back the history
// window.history.go(-2);

//history length
// val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);


