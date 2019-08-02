
// adding a module from node_modules: express framework
// const person = require("express");
// adding a module here
// it helps a lot because all the modules, all the js files will be compiled
// in one only file called: app.bundle.js ! Located at build folder!

// CommonJS Module Syntax
// const person = require("./mymodule1");

// ES2015: different type of syntax
// import { person, sayHello } from "./mymodule2";
// console.log(person.name);
// console.log(sayHello());

// import * as mod from "./mymodule2";
// console.log(mod.person.name);
// console.log(mod.sayHello());


import greeting from "./mymodule2";
console.log(greeting);
