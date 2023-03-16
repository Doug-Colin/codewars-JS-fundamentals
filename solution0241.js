/*
--------------- 7 Kyu - Largest 5 digit number in a series ------------------
<<<<<<< HEAD
Instructions:
Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
-------------
Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
=======

Instructions:

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    let number = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
    assert.strictEqual(solution(number), 99890, 'solution did not return correct value')
    assert.strictEqual(solution('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
    assert.strictEqual(solution("731674765"), 74765, 'Failed in overlapping test')
  });
});
<<<<<<< HEAD
--------------
PREP
Parameters: 
    -digits, a number in string form
Return: 
    -the sequence of five consecutive digits within the param string that represents the highest value
=======

--------------
PREP

Parameters: 
    -digits, a number in string form

Return: 
    -the sequence of five consecutive digits within the param string that represents the highest value

>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
Example:
    In the following 6 digit number: 283910
    
    91 is the greatest sequence of 2 consecutive digits.
<<<<<<< HEAD
    In the following 10 digit number: 1234567890
    67890 is the greatest sequence of 5 consecutive digits.
Psuedo Code:
    -.split()
=======

    In the following 10 digit number: 1234567890
    67890 is the greatest sequence of 5 consecutive digits.

Psuedo Code:

    -.split()

>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
    -use for loop or forEach() to iterate through 5 digit sequences of param string
    
    -declare variable and assign first 5 digit sequence
    
    -if 5 digit sequence is greater than variable, reassign variable to that sequence
    
    -return that sequence
<<<<<<< HEAD
=======


>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
*/

//-------------------- Solution - Didn't Work-------------------------------------
//this solution did not work, it returns 96345, when answer is 99890.
function solution(digits){

<<<<<<< HEAD
  let numbers = digits.split('')
  
  let initialSeq = Number(numbers.slice(0, 5).join(''))
  let greatestSeq = 0
  
  
  for (let i =0; i<numbers.length-4; i++) {
    let currentSeq = Number(numbers.slice(i, i+5).join(''))
    if (currentSeq > initialSeq) {
      greatestSeq = currentSeq
    }
  }

  return greatestSeq 
  }
=======
    let numbers = digits.split('')
    
    let initialSeq = Number(numbers.slice(0, 5).join(''))
    let greatestSeq = 0
    
    
    for (let i =0; i<numbers.length-4; i++) {
      let currentSeq = Number(numbers.slice(i, i+5).join(''))
      if (currentSeq > initialSeq) {
        greatestSeq = currentSeq
      }
    }

    return greatestSeq 
    }
>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e


//----- Best Practices / Lessons Learned ---------------
//Trying to understand why these solutions work, while mine doesn't

function solution(digits){
<<<<<<< HEAD
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}
//------------------------------------------
function solution(digits){
  let s = [];
  for (var i = 0; i < digits.length - 4; i++){
      s.push(digits.substr(i,5));
  };
  return Math.max(...s);
=======
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
  }
//------------------------------------------
  function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
}
//-------------------------------------------------

// questions:
//   • what is the minimum number of digits it can have?
// 
// considerations:
//   • Look out for BigO notation
//
// approaches
//   • use linear search
// 
// sudo code
//   return digits if less or equal than 5
//   save first 5 digits
//   loop with i starting as 0
//     get digit from i to i + 4
//     is current digits greater than previous?
//       replace greatest number with current digit
//     else, increment i and keep looking


function solution(digits){
<<<<<<< HEAD
  if (digits.length <= 5) return digits;
  
  let largestFiveDigitNumber = digits.slice(0, 5);
  for (let i = 5; i < digits.length; i++) {
    let currentFiveDigitNumber = digits.slice(i, i + 5);
    if (currentFiveDigitNumber > largestFiveDigitNumber) {
      largestFiveDigitNumber = currentFiveDigitNumber; 
    }
  }
  return Number(largestFiveDigitNumber);
}
=======
    if (digits.length <= 5) return digits;
    
    let largestFiveDigitNumber = digits.slice(0, 5);
    for (let i = 5; i < digits.length; i++) {
      let currentFiveDigitNumber = digits.slice(i, i + 5);
      if (currentFiveDigitNumber > largestFiveDigitNumber) {
        largestFiveDigitNumber = currentFiveDigitNumber; 
      }
    }
    return Number(largestFiveDigitNumber);
  }
>>>>>>> b15fe530ada36572d0ae9e3b6216a254d121536e
