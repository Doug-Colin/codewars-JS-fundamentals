/*
--------------- 7 Kyu - Sum of a sequence ------------------

Instructions:

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12)
    assert.strictEqual(sequenceSum(1, 5, 1), 15)
    assert.strictEqual(sequenceSum(1, 5, 3), 5)  
  })
})

--------------
PREP

Parameters: 
    -start and end, representing the beginning and end of a sequence of integers
    -step, or the increment 

Return: 
    - the sum of a sequence of integers, unless the begin value is greater than the end, then return 0.


Example:
    2,2,2 --> 2
    2,6,2 --> 12 (2 + 4 + 6)
    1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
    1,5,3  --> 5 (1 + 4)

Psuedo Code:
    -declare empty array to hold sequence

    -use while loop to iterate from start through end, adding the step value to start at each iteration 

    -return sum of array via reduce

    -if start>step, just return 0
*/


const sequenceSum = (start, end, step) => {
    //if start>step, just return 0
    if (start > end) {
      
      return 0
    
    //otherwise
    } else {
        // declare empty array to hold sequence
        let arr = []
        
        // use while loop to iterate from start through end, adding the step value to start at each iteration
        while (start <= end) {
        arr.push(start)
        start+=step;
        }
        //return sum via .reduce()  
        return arr.reduce((a,b) => a + b)
        }
  
  };