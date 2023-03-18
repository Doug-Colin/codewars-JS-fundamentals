/*
--------------- 8 Kyu - Do you speak "English"? ------------------

Instructions:

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(spEng("english"), true);
Test.assertEquals(spEng("egnlish"), false);
  });
});


--------------
PREP

Parameters: 
    -sentence, a string

Return: 
    -true if it contains the word 'english' irrespective of casing

Example:
"abcEnglishdef" --> true
 "abcnEglishsef" --> false

Psuedo Code:
    -convert to lowerCase, and check for inclusion via .includes()
*/

//-------------------- Solution (without comments) -------------------------------------

function spEng(sentence){
  return sentence.toLowerCase().includes("english")
  }

//-------------------- Solution (with comments) ----------------------------------------

function spEng(sentence){
    //convert sentence to lowerCase so we don't have to worry about casing
    //check if sentence contains 'english' via .includes() string method, which returns true/false
  return sentence.toLowerCase().includes("english")
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

