/*
--------------- 6 Kyu - Encrypt this! ------------------

Instructions:

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

-------------
Sample Tests

const assert = require("chai").assert;

describe("Fixed Tests", function() {
  it("should work with fixed tests", function() {
    assert.strictEqual(encryptThis("A"), "65");
    assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
    assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
    assert.strictEqual(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
    assert.strictEqual(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
    assert.strictEqual(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    
  });
});

--------------
PREP

Parameters: 
    -text, a string with space separated words, no special characters (letters only). 

Return: 
    -the string encrypted according to the instructions (each word with first letter as ASCII code and second letter switched with last)

Example:
    encryptThis("Hello") === "72olle"
    encryptThis("good") === "103doo"
    encryptThis("hello world") === "104olle 119drlo"    

Psuedo Code:
    -find ASCII table and create Object with key-value pairs of char:Ascii code to serve as dictionary

    -.split() the string by spaces into array of words

    -.map() array of words:
        -split() each word into chars
        -map() those chars with index param
        -if index == 0 return ASCII code via dictionary Object
        -if index == 1 return last letter via method
        -if char is final char return second letter
    
    -actually, may be able to skip the nested .map(), and use a second dict Object instead. 

    -actually, don't need ASCII dict object, just use .charCodeAt()
    -probably best to just return an interpolated string via one single map?



*/

//-------------------- Solution (without comments) -------------------------------------

const encryptThis = text => {

    return text.split(' ').map((word) => {
      return word.split('').map((char, index) => {   
        
        let ascii = word.charCodeAt(0)
        let secondChar = word.charAt(1)
        let lastChar = word.charAt(word.length-1)
        let lastIndex = word.lastIndexOf(lastChar)

        let encryptByIndex = {
          0 : ascii,
          1 : lastChar,
          [lastIndex] : secondChar
        }

        return word.length == 1 ? ascii : encryptByIndex[index] || char
      }).join('')
    }).join(' ')
  }

//-------------------- Solution (with comments) ----------------------------------------

const encryptThis = text => {
  
    //split sentence into array of individual words and .map() array of words
    //on each word iteration, split word into array of characters and .map() characters with element and index param
    return text.split(' ').map((word) => {
      return word.split('').map((char, index) => {   
        
        //declare variables for each piece of data that we need for our encryption
        let ascii = word.charCodeAt(0)
        let secondChar = word.charAt(1)
        let lastChar = word.charAt(word.length-1)
        let lastIndex = word.lastIndexOf(lastChar)
        
        //This Object serves as a dicitonary we can now use to encrypt characters by their index-
        //The keys are the indices of characters that need encryption; the values are the appropriate values
        let encryptByIndex = {
          0 : ascii,
          1 : lastChar,
          [lastIndex] : secondChar
        }
        //if a word is only one character long, the enccryption obejct doesn't work (possibly due to .split('')?
        //so if that's the case, return the ascii value,
        //otherwise, for words longer than 1 char, return the correct value by
        //passing the char's index into the Object, or return the char as is, for chars who's index isn't in the Object 
        return word.length == 1 ? ascii : encryptByIndex[index] || char
      }).join('')
    }).join(' ')
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//  -solutions voted best practice used regEx and were shorter, but also highly illegible:
const encryptRegex = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
