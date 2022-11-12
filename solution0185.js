/*
--------------- 7 Kyu - Round up to the next multiple of 5 ------------------

Instructions:

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
      ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)
    );
  })
});


--------------
PREP

Parameters: 
    -n, an integer  

Return: 
    -the next multiple of 5 that is greater than or equal to n


Example:
    input:    output:
    0    ->   0
    2    ->   5
    3    ->   5
    12   ->   15
    21   ->   25
    30   ->   30
    -2   ->   0
    -5   ->   -5

Psuedo Code:
    -use while loop to iterate n++, while n%5 doesn't equal zero, and return n.


*/

function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }

//----- Best Practices / Lessons Learned ---------------

//given integer n, how do you calculate the next (higher) multiple of 5?  
//  -divide n by 5 and round up via Math.ceil()
//  -multiple that by 5

function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }