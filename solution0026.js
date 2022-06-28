/*
--------------- 7 Kyu - Hëävÿ Mëtäl Ümläüts ------------------
Instructions:

Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff

--------------

Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Example tests',() =>{
  it("Tests", () => {
    assert.strictEqual(heavyMetalUmlauts("Announcing the Macbook Air Guitar"), "Ännöüncïng thë Mäcböök Äïr Güïtär");
    assert.strictEqual(heavyMetalUmlauts("Facebook introduces new heavy metal reaction buttons"), "Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns");
    assert.strictEqual(heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring"), "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng");
    assert.strictEqual(heavyMetalUmlauts("Vegan Black Metal Chef hits the big time on Amazon TV"), "Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV");
  })
})

--------------

Psuedo Code:
-Tried a few approaches via replace() & replaceAll(), and regEx, without success
-Need to declare an object literal with key:value pairs (properties) representing all of the corresponding conversion values
-return the parameter we're replacing characters in, with the .replace() method, and a regular expression citing the characters that need to be replaced, with a global flag to replace all of them 
 */




function heavyMetalUmlauts(boringText) {

    var umlauts = {  //create ca conversion 'dictionary' by declaring an object literal with key:value pairs representing our conversions 
      'A' : 'Ä',    'E' : 'Ë',    'I' : 'Ï',
      'O' : 'Ö',    'U' : 'Ü',    'Y' : 'Ÿ',
      'a' : 'ä',    'e' : 'ë',    'i' : 'ï',
      'o' : 'ö',    'u' : 'ü',    'y' : 'ÿ'
    }
  
    return boringText.replace(/[AEIOUYaeiouy]/g, x => umlauts[x] || "");  

    //.replace() is a method that functions as follows: string.replace(searchValue, newValue) or str.replace(regExMatches, replaceWith )
    
    //The first parameter, '/[...]/g', is a regular Expression specifying the characters we want to match between the square brackets ('g' is global tag, so that it matches all occurrences as opposed to initial occurrence). If the regEx seems confusing, know that it's basically the same as saying 'A' || 'E' || 'I' ...
    
    //The second parameter is an arrow callback, wherein param 'x' represents each matched character, and 'umlauts[x]' represents the value of each characters key:value pair. 
    
    //I don't understand exactly why the || "" is necessary- consult discord. 
  }