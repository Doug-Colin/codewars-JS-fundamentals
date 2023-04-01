/*
--------------- 6 Kyu - Backspaces in string ------------------

Instructions:

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

-------------
Sample Tests

const {assert} = require('chai');

describe("cleanString", () => {
  it("should work correctly", () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});

--------------
PREP

Parameters: 
    -s, s string 

Return: 
    -s, as if each '#' after a char was a backspace that deleted that char, with no '#' chars remaining if they'd be present

Example:
    "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""

Psuedo Code:
    -write function that will return the param string with the first '#' and its preceding char removed, via .slice & .concat

    -use loop to run that function so long as string.includes('#)
*/

//-------------------- Solution (without comments) -------------------------------------

function cleanString(s) {
    //this function removes the first '#' and it's preceding character,
    //by returning the string parts before and after the first '#' and it's previous char., concatenated
    //it also removes '#', if '#' is first char of string, via while loop & slice
    const backspacer = x => {
      while (s[0] == '#') {
        s = s.slice(1)
        }
      let beforeHash =  s.slice(0, s.indexOf('#')-1)
      let afterHash = s.slice(s.indexOf('#')+1)
      s = beforeHash.concat(afterHash)
      return s
    }
    //loop uses the above function repeatedly until there are no '#' remaining in string
    while (s.includes('#')) {
     s = backspacer(s)
    }
    return s
  }

//-------------------- Solution (with comments) ----------------------------------------

function cleanString(s) {
    //this function removes the first '#' and it's preceding character,
    //by returning the string parts before and after the first '#' and it's previous char., concatenated
    //it also removes '#', if '#' is first char of string, via while loop & slice
    const backspacer = x => {
      while (s[0] == '#') {
        s = s.slice(1)
        }
      let beforeHash =  s.slice(0, s.indexOf('#')-1)
      let afterHash = s.slice(s.indexOf('#')+1)
      s = beforeHash.concat(afterHash)
      return s
    }
    //loop uses the above function repeatedly until there are no '#' remaining in string
    while (s.includes('#')) {
     s = backspacer(s)
    }
    return s
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//much cleaner; legible and clever. 
//Just iterate through each char via for of loop
//if a char is '#'
//.pop() the last char off of result
//if char is not '#', .push() char into result array.
//this way, if char is not '#', it gets pushed into the results array. If '#' is encountered, the last char in results array is removed. 
//consider approaching problems from differing perspectives. Additive? Subtractive? Filtered?
function clean_string(s) {
    const result = []
      for (const char of s) {
      if (char === "#") {
        result.pop()
      } else {
        result.push(char)
      }
    }
    return result.join("")
  }