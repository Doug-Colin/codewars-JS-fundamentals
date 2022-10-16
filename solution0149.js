/*
--------------- 8 Kyu - Reversed sequence ------------------

Instructions:

Build a function that returns an array of integers from n to 1 where n>0.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});

--------------
PREP

Parameters: 
    -a number

Return: 
    - an array of integers from the number parameter through 1, descending 


Example:
    n=5 --> [5,4,3,2,1]

Psuedo Code:
    -declare empty array to hold solution
    -use for loop to loop backwards from n to 1
    -push() each iterated number into the solution array
    -return solution array

*/


const reverseSeq = n => {
  
    //declare empty array to hold solution
    let solution = []
    
    //use for loop to loop backwards from n to 1
    //push() each iterated number into the solution array
    for (let i = n; i > 0; i --) {
       solution.push(i)
    }
    //return solution array
    return solution
  };

