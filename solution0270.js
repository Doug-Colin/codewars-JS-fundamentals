/*
---------------  Kyu - Fix your code before the garden dies! ------------------

Instructions:

You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(rainAmount(100), "Your plant has had more than enough water for today!")
Test.assertEquals(rainAmount(39), "You need to give your plant 1mm of water")
  });
});


--------------
PREP

Parameters: 
    -mm, the amount of mm of rain 

Return: 
    -the relevant string, interpolated with the amount of water needed, depending on whether rain >= 40mm 

Example:
    rainAmount(100), "Your plant has had more than enough water for today!"

Psuedo Code:
    -tried using interpolation with backticks but seems this challenge is not spec'd ES6?

    -anyway, declare a variable and assign amount of water needed 

    -use ternary to return relevant string, with variable concatenated if necessary


*/

//-------------------- Solution (without comments) -------------------------------------

function rainAmount(mm){

    const waterNeeded = 40-mm.toString()
    
    return mm >= 40 ? "Your plant has had more than enough water for today!" : "You need to give your plant "+ waterNeeded +  "mm of water"
    
  }

//-------------------- Solution (with comments) ----------------------------------------

function rainAmount(mm){
    //declare variable to hold value of water needed
    const waterNeeded = 40-mm.toString()
    
    //use ternary statement to return relevant string depending if mm is already >= 40 
    return mm >= 40 ? "Your plant has had more than enough water for today!" : "You need to give your plant "+ waterNeeded +  "mm of water"
    
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

