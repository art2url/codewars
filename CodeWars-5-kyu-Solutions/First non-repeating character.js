/*
Description:
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
*/

function firstNonRepeatingLetter(s) {
  const lower = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return s[i];
    }
  }

  return '';
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
console.log(firstNonRepeatingLetter('aabbcc')); // ''
console.log(firstNonRepeatingLetter('GoHangASalamiImALasagnaHoG')); // ''
