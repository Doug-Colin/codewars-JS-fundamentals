/*
--------------- 5 Kyu - RGB To Hex Conversion ------------------

Instructions:

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });
});

--------------
PREP

Parameters: 
    -r, g, and b, each integers representing rgb values

Return: 
    -the hexadecimal representation of the same values.

Example:
    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3

Psuedo Code:
    -whatever I tried here, I couldn't get the values to format right. examining a solution that made sense to me below. 


*/

//-------------------- Solution (without comments) -------------------------------------

const rgb = (...arg) => arg
  .map(it => Math.max(Math.min(it, 255), 0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
   ).join('');


//-------------------- Solution (with comments) ----------------------------------------

function rgb(r, g, b) {
    //put arguments into array and .map() array
    //round each element to the range of 0-255 by:
    //using Math.min(el, 255) to return whatever is less, el or 255
    //using Math.max(el, 0) to return whatever is more, el or 0
  return [r, g, b].map(x => Math.max(Math.min(x, 255), 0)
                  .toString(16)     //convert .mapped arr of nums to base 16 (hexadecimal is base 16)
                  .padStart(2, '0') //convert to string & if num is single digit, pad it out with 0's until it's 2 chars
                  .toUpperCase()    //convert to upper case
                 ).join('');        //join array together and return
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//You can round numbers to a range via Math.max(Math.min(num, 255), 0)
//converting to rgb to hexadecimal vals involves not only simple conversion of num to base 16, but also:
  //-padding out single digits with a '0' via .padStart(2, '0')
  //-converting that string val to upper case.