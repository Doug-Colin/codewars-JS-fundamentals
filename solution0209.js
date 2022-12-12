/*
--------------- 6 Kyu - Find the missing letter ------------------

Instructions:

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
    Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
  });
});

--------------
PREP

Parameters: 
    -array, an array of alphabetically consecutive characters that's missing one letter

Return: 
    -the missing letter


Example:
    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'

Psuedo Code:
    -.map() array and use .charCode() to find the ASCII/unicode number for each letter 

    -assing count variable the code of the first char in the array
    
    -loop through the array of char codes, from index 1 through end -1.
    
    -if (element !== previous element+1) {solution = previous element+1}

*/
//-------------------- Solution- version with comments below -------------------------------------
function findMissingLetter(array) {

    const codes = array.map(x => x.charCodeAt(0))
    
    for (let i = 1; i < codes.length; i++) {
    if (codes[i] !== codes[i-1] + 1) {
      return String.fromCharCode(codes[i-1] + 1)
      }
    }   
  }

//-------------------------- Solution With Comments ------------------------------------
function findMissingLetter(array) {

    //map paramater array to each letters character code
    const codes = array.map(x => x.charCodeAt(0))
    
    //loop through mapped array of char codes, except for the first and last one, as can't be out of order)
    //if the char code is not equal to the code that preceded it in the array, it's the missing char code
    //return the letter corresponding to the missing char code via String.fromCharCode()
    for (let i = 1; i < codes.length; i++) {
    if (codes[i] !== codes[i-1] + 1) {
      return String.fromCharCode(codes[i-1] + 1)
      }
    }   
  }

//----- Best Practices / Lessons Learned ---------------
