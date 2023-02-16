/*
--------------- 8 Kyu - altERnaTIng cAsE <=> ALTerNAtiNG CaSe ------------------

Instructions:

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

-------------
Sample Tests

const { assert } = require('chai');

describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    assert.strictEqual("12345".toAlternatingCase(), "12345");
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  });
});

--------------
PREP

Parameters: 
    -
    -  

Return: 
    -


Examples:
    "hello world".toAlternatingCase() === "HELLO WORLD"
    "HELLO WORLD".toAlternatingCase() === "hello world"
    "hello WORLD".toAlternatingCase() === "HELLO world"
    "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
    "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
    "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
    "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

Psuedo Code:
    -.split('') string by character into array

    -.map() array, using ternary statement to, if string is lower case, return Uppercase (otherwise return lower case) 

    -.join('') array, and return


*/
//-------------------- Solution- version with comments below -------------------------------------


String.prototype.toAlternatingCase = function (string) { 
    return this.split('').map((x)=>{
      return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
    }).join('')
  }
//-------------------------- Solution With Comments ------------------------------------

String.prototype.toAlternatingCase = function (string) {
    //Note: the .prototype property can be used to define properties or methods of an Object, but you shouldn't use it built in Javascript datatypes as in this example (Numbers, Strings, Arrays etc)  
    //use this. to refer to the object/instance that we are defining a method for
    //.split('') the string into an array of individual characters
    //.map() that array of characters
      //using ternary statement, check if the character equals itself.toLowerCase()
      //if so, it's lower case, so return it .toUpperCase(). Otherwise return it to .LowerCase() 
    return this.split('').map((x)=>{
      return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
    }).join('')
  }

//----- Best Practices / Lessons Learned ---------------
