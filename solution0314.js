/*
--------------- 6 Kyu - Kebabize ------------------

Instructions:

Modify the kebabize function so that it converts a camel case string into a kebab case.

-------------
Sample Tests

describe('tests', () => {
  it('fixed tests', () => {
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
});

--------------
PREP

Parameters: 
    -str, a string in camelCase

Return: 
    -the string in kebab case (all lowercase with dashes in between words, no spaces)
    -if param is hsa numbers remove them
    -if aram is all caps, no spaces, put dashes between each char

Example:
    "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
    "camelsHave3Humps"  -->  "camels-have-humps"
    "CAMEL"  -->  "c-a-m-e-l"

Psuedo Code:
    -if str does not have lowercase characters, turn is all lowercase, split into array of chars, add dashes starting at index 1 and ending at final index, join and return

    -if str has nubmers, trim the numbers with a regex for digits

    -take the str without numbers and split it by Capital letters, do the same split and replacement as before


*/

//-------------------- Solution (without comments) -------------------------------------

function kebabize(str) {
    return str.replace(/\d/g, '')       
           .split(/(?=[A-Z])/)          
           .map(x => x.toLowerCase())   
  }

//-------------------- Solution (with comments) ----------------------------------------

function kebabize(str) {
    return str.replace(/\d/g, '')       //remove digits via regex that matches all digits & .replace() with nothing
           .split(/(?=[A-Z])/)          //.split() string via regex that matches index before a capital letter
           .map(x => x.toLowerCase())   //turn each word in string lowercase 
           .join('-')                   //join back together with dashes, KEBAB STYLE
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//could be slightly more concise by putting arrow functions in .replace()
//but why replace all non capital chars with lowercase chars? seems redundant
function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').                 //remove anything that's not a-z, case insensitive 
           replace(/^[A-Z]/, c => c.toLowerCase()).     //match the first capital letter and make it lowercase....
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);  //replace all capitals with a dash and the letter in lowercase
  }
//seems second .replace() was solving for some test cases that my solution passed