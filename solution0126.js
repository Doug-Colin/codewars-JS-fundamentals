/*
--------------- 7 Kyu - Anagram Detection ------------------

Instructions:

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

Test.assertEquals(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
Test.assertEquals(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
Test.assertEquals(isAnagram("apple", "pale"), false, 'Same letters, but different count')
  });
});


--------------
PREP

Parameters: 
    -two string, 'test' and 'original' 

Return: 
    -true if the two strings are anagrams of each other, and false otherwise. 

Example:
    -"foefet" is an anagram of "toffee"
    -"Buckethead" is an anagram of "DeathCubeK"

Psuedo Code:
    -use if statement to compare both strings
    
    -in order to compare:
         make strings same case
         .split('') string into array so it can be sorted
         sort() characters aplhabetically
         .join('') alphabetical characters back into string
    
    - return true if rejonied strings are equal, otherwise false. 
    

*/


// write the function isAnagram
var isAnagram = function(test, original) {

    /*   -make strings same case
         -.split('') string into array so it can be sorted
         -sort() characters aplhabetically
         -.join('') alphabetical characters back into string   */
         
    if (test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')) {
      return true; 
      } else {
        return false;
      }
    
    };
    