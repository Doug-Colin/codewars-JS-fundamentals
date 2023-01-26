/*
--------------- 6 Kyu - Difference of perfect squares displayed as sum of consecutive odd numbers ------------------

Instructions:

This kata will return a string that represents the difference of two perfect squares as the sum of consecutive odd numbers

• The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.

• The first input will always be larger than the second.

• All inputs will be valid so no need for error checking.

• Outputs will always be positive.

• Inputs will range between 0 and 200, (inclusive).

• In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.
-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe("squaresToOdd", function() {
  it("given 3, 0", function() {
    assert.deepEqual( squaresToOdd(3, 0) , "3^2 - 0^2 = 1 + 3 + 5 = 9");
  });

  it("given 5, 0", function() {
    assert.deepEqual(squaresToOdd(5, 0), "5^2 - 0^2 = 1 + 3 + 5 + 7 + 9 = 25");
  });
  
    it("given 10, 0", function() {
    assert.deepEqual(squaresToOdd(10, 0), "10^2 - 0^2 = 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 = 100"); 
  });
  
      it("given 6, 5", function() {
    assert.deepEqual(squaresToOdd(6, 5), "6^2 - 5^2 = 11 = 11"); 
  });
  
        it("given 79, 72", function() {
    assert.deepEqual(squaresToOdd(79, 72), "79^2 - 72^2 = 145 + 147 + 149 + 151 + 153 + 155 + 157 = 1057");
  });
  
          it("given 63, 57", function() {
    assert.deepEqual(squaresToOdd(63, 57), "63^2 - 57^2 = 115 + 117 + 119 + 121 + 123 + 125 = 720"); 
  });
  
            it("given 15, 8", function() {
    assert.deepEqual(squaresToOdd(15, 8), "15^2 - 8^2 = 17 + 19 + 21 + 23 + 25 + 27 + 29 = 161"); 
  });
  
});

--------------
PREP

Parameters: 
    -sqr1 and sqr2, two numbers to create perfect squares from 

Return: 
    -the aforementioned series


Example:
    squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"

    squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"

    squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"

    squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"


Psuedo Code:
    -square inputs via **

    -subtract second from first, save as variable

    -use for loop to create array of odd numbers in between them

    -subtract input from input 1 (before squaring), and you have the length of odd # series you need to find 

    -use for loop to iterate through series of that # of our odd nums array (i+=#?)
    
    -use reduce to add up each series, if it equal difference between sqr1 & 2, we have our answer

    -use template literal to output answer to solution in string form

    -return that
*/
//-------------------- Solution- version with comments below -------------------------------------

//----------****** work in progress *****-----------------

function squaresToOdd(sqr1, sqr2){
   
    let difference = sqr1 **2 - sqr2**2
    let seriesLength = sqr1-sqr2
    let odds = []

    for (let i = 1; i<=200; i+=2) {
    odds.push(i)
    }
    
    for (let i = 0; i <= odds.length; i++) {
      if (odds.slice(i, i+seriesLength).reduce((a,b)=>a+b) == difference) {
        return `${sqr1}^2 - ${sqr2}^2 = ${odds.slice(i, i+seriesLength).join(' + ')} = ${difference}`
      }
    } 
  }


//-------------------------- Solution With Comments ------------------------------------
function squaresToOdd(sqr1, sqr2){
   
    //square each input via exponent operator (**) and find difference
    let difference = sqr1 **2 - sqr2**2
    
    //find length of sum sequence
    let seriesLength = sqr1-sqr2
    
    //declare empty array to hold sequence of odd numbers
    let odds = []
    
    //use for loop to iterate through odd nums between 1 and 200, pushing them into our odds array (200 is max input)
    for (let i = 1; i<=200; i+=2) {
    odds.push(i)
    }
    
     //use for loop to iterate through odds array
     //use .slice() to return sequences of the array without modifying it, of length seriesLength
     //use .reduce() to find out if the sum of each sequence equals the difference between our squared inputs
     //if it does, use template literal to return correct string 
    for (let i = 0; i <= odds.length; i++) {
      if (odds.slice(i, i+seriesLength).reduce((a,b)=>a+b) == difference) {
        return `${sqr1}^2 - ${sqr2}^2 = ${odds.slice(i, i+seriesLength).join(' + ')} = ${difference}`
      }
    } 
  }

//----- Best Practices / Lessons Learned ---------------
