/*
--------------- 8 Kyu - Calculate BMI ------------------

Instructions:

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(bmi(80, 1.80), "Normal");
  });
});


--------------
PREP

Parameters: 
    -weight and height, two numbers

Return: 
    -the message corresponding to the value of bmi

Example:
N/A

Psuedo Code:
    -declare/find bmi

    -use Object's key-value pairs as dictionary for messages

    -use Object.keys to create array of keys

    -pass correct value from array into Object to return message
*/

//-------------------- Solution (without comments) -------------------------------------

function bmi(weight, height) {

    const bmi = weight / height**2
    const results = {
      "18.5" : "Underweight",
      "25.0" : "Normal",
      "30"   : "Overweight",
      "800"  : "Obese",
      "2500" : "Jabba The Hut"
      }

    const keys = Object.keys(results).sort((a,b) => a - b)

    return results[keys.find(x => x >= bmi)]
}

//-------------------- Solution (with comments) ----------------------------------------

function bmi(weight, height) {
    //save bmi to variable
    const bmi = weight / height**2
    
    //use key-value properties of an Object to create a dictionary of results
    const results = {
      "18.5" : "Underweight",
      "25.0" : "Normal",
      "30"   : "Overweight",
      "800"  : "Obese",
      "2500" : "Jabba The Hut"
      }
    //use Object.keys to create an array of results' keys, sorted ascending
    const keys = Object.keys(results).sort((a,b) => a - b)
    
    //use keys.find() to return the first key that is >= bmi, and pass it into results Object to get corresponding value 
    return results[keys.find(x => x >= bmi)]
}

//--------------- Best Practices / Lessons Learned -------------------------------------

//I was wondering if you could use a series of ternary statements, looks like you can:

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
            