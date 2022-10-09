/*
--------------- 6 Kyu - Your order, please ------------------

Instructions:

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.



-------------
Sample Tests

const {assert} = require('chai');

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order(""), "", "empty input should return empty string" )
  });
});

--------------
PREP

Parameters: 
    -A string of words, with each word containing a single number from 1-9.

Return: 
    -The string of words sorted ascending, in order of the numbers they contain, or an empty string if one should be passed.  

Example:
    -"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    -"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    -""  -->  ""

Psuedo Code:
    -split words string into array of individual words
    
    -save an empty array so we can later push() the words into it, in order

    -loop/iterate through the numbers contained in the array words

    -on each iteration of loop, user forEach() to see if individial words of array contain number of iteration
        -if word containes number of iteration (1, 2, 3 ...), push word into solution array

    -return solution array joined into a string, separated by spaces. 
*/


function order(words){
  
    //split the sentence string into an array of individual words via split(' ')
    let split = words.split(' ')
    
    //save empty array to variable named solution, so we can populate it later, with the words in order 
    let solution = []
    
    
    //use for loop to iterate through numbers in the array of words
    for (let i = 1; i <= split.length; i++) {
      
       //on each loop iteration, use forEach() to call a function for all words of the array
       // if (word characters match the iteration number), push that word into the solutions array 
       split.forEach(function(word) {
          if (word.match(i)) {
               solution.push(word)
             }
          })
    }
    //return the solution array, which now has words in order, joined back into a string separated by spaces
    return(solution.join(' '))
  }

//------------- Lessons Learned - Best Practices Solution ---------------------------

//  The most efficient way to sort an array of strings by what characters they contain, is to write a custom compare function for .sort() using .match(regex)

  function order(words){
  
    //split(' ') words by spaces so we can work with them as an array
    //use .sort() with custom compare function, that compares array elements by the numbers they contain, using .match(regex)

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}   

