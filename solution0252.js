/*
--------------- 5 Kyu - Extract the domain name from a URL ------------------

Instructions:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

-------------
Sample Tests

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})


--------------
PREP

Parameters: 
    -url, a url string 

Return: 
    -the domain name from the url string

Example:
    * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    * url = "https://www.cnet.com"                -> domain name = cnet"

Psuedo Code:
    -use the URL API:
        -assign url to variable
        -use new URL() constructor to create URL Object and assign to variable
        -use .hostname property to get domain name from URL object
        -use .replace() and regEx statement to grab domain only (may need to create dictionary Object)
        -return
*/

//-------------------- Solution (without comments) -------------------------------------

function domainName(url) {

    let scheme = "http://"

    if (url.slice(0, 4) !== "http") {
      url = scheme.concat(url)
    }

    let domain = (new URL(url))

    domain = domain.hostname 

    if (domain.slice(0, 4) == "www.") {
      domain = domain.replace("www.", "")
    }

    return domain.split('.')[0]
}

//-------------------- Solution (with comments) ----------------------------------------

function domainName(url) {
  
    //create variable to represent scheme in case it is missing from url
    //(new URL() object contstructor will not work without scheme)
    let scheme = "http://"
    
    //if parameter/url does not start with scheme, add it
    if (url.slice(0, 4) !== "http") {
      url = scheme.concat(url)
    }
      
    //use new URL() constructor to convert url to URL object, so we can use its .hostname property to simplify it  
    let domain = (new URL(url))
    
    //reassign domain to simplified hostname property
    domain = domain.hostname 
    
    //if domain.hostname starts with www, remove it via .replace() 
      //this is so it will always begin with the domain name, so that if we .split('.') it, the first element will be our answer
    if (domain.slice(0, 4) == "www.") {
      domain = domain.replace("www.", "")
    }
    
    //split.() domain.hostname into array by period char, and return first element
    return domain.split('.')[0]
}

//--------------- Best Practices / Lessons Learned -------------------------------------

//wow, this was a lot simpler...

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };