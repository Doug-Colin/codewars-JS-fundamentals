/*
--------------- 6 Kyu -  ------------------

Instructions:

DESCRIPTION:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

-------------
Sample Tests

const strictEqual = require('chai').assert.strictEqual;

function doTest (braces, expected) {
	const actual = validBraces(braces);
	strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
}

describe("Tests suite", function() {
  it("sample tests", function() {
	doTest("()))", false);
    doTest("()", true);
    doTest("[]", true);
    doTest("{}", true);
    doTest("(){}[]", true);
    doTest("([{}])", true);
    doTest("(}", false);
    doTest("[(])", false);
    doTest("({})[({})]", true);
    doTest("(})", false);
    doTest("(({{[[]]}}))", true);
    doTest("{}({})[]", true);
    doTest(")(}{][", false);
    doTest("())({}}{()][][", false);
    doTest("(((({{", false);
    doTest("}}]]))}])", false);
  });
});

--------------
PREP

Parameters: 
    -braces, a string of brace characters
    
Return: 
    -true if all opening bracs are functionally matched to closing braces
    
Example:

  "(){}[]"   =>  True
  "([{}])"   =>  True
  "(}"       =>  False
  "[(])"     =>  False
  "[({})](]" =>  False

Psuedo Code:
    -Botched this one pretty good. Reviewing the below best practice solution and attempting again. 
    -
    -
*/

function validBraces(braces){
  const matches = { '(':')', '{':'}', '[':']' };
  let stack = [];
  let currentChar;

  for (let i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // if currentChar is a property of matches Obj., (if currentChar == a lefthand brace),  push it into stack Array
      stack.push(currentChar);
    } else { // if currentChar !== a lefthand brace, hence is a righthand/clsoing brace, return false.  ***How does returning false alter the stack array?
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
