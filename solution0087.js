/*
--------------- 7 Kyu - Vowel Count ------------------

*repeat - doing again as part of string methods series*

Instructions:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

-------------
Sample Tests

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

--------------
PREP

Parameters: A string.

Return: how many of the vowels [aeiou] are present

Example: 'abracadabra' => 5

Psuedo Code:
-.match() regex
-/[aeiou]/g
-.length

Lessons learned (again):
-str.match(regex) returns 'null' when there are no matches! If you want to return '0' you need to use a ternary, as you did.
-Alternately :
    (str.match(/[aeiou]/ig)||[]).length.
    str.replace(/[^aeiou]/gi, '').length;
*/

function getCount(str) {

    let regex = /[aeiou]/gi;
    
    return !regex.test(str) ? 0 : str.match(regex).length
    }