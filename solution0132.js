/*
--------------- 7 Kyu - Bumps in the Road ------------------

Instructions:

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Bumps in the Road", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");
  });
});

--------------
PREP

Parameters: 
    -a string representing bumps in a road, where '_' is smooth road and 'n' is a bump.

Return: 
    -The string 'Woohoo!' if there are fifteen bumps ('n') or less, otherwise 'Car Dead'.

Example:
    -("n") --> "Woohoo!"
    -("_nnnnnnn_n__n______nn__nn_nnn") --> "Car Dead" (this is because there are 16 bumps)

Psuedo Code:
    -Count the occurrences of 'n' in param
        -this can be done by declare variable 'counter' and assign it 0. 
        -use for...of loop to loop through letters of param
        -if letter is 'n', iterate counter
                let counter = 0;

                for (const letter of x) {
                if (letter == 'n') {
                    counter ++;
                }
                }

    -use ternary statement to return 'Wohoo!' : 'Car Dead' whether 'n' occurs 15 times, or more=
        - return (counter <= 15) ? 'Woohoo!' : 'Car Dead';

*/

function bump(x){
    //declare variable 'counter' and assign it 0.
    let counter = 0;
    
    //use for...of loop to loop through letters of param
    //if letter is 'n', iterate counter each time
    for (const letter of x) {
      if (letter === 'n') {
        counter ++;
      }
    }
    
    //use ternary statement to return 'Woohoo!' if 'n' occurs 15 or less times, otherwise return 'Car Dead'
    return (counter <= 15) ? 'Woohoo!' : 'Car Dead';
    
    }
