/*
--------------- 7 Kyu - Get the Middle Character ------------------

Instructions:

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

-------------
Sample Tests

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});

--------------

Psuedo Code:
-don't need to split() string,
-if str.length() is an odd #, return middle character 
-otherwise (if str.length() is an even #), return middle two characters 
-can determine odd middle character by index of Math.ceil(.length/2)
-can determine even middle characters by .length/2 and .length/2 + 1

Lessons learned:
-If you're trying to find the middle character of a an odd-length string, be sure to use Math.floor/2
-according to other solutions, you don't need to use bracket notation to access characters of a string, as you would an array. You can simply use str.length/2 instead of str[str.length/2]
*/

function getMiddle(s)
{
 return s.length % 2 === 0 ? s[s.length/2 -1] + s[s.length/2] : s[Math.floor(s.length/2)];  
}