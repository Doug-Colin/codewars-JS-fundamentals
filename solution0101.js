/*
--------------- 8 Kyu - Sum Arrays ------------------

Instructions:

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});


--------------
PREP

Parameters: an array of numbers. 

Return: the sum of the numbers, unless the array is empty, then return 0.

Examples:

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Psuedo Code:
-return ternary statement
-if arr.length < 1 return 0
-otherwise return arr.reduce((a, b) => a + b)
*/


function sum (numbers) {
    return numbers.length < 1 ? 0 : numbers.reduce((a,b) => a+b);       
 };