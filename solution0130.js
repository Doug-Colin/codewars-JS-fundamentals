/*
--------------- 7 Kyu - Sort the Gift Code ------------------

Instructions:

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sortGiftCode('abcdef'), 'abcdef');
Test.assertEquals(sortGiftCode('pqksuvy'), 'kpqsuvy');
Test.assertEquals(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');
  });
});


--------------
PREP

Parameters: 
    -a string containing up to 26 unique alphabetical characters

Return: 
    -a string containing the same characters in alphabetical order.

Example:
    -"abcdef"                      -- => "abcdef"
    -"pqksuvy"                     -- => "kpqsuvy"
    -"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

Psuedo Code:
    -.split('') string so we can work on it as an array

    -.sort() string with compare function using localeCompare to compare a and b
    
        -.sort((a, b) => a.localeCompare(b))

    -.join('') back into string, return

*/


function sortGiftCode(code){
  
    //.split('') string so we can work on it as an array
    //.sort() string with compare function using localeCompare so it works with letters
    //.join('') back into string, return
    
    return code.split('').sort((a, b) => a.localeCompare(b)).join('');
    
  }
  

