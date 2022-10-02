/*
--------------- 6 Kyu - Stop gninnipS My sdroW! ------------------

Instructions:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});

--------------
PREP

Parameters: 
    -a string of one or more words. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Return: 
    -the same string, but with all five or more letter words reversed

Example:
    -spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    -spinWords( "This is a test") => returns "This is a test" 
    -spinWords( "This is another test" )=> returns "This is rehtona test"        

Psuedo Code:
    -split(' ') sentence by spaces into array of words
    
    -for () loop through array of words, and if(word.length >= 5), split() it, reverse() it, join() it
    -return array of words joined. 
    
Lessons Learned:
    -remember, you can use .map() with a conditional, so long as it's in the style of an inline callback.
*/


function spinWords(string){
    //split() string/sentence by spaces, so we can work with it as an array of words 
    let split = string.split(' ');
    
    //loop through array of words, and if any word is >= five letters, split that, reverse it, and join it.
    for (let i = 0; i <= split.length - 1; i++) {
      if (split[i].length >= 5) {
        split[i] = split[i].split('').reverse().join('')
      }
    }

    //return the array of words, joined back into a sentence. 
    return split.join(' ');
  }

  //------------note 'Best Practice' solution,  ------------

  //you can use .map() with a conditional, as long as it's in the style of an inline callback.

  function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length >= 5) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
