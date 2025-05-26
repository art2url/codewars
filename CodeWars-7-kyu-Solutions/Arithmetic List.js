/*
Description:
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
*/

function seqlist(first, c, l) {
  return Array.from({length: l}, (_, i) => first + i * c);
}

console.log(seqlist(0, 1, 5)); // [0, 1, 2, 3, 4]
console.log(seqlist(2, 2, 4)); // [2, 4, 6, 8]
console.log(seqlist(10, -2, 5)); // [10, 8, 6, 4, 2]
