/*
--------------- 7 Kyu - Smallest value of an array ------------------

Instructions:

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(min([1,2,3,4,5], 'value'), 1)
Test.assertEquals(min([1,2,3,4,5], 'index'), 0)
  });
});

--------------

Psuedo Code:

-use .map(element, index) and Math.min() to return smallest value of array OR index of smallest value, depending on second paramater, via ternary 
-actually, probably more concise to skip .map() and simply use Math.min() and .indexOf() 

*/

function min(arr, toReturn) {
    let lowest = Math.min(...arr);
    return toReturn == 'value' ? lowest : arr.indexOf(lowest);
   }