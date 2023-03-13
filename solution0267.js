/*
--------------- 8 Kyu - L1: Bartender, drinks! ------------------

Instructions:


Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

  });
});


--------------
PREP

Parameters: 
    -param, a string

Return: 
    -the corersponding string to the input, according to the given dictionary of values

Example:
    ("jabrOni")--> "Patron Tequila"

Psuedo Code:
    -use object to hold dictionary as key-value pairs

    -use ternary to return object[param.toLowerCase()] : "Beer"


*/

//-------------------- Solution (without comments) -------------------------------------

function getDrinkByProfession(param){
  

    param = param.toLowerCase()
    

    let drinkDict = {
      "jabroni" :	"Patron Tequila",
      "school counselor": "Anything with Alcohol",
      'programmer' : "Hipster Craft Beer",
      'bike gang member' : "Moonshine",
      "politician" : "Your tax dollars",
      "rapper" : "Cristal",
    }

    return drinkDict[param] || "Beer"
  }

//-------------------- Solution (with comments) ----------------------------------------

function getDrinkByProfession(param){
  
    //convert param string to lowerCase
    param = param.toLowerCase()
    
    //use Object as dictionary, defining key-value pairs as param : return value
    let drinkDict = {
      "jabroni" :	"Patron Tequila",
      "school counselor": "Anything with Alcohol",
      'programmer' : "Hipster Craft Beer",
      'bike gang member' : "Moonshine",
      "politician" : "Your tax dollars",
      "rapper" : "Cristal",
    }
    //return correct string by passing param into drinkDict Object, or (if param differs), return "Beer"
    return drinkDict[param] || "Beer"
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

