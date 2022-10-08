/*
--------------- 7 Kyu - Filter the number ------------------

Instructions:

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", function() {
  it("should pass some sample tests", function() {
    assert.strictEqual(filterString("123"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("a1b2c3"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
  });
});

--------------
PREP

Parameters: 
    -a string of letters and numbers

Return: 
    -the numbers from the string only, as a number, in their order of appearance

Example:
    -"a1b2c3" --> 123

Psuedo Code:
    -.split('') string to we can filter() it as an array 

    -.filter() for numbers, via regex .match(/[\d]/), which matches digits 0-9

    -.join('') filtered array

    -Convert to number by wrapping in Number(), return
       

*/

var filterString = function(value) {
  
    //.split('') string to we can filter() it as an array 
    //.filter() for numbers, via regex .match(/[\d]/), which matches digits 0-9
    //.join('') filtered array
    //Convert to number by wrapping in Number(), return
    
    return Number(value.split('')
                           .filter(x => x.match(/[\d]/))
                             .join(''));
    
   }

//Lesson learned: this could have been done far more effienctly via .replace(regex, '')