/*
--------------- 8 Kyu - Enumerable Magic #25 - Take the First N Elements ------------------

Instructions:

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Sample Tests", function(){
  it("should work for sample tests", function(){
    Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
  });
});

--------------
PREP

Parameters: 
    -arr, an array
    -n, the number of elements to return from the array, starting with the first. 

Return: 
    -n number of elements

Example:
    ([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]

Psuedo Code:
    -use array.slice(0, n)


*/

//-------------------- Solution (without comments) -------------------------------------

function take(arr, n) {
    return arr.slice(0, n)
  }

//-------------------- Solution (with comments) ----------------------------------------

function take(arr, n) {
    //use .slice() to return the array, with 0 as the start, and n as the end 
    return arr.slice(0, n)
  }

//--------------- Best Practices / Lessons Learned -------------------------------------