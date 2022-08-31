/*
--------------- 8 Kyu - Reversed Words ------------------

Instructions:

Complete the solution so that it reverses all of the words within the string passed in.

-------------
Sample Tests

describe("reverseWords",function(){
  it("should work for some examples", function(){
    Test.assertEquals(reverseWords("hello world!"), "world! hello")
    Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
    Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
    Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
  });
});

--------------
PREP

Parameters: a string

Return: a string with the words reversed (not the letters)

Example:  "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

Psuedo Code: 
-.split(' ') string by spaces to turn into array
-use .reverse() on array
-re .join(' ') string. 

*/

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }