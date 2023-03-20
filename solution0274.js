/*
--------------- 8 Kyu - Exclamation marks series #1: Remove an exclamation mark from the end of string ------------------

Instructions:

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

-------------
Sample Tests

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
	});
});

--------------
PREP

Parameters: 
    -string, a string

Return: 
    -the string with the last char removed if it is '!', otherwise return string as is

Example:
    remove("Hi!") == "Hi"

Psuedo Code:
    -check if the last char of string is '!'

    -if so, split string into array or characters and use .slice to remove last char

    -join it back together and return

    -if last char is not '!' return string as is
*/

//-------------------- Solution (without comments) -------------------------------------

function remove (string) {
    
    if (string.charAt(string.length-1) == '!') {
      return string.split('').slice(0, string.length-1).join('') 
    } else {
      return string 
    }
  }

//-------------------- Solution (with comments) ----------------------------------------

function remove (string) {
    //check if the last char of string is '!'
    //if so, split string into array or characters and use .slice to remove last char
    //join it back together and return
    if (string.charAt(string.length-1) == '!') {
      return string.split('').slice(0, string.length-1).join('') 
    } else {
      //if last char is not '!' return string as is
      return string 
    }
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//.replace() will remove the first instance of the target character unless otherwise instructed by regex
// Thus following solution is much cleaner
const remove = s => s.replace(/!$/, '');

//There is also a .endsWith() string method!
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }
