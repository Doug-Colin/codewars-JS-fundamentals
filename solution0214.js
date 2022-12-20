/*
--------------- 7 Kyu - Survive the attack ------------------

Instructions:

Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
  it("Basic Tests", function() {
    assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
    assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
    assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
    assert.strictEqual(hasSurvived([1, 2, 3], []), false);
    assert.strictEqual(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);
  });
});

--------------
PREP

Parameters: 
    -attackers, an array representing soldies and their power by index
    -defenders, ""  

Return: 
    -true if the defending side has more survivors than the attacking
    -otherwise false


Example:
    attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
    //0 survivors                4 survivors
    //return true


    attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
    //2 survivors  (16 damage)   2 survivors (6 damage)
    //return false

    attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
    //1 survivors                3 survivors 
    //return true


Psuedo Code:
    -If the value is the same they both perish
    -If one of the values is empty(different array lengths) the non-empty value soldier survives.
    -If there's the same number of survivors in both sides, the winner is the team with the highest total initial attack power (if attack power is equal return true).
    
    -need to compare arrays by index.
    -

*/
//-------------------- Solution- version with comments below -------------------------------------
let attackers = [ 1, 3, 5, 7 ]   
let defenders = [ 2, 4, 6, 8 ]

const totalPower = (x) => x.reduce((a, b) => a + b) 
const attackTotal = totalPower(attackers)
const defendTotal = totalPower(defenders)
console.log(attackTotal)
console.log(defendTotal)


for (let i = 0; i < attackers.length; i++) {
  for (let j = 0; j < defenders.length; j++) {
    //comparing in here seems annoying, may be best off using map, so you can return values?
    //I think best approach is to create an object that is prop-val of attackVal:defendVal. Then iterate through object comparing'
    //ALternately, create sub arrays, index0, index 1, replacing lower or eqaul vals with 0, and if only one val, making other val 0. then compare lengths of arrays with 0's fuiltered out. 
  }
}

Math.max(1, 5)
Math.max(1, 1)

//first I need to compare values
//if value are higher, leave higher element alone
//if value is lower, turn to 0
//if value is equal turn both to zero
//filter arrays to remove zeros
//you now have survivor arrays
//compare lengths of survivor arrays
//if defenders is longer, return true
//if lengths are equal, compare sums of original array via reduce (do with variable earlier to save), and return true if defenders is greater, or if they;re equal
//

//-------------------------- Solution With Comments ------------------------------------


//----- Best Practices / Lessons Learned ---------------
