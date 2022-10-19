/*
--------------- 7 Kyu - No oddities here ------------------

Instructions:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
  })

--------------
PREP

Parameters: 
    -An array of integers 

Return: 
    -the even integers


Example:
    noOdds( [0,1] ), [0
    noOdds( [0,1,2,3] ), [0,2]

Psuedo Code:
    -use .filter() to return even numbers via %2 == 0

  


*/



function noOdds( values ){

    //use .filter() to return even numbers via %2 == 0
    return values.filter(x => x % 2 == 0);
  }
