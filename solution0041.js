/*
--------------- 8 Kyu - Removing Elements ------------------

Instructions:

Instructions

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
  })
});


--------------

Psuedo Code:
-remove every other element starting at index 1, then index 3, etc.
-.filter() through array for even index numbers using modulus
-if (array[index] % 2 = 0)

Lessons Learned
-if you need to iterate through an array or filter it by index number, you cannot simply use the arr[index] to refer to the index number. 
-You must use the filter() syntax as follows:
array.filter(fucntion(elem, index0 {return index % 2 === 0;}); etc
*/

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }