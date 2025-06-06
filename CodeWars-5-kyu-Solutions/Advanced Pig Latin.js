/*
Pig latin is created by taking all the consonants before the first vowel (for the purposes of this kata, a "vowel" is any letter from the set a, e, i, o, u) of a word and moving them to the back of the word followed by the letters "ay".
"hello" => "ellohay"
"creating" => "eatingcray"

If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
"algorithm" => "algorithmway"

If a word has no vowels, just append "ay" to the end of it.
"gym" => "gymay"

This problem is different from other variations in that it expects casing to remain the same so:
"Hello World" => "Ellohay Orldway"

as well as punctuation (for the purposes of this kata, "punctuation" includes ,, ., !, ?, :, ;).
"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

Numbers should be left as-is.
"0875568" => "0875568"

Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.
*/

function translate(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return sentence
    .split(/\b/)
    .map((token) => {
      if (!/[a-zA-Z]/.test(token)) return token; // Skip non-words

      const isCap = token[0] === token[0].toUpperCase();
      const word = token.replace(/[^a-zA-Z]+$/, ''); // Remove end punctuation
      const punc = token.slice(word.length); // Save punctuation
      const lower = word.toLowerCase();

      let pig = '';
      if (vowels.includes(lower[0])) {
        pig = lower + 'way';
      } else {
        const vi = [...lower].findIndex((c) => vowels.includes(c));
        pig =
          vi === -1
            ? lower + 'ay'
            : lower.slice(vi) + lower.slice(0, vi) + 'ay';
      }

      if (isCap) pig = pig[0].toUpperCase() + pig.slice(1); // Restore cap
      return pig + punc;
    })
    .join('');
}

console.log(translate('hello')); // "ellohay"
console.log(translate('hello world')); // "ellohay orldway"
console.log(translate('Hello World')); // "Ellohay Orldway"
console.log(translate('Pizza? Yes Please!!')); // "Izzapay? Esyay Easeplay!!"
console.log(translate('How are you?')); // "Owhay areway ouyay?"
console.log(translate('0875568')); // "0875568"
console.log(translate('cnsnts')); // "cnsntsay"
