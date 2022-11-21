/*
--------------- 8 Kyu - Bin to Decimal ------------------

Instructions:

Complete the function which converts a binary number (given as a string) to a decimal number.

-------------
Sample Tests

describe("Example Tests", () => {
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});

--------------
PREP

Parameters: 
    -a string representing a binary number

Return: 
    -the string as a decimal number


Example:
"1001001" --> 73

Psuedo Code:
    -use parseInt(bin, 2) 

*/

function binToDec(bin){
    //use parseInt(x, radix), which returns a decimal number from two arguments:
      //1) A number
      //2) The radix or base of that number
    return parseInt(bin, 2)
  }