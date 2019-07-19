
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


// Brackets [] - Character Sets
re = /gr[ae]y/i; //means that the character can be a or e but has to be a or e.  gry will not work.
re = /[GF]ray/i; //it must be an uppercase G or F.
re = /[^GF]ray/i; //it will match anything except a G or F or g , g.
re = /^[GF]ray/i; //it means that has to begin with G or F.
re = /[A-Z]ray/; //match any uppercase letter
re = /[a-z]ray/; //match any lowercase letter
re = /[A-Za-z]ray/; //match any letter
re = /[0-9]ray/; //match any digit from 0-9
re = /[0-9][0-9]ray/; //match any digit from 0-9 with two "houses"

// Braces {} - Quantifiers
re = /Hel{2}o/i; //it will duplicate the l. it means will set the re expression to Hello. Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //it means we can have 2 to 4 l. It is a range.
re = /Hel{2,}o/i; // must occur at least {m} times. m start as 2.

// Parentheses {} - Grouping
re = /([0-9]x){3}/; //it match for example:str = "3x3x3x"; ... it looks only for the first characters. so it will also match if we type. "3x3x3x00988"

re = /^([0-9]x){3}$/; //Now it should be exactly 3x3x3



// String to match
const str = "3x3x3x";
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
