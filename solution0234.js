/*
--------------- 7 Kyu - Sum of Cubes ------------------

Instructions:

Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold=0;

describe("Sum of Cubes", () => {
  it("Fixed tests", () => {
    _.shuffle( [ 
      [1, 1], [2, 9], [3, 36], [4, 100], 
      [10, 3025], [123, 58155876] 
    ] ).forEach(([n,exp]) => assert.strictEqual(sumCubes(n), exp))  
  });
});


--------------
PREP

Parameters: 
    -n, a positive integer

Return: 
    -the sum of all of the cubed integers from 1 through n 


Example:
    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

Psuedo Code:
    -use for... loop to iterate from 1 through N

    -.push() each value into an array

    -use .reduce() to return the sum of that array


*/
//-------------------- Solution- version with comments below -------------------------------------
function sumCubes(n){

    let integers = []

    for (let i = 0; i <= n; i++) {
       integers.push(i) 
    }
    return integers.map(x=>x**3).reduce((a, b) => a + b);
  }

//-------------------------- Solution With Comments ------------------------------------

function sumCubes(n){
    //declare array variable to hold integers from 1 through n 
    let integers = []
    
    //use for loop to iterate from integers 1 through n, and .push() each integer into our array
    for (let i = 0; i <= n; i++) {
       integers.push(i) 
    }
    
    //use .map() to create an array of our integers, cubed via exponent operator (**)
    //use .reduce() to find the sum of the mapped/cubed array, return
    return integers.map(x=>x**3).reduce((a, b) => a + b);
  }
//----- Best Practices / Lessons Learned ---------------
