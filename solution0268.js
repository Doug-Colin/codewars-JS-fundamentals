/*
--------------- 7 Kyu - Predict your age!
 ------------------

Instructions:

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(predictAge(65,60,75,55,60,63,64,45), 86);    
  });
})


--------------
PREP

Parameters: 
    -eight params each representing a great-grandparents lifespan

Return: 
    -the value determined by squaring all params, summing the squares, finding the square root of that sum, and dividing it by 2 

Example:
    predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Psuedo Code:
    -create array of params

    -use .map to square them, and .reduce to sum the .mapped array

    -find Math.sqrt() of sum and divide by two

*/

//-------------------- Solution (without comments) -------------------------------------

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

    let ages = [age1,age2,age3,age4,age5,age6,age7,age8]

    return  Math.floor( Math.sqrt(ages.map(x => x*x).reduce((a,b) => a + b))/2 )
  }

//-------------------- Solution (with comments) ----------------------------------------

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    //declare array and assign all ages as elements
    let ages = [age1,age2,age3,age4,age5,age6,age7,age8]
    
    //.map() the ages array, returning each age times itself
    //use .reduce() on that, to find sum of those values
    //find the square root of that sum
    //divide it by two and use Math.floor() to round down to the nearest age
    return  Math.floor( Math.sqrt(ages.map(x => x*x).reduce((a,b) => a + b))/2 )
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

