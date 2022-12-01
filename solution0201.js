/*
--------------- 7 Kyu - How many arguments ------------------

Instructions:

    Create a function called args_count that returns the number of arguments provided

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(args_count(1, 2), 2);
    assert.strictEqual(args_count(), 0);
    assert.strictEqual(args_count('A', 'B', 'C'), 3);
    assert.strictEqual(args_count(["foo", "bar"]), 1);
  });
});

--------------
PREP

Parameters: 
    -unknown, type could be number or string  

Return: 
    -the number of arguments provided


Example:
    args_count(1, 2, 3) -> 3
    args_count(1, 2, 3, 10) -> 4

Psuedo Code:
    -turn (args) into array

    -return length of args array


*/


function args_count(...args) {
    let argArr = args
    return argArr.length;
  }

//----- Best Practices / Lessons Learned ---------------
function args_count() {
    return arguments.length;
  }

  //arguments is an array-like object