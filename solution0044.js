/*
---------------  Kyu - Remove First and Last Character ------------------

Instructions:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});


--------------

Psuedo Code:
-split() string into array of characters
-.slice(1, (strng.length -1))
-join()

*/

function removeChar(str){
    let strArr = str.split('');
    return strArr.slice(1, (strArr.length - 1)).join(""); 
   };