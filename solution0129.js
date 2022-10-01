/*
--------------- 7 Kyu - Remove anchor from URL ------------------

Instructions:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })

--------------
PREP

Parameters: 
    -a string/url

Return: 
    -the string/url with the '#' and everything after removed, or if there is no '#', the string/url as is

Example:
    -"www.codewars.com#about" --> "www.codewars.com"
    -"www.codewars.com?page=1" -->"www.codewars.com?page=1"

Psuedo Code:
    -first, find whether or not there is a #, and index of it.
        -use url.indexOf('#')
        -.indexOf returns -1 if char. is not present
    
    -use conditional & .slice() to return url with '#...' sliced off, or if '#' not present, return url as is.

        if (url.indexOf('#') > 0) {
            return url.slice(0, url.indexOf('#'));
        } else {
            return url;
        }
 
*/

function removeUrlAnchor(url){
    if (url.indexOf('#') > 0) {
      return url.slice(0, url.indexOf('#'));
    } else {
    return url;
    }
  }

  //-------------- refactored -----------------------
  
  function removeUrlAnchor(url){
    return url.indexOf('#') > 0 ? url.slice(0, url.indexOf('#')) : url;
  }