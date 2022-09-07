/*

*String Methods Series*

--------------- 8 Kyu - Remove String Spaces ------------------

Instructions:

Simple, remove the spaces from the string, then return the resultant string.



-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});

--------------
PREP

Parameters: a string

Return: the string with spaces removed

Example: '8 j 8   mBliB8g  imjB8B8  jl  B' => '8j8mBliB8gimjB8B8jlB'

Psuedo Code:
-replaceAll(/\s/g, '');
-we, that didn't work and neither did replaceAll(' ', ''), so I guess this challenge was written before ES6
-try .split(' ').join('')

Lessons learned:
x.replace(regex, '') was in the solutions. So perhaps 
*/

function noSpace(x){
    return x.split(' ').join('');
    }