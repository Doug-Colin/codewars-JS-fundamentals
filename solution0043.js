/*
--------------- 8 Kyu - Capitalization and Mutability ------------------

Instructions:

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(capitalizeWord('word'), 'Word');
Test.assertSimilar(capitalizeWord('i'), 'I');
Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
  });
});

--------------

Psuedo Code:
-the issue is that the given function only returns the capitalized first letter, without the rest of the string

-word[0].toUpperCase() changes first letter of string to Capital
-must add the rest of the string
-rest of string can be appended using math operator + and slice(1), which will return the original string/array from index 1 forward.
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }