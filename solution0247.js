/*
---------------  Kyu -  ------------------

Instructions:

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

-------------
Sample Tests

describe("Basic tests", function(){
Test.assertEquals(solve("code"),"code");
Test.assertEquals(solve("CODe"),"CODE");
Test.assertEquals(solve("COde"),"code");
Test.assertEquals(solve("Code"),"code");
});


--------------
PREP

Parameters: 
    -s, a string

Return: 
    -the string in all lowercase or all uppercase letters, depending on what takes the least steps
    -if upper and lower case chars are equal, convert the string to lowercase

Example:
    solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
    solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
    solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

Psuedo Code:
    -options:
        -could use count object and convert string depending on count
        -could use regex, checking if match is < length, and = length, returning converted string after. 
        -latter choice should be less code.



*/

//-------------------- Solution (without comments) -------------------------------------

function solve(s) {
  
    const regEx = (/[A-Z]/g)
      
    let uppers = s.match(regEx)
      if (s == s.toLowerCase() || s == s.toUpperCase()) {
        return  s
    } else if (uppers == s.length/2) {
        return s.toLowerCase()
    } else {
        return uppers.length > s.length/2 ? s.toUpperCase() : s.toLowerCase()
    }
}

//-------------------- Solution (with comments) ----------------------------------------

function solve(s) {
    //declare regex variable that will capture all capital letters in s
    const regEx = (/[A-Z]/g)
    
    //call .match() on s to return an array of all capital letters, if present 
    let uppers = s.match(regEx)
    
    //if param string s equals itself in lowercase, or itself in uppercase, return as is
      if (s == s.toLowerCase() || s == s.toUpperCase()) {
        return  s
      //otherwise, if uppercase letters equal half of string, return s in lowerCase  
    } else if (uppers == s.length/2) {
        return s.toLowerCase()
      //otherwise, use ternary statement to:
        //check if there's a majority of uppercase letters.
        //if so, return s in uppercase, otherwise return s in lowercase.
    } else {
        return uppers.length > s.length/2 ? s.toUpperCase() : s.toLowerCase()
    }
}

//--------------- Best Practices / Lessons Learned -------------------------------------
//Much DRYer with simplified logic and ES6 arrow function

const solve = s =>
  s.replace(/[a-z]/g, ``).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();