/*
--------------- 7 Kyu - Stanton measure ------------------

Instructions:

The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
assert.deepEqual(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]),3);
  });
});

--------------
PREP

Parameters: 
    -an array of integers

Return: 
    -The number of times that integer n appears in the array, integer n being the number of times that 1 appears in the array.

Example:
    -The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

    -The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

Psuedo Code:
    -declare empty object to hold key:value pairs of element:occurrences

    -use for ...of loop to loop through array elements and count occurrences of each element

    -declare/assign variable to hold value of n (array occurrences of integer 1) 

    -filter() array for value n, return length
*/
//refactored:

let array = [1, 4, 3, 2, 1, 2, 3, 2];

function stantonMeasure(array) {
    // declare empty object to hold key:value pairs of element:occurrences

    let count = {}

    //use for ...of loop to loop through array elements and count occurrences of each element
    for (const element of array) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    //declare/assign variable to hold value of n (array occurrences of integer 1)
    let n = (count['1']);

    //filter() array for value n, return length
    return array.filter(x => x == n).length
}

//The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.