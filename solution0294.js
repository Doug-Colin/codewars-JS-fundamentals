/*
--------------- 7 Kyu -  ------------------

Instructions:

Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
  });
});

--------------
PREP

Parameters: 
    -iput, an array of integers and/or floats

Return: 
    -the sum of all even integers

Example:
    -[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> 30

Psuedo Code:
    -.map() input array, and use ternary to return elements if they are integers and even (%2==0)
*/

//-------------------- Solution (without comments) -------------------------------------

function sumEvenNumbers(input) {
    return input.map((x) => {
        return Number.isInteger(x) && x % 2 == 0 ? x : 0;
        }).reduce((a, b) => a + b)
}

//-------------------- Solution (with comments) ----------------------------------------

function sumEvenNumbers(input) {
    //.map() input array
    //use ternary statement to return elements only if they are integers and even, otherwise return 0
    //use .reduce() to find sum
    return input.map((x) => {
        return Number.isInteger(x) && x % 2 == 0 ? x : 0;
        }).reduce((a, b) => a + b)
}

//--------------- Best Practices / Lessons Learned -------------------------------------

