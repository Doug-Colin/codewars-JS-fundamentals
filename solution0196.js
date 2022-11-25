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



//refactored:

//----- Best Practices / Lessons Learned ---------------

let concats = []
console.log(concats.length)

for (let i = 0; i < k; i++ ) {
  concats.push(strarr.slice(i, i + k))
}

// console.log(concats)
let combos = concats.map(x => x.join(''))

// console.log(combos)
// "------------"
combos.sort((a, b) => b.length - a.length)[0]



//1) Still need to find a relationship for how many times to iterate slice method. 
/*
length == 6, k == 2 -> 5 times   ....length - (k-1) FUCKIN BINGO. Got plans, will 
length == 5, k == 1 -> 5 times
length == 3, k == 2 -> 2 times
length == 5, k == 3 -> 3 times
length == 6, k == 2 -> 5 times

 2) still need to return longest concatenation *without* .sort().
*/