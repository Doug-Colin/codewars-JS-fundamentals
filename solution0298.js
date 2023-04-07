/*
--------------- 7 Kyu - Holiday III - Fire on the boat ------------------

Instructions:

Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Holiday III - Fire on the boat", () => {
  it("Fixed tests", () => {
    assert.strictEqual(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
    assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
    assert.strictEqual(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
  });
});

--------------
PREP

Parameters: 
    -s, a string

Return: 
    -the same string, or a copy of it, with all occurrences of word 'Fire' replaced with '~~'

Example:
    N/A

Psuedo Code:
    -.split() string by spaces into array of words

    -use .map, check if each element/word === 'Fire', if so return tildes, if not return word


*/

//-------------------- Solution (without comments) -------------------------------------

function fireFight(s){
   return s.split(' ').map(x => x === 'Fire' ? '~~' : x).join(' ')
  }

//-------------------- Solution (with comments) ----------------------------------------

function fireFight(s){
    //.split() string by spaces into words
    //using .map() & ternary, if any word exactly equals 'Fire', return tildes instead, otherwise return word
    //.join() back into single string and return
   return s.split(' ').map(x => x === 'Fire' ? '~~' : x).join(' ')
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

