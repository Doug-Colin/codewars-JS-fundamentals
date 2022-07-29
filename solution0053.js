/*
--------------- 7 Kyu - List Filtering  ------------------

Instructions:

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

-------------
Sample Tests

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  });
});

--------------

Psuedo Code:
-use .filter() and typeof to filter array for 'number' type data values and return them
-.filter(x => typeof x === 'number')

Lessons learned / To remember
-typeof syntax is not like most methods; there is no dot notation and no parentheses
-when coding for data types, types must be written between quotes, i.e. 'number', 'boolean', 'string'
*/







function filter_list(l) {
    return l.filter(x => typeof x === 'number')
   }