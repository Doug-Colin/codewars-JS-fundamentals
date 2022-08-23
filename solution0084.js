/*
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

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

-------------
Sample Tests



--------------
PREP

Parameters: an array of strings containing hte following characters: ':', ';', '-', '~', ')', 'D'.

Return: numer of array elements that consist of 'smily faces', beginning with one of the first two characters, followed by either of the second two and then wither of the final two, or the first two then final two. 

Example: countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;

Psuedo Code: 
-filter(x =>) array, with /regex/.test()
.test() will return true for successfull regex match
-? makes the previous match optional.
-^ means beginning of string/line and $ means end of string/line
-so /^[:;][-~]?[)D]$ .. should match/true, from beginning to end of string, smiley 'eyes', 'nose' optional, smiley 'mouth' 
*/

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }


