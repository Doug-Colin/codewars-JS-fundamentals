/*
--------------- 6 Kyu - Consecutive strings ------------------

Instructions:

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

-------------
Sample Tests

const { assert } = require('chai');

describe("longestConsec",function() {
  it("Basic tests",function() { 
      assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
      assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
      assert.strictEqual(longestConsec([], 3), "")
      assert.strictEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
      assert.strictEqual(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
      assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
      assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
      assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
      assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
  })
})


--------------
PREP

Parameters: 
    -strarr, an array of strings
    -k, an integer representing the amount of consecutive strings you must concatenate 

Return: 
    -the longest string concatenation. If there are multiple concatenations of the same length, return the first one.
    -if n = 0 or k > n or k <= 0 returnan empty string.


Example:
    longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

Psuedo Code:
    -could possibly map/forEach the array with index parameter, returning an array of strings wherein each string is concatenated k combinations

    -declare variable and assign mapped array, .sort()ed descending 

    -if necessary, .filter() mapped array/concatenations for strings of length equal to length of first element in desending array

    -return the first element in that filtered array

*/

function longestConsec(strarr, k) {
  
    let n = strarr.length

    //return an empty string for the necessary cases as defined.    
    if (n == 0 || k > n || k <= 0) {
        return ""
      } else {
    //Otherwise
    
    //declare variable and assign empty array to hold the string combinations 
    let permutations = []
    
    //iterate from 0 through the necessary amount of permutations to find all combinations of k elements
    //on each iteration, use .slice() to cut k number of strings from array, and .join() them into one string
    //.push() each permutation of joined strings into the array
    for (let i = 0; i <= (n - k); i++ ) {
      permutations.push(strarr.slice(i, i + k).join(''))
    }
    
    //Use .reduce() to return the longest string combination in our permutations array, and .length to find its length 
    let longestLength = permutations.reduce((a, b) => a.length > b.length ? a : b).length
    
    //filter the permutations array for elements with a length equal to that of the longest element
    //return the first element of the filtered array as that will be the first longest element 
    return permutations.filter((x) => x.length == longestLength)[0]
      }
    }