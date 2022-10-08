/*
--------------- 6 Kyu - Convert string to camel case
 ------------------

Instructions:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

});
});

--------------
PREP

Parameters: 
    -a string of letters of words, possibly separated by '-' or '_'  

Return: 
    -the string converted to camelCase or UpperCamelCase (first letter also cap.)

Example:
    -"the-stealth-warrior" gets converted to "theStealthWarrior"
    -"The_Stealth_Warrior" gets converted to "TheStealthWarrior" 

Psuedo Code:
    -split() string by character '-' or '_' using regex, so we can remove the delimiters and map() it as an array

    -use .map & conditional to return all array words except the first, with their first letter .toUpperCase via .replace()

    -join('') back into string and return
*/



function toCamelCase(str){
  // split() string by character '-' or '_' using regex, to remove those characters and be able to map() as array
  // .map() array, using ternary to return all array words except the first,
  //  with their first letter .toUpperCase via .replace()
  // join('') back into string and return

 return str.split(/-|_/).map(function (element, index) {
    return index > 0 ? element.replace(element[0], element[0].toUpperCase()) : element;
    }).join('')
}
