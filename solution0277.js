/*
--------------- 8 Kyu -  ------------------

Instructions:

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});


--------------
PREP

Parameters: 
    -str, a string
    -letter, a letter character

Return: 
    -the occurences of letter in string

Example:
    str_count("Hello", 'o'); // returns 1
    str_count("Hello", 'l'); // returns 2
    str_count("", 'z'); // returns 0

Psuedo Code:
    -use for ... of loop and counter{} Object to create count of all chars

    -pass letter into the Object via bracket notation to return count

    -if str does not .includes() letter return 0
*/

//-------------------- Solution (without comments) -------------------------------------

function strCount(str, letter){  
    let counter = {}
    
    if(!str.includes(letter)) {
      return 0
    } else {
      for (const x of str.split('')) {
      counter[x] ? counter[x]+=1 : counter[x] =1
    }
      return counter[letter]  
    }
  }

//-------------------- Solution (with comments) ----------------------------------------

function strCount(str, letter){  
    //declare Object to hold count of chars
    let counter = {}
    
    //return 0 if string doesn't include letter
    if(!str.includes(letter)) {
      return 0
    } else {
      
      //use for ... of loop and counter{} Object to create count of all chars
      for (const x of str.split('')) {
      counter[x] ? counter[x]+=1 : counter[x] =1
    }
      //pass letter into counter Object to return count
      return counter[letter]  
    }
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//Nice and compact!
function strCount(str, letter){  
    return str.split(letter).length-1
  }