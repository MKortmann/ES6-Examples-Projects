
let re;
// Literal Characters
re = /hello/;
re = /hello/i; // i = case insensitive

// Metacharacter Symbols
re = /^h/i; // ^ = the string must start with
re = /d$/i; // ^ = the string must end with
re = /World$/i; // ^ = the string must end with the word World or WORLD or ... CASE insensitive;
re = /^hello$/i; // it says that it has start and end with hello. It must be hello
re = /h.llo/i; // the . match any ONE character. It is like wild card!
re = /h*llo/i; // * matches any character 0 or more times.
re = /gre?a?y/; //optional character. It says that e and a are optional! In this case will match when the str is gray or grey or gry!
re = /gre?a?y\?/i; // Escape character: \ ! It means that ? is handle as a character!

// String to match
const str = "Gray?";
// Log Results
const result = re.exec(str);
// if match we get a result array with the index meaning the number in the array that the first caracter matched
console.log(result);

function retest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

retest(re, str);
