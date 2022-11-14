/*
--------------- 6 Kyu - Who won the election? ------------------

Instructions:

In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

A candidate will win this election if he has the absolute majority.

Your Task
Return the name of the winner. If there is no winner, return null (in Java and JavaScript), None (in Python), nil (in Ruby), or * in C.
Task Description
There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD".

There are no spoiled ballots.

The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

A name wins the election if it gets more than n/2 votes (n = number of all votes, i.e. n is equal to the size of the given list).

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Who won the election", function() {  
  it("Test 01", function() {
    Test.assertEquals(getWinner(["A"]), "A", "\"A\" expected");
  });
  it("Test 02", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "B", "B", "A"]), "A", "\"A\" expected");
  });
  it("Test 03", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "B", "B"]), null, "NULL expected");
  });
  it("Test 04", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "C", "B"]), null, "NULL expected");
  });
  it("Test 05", function() {
    Test.assertEquals(getWinner(["A", "A", "B", "B", "C"]), null, "NULL expected");
  }); 
});

--------------
PREP

Parameters: 
    -listOfBallots, an array  of characters wherein each character occurrence represents a vote for a candidate

Return: 
    -the winner via supermajority, or candidate/char with > 50% of votes (> list.length/2). If qty is tied, return null.


Example:
    //3 votes for "A", 2 votes for "B" -> "A" wins the election
    getWinner(["A", "A", "A", "B", "B"]) === "A" //true
    //2 votes for "A", 2 votes for "B" -> No winner
    getWinner(["A", "A", "B", "B"]) === null //true
    //1 vote for each name -> No winner
    getWinner(["A", "B", "C", "D"]) === null //true
    //3 votes for "A", 2 votes for "B", 1 vote for "C"  
    //-> No winner ("A" does not have more than n/2 = 3 votes)
    getWinner(["A", "A", "A", "B", "B", "C"]) === null //true

Psuedo Code:
    -count the number of occurrences of each element and store them as key value pairs in an Object via .forEach()

    -Use Object.keys() to crate an array of an Object's properties so we can use array methods on it
    
    -.filter() the Object.keys() array for a winner, or a vote count > listOfBallots.length/2

    -return the filtered arrays element, otherwise null


*/


function getWinner(listOfBallots) {
  
    console.log(listOfBallots)
    // declare empty Object to hold key:value pairs of candidates:count 
    let tally = {};
    
    //use .forEach() it iterate over listOfBallots array
    //Count the occurrences of each element in the array and store them in the tally Object 
    listOfBallots.forEach(function(candidate) {
        tally[candidate]++ || (tally[candidate] = 1);
      });
    
    //Use Object.keys() to create an array of an Object's keys so can use array methods on them, to more easily iterate through the Object 
    const keys = Object.keys(tally)
    
    //.filter() the keys array for a value > half the votes, and store in variable solution
    let solution = keys.filter(key => tally[key] > listOfBallots.length / 2)
    
    //return the filtered arrays first element, which should be the winner if there is one.
    //otherwise return null
    return solution[0] || null;
  
  }