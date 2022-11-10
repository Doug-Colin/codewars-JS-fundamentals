/*
--------------- 7 Kyu - Cats and shelves ------------------

Instructions:

Description
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test cases", function() {
  it("Test case in description", function() {
    assert.strictEqual(solution(1, 5), 2);
  });
});

--------------
PREP

Parameters: 
    -Start and finish shelf numbers (always positive integers, finish no smaller than start)

Return: 
    -the minimum number of jumps to go from start to finish


Example:
    Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

Psuedo Code:
    -find steps needed to climb by subtracting start from finish

    -the cat can only jump up 1 step, or 3 steps.  

*/


function solution(start, finish) {

    let stepsNeeded = finish-start
  
    let bigJumps = Math.floor(stepsNeeded/3)
  
    let smallJumps = stepsNeeded % 3
  
    return bigJumps + smallJumps
  }