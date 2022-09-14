/*
--------------- 7 Kyu - Array Leaders (Array Series #3) ------------------

Instructions:

    Given an array/list [] of integers , Find all the LEADERS in the array.

    Definition: An element is leader if it is greater than The Sum all the elements to its right side.

Notes

    -Array/list size is at least 3 .

    -Array/list's numbers Will be mixture of positives , negatives and zeros

    -Repetition of numbers in the array/list could occur.

    -Returned Array/list should store the leading numbers in the same order in the original array/list .


-------------
Sample Tests

const {assert} = require("chai");

describe('Basic Tests', function(){
  it('Positive Values', function(){
    assert.deepEqual(arrayLeaders([1,2,3,4,0]), [4]);
    assert.deepEqual(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);
  });
  it('Negative Values', function(){
    assert.deepEqual(arrayLeaders([-1,-29,-26,-2]), [-1]);
    assert.deepEqual(arrayLeaders([-36,-12,-27]),  [-36,-12]);
  });
  it('Mixed Values', function(){
    assert.deepEqual(arrayLeaders([5,-2,2]), [5,2]);
    assert.deepEqual(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);
  });
});

--------------
PREP

Parameters: 
    - An array of integers that may contain pos, neg, and zero 

Return: 
    - All elements in the array that are greater than the sum of all the elements to their right.

Example:
    - ({1, 2, 3, 4, 0}) ==> return {4}   (4 is the only # greater than sum of elements following it; whereas 0 is equal to that)
    -

Psuedo Code:
    -declare variable and assign filter() it with index param, using slice() to reference following elements. 
        - const leaders = numbers.filter((element, index) => { element > numbers.slice(0, index)} )

    -filter for elements greater than sum of following elements via .reduce() 
    
        -

    -
        -

*/
//refactored:

function arrayLeaders(numbers){
    return numbers.filter((x, index) => numbers.slice(index + 1).reduce((sum, b) => sum + b, 0) < x)
  }