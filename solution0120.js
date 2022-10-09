/*
--------------- 7 Kyu - Upper <body> Strength ------------------

Instructions:

Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(alexMistakes(10, 120), 3);
Test.assertEquals(alexMistakes(11, 120), 3);
Test.assertEquals(alexMistakes(3, 45), 2);
Test.assertEquals(alexMistakes(8, 120), 3);
Test.assertEquals(alexMistakes(6, 60), 2);
Test.assertEquals(alexMistakes(9, 180), 4);
  });
});

--------------
PREP

Parameters: 
    - numberOfKata: a number representing how many kata Alex must complete
    - timeLimit: a number representing how many minutes he has to complete them

Return: 
    -How many times Alex can fail at a Kata and still have enough time to complete the katas, if each failure causes 5 minutes of pushups, and each thereafter twice as long. Each kata takes Alex 6 minutes.

Example:
    -(10, 120) => 3
        -in order to do 10 kata, Alex needs 60 minutes ( 10 * 6 = 60).
        -There are 60 more minutes remaining for mistakes.
        - first mistake costs 5', the second 10', the third 20', the fourth 40'. The fourth mistake puts him over the 60 remaining minutes, so he can make three mistakes. 

Psuedo Code:
    -  declare & assign variables to hold time remaining after completing all kata, time cost of mistakes, and number of mistakes
        let timeRemaining = timeLimit - (numberOfKata * 6);
        let mistakeCost = 5
        let mistakes = 0
    
    - use while() loop to iterate through mistakes, subtracting time cost of each mistake from timeRemaining. Mistake time cost doubles with each iteration. 
        while (mistakeCost <= timeRemaining) {
	    mistakes++
	    timeRemaining -= mistakeCost
	    mistakeCost *= 2
    }
*/

function alexMistakes(numberOfKata, timeLimit){
  
    //  declare & assign variables to hold time remaining after completing all kata, time cost of mistakes, and number of mistakes
    let timeRemaining = timeLimit - (numberOfKata * 6);
    let mistakeCost = 5
    let mistakes = 0
    
    /*  -use while loop to iterate through mistakes(++) as long as the total time cost of  mistakes <= timeRemaining 
        -with each iteration, double the mistake cost (*=2) 
        -with each iteration, subtract mistakeCost from timeRemaining (-=) 
    */

    while (mistakeCost <= timeRemaining) {
	mistakes++
	timeRemaining -= mistakeCost
	mistakeCost *= 2
    }
    return mistakes
  }
  