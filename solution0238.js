/*
--------------- 6 Kyu - WeIrD StRiNg CaSe ------------------

Instructions:

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});

--------------
PREP

Parameters: 
    -string, a string

Return: 
    -the string with the even indices of each word's characters upperCase, and the odd indices lowerCase


Example:
    toWeirdCase( "String" );//=> returns "StRiNg"
    toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

Psuedo Code:
    -.split() string into array of words

    -.split() each word into letters

    -use .map() on each array of letters
        -check if index of letter is even or odd via %2
        -if even, convert into .upperCase(), otherwise .lowerCase()

    -.join('') letters back into words and .join(' ') words into sentence
*/
//-------------------- Solution- version with comments below -------------------------------------

function toWeirdCase(string){
  
    const words = string.split(' ').map(x=>x.split(''))
    
    return words.map(word => {
            return word.map((x,i)=> {
              return i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()
            }).join('')
    }).join(' ')
    
  }

//-------------------------- Solution With Comments ------------------------------------

function toWeirdCase(string){
  
    //.split() string by spaces to create array of words
    //use .map() to split each of those words into letters via .split('')
    //we now have an array with subarrays of each word split into letters
    const words = string.split(' ').map(x=>x.split(''))
    
    //.map() nested words array
    //use .map() on each subarray; if a letter's index is even, upperCase it, otherwise lowerCase
    //use .join('') to combine the letters into words again 
    //use .join('') to combine the letters into words again 
    //use .join(' ') to combine words into sentence, and return
    return words.map(word => {
            return word.map((x,i)=> {
              return i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()
            }).join('')
    }).join(' ')
    
  }

//----- Best Practices / Lessons Learned ---------------
