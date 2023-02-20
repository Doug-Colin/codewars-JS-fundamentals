/*
--------------- 5 Kyu - First non-repeating character ------------------

Instructions:

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});

--------------
PREP

Parameters: 
    -s, a string

Return: 
    -the first non-repeating letter in the string

Example:
    'stress' --> 't'

Psuedo Code:
    -approaches:
        -.split() string into array of individual characters, counting each character, putting counts into array, and returning the first non-repeating letter by it's index, which would be equivalent in the counts array.
        -use regex to return the first non-repeating character (if possible), minus whitespace.
        -using counter Object to count occurencees of letters, and Object methods to return the correct character/''

    -had issues with regex, ended up solving via Object methods


*/

//-------------------- Solution (without comments) -------------------------------------
function firstNonRepeatingLetter(s) {
    let lowerCaseStr = s.toLowerCase()
    
    let counter = {}
    
    for (const element of lowerCaseStr) {
      if (counter[element]) {
      counter[element] += 1;
      } else {
      counter[element] = 1
      }
    }
    
    const countArray = Object.entries(counter)
    
    if (Object.values(counter).includes(1)) {
      return s.charAt(lowerCaseStr.indexOf(countArray.find(x => x[1] === 1)[0]));
    } else {
      return '';
    }
    
  }


//-------------------- Solution (with comments) ----------------------------------------

function firstNonRepeatingLetter(s) {

    //create lower case version of param string so case doesn't mess up our counting of letters
    let lowerCaseStr = s.toLowerCase()
    
    //declare empty counter Object to hold our count of letters
    let counter = {}
    
    //Use for ... of to iterate through lower case version of param string, counting occurences of each letter
    for (const element of lowerCaseStr) {
      if (counter[element]) {
      counter[element] += 1;
      } else {
      counter[element] = 1
      }
    }
    
    //Use Object.entries to convert our counter object into an array of it's key-value pairs, so it's easier to work with
    const countArray = Object.entries(counter)
    
    /*Use object.values to check if our counter array has a non-repeating character.
      If it does, we want to return it by:
        -using .find() on our array of counter key-values to determine the letter  
        -and, since our string was converted to lower case, finding the index of that letter via .indexOf(), and returning the corresponding char. in our original string via .charAt().
        
      If our counter array doesn't have a non-repeating character, return ''
    */ 
    if (Object.values(counter).includes(1)) {
      return s.charAt(lowerCaseStr.indexOf(countArray.find(x => x[1] === 1)[0]));
    } else {
      return '';
    }
    
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//examine how this solution leverages RegEx for much drier code. 

  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

// examine how this solution succesfully used .indexOf/.lastIndexOf (tried this solution initially but failed.)
  function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }
  