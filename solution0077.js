/*
--------------- 7 Kyu - Reverse words ------------------

Instructions:



-------------
Sample Tests



--------------

Psuedo Code:
-.reverse() doesn't work on strings, so:
-declare an array of the split('') string
-.reverse() it, re join('') it, split(' ') by spaces
-return that array, reversed and re joined (' ') by spaces


Lessons Learned:
-The answer voted "Best Practices", below my answer, does the same thing but in a single statement, without declaring the array variable, and using .map() with another return statement
-it first splits(' ') the string by spaces, creating an array where each word is an element
-it then uses .map() on that array's elements, returns each word split('') by character, reversed, and joined('') by character
-likely Best Practice because its a single statement, and is more legible
*/

function reverseWords(str) {

let arr = str.split('').reverse().join('').split(' ')
return arr.reverse().join(' ')

}

//-----------------------------------------------------------------------------

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

 

