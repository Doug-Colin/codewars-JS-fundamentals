/*
--------------- 7 Kyu - Exclamation marks series #5: Remove all exclamation marks from the end of words ------------------

Instructions:

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

-------------
Sample Tests



--------------
PREP

Parameters: 
    -A string, possibly containing multiple words separated by spaces.

Return: 
    -The string with all exclamation marks removed from the end of words.
    



Example:
    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi Hi"
    remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

Psuedo Code:
    -split(' ') string into array of individual words.

    -.map() string; accessing the end of each word/element by array[element.length]

    -use ternary and == '!' to return string without exclamation, or replace() each exclamation with ''


*/
//Via loop, this was only possible with a double loop, or a loop inside map().
//Top solutions all used regex as below (added to Anki) 

function remove(s){
    return s.replace(/\b!+/g, '');  
  }

//----- Best Practices / Lessons Learned ---------------
//You can use assertions within regex statements to include boundaries in your terms. For example; the beginnings and endings of lines and words.

// \b matches a word boundary. within a regex statement to match the preceding character(s) if they are at the end of a string, because it matches your pattern if it is not followed by any word character.  