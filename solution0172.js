/*
--------------- 6 Kyu - Unique In Order ------------------

Instructions:

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});

--------------
PREP

Parameters: 
    -iterable, a string or an array of numbers/characters 

Return: 
    -A list/array of items without without any elements with the same value next to each other, in the same order as the parameter


Example:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Psuedo Code:
  -.filter param array/string for elements that !== next element
       iterable.split('').filter((element, index) => element !== iterable[index-1])


*/
var uniqueInOrder=function(iterable){
    return iterable.split('').filter((element, index) => element !== iterable[index-1])
  }

  //best practices/lessons learned:

  //you don't need to split() a string in order to filter() it; you can simply put the string in square braces, and use the spread operator. 
  var uniqueInOrder=function(iterable){
    return [...iterable].filter((element, index) => element !== iterable[index-1])
  }