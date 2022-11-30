/*
--------------- 7 Kyu - Simple Fun #176: Reverse Letter ------------------

Instructions:

Given a string str, reverse it and omit all non-alphabetic characters.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(reverseLetter("krishan"),"nahsirk")

Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

Test.assertEquals(reverseLetter("ab23c"),"cba")

Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

})})

--------------
PREP

Parameters: 
    -str, a string

Return: 
    -the string reversed, with all  non-aplhabetic chars removed


Example:
    -"krishan", the output should be "nahsirk".
    -"ultr53o?n", the output should be "nortlu".

Psuedo Code:
    -.split() the string
    -.map() it
    - if (element.test(regex)) return element
    -.join('') and return
*/

function reverseLetter(str) {

    //.split() the string into an array of letters & .map() it
    //use regex.test(element) to return true if element/letter is between a-z, case insensitive
    //.reverse() and .join('') string, return it.
    return str.split('').map((x) =>{
        if (/[a-z]/gi.test(x)) {
          return x
        } 
      }).reverse().join('')
      }
