/*
--------------- 8 Kyu - Sum Mixed Array ------------------

Instructions:

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
  })
});

--------------
PREP

Parameters: 
    -an array of integers and integers as strings

Return: 
    -the sum of the array

Example:
    ([9, 3, '7', '3']) => 22

Psuedo Code:
    -use .map() to convert all elements to Number(), then .reduce() to fund sum of all elements. 

*/

function sumMix(x){
    return x.map(y => Number(y)).reduce((a,b) => a+b);
  }
