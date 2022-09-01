/*
--------------- 7 Kyu - Sum of odd numbers ------------------

Instructions:

Given the triangle of consecutive odd numbers:

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)


-------------
Sample Tests



--------------
PREP

Parameters: a number from 1-5 representing one of the rows of odd integers in the fiven traingle.

Return: the sum of the numbers in that row. 

Example:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

1 -->  1
2 --> 3 + 5 = 8

Psuedo Code:
- one way to approach this is, through an object with the key:value pairs of each row # and the sum.
- so , declare object literal
- assign key:value pairs (1:1, 2:8) etc
- okay so the triangle is not limited to what's given, it's endless
- so find the relationship:
- n 1 = 1/first odd number
-n 2 = sum of the two odd numbers after the first one odd #
-n3 = sum of the three odd numbers after the first three
-n4 = sum of the four odd numbers after the first six
-n5 = sum of the 5 odd numbers follwing the first 10 odd numbers 
-okay if it's an array we're iterating through of odd #'s, what's 
-indexes of starting lines '0 1 3 6 10 15'
-can't find a relationship. 
-answer is N^3, or n**3. How tf was I supposed to find that relationship ... 
*/ 

function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}