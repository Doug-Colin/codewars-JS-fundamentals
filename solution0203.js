/*
--------------- 5 Kyu - Numbers that are a power of their sum of digits ------------------

Instructions:

The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 92 = 81

512 = 5 + 1 + 2 = 8 and 83 = 512

We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

-------------
Sample Tests

function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}
describe("Basic tests",function() {
    it("powerSumDigTerm",function() {
        testing(powerSumDigTerm(1), 81);
        testing(powerSumDigTerm(2), 512);
        testing(powerSumDigTerm(3), 2401);
        testing(powerSumDigTerm(4), 4913);
})})

--------------
PREP

Parameters: 
    -n, an integer representing the n-th term in a series of integers. The series integers, whose digits summed, equal the integer *when evaluated to an unknown power": 81, 516, 2401, 4913  

Return: 
    -the nth term of the series


Example:
    8 + 1 = 9 and 92 = 81

    512 = 5 + 1 + 2 = 8 and 83 = 512

Psuedo Code:
    -use for loop to loop through numbers, starting at 80, to 999999999. 

    -find sum of digits by stringifying and splitting the num, adding, and converting back to num if necessary
        -write separate sumDigits() function

    -use additional loop to evaluate powers until number^that power == itself
        -write separate seriesValid () function

    -put these nums into an array until array.length == n + n, break for loop
    
    -return final element of array
*/

//----------------- Solution- version with comments below -------------------------------------

function powerSumDigTerm(n) {

    let series =[]

    const sumDigits = (x) => x.toString().split('').reduce((a, b) => Number(a) + Number(b))
    
    for (let i = 100; i >= 2; i--) {
      for (let j = 2; j <= 10; j++) {
        if (i**j == sumDigits(i**j)**j) {
          series.push(i**j)
        }
      }
    }
    series.sort((a, b) => a - b)
    return series[n-1]
  }

  //-------------------------- Solution With Comments ------------------------------------

  function powerSumDigTerm(n) {
  
    //initialize empty array to hold numbers that meet the series criteria
    let series =[]
    
    //write function to find the sum of a numbers digits
    const sumDigits = (x) => x.toString().split('').reduce((a, b) => Number(a) + Number(b))
    
    
    //use for loop to decrement from 100 down to 2. These numbers (i) represent possible sums of digits.
    for (let i = 100; i >= 2; i--) {
      
      //on each decrement:
      //run another loop that increments from 2 through 10. These numbers (j) are powers we will evaluate i to.
      for (let j = 2; j <= 10; j++) {
        
        //check for series validity by checking:
        //if (i to the power of j) equals (the sum of it's own digits to the power of j)
        //if i is a valid number in our series, use .push() to add it to the series array
        if (i**j == sumDigits(i**j)**j) {
          series.push(i**j)
        }
      }
    }
    //sort the series array ascending
    series.sort((a, b) => a - b)
    
    //return the nth term in the series, which will be at index n-1.
    return series[n-1]
  }

  //----- Best Practices / Lessons Learned ---------------
  
  //The key to a problem always lies in the data available, the relationships between that data, which of that data you leverage in your solution. I think a good practice to add to my PREP/solutions template is, identify all data points available, identify relationships between them, and think about how you can approach the problem through each piece of data.        
  
  //-you may be able to make this more efficient by evaluating i**j via Math.pow(i, j) 
