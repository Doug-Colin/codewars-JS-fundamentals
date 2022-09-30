/*
--------------- 6 Kyu - Counting Duplicates ------------------

Instructions:

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

  });
});


--------------
PREP

Parameters: 
    -a string, possibly containing letter and number characters 

Return: 
    -the number of distinct characters/digits that occur more than once in the given string

Examples:
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice



Psuedo Code:
    -split() string into an array

    -create counter{} object and use a for ... of loop to count occurrence of each character

    -declare empty array to hold repeated characters

    -use a for ... in loop to iterate through counter object properties and push repeating characters into solution array
    
    -return solution array

*/
//This solution is verbose. See best-practice answer & breakdown below (add to Anki). 

function duplicateCount(text){
  
    let string = text.toLowerCase().split('')
    let counter = {}
    let solution = []
    
    for (const element of string) {
    if (counter[element]) {
      counter[element] +=1;
      } else {
        counter[element] =1;
      }
    }
    
    for (const property in counter) {
    if (counter[property] > 1) {
      solution.push(counter[property])
    }
  }
    
    return solution.length;
  }
  
  //----  best practices answer (non regex), broken down -------------

    function duplicateCount(text){
        //compare elements case-insensitive by making string lowerCase
        //split() to turn into array
        //use .filter(function (value, index, arr)) in order to filter for repeated chars
        //.filter test condition 
        return text.toLowerCase()
                   .split('')
                   .filter(function(element, index, arr) {
                    return arr.indexOf(element) !== index && arr.lastIndexOf(element) === index;}).length;
        }
  

  