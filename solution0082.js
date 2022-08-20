/*
--------------- 7 Kyu - Printer Errors ------------------

Instructions:

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

-------------
Sample Tests

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})

--------------
PREP

Parameters: string (s), one char. or longer, letters a-z only. Each occurence of letters other than a-m is an error.

Return: string, representing a fraction, errors/param.length.

Example: Parameter "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz" should return string "3/56", because there are three non [a-m] letters in the string, and the string.length is 56.

Psuedo Code:
-use regex s.match(/[^a-m]/gm) to find an array of letters not a-m, all occurrences (g), case insensitive (i)
-s.match(/[^a-m]/gi).length is numerator
-s.length is denomitor
-return template literal `${s.match(/[^a-m]/gm).length}/${s.length}`;

Issues/Lessons Learned:
- if .match(/regex/) find no matches, it returns null, not zero.  
-My solution worked, but there's a much more concise version, below. 
*/

function printerError(s) {
 
    let errors = !s.match(/[^a-m]/gi) ? 0 : s.match(/[^a-m]/gi).length
   
    return(`${errors}/${s.length}`)
  }

//   ------------------------

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// numerator here is ther amount of errors, determined by the length of the string after non-error caharacters a-m are removed