/*
--------------- 6 Kyu - Title Case ------------------

Instructions:

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is change

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(titleCase(''), '')
Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')

});
});

--------------
PREP

Parameters: 
    -title, a string of space delimited words
    -minorWords, a second string representing words that should not be capitalized, as exceptions to the casing 

Return: 
    -the string in title case, meaning the first word, and all other words except those present in minorWords, begin with a capital letter

Example:
    titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
    titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
    titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

Psuedo Code:
    -.split() the title string by spaces into an array of words 

    -using .map(), return an array with each initial letter of those words capitalized by .charAt(0).toUpperCase(), except:  
        -if minorWords.split('').includes(word) {return word.toLowerCase()}


*/

//-------------------- Solution (without comments) -------------------------------------

function titleCase(title, minorWords) {
  
    let exclusions = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    
    return title.toLowerCase().split(' ').map(function(word, index) {
      if(word != "" && ( (exclusions.indexOf(word) === -1) || index == 0)) {
        word = word.split('');
        word[0] = word[0].toUpperCase();
        word = word.join('');
      }
      return word;
    }).join(' ');
  }

//-------------------- Solution (with comments) ----------------------------------------

function titleCase(title, minorWords) {
  
    //In order to deal with arguments in which minorWords param is not included
    //declare another variable and assign it a ternary - if minorWords is undefined, return an empty array, otherwise make minorWords lowerCase and split into array of words
    let exclusions = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    
    /*   
    -Make the title string lowercase and split it into an array of words
    -.map() that array to another, with element and index parameters
      -IF each word is NOT an empty string, AND NOT in our exclusions list, OR it's the first word of our title string:
      -.split it by character, make the first letter upperCase, and .join it back together
      **Note here that we don't use .includes() to check if a word is in our minorWords param, because that would return an error if that param isn't passed in. So use .indexOf(), which returns -1 if element isn't indexed in an array.
    
    return string joined back together with spaces between words. 
    */
    return title.toLowerCase().split(' ').map(function(word, index) {
      if(word != "" && ( (exclusions.indexOf(word) === -1) || index == 0)) {
        word = word.split('');
        word[0] = word[0].toUpperCase();
        word = word.join('');
      }
      return word;
    }).join(' ');
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//The issue I was having with my solution was that in one test case, the second parameter was missing. This caused issues with undefined values, band though my solution returned the correct values for all test cases, it still failed because it did not adequately use the second param (challenge stated that failing to use second param would be invalid)

//I had trouble organizing how to use a variable that didn't exist (simply reassigning it caused issues). But as you can see here, simply declaring a variable with a *different* name and assigning it the param value || '' 
    
//Part of my problem was using my runtime to evaluate solution outside of a function- thus declaring or redeclaring param minorWords resulted in errors there.  

function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }