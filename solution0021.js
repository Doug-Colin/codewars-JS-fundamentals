// ////////////// 7kyu Square Every Digit  ////////////
/**
 * Instructions 
 *
 * In this kata, you are asked to square every digit of a number and concatenate them.
 * 
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 * 
 * Note: The function accepts an integer and returns an integer
 * 
 * ---------------------------------------------------------------------------------------------------------
 *
 *  Sample Tests
 *  
 *  const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})
 */ 

/* Pseudo Code:
    convert number to string
    split number into individual characters via .split()
    use map() to square each element of that array
    use .join() to combine results
    convert array num? (y => parseInt())
    return  
*/
// let num = 9119


    function squareDigits(num){
        return (parseInt(num.toString().split('').map( x => x * x ).join('')));
      }
  

 