/*
--------------- 7 Kyu - Vowel Count ------------------

Instructions:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

-------------
Sample Tests

--------------

Psuedo Code:

-use .split to separate the string into letters
-use .filter() to return an array of the spec'd vowels
-return array.length

Lessons Learned:
-.includes() & .replace() are both string methods you could have used here. The most concise solutions used one or the other.
-switch ... case statements are not great for filtering strings for characters, way too verbose. 
*/

function getCount(str) {
    return (str.split('').filter(char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u').length);
 }