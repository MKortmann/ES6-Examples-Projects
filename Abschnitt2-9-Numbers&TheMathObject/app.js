const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-10);
val = Math.pow(8,3);
val = Math.max(1,2,3,4);
val = Math.min(3,2,4,5,-1);
//gives us a random decimal between 0-1;
val = Math.random();
val = Math.random()*10;
//between 1 and 10 but not decimal:
val = Math.floor(Math.random() * 10 +1);
console.log(val);
