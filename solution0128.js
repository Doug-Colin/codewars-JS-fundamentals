/*
--------------- 7 Kyu - Greet Me ------------------

Instructions:

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
Test.assertEquals(greet('riley'), 'Hello Riley!');
  });
});

--------------
PREP

Parameters: 
    -a string representing a name

Return: 
    -a 'greeting' in the form of the phrase 'Hello', followed by a space and then the name param with only the first letter capitalized.

Example:
    -"riley" --> "Hello Riley!"
    -"JACK"  --> "Hello Jack!"

Psuedo Code:
    -declare variable to save properly Capitalized name
    
    -split('') string into array of chars

    -use forEach((element, index) {}) to capitalize index 0 and lower case rest 
    
    -join('')

    -return with gretting via template literal

*/


var greet = function(name) {
    let solution = name.split('')
    
    for (let i = 0; i <= solution.length -1; i++) {
      if (i < 1) {
        solution[i] = solution[i].toUpperCase();
      } else {
        solution[i] = solution[i].toLowerCase();
      }
    }
  
    return `Hello ${solution.join('')}!`
  };


  //best practice solution used method .charAt() & slice()

  var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };