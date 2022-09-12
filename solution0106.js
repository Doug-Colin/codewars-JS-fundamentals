/*
--------------- 7 Kyu - Maximum Product ------------------

Instructions:

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

-Array/list size is at least 2.

-Array/list numbers could be a mixture of positives, negatives also zeroes .

-------------
Sample Tests

describe("Positive numbers", function() {
  Test.assertEquals(adjacentElementsProduct([5, 8]), 40);
  Test.assertEquals(adjacentElementsProduct([1, 2, 3]), 6);
  Test.assertEquals(adjacentElementsProduct([1, 5, 10, 9]), 90);
  Test.assertEquals(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
  Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
});

describe("Both positive and negative values", function() {
  Test.assertEquals(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
  Test.assertEquals(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
  Test.assertEquals(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
  Test.assertEquals(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
  Test.assertEquals(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
});

describe("Contains zeroes", function() {
  Test.assertEquals(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
  Test.assertEquals(adjacentElementsProduct([1, 2, 3, 0]), 6);
});

--------------
PREP

Parameters: an array of integers, that could contain positives, negatives, and zero. 

Return: The highest value or 'maximum product' obtained by multiplying two adjacent numbers in the array.

Example: [1, 2, 3] ==> 6   (1*2 =2 and 3*2 = 6)

Psuedo Code:
-declare an empty array to hold the solution

-use a while loop to execute code so long as there are elements remaining in the array

-use .push to fill the solution array with the results of multiplying each pair of integers

-Multiply each pair of integers in the parameter array by using .shift() to remove/retrieve the first element, and array[0] to access the next. (note that param. array becomes shorter with each .shift())

-Return highest result by using Math.max() on solution array. Remember, you must use the spread operator (...) whenever passing an array into Math.max() or .min().


*/

function adjacentElementsProduct(array) {
    //declare an empty array to hold the solution 
    let solution = [];
    
    //use a while loop to continue executing statement as long as there are elements remaining in the array
    while (array.length-1) {

    //Use .push to fill the solution array with the results of multiplying each pair of integers.
    //Multiply each pair of integers by using .shift() to remove/retrieve the first element, and array[0] to access the next. (note that param. array becomes shorter with each .shift())
    solution.push(array.shift() * array[0]);
    }
    
    //Return highest result of solution array via Math.max(). (note that you must use the spread operator (...) whenever using Math.max() or .min() on an array. 
    return Math.max(...solution);
  }