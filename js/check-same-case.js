/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b){
    if (a.toUpperCase() !== a.toLowerCase() && b.toUpperCase() !== b.toLowerCase()) {
      if ((a.charCodeAt(0) < 96 && b.charCodeAt(0) < 96) || (a.charCodeAt(0) > 96 && b.charCodeAt(0) > 96)) return 1;
      else return 0;
    }
    return -1;
  }

  alert(sameCase('a', '1'));