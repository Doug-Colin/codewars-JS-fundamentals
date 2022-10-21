
/*
--------------- 7 Kyu - Transportation on vacation ------------------

Instructions:

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Regular Tests:", function() {
  it("Should work for under 3 days:", function() {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });
  
  it("Should work for under 7 days:", function() {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });
  
  it("Should work for 7 or more days:", function() {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);    
  });
});

--------------
PREP

Parameters: 
    -d, the number of days the car is rented

Return: 
    -the price of the rental depending on the 3 and 7 day discounts


Example:
    (rentalCarCost(6), 220)
    (rentalCarCost(7), 230)

Psuedo Code:
    -if ... else if ... else statement for the three price conditions 


*/


function rentalCarCost(d) {
    if (d < 3) {
      return d * 40
  } else if (d >= 7) {
      return d * 40 - 50
  } else {
    return d * 40 - 20
  }
    }

