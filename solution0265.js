/*
--------------- 7 Kyu - Alternate capitalization ------------------

Instructions:

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, ple

-------------
Sample Tests

describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
});

--------------
PREP

Parameters: 
    -s, a string

Return: 
    -an array in which [0] is the param string with all even indices capitalized, and all odd indices lowercase, and [1] is the opposite

Example:
    capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

Psuedo Code:
    -.split('') string into chars array

    -.map() it with element and index params, capitalizing it if index is even (%2==0) and lowercasing it otherwise. Push it into an array

    -do the same thing but with index logic reversed, push into array



*/

//-------------------- Solution (without comments) -------------------------------------

function capitalize(s){
  
    let solution = []
    s = s.split('')
    
    solution.push( s.map((x, i) => {
      return i%2 == 0 ? x.toUpperCase() : x.toLowerCase()
    }).join('')
                 )

    solution.push(s.map((x, i) => {
      return i%2 == 0 ? x.toLowerCase() : x.toUpperCase() 
    }).join('')
                 )
     
    return solution
                 
  };

//-------------------- Solution (with comments) ----------------------------------------

function capitalize(s){
  
    //declare empty solution array so we can .push() our altered strings into it
    let solution = []
    
    //.split() s by chars and save
    s = s.split('')
    
    //Using .map() & ternary statement, iterate through string, checking if index is even via %2.
    //If index is even, make that letter upperCase, otherwise lowerCase
    //join letters back together and .push() into our solution array
    solution.push( s.map((x, i) => {
      return i%2 == 0 ? x.toUpperCase() : x.toLowerCase()
    }).join('')
                 )
    //do the same thing, but with the ternary return values reversed
    //now letters with even indices will be lowerCase, othe others Upper
    //.join letters together and .push() into solution array
    solution.push(s.map((x, i) => {
      return i%2 == 0 ? x.toLowerCase() : x.toUpperCase() 
    }).join('')
                 )
    //   
    return solution
                 
  };

//--------------- Best Practices / Lessons Learned -------------------------------------

