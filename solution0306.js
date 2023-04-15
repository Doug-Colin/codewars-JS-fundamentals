/*
---------------  Kyu -  ------------------

Instructions:

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.strictEqual(reverseVowels("Hello!"), "Holle!");
    assert.strictEqual(reverseVowels("Tomatoes"), "Temotaos");
    assert.strictEqual(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");
  });
});


--------------
PREP

Parameters: 
    -str, a string

Return: 
    -the same string, with order of vowel characters reversed, and non-vowel characters in the same place. 
    -y is not a vowel for the purposes of this function

Example:
    "Hello!" => "Holle!"
    "Tomatoes" => "Temotaos"
    "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

Psuedo Code:
    -save reversed string to variable

    -iterate over param string, and if (char == vowel), replace with same index from reversed string.  


*/

//-------------------- Solution (without comments) -------------------------------------

function reverseVowels(str) {

    let reversedVowels = str.replaceAll(/[^aeiou]/ig, '')
                      .split('')
                      .reverse()

    return str.split('').map((x) => {
      return  /[aeiou]/i.test(x) ? reversedVowels.shift() : x
    }).join('')
  }

//-------------------- Solution (with comments) ----------------------------------------

function reverseVowels(str) {
    //create an array of our strings vowels, reversed
    let reversedVowels = str.replaceAll(/[^aeiou]/ig, '')
                      .split('')
                      .reverse()
    //split our string into array so we can .map() it
    //if a character is a vowel, return the first char in our reversedVowels arr via .shift()
    //if not, return the char as is
    //join back into string and return 
    return str.split('').map((x) => {
      return  /[aeiou]/i.test(x) ? reversedVowels.shift() : x
    }).join('')
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//following function is far more concise.

//creates an array of vowels in order, 
//uses arrow function syntax to return the last vowel in vowel array via .pop()  
//the underscore is simply a symbol when a param is not needed /used
//no need for .map as .replace() iterates char by char anyway!
const reverseVowels = str => {
    let vowels = str.replace(/[^aeiou]/gi, '').split('');
    return str.replace(/[aeiou]/gi, _ => vowels.pop());
  };