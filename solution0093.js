/*
--------------- 7 Kyu - Ce*s*r*d Strings ------------------

Instructions:

My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

Fortunately, I discovered that the virus hides my censored letters inside root directory.

It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

-------------
Sample Tests

describe("Ce*s*r*d Strings", function() {
  function test([infected, discovered, answer]) {
     it(`infected = \"${infected}\", discovered = \"${discovered}\"`, () => {
        assert.strictEqual(uncensor(infected, discovered), answer)
      })
  }
  
  describe("Example Tests", () => {
    let data = [
      ['*h*s *s v*ry *tr*ng*', 'Tiiesae', 'This is very strange'],
      ['A**Z*N*', 'MAIG', 'AMAZING'],
      ['xyz', '', 'xyz'],
      ['', '', ''],
      ['***', 'abc', 'abc']
    ];
    
    data.forEach(test);
  });
});


--------------
PREP

Parameters: 
    infected: A string interspersed with '*' characters
    discovered: A string of the characters that are supposed to be in place of the '*'s. 

Return: 
    String infected, with the '*'s replaced by the letters of string discovered, in that order. 

Example:
    uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"
    uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"
    uncensor("xyz", "") ➜ "xyz"

Psuedo Code:
-use a nested loop to iterate through infected and discovered, and a conditional to replace '*' with the characters of discovered

Lessons learned:
-I could not get this to work. As it turns out, the reason is that I was first looping through 'infected', while I needed to first loop through 'discovered', then nest the loop through ingected, then use the conditional.   
-also, I cannot reassign the parameters to parameter.split(''), they must be declared as different variables (is this due to scope?)
-after the expression that reassigns '*' to dis[i], a break statement is needed. (to stop the loop?)
-Othewise, on the right track.

-The most concise solution is listed and commented out below (Add to Anki)
*/

  function uncensor(infected, discovered) {
    let inf = infected.split('');
    let dis = discovered.split('');
    for (let i = 0; i <= dis.length; i++) {
      for (let j = 0; j <= inf.length; j++) {
        if (inf[j] === '*') {
          inf[j] = dis[i];
          break
        }
      }
    }
    return inf.join('');
  }

  function uncensor(infected, discovered) {
    //declare an array and assign it param discovered, with spread operator.
    const arr = [...discovered]
    //return infected as array, with spread operator.
    //map() the elements, and if the element is '*', replace it with the first element of the ...discovered array via arr.shift(). This works because .shift() not only removes and returns the first element of an array, but it also changes the length of the array. So each time it replaces a "*" element,  [..discovered] gets shorter, and the next 'first' element will be the correct on to replace the next '*' via .map(). 
    return [...infected].map(el => el === '*' ? arr.shift() : el).join('')
  }