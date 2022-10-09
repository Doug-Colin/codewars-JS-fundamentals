/*
--------------- 7 Kyu - Replace With Alphabet Position ------------------

Instructions:

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
});

--------------
PREP

Parameters: 
    -A string.

Return: 
    -A string, representing every letter in the parameter string, replaced by it's numerical position in the alphabet, separated by spaces.

Example:
    -alphabetPosition("The sunset sets at twelve o' clock.") should return:
        "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    

Psuedo Code:

    -make text lowerCase() & use .match(regex) to return array of lowercase letters only
        let letters = text.toLowerCase().match(/[a-z]/g);


    -map the array of letters only to their ASCII character codes via charCodeAt(), and subtract 96 for alphabet position   
        letters.map(x => x.charCodeAt() - 96)

    -.join(' ') solution array into string with spaces between strings. 
        .join(' ')

        -return
*/

/*This did not work; it passed sll tests, but when submitting I received error: 
 "TypeError: Cannot read property 'map' of null"
      at alphabetPosition (test.js:7:20)
      at Context.it (test.js:31:25)

      This is the test it failed: Testing "|{+(5}6["

*/

function alphabetPosition(text) {
    
    let letters = text.toLowerCase().match(/[a-z]/g);

    return letters.map(x => x.charCodeAt() - 96).join(' ')


}


//This is best-practice solution. I copied and pasted it over. BUT EVEN THIS GETS THE SAME ERROR!!

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }


  
