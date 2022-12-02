
/*
--------------- 8 Kyu - Remove exclamation marks ------------------

Instructions:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});


--------------
PREP

Parameters: 
    -s, a string
    

Return: 
    -string without '!'


Example:
    N/A

Psuedo Code:
    -.split, .map(), & remove '!',.join & return
*/

function removeExclamationMarks(s) {
    return s.split('').map((x) => {
    return x == '!' ? '' : x
  }).join('')
  }

//----- Best Practices / Lessons Learned ---------------
