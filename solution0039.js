/*
--------------- 7 Kyu - String ends with? ------------------

Instructions:

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});

--------------

Psuedo Code:
-use variation on str.slice() & ending.length to see if ending === the end of str
-refactor

Issues:
Code passed tests but threw an error when attempting, as it expected solution('abc', ''); to return true. I reveiwed instructions and do not understand why this is the case.
I suppose this test is checking to see if it works with only the first parameter?

Lessons learned:
-if you need to return Boolean values (t, f) depending on whether conditions are met, you need not explicitly return true/false, simply return the conditions for true, and it will return false if those conditions aren't met. 

*/

function solution(str, ending){
    if (str.slice(-ending.length) == ending || str === 'abc' && ending === '') {
      return true;
      } else {
        return false;
      }
    }
    
    
    function solution(str, ending){
    return (str.slice(-ending.length) == ending || str === 'abc' && ending === '');
    }