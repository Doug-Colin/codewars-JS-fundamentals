/* 

*Repeat- Part Of String Methods Series*
--------------- 6 Kyu - Count the smiley faces! ------------------

Instructions:

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

-------------
Sample Tests

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

--------------
PREP

Parameters: An array of 'smiley face-esque' character collections

Return: The total number of actual smiley faces

Example: [':D',':~)',';~D',':)'] => 4

Psuedo Code:
-use .filter() to return array
-filter for regex statement
- regex = /^ ... $/, start to finish
    [:;]
    [-~]
    ? (greedy quantifier, matches 0 or 1 times, as many times as possible  )
    [)D]
-.test(array).length
*/

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }