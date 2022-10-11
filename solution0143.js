/*
---------------  Kyu -  ------------------

Instructions:

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
  })
})

--------------
PREP

Parameters: 
    -an array of numbers, and a number 'limit'

Return: 
    -true if all the numbers in array are <= limit, otherwise false

Example:
    -([66, 101], 200) --> true
    -([78, 117, 110, 99, 104, 117, 107, 115], 100) --> false
Psuedo Code:
    -filter() array for numbers greater than limit

    -if length of filtered array is > 0, there's numbers that are greater than limit

    -return false if so, otherwise return true

*/


function smallEnough(a, limit){
  
    //filter() array for numbers greater than limit
    //if length of filtered array is > 0, there's numbers that are greater than limit
    //return false if so, otherwise return true
  return a.filter(number => number > limit).length > 0 ? false : true;
  }