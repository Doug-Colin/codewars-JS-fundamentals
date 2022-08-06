/*
--------------- 7 Kyu - Cryptanalysis Word Patterns ------------------

Instructions:

In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".



-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Example Tests", function() {
  it("should pass fixed tests", function() {
     assert.equal(wordPattern("hello"), "0.1.2.2.3");
     assert.equal(wordPattern("heLlo"), "0.1.2.2.3");
     assert.equal(wordPattern("helLo"), "0.1.2.2.3");
     assert.equal(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");
  });
});

--------------

Psuedo Code:
-must reassign each character in the string with the index number of it's occurence; if it occurs multiple times, assign all occurrences with the index of the first occurrence.  
-tried a combination of .map(elem, index) and  replaceAll(/regex/), couldn't get it to work
-after viewing solutions, the Set constructor is what's needed (there are solutions that use regex but they seem unnecessarily complicated)

-make paramater .toLowerCase()

-initialize/declare a variable 'set' and assign it an array containing a new Set() from paramater word

-we use the Set() constructor with Spread syntax (...)
        Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. 
        Because each value in the Set has to be unique, the value equality will be checked.

        -This creates an array from the string paramater, but an array with unique values, because it's a set Object
-
*/

function wordPattern(word) {
    word = word.toLowerCase()        ////logging this would show 'hello', it's only to ensure lower case, if paramter is not
    const set = [...new Set(word)]   //logging this would show [ 'h', 'e', 'l', 'o' ]
    return word.split('').map(x => set.indexOf(x)).join('.')  // logging this would show '0.1.2.2.3'
  }
