/*
--------------- 6 Kyu - 
Simple reversed parenthesis ------------------

Instructions:

Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

-------------
Sample Tests

describe("Basic tests", function(){
Test.assertEquals(solve(")()("),2);
Test.assertEquals(solve("((()"),1);
Test.assertEquals(solve("((("),-1);
Test.assertEquals(solve("())((("),3);
Test.assertEquals(solve("())()))))()()("),4);
});

--------------
PREP

Parameters: 
    -s, a string of characters, freqeuentlt but not necessarily consisting of parentheses 

Return: 
    -the number of parentheses that need reversing in order to "balance" the string


Example:

    solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
    solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
    solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

Psuedo Code:
    -first, check if char. length is even via %2. 
        -If not, return -1
        -otherwise:

    -split string into an array of two strings at the center via .splice(str.length/2)

    -declare array variable to hold solution

    -.filter() each substring/'side' of string for 'incorrect' parenthesis, and right side of string for l.h., adn push into solution array?
    
    -or, use forEach() and a counter variable.

    -return total 


*/
//-------------------- Solution- version with comments below -------------------------------------
function solve(s) {
    //if string length is odd, return -1
    if (s.length % 2 != 0)
      return -1;

    //declare variables to keep track of count as we iterate through chars of s
    let res = 0, k = 0;

    //use for ... of loop to iterate through chars of s
    for (let c of s) {
      //if char is left p., increment k
      if (c == '(')
        k++;
      //if char is right p., and there has already been at least one left p., decrement k
      else if (k > 0)
        k--;
     //if char is right p, and there has been no left p, increment k and res
      else
        k++, res++;
    }
    //solution is sum of k and res divided by two
    return res + k / 2;
  }

//-------------------------- Solution With Comments ------------------------------------
function solve(s) {
    if (s.length % 2 != 0)
      return -1;
    let res = 0, k = 0;
    for (let c of s) {
      if (c == '(')
        k++;
      else if (k > 0)
        k--;
      else
        k++, res++;
    }
    return res + k / 2;
  }

//----- Best Practices / Lessons Learned ---------------
//My initial approach didn't work. The key was to find an algorithm that would identify the minimum number of reversals in order to find balance.  