/*
Description:
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:
In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
  
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

function firstDup(s) {
  const indexMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in indexMap) {
      indexMap[char].count += 1;
    } else {
      indexMap[char] = {index: i, count: 1};
    }
  }

  let firstRepeatingChar = undefined;
  let minIndex = s.length;

  for (const [char, info] of Object.entries(indexMap)) {
    if (info.count > 1 && info.index < minIndex) {
      minIndex = info.index;
      firstRepeatingChar = char;
    }
  }

  return firstRepeatingChar;
}

firstDup('tweet'); // 't'
firstDup('like'); // undefined
firstDup('Ode to Joy'); // ' '
firstDup('ode to joy'); // 'o'
firstDup('123123'); // '1'
firstDup('!@#$!@#$'); // '!'
firstDup('tweet'); // 't'
firstDup('like'); // undefined
firstDup('translator'); // 't'
firstDup('123123'); // '1'
