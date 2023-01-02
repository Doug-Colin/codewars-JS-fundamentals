/*
--------------- 8 Kyu - Powers of 2 ------------------

Instructions:

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});

--------------
PREP

Parameters: 
    -n, a non-negative integer
  

Return: 
    -Evaluate and return 2**0 through 2**n

Example:
  n = 0  ==> [1]        # [2^0]
  n = 1  ==> [1, 2]     # [2^0, 2^1]
  n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Psuedo Code:
    - use for loop to iterate from numbers 0 through n

    - on each iteration, evaluate 2**i, and .push() into an array

    - return arrayt


*/

//--------------- Solution ------------------------

function powersOfTwo(n){

// declare powers variabe to hold our solution
let powers = []

//use for loop evaluate 2 to the power of each number from 0 through n
//on each iteration, .push() result into powers array 
for (let i = 0; i <= n; i++) {
  powers.push(2**i)
}
  return powers;
}
