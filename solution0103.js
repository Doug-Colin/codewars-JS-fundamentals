/*
--------------- 7 Kyu - Adding Arrays ------------------

Instructions:

Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]

The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]),"Just Live Life Man");

Test.assertEquals(arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]), "The Mitochondria is the powerhouse of the cell");
  });
});


--------------
PREP

Parameters: An array of nested arrays, wherein each element of the nested arrays is a letter.

Return: A string that is a sentence formed from the letters of the nested arrays, wherein each word is formed by elements of identical indices, in the given order. 

Example:

['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]),   ==> "Just Live Life Man");

Psuedo Code:
-create an empty array to accept the solution (solution = [];)

-loop through the nested arrays, mapping & push()ing each element of the same index to the index of the solution/sentence array
    -the parameter array will contain as many elements as there are words to the solution sentence. So you may not need to build a solution array; you can simply transform/mutate the original array.  

-conditonal, if element is a space (' '), move on to next index. 

Results:

-Was close with the nested loops but couldn't get it to work.

-Ended up looking up how to rotate an array in order to rearrange the various sub-indices into the correct words; then using ,map() and .join() again to finalize solution.

See alternate answer below for explanation of for each approach.
*/

function arrAdder(arr) {
    const solution = arr[0].map((element, index) => arr.map(x => x[index]));
    let sentence = solution.map(x => x.join(''));
    return sentence.join(' ');
  }

//   -----------------------------------------

function arrAdder(arr) {
    var sentence = "";
    for(var i = 0; i < arr[0].length; i++){
      for(var j = 0; j < arr.length; j++){
        sentence+=arr[j][i];
      }
      sentence+=" ";
    }
    return sentence.trim();
  }