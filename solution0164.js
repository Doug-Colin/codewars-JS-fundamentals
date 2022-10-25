/*
--------------- 8 Kyu - Grasshopper - Summation ------------------

Instructions:

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

-------------
Sample Tests

const assert = require('chai').assert;

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})

--------------
PREP

Parameters: 
    -num, a positive integer

Return: 
    -the sum of all numbers from 1 through param num


Example:
    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

Psuedo Code:
    -declare variable to hold solution and assign 0

    -use for() loop to iterate through numbers 1 through num

    -add each number to solution variable via addition-assignment operator

    -return solution


*/



var summation = function (num) {
    //create variable to save addition of numbers from 1 to num, assign 0 
    let solution = 0
    
    
    //use for() loop to iterate through numbers 1 through num
    //use addition-assignment operator to add each number to solution as we iterate through them  
    for (let i = 1; i <= num; i++) {
      solution += i
    }
    
    //return solution variable which will be total
    return solution;
  }