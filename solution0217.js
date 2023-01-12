/*
--------------- 8 Kyu - Add Length ------------------

Instructions:

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
  });
});


--------------
PREP

Parameters: 
    -str, a string of words

Return: 
    -the string as an array wherein each element is a word from the param string, followed by a space, and the word's length


Example:
    "apple ban" --> ["apple 5", "ban 3"]
    "you will win" -->["you 3", "will 4", "win 3"]

Psuedo Code:
    -.split(' ') string by spaces so we can work on it as an array of words
    
    -.map() string and use template literal to return each array element/word, followed by a space and its .length


*/
//-------------------- Solution- version with comments below -------------------------------------

function addLength(str) {
  return str.split(' ').map((x) => {
    return `${x} ${x.length}`
  })
  }

//-------------------------- Solution With Comments ------------------------------------

function addLength(str) {
    //.split(' ') string by spaces so we can work on it as an array of words
    //use .map() & template literal to return each array element/word, followed by a space and its .length
  return str.split(' ').map((x) => {
    return `${x} ${x.length}`
  })
  }

//----- Best Practices / Lessons Learned ---------------
