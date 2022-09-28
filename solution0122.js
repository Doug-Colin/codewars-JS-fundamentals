/*
--------------- 6 Kyu - ? ------------------

Instructions:

was working on this challenge and had internet problems. Cannot access codewars, but I believe I've solved it.

Challenge was basically 'if the given string is camelCase, return the string with a space before the capital letter. Otherwise return the string as is"

-------------
Sample Tests



--------------
PREP

Parameters: 
    -a string

Return: 
    -if the string is camelCase, return the string with a space before the capital letter
    -otherwise return the string as-is

Example:
    -
    -

Psuedo Code:
    -I initially tried to do this by:
        -declare/assign variables that:
            1) split the string so we can access it as an array
            2) find if there is a capital letter via regex
            3) hold an empty number value as 'target' so we can reassign it to the index of the Capital letter.

        -then , if (!capital), return string as is.
        
        -else, loop through array of split string, find index of Capital letter, and reassign variable target to that number.

        -now we can use split.splice(target, 0, ' ') to insert a space before the capital letter. 

        -we can then join('') and return that as solution.  

        This is obviously a verbose solution. I tried it many other ways (accessing index of Capital letter via object notation for the object returned by string.match(/[A-Z]/)), but no matter what, ran into issues. 
        
        Interested to see what the top solutions are after my internet or codewars are functioning again.  

*/


let string = 'camelCase'
let split = string.split('')
let capital = string.match(/[A-Z]/) 
let target = 0

if (!capital) {
  console.log(string)
} else {
	for (let i = 0; i <= string.length - 1; i++) {
  	if (split[i] == split[i].match(/[A-Z]/)) {
    	target = i
  	}  
	}  
}

split.splice(target, 0, ' ')
console.log(split.join(''))