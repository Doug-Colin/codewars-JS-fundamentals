/*
--------------- 5 Kyu - String incrementer ------------------

Instructions:

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

-------------
Sample Tests

describe("Tests suite", () => {

  const { assert } = require('chai');

  function doTest(input, expected) {
    const actual = incrementString(input);
    assert.strictEqual(actual, expected, `for string: "${input}"\n`);
  }

  it("sample tests", () => {
    doTest("foobar000", "foobar001");
    doTest("foobar999", "foobar1000");
    doTest("foobar00999", "foobar01000");
    doTest("foo", "foo1");
    doTest("foobar001", "foobar002");
    doTest("foobar1", "foobar2");
    doTest("1", "2");
    doTest("009", "010");
    doTest("fo99obar99", "fo99obar100");
  });
});

--------------
PREP

Parameters: 
    -strng, a string 

Return: 
    -if a string already ends with a number, the same string incremented by 1
    -if the string doesn't end in a number, the number1 should be appended to the new string. 

Example:
    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

Psuedo Code:
    -find out if the string ends with a number
        -if (Number(str.charAt(str.length - 1))) No good!
        -if (/\d/.test(str.charAt(str.length-1)))
    
    -if string ends with a number
         split string into an array of letters and numbers via regex 
            const split = str.split(/(\d+)/).slice(0, -1)

         grab the end of the array so we can iterate it
            const nums = split.pop()


         join the parts of the string we wont increment
            const nonIncremented = split.join('')

        increment the number by converting it to an integer, adding 1, and converting back to string
            const increment = (parseInt(nums)+1).toString()

        format the number correctly by removing the length of the incemented num from the nums at the end of the array,
        and joining the incremented num to it
            const incremented = nums.slice(0, -increment.length) + increment

        return the nonIncremented part of hte string and the incremented part
            return nonIncremented + incremented
    -if the string doesn't end in a number, append 1 to the string, and return it. 


*/

function incrementString (str) {
    //if string ends with a number
    if (/\d/.test(str.charAt(str.length-1))) {
        
        //split string into an array of letters and numbers via regex, and remove the empty string at the end
        const split = str.split(/(\d+)/).slice(0, -1)
        
        //grab the end of the array so we can iterate it
        const nums = split.pop()
        
        //join the parts of the string we wont increment
        const nonIncremented = split.join('')
        
        //increment the number by converting it to an integer, adding 1, and converting back to string
        const increment = (parseInt(nums)+1).toString()
        
        // format the number correctly by removing the length of the incemented num from the nums at the end of the array,
        //and joining the incremented num to it
        const incremented = nums.slice(0, -increment.length) + increment
        
        //return the nonIncremented part of the string joined to the incremented part
        return nonIncremented + incremented
      
    } else {
        //if string doesn't end in a number, return string with 1 appended 
        return str + "1";
    }
  }