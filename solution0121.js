/*
--------------- 7 Kyu - Sort Numbers ------------------

Instructions:

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])
  })
})

--------------
PREP

Parameters: 
    -an array of numbers.

Return: 
    -the array of numbers sorted ascending, or, if arg is an empty array, null, or 0, return an empty array. 

Example:
    -solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    -solution(null); // should return []

Psuedo Code:
    -if array is null or empty, return empty array
        if (nums === null || nums === []) {
            return [];
        }
    
    -otherise, return array in ascending order via .reduce()
        else {
            return nums.reduce((a, b) => a - b);
        }

*/
//refactored:

function solution(nums){
    if (nums === null ) {
      return [];
    } else {
      return nums.sort((a, b) => a - b);
    }
  }
  
/*
Best practice answers are the two following; explore why:

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
  return nums ? nums.sort(function(a, b) { return a - b;}) : [];
}

*/
