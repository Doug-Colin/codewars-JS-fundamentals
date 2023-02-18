/*
--------------- 7 Kyu - 
Power of two ------------------

Instructions:

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(isPowerOfTwo(2), true)
Test.assertEquals(isPowerOfTwo(4096), true)
Test.assertEquals(isPowerOfTwo(5), false)
  });
});

--------------
PREP

Parameters: 
    -n, a non-negative integer

Return: 
    -true if n is a power of two, otherwise false

Example:
    isPowerOfTwo(1024) // -> true
    isPowerOfTwo(4096) // -> true
    isPowerOfTwo(333)  // -> false

Psuedo Code:
    -if n == 1, return true, as 2**0 = 1.

    -if n > 0, and n%2 === 0, return true

    -otherwise return false


*/

//-------------------- Solution (without comments) -------------------------------------

function isPowerOfTwo(n){
    if (n === 1) {
      return true
    } else {
      return n>0 && n%2 == 0 ? true : false
    }
  }

//-------------------- Solution (without comments) -------------------------------------

function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n)) ? true : false
  }

//-------------------- Solution (with comments) ----------------------------------------

function isPowerOfTwo(n){
    //if a number 'n' is a power of two, it means that it is the result of 2^n, or base 2^logarithm n 
    //for example, 16 is a power of 2, because 2^4 = 2*2*2*2 = 16 
    //a logarithm is the power to which a base must be raised to produce a given number.
    //so if our parameter is 16, and our base is 2, the logarithm is 4.
    //if that logarithm is float, and not an integer, then the number is not a power of that base. 
    //The Math.log2() method will return the logarithm of base 2 (or the power to which 2 must be raised to produce the number passed in).
    //we can check if a number is an integer or float via the Number.isInteger() method.
    // if  Number.isInteger(Math.log2(n)) is an integer, n is a power of two, so return true, otherwise false. 
  return Number.isInteger(Math.log2(n)) ? true : false
  }

//Best Practices - Lessons Learned
    //don't forget, if you're not sure of a solution, the FIRST thing to do is google/research the problem, before writing any code. 