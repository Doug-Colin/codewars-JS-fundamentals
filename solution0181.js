/*
--------------- 7 Kyu - Sum of the first nth term of Series ------------------

Instructions:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(SeriesSum(1), "1.00")
Test.assertEquals(SeriesSum(2), "1.25")
Test.assertEquals(SeriesSum(3), "1.39")
Test.assertEquals(SeriesSum(4), "1.49")
  });
});


--------------
PREP

Parameters: 
    -n, representing the length of the specified series 

Return: 
    -the sum of the series


Example:
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

Psuedo Code:
    -declare variable to hold sum, assign 0

    -use for() loop to repeat action n times 

    -use addition-assignment update/reassign sum variable with total on each iteration


*/

function SeriesSum(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
  }
