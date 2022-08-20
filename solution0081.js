/*
--------------- 7 Kyu - Two to One ------------------

Instructions:

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

-------------
Sample Tests

describe("longest",function() {
it("Basic tests",function() {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
})})

--------------

Psuedo Code:
-combine strings and put into new Set
    new Set(s1 + s2)
-instructions ask to return a sort()ed array
    .sort()
-Set creates array of individual unique characters, so join('') them

*/

function longest(s1, s2) {
    let unique = [...new Set(s1 + s2)];
    return unique.sort().join('');
  }