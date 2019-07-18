// Regular Expressions: basic used to describe a pattern of caracters! Pattern match, validation, email, phoneNumber... Things that have such patterns...

let re;
// example of regular expression
// re = /hello/;
// i make it CASE INSENSITIVE
re = /hello/i;
re = /hello/g; // Global search, it gonna look the entire insance of hello...

// console.log(re);
// // give the expression without slashes
// console.log(re.source);

// exec() - return result in an array if there is a match or it is return null if there is no match.

// const result = re.exec("Hi there! hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// // throw the input string!
// console.log(result.input);

// test() - returns true or false if there is a match! It takes in consideration up and lower case. If you make it case insensitive you have to declare re like this: re = /helloio;

// const result = re.test("hello");
// console.log(result);

// match() - return result array or null
// const str = "hello There";
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match and if not found returns -1 !
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
const str = "hello There";
const newStr = str.replace(re, "hi");
console.log(newStr);
