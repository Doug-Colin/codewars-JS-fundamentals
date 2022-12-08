/*
--------------- 7 Kyu - The Coupon Code ------------------

Instructions:

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
    assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
  });
});

--------------
PREP

Parameters: 
    -enteredCode and correctCode, strings representing the code the customer entered and the correct one, respectively
    -currentDate and expirationDate, strings representing the currrent date and the date coupon code expires 

Return: 
    -true if the coupon code is valid, otherwise false.  


Example:
    checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
    checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

Psuedo Code:
    -if (enteredCode == correctCode) {

    }

    -use date.parse() to compare currentDate and expirationDate.
        if (Date.parse(currentDate) > Date.parse(expirationDate)) {

        }

        **Note: Date.parse() is largely deprecated, so use the new Date() constructor instead. 
    
    -return true if both cases are true, otherwise return false


*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    //using ternary statement, check if codes match, and if expiration date is after current date 
    //if so return true, otherwise return false
    return enteredCode === correctCode && new Date(expirationDate) >= new Date(currentDate) ? true : false;
  }
