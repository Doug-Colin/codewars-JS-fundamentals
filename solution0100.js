/*
--------------- 7 Kyu - The highest profit wins! ------------------

Instructions:

Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

-------------
Sample Tests

const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});

--------------
PREP

Parameters: An array of numbers.

Return: The minimin and maximum values of the array, in that order.

Example:

(Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Psuedo Code:

-return an array of Math.max[...arr], Math.min[...arr]

Lessons Learned
-When using Math.max on an array, don't forget that you need to use spread operator 

*/

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }