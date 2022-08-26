/*
--------------- 8 Kyu - Vowel remover ------------------

Instructions:

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata


-------------
Sample Tests

const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

it("sample tests", () => {
  doTest('hello', 'hll');
  doTest('how are you today?', 'hw r y tdy?');
  doTest('complain', 'cmpln');
  doTest('never', 'nvr');
});

--------------
PREP

Parameters: a string
 
Return: the string without *lowercase* vowels.

Example: "hello" -->  "hll", "HELLO" -->  "HELLO"

Psuedo Code:
-use .replaceAll(regex, '')
- /[aeiou]/g
-replaceAll() didn't work; challenge written before ES6?
-used .replace() instead


*/

function shortcut (string) {
    return string.replace(/[aeiou]/g, '');
  }