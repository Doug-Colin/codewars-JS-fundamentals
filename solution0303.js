/*
--------------- 7 Kyu - Maximum Length Difference ------------------

Instructions:

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

-------------
Sample Tests

const assert = require('chai').assert

describe("mxdiflg",function() {
it("Basic tests",function() {
    var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    assert.strictEqual(mxdiflg(s1, s2), 13);
})})

--------------
PREP

Parameters: 
    -a1 & a2, arrays of strings of varying lengths or empty arrays

Return: 
    - if an empty array is passed, -1, otherwise, whichever difference is greater,  between the longest string length from one array and the shortest from the other. 

Example:
    a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
    a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
    mxdiflg(a1, a2) --> 13

Psuedo Code:
    -create .sort() functions that sort arrays and return shortest and longest lengths

    -use ternary to return -1 if either param arr is empty, otherwise use Math.max and the .sort() functions to return greatest difference between max and min lengths of arrays strings. 
*/

//-------------------- Solution (without comments) -------------------------------------

function mxdiflg(a1, a2) {
    const shortest = (arr) => arr.sort((a, b) => a.length - b.length)[0].length
    const longest = (arr) => arr.sort((a, b) => b.length - a.length)[0].length

    return  a1.length == 0 || a2.length == 0 ? -1 :Math.max(longest(a1)- shortest(a2), longest(a2) - shortest(a1))
}

//-------------------- Solution (with comments) ----------------------------------------

function mxdiflg(a1, a2) {
    //functions find the shortest or longest lengths of strings in an array
    const shortest = (arr) => arr.sort((a, b) => a.length - b.length)[0].length
    const longest = (arr) => arr.sort((a, b) => b.length - a.length)[0].length
  
    //if either param array is an empty array / has length of 0, return -1, otherwise
    //find differences between a1's longest string length and a2's shortest, and the opposite
    //use Math.max to find what difference is greater, return that
    return  a1.length == 0 || a2.length == 0 ? -1 :Math.max(longest(a1)- shortest(a2), longest(a2) - shortest(a1))
}

//--------------- Best Practices / Lessons Learned -------------------------------------

