/*
--------------- 6 Kyu - Highest Scoring Word ------------------

Instructions:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet:
a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});

--------------
PREP

Parameters: 
    -x, a string of words, all letters being lowercase 

Return: 
    -the 'highest scoring word' if each word's score is the sum of its letter's alphabet positions. 


Example:
    For example, the score of abad is 8 (1 + 2 + 1 + 4).

Psuedo Code:
    -.split(' ') string by spaces into array of words

    -.map() each word (.split() if necessary), convert to ASCII # via .charCodeAt. Subtract what's necessary to convert to alphabet number.

    -use .reduce() function to tally score for each word/element
    
    -covert back into array of sums, if necessary
    
    -find index of highest score, use to return that word.
    
    **if two words score the same, return the word that appears earliest in the original string....

    **.charCodeAt(a) === 97, so subtract 96 from code to get alphabet position/value
*/
//-------------------- Solution- version with comments below -------------------------------------

function high(x){
    
    let words = x.split(' ')
    
    let scores = words.map((word) => {
           return word.split('').map(y => y.charCodeAt(word[y]) - 96).reduce((a, b) => a + b)
    })
    
    return words[scores.indexOf(Math.max(...scores))];
  }

//-------------------------- Solution With Comments ------------------------------------

function high(x){
    //convert string x to an array of individual words via .split(' ')
    let words = x.split(' ')
    
    /*Create an array of each word's score by: 
       -mapping our array of words, .split('') into letters.
       -for each word, use .map() again to iterate through each letter
       -find the alphabetical position/value of each letter by using .charCodeAt(), and subtracting by 96
          (if that doesn't make sense, look up .charCodeAt() and ASCII values table)
      -after converting each letter to a value, add the values up via .reduce()   */
    
    let scores = words.map((word) => {
           return word.split('').map(y => y.charCodeAt(word[y]) - 96).reduce((a, b) => a + b)
    })
    
    //Our scores array is now the value of each word
    //find the (first) highest value via Math.max() and the spread operator (...), and find its index via .indexOf() 
    //that index is the winner in our words array, so return that after joining the letters back together. 
    return words[scores.indexOf(Math.max(...scores))];
  }

//----- Best Practices / Lessons Learned ---------------
