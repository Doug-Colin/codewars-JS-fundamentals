/*
--------------- 7 Kyu - Are they square? ------------------

Instructions:

Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("isSquare",function() {
it("Basic tests",function() {    
    Test.assertEquals(isSquare([1, 4, 9, 16, 25, 36]), true);
    Test.assertEquals(isSquare([1, 2, 3, 4, 5, 6]), false);
    Test.assertEquals(isSquare([]), undefined);
    Test.assertEquals(isSquare([1, 2, 4, 15]), false); 
})});


--------------
PREP

Parameters: 
    -an array of positive integers

Return: 
    -true if all elements are square numbers, otherwise false


Example:
    isSquare([1, 4, 9, 16]) --> true

    isSquare([3, 4, 7, 9]) --> false

    isSquare([]) --> undefined

Psuedo Code:
    -use .filter() to return elements that are square

    -check which elements are square by seeing if the square root is an integer (true) or float (false)
        x => Number.isInteger(Math.sqrt(x))

    -if filtered array has same length of arr, return true, otherwise false
    
    -return undefined if empty



*/


var isSquare = function(arr){
    
    //.filter() arr for elements that are square by checking if their square root is an integer
    const sqRoots = arr.filter(x => Number.isInteger(Math.sqrt(x)))
  
    //if arr is empty, return undefined. Otherwise, check if filtered array length == arr length, if so return true, otherwise false.  
    return arr.length === 0 ?  undefined : sqRoots.length == arr.length ? true : false;

}
