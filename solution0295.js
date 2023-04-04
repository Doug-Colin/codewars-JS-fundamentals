/*
--------------- 7 Kyu - 
Between Extremes ------------------

Instructions:

Given an array of numbers, return the difference between the largest and smallest values.

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
Test.assertEquals(betweenExtremes([-1, -41, -77, -100]), 99);
  });
});


--------------
PREP

Parameters: 
    -numbers, an array of numbers

Return: 
    -the difference between the largest and smallest values in the param array 

Example:
    [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

    [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

Psuedo Code:
    -use Math.max() & min to find values, and then subtract. 

*/

//-------------------- Solution (without comments) -------------------------------------

function betweenExtremes(numbers) {
      return Math.max(...numbers) - Math.min(...numbers)
    }

//-------------------- Solution (with comments) ----------------------------------------

function betweenExtremes(numbers) {
    //Use spread operator to pass param array ito Math.max() & Math.min, and subtract to find difference.  
      return Math.max(...numbers) - Math.min(...numbers)
    }

//--------------- Best Practices / Lessons Learned -------------------------------------

