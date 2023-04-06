/*
--------------- 7 Kyu - Palindrom Chain Length ------------------

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

-------------
Sample Tests



--------------
PREP

Parameters: 
    -n, an integer

Return: 
    -number of steps

Example:
     87 +   78 =  165     - step 1, not a palindrome
     165 +  561 =  726     - step 2, not a palindrome
     726 +  627 = 1353     - step 3, not a palindrome
     1353 + 3531 = 4884     - step 4, palindrome!

Psuedo Code:
    -write function to reverse n

    -use while loop to:
     -check if n == itself reversed
     -if not, add it to itself reversed and check again
     -count each time this runs

    -return count 


*/

//-------------------- Solution (without comments) -------------------------------------

var palindromeChainLength = function(n) {

    let steps = 0

    const reverseNum = num => Number(num.toString().split('').reverse().join(''));
    
    while (reverseNum(n) !== n ) {
    n = n + reverseNum(n)
    steps++
    }
    
    return steps
  };

//-------------------- Solution (with comments) ----------------------------------------

var palindromeChainLength = function(n) {
    //declare variable to hold count of steps
    let steps = 0
    //function converts reverses n
    const reverseNum = num => Number(num.toString().split('').reverse().join(''));
    
    //while loop - so long as n does not equal itself reversed, 
    //reassign n to the next steps value &
    //increment steps counter by one
    while (reverseNum(n) !== n ) {
    n = n + reverseNum(n)
    steps++
    }
    
    return steps
  };

//--------------- Best Practices / Lessons Learned -------------------------------------

