/*
--------------- 8 Kyu - Grasshopper - Messi Goals ------------------

Instructions:

Messi's Goal Total
Use variables to find the sum of the goals Messi scored in 3 competitions

Information
Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Task
Create these three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("total goals", function(){
    it ("should equal the total", function () {
      Test.assertEquals(totalGoals, 58)
    })
})

--------------
PREP

Parameters: 
    -non, challenge is simply variable assignment

Return: 
    -nothing, but assign thevalues to corresponding variable names and create sum of all variables as totalGoals 

Example:
    n/a

Psuedo Code:
    -assign the values and sum to corresponding variables using addition operator
*/

//-------------------- Solution (without comments) -------------------------------------

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//-------------------- Solution (with comments) ----------------------------------------

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//--------------- Best Practices / Lessons Learned -------------------------------------