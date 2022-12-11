/*
--------------- 6 Kyu - Decode the Morse code ------------------

Instructions:

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.
-------------
Sample Tests

const { assert } = require('chai');

describe("Sample tests", function(){
  
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('    . -.--   '), 'HEY');
  });
  
});


--------------
PREP

Parameters: 
    -morseCode, a string with ASCII chars representing Morse Code   

Return: 
    -the morse code decoded into a readable string


Example:
    decodeMorse('.... . -.--   .--- ..- -.. .')
    //should return "HEY JUDE"

Psuedo Code:
    -.split() the string by three spaces into an array of words.

    -.map() that array, splitting each word into chars by single space. 

    -.map() the chars, passing each char into the given dictionary MORSE_CODE[]
    
    -.join() converted letters into words. 

    -/.join() words into string, return
*/
//-------------------- Solution- version with comments below -------------------------------------
decodeMorse = function(morseCode){

    let wordsArr = morseCode.trim().split('  ')
    
    return wordsArr.map(x => x.split(' ').map(x => MORSE_CODE[x]).join('')).join(' ')  
      
    }

//-------------------------- Solution With Comments ------------------------------------
decodeMorse = function(morseCode){

    //use .trim() to remove white spaces before and after string
    //.split() morseCode string by three spaces into individial words so we can work on them as array
    //save to variable
    let wordsArr = morseCode.trim().split('  ')
    
    //.map() words array, splitting each word by single spaces into an array of individual morse letter codes
    //then .map() each array of individual morse letter codes, using the MORSE_CODE dictionary to convert to letters
    //.join() the individual letters back into words, and then .join() the words into a sentence separated by spaces
    return wordsArr.map(x => x.split(' ').map(x => MORSE_CODE[x]).join('')).join(' ')  
      
    }

//----- Best Practices / Lessons Learned ---------------
