/*
--------------- 7 Kyu - Sort array by string length ------------------

Instructions:

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

-------------
Sample Tests

describe("Example tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
});

--------------
PREP

Parameters: 
    -an array of strings

Return: 
    -the array sorted ascending by string length

Example:

    -["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]


Psuedo Code:
    -use .sort() method with function that arranges element by element.length


*/


//use .sort() method and arrange elements by length
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
   };
