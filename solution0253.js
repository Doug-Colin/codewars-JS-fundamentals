/*
--------------- 8 Kyu - Grasshopper - Grade book ------------------

Instructions:

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe('grade book', function () {
  it('should return an A', function () {
    Test.assertEquals(getGrade(95,90,93), 'A')
    Test.assertEquals(getGrade(100,85,96), 'A')
    Test.assertEquals(getGrade(92,93,94), 'A')
  })
  it('should return a B', function () {
    Test.assertEquals(getGrade(70,70,100), 'B')
    Test.assertEquals(getGrade(82,85,87), 'B')
    Test.assertEquals(getGrade(84,79,85), 'B')
    Test.assertEquals(getGrade(89,89,90), 'B') 
  })
    it('should return a C', function () {
    Test.assertEquals(getGrade(70,70,70), 'C')
    Test.assertEquals(getGrade(75,70,79), 'C')
    Test.assertEquals(getGrade(60,82,76), 'C')
  })
    it('should return a D', function () {
    Test.assertEquals(getGrade(65,70,59), 'D')
    Test.assertEquals(getGrade(66,62,68), 'D')
    Test.assertEquals(getGrade(58,62,70), 'D')
  })
    it('should return an F', function () {
    Test.assertEquals(getGrade(44,55,52), 'F')
    Test.assertEquals(getGrade(48,55,52), 'F')
    Test.assertEquals(getGrade(58,59,60), 'F')
  })
})

--------------
PREP

Parameters: 
    -s1, s2, and s3, grades to average out

Return: 
    -the letter grade corresponding to that average

Example:

    Numerical Score	        Letter Grade
    90 <= score <= 100	    'A'
    80 <= score < 90	    'B'
    70 <= score < 80	    'C'
    60 <= score < 70	    'D'
    0 <= score < 60	        'F'

Psuedo Code:
    -find average and save to variable

    -create Object to hold letter grades corresponding to possible first digits of average

    -return the letter grade by plugging that first digit into our Object as key and finding it's value


*/

//-------------------- Solution (without comments) -------------------------------------

function getGrade (s1, s2, s3) {
  
    const average = (s1+s2+s3)/3

    const Grades = {
      9:"A",
      8:"B",
      7:"C",
      6:"D",
    }
    
    return average > 99 ? 'A' : Grades[average.toString()[0]] || 'F'
  }

//-------------------- Solution (with comments) ----------------------------------------

function getGrade (s1, s2, s3) {
  
    //save average of 3 scores to variable
    const average = (s1+s2+s3)/3
    
    //create Object to store key:value pairs in format first digit of average:letter grade 
    const Grades = {
      9:"A",
      8:"B",
      7:"C",
      6:"D",
    }
    //use ternary statement to return 'A' if avg is over 99 (covering our svg of 100 edge case)
    //otherwise, convert average .toString() so we can grab the first digit ([0])
    //return the letter grade by finding the value of that digit's property in our Grades Object
    //use or statement (||) to return 'F' if that is not valid
    return average > 99 ? 'A' : Grades[average.toString()[0]] || 'F'
  }

//--------------- Best Practices / Lessons Learned -------------------------------------