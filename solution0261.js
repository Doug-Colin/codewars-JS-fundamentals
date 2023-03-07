/*
--------------- 8 Kyu - Printing Array elements with Comma delimiters ------------------

Instructions:

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var data = [2,4,5,2];
Test.expect( printArray( data ) ==
  "2,4,5,2", "int test failed" )
  });
});

--------------
PREP

Parameters: 
    -array, and array of digits or characters

Return: 
    -the array in string form with commas

Example:
    [2,4,5,2] --> "2,4,5,2"

Psuedo Code:
    -use .toString() method and ES6 arrow function to return
*/

//-------------------- Solution (without comments) -------------------------------------

const printArray = (x) => x.toString()

//-------------------- Solution (with comments) ----------------------------------------

//use .toString() method to convert array elements to string and return
const printArray = (x) => x.toString()

//--------------- Best Practices / Lessons Learned -------------------------------------