/*

*String Methods Series*

------------ 6 Kyu - Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!! ----------------

Instructions:

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Fixed tests", function() {
      assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
      assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
      assert.deepEqual(sumDigPow(10, 100),  [89])
      assert.deepEqual(sumDigPow(90, 100), [])
      assert.deepEqual(sumDigPow(90, 150), [135])
      assert.deepEqual(sumDigPow(50, 150), [89, 135])
      assert.deepEqual(sumDigPow(10, 150), [89, 135])
  });
});

--------------
PREP

Parameters: 
        (a, b): two integers that define the range

Return: 
        A *sorted* array of integers between the given parameters, wherein the sum of each digit added together, after being individually evaluated to the power of that digits order of appearance, equals the integer itself.
        For example, 89. 8^1 + 9^2 = 89. Or 135. 1^1 + 3^2 + 5^3 = 135.
         array of *sorted* integers, between paramater a and b.
        ach digit of these integers must 

Example:    
        1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
        1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

Psuedo Code:
-first, we need to iterate through the integers between a and b
-then filter for the ones which meet the requirements
-the requirements will be met when the digit(s) of the integer, after applying the exponent index + 1, and being added together, equals the integer
-cannot find functional solution, even with nested array. Following is a breakdown of the successfull solution. 

*/

function sumDigPow(a, b) {
    //declare empty array for returning solution later
    var solution = [];

    //iterate through integers between a & b
    for (var i = a; i <= b; i++) {

       //declare variable hold sum of integers to power of their index place 
      var sum = 0;

        /*nested loop to iterate through the digits of each individual integer between a & b (if i = 10, j= 1 then j = 0)
            -'i' is from initial for loop and represents integers between a & b 
            -'j' represents the digits of each individual integer from that loop
            -sum += adds the 'j' digits of 'i' together, after evaluating expression Math.pow(parseInt(String(i)[j]), j+1);  
                -That expression is as follows: the first arg is each 'j' digit of 'i'.
                -Because we cannot iterate through number types, We access integers 'i' as strings, by passing them into the String() object constructor
                -Since we cannot perform Math reliably with strings, the each digit of integers, String(i)[j]), is converted to a number via parseInt.
                -Math.pow(num, exponent) calculates each 'j' digit to the exponent of it's index plus 1 (j+1)
                -then we use an if() conditional to evaluate if the sum of those 'j' digits, evaluated in Math.pow(), add up to integer 'i'; we use rough equality operator to avoid string/num type conversion problems
                -if they meet that condition, we push() integer (i) into our solution array 
                -finally, after the nested loop, return the solution array. 
                */
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) solution.push(i);
      }
    }
    return solution;
  }
   