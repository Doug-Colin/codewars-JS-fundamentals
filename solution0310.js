/*
--------------- 7 Kyu - JavaScript Array Filter ------------------

Instructions:

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

-------------
Sample Tests

const assert = require("chai").assert;

describe("Fixed tests", () => {
    it('should return an empty array if there are no even numbers', function(){
      assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
      assert.deepEqual(getEvenNumbers([1,2]), [2])
      assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
      assert.deepEqual(getEvenNumbers([13,15]), [])
      assert.deepEqual(getEvenNumbers([1,3,9]), [])
    });
  })

--------------
PREP

Parameters: 
    -an array of integers

Return: 
    -the array filtered for non-even numbers

Example:
  getEvenNumbers([2,4,5,6]) // should == [2,4,6]

Psuedo Code:
    -.filter(x=>x%2==0)

*/

//-------------------- Solution (without comments) -------------------------------------

function getEvenNumbers(numbersArray){

    return numbersArray.filter(x => x%2==0)
  }

//-------------------- Solution (with comments) ----------------------------------------

function getEvenNumbers(numbersArray){
    //use .filter and modulus operator to return even numbers only (numbers that do not have remainder of 0 after dividing 2 repetitively)
    return numbersArray.filter(x => x%2==0)
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

