/*
--------------- 8 Kyu - If you can't sleep, just count sheep!! ------------------

Instructions:

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

-------------
Sample Tests



--------------
PREP

Parameters: A single non-negative integer.

Return: A string that 'counts sheep' from up to the integer.

Example: 3 => "1 sheep...2 sheep...3 sheep..."

Psuedo Code:
-declare variable and assign an empty string to hold the solution

-use for loop to count to the integer; for (let i = 0; i <= num; i++) {}

-{ str = `${i} sheep...`}

-return variable

Lessons learned:

- reassigning the empty solution variable alone will not work. 

-if you need to repeat a string a given number of times, the best way to do that is:
    -use a for loop to iterate through the number of times, 
        for (let i = 1; i <= num; i++) {}
    
        -in the loop's code block, use the =+ operator (addition assignment) to reassign the statement 
    
        -note that if the string variable is not yet declared, you must declare an empty string variable outside of the loop block, so it can be addition-reassigned within
*/

var countSheep = function (num){

    //declare empty string variable to hold solution
    let solution = ''

    //loop through the number of times we want to repeat the string
    for (let i = 1; i <= num; i++) {

        //Reassign the solution to the desired text that needs repeating, with the += operator, interpolating i with a template literal.
        solution += `${i} sheep...`;
    }
    return solution;
  }

  /* Note:
  
  Why we need to use the addition-assignment operator (+=), as opposed to standard assigment (=):
  -By using standard assignment operator (=) to reassign the solution variable, it would be reassigned each iteration of the loop. So each iteration of the loop results in reassignment of the variable.
  -However by by using the addition-assignment operator (+=) instead, each iteration of the loop results in additive reassignment of the variable, so each iteration is concatenated ot the last. 
*/