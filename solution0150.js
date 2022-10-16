/*
--------------- 7 Kyu - Are the numbers in order? -------------------

Instructions:

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Description Examples", () => {
  it("Should pass description examples", () => {
    assert.strictEqual(inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
    assert.strictEqual(inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
    assert.strictEqual(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
    assert.strictEqual(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
  });
});

--------------
PREP

Parameters: 
    -an array of integers

Return: 
    -true if array is in ascending order, false otherwise


Example:
    inAscOrder([1,2,3,4,5]); // returns true
    inAscOrder([1,6,10,18,2,4,20]); // returns false

Psuedo Code:
    -.filter() array for elements that are less than the following element.
            
    -if all elements meet this condition, filtered array length will be one element shorter because the final element has no following element. 

    -if filtered array.length === original array.length, return true; otherwise return false. 


*/




function inAscOrder(arr) {
  //filter array for elements that are less than the following element.
  //compare filtered array's length to original array.length-1.
  //if equal, all elements are in ascending order.
  //Note: filtered array length will be one element shorter because the final element has no following element. 

return arr.filter(x => x < arr[arr.indexOf(x)+1]).length == arr.length - 1 ? true : false;
  
}