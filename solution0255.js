/*
--------------- 8 Kyu - 
Reversing Words in a String ------------------

Instructions:

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

-------------
Sample Tests



--------------
PREP

Parameters: 
    -string, a string


Return: 
    -the string reversed, w/o trailing white spaces if present 

Example:
    "Hello World" --> "World Hello"
    "Hi There." --> "There. Hi"

Psuedo Code:
    -use .trim() to remove whitespace and .reverse() to reverse, return
*/

//-------------------- Solution (without comments) -------------------------------------

function reverse(string){

    return string.trim()
          .split(' ')
          .reverse()
          .join(' ')
  }

//-------------------- Solution (with comments) ----------------------------------------

function reverse(string){
    //use .trim() to remove preceding or trailing whitespace from string
    //.split(' ') string by spaces into array of words
    //use .reverse() array method to reverse order of elements/words
    //.join(' ') array back into string by spaces and return
    return string.trim()
          .split(' ')
          .reverse()
          .join(' ')
  }

//--------------- Best Practices / Lessons Learned ------------------------------------