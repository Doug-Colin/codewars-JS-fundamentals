/*
--------------- 7 Kyu - Covfefe ------------------

Instructions:

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.



-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", function(){
  it("Should pass fixed tests", function(){
    assert.strictEqual(covfefe("coverage"),"covfefe");
    assert.strictEqual(covfefe("coverage coverage"),"covfefe covfefe");
    assert.strictEqual(covfefe("nothing"),"nothing covfefe");
    assert.strictEqual(covfefe("double space "),"double space  covfefe");
    assert.strictEqual(covfefe("covfefe"),"covfefe covfefe");
    assert.strictEqual(covfefe("erag"),"erag covfefe");
  });
});

--------------
PREP

Parameters: 
    -str, a string

Return: 
    -if the string contains the word "coverage", return it with all instances replaced with "covfefe"
    -if the string doesn't, append "covfefe" ot the end of it, preceded by a space.   

Example:
    "coverage coverage" ---> "covfefe covfefe"

Psuedo Code:
    -use .test() and regex to check for coverage

    -if present, use .replaceAll() to replace it with "covfefe"

    -otherwise, append " covfefe" to str via .concat()


*/
//-------------------- Solution- version with comments below -------------------------------------

function covfefe(str){
    const regex = new RegExp("coverage")

    return regex.test(str) ? str.replaceAll("coverage", "covfefe") : str.concat(" covfefe")
  }


//-------------------------- Solution With Comments ------------------------------------
function covfefe(str){
  
    // create Regex for "coverage" using RegExp constructor, and save to variable
    const regex = new RegExp("coverage")
    
    //via ternary statement, check if str param contains "coverage" by passing our RegExp variable into the .test() method
    //if that returns true, meaning str contains our regex, return the necessary string via .replaceAll()
    //otherwise return the string with " covfefe" appended via .concat()
    return regex.test(str) ? str.replaceAll("coverage", "covfefe") : str.concat(" covfefe")
  }

//----- Best Practices / Lessons Learned ---------------
