/*
--------------- 7 Kyu - Leap Years ------------------

Instructions:

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them

-------------
Sample Tests

describe('leap year', function() {
  it('should detect leap years', function() {
    Test.assertEquals(isLeapYear(1234), false, 'Year 1234');
    Test.assertEquals(isLeapYear(1984), true, 'Year 1984');
    Test.assertEquals(isLeapYear(2000), true, 'Year 2000');
    Test.assertEquals(isLeapYear(2010), false, 'Year 2010');
    Test.assertEquals(isLeapYear(2013), false, 'Year 2013');
  });
});

--------------
PREP

Parameters: 
    -year, a positive integer

Return: 
    -true if the year is divisible by 4, but not if its divisible by 100, unless it is divisible by 400. 


Example:
    see sample tests

Psuedo Code:
    -use ternary and parentheses to return true if year meets first conditions, or the third condition.
    


*/

//-------------------- Solution (without comments) -------------------------------------

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

//-------------------- Solution (with comments) ----------------------------------------

function isLeapYear(year) {
    //if year is divisible by 0 and not divisible by 100, OR it is divisble by 400, return true.
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

