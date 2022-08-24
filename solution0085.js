/*
--------------- 7 Kyu - Regex validate PIN code ------------------

Instructions:

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false

-------------
Sample Tests

describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
});

--------------
PREP

Parameters: a string of exactly four or six digits, no letters.

Return: true if string.length is 4 || 6, && if characters match /[0-9]/

Example: 
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Psuedo Code:
-use conditional to return true if string.length === 4  && string.match(/[0-9]/) == true; or the same with length 6, otherwise false
- I know there has to be a more concise way to do this; ternary with || is not working

Lessons Learned:
-you specify how many of a character you want to match with regex, and also use | as 'or' 
-/^\d{4}$/ means 'from start to end, exactly four occurences of the previous specified character (\d means digits 0-9 of course)
- /(^\d{4}|\d{6})$/ means 'from start to end, exactly foure occurrences of digits or exactly 6 occurences of digits
*/

function validatePIN (pin) {
    let length = pin.length;
    let digits = /^\d*$/g.test(pin);
    
  if (length === 4 && digits === true) {
    return true
  } else if (length === 6 && digits === true) {
    return true
  } else {
    return false
  }
    

  }