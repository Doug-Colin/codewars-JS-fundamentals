/*

-----Repeat? - looks like I did this one without realizing it was identical to another challenge I'd done.

--------------- 8 Kyu - Convert a Boolean to a String ------------------

Instructions:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});

--------------

Psuedo Code:
convert boolean to string
should be able to use toString() method
lets try- yep
*/

function booleanToString(b){
    return b.toString();
  }