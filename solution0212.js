/*
--------------- 7 Kyu - Halving Sum ------------------

Instructions:

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Test Case", function() {
  it("Test", function() {
    Test.assertEquals(halvingSum(25),47);
    Test.assertEquals(halvingSum(127),247);
  });
});

--------------
PREP

Parameters: 
    -n, a positive integer 

Return: 
    -the sum of the series starting, stopping when n/k = 1

Example:
    25  =>  25 + 12 + 6 + 3 + 1 = 47

Psuedo Code:
    -declare array to hold series

    -write a for loop that incrementally adds the correct elements in the series to the array
            for (let i = 2; n/i >= 1; i*=2) {

            }

    -use .reduce() to sum series and return 

*/
//-------------------- Solution (commented version below this one) -------------------------------------

function halvingSum(n) {
     let series = [n]
    
    for (let i = 2; n/i > 1; i*=2) {
    series.push(Math.floor(n/i))
    }
    
    return series.reduce((a, b) => a + b);  
  }
  

//-------------------------- Solution With Comments ------------------------------------

function halvingSum(n) {
    //declare array to hold our series of numbers, starting with n
    let series = [n]
    
    //use for loop to increment through n's divisors, starting with 2, and doubling each time
    //stop when n/i < 1
    //on each iteration, .push the result of n/i into our solutions array, rounding down via Math.floor
    for (let i = 2; n/i > 1; i*=2) {
    series.push(Math.floor(n/i))
    }
    
    //use .reduce to sum the array and return it
    return series.reduce((a, b) => a + b);
    
  }
  
  
