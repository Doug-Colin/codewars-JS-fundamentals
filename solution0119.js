/*
--------------- 8 Kyu - Array plus array ------------------

Instructions:

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => { 
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  })
})

--------------
PREP

Parameters: 
    -two arrays of integers

Return: 
    -the sum of the elements of both arrays

Example:
    -none given

Psuedo Code:
    -use .concat() to combine arrays
        arr1.concat(arr2)

    -use .reduce() to find sum of all elements
        .reduce((a, b) => a + b)

*/


function arrayPlusArray(arr1, arr2) {
    //use .concat() to combine arrays
    //use .reduce() to find sum of all elements
    return arr1.concat(arr2).reduce((a, b) => a + b); 
  }

