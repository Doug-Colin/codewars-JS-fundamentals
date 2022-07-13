/*
--------------- 8 Kyu - Abbreviate a Two Word Name  ------------------

Instructions:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});

--------------

Psuedo Code:
-split string into two with .split() and return the first character of each string with .toUppercase 
*/

// This is my solution and it works with all test cases in the console, but not on Codewars... okay- It didn't work because you kept console.log() instead of a return statement, and because you lacked .toUpperCase() for the test with a lower case name. Details. 

function abbrevName(name){
    const splitName = name.split(' ');
    const lastName = splitName[1];
    return(`${name.charAt(0)}.${lastName.charAt(0)}`.toUpperCase());
    }

    // Note also that if you want to access the characters of different words in an array that's split, or one where each element is a single word, you can do so with the following syntax:

splitName[0][0]; /*this would mean index zero of the array, and then index 0 of that element's string. Note with numbers you may have to use toString() etc. 

Thus the previous code could be refactored as follows:
*/
function abbrevName(name){
  
const splitName = name.split(' ');
return(`${splitName[0][0]}.${splitName[1][0]}`.toUpperCase());
}
