/*
--------------- 8 Kyu - Lario and Muigi Pipe Problem ------------------

Instructions:

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
  });
});

--------------
PREP

Parameters: 
    -numbers, an array of integers in ascending order

Return: 
    -an array of iteration from the first element to the last of numbers, in increments of one

Example:
    Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

Psuedo Code:
    -use for loop to iterate from the numbers array's first to last element, in increments of one

    -.push() increments into another array

    -return that array


*/

//-------------------- Solution- version with comments below -------------------------------------

function pipeFix(numbers){
    let solution = []
    
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++) {
    solution.push(i)
    }
    
    return solution
}
//-------------------------- Solution With Comments ------------------------------------

function pipeFix(numbers){
    //declare empty array variable to hold solution
    let solution = []
    
    //using for loop, iterate from the first element in the parameter array through the last, in incremenets of one
    //.push() each iteration into our solution array
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++) {
    solution.push(i)
    }
    //return our solution array
    return solution
}

//----- Best Practices / Lessons Learned ---------------
//

