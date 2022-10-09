/*
--------------- 5 Kyu - Rot13 ------------------

Instructions:

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Sample tests", function() {
    for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
  });
});


--------------
PREP

Parameters: 
    -a string

Return: 
    -the same string, but with each English/Latin letter replaced by the letter thirteen places after it in the alphabet, and any other numbers/chars returned as is

Example:
    -None Given

Psuedo Code:
    -split('') string into array of individual characters

    -map() string with inline callback (element, index)

    -see if it's part of the alphabet via .match(regex)
    
    -if so, return the character 13 letters after it by
        String.fromCharCode(.charCodeAt(index) + 13)

    -this doesn't work for letters 'n' through 'z' because the Unicode character 13 characters after them is not part of the alphabet. So we need to alter the regex statements so that [a-m] returns 13 characters later, and [n-z]  returns 13 characters before it, this way we loop/cycle around the alphabet instead of getting unicode chars after the alphabet.


*/
//Commented

function rot13(message){
 
    //split('') string into array of individual characters so we can .map() it
    return message.split('').map(function(element, index) {
      
    /*  Use .match(regex) to find if the element is a-m, lower or uppercase.
        Then return the character that is 13 letters after it by:
            - finding it's Unicode equivalent via .charCodeAt() and adding 13.
            - then finding what character that is via String.fromCharCode.
        
        Adding 13 to the unicode won't work for characters n-z because the unicode character 13 places after them is non-alphabetical.
            -we can solve this problem by instead subtracting 13, essentially looping around the charCode of the alphabet.

    */
    if (element.match(/[a-m]|[A-M]/)) {
          return String.fromCharCode(message.charCodeAt(index) + 13)
         } else if (element.match(/[n-z]|[N-Z]/)) {
           return String.fromCharCode(message.charCodeAt(index) - 13)
         } else {
           return element
         }
    
    }).join('')
      
    }


//Non-Commented
