/*
--------------- 8 Kyu - 
Grasshopper - Personalized Message ------------------

Instructions:

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
  });
});

--------------
PREP

Parameters: 
    -name, a string
    -owner, a string

Return: 
    -the specified strings depending on whether name == owner

Example:
    N/A

Psuedo Code:
    -use ternary to return strings on above condition 

*/

//-------------------- Solution (without comments) -------------------------------------

function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest'
  }

//-------------------- Solution (with comments) ----------------------------------------

function greet (name, owner) {
    //use ternary statement to return 'Hello boss' if name == owner, otherwise return 'Hello guest'
    return name == owner ? 'Hello boss' : 'Hello guest'
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

