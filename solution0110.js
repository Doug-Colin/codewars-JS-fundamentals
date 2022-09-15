/*
--------------- 7 Kyu - Maximum Gap (Array Series #4) ------------------

Instructions:

Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes:
    -Array/list size is at least 3 .

    -Array/list's numbers Will be mixture of positives and negatives also zeros_

    -Repetition of numbers in the array/list could occur.

    -The Maximum Gap is computed Regardless the sign

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(maxGap([13,10,2,9,5]),4);
    assert.strictEqual(maxGap([13,3,5]),8);
    assert.strictEqual(maxGap([24,299,131,14,26,25]),168);
    assert.strictEqual(maxGap([-3,-27,-4,-2]),23);
    assert.strictEqual(maxGap([-7,-42,-809,-14,-12]),767);
    assert.strictEqual(maxGap([12,-5,-7,0,290]),278);
    assert.strictEqual(maxGap([-54,37,0,64,-15,640,0]),576);
    assert.strictEqual(maxGap([130,30,50]),80);
    assert.strictEqual(maxGap([1,1,1]),0);
    assert.strictEqual(maxGap([-1,-1,-1]),0);
  });
});

--------------
PREP

Parameters: 
    - An array of integers. 

Return: 
    -The maximum difference between successive elements after the array is sorted. 

Example:
    - [13,10,5,2,9] => 4
    -

Psuedo Code:
    -sort array in descending order
        -.sort((a, b) b - a)

    -declare empty array to push differences into

    -for() loop through parameter array, and find difference between each element and the one following it, except for the final element as that will return NaN
        
    -push differences into array 

*/
//refactored:

function maxGap (numbers){
  
    //sort array descending
    numbers.sort((a, b) => b - a);
    
    //declare empty array to hold solution
    let differences = [];
    
    //loop through all elements except last, and push the differences between elements into array
    for (let i = 0; i < numbers.length - 1; i++) {
      differences.push(numbers[i] - numbers[i + 1])
  }
    //return max number
     return Math.max(...differences);
    
  }