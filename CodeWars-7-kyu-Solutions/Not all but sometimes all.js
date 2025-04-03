/*
Write
function remove(str, what)

that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. 

For example:
remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
// remove from 'this is a string' the first 1 't' and the first 2 i's.
remove('hello world',{'x':5, 'i':2}) === 'hello world'
// there are no x's or i's, so nothing gets removed
remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
// we don't have 50 a's, so just remove it till we hit end of string.
*/

function remove(str, what) {
  let result = "";
  const counts = {...what};

  for (let char of str) {
    if (counts[char]) {
      counts[char]--;
    } else {
      result += char;
    }
  }

  return result;
}

remove("this is a string", {t: 1, i: 2}); // "hs s a string"
remove("hello world", {x: 5, i: 2}); // "hello world"
remove("apples and bananas", {a: 50, n: 1}); // "pples d bnns"
remove("a", {a: 1, n: 1}); // ""
remove("codewars", {c: 5, o: 1, d: 1, e: 1, w: 1, z: 1, a: 1, r: 1, s: 1}); // ""
