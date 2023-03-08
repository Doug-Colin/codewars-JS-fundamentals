/*
--------------- 8 Kyu -  ------------------

Instructions:

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function(){
  it("Basic tests", function(){
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
  });
});

--------------
PREP

Parameters: 
    -a and b, individual arrays of three integers each, representing the sides of two cubes 

Return: 
    -the difference in volume between the cubes

Example:
    ([2, 2, 3], [5, 4, 1]) --> the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Psuedo Code:
    -use a .reduce() function to find volumes of each cube and subtract the higher from the lower.


*/

//-------------------- Solution (without comments) -------------------------------------

function findDifference(a, b) {
    const findVolume = (arr) => arr.reduce((a,b) => a*b) 
    
    const volumes = [findVolume(a), findVolume(b)]
    
    return Math.max(...volumes) - Math.min(...volumes)
      
    }

//-------------------- Solution (with comments) ----------------------------------------

function findDifference(a, b) {

    // use .reduce() method and multiplication operator to find volume. 
    // save as arrow function to stay DRY
    const findVolume = (arr) => arr.reduce((a,b) => a*b) 
    
    //create array that holds both volumes
    const volumes = [findVolume(a), findVolume(b)]
    
    //use Math.max() & .min() with spread operator (...) to find difference and return  
    return Math.max(...volumes) - Math.min(...volumes)
      
    }

//--------------- Best Practices / Lessons Learned -------------------------------------
/*  
Many solutions used the Math.abs() method to avoid having to sort the values for subtraction.
Math.abs will return an absolute number, so given x, it returns -x
Thus Math.abs(-5) --> 5, or Math.abs(-0) --> 0
    */   
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }

//or refactored with my approach

  function findDifference(a, b) {
    // use .reduce() method and multiplication operator to find volume. 
    // save as arrow function to stay DRY
    const findVolume = (arr) => arr.reduce((a,b) => a*b) 

    //find difference but pass into Math.abs() so it will return positive irrelvant to sorting, return
    return Math.abs(findVolume(a) - findVolume(b))
  }



