/*
--------------- 7 Kyu - Fix My Phone Numbers! ------------------

Instructions:

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
Test.assertEquals(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
Test.assertEquals(isItANum("0192387415456"), "Not a phone number");
Test.assertEquals(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
Test.assertEquals(isItANum("stop calling me no I have never been in an accident"), "Not a phone number");
  });
});

--------------
PREP

Parameters: 
    -str, a string of whitespace, chars and digits

Return: 
    -if there are 11 digits in the string, return those only otherwise return the string "Not a phone number"

Example:
    "S:)0207ERGQREG88349F82!efRF" --> "02078834982"

Psuedo Code:
    -use regex to return only digits, or, to replace all whitespace and non-digit chars with ''.

    -if tests contain more than 11 digits, use .length to check and .slice to return first 11 only

    -if tests contain 11+ digits and do not begin with zero, use .indexOf() to start at 0 
    */

//-------------------- Solution (without comments) -------------------------------------

function isItANum(str) {
    let numbers = str.slice(str.indexOf('0')).replace(/\D/g, '',)
    return numbers.length === 11 ? numbers : 'Not a phone number'
  }

//-------------------- Solution (with comments) ----------------------------------------

function isItANum(str) {
    //use .slice to cut off all of string before first zero
    //use .replace and regex to replace all non-digit characters with nothing
    let numbers = str.slice(str.indexOf('0')).replace(/\D/g, '',)
    
    //using ternary statement, if length of remaining numbers string is 11, return that, otherwise return alternate string
    return numbers.length === 11 ? numbers : 'Not a phone number'
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

