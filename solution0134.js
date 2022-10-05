/*
--------------- 7 Kyu - Love vs friendship ------------------

Instructions:

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(wordsToMarks("attitude"), 100);
    assert.strictEqual(wordsToMarks("friends"), 75);
    assert.strictEqual(wordsToMarks("family"), 66);
    assert.strictEqual(wordsToMarks("selfness"), 99);
    assert.strictEqual(wordsToMarks("knowledge"), 96);
  });
})

--------------
PREP

Parameters: 
    -a string of lower-case letters.

Return: 
    -the sum of all letters alphabet positions. 

Example:
    -"attitude" --> 100
    -"knowledge" --> 96

Psuedo Code:
    -split('') string into array of letters so we can map() it

    -find all alphabet positions of letters by .map()ing them to their ascii/utf-16 codes via string.charCodeAt(index) - 96
    
    -/return the sum of the alphabet positions via .reduce()

*/
//refactored:



function wordsToMarks(string){
  
    //split() string into array of letters so we can map() it.  
    let letters = string.split('');
    
      
      //map() array of letters to their alphabet position:
      //we can find a letter's alphabet position by subtracting 96 from the ascii/utf-16 code.
      //we get the ascii/utf-16 code of the letters via string.charCodeAt(index)
      let ascii = letters.map(element => string.charCodeAt(string.indexOf(element)) - 96);
    
      
      //return the sum of the alphabet positions via .reduce()
      return  ascii.reduce((a, b) => a + b);
    
    }