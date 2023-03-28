/*
--------------- 5 Kyu - Maximum subarray sum ------------------

Instructions:

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers.

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

-------------
Sample Tests

const { assert } = require ('chai');

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});

--------------
PREP

Parameters: 
    -arr, an array of integers

Return: 
    -the maximum sum of a contiguous subsequence in the array

Example:
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    // should be 6: [4, -1, 2, 1]

Psuedo Code:
    -use Kadanes algorithm 
        https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
        (https://stackoverflow.com/questions/32367032/kadanes-algorithm-explained)
*/

//-------------------- Solution (without comments) -------------------------------------

function maxSequence (arr) {
    
    let sum = 0,
    result = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        result = Math.max(sum, result);
    }
    return arr.length == 0 || result < 0 ?  0 : result;
};

//-------------------- Solution (with comments) ----------------------------------------

function maxSequence (arr) {
    //declare sum and result variables and assign starting points
    //must declare result like this as let cannot be used for Infinity / -Infinity
    let sum = 0,
    result = -Infinity;
    
    //use Kadanes algorith to find value of maximum contiguous subarray sequence
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        result = Math.max(sum, result);
    }
    //if param arr is empty or negative, return 0 as instructed, otherwise return result 
    return arr.length == 0 || result < 0 ?  0 : result;
};

//--------------- Best Practices / Lessons Learned -------------------------------------

