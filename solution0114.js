/*
--------------- 7 Kyu - Row Weights ------------------

Instructions:

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
    
-Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(minValue([1, 3, 1]), 13);
    assert.strictEqual(minValue([4, 7, 5, 7]), 457);
    assert.strictEqual(minValue([4, 8, 1, 4]), 148);
    assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
    assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
    assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
    assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
    assert.strictEqual(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
    assert.strictEqual(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
  });
})

--------------
PREP

Parameters: 
    -An array of positive integers (no neg, 0)

Return: 
    -The smallest number that can be formed from the given digits, without repeating. 

Example:
    -minValue ({1, 3, 1})  ==> return (13)
    
    -minValue({5, 7, 5, 9, 7})  ==> return (579)

Psuedo Code:
    -remove duplicates by declaring new Set from given array
        -const uniqueNums = new Set(values)

    -create array from Set and sort ascending
        const uniqueArray = Array.from(uniqueNums).sort((a, b) => a - b)

    -.join() array (converts to string), convert back to number via parseInt, return
        return parseInt(uniqueArray.join(''))

*/

function minValue(values){

    const uniqueNums = new Set(values)
  
    const uniqueArray = Array.from(uniqueNums).sort((a, b) => a - b);
  
    return parseInt(uniqueArray.join(''))
  }

//refactored:

function minValue(values){

    //remove duplicates by declaring new Set from given array, sort ascending
    const uniqueArray = Array.from(new Set(values.sort((a, b) => a - b)));
  
    //.join() array (converts to string), convert back to number via parseInt, return
    return parseInt(uniqueArray.join(''))
  }