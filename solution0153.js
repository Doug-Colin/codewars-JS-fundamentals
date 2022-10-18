/*
--------------- 8 Kyu - The Feast of Many Beasts ------------------

Instructions:

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
  });
});

--------------
PREP

Parameters: 
    -beast, a string representing the animals name 
    -dish, a string representing the animals dish  

Return: 
    -


Example:
    feast("great blue heron", "garlic naan"), true)
    feast("brown bear", "bear claw"), false)

Psuedo Code:
    -use bracket notation and .split('').pop() to get first and last characters, respectively

    -compare if first & last characters of both parameters match via ternary, return true if so, otherwise false 

*/

//I know this solution is verbose dogshit but I'm half awake and it's time for bed
function feast(beast, dish) {
    return beast[0] == dish[0] && beast.split('').pop() == dish.split('').pop() ? true : false;
    }

    //best practice solution simply replaced .split() & .pop() with beast[beast.length-1]. So maybe my solution was just dogshit lite
