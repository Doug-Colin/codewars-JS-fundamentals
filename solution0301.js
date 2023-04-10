/*
--------------- 6 Kyu - Find the missing term in an Arithmetic Progression ------------------

Instructions:

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

-------------
Sample Tests

fixture.random(10,0);
fixture.random(10,10);
fixture.random(10,100);
fixture.random(10,1000);
describe("Testing with [1, 3, 4]", function() {
  Test.assertEquals(findMissing([1, 3, 4]), 2);
});

--------------
PREP

Parameters: 
    -list, a sequence of integers that is missing one integer

Return: 
    -the missing integer

Example:
    findMissing([1, 3, 5, 9, 11]) == 7

Psuedo Code:
    -first, check if there's a formula for this, because there probably is. 

    -okay, so formula is  (n+1)*(2*a + n*d)/2 - sum, wherein:
        x is the missing integer
        n is the number of integers in the whole sequence,
        a is the first integer in the sequence,
        d is the step, or what the difference between all integers should be,
        (n+1)*(2*a + n*d)/2 is the 'expected sum' (of the sequence if whole), 
        sum is the actual sum of the sequence given, or seq. without the missing integer

    -tested and works, so return that (rename variables so code is legible)


*/

//-------------------- Solution (without comments) -------------------------------------

var findMissing = function (list) {  
    const numOfIntegers =list.length + 1; // 'n' 
    const firstInteger = list[0]; // 'a'
    const step = (list[list.length - 1] - firstInteger) / (numOfIntegers - 1); // 'd'
    const expectedSum = (numOfIntegers * (2 * firstInteger + (numOfIntegers - 1) * step)) / 2; // expected sum
    const actualSum = list.reduce((acc, num) => acc + num, 0); // actual sum of sequence given
    return expectedSum - actualSum; // the missing integer is the difference between the expected sum & sum
  }

//-------------------- Solution (with comments) ----------------------------------------

var findMissing = function (list) {  
    /*The formula to find a single missing integer in an otherwise complete Arithmetic Progression is:
      (n+1)*(2*a + n*d)/2 - sum, wherein:
        x is the missing integer
        n is the number of integers in the whole sequence,
        a is the first integer in the sequence,
        d is the step, or what the difference between all integers should be,
        (n+1)*(2*a + n*d)/2 is the 'expected sum' (of the sequence if whole), 
        sum is the actual sum of the sequence given, or seq. without the missing integer
    */
    const numOfIntegers =list.length + 1; // 'n' 
    const firstInteger = list[0]; // 'a'
    const step = (list[list.length - 1] - firstInteger) / (numOfIntegers - 1); // 'd'
    const expectedSum = (numOfIntegers * (2 * firstInteger + (numOfIntegers - 1) * step)) / 2; // expected sum
    const actualSum = list.reduce((acc, num) => acc + num, 0); // actual sum of sequence given
    return expectedSum - actualSum; // the missing integer is the difference between the expected sum & sum
  }

//--------------- Best Practices / Solution Refactored/ Lessons Learned -------------------------------------

//Top solution used similar approach, but with a more clever refactoring:
var findMissing = function (list) {
    var step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
  }