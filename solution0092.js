/*
--------------- 8 Kyu - Calculate average ------------------

Instructions:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.



-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(find_average([1,1,1]), 1);
    assert.strictEqual(find_average([1,2,3]), 2);
    assert.strictEqual(find_average([1,2,3,4]), 2.5);
  });
});  


--------------
PREP

Parameters: an array of numbers.

Return: the average of the given numbers. If param is an empty array, return 0.

Example: [1,2,3,4] => 2.5

Psuedo Code:
-use forEach() loop to iterate through numbers in array
-declare sum variable, use += to add them together.
-divide sum variable by array.length
use conditonal/ternary to return 0 if array is empty by checking if array.length === 0
*/

function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length
     }

