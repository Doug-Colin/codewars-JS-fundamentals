/*
--------------- 6 Kyu - 
Remove the parentheses ------------------

Instructions:

In this kata you are given a string for example. Your task is to remove everything inside the parentheses as well as the parentheses themselves.

-------------
Sample Tests

// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("Basic Tests", function() {
    assert.strictEqual(removeParentheses("example(unwanted thing)example"), "exampleexample")
    assert.strictEqual(removeParentheses("example (unwanted thing) example"), "example  example")
    assert.strictEqual(removeParentheses("a (bc d)e"), "a e")
    assert.strictEqual(removeParentheses("a(b(c))"), "a")
    assert.strictEqual(removeParentheses("hello example (words(more words) here) something"), "hello example  something")
    assert.strictEqual(removeParentheses("(first group) (second group) (third group)"), "  ")
  });
});

--------------
PREP

Parameters: 
    -s, a string

Return: 
    -the string with parentheses and characters within parentheses removed

Example:
    "example(unwanted thing)example" --> "exampleexample"

Psuedo Code:
    -use for ... of to iterate through characters

    -keep count of how many right parens we need to balance out lefts that we iterate through
    
    -if character is left paren., add one to count. if char is right paren, subtract one from count 

    -so long as count == 0, add chars to a return string


*/

//-------------------- Solution (without comments) -------------------------------------

function removeParentheses(s){
    let need = 0
    let returnString = ''
    
      for (const char of s) {
        if (char == '(') need++
        if (need == 0) returnString += char
        if (char == ')') need--
      }
    return returnString
    }

//-------------------- Solution (with comments) ----------------------------------------

function removeParentheses(s){
    let need = 0
    let returnString = ''
    
    /*This function only keeps characters that are not captured in a parentheses group by:
        -iterating through string characters via for...of
        -adding characters to a returnString string until '(' is encountered
        -if char is '(', add one to the count of how many ')' we need, before we continue adding chars to returnString
        -If a character is ')', subtract one from the count of how many ')'s we need, before adding to returnString
        -so long as the need is 0, the function will add chars to return String  */
    
      for (const char of s) {
        if (char == '(') need++
        if (need == 0) returnString += char
        if (char == ')') need--
      }
    return returnString
    }

//--------------- Best Practices / Lessons Learned -------------------------------------

