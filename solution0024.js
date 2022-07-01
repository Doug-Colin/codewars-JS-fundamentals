// --------------------------- 6kyu - Compare Versions -----------------------------------------------

/*
----Instructions----

Karan's company makes software that provides different features based on the version of operating system of the user.

For finding which version is more recent, Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}
While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");       // returns true, while it should return false

Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

Help Karan write this function. Here are a few sample cases:

compareVersions("11", "10");                    // returns true
compareVersions("11", "11");                    // returns true
compareVersions("10.4.6", "10.4");              // returns true
compareVersions("10.4", "11");                  // returns false
compareVersions("10.4", "10.10");               // returns false
compareVersions("10.4.9", "10.5");              // returns false

----Pseudo Code----

/* Psuedo code

I fought this for a long time and should have just checked the answer. 

ANSWER:
-when you need to compare numbers with multiple decimal points, you can just split them by the decimal point using split('.').
-remember though, it's still an array of strings, so convert the strings to #'s'
-we can do this by by using .map(Number) on the split array
-now that we have an array of numbers, we can iterate through it.
-we can't iterate through two arrays at once, but we can use Math.max() to stop iterating at the length of the longest array: (Math.max(array1.length, array2.length))
-so we create a for loop, and inside it...
*/


const compareVersions = (v1, v2) => {
    const a1 = v1.split('.').map(Number);
    const a2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
      let n1 = a1[i] || 0, n2 = a2[i] || 0;
      if (n1 === n2) continue;
      return (n1 > n2) ? true : false;
    }
    return true;
  };


//   Alternate solutions 

function compareVersions (version1, version2) {
    version1 = version1.split('.').map(e=>+e);
    version2 = version2.split('.').map(e=>+e);
    
    const limit = Math.min(version1.length, version2.length);
    
    for (let i=0; i<limit; ++i) {
      if (version1[i] < version2[i]) { return false; }
      if (version1[i] > version2[i]) { return true;}
    }
    
    if (version1.length > limit || version2.length === limit) { return true; }
    return false;
  }