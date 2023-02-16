/*
--------------- 5 Kyu - Simple Pig Latin ------------------

Instructions:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

--------------
PREP

Parameters: 
    -str, a string

Return: 
    -the string in pig latin (move first letter of each word to the end, then append 'ay'). Punctuation marks should remain as-is, where they are.


Example:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !

Psuedo Code:
    -.split(' ') string into array by spaces

    -.map or .forEach() word, if (word.match(/a-z/gi), replace(str[0], ''), or .shift() off first char. then append 'ay' 
        ... *NOTE*: needed regex.test(), not .match(), as it returns T/F. Also, .replace() didn't work for edge cases that were 1 letter long, so had to use combinations of .slice() instead  

    -return string


*/

function pigIt(str){
    /* 
    -split string by spaces into array of words, and .map() array. On each string: 
    -using ternary statement:
    -use (regex).test() to check if word includes letters, case insensitive
    -if so, return the string, and using .slice(), concatenate the string without first character, + 
    -the string's first character, +
    -'ay'
    -if string doesn't contain letters, return as is 
    */
    let pigLat = str.split(' ').map((x) =>{
    return (/[a-z]/gi).test(x) ? x.slice(1, x.length)+x.slice(0, 1)+'ay' : x
  }).join(' ')
    
    return pigLat
  }

//----- Best Practices / Lessons Learned ---------------
