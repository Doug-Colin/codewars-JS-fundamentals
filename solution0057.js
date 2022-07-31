/*
--------------- 7 Kyu - Testing 1-2-3 ------------------

Instructions:

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(number([]), [], 'Empty array should return empty array');
Test.assertSimilar(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
  });
});


--------------

Psuedo Code:

-.map()?
-was thinking may need a loop or foreach but this could be simp.e
-use .map(element, index) and a template literal with index # of each element +1

Lessons Learned:
-in a solution like this you need to return the .map() method and *also* return the function within the .map() method  
*/


var number=function(array){
    return array.map((x, i) => {return(`${i + 1}: ${x}`)})
    }
    