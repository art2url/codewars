/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  if (str.length % 2 !== 0) str += '_';
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + str[i + 1]);
  }
  return result;
}

console.log(solution('abcdef')); // ➞ ['ab', 'cd', 'ef']
console.log(solution('abcdefg')); // ➞ ['ab', 'cd', 'ef', 'g_']
console.log(solution('abc')); // ➞ ['ab', 'c_']
console.log(solution('a')); // ➞ ['a_']
console.log(solution('')); // ➞ []
