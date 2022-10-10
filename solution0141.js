/*
--------------- 8 Kyu - Keep up the hoop ------------------

Instructions:

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
  });
});

--------------
PREP

Parameters: 
    -a number

Return: 
    -one of two given strings, whether number is >= 10

Example:
    -see Instructions 

Psuedo Code:
    -use ternary to return either string whether n >=10.

*/


function hoopCount (n) {
    //use ternary statement to return "Great..." if (n >=10), and "Keep..." otherwise.
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
 }