/*
--------------- 5 Kyu - The Hashtag Generator ------------------

Instructions:

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
});
});

--------------
PREP

Parameters: 
    -str, a string

Return: 
    -The string concatenated together, preceded by a hashtag, with the first letter of all words capitalized.
        -if final result is > 140 chars, return false
        -if input or result is empty, return false


Example:
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false

Psuedo Code:
    -Tasks:
        -make first letter capital
        -prepend hashtag
    -

    -


*/
//-------------------- Solution- version with comments below -------------------------------------
function generateHashtag (str) {

    if (str.length == 0 || str.replaceAll(/\s/g, '').length == 0) {
    return false
  } else {
    const upperCased = str.split(' ').map((x) => {
            return x.charAt(0).toUpperCase() + x.slice(1)
          })
    
    const solution = "#".concat(upperCased).replaceAll(',', '')
    
    return solution.length > 140 ? false : solution
    }
}

//-------------------------- Solution With Comments ------------------------------------
function generateHashtag (str) {

    //check if string length is 0, or, if string.length after removing all whitespace chars is 0
    //if so return false
    if (str.length == 0 || str.replaceAll(/\s/g, '').length == 0) {
    return false
  } else {
    
    //otherwise, uppercase the first letter of every word by
      //using .split(' ') to split str param into an array of individual words
      //use .map() to replace each word with the word's first letter .toUpperCase() concatenated (+) with the rest of the word 
    const upperCased = str.split(' ').map((x) => {
            return x.charAt(0).toUpperCase() + x.slice(1)
          })
    
      //Add a hastag to our now upper-cased strings via .concat()
      //use .replaceAll() to get rid of the commas leftover in the string from the array
    const solution = "#".concat(upperCased).replaceAll(',', '')
    
      //if solution is longer than 140 chars return false, otherwise return solution
    return solution.length > 140 ? false : solution
    }
}

//----- Best Practices / Lessons Learned ---------------
