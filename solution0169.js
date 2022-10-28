/*
--------------- 8 Kyu -  ------------------

Instructions:

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
  });
});

--------------
PREP

Parameters: 
    - c, a number representing ASCII code of a char
     
Return: 
    -the char represented by param c
    
Example:

get_char(65) --> 'A'

Psuedo Code:
    -Pass param c into String.charFromCode() in order to find out what char it represents
    -
    -
*/

function getChar(c){
  return String.fromCharCode(c);
}
