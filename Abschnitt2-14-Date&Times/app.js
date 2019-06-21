//Dates & Times
let val;

//if you do not pass any argument to the Date, by default, it will be todays date.
//it is zero based. Zero is january!
const today = new Date();
let birthday = new Date("09-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("09/10/1981");

val = today.getMonth();
//return the day
val = today.getDate();
//it get the day in number respective to sunday-> 0, monday->1, tuesday->2 and so on. 
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
//get the timestamp, the amount of time since 
//january 1st 1970
val = today.getTime();

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(typeof birthday);
