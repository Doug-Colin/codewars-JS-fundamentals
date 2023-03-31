/*
--------------- 6 Kyu - Sums of Parts ------------------

Instructions:

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("partsSums",function() {

function dotest(ls, expect) {
    let actual = partsSums(ls);
    assert.deepEqual(actual, expect);
}

it("Basic tests",function() {
    dotest([], [0]);
    dotest([0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0]); 
    dotest([1, 2, 3, 4, 5, 6], [21, 20, 18, 15, 11, 6, 0]); 
    dotest([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358], 
            [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]); 
})})

--------------
PREP

Parameters: 
    -
    -  

Return: 
    -

Example:


Psuedo Code:
    -

    -

    -


*/

//-------------------- Solution (without comments) -------------------------------------

function partsSums(ls) {
    ls.unshift(0)
    let sum = ls.reduce((a, b) => a + b, 0);

    return ls.map((x) => {
        sum = sum - x
        return sum
    })
}

//-------------------- Solution (with comments) ----------------------------------------

function partsSums(ls) {

    //add a zero to the beginning of param array so we'll perform calculations according to diagram
    ls.unshift(0)
  
    //save sum of array to variable via .reduce()
    let sum = ls.reduce((a, b) => a + b, 0);
  
    //.map() param array to new array
    //on each element, subtract the current element from sum and reassign value
    //return new sum as element
    return ls.map((x) => {
        sum = sum - x
        return sum
    })
}

//--------------- Best Practices / Lessons Learned -------------------------------------

