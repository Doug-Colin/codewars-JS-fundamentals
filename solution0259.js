/*
--------------- 8 Kyu - Grasshopper - Array Mean ------------------

Instructions:

Find Mean
Find the mean (average) of a list of numbers in an array.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe('get average', function () {
  it('should return the average', function () {
    Test.assertEquals(findAverage([1]), 1)
    Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
  })
})

--------------
PREP

Parameters: 
    -nums, an array of integers

Return: 
    -the mean (average) of the integers

Example:
    [1, 3, 5, 7] --> 4

Psuedo Code:
    -use .reduce(()) to add, /4, return
*/

//-------------------- Solution (without comments) -------------------------------------

var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b)/nums.length
  }

//-------------------- Solution (with comments) ----------------------------------------

var findAverage = function (nums) {
    //use .reduce() method to find sum of digits in nums array
    //divide that by the number of elements in the array via .length property, return
    return nums.reduce((a, b) => a + b)/nums.length
  }

//--------------- Best Practices / Lessons Learned -------------------------------------