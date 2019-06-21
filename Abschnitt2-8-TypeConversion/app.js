let val;

//number to string
val = String(555);
val = String(4+4)

//Bool to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); //NaN: means not a number
val = Number([1,2,3]);

val = parseInt("100");
val = parseFloat("100.33");


//output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);