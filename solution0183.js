/*
--------------- 6 Kyu - Sort the odd ------------------

Instructions:

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]),[]);
  });
});

--------------
PREP

Parameters: 
    -an array of integers

Return: 
    -an array that has the same values, with the even numbers in their original positions, and the odd numbers in ascending order


Example:
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Psuedo Code:
    -filter array for odd numbers (number % 2 !== 0):
            let odd = array.filter((x) => {
            return !x % 2 == 0
        })

    -.sort() them ascending

    -.map() original array
        if an element is odd, replace it with oddAscending array via .shift(). otherwise leave it.

    -return solution
*/


function sortArray(array) {
  
    //create array of odd numbers and sort() them ascending
    let oddAsc = array.filter( (x) => { return x % 2 !== 0}).sort((a,b) => a - b);
    
    //map() original array, and if an element is odd, replace it the odd-ascending elements via .shift(). 
    return array.map((x) => {
      return x % 2 !== 0 ? oddAsc.shift() : x;
    } )
  }
