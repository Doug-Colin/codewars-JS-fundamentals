/*
--------------- 6 Kyu - Does my number look big in this? ------------------

Instructions:

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe( "Narcissistic Function", function() {
  it( "should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
  });
  
  it( "should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
  });
});

--------------
PREP

Parameters: 
    -value, a  valid positive non-zero integers

Return: 
    - true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.


Example:
take 153 (3 digits), which is narcisstic:  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

Psuedo Code:
    -use value.toString or value + ''.length to find the number of digits, or exponent

    -use custom reduce function to find sum of each digit evaluated to exponent 

    -if that sum == value, return true, otherwise false


*/


function narcissistic(value) {
  
    //convert value to array of digits so we can work with them individually
    const digits = value.toString().split('')
    
    //find number of digits/exponent via .length of digits array
    const exponent = digits.length
    
    //convert digits array elements back to Number()s. Use .map() to evaluate each to exponent.
    //find sum of via .reduce() and return true if it == value, otherwise false.
    return digits.map(x => Number(x)**exponent).reduce((a, b) => a + b) == value ? true : false;
    
    
  }
  

//----- Best Practices / Lessons Learned ---------------

