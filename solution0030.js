/*
--------------- 8 Kyu - Return sum of all positive integers of an arary   ------------------

Instructions:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });


--------------

Psuedo Code:
- .filter() for elements greater than one 
- for() loop, {arrayTotal += value} 
-return value
*/

function positiveSum(arr) {
    let posArray = arr.filter(elem => elem > 0);
    let total = 0;
    for (let value of posArray) {
       total += value;
  }
    return total;
  }