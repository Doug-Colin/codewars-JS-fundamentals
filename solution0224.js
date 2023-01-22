/*
--------------- 6 Kyu - Write Number in Expanded Form ------------------

Instructions:

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'

NOTE: All numbers will be whole numbers greater than 0.

*expanded form can be summed up as writing a number to show the value of each digit, or, the sum of each digit multiplied by it's matching place value (356 would be 300 + 50 + 6)
-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});


--------------
PREP

Parameters: 
    -num, a whole number > 0

Return: 
    -


Example:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

Psuedo Code:
    -convert num to array of individual digits by converting to string and splitting

    -reverse that array so we can use the index to determine the value of each digit
        -multiply digit*10^i

    -use .map() to convert each digit to it's value
    
    -reverse the array back into order and .join() it together


*/
//-------------------- Solution- version with comments below -------------------------------------

function expandedForm(num) {
    
    let arr = (num + '').split('').reverse()
    

    return arr.map((x, i) => {
      let value = x * 10**i + ''
      
      if (value == '0') {
        return ''
      } else {
        return i < arr.length -1 ? ` + ${value}` : value
      }
    }).reverse().join('')
  }

//-------------------------- Solution With Comments ------------------------------------
function expandedForm(num) {
    //convert num to an array of individual digits, and reverse it.
    let arr = (num + '').split('').reverse()
    
    //We can now use the index to determine the value of each digit, by multiplying: (digit * 10^index)
    
    //if the value of the digit is 0, it has no place in our answer, so return nothing in string form ('')
    //otherwise, using ternary statement and template literal, return a string of the value preceded by spaces and plus sign
    //except for the last element in our array (which will be our first digit/value)
    //reverse the array so it is in order again, and .join() the strings together.
    return arr.map((x, i) => {
      let value = x * 10**i + ''
      
      if (value == '0') {
        return ''
      } else {
        return i < arr.length -1 ? ` + ${value}` : value
      }
    }).reverse().join('')
  }

//----- Best Practices / Lessons Learned ---------------
