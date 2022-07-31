/*
--------------- 7 Kyu -Exes and Ohs  ------------------

Instructions:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});

--------------

Psuedo Code:

- make string lower case
- .split('')
- .filter() for x
- .length
- == same with 'o'

Lessons:
-This worked but is verbose
-could be accomplished more efficiently with .match() and a regex
-regex (//) would search for the first instance of character x
-the g flag, for global, can be used to search for all instances of a character
-the i flag, for insensitive, makes search case-insensitive
-so .match(/x/gi) searches for all instances of character x, upper or lower case

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

*/

function XO(str) {
    return (str.toLowerCase().split('').filter(x => x === 'x').length) == (str.toLowerCase().split('').filter(o => o === 'o').length)
   }