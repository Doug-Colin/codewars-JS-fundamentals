/*
--------------- 7 Kyu - Largest pair sum in array ------------------

Instructions:

Given a sequence of numbers, find the largest pair sum in the sequence.

-------------
Sample Tests

const strictEqual = require("chai").assert.strictEqual;

function doTest (array, expected) {
  const actual = largestPairSum(array);
  strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
}

it("Basic tests", () => {
    doTest([10,14,2,23,19], 42);
    doTest([-100,-29,-24,-19,19], 0);
    doTest([1,2,3,4,6,-1,2], 10);
    doTest([-10, -8, -16, -18, -19], -18);
});

--------------
PREP

Parameters: 
    -numbers, an array of integers

Return: 
    -the largest sum possible from two pairs of numbers

Example:
    [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Psuedo Code:
    -sort the array and return sum of two highest values

*/

//-------------------- Solution (without comments) -------------------------------------

function largestPairSum (numbers) {
    
    //sort numbers array in descending order
    numbers = numbers.sort((a, b) => b - a)
    
    //return sum of two highest elements 
    return numbers[0]+numbers[1]
  }

//-------------------- Solution (with comments) ----------------------------------------

function largestPairSum (numbers) {
    //if you just go by the basic tests, you'll assume we're finding consecutive pair sums
    //but we are not, so read the instructions carefully
    //i'll never get that time back
    
    //where did the electricity come from
    //that enabled me to write all those lines of code
    //in vain
    //perhaps it was coal
    //perhaps it generated the last few molecules
    //of Co2 necessary
    //to cross the warming point of no return
    //perhaps when crop yields collapse
    //hundreds of thousands or millions
    //will die
    //and for what?
    //a cruelly sculpted coding exercise
    //a smirk on an authors face
    //or
    //perhaps
    //it was from a windmill
    //that will fall on his house
    
    //sort numbers array in descending order
    numbers = numbers.sort((a, b) => b - a)
    
    //return sum of two highest elements 
    return numbers[0]+numbers[1]
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

